import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DATA_DIR = path.join(__dirname, '../public/data/workflows');
const VIEWER_PATH = path.join(__dirname, 'workflow-viewer.html');

/**
 * 为单个工作流生成截图
 * @param {Object} browser - Puppeteer 浏览器实例
 * @param {string} workflowId - 工作流 ID
 * @param {string} workflowJsonPath - 工作流 JSON 文件路径
 * @param {string} outputPath - 输出截图路径
 * @param {boolean} forceRegenerate - 是否强制重新生成已存在的截图
 * @returns {Promise<boolean>} 是否成功生成截图
 */
async function generateScreenshot(browser, workflowId, workflowJsonPath, outputPath, forceRegenerate = false) {
  let page;
  try {
    // 如果已经存在截图且大小正常，根据 forceRegenerate 参数决定是否跳过
    if (!forceRegenerate && fs.existsSync(outputPath) && fs.statSync(outputPath).size > 1000) {
      console.log(`○ 跳过已存在的截图: ${workflowId}`);
      return true;
    }

    let fullData = JSON.parse(fs.readFileSync(workflowJsonPath, 'utf-8'));
    
    // 万能提取公式：处理 api.n8n.io 的双重嵌套、标准嵌套、字符串化嵌套及扁平结构
    const extractWorkflow = (data) => {
      let workflowObj = data;
      
      // 处理第一层嵌套
      if (data.workflow) {
        if (typeof data.workflow === 'object') {
          workflowObj = data.workflow;
        } else if (typeof data.workflow === 'string') {
          try { workflowObj = JSON.parse(data.workflow); } catch (e) {}
        }
      }

      // 处理第二层嵌套 (api.n8n.io 格式)
      let core = workflowObj;
      if (workflowObj.workflow) {
        if (typeof workflowObj.workflow === 'object') {
          core = workflowObj.workflow;
        } else if (typeof workflowObj.workflow === 'string') {
          try { core = JSON.parse(workflowObj.workflow); } catch (e) {}
        }
      }

      // 严格按照主站逻辑构建，确保字段完整
      return {
        name: data.name || workflowObj.name || core.name || workflowId,
        nodes: core.nodes || workflowObj.nodes || data.nodes || [],
        connections: core.connections || workflowObj.connections || data.connections || {},
        settings: core.settings || workflowObj.settings || data.settings || {},
        active: false,
        id: data.id || workflowObj.id || core.id,
        createdAt: data.createdAt || workflowObj.createdAt || core.createdAt,
        updatedAt: data.updatedAt || workflowObj.updatedAt || core.updatedAt || data.createdAt || workflowObj.createdAt || core.createdAt
      };
    };

    let workflowData = extractWorkflow(fullData);

    page = await browser.newPage();
    
    // 绕过 CSP 限制，允许加载跨域 iframe
    await page.setBypassCSP(true);
    
    // 设置 User-Agent 和 Referer，避免被预览服务拦截
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    await page.setExtraHTTPHeaders({
      'Referer': 'https://n8n.io/'
    });

    // 监听控制台日志
    page.on('console', msg => {
      const text = msg.text();
      console.log(`  [浏览器日志] ${msg.type()}: ${text}`);
    });

    page.on('requestfailed', request => {
      console.log(`  [请求失败] ${request.url()} - ${request.failure().errorText}`);
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
      await page.screenshot({ 
        path: outputPath.replace('.webp', '-debug.png'),
        type: 'png',
        fullPage: true
      });
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

/**
 * 解析命令行参数
 * @returns {Object} 解析后的参数对象
 */
function parseArguments() {
  const args = process.argv.slice(2);
  const options = {
    all: false,
    workflow: null,
    force: false
  };

  for (const arg of args) {
    if (arg === '--all') {
      options.all = true;
    } else if (arg.startsWith('--workflow=')) {
      options.workflow = arg.split('=')[1];
    } else if (arg === '--force' || arg === '-f') {
      options.force = true;
    } else if (arg === '--help' || arg === '-h') {
      showHelp();
      process.exit(0);
    }
  }

  return options;
}

/**
 * 显示帮助信息
 */
function showHelp() {
  console.log(`
使用方法:
  node scripts/screenshot-existing-workflows.mjs [选项]

选项:
  --all                      对所有现有工作流生成截图
  --workflow=<ID>            对指定 ID 的工作流生成截图
  --force, -f                强制重新生成已存在的截图
  --help, -h                 显示此帮助信息

示例:
  node scripts/screenshot-existing-workflows.mjs --all
  node scripts/screenshot-existing-workflows.mjs --workflow=6270
  node scripts/screenshot-existing-workflows.mjs --workflow=6270 --force
  `);
}

/**
 * 查找工作流目录中的 JSON 文件
 * @param {string} folderPath - 工作流文件夹路径
 * @returns {string|null} JSON 文件名，如果未找到则返回 null
 */
function findWorkflowJson(folderPath) {
  const files = fs.readdirSync(folderPath);
  
  // 优先寻找纯数字命名的 JSON
  let jsonFile = files.find(f => /^\d+\.json$/.test(f));
  if (jsonFile) return jsonFile;
  
  // 寻找包含 workflow 的 JSON
  jsonFile = files.find(f => f.toLowerCase().includes('workflow') && f.endsWith('.json'));
  if (jsonFile) return jsonFile;
  
  // 寻找非 metadata 的 JSON
  jsonFile = files.find(f => f.endsWith('.json') && !f.toLowerCase().includes('metadata') && !f.toLowerCase().includes('metada'));
  return jsonFile || null;
}

/**
 * 获取所有现有的工作流目录
 * @returns {Array} 包含工作流信息的数组 [{id, folder, jsonPath}]
 */
function getExistingWorkflows() {
  if (!fs.existsSync(PUBLIC_DATA_DIR)) {
    console.error('✗ 工作流数据目录不存在:', PUBLIC_DATA_DIR);
    return [];
  }

  const workflows = [];
  const folders = fs.readdirSync(PUBLIC_DATA_DIR);

  for (const folder of folders) {
    const folderPath = path.join(PUBLIC_DATA_DIR, folder);
    if (!fs.statSync(folderPath).isDirectory()) continue;

    const jsonFile = findWorkflowJson(folderPath);
    if (!jsonFile) continue;

    const workflowId = path.basename(jsonFile, '.json');
    const jsonPath = path.join(folderPath, jsonFile);

    workflows.push({
      id: workflowId,
      folder: folder,
      jsonPath: jsonPath,
      outputPath: path.join(folderPath, `${folder}.webp`)
    });
  }

  return workflows;
}

/**
 * 主函数
 */
async function main() {
  const options = parseArguments();

  // 如果没有提供任何选项，显示帮助信息
  if (!options.all && !options.workflow) {
    showHelp();
    return;
  }

  console.log('='.repeat(60));
  console.log('对现有工作流生成截图');
  console.log('='.repeat(60));
  
  // 获取所有现有工作流
  const allWorkflows = getExistingWorkflows();
  
  if (allWorkflows.length === 0) {
    console.log('✗ 未找到任何工作流');
    return;
  }

  console.log(`\n发现 ${allWorkflows.length} 个现有工作流\n`);

  // 根据选项筛选要处理的工作流
  let targetWorkflows = allWorkflows;
  
  if (options.workflow) {
    targetWorkflows = allWorkflows.filter(
      w => w.id === options.workflow || w.folder === options.workflow
    );
    
    if (targetWorkflows.length === 0) {
      console.error(`✗ 未找到工作流: ${options.workflow}`);
      return;
    }
    
    console.log(`目标工作流: ${options.workflow}\n`);
  }

  // 启动浏览器
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
    let successCount = 0;
    let failCount = 0;
    let skippedCount = 0;

    for (const workflow of targetWorkflows) {
      const success = await generateScreenshot(
        browser, 
        workflow.id, 
        workflow.jsonPath, 
        workflow.outputPath,
        options.force
      );
      
      if (success) {
        // 检查是否是跳过的（已存在的截图）
        if (!options.force && fs.existsSync(workflow.outputPath) && fs.statSync(workflow.outputPath).size > 1000) {
          skippedCount++;
        } else {
          successCount++;
        }
      } else {
        failCount++;
      }
      
      // 稍微停顿一下，避免过度占用资源
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    console.log('\n' + '='.repeat(60));
    console.log('完成统计');
    console.log('='.repeat(60));
    console.log(`总计处理: ${targetWorkflows.length} 个工作流`);
    console.log(`✓ 成功: ${successCount}`);
    if (skippedCount > 0) {
      console.log(`○ 跳过: ${skippedCount} (已存在，使用 --force 强制重新生成)`);
    }
    console.log(`✗ 失败: ${failCount}`);
    console.log('='.repeat(60));
  } finally {
    await browser.close();
  }
}

// 执行主函数
main().catch((err) => {
  console.error('\n✗ 发生错误:', err);
  process.exit(1);
});
