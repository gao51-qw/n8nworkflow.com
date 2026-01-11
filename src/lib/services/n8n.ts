/**
 * N8N API 服务
 * 用于从 N8N 实例获取工作流数据
 */

import type { Workflow } from '../types/workflow';

/**
 * N8N API 配置接口
 */
interface N8NConfig {
  apiUrl: string;
  apiKey: string;
}

/**
 * N8N 工作流数据接口
 */
interface N8NWorkflow {
  id: string | number;
  name: string;
  description?: string;
  tags?: string[];
  nodes?: any[];
  connections?: any;
  createdAt?: string;
  updatedAt?: string;
  active?: boolean;
  [key: string]: any;
}

/**
 * 根据节点数确定工作流复杂度
 */
function getComplexityLevel(nodeCount: number): 'beginner' | 'intermediate' | 'advanced' {
  if (nodeCount >= 15) {
    return 'advanced';
  } else if (nodeCount >= 5) {
    return 'intermediate';
  }
  return 'beginner';
}

/**
 * 获取 N8N 配置
 */
function getN8NConfig(): N8NConfig | null {
  const apiUrl = import.meta.env.N8N_API_URL;
  const apiKey = import.meta.env.N8N_API_KEY;

  if (!apiUrl || !apiKey) {
    console.warn('N8N API 未配置。请设置 N8N_API_URL 和 N8N_API_KEY 环境变量。');
    return null;
  }

  return { apiUrl, apiKey };
}

/**
 * 检查 N8N API 是否可用
 */
export function isN8NConfigured(): boolean {
  return getN8NConfig() !== null;
}

/**
 * 从 N8N 实例获取所有工作流
 */
export async function getN8NWorkflows(): Promise<N8NWorkflow[]> {
  const config = getN8NConfig();
  if (!config) {
    return [];
  }

  try {
    const response = await fetch(`${config.apiUrl}/api/v1/workflows`, {
      method: 'GET',
      headers: {
        'X-N8N-API-KEY': config.apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch N8N workflows: ${response.status} ${response.statusText}`
      );
      return [];
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching N8N workflows:', error);
    return [];
  }
}

/**
 * 从 N8N 实例获取单个工作流详情
 */
export async function getN8NWorkflow(workflowId: string | number): Promise<N8NWorkflow | null> {
  const config = getN8NConfig();
  if (!config) {
    return null;
  }

  try {
    const response = await fetch(`${config.apiUrl}/api/v1/workflows/${workflowId}`, {
      method: 'GET',
      headers: {
        'X-N8N-API-KEY': config.apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch N8N workflow ${workflowId}: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error(`Error fetching N8N workflow ${workflowId}:`, error);
    return null;
  }
}

/**
 * 将 N8N 工作流数据转换为本地 Workflow 格式
 */
function transformN8NWorkflow(n8nWf: N8NWorkflow): Workflow {
  const id = typeof n8nWf.id === 'string' ? parseInt(n8nWf.id, 10) : n8nWf.id;
  const createdAt = n8nWf.createdAt || new Date().toISOString();
  const updatedAt = n8nWf.updatedAt || createdAt;

  return {
    id: id || Math.floor(Math.random() * 100000),
    slug: n8nWf.name.toLowerCase().replace(/\s+/g, '-'),
    title: n8nWf.name,
    description: n8nWf.description || `N8N workflow: ${n8nWf.name}`,
    thumbnail: '', // N8N 不提供缩略图，可使用默认占位符
    author: {
      id: 1,
      name: 'N8N Demo',
      slug: 'n8n-demo',
      bio: 'Official N8N demo workflows',
      avatar: '',
    },
    categories: n8nWf.tags || ['N8N Demo'],
    complexityLevel: getComplexityLevel(n8nWf.nodes?.length || 0),
    price: 0,
    visitors: 0,
    downloads: 0,
    createdAt,
    updatedAt,
    publishedAt: createdAt,
    date: formatShortDate(createdAt),
    nodes: n8nWf.nodes?.length || 0,
    version: '1.0.0',
    sourceUrl: `n8n-demo://${n8nWf.id}`, // 标记为来自 N8N demo
  };
}

/**
 * 格式化短日期
 */
function formatShortDate(dateString: string): string {
  const date = new Date(dateString);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

/**
 * 从 N8N 实例获取工作流列表（转换格式）
 */
export async function getN8NWorkflowsList(): Promise<Workflow[]> {
  const n8nWorkflows = await getN8NWorkflows();
  return n8nWorkflows.map(transformN8NWorkflow);
}

/**
 * 混合 Supabase 和 N8N 工作流数据
 * @param supabaseWorkflows - 来自 Supabase 的工作流
 * @param includeN8N - 是否包含 N8N demo 工作流
 * @returns 融合后的工作流列表
 */
export async function mergeWorkflows(
  supabaseWorkflows: Workflow[],
  includeN8N: boolean = false
): Promise<Workflow[]> {
  if (!includeN8N || !isN8NConfigured()) {
    return supabaseWorkflows;
  }

  try {
    const n8nWorkflows = await getN8NWorkflowsList();
    // 将 N8N 工作流追加到 Supabase 工作流后面
    return [...supabaseWorkflows, ...n8nWorkflows];
  } catch (error) {
    console.error('Error merging N8N workflows:', error);
    return supabaseWorkflows;
  }
}

/**
 * 从 GitHub 获取工作流数据
 */
export async function fetchWorkflowsFromGitHub(): Promise<Workflow[]> {
  const token = import.meta.env.GITHUB_TOKEN;
  const owner = import.meta.env.GITHUB_OWNER;
  const repo = import.meta.env.GITHUB_REPO;

  if (!token || !owner || !repo) {
    console.warn('GitHub 配置不完整。请设置 GITHUB_TOKEN, GITHUB_OWNER 和 GITHUB_REPO 环境变量。');
    return [];
  }

  try {
    // 1. 获取 workflows/ 目录下的内容
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/workflows`, {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch workflows directory: ${response.status} ${response.statusText}`);
      return [];
    }

    const contents = await response.json();
    const directories = contents.filter((item: any) => item.type === 'dir');

    const workflows: Workflow[] = [];

    // 2. 遍历每个目录获取 metadata.json
    for (const dir of directories) {
      try {
        const metaResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/workflows/${dir.name}/metadata.json`, {
          headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3.raw',
          },
        });

        if (metaResponse.ok) {
          const metadata = await metaResponse.json();
          // 确保 metadata 符合 Workflow 接口
          // 如果 metadata.json 中的格式与 Workflow 接口略有不同，可以在这里进行转换
          workflows.push(metadata as Workflow);
        }
      } catch (err) {
        console.error(`Error fetching metadata for ${dir.name}:`, err);
      }
    }

    return workflows;
  } catch (error) {
    console.error('Error fetching workflows from GitHub:', error);
    return [];
  }
}
