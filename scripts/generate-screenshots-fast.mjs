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
const concurrencyArg = process.argv.find(arg => arg.startsWith('--concurrency='));
const CONCURRENCY = concurrencyArg ? parseInt(concurrencyArg.split('=')[1]) : 5;
// 每个任务的最大超时时间 (毫秒) - 增加到 120s
const TASK_TIMEOUT = 120000; 
// 是否强制重新生成
const FORCE_REGENERATE = process.argv.includes('--force');

async function setupPage(browser) {
  const page = await browser.newPage();
  await page.setBypassCSP(true);
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  
  await page.setDefaultNavigationTimeout(60000);
  await page.setDefaultTimeout(TASK_TIMEOUT);
  
  await page.setViewport({ 
    width: 1200, 
    height: 630,
    deviceScaleFactor: 2
  });

  // 预加载 viewer
  await page.goto(`file://${VIEWER_PATH}`, { waitUntil: 'networkidle0' });
  
  return page;
}

async function generateScreenshot(page, workflowId, workflowJsonPath, outputPath) {
  const MIN_FILE_SIZE = 15 * 1024; // 15KB
  
  if (!FORCE_REGENERATE && fs.existsSync(outputPath)) {
    const fileSize = fs.statSync(outputPath).size;
    if (fileSize >= MIN_FILE_SIZE) {
      return 'skipped';
    }
  }

  // 使用 Promise.race 实现任务超时
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Timeout')), TASK_TIMEOUT)
  );

  const taskPromise = (async () => {
    const rawData = JSON.parse(fs.readFileSync(workflowJsonPath, 'utf-8'));
    // 提取节点数量
    const nodes = rawData.nodes || rawData.workflow?.nodes || (rawData.workflow && JSON.parse(rawData.workflow).nodes) || [];
    const nodeCount = nodes.length;

    // 调用页面中的渲染函数并等待完成
    await page.evaluate(async (data) => {
      const container = document.getElementById('container');
      if (container) container.innerHTML = '';
      await window.renderWorkflow(data);
    }, rawData);

    // 根据节点数量动态计算等待时间，确保大型工作流渲染完成
    // 每个节点给 300ms，最少 3秒，最多 60秒
    const dynamicWait = Math.max(3000, Math.min(nodeCount * 300, 60000));
    
    if (nodeCount > 20) {
      console.log(`  [${workflowId}] 节点数: ${nodeCount}, 动态等待 ${Math.round(dynamicWait/1000)}s...`);
    }
    
    await new Promise(r => setTimeout(r, dynamicWait));

    const container = await page.$('n8n-demo');
    if (container) {
      await container.screenshot({
        path: outputPath,
        type: 'webp',
        quality: 80,
        omitBackground: false
      });
      return 'success';
    } else {
      return 'error-no-element';
    }
  })();

  try {
    return await Promise.race([taskPromise, timeoutPromise]);
  } catch (error) {
    // 如果超时或严重错误，建议刷新页面以重置状态
    await page.goto(`file://${VIEWER_PATH}`, { waitUntil: 'networkidle0' }).catch(() => {});
    return `error: ${error.message}`;
  }
}

async function main() {
  const limitArg = process.argv.find(arg => arg.startsWith('--limit='));
  const limit = limitArg ? parseInt(limitArg.split('=')[1]) : Infinity;
  
  console.log(`🚀 开始极速批量生成工作流截图 (已优化大型工作流等待时间)...`);
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
      '--disable-web-security',
      '--disable-dev-shm-usage'
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
      const outputPath = path.join(folderPath, `${folder}.webp`);

      tasks.push({
        workflowId,
        jsonPath: path.join(folderPath, jsonFile),
        outputPath
      });

      if (tasks.length >= limit) break;
    }

    const totalTasks = tasks.length;
    console.log(`找到 ${totalTasks} 个待处理任务\n`);

    let successCount = 0;
    let failCount = 0;
    let skippedCount = 0;
    let processedCount = 0;

    const workers = Array.from({ length: CONCURRENCY }, async (_, i) => {
      const page = await setupPage(browser);
      while (tasks.length > 0) {
        const task = tasks.shift();
        if (!task) break;

        const current = ++processedCount;
        const result = await generateScreenshot(page, task.workflowId, task.jsonPath, task.outputPath);
        
        if (result === 'success') {
          successCount++;
          console.log(`[${current}/${totalTasks}] ✓ ${task.workflowId} 成功`);
        } else if (result === 'skipped') {
          skippedCount++;
        } else {
          failCount++;
          console.log(`[${current}/${totalTasks}] ✗ ${task.workflowId} 失败 (${result})`);
        }
      }
      await page.close();
    });

    await Promise.all(workers);
    
    console.log(`\n✅ 完成！`);
    console.log(`总计: ${processedCount}, 成功: ${successCount}, 失败: ${failCount}, 跳过: ${skippedCount}`);
    
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
