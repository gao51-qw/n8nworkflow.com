import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DATA_DIR = path.join(__dirname, '../public/data/workflows');
const INDEX_FILE = path.join(__dirname, '../src/data/workflows.json');
const SRC_DATA_WORKFLOWS_DIR = path.join(__dirname, '../src/data/workflows');

// 确保目录存在
if (!fs.existsSync(SRC_DATA_WORKFLOWS_DIR)) {
  fs.mkdirSync(SRC_DATA_WORKFLOWS_DIR, { recursive: true });
}

async function reindex() {
  console.log('开始重新索引本地工作流...');
  
  if (!fs.existsSync(PUBLIC_DATA_DIR)) {
    console.error('目录不存在:', PUBLIC_DATA_DIR);
    return;
  }

  const workflows = [];
  const dirs = fs.readdirSync(PUBLIC_DATA_DIR);

  for (const dir of dirs) {
    const workflowDir = path.join(PUBLIC_DATA_DIR, dir);
    if (fs.statSync(workflowDir).isDirectory()) {
      const metadataPath = path.join(workflowDir, 'metadata.json');
      if (fs.existsSync(metadataPath)) {
        try {
          const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
          // 修复工作流的 slug 逻辑，使用 ID 作为 slug
          metadata.slug = metadata.id.toString();
          workflows.push(metadata);
          console.log(`已索引: ${metadata.id} - ${metadata.title}`);

          // 尝试生成详细信息文件
          const fullDataPath = path.join(workflowDir, `${metadata.id}.json`);
          if (fs.existsSync(fullDataPath)) {
            const fullData = JSON.parse(fs.readFileSync(fullDataPath, 'utf-8'));
            const workflowDetail = fullData.workflow || fullData;
            
            let description = workflowDetail.description || metadata.description;
            // 清理描述中的冗余标题
            if (description) {
              description = description
                .replace(/^\*\*Workflow Description:.*?\*\*\n*/i, '')
                .replace(/^#+ .*?Overview\n*/i, '')
                .trim();
            }

            const detailedData = {
              ...metadata,
              disclaimer: "This workflow is provided as-is. Please review and test before using in production.",
              overview: {
                title: metadata.title,
                workflowName: workflowDetail.name || metadata.title,
                description: description,
                features: [],
                useCases: []
              },
              logicalBlocks: [],
              nodeDetails: (workflowDetail.workflow?.nodes || workflowDetail.nodes || []).map(node => ({
                name: node.name,
                type: node.type,
                role: node.type.split('.').pop(),
                configDescription: `Version ${node.typeVersion}`
              }))
            };

            const srcDetailPath = path.join(SRC_DATA_WORKFLOWS_DIR, `${metadata.id}.json`);
            fs.writeFileSync(srcDetailPath, JSON.stringify(detailedData, null, 2));
            console.log(`  已生成详情文件: ${srcDetailPath}`);
          }
        } catch (e) {
          console.error(`解析失败: ${metadataPath}`, e.message);
        }
      }
    }
  }

  // 按发布时间排序
  workflows.sort((a, b) => new Date(b.publishedAt || b.createdAt).getTime() - new Date(a.publishedAt || a.createdAt).getTime());

  fs.writeFileSync(INDEX_FILE, JSON.stringify(workflows, null, 2));
  console.log(`索引完成！共计 ${workflows.length} 个工作流。`);
  console.log(`索引文件已更新: ${INDEX_FILE}`);
}

reindex();