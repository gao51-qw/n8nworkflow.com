/**
 * 工作流数据服务
 * 提供工作流数据的获取和查询功能
 */

import type { Workflow, LoadMoreParams } from '../types/workflow';
import { supabase, isSupabaseConfigured, handleSupabaseError, withRetry } from './supabase';
import { getAllMockWorkflows, getMockWorkflowBySlug } from '../../data/mock-workflows';
import { formatShortDate } from '../utils/date';

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
          case 'week':
            startDate = new Date(now.setDate(now.getDate() - 7));
            break;
          case 'month':
            startDate = new Date(now.setMonth(now.getMonth() - 1));
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

  // 筛选
  if (category) {
    workflows = workflows.filter((w) => w.categories.includes(category));
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

  // 筛选
  if (category) {
    workflows = workflows.filter((w) => w.categories.includes(category));
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
