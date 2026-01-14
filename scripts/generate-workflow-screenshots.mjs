import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DATA_DIR = path.join(__dirname, '../public/data/workflows');
const VIEWER_PATH = path.join(__dirname, 'workflow-viewer.html');

async function generateScreenshot(browser, workflowId, workflowJsonPath, outputPath) {
  let page;
  try {
    // 如果已经存在截图且大小正常，跳过
    if (fs.existsSync(outputPath) && fs.statSync(outputPath).size > 1000) {
      return true;
    }

    let workflowData = JSON.parse(fs.readFileSync(workflowJsonPath, 'utf-8'));
    
    // 如果数据包含在 workflow 属性中，提取它
    if (workflowData.workflow) {
      workflowData = workflowData.workflow;
    }

    page = await browser.newPage();
    
    // 设置 User-Agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

    // 监听控制台日志
    page.on('console', msg => {
      const text = msg.text();
      if (msg.type() === 'error') {
        console.log(`[Browser Error] ${text}`);
      } else {
        console.log(`[Browser Log] ${text}`);
      }
    });

    page.on('requestfailed', request => {
      console.log(`[Browser Request Failed] ${request.url()} - ${request.failure().errorText}`);
    });

    page.on('response', response => {
      if (response.status() >= 400) {
        console.log(`[Browser Response Error] ${response.status()} ${response.url()}`);
      }
    });

    // 增加协议超时时间
    await page.setDefaultNavigationTimeout(60000);
    await page.setDefaultTimeout(60000);
    
    // 设置视口，deviceScaleFactor: 2 获得高清截图
    await page.setViewport({ 
      width: 1400, 
      height: 1000,
      deviceScaleFactor: 2
    });
    
    // 访问本地文件
    const viewerUrl = `file://${VIEWER_PATH}`;
    await page.goto(viewerUrl, { waitUntil: 'networkidle0', timeout: 60000 });
    
    // 检查数据是否有效
    const isValid = workflowData && (
      (workflowData.nodes && workflowData.nodes.length > 0) || 
      (workflowData.workflow && workflowData.workflow.nodes && workflowData.workflow.nodes.length > 0)
    );

    if (!isValid) {
      console.warn(`! 跳过无效或空的工作流数据: ${workflowId}`);
      return false;
    }

    // 调用页面中的渲染函数并等待其返回的 Promise 完成
    try {
      await page.evaluate(async (data) => {
        if (typeof window.renderWorkflow !== 'function') {
          throw new Error('window.renderWorkflow is not defined in the page');
        }
        await window.renderWorkflow(data);
      }, workflowData);
    } catch (renderError) {
      console.error(`✗ 渲染工作流失败 ${workflowId}:`, renderError.message);
      return false;
    }
    
    // 确保截图逻辑针对 #container 元素
    const container = await page.$('#container');
    if (container) {
      await container.screenshot({ 
        path: outputPath,
        type: 'webp',
        quality: 90,
        omitBackground: false
      });
      const stats = fs.statSync(outputPath);
      console.log(`✓ 生成截图: ${workflowId} (${(stats.size / 1024).toFixed(1)} KB)`);
      return true;
    } else {
      console.error(`✗ 未找到 #container 元素: ${workflowId}`);
      return false;
    }
  } catch (error) {
    console.error(`✗ 生成截图失败 ${workflowId}:`, error.message);
    return false;
  } finally {
    if (page) await page.close();
  }
}

async function main() {
  // 获取命令行参数，支持针对特定工作流运行
  const targetWorkflowId = process.argv[2];
  if (targetWorkflowId) {
    console.log(`目标工作流 ID: ${targetWorkflowId}`);
  }

  console.log('开始批量生成工作流截图 (使用 Puppeteer, 本地文件模式)...');
  
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
    const folders = fs.readdirSync(PUBLIC_DATA_DIR);
    let successCount = 0;
    let failCount = 0;
    
    for (const folder of folders) {
      const folderPath = path.join(PUBLIC_DATA_DIR, folder);
      if (!fs.statSync(folderPath).isDirectory()) continue;
      
      const files = fs.readdirSync(folderPath);
      // 优先寻找纯数字命名的 JSON，如果没有则寻找包含 workflow 的 JSON，最后寻找非 metadata 的 JSON
      let jsonFile = files.find(f => /^\d+\.json$/.test(f));
      if (!jsonFile) {
        jsonFile = files.find(f => f.toLowerCase().includes('workflow') && f.endsWith('.json'));
      }
      if (!jsonFile) {
        jsonFile = files.find(f => f.endsWith('.json') && !f.toLowerCase().includes('metadata') && !f.toLowerCase().includes('metada'));
      }
      
      if (!jsonFile) continue;
      
      const workflowId = path.basename(jsonFile, '.json');

      // 如果指定了目标 ID，则跳过不匹配的
      if (targetWorkflowId && workflowId !== targetWorkflowId && folder !== targetWorkflowId) {
        continue;
      }

      const jsonPath = path.join(folderPath, jsonFile);
      const outputPath = path.join(folderPath, `${folder}.webp`);
      
      // 如果已经存在截图，可以选择跳过（可选）
      // if (fs.existsSync(outputPath)) continue;

      const success = await generateScreenshot(browser, workflowId, jsonPath, outputPath);
      if (success) successCount++; else failCount++;
      
      // 稍微停顿一下
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    console.log(`\n完成！成功: ${successCount}, 失败: ${failCount}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
