import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import { URL } from 'url';

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
const BASE_URL = 'https://n8n.io/api/v1/templates';
const CONCURRENCY = 5; // 控制并发数
const DELAY_BETWEEN_REQUESTS = 200; // 请求间隔，遵守 robots.txt
const MAX_WORKFLOWS = parseInt(process.env.MAX_WORKFLOWS || process.argv[2]) || Infinity;

// 确保目录存在
if (!fs.existsSync(PUBLIC_DATA_DIR)) {
  fs.mkdirSync(PUBLIC_DATA_DIR, { recursive: true });
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchJson(url, redirectCount = 0) {
  const MAX_REDIRECTS = 5;
  
  if (redirectCount >= MAX_REDIRECTS) {
    throw new Error('Too many redirects');
  }
  
  // 添加诊断日志
  console.log(`[DEBUG] fetchJson 被调用，URL: ${url}, 重定向次数: ${redirectCount}`);
  
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Referer': 'https://n8n.io/workflows/',
        'Origin': 'https://n8n.io'
      }
    };
    
    https.get(url, options, (res) => {
      // 处理重定向 (301, 302, 307, 308)
      if ([301, 302, 307, 308].includes(res.statusCode)) {
        const redirectUrl = res.headers.location;
        if (!redirectUrl) {
          reject(new Error('Redirect location header missing'));
          return;
        }
        
        // 添加诊断日志
        console.log(`[DEBUG] 检测到重定向 ${res.statusCode}`);
        console.log(`[DEBUG] 原始URL: ${url}`);
        console.log(`[DEBUG] Location头部: ${redirectUrl}`);
        console.log(`[DEBUG] 是否为相对路径: ${!redirectUrl.startsWith('http')}`);
        
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
        
        console.log(`[DEBUG] 完整重定向URL: ${fullRedirectUrl}`);
        console.log(`跟随重定向: ${res.statusCode} -> ${fullRedirectUrl}`);
        
        // 递归调用处理重定向
        fetchJson(fullRedirectUrl, redirectCount + 1)
          .then(resolve)
          .catch(reject);
        return;
      }
      
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch: ${res.statusCode}`));
        return;
      }
      
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
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
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br',
            'Referer': 'https://n8n.io/workflows/',
            'Origin': 'https://n8n.io'
          }
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
    const metadataPath = path.join(workflowDir, 'metadata.json');
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
  
  const featuredImagePath = `/data/workflows/${folderName}/${slug}.webp`;
  const localImagePath = path.join(workflowDir, `${slug}.webp`);
  
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

  // 尝试获取完整的工作流数据
  let workflowData = null;
  try {
    const workflowDetailUrl = `${BASE_URL}/${id}`;
    const workflowDetail = await fetchJson(workflowDetailUrl);
    workflowData = workflowDetail.workflow || workflowDetail;
  } catch (err) {
    console.warn(`${progress} 无法获取完整工作流数据 ${id}: ${err.message}`);
    // 使用模板基础数据作为回退
    workflowData = template.workflow || {
      nodes: Array(template.nodeCount || 0).fill({}),
      connections: {}
    };
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
  
  // 保存工作流 JSON 数据
  fs.writeFileSync(path.join(workflowDir, `${id}.json`), JSON.stringify(workflowData, null, 2));
  fs.writeFileSync(path.join(workflowDir, 'metadata.json'), JSON.stringify(metadata, null, 2));
  
  await sleep(DELAY_BETWEEN_REQUESTS);
  return metadata;
}

async function crawl() {
  console.log(`开始抓取 n8n 工作流 (限制数量: ${MAX_WORKFLOWS})...`);
  
  try {
    let allTemplates = [];
    let page = 1;
    const limit = 100;
    let hasMore = true;

    console.log('正在获取模板列表...');
    while (hasMore) {
      console.log(`正在获取第 ${page} 页列表...`);
      const url = `${BASE_URL}?page=${page}&limit=${limit}`;
      const response = await fetchJson(url);
      
      const templates = response.data || response; // 兼容不同 API 结构
      if (!Array.isArray(templates) || templates.length === 0) {
        hasMore = false;
        break;
      }

      allTemplates = allTemplates.concat(templates);
      console.log(`已获取 ${allTemplates.length} 个模板`);

      if (allTemplates.length >= MAX_WORKFLOWS) {
        allTemplates = allTemplates.slice(0, MAX_WORKFLOWS);
        hasMore = false;
        break;
      }
      
      // 如果返回的数量少于 limit，说明没有更多了
      if (templates.length < limit) {
        hasMore = false;
      } else {
        page++;
        await sleep(DELAY_BETWEEN_REQUESTS);
      }
      
      // 安全限制，防止无限循环
      if (page > 200) break; 
    }

    const totalCount = allTemplates.length;
    console.log(`共发现 ${totalCount} 个工作流，开始详细抓取...`);
    
    const workflowsMetadata = [];
    const queue = [...allTemplates];
    let processedCount = 0;

    const workers = Array(CONCURRENCY).fill(null).map(async () => {
      while (queue.length > 0) {
        const template = queue.shift();
        processedCount++;
        try {
          const metadata = await processTemplate(template, totalCount, processedCount);
          if (metadata) workflowsMetadata.push(metadata);
        } catch (err) {
          console.error(`处理工作流 ${template.id} 失败:`, err.message);
        }
      }
    });

    await Promise.all(workers);
    
    // 3. 更新索引文件
    fs.writeFileSync(INDEX_FILE, JSON.stringify(workflowsMetadata, null, 2));
    
    console.log(`抓取完成！共处理 ${workflowsMetadata.length} 个工作流。`);
    console.log(`索引文件已更新: ${INDEX_FILE}`);
    
  } catch (error) {
    console.error('抓取过程中出错:', error);
  }
}

crawl();
