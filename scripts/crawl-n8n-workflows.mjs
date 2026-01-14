import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import { URL } from 'url';
import zlib from 'zlib';

// 尝试导入 sharp，如果不可用则回退
let sharp;
try {
  sharp = (await import('sharp')).default;
} catch (e) {
  console.warn('Sharp not available, image conversion to WebP will be skipped.');
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DATA_DIR = path.join(__dirname, '../public/data/workflows');
const INDEX_FILE = path.join(__dirname, '../src/data/workflows.json');
const CRAWLED_IDS_FILE = path.join(__dirname, '../src/data/crawled-workflow-ids.json');
const BASE_URL = 'https://api.n8n.io/templates/workflows';
const CONCURRENCY = 5; // 控制并发数
const DELAY_BETWEEN_REQUESTS = 500; // 请求间隔，增加到500ms避免被封IP

// 解析命令行参数
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {};
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--limit') {
      options.limit = parseInt(args[i + 1]);
      i++; // 跳过下一个参数
    } else if (arg === '--test') {
      options.test = true;
    }
  }
  
  return options;
}

const args = parseArgs();
const MAX_WORKFLOWS = args.limit || parseInt(process.env.MAX_WORKFLOWS || process.argv[2]) || Infinity;
const IS_TEST_MODE = args.test || false;

// User-Agent 轮询池 - 多种浏览器模拟
const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0',
  'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0'
];

// 当前 User-Agent 索引
let currentUserAgentIndex = 0;

// 随机获取 User-Agent
function getRandomUserAgent() {
  currentUserAgentIndex = (currentUserAgentIndex + 1) % USER_AGENTS.length;
  return USER_AGENTS[currentUserAgentIndex];
}

// 随机 Accept-Language
const ACCEPT_LANGUAGES = [
  'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
  'en-GB,en;q=0.9,en-US;q=0.8',
  'zh-TW,zh;q=0.9,en;q=0.8',
  'en-US,en;q=0.9'
];

function getRandomAcceptLanguage() {
  return ACCEPT_LANGUAGES[Math.floor(Math.random() * ACCEPT_LANGUAGES.length)];
}

// 生成随机的请求头
function getRandomHeaders() {
  const headers = {
    'User-Agent': getRandomUserAgent(),
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': getRandomAcceptLanguage(),
    // 'Accept-Encoding': 'gzip, deflate, br', // 暂时禁用压缩，看看是否能解决乱码问题
    'Referer': 'https://n8n.io/workflows/',
    'Origin': 'https://n8n.io',
    'DNT': Math.random() > 0.5 ? '1' : null, // 随机添加 Do Not Track
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin'
  };
  
  // 过滤掉值为 null 或 undefined 的头部
  return Object.fromEntries(
    Object.entries(headers).filter(([_, v]) => v != null)
  );
}

// 确保目录存在
if (!fs.existsSync(PUBLIC_DATA_DIR)) {
  fs.mkdirSync(PUBLIC_DATA_DIR, { recursive: true });
}

// 加载已抓取的 ID 集合
function loadCrawledIds() {
  if (fs.existsSync(CRAWLED_IDS_FILE)) {
    try {
      return new Set(JSON.parse(fs.readFileSync(CRAWLED_IDS_FILE, 'utf-8')));
    } catch (e) {
      console.warn('无法读取已抓取 ID 文件，将创建新文件');
      return new Set();
    }
  }
  return new Set();
}

// 保存已抓取的 ID 集合
function saveCrawledIds(ids) {
  fs.writeFileSync(CRAWLED_IDS_FILE, JSON.stringify([...ids], null, 2));
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchJson(url, redirectCount = 0) {
  const MAX_REDIRECTS = 5;
  
  if (redirectCount >= MAX_REDIRECTS) {
    throw new Error('Too many redirects');
  }
  
  return new Promise((resolve, reject) => {
    const options = {
      headers: getRandomHeaders()
    };
    
    https.get(url, options, (res) => {
      // 处理重定向 (301, 302, 307, 308)
      if ([301, 302, 307, 308].includes(res.statusCode)) {
        const redirectUrl = res.headers.location;
        if (!redirectUrl) {
          reject(new Error('Redirect location header missing'));
          return;
        }
        
        // 处理相对路径：如果Location是相对路径，则与原始URL合并
        let fullRedirectUrl;
        if (redirectUrl.startsWith('http://') || redirectUrl.startsWith('https://')) {
          // 绝对URL，直接使用
          fullRedirectUrl = redirectUrl;
        } else {
          // 相对URL，需要与原始URL合并
          const baseUrl = new URL(url);
          fullRedirectUrl = new URL(redirectUrl, baseUrl).href;
        }
        
        console.log(`跟随重定向: ${res.statusCode} -> ${fullRedirectUrl}`);
        
        // 递归调用处理重定向
        fetchJson(fullRedirectUrl, redirectCount + 1)
          .then(resolve)
          .catch(reject);
        return;
      }
      
      if (res.statusCode !== 200) {
        console.error(`[Fetch Error] URL: ${url}, Status: ${res.statusCode}`);
        reject(new Error(`Failed to fetch: ${res.statusCode}`));
        return;
      }
      
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const encoding = res.headers['content-encoding'];
        const contentType = res.headers['content-type'];
        
        try {
          let body;
          if (encoding === 'gzip') {
            body = zlib.gunzipSync(buffer).toString();
          } else if (encoding === 'deflate') {
            body = zlib.inflateSync(buffer).toString();
          } else {
            body = buffer.toString();
          }

          try {
            resolve(JSON.parse(body));
          } catch (parseError) {
            console.error(`[JSON Parse Error] URL: ${url}`);
            console.error(`[Headers] Content-Type: ${contentType}, Content-Encoding: ${encoding}`);
            console.error(`[Body Snippet] ${body.substring(0, 200)}...`);
            reject(parseError);
          }
        } catch (decompressError) {
          console.error(`[Decompress Error] URL: ${url}, Encoding: ${encoding}`);
          reject(decompressError);
        }
      });
    }).on('error', reject);
  });
}

function generateSlug(title, id) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') + '-' + id;
}

function determineComplexity(nodeCount) {
  if (nodeCount >= 15) return 'advanced';
  if (nodeCount >= 5) return 'intermediate';
  return 'beginner';
}

async function downloadImage(url, outputPath, retries = 3, redirectCount = 0) {
  const MAX_REDIRECTS = 5;
  
  if (redirectCount >= MAX_REDIRECTS) {
    throw new Error('Too many redirects');
  }
  
  for (let i = 0; i < retries; i++) {
    try {
      return await new Promise((resolve, reject) => {
        const options = {
          headers: getRandomHeaders() // 使用随机请求头
        };
        
        https.get(url, options, (res) => {
          // 处理重定向 (301, 302, 307, 308)
          if ([301, 302, 307, 308].includes(res.statusCode)) {
            const redirectUrl = res.headers.location;
            if (!redirectUrl) {
              reject(new Error('Redirect location header missing'));
              return;
            }
            
            // 处理相对路径：如果Location是相对路径，则与原始URL合并
            let fullRedirectUrl;
            if (redirectUrl.startsWith('http://') || redirectUrl.startsWith('https://')) {
              // 绝对URL，直接使用
              fullRedirectUrl = redirectUrl;
            } else {
              // 相对URL，需要与原始URL合并
              const baseUrl = new URL(url);
              fullRedirectUrl = new URL(redirectUrl, baseUrl).href;
            }
            
            console.log(`图片重定向: ${res.statusCode} -> ${fullRedirectUrl}`);
            // 递归调用处理重定向
            downloadImage(fullRedirectUrl, outputPath, retries, redirectCount + 1)
              .then(resolve)
              .catch(reject);
            return;
          }
          
          if (res.statusCode !== 200) {
            reject(new Error(`Failed to download image: ${res.statusCode}`));
            return;
          }

          const chunks = [];
          res.on('data', (chunk) => chunks.push(chunk));
          res.on('end', async () => {
            const buffer = Buffer.concat(chunks);
            try {
              if (sharp) {
                await sharp(buffer)
                  .webp({ quality: 80 })
                  .toFile(outputPath);
              } else {
                fs.writeFileSync(outputPath, buffer);
              }
              resolve();
            } catch (err) {
              reject(err);
            }
          });
        }).on('error', reject);
      });
    } catch (err) {
      if (i === retries - 1) throw err;
      console.warn(`下载图片失败，正在重试 (${i + 1}/${retries}): ${err.message}`);
      await sleep(1000 * (i + 1));
    }
  }
}

async function processTemplate(template, totalCount, currentCount) {
  const id = template.id;
  const slug = generateSlug(template.name, id);
  const folderName = `${slug}`;
  const workflowDir = path.join(PUBLIC_DATA_DIR, folderName);
  
  const progress = `[${currentCount}/${totalCount}]`;
  
  if (fs.existsSync(workflowDir)) {
    const metadataPath = path.join(workflowDir, `metadata.json`);
    if (fs.existsSync(metadataPath)) {
      try {
        return JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
      } catch (e) {
        console.warn(`${progress} 读取现有元数据失败: ${folderName}, 重新抓取`);
      }
    }
  }

  console.log(`${progress} 正在处理: ${id} - ${template.name}`);
  fs.mkdirSync(workflowDir, { recursive: true });
  
  // 生成下划线版本的 slug 用于 JSON 文件命名
  const slugWithUnderscores = slug.replace(/-/g, '_').replace(new RegExp(`_${id}$`), '');
  
  const featuredImagePath = `/data/workflows/${folderName}/${folderName}.png`;
  const localImagePath = path.join(workflowDir, `${folderName}.png`);
  
  // 移除旧的截图下载逻辑，因为我们现在使用独立的截图脚本
  /*
  try {
    const screenshotUrl = `https://n8n.io/api/v1/templates/${id}/screenshot`;
    await downloadImage(screenshotUrl, localImagePath);
  } catch (err) {
    console.warn(`${progress} 无法下载图片 ${id}, 使用占位图: ${err.message}`);
    const placeholderPath = path.join(__dirname, '../public/images/placeholder-workflow.svg');
    if (fs.existsSync(placeholderPath)) {
      if (sharp) {
        await sharp(placeholderPath).webp({ quality: 80 }).toFile(localImagePath);
      } else {
        fs.copyFileSync(placeholderPath, localImagePath);
      }
    }
  }
  */

  // 获取完整的工作流数据
  let workflowData = null;
  let fullTemplateData = null;
  try {
    const workflowDetailUrl = `${BASE_URL}/${id}`;
    console.log(`${progress} 正在获取详情: ${workflowDetailUrl}`);
    const apiResponse = await fetchJson(workflowDetailUrl);
    fullTemplateData = apiResponse; // 保存完整的API响应
    
    // 从 apiResponse.workflow 中提取工作流信息
    const workflowDetail = apiResponse.workflow || apiResponse;
    workflowData = workflowDetail.workflow || workflowDetail;
    
    if (!workflowData.nodes || workflowData.nodes.length === 0) {
      throw new Error(`获取到的工作流数据中 nodes 为空: ${id}`);
    }
    
    // 合并完整的template信息 - 从 workflowDetail (即 apiResponse.workflow) 中提取
    if (workflowDetail.name) template.name = workflowDetail.name;
    if (workflowDetail.description) template.description = workflowDetail.description;
    if (workflowDetail.user) template.user = workflowDetail.user;
    if (workflowDetail.categories) template.categories = workflowDetail.categories;
    if (workflowDetail.views || workflowDetail.totalViews) {
      template.views = workflowDetail.totalViews || workflowDetail.views;
    }
    if (workflowDetail.workflowInfo && workflowDetail.workflowInfo.nodeCount) {
      template.nodeCount = workflowDetail.workflowInfo.nodeCount;
    }
    if (workflowDetail.createdAt) template.createdAt = workflowDetail.createdAt;
    if (workflowDetail.updatedAt) template.updatedAt = workflowDetail.updatedAt;
  } catch (err) {
    console.error(`${progress} 无法获取完整工作流数据 ${id}: ${err.message}`);
    return null; // 返回 null 表示处理失败，不保存元数据
  }

  const metadata = {
    id: id,
    slug: slug,
    title: template.name,
    description: template.description || `This is a real n8n workflow template: ${template.name}. It has been viewed ${template.views || 0} times on n8n.io.`,
    featuredImage: featuredImagePath,
    author: {
      id: template.user?.id || 101,
      slug: template.user?.username || 'n8n-community',
      name: template.user?.name || 'n8n Community',
      avatar: template.user?.avatarUrl || ''
    },
    categories: template.categories?.map(c => c.name) || ['Automation'],
    complexityLevel: determineComplexity(template.nodeCount || 0),
    price: 0,
    visitors: template.views || 0,
    downloads: Math.floor((template.views || 0) * 0.1),
    createdAt: template.createdAt || new Date().toISOString(),
    updatedAt: template.updatedAt || new Date().toISOString(),
    publishedAt: template.createdAt || new Date().toISOString(),
    nodes: template.nodeCount || 0,
    version: '1.0.0',
    sourceUrl: `https://n8n.io/workflows/${id}`
  };
  
  // 保存完整的 API 响应为 {id}.json（包含所有原始数据）
  fs.writeFileSync(path.join(workflowDir, `${id}.json`), JSON.stringify(fullTemplateData, null, 2));
  
  // 保存元数据为 metadata.json
  fs.writeFileSync(path.join(workflowDir, 'metadata.json'), JSON.stringify(metadata, null, 2));
  
  // 保存工作流描述为 description.md
  if (template.description) {
    fs.writeFileSync(path.join(workflowDir, 'description.md'), template.description);
  }
  
  // 保存作者信息为 author.json（如果存在）
  if (template.user) {
    const authorInfo = {
      id: template.user.id,
      username: template.user.username,
      name: template.user.name,
      bio: template.user.bio || '',
      verified: template.user.verified || false,
      links: template.user.links || [],
      avatar: template.user.avatar || template.user.avatarUrl || ''
    };
    fs.writeFileSync(path.join(workflowDir, 'author.json'), JSON.stringify(authorInfo, null, 2));
  }
  
  // 生成并保存 README.md 文件
  const readmeContent = generateReadme(template, metadata, workflowData);
  fs.writeFileSync(path.join(workflowDir, `readme-${id}.md`), readmeContent);
  
  await sleep(DELAY_BETWEEN_REQUESTS);
  return metadata;
}

// 生成 README 内容
function generateReadme(template, metadata, workflowData) {
  const lines = [];
  
  lines.push(`# ${metadata.title}`);
  lines.push('');
  lines.push(`> ${metadata.description || 'N8N workflow template'}`);
  lines.push('');
  
  // 基本信息
  lines.push('## 📊 Basic Information');
  lines.push('');
  lines.push(`- **Workflow ID:** ${metadata.id}`);
  lines.push(`- **Complexity:** ${metadata.complexityLevel}`);
  lines.push(`- **Node Count:** ${metadata.nodes}`);
  lines.push(`- **Views:** ${metadata.visitors}`);
  lines.push(`- **Downloads:** ${metadata.downloads}`);
  lines.push(`- **Created:** ${new Date(metadata.createdAt).toLocaleDateString()}`);
  lines.push(`- **Last Updated:** ${new Date(metadata.updatedAt).toLocaleDateString()}`);
  lines.push(`- **Source:** [View on n8n.io](${metadata.sourceUrl})`);
  lines.push('');
  
  // 作者信息
  lines.push('## 👤 Author');
  lines.push('');
  lines.push(`- **Name:** ${metadata.author.name}`);
  lines.push(`- **Username:** @${metadata.author.slug}`);
  if (metadata.author.avatar) {
    lines.push(`- **Avatar:** ![Author Avatar](${metadata.author.avatar})`);
  }
  lines.push('');
  
  // 分类标签
  if (metadata.categories && metadata.categories.length > 0) {
    lines.push('## 🏷️ Categories');
    lines.push('');
    metadata.categories.forEach(cat => {
      lines.push(`- ${cat}`);
    });
    lines.push('');
  }
  
  // 节点列表
  if (workflowData && workflowData.nodes && workflowData.nodes.length > 0) {
    lines.push('## 🔗 Nodes Used');
    lines.push('');
    
    // 统计节点类型
    const nodeTypes = {};
    workflowData.nodes.forEach(node => {
      const type = node.type || 'Unknown';
      nodeTypes[type] = (nodeTypes[type] || 0) + 1;
    });
    
    Object.entries(nodeTypes).forEach(([type, count]) => {
      const displayName = type.replace('n8n-nodes-base.', '');
      lines.push(`- **${displayName}** ${count > 1 ? `(×${count})` : ''}`);
    });
    lines.push('');
  }
  
  // 工作流描述 (如果有)
  if (template.description && template.description !== metadata.description) {
    lines.push('## 📝 Description');
    lines.push('');
    lines.push(template.description);
    lines.push('');
  }
  
  // 安装说明
  lines.push('## 🚀 How to Use');
  lines.push('');
  lines.push('1. Download the workflow JSON file');
  lines.push('2. Import it into your n8n instance');
  lines.push('3. Configure the credentials for the nodes');
  lines.push('4. Activate and test the workflow');
  lines.push('');
  
  // 连接信息 (简要)
  if (workflowData && workflowData.connections) {
    const connectionCount = Object.keys(workflowData.connections).length;
    if (connectionCount > 0) {
      lines.push('## 🔀 Workflow Structure');
      lines.push('');
      lines.push(`This workflow contains ${workflowData.nodes.length} nodes with ${connectionCount} node connections.`);
      lines.push('');
    }
  }
  
  // 页脚
  lines.push('---');
  lines.push('');
  lines.push('*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*');
  lines.push('');
  
  return lines.join('\n');
}

// 从 sitemap 获取所有工作流 URL
async function fetchWorkflowUrlsFromSitemap() {
  console.log('正在从 sitemap 获取工作流 URL 列表...');
  
  try {
    const sitemapUrl = 'https://n8n.io/sitemap-workflows.xml';
    const responseBuffer = await new Promise((resolve, reject) => {
      const options = {
        headers: getRandomHeaders()
      };
      
      https.get(sitemapUrl, options, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to fetch sitemap: ${res.statusCode}`));
          return;
        }
        
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          const buffer = Buffer.concat(chunks);
          const encoding = res.headers['content-encoding'];
          
          if (encoding === 'gzip') {
            zlib.gunzip(buffer, (err, decoded) => {
              if (err) reject(err);
              else resolve(decoded.toString());
            });
          } else if (encoding === 'deflate') {
            zlib.inflate(buffer, (err, decoded) => {
              if (err) reject(err);
              else resolve(decoded.toString());
            });
          } else {
            resolve(buffer.toString());
          }
        });
      }).on('error', reject);
    });
    
    const response = responseBuffer.toString();
    console.log(`Sitemap 内容长度: ${response.length} 字节`);
    
    // 匹配格式: .../workflows/{id}-{slug}/
    const urlRegex = /https:\/\/n8n\.io\/workflows\/(\d+)-[^<>]+?\//g;
    const urls = [];
    const ids = new Set();
    
    const matches = [...response.matchAll(urlRegex)];
    
    for (const match of matches) {
      const id = parseInt(match[1]);
      if (!ids.has(id)) {
        ids.add(id);
        const fullUrl = match[0];
        urls.push({ id, url: fullUrl });
      }
    }
    
    console.log(`从 sitemap 发现 ${urls.length} 个工作流`);
    return urls;
  } catch (error) {
    console.error('获取 sitemap 失败:', error.message);
    return [];
  }
}

async function crawl() {
  console.log(`开始抓取 n8n 工作流 (限制数量: ${MAX_WORKFLOWS})...`);
  
  try {
    // 加载已抓取的 ID
    const crawledIds = loadCrawledIds();
    console.log(`已抓取过的工作流数量: ${crawledIds.size}`);

    // 从 sitemap 获取所有工作流 URL
    let allWorkflows = await fetchWorkflowUrlsFromSitemap();
    
    if (allWorkflows.length === 0) {
      console.log('未能从 sitemap 获取工作流列表');
      return;
    }
    
    // 过滤掉已经抓取过的工作流
    const newWorkflows = allWorkflows.filter(w => !crawledIds.has(w.id));
    console.log(`共 ${allWorkflows.length} 个工作流，其中新工作流 ${newWorkflows.length} 个`);
    
    // 限制数量
    let workflowsToProcess = newWorkflows;
    if (newWorkflows.length > MAX_WORKFLOWS) {
      workflowsToProcess = newWorkflows.slice(0, MAX_WORKFLOWS);
      console.log(`限制抓取数量为 ${MAX_WORKFLOWS} 个`);
    }
    
    if (workflowsToProcess.length === 0) {
      console.log('没有新的工作流需要抓取');
      return;
    }

    const totalCount = workflowsToProcess.length;
    console.log(`开始详细抓取 ${totalCount} 个工作流...`);
    
    const workflowsMetadata = [];
    const queue = [...workflowsToProcess];
    let processedCount = 0;

    const workers = Array(CONCURRENCY).fill(null).map(async () => {
      while (queue.length > 0) {
        const workflow = queue.shift();
        processedCount++;
        try {
          // 构造简单的 template 对象来适配现有的 processTemplate 函数
          const template = {
            id: workflow.id,
            name: `Workflow ${workflow.id}`, // 临时名称，processTemplate 会从 API 获取真实数据
            sourceUrl: workflow.url
          };
          
          const metadata = await processTemplate(template, totalCount, processedCount);
          if (metadata) {
            workflowsMetadata.push(metadata);
            crawledIds.add(workflow.id); // 记录已抓取的 ID
          }
        } catch (err) {
          console.error(`处理工作流 ${workflow.id} 失败:`, err.message);
        }
      }
    });

    await Promise.all(workers);
    
    // 保存已抓取的 ID
    saveCrawledIds(crawledIds);
    console.log(`已保存抓取记录，共 ${crawledIds.size} 个工作流`);
    
    // 读取现有索引文件并合并
    let existingWorkflows = [];
    if (fs.existsSync(INDEX_FILE)) {
      try {
        existingWorkflows = JSON.parse(fs.readFileSync(INDEX_FILE, 'utf-8'));
      } catch (e) {
        console.warn('无法读取现有索引文件，将创建新文件');
      }
    }
    
    // 合并新旧数据（以 ID 为 key 去重）
    const workflowsMap = new Map();
    [...existingWorkflows, ...workflowsMetadata].forEach(w => {
      workflowsMap.set(w.id, w);
    });
    const mergedWorkflows = Array.from(workflowsMap.values());
    
    // 更新索引文件
    fs.writeFileSync(INDEX_FILE, JSON.stringify(mergedWorkflows, null, 2));
    
    console.log(`抓取完成！本次新增 ${workflowsMetadata.length} 个工作流，总计 ${mergedWorkflows.length} 个工作流。`);
    console.log(`索引文件已更新: ${INDEX_FILE}`);
    
  } catch (error) {
    console.error('抓取过程中出错:', error);
  }
}

crawl();
