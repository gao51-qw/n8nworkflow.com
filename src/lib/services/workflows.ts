import type { Workflow, LoadMoreParams } from '../types/workflow';
import { supabase, isSupabaseConfigured, handleSupabaseError, withRetry } from './supabase';
import { getAllMockWorkflows, getMockWorkflowBySlug, getMockWorkflowById } from '../../data/mock-workflows';
import workflowsData from '../../data/workflows.json';
import { mockWorkflowDetails } from '../../data/mock-workflow-details';
import fs from 'node:fs';
import path from 'node:path';
import { formatShortDate } from '../utils/date';
import { fetchWorkflowsFromGitHub } from './n8n';

/**
 * 工作流数据服务
 * 提供工作流数据的获取和查询功能
 */

/**
 * 动态扫描 public/data/workflows 目录并获取工作流元数据
 */
function getLocalWorkflowsFromPublic(): Workflow[] {
  const workflows: Workflow[] = [];
  const publicWorkflowsDir = path.join(process.cwd(), 'public/data/workflows');

  if (!fs.existsSync(publicWorkflowsDir)) {
    return workflows;
  }

  try {
    const folders = fs.readdirSync(publicWorkflowsDir);
    for (const folder of folders) {
      const metadataPath = path.join(publicWorkflowsDir, folder, 'metadata.json');
      if (fs.existsSync(metadataPath)) {
        try {
          const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
          workflows.push(formatWorkflowData(metadata));
        } catch (e) {
          console.error(`Error parsing metadata for folder ${folder}:`, e);
        }
      }
    }
  } catch (e) {
    console.error('Error reading public workflows directory:', e);
  }

  return workflows;
}

/**
 * 获取工作流列表（支持分页、排序、筛选）
 */
export async function getWorkflows(params: Partial<LoadMoreParams> = {}): Promise<{
  workflows: Workflow[];
  total: number;
}> {
  const {
    offset = 0,
    limit = 12,
    category,
    author,
    complexity,
    sort = 'date-desc',
    price,
    time,
    type,
  } = params;

  // 1. 优先尝试从 public/data/workflows 动态扫描（确保新下载的能显示）
  let allLocalWorkflows = getLocalWorkflowsFromPublic();

  // 2. 合并 workflows.json 中的数据（去重）
  if (workflowsData && Array.isArray(workflowsData)) {
    const existingIds = new Set(allLocalWorkflows.map(w => w.id));
    const jsonWorkflows = (workflowsData as any[])
      .map(formatWorkflowData)
      .filter(w => !existingIds.has(w.id));
    allLocalWorkflows = [...allLocalWorkflows, ...jsonWorkflows];
  }

  if (allLocalWorkflows.length > 0) {
    let filtered = allLocalWorkflows;

    // 分类筛选
    if (category && category !== 'all') {
      filtered = filtered.filter((w) => 
        w.categories.some((c: string) => c.toLowerCase() === category.toLowerCase())
      );
    }

    // 复杂度筛选
    if (complexity && complexity !== 'all') {
      filtered = filtered.filter((w) => w.complexityLevel === complexity);
    }

    // 价格筛选
    if (price === 'free') {
      filtered = filtered.filter((w) => w.price === 0);
    } else if (price === 'paid') {
      filtered = filtered.filter((w) => w.price > 0);
    }

    // 时间筛选
    if (time && time !== 'all') {
      const now = new Date();
      let days = 0;
      switch (time) {
        case '7d': case '7days': case 'week': days = 7; break;
        case '30d': case '30days': case '1m': case 'month': days = 30; break;
        case '90d': case '90days': case 'quarter': days = 90; break;
        case '6m': case '6months': days = 180; break;
        case '1y': case 'year': days = 365; break;
        case '2y': days = 730; break;
        case '3y': days = 1095; break;
        case 'today': days = 1; break;
      }

      if (days > 0) {
        const cutoff = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
        filtered = filtered.filter((w) => new Date(w.publishedAt || w.createdAt) >= cutoff);
      }
    }

    // 排序
    filtered.sort((a, b) => {
      switch (sort) {
        case 'date-desc':
          return new Date(b.publishedAt || b.createdAt).getTime() - new Date(a.publishedAt || a.createdAt).getTime();
        case 'date-asc':
          return new Date(a.publishedAt || a.createdAt).getTime() - new Date(b.publishedAt || b.createdAt).getTime();
        case 'visitors-desc':
          return (b.visitors || 0) - (a.visitors || 0);
        case 'downloads-desc':
          return (b.downloads || 0) - (a.downloads || 0);
        default:
          return 0;
      }
    });

    return {
      workflows: filtered.slice(offset, offset + limit),
      total: filtered.length,
    };
  }

  // 尝试从 GitHub 获取数据
  try {
    const githubWorkflows = await fetchWorkflowsFromGitHub();
    if (githubWorkflows.length > 0) {
      let filtered = githubWorkflows;

      // 分类筛选（不区分大小写）
      if (category) {
        filtered = filtered.filter((w) => 
          w.categories.some((c: string) => c.toLowerCase() === category.toLowerCase())
        );
      }

      // 复杂度筛选
      if (complexity) {
        filtered = filtered.filter((w) => w.complexityLevel === complexity);
      }

      // 价格筛选
      if (price === 'free') {
        filtered = filtered.filter((w) => w.price === 0);
      } else if (price === 'paid') {
        filtered = filtered.filter((w) => w.price > 0);
      }

      // 时间筛选
      if (time && time !== 'all') {
        const now = new Date();
        let days = 0;
        switch (time) {
          case '7d': case '7days': case 'week': days = 7; break;
          case '30d': case '30days': case '1m': case 'month': days = 30; break;
          case '90d': case '90days': case 'quarter': days = 90; break;
          case '6m': case '6months': days = 180; break;
          case '1y': case 'year': days = 365; break;
          case '2y': days = 730; break;
          case '3y': days = 1095; break;
          case 'today': days = 1; break;
        }

        if (days > 0) {
          const cutoff = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
          filtered = filtered.filter((w) => new Date(w.publishedAt || w.createdAt) >= cutoff);
        }
      }

      // 排序
      filtered.sort((a, b) => {
        switch (sort) {
          case 'date-desc':
            return new Date(b.publishedAt || b.createdAt).getTime() - new Date(a.publishedAt || a.createdAt).getTime();
          case 'date-asc':
            return new Date(a.publishedAt || a.createdAt).getTime() - new Date(b.publishedAt || b.createdAt).getTime();
          case 'visitors-desc':
            return (b.visitors || 0) - (a.visitors || 0);
          case 'downloads-desc':
            return (b.downloads || 0) - (a.downloads || 0);
          default:
            return 0;
        }
      });

      return {
        workflows: filtered.slice(offset, offset + limit),
        total: filtered.length,
      };
    }
  } catch (error) {
    console.error('Failed to fetch workflows from GitHub, falling back to existing logic:', error);
  }

  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    return getMockWorkflows(params);
  }

  try {
    return await withRetry(async () => {
      let query = supabase!
        .from('workflows')
        .select(
          `
          *,
          author:authors(*),
          workflow_categories(category:categories(*))
        `,
          { count: 'exact' }
        );

      // 分类筛选
      if (category) {
        query = query.contains('categories', [category]);
      }

      // 作者筛选
      if (author) {
        query = query.eq('author.slug', author);
      }

      // 复杂度筛选
      if (complexity) {
        query = query.eq('complexityLevel', complexity);
      }

      // 价格筛选
      if (price === 'free') {
        query = query.eq('price', 0);
      } else if (price === 'paid') {
        query = query.gt('price', 0);
      }

      // 时间筛选
      if (time && time !== 'all') {
        const now = new Date();
        let startDate: Date;

        switch (time) {
          case 'today':
            startDate = new Date(now.setHours(0, 0, 0, 0));
            break;
          case '7d':
          case '7days':
          case 'week':
            startDate = new Date(now.setDate(now.getDate() - 7));
            break;
          case '1m':
          case 'month':
            startDate = new Date(now.setMonth(now.getMonth() - 1));
            break;
          case '6m':
          case '6months':
            startDate = new Date(now.setMonth(now.getMonth() - 6));
            break;
          case '1y':
          case 'year':
            startDate = new Date(now.setFullYear(now.getFullYear() - 1));
            break;
          case '2y':
            startDate = new Date(now.setFullYear(now.getFullYear() - 2));
            break;
          case '3y':
            startDate = new Date(now.setFullYear(now.getFullYear() - 3));
            break;
          default:
            startDate = new Date(0);
        }

        query = query.gte('publishedAt', startDate.toISOString());
      }

      // 类型筛选
      if (type === 'popular') {
        query = query.order('visitors', { ascending: false });
      } else if (type === 'recent') {
        query = query.order('publishedAt', { ascending: false });
      } else {
        // 排序
        switch (sort) {
          case 'date-desc':
            query = query.order('publishedAt', { ascending: false });
            break;
          case 'date-asc':
            query = query.order('publishedAt', { ascending: true });
            break;
          case 'visitors-desc':
            query = query.order('visitors', { ascending: false });
            break;
          case 'downloads-desc':
            query = query.order('downloads', { ascending: false });
            break;
          default:
            query = query.order('publishedAt', { ascending: false });
        }
      }

      // 分页
      query = query.range(offset, offset + limit - 1);

      const { data, error, count } = await query;

      if (error) {
        handleSupabaseError(error, 'getWorkflows');
      }

      // 格式化数据
      const workflows = (data || []).map(formatWorkflowData);

      return {
        workflows,
        total: count || 0,
      };
    });
  } catch (error) {
    console.error('Error fetching workflows:', error);
    // 降级到模拟数据
    return getMockWorkflows(params);
  }
}

/**
 * 根据 slug 获取单个工作流
 */
export async function getWorkflowBySlug(slug: string): Promise<Workflow | null> {
  // 优先尝试从本地 JSON 获取数据
  if (workflowsData && Array.isArray(workflowsData)) {
    const workflow = workflowsData.find((w) => w.slug === slug);
    if (workflow) return formatWorkflowData(workflow);
  }

  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    return getMockWorkflowBySlug(slug) || null;
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('workflows')
        .select(
          `
          *,
          author:authors(*),
          workflow_categories(category:categories(*))
        `
        )
        .eq('slug', slug)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // 未找到记录
          return null;
        }
        handleSupabaseError(error, 'getWorkflowBySlug');
      }

      return data ? formatWorkflowData(data) : null;
    });
  } catch (error) {
    console.error('Error fetching workflow by slug:', error);
    return getMockWorkflowBySlug(slug) || null;
  }
}

/**
 * 按分类获取工作流
 */
export async function getWorkflowsByCategory(
  categorySlug: string,
  offset = 0,
  limit = 12
): Promise<{ workflows: Workflow[]; total: number }> {
  return getWorkflows({ category: categorySlug, offset, limit });
}

/**
 * 按作者获取工作流
 */
export async function getWorkflowsByAuthor(
  authorSlug: string,
  offset = 0,
  limit = 12
): Promise<{ workflows: Workflow[]; total: number }> {
  return getWorkflows({ author: authorSlug, offset, limit });
}

/**
 * 按复杂度获取工作流
 */
export async function getWorkflowsByComplexity(
  complexity: 'beginner' | 'intermediate' | 'advanced',
  offset = 0,
  limit = 12
): Promise<{ workflows: Workflow[]; total: number }> {
  return getWorkflows({ complexity, offset, limit });
}

/**
 * 搜索工作流
 */
export async function searchWorkflows(
  query: string,
  params: {
    category?: string;
    complexity?: 'beginner' | 'intermediate' | 'advanced';
    price?: 'all' | 'free' | 'paid';
    offset?: number;
    limit?: number;
  } = {}
): Promise<{ workflows: Workflow[]; total: number }> {
  const { offset = 0, limit = 12, category, complexity, price } = params;

  // 如果未配置 Supabase，使用模拟数据搜索
  if (!isSupabaseConfigured()) {
    return searchMockWorkflows(query, params);
  }

  try {
    return await withRetry(async () => {
      let supabaseQuery = supabase!
        .from('workflows')
        .select(
          `
          *,
          author:authors(*),
          workflow_categories(category:categories(*))
        `,
          { count: 'exact' }
        )
        .or(`title.ilike.%${query}%,description.ilike.%${query}%`);

      // 应用筛选
      if (category) {
        supabaseQuery = supabaseQuery.contains('categories', [category]);
      }

      if (complexity) {
        supabaseQuery = supabaseQuery.eq('complexityLevel', complexity);
      }

      if (price === 'free') {
        supabaseQuery = supabaseQuery.eq('price', 0);
      } else if (price === 'paid') {
        supabaseQuery = supabaseQuery.gt('price', 0);
      }

      // 排序和分页
      supabaseQuery = supabaseQuery
        .order('visitors', { ascending: false })
        .range(offset, offset + limit - 1);

      const { data, error, count } = await supabaseQuery;

      if (error) {
        handleSupabaseError(error, 'searchWorkflows');
      }

      const workflows = (data || []).map(formatWorkflowData);

      return {
        workflows,
        total: count || 0,
      };
    });
  } catch (error) {
    console.error('Error searching workflows:', error);
    return searchMockWorkflows(query, params);
  }
}

/**
 * 获取热门工作流
 */
export async function getPopularWorkflows(
  limit = 12
): Promise<{ workflows: Workflow[]; total: number }> {
  return getWorkflows({ type: 'popular', limit, offset: 0 });
}

/**
 * 获取最新工作流
 */
export async function getRecentWorkflows(
  limit = 12
): Promise<{ workflows: Workflow[]; total: number }> {
  return getWorkflows({ type: 'recent', limit, offset: 0 });
}

/**
 * 格式化工作流数据
 */
function formatWorkflowData(data: any): Workflow {
  return {
    ...data,
    date: formatShortDate(data.publishedAt || data.createdAt),
    categories: data.workflow_categories?.map((wc: any) => wc.category.name) || data.categories || [],
  };
}

/**
 * 使用模拟数据获取工作流
 */
function getMockWorkflows(params: Partial<LoadMoreParams>): {
  workflows: Workflow[];
  total: number;
} {
  const { offset = 0, limit = 12, category, complexity, price, sort = 'date-desc' } = params;

  let workflows = getAllMockWorkflows(200);

  // 筛选（分类不区分大小写）
  if (category && category !== 'all') {
    workflows = workflows.filter((w) => 
      w.categories.some((c: string) => c.toLowerCase() === category.toLowerCase())
    );
  }

  if (complexity) {
    workflows = workflows.filter((w) => w.complexityLevel === complexity);
  }

  if (price === 'free') {
    workflows = workflows.filter((w) => w.price === 0);
  } else if (price === 'paid') {
    workflows = workflows.filter((w) => w.price > 0);
  }

  // 排序
  workflows.sort((a, b) => {
    switch (sort) {
      case 'date-desc':
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      case 'date-asc':
        return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
      case 'visitors-desc':
        return b.visitors - a.visitors;
      case 'downloads-desc':
        return b.downloads - a.downloads;
      default:
        return 0;
    }
  });

  const total = workflows.length;
  const paginatedWorkflows = workflows.slice(offset, offset + limit);

  return {
    workflows: paginatedWorkflows,
    total,
  };
}

/**
 * 使用模拟数据搜索工作流
 */
function searchMockWorkflows(
  query: string,
  params: {
    category?: string;
    complexity?: 'beginner' | 'intermediate' | 'advanced';
    price?: 'all' | 'free' | 'paid';
    offset?: number;
    limit?: number;
  }
): { workflows: Workflow[]; total: number } {
  const { offset = 0, limit = 12, category, complexity, price } = params;

  let workflows = getAllMockWorkflows(200);

  // 搜索
  const lowerQuery = query.toLowerCase();
  workflows = workflows.filter(
    (w) =>
      w.title.toLowerCase().includes(lowerQuery) ||
      w.description.toLowerCase().includes(lowerQuery)
  );

  // 筛选（分类不区分大小写）
  if (category && category !== 'all') {
    workflows = workflows.filter((w) => 
      w.categories.some((c: string) => c.toLowerCase() === category.toLowerCase())
    );
  }

  if (complexity) {
    workflows = workflows.filter((w) => w.complexityLevel === complexity);
  }

  if (price === 'free') {
    workflows = workflows.filter((w) => w.price === 0);
  } else if (price === 'paid') {
    workflows = workflows.filter((w) => w.price > 0);
  }

  const total = workflows.length;
  const paginatedWorkflows = workflows.slice(offset, offset + limit);

  return {
    workflows: paginatedWorkflows,
    total,
  };
}

/**
 * 获取各筛选项的匹配数量统计
 */
export async function getFilterCounts(): Promise<{
  time: { '7days': number; 'month': number; '6months': number; 'year': number; '2years': number; '3years': number };
  price: { all: number; free: number; paid: number };
  complexity: { all: number; beginner: number; intermediate: number; advanced: number };
  categories: { [categorySlug: string]: number };
}> {
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    return getMockFilterCounts();
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('workflows')
        .select('publishedAt, price, complexityLevel, workflow_categories(category:categories(slug))', {
          count: 'exact',
        });

      if (error) {
        handleSupabaseError(error, 'getFilterCounts');
      }

      const workflows = data || [];
      return calculateFilterCounts(workflows);
    });
  } catch (error) {
    console.error('Error fetching filter counts:', error);
    // 降级到模拟数据
    return getMockFilterCounts();
  }
}

/**
 * 辅助函数：处理模拟数据的筛选项统计
 */
function getMockFilterCounts(): {
  time: { '7days': number; 'month': number; '6months': number; 'year': number; '2years': number; '3years': number };
  price: { all: number; free: number; paid: number };
  complexity: { all: number; beginner: number; intermediate: number; advanced: number };
  categories: { [categorySlug: string]: number };
} {
  const workflows = getAllMockWorkflows(200);
  return calculateFilterCounts(workflows);
}

/**
 * 计算筛选项的匹配数量统计
 */
function calculateFilterCounts(
  workflows: any[]
): {
  time: { '7days': number; 'month': number; '6months': number; 'year': number; '2years': number; '3years': number };
  price: { all: number; free: number; paid: number };
  complexity: { all: number; beginner: number; intermediate: number; advanced: number };
  categories: { [categorySlug: string]: number };
} {
  const now = new Date();
  const counts = {
    time: {
      '7days': 0,
      'month': 0,
      '6months': 0,
      'year': 0,
      '2years': 0,
      '3years': 0,
    },
    price: {
      all: workflows.length,
      free: 0,
      paid: 0,
    },
    complexity: {
      all: workflows.length,
      beginner: 0,
      intermediate: 0,
      advanced: 0,
    },
    categories: {} as { [categorySlug: string]: number },
  };

  // 统计时间、价格和复杂度
  workflows.forEach((workflow) => {
    const publishedDate = new Date(workflow.publishedAt || workflow.createdAt);
    const daysDiff = Math.floor((now.getTime() - publishedDate.getTime()) / (1000 * 60 * 60 * 24));

    // 时间统计
    if (daysDiff <= 7) counts.time['7days']++;
    if (daysDiff <= 30) counts.time['month']++;
    if (daysDiff <= 180) counts.time['6months']++;
    if (daysDiff <= 365) counts.time['year']++;
    if (daysDiff <= 730) counts.time['2years']++;
    if (daysDiff <= 1095) counts.time['3years']++;

    // 价格统计
    if (workflow.price === 0) {
      counts.price.free++;
    } else {
      counts.price.paid++;
    }

    // 复杂度统计
    if (workflow.complexityLevel === 'beginner') {
      counts.complexity.beginner++;
    } else if (workflow.complexityLevel === 'intermediate') {
      counts.complexity.intermediate++;
    } else if (workflow.complexityLevel === 'advanced') {
      counts.complexity.advanced++;
    }

    // 分类统计
    const categories = workflow.workflow_categories || [];
    categories.forEach((wc: any) => {
      const categorySlug = wc.category?.slug || wc;
      if (categorySlug) {
        counts.categories[categorySlug] = (counts.categories[categorySlug] || 0) + 1;
      }
    });

    // 处理模拟数据中直接包含的分类
    if (Array.isArray(workflow.categories)) {
      workflow.categories.forEach((category: string) => {
        counts.categories[category] = (counts.categories[category] || 0) + 1;
      });
    }
  });

  return counts;
}

/**
 * ========================================================================
 * P0 阶段改版 - 新增服务函数
 * ========================================================================
 */

/**
 * 获取筛选计数 (支持 API 调用)
 * 用于在用户调整筛选条件时实时获取各选项的计数
 *
 * @param filters - 当前活跃的筛选条件
 * @returns 各筛选选项的计数结果
 *
 * TODO: 实现以下功能
 * 1. 根据当前筛选调查其他选项的计数
 * 2. 使用 Supabase 查询或本地计算
 * 3. 实现缓存策略（Redis或sessionStorage）
 * 4. 返回格式化的计数objeto
 */
export async function getFilterCountsV2(filters?: {
  timePeriod?: string | null;
  category?: string | null;
  complexity?: string | null;
  price?: 'all' | 'free' | 'paid';
}): Promise<{
  timePeriods: Record<string, number>;
  categories: Record<string, number>;
  complexities: Record<string, number>;
  price: Record<string, number>;
}> {
  try {
    // 构建查询条件，过滤当前活跃的筛选
    const queryParams: any = {};
    if (filters?.timePeriod && filters.timePeriod !== 'all') {
      queryParams.time = filters.timePeriod;
    }
    if (filters?.category && filters.category !== 'all') {
      queryParams.category = filters.category;
    }
    if (filters?.complexity && filters.complexity !== 'all') {
      queryParams.complexity = filters.complexity;
    }
    if (filters?.price && filters.price !== 'all') {
      queryParams.price = filters.price;
    }

    // 获取完整计数
    const allCounts = await getFilterCounts();
    
    // 如果有活跃筛选条件，计算受影响的计数
    if (Object.keys(queryParams).length > 0) {
      // 获取应用了当前筛选的工作流以计算其他选项的交叉计数
      const filtered = await getWorkflows(queryParams);
      const filteredWorkflows = filtered.workflows;
      
      // 重新计算受当前筛选影响的其他选项的计数
      const crossCounts = calculateFilterCounts(filteredWorkflows);
      
      // 合并结果：保持全部选项，但使用交叉计数
      return {
        timePeriods: {
          ...allCounts.time,
          // 对于时间段，如果不是活跃的筛选条件，使用交叉计数
          ...(filters?.timePeriod ? {} : crossCounts.time),
        },
        categories: {
          ...allCounts.categories,
          ...(filters?.category ? {} : crossCounts.categories),
        },
        complexities: {
          ...allCounts.complexity,
          ...(filters?.complexity ? {} : crossCounts.complexity),
        },
        price: {
          ...allCounts.price,
          ...(filters?.price ? {} : crossCounts.price),
        },
      };
    }

    // 没有活跃筛选，返回全部计数
    return {
      timePeriods: allCounts.time,
      categories: allCounts.categories,
      complexities: allCounts.complexity,
      price: allCounts.price,
    };
  } catch (error) {
    console.error('Error in getFilterCountsV2:', error);
    // 返回默认计数以保证 API 鲁棒性
    return {
      timePeriods: { all: 7947, '7days': 8, month: 374, '6months': 4508, year: 6758 },
      categories: { 'multimodal-ai': 2270, ai: 1600 },
      complexities: { all: 7947, beginner: 500, intermediate: 2835, advanced: 4602 },
      price: { all: 7947, free: 6898, paid: 1049 },
    };
  }
}

/**
 * 获取指定时间段的工作流
 *
 * @param period - 时间段 ('7days' | 'month' | '6months' | '1year')
 * @param page - 页码（默认1）
 * @param limit - 每页数量（默认12）
 * @returns 工作流列表和分页信息
 *
 * TODO: 实现以下功能
 * 1. 计算时间范围
 * 2. 查询指定时间段发布的工作流
 * 3. 应用分页
 * 4. 按发布时间排序
 */
export async function getWorkflowsByTimePeriod(
  period: '7days' | 'month' | '6months' | '1year',
  page: number = 1,
  limit: number = 12
): Promise<{ workflows: Workflow[]; total: number; page: number; totalPages: number }>{
  // 计算时间范围
  const now = new Date();
  let startDate: Date;
  
  switch (period) {
    case '7days':
      startDate = new Date(now.setDate(now.getDate() - 7));
      break;
    case 'month':
      startDate = new Date(now.setMonth(now.getMonth() - 1));
      break;
    case '6months':
      startDate = new Date(now.setMonth(now.getMonth() - 6));
      break;
    case '1year':
      startDate = new Date(now.setFullYear(now.getFullYear() - 1));
      break;
    default:
      startDate = new Date(0);
  }

  // 获取工作流数据
  const { workflows, total } = await getWorkflows({
    time: period,
    offset: (page - 1) * limit,
    limit,
    sort: 'date-desc'
  });

  return {
    workflows,
    total,
    page,
    totalPages: Math.ceil(total / limit)
  };
}

/**
 * 获取工作流详细信息 (包含结构化内容)
 *
 * @param workflowId - 工作流 ID
 * @returns 完整的 WorkflowDetailed 对象
 *
 * TODO: 实现以下功能
 * 1. 获取基础工作流信息
 * 2. 从 workflow_details 表获取扩展内容
 * 3. 合并两部分数据
 * 4. 返回 WorkflowDetailed 对象
 */
export async function getWorkflowDetailedById(workflowId: number): Promise<any> {
  // 优先尝试从本地 JSON 文件获取详情
  try {
    // 获取基础信息以确保有最新的 featuredImage
    const baseWorkflow = workflowsData?.find((w: any) => w.id === workflowId);

    // 注意：在 Astro 服务端渲染时可以使用 fs
    const detailPath = path.join(process.cwd(), `src/data/workflows/${workflowId}.json`);
    if (fs.existsSync(detailPath)) {
      const detailData = JSON.parse(fs.readFileSync(detailPath, 'utf-8'));
      return {
        ...detailData,
        ...(baseWorkflow || {}),
        // 确保优先使用 baseWorkflow 中的 featuredImage
        featuredImage: baseWorkflow?.featuredImage || detailData.featuredImage
      };
    }
  } catch (err) {
    console.error(`Error reading local workflow detail for ${workflowId}:`, err);
  }

  if (!isSupabaseConfigured()) {
    // 如果未配置 Supabase，返回模拟数据
    return {
      id: workflowId,
      title: 'Sample Workflow',
      description: 'This is a sample workflow',
      slug: 'sample-workflow',
      thumbnail: '/placeholder-workflow.svg',
      author: { id: 1, slug: 'author-1', name: 'John Doe' },
      categories: ['AI'],
      complexityLevel: 'intermediate',
      price: 0,
      visitors: 100,
      downloads: 50,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      disclaimer: 'This is a sample workflow',
      overview: {
        title: 'Sample Workflow Overview',
        workflowName: 'sample_workflow_v1',
        description: 'A sample workflow description',
      },
    };
  }

  try {
    return await withRetry(async () => {
      const { data: baseWorkflow, error: baseError } = await supabase!
        .from('workflows')
        .select(
          `
          *,
          author:authors(*),
          workflow_categories(category:categories(*))
        `
        )
        .eq('id', workflowId)
        .single();

      if (baseError) {
        if (baseError.code === 'PGRST116') {
          // 工作流不存在
          return null;
        }
        handleSupabaseError(baseError, 'getWorkflowDetailedById');
        return null;
      }

      // 尝试获取详情内容
      const { data: detailsData } = await supabase!
        .from('workflow_details')
        .select('*')
        .eq('workflow_id', workflowId)
        .single();

      // 合并基础信息和详情信息
      const formatted = formatWorkflowData(baseWorkflow);
      
      if (detailsData) {
        return {
          ...formatted,
          disclaimer: detailsData.disclaimer,
          overview: detailsData.overview,
          logicalBlocks: detailsData.logical_blocks,
          nodeDetails: detailsData.node_details,
          updatedContentAt: detailsData.updated_at,
        };
      }

      // 如果没有详情数据，返回基础工作流
      return formatted;
    });
  } catch (error) {
    console.error('Error fetching workflow details:', error);
    return null;
  }
}

/**
 * 使用详情信息扩展工作流数据
 *
 * @param workflow - 基础工作流对象
 * @returns 扩展后的 WorkflowDetailed 对象
 *
 * TODO: 实现以下功能
 * 1. 从 workflow_details 表获取扩展数据
 * 2. 合并基础和详情数据
 */
export async function enrichWorkflowWithDetails(workflow: Workflow): Promise<any> {
  // 获取工作流详情
  const detailedWorkflow = await getWorkflowDetailedById(workflow.id);

  if (detailedWorkflow) {
    return {
      ...workflow,
      ...detailedWorkflow,
      // 确保保留基础工作流的所有字段
      id: workflow.id,
      slug: workflow.slug,
      title: workflow.title,
      description: workflow.description
    };
  }

  return { ...workflow };
}

/**
 * 获取相关工作流
 *
 * @param workflowId - 工作流 ID
 * @param limit - 返回数量（默认5）
 * @returns 相关工作流列表
 *
 * TODO: 实现以下功能
 * 1. 基于分类获取相似工作流
 * 2. 排除当前工作流
 * 3. 按热度排序
 */
export async function getRelatedWorkflows(
  workflowId: number,
  limit: number = 5
): Promise<Workflow[]> {
  // 获取当前工作流
  const currentWorkflow = await getWorkflowBySlug(workflowId.toString());
  
  if (!currentWorkflow) {
    return [];
  }
  
  // 获取相同分类的工作流
  const relatedWorkflows: Workflow[] = [];
  
  for (const category of currentWorkflow.categories) {
    const { workflows } = await getWorkflowsByCategory(category, 0, limit);
    
    // 过滤掉当前工作流并确保唯一性
    workflows.forEach(workflow => {
      if (workflow.id !== workflowId && 
          !relatedWorkflows.some(w => w.id === workflow.id)) {
        relatedWorkflows.push(workflow);
      }
    });
    
    // 如果已经达到限制，提前结束
    if (relatedWorkflows.length >= limit) {
      break;
    }
  }
  
  // 按热度排序
  return relatedWorkflows
    .sort((a, b) => (b.visitors || 0) - (a.visitors || 0))
    .slice(0, limit);
}

/**
 * 订阅 Newsletter
 *
 * @param email - 邮箱地址
 * @param preferences - 订阅偏好
 * @returns 订阅结果
 *
 * TODO: 实现以下功能
 * 1. 验证邮箱地址
 * 2. 保存到 newsletter_subscriptions 表
 * 3. 调用 Mailchimp/SendGrid API
 * 4. 发送确认邮件
 */
export async function subscribeNewsletter(
  email: string,
  preferences?: {
    frequency: 'daily' | 'weekly' | 'monthly';
    categories: string[];
    source?: string;
  }
): Promise<{ success: boolean; message: string; subscriptionId?: string }> {
  // 验证邮箱地址
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return { success: false, message: 'Invalid email address' };
  }

  // 如果未配置 Supabase，返回模拟成功
  if (!isSupabaseConfigured()) {
    return {
      success: true,
      message: 'Subscription successful (mock)',
      subscriptionId: 'mock-' + Math.random().toString(36).substring(2, 9)
    };
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('newsletter_subscriptions')
        .insert([{
          email,
          preferences: preferences || {},
          source: preferences?.source || 'website',
          status: 'active',
          subscribed_at: new Date().toISOString()
        }])
        .select()
        .single();
  
      if (error) {
        handleSupabaseError(error, 'subscribeNewsletter');
        return { success: false, message: 'Failed to subscribe' };
      }
  
      return {
        success: true,
        message: 'Subscription successful',
        subscriptionId: data.id
      };
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return { success: false, message: 'Subscription failed' };
  }
}

/**
 * 提交工作流审核
 *
 * @param submission - 工作流提交信息
 * @returns 提交结果
 *
 * TODO: 实现以下功能
 * 1. 验证提交数据
 * 2. 计算垃圾邮件评分
 * 3. 保存到 workflow_submissions 表
 * 4. 发送确认邮件
 * 5. 通知审核员
 */
export async function submitWorkflow(submission: {
  title: string;
  description: string;
  workflowUrl: string;
  categories: string[];
  complexity?: string;
  submitterEmail: string;
  submitterName?: string;
}): Promise<{ success: boolean; message: string; submissionId?: string }> {
  // 验证提交数据
  if (!submission.title || submission.title.length < 3 || submission.title.length > 100) {
    return { success: false, message: 'Title must be 3-100 characters' };
  }

  if (!submission.description || submission.description.length < 10) {
    return { success: false, message: 'Description must be at least 10 characters' };
  }

  if (!submission.workflowUrl || !/^https?:\/\/.+/.test(submission.workflowUrl)) {
    return { success: false, message: 'Invalid workflow URL' };
  }

  if (!submission.categories || submission.categories.length === 0) {
    return { success: false, message: 'At least one category is required' };
  }

  if (!submission.submitterEmail || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(submission.submitterEmail)) {
    return { success: false, message: 'Invalid submitter email' };
  }

  // 如果未配置 Supabase，返回模拟成功
  if (!isSupabaseConfigured()) {
    return {
      success: true,
      message: 'Workflow submission successful (mock)',
      submissionId: 'mock-' + Math.random().toString(36).substring(2, 9)
    };
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('workflow_submissions')
        .insert([{
          title: submission.title,
          description: submission.description,
          workflow_url: submission.workflowUrl,
          categories: submission.categories,
          complexity: submission.complexity || 'intermediate',
          submitter_email: submission.submitterEmail,
          submitter_name: submission.submitterName || '',
          status: 'pending',
          submitted_at: new Date().toISOString()
        }])
        .select()
        .single();

      if (error) {
        handleSupabaseError(error, 'submitWorkflow');
        return { success: false, message: 'Failed to submit workflow' };
      }

      return {
        success: true,
        message: 'Workflow submission successful',
        submissionId: data.id
      };
    });
  } catch (error) {
    console.error('Error submitting workflow:', error);
    return { success: false, message: 'Workflow submission failed' };
  }
}

/**
 * 获取工作流评分和评论
 *
 * @param workflowId - 工作流 ID
 * @param limit - 返回数量
 * @returns 评论列表
 *
 * TODO: 实现以下功能
 * 1. 从 workflow_reviews 表查询
 * 2. 按有用程度排序
 * 3. 分页返回
 */
export async function getWorkflowReviews(
  workflowId: number,
  limit: number = 10
): Promise<any[]> {
  // 如果未配置 Supabase，返回空数组
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('workflow_reviews')
        .select('*')
        .eq('workflow_id', workflowId)
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) {
        handleSupabaseError(error, 'getWorkflowReviews');
        return [];
      }

      return data || [];
    });
  } catch (error) {
    console.error('Error fetching workflow reviews:', error);
    return [];
  }
}

/**
 * 添加工作流评论
 *
 * @param review - 评论信息
 * @returns 添加结果
 *
 * TODO: 实现以下功能
 * 1. 验证评论数据
 * 2. 保存到 workflow_reviews 表
 * 3. 更新工作流平均评分
 */
export async function addWorkflowReview(review: {
  workflowId: number;
  rating: number;
  comment: string;
  reviewerName?: string;
  reviewerEmail?: string;
}): Promise<{ success: boolean; message: string }> {
  // 验证评论数据
  if (!review.workflowId || review.workflowId <= 0) {
    return { success: false, message: 'Invalid workflow ID' };
  }

  if (!review.rating || review.rating < 1 || review.rating > 5) {
    return { success: false, message: 'Rating must be between 1 and 5' };
  }

  if (!review.comment || review.comment.length < 5) {
    return { success: false, message: 'Comment must be at least 5 characters' };
  }

  // 如果未配置 Supabase，返回模拟成功
  if (!isSupabaseConfigured()) {
    return {
      success: true,
      message: 'Review added successfully (mock)'
    };
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('workflow_reviews')
        .insert([{
          workflow_id: review.workflowId,
          rating: review.rating,
          comment: review.comment,
          reviewer_name: review.reviewerName || 'Anonymous',
          reviewer_email: review.reviewerEmail || '',
          created_at: new Date().toISOString(),
          status: 'approved'
        }]);

      if (error) {
        handleSupabaseError(error, 'addWorkflowReview');
        return { success: false, message: 'Failed to add review' };
      }

      // 更新工作流平均评分
      const { error: updateError } = await supabase!
        .rpc('update_workflow_rating', {
          workflow_id: review.workflowId
        });

      if (updateError) {
        console.error('Failed to update workflow rating:', updateError);
      }

      return {
        success: true,
        message: 'Review added successfully'
      };
    });
  } catch (error) {
    console.error('Error adding workflow review:', error);
    return { success: false, message: 'Failed to add review' };
  }
}
