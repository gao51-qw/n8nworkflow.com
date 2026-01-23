import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DATA_DIR = path.join(__dirname, '../public/data/workflows');
const VIEWER_PATH = path.join(__dirname, 'workflow-viewer.html');
const FAILED_LOG_PATH = path.join(__dirname, 'failed-workflows.txt');

// 并发数，根据机器性能调整
const CONCURRENCY = 5;
// 是否强制重新生成
const FORCE_REGENERATE = process.argv.includes('--force');

// 失败的工作流ID列表
const failedWorkflows = [];

async function setupPage(browser) {
  const page = await browser.newPage();
  
  // 设置 User-Agent
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  // 监听控制台日志
  page.on('console', msg => {
    const text = msg.text();
    if (msg.type() === 'error') {
      console.log(`  [Browser Error] ${text}`);
    } else if (text.includes('render') || text.includes('n8n') || text.includes('Extract') || text.includes('nodes')) {
      console.log(`  [Browser Log] ${text}`);
    }
  });

  // 增加协议超时时间
  await page.setDefaultNavigationTimeout(60000);
  await page.setDefaultTimeout(60000);
  
  // 设置视口
  await page.setViewport({ 
    width: 1200, 
    height: 630,
    deviceScaleFactor: 2
  });

  return page;
}

async function generateScreenshot(page, workflowId, workflowJsonPath, outputPath, retryCount = 0) {
  const MAX_RETRIES = 2;
  const MIN_FILE_SIZE = 20 * 1024; // 20KB
  
  try {
    if (!FORCE_REGENERATE && fs.existsSync(outputPath)) {
      const fileSize = fs.statSync(outputPath).size;
      if (fileSize >= MIN_FILE_SIZE) {
        return 'skipped';
      } else {
        console.log(`  ⚠ 现有截图过小 (${Math.round(fileSize/1024)}KB), 将重新生成...`);
      }
    }

    // 每次截图前重新加载页面以确保状态干净
    // 添加时间戳强制刷新，避免浏览器缓存
    const viewerUrl = `file://${VIEWER_PATH}?id=${workflowId}&v=${Date.now()}`;
    await page.goto(viewerUrl, { waitUntil: 'networkidle0', timeout: 60000 });

    // 直接读取原始数据，不做任何预处理
    // 让 HTML 页面的 extractWorkflow 函数统一处理所有嵌套情况
    const rawData = JSON.parse(fs.readFileSync(workflowJsonPath, 'utf-8'));

    // 调用页面中的渲染函数
    await page.evaluate(async (data) => {
      if (typeof window.renderWorkflow !== 'function') {
        throw new Error('window.renderWorkflow is not defined in the page');
      }
      await window.renderWorkflow(data);
    }, rawData);

    // 计算节点数以确定等待时间
    // 需要考虑多层嵌套的情况
    const nodeCount = rawData.nodes?.length || 
                      rawData.workflow?.nodes?.length || 
                      rawData.workflow?.workflow?.nodes?.length || 0;
    const baseWaitTime = Math.min(5000 + nodeCount * 200, 30000); // 每个节点额外200ms，最多30秒
    
    console.log(`  等待渲染 (节点数: ${nodeCount}, 等待时间: ${Math.round(baseWaitTime/1000)}秒)...`);
    await new Promise(r => setTimeout(r, baseWaitTime));
    
    // 强制触发 zoomToFit 以确保所有节点在视图内
    await page.evaluate(() => {
      const viz = document.getElementById('workflow');
      if (viz && viz.shadowRoot) {
        const iframe = viz.shadowRoot.querySelector('iframe');
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage(JSON.stringify({
            event: 'COMMAND',
            command: 'zoomToFit'
          }), '*');
        }
      }
    });
    
    // 等待缩放完成
    await new Promise(r => setTimeout(r, 3000));

    // 尝试获取内容的实际尺寸并调整视口
    const contentSize = await page.evaluate(() => {
      const viz = document.getElementById('workflow');
      if (!viz || !viz.shadowRoot) return null;
      const iframe = viz.shadowRoot.querySelector('iframe');
      if (!iframe) return null;
      
      try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        const svg = doc.querySelector('svg');
        if (svg) {
          const bbox = svg.getBBox();
          const transform = svg.querySelector('g')?.getAttribute('transform') || '';
          const scaleMatch = transform.match(/scale\(([^,)]+)/);
          const scale = scaleMatch ? parseFloat(scaleMatch[1]) : 1;
          
          return {
            width: bbox.width * scale + 100,
            height: bbox.height * scale + 100
          };
        }
      } catch (e) {}
      return null;
    });

    if (contentSize) {
      await page.setViewport({
        width: Math.max(1200, Math.round(contentSize.width)),
        height: Math.max(630, Math.round(contentSize.height)),
        deviceScaleFactor: 2
      });
      await page.evaluate((size) => {
        const container = document.getElementById('container');
        if (container) {
          container.style.width = `${size.width}px`;
          container.style.height = `${size.height}px`;
        }
      }, contentSize);
    }

    const container = await page.$('n8n-demo');
    if (container) {
      await container.screenshot({
        path: outputPath,
        type: 'webp',
        quality: 85, // 稍微降低质量以减小文件体积
        omitBackground: false
      });
      
      // 验证生成的截图文件大小
      if (fs.existsSync(outputPath)) {
        const fileSize = fs.statSync(outputPath).size;
        console.log(`  📊 生成截图大小: ${Math.round(fileSize/1024)}KB`);
        
        if (fileSize < MIN_FILE_SIZE) {
          console.warn(`  ⚠ 截图文件过小 (${Math.round(fileSize/1024)}KB < 20KB), 可能渲染不完整`);
          
          // 如果还有重试机会，则重试
          if (retryCount < MAX_RETRIES) {
            console.log(`  🔄 第 ${retryCount + 1} 次重试...`);
            await new Promise(r => setTimeout(r, 2000)); // 等待2秒再重试
            return await generateScreenshot(page, workflowId, workflowJsonPath, outputPath, retryCount + 1);
          } else {
            console.error(`  ✗ 达到最大重试次数 (${MAX_RETRIES}), 截图仍然过小`);
            // 记录失败的工作流ID
            failedWorkflows.push({ id: workflowId, reason: `截图过小 (${Math.round(fileSize/1024)}KB)`, size: fileSize });
            return 'error-file-too-small';
          }
        }
      }
      
      return 'success';
    } else {
      return 'error-no-element';
    }
  } catch (error) {
    console.error(`  ✗ [${workflowId}] 失败:`, error.message);
    
    // 如果还有重试机会且不是致命错误，则重试
    if (retryCount < MAX_RETRIES && !error.message.includes('not found')) {
      console.log(`  🔄 第 ${retryCount + 1} 次重试...`);
      await new Promise(r => setTimeout(r, 2000));
      return await generateScreenshot(page, workflowId, workflowJsonPath, outputPath, retryCount + 1);
    }
    
    return 'error';
  }
}

async function main() {
  const targetWorkflowId = process.argv.find(arg => !arg.startsWith('-') && arg !== process.argv[0] && arg !== process.argv[1]);
  const limitArg = process.argv.find(arg => arg.startsWith('--limit='));
  const limit = limitArg ? parseInt(limitArg.split('=')[1]) : Infinity;
  
  console.log(`开始批量生成工作流截图...`);
  console.log(`并发数: ${CONCURRENCY}, 强制重新生成: ${FORCE_REGENERATE}, 限制数量: ${limit}`);

  if (!fs.existsSync(PUBLIC_DATA_DIR)) {
    console.error('工作流数据目录不存在:', PUBLIC_DATA_DIR);
    return;
  }

  const browser = await puppeteer.launch({ 
    headless: "new",
    args: [
      '--no-sandbox', 
      '--disable-setuid-sandbox',
      '--allow-file-access-from-files',
      '--disable-web-security'
    ]
  });
  
  try {
    const folders = fs.readdirSync(PUBLIC_DATA_DIR).filter(f => {
      const folderPath = path.join(PUBLIC_DATA_DIR, f);
      return fs.statSync(folderPath).isDirectory();
    });

    const tasks = [];
    for (const folder of folders) {
      const folderPath = path.join(PUBLIC_DATA_DIR, folder);
      const files = fs.readdirSync(folderPath);
      let jsonFile = files.find(f => /^\d+\.json$/.test(f)) || 
                     files.find(f => f.toLowerCase().includes('workflow') && f.endsWith('.json')) ||
                     files.find(f => f.endsWith('.json') && !f.toLowerCase().includes('metadata'));
      
      if (!jsonFile) continue;
      
      const workflowId = path.basename(jsonFile, '.json');
      if (targetWorkflowId && workflowId !== targetWorkflowId && folder !== targetWorkflowId) continue;

      tasks.push({
        workflowId,
        jsonPath: path.join(folderPath, jsonFile),
        outputPath: path.join(folderPath, `${workflowId}.webp`)
      });

      if (tasks.length >= limit) break;
    }

    console.log(`找到 ${tasks.length} 个待处理任务\n`);

    let successCount = 0;
    let failCount = 0;
    let skippedCount = 0;
    let processedCount = 0;

    const workers = Array.from({ length: CONCURRENCY }, async (_, i) => {
      const page = await setupPage(browser);
      while (tasks.length > 0) {
        const task = tasks.shift();
        if (!task) break;

        console.log(`\n[${processedCount + 1}/${tasks.length + processedCount}] 处理工作流 ID: ${task.workflowId}`);
        const result = await generateScreenshot(page, task.workflowId, task.jsonPath, task.outputPath);
        processedCount++;
        
        if (result === 'success') {
          successCount++;
          console.log(`  ✓ 成功生成截图`);
        } else if (result === 'skipped') {
          skippedCount++;
          console.log(`  ⊘ 跳过（截图已存在）`);
        } else {
          failCount++;
          console.log(`  ✗ 失败 (${result})`);
        }
      }
      await page.close();
    });

    await Promise.all(workers);
    
    console.log(`\n完成！`);
    console.log(`总计: ${processedCount}, 成功: ${successCount}, 失败: ${failCount}, 跳过: ${skippedCount}`);
    
    // 保存失败的工作流ID到文件
    if (failedWorkflows.length > 0) {
      const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
      const failedContent = [
        `# 截图生成失败的工作流 - ${timestamp}`,
        `# 总计: ${failedWorkflows.length} 个`,
        '',
        ...failedWorkflows.map(w => `${w.id}\t${w.reason}\t(文件大小: ${Math.round(w.size/1024)}KB)`)
      ].join('\n');
      
      fs.writeFileSync(FAILED_LOG_PATH, failedContent, 'utf-8');
      console.log(`\n⚠️  ${failedWorkflows.length} 个工作流截图失败，已保存到: ${FAILED_LOG_PATH}`);
      failedWorkflows.forEach(w => {
        console.log(`   - ${w.id}: ${w.reason}`);
      });
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
