/**
 * 统计数据服务
 * 提供网站统计数据的获取功能
 */

import type { Stats } from '../types/workflow';
import { supabase, isSupabaseConfigured, handleSupabaseError, withRetry } from './supabase';
import { getAllMockWorkflows } from '../../data/mock-workflows';
import { mockCategories } from '../../data/mock-categories';
import { mockAuthors } from '../../data/mock-authors';
import { isWithinDays } from '../utils/date';

/**
 * 获取网站统计数据
 */
export async function getStats(): Promise<Stats> {
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    return getMockStats();
  }

  try {
    return await withRetry(async () => {
      // 并行获取所有统计数据
      const [workflowsResult, authorsResult, categoriesResult, downloadsResult, recentResult] =
        await Promise.all([
          // 总工作流数
          supabase!.from('workflows').select('*', { count: 'exact', head: true }),
          // 总作者数
          supabase!.from('authors').select('*', { count: 'exact', head: true }),
          // 总分类数
          supabase!.from('categories').select('*', { count: 'exact', head: true }),
          // 总下载量
          supabase!.from('workflows').select('downloads'),
          // 最近 30 天的工作流
          supabase!
            .from('workflows')
            .select('*', { count: 'exact', head: true })
            .gte('publishedAt', getDateDaysAgo(30)),
        ]);

      // 检查错误
      if (workflowsResult.error) handleSupabaseError(workflowsResult.error, 'getStats:workflows');
      if (authorsResult.error) handleSupabaseError(authorsResult.error, 'getStats:authors');
      if (categoriesResult.error) handleSupabaseError(categoriesResult.error, 'getStats:categories');
      if (downloadsResult.error) handleSupabaseError(downloadsResult.error, 'getStats:downloads');
      if (recentResult.error) handleSupabaseError(recentResult.error, 'getStats:recent');

      // 计算总下载量
      const totalDownloads = (downloadsResult.data || []).reduce(
        (sum: number, workflow: any) => sum + (workflow.downloads || 0),
        0
      );

      return {
        totalWorkflows: workflowsResult.count || 0,
        totalAuthors: authorsResult.count || 0,
        totalCategories: categoriesResult.count || 0,
        totalDownloads,
        recentWorkflows: recentResult.count || 0,
      };
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return getMockStats();
  }
}

/**
 * 获取工作流统计（按分类）
 */
export async function getWorkflowStatsByCategory(): Promise<
  Array<{ category: string; count: number }>
> {
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    return mockCategories.map((c) => ({
      category: c.name,
      count: c.workflowCount || 0,
    }));
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('categories')
        .select('name, workflowCount')
        .order('workflowCount', { ascending: false });

      if (error) {
        handleSupabaseError(error, 'getWorkflowStatsByCategory');
      }

      return (data || []).map((c: any) => ({
        category: c.name,
        count: c.workflowCount || 0,
      }));
    });
  } catch (error) {
    console.error('Error fetching workflow stats by category:', error);
    return mockCategories.map((c) => ({
      category: c.name,
      count: c.workflowCount || 0,
    }));
  }
}

/**
 * 获取工作流统计（按作者）
 */
export async function getWorkflowStatsByAuthor(): Promise<
  Array<{ author: string; count: number }>
> {
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    return mockAuthors.map((a) => ({
      author: a.name,
      count: a.workflowCount || 0,
    }));
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('authors')
        .select('name, workflowCount')
        .order('workflowCount', { ascending: false });

      if (error) {
        handleSupabaseError(error, 'getWorkflowStatsByAuthor');
      }

      return (data || []).map((a: any) => ({
        author: a.name,
        count: a.workflowCount || 0,
      }));
    });
  } catch (error) {
    console.error('Error fetching workflow stats by author:', error);
    return mockAuthors.map((a) => ({
      author: a.name,
      count: a.workflowCount || 0,
    }));
  }
}

/**
 * 获取工作流统计（按复杂度）
 */
export async function getWorkflowStatsByComplexity(): Promise<
  Array<{ complexity: string; count: number }>
> {
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    const workflows = getAllMockWorkflows(200);
    const stats = {
      beginner: 0,
      intermediate: 0,
      advanced: 0,
    };

    workflows.forEach((w) => {
      stats[w.complexityLevel]++;
    });

    return [
      { complexity: 'beginner', count: stats.beginner },
      { complexity: 'intermediate', count: stats.intermediate },
      { complexity: 'advanced', count: stats.advanced },
    ];
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('workflows')
        .select('complexityLevel');

      if (error) {
        handleSupabaseError(error, 'getWorkflowStatsByComplexity');
      }

      const stats = {
        beginner: 0,
        intermediate: 0,
        advanced: 0,
      };

      (data || []).forEach((w: any) => {
        if (w.complexityLevel in stats) {
          stats[w.complexityLevel as keyof typeof stats]++;
        }
      });

      return [
        { complexity: 'beginner', count: stats.beginner },
        { complexity: 'intermediate', count: stats.intermediate },
        { complexity: 'advanced', count: stats.advanced },
      ];
    });
  } catch (error) {
    console.error('Error fetching workflow stats by complexity:', error);
    const workflows = getAllMockWorkflows(200);
    const stats = {
      beginner: 0,
      intermediate: 0,
      advanced: 0,
    };

    workflows.forEach((w) => {
      stats[w.complexityLevel]++;
    });

    return [
      { complexity: 'beginner', count: stats.beginner },
      { complexity: 'intermediate', count: stats.intermediate },
      { complexity: 'advanced', count: stats.advanced },
    ];
  }
}

/**
 * 获取工作流统计（按价格）
 */
export async function getWorkflowStatsByPrice(): Promise<{
  free: number;
  paid: number;
}> {
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    const workflows = getAllMockWorkflows(200);
    return {
      free: workflows.filter((w) => w.price === 0).length,
      paid: workflows.filter((w) => w.price > 0).length,
    };
  }

  try {
    return await withRetry(async () => {
      const [freeResult, paidResult] = await Promise.all([
        supabase!
          .from('workflows')
          .select('*', { count: 'exact', head: true })
          .eq('price', 0),
        supabase!
          .from('workflows')
          .select('*', { count: 'exact', head: true })
          .gt('price', 0),
      ]);

      if (freeResult.error) handleSupabaseError(freeResult.error, 'getWorkflowStatsByPrice:free');
      if (paidResult.error) handleSupabaseError(paidResult.error, 'getWorkflowStatsByPrice:paid');

      return {
        free: freeResult.count || 0,
        paid: paidResult.count || 0,
      };
    });
  } catch (error) {
    console.error('Error fetching workflow stats by price:', error);
    const workflows = getAllMockWorkflows(200);
    return {
      free: workflows.filter((w) => w.price === 0).length,
      paid: workflows.filter((w) => w.price > 0).length,
    };
  }
}

/**
 * 获取热门工作流统计（最多浏览）
 */
export async function getTopWorkflowsByVisitors(limit = 10): Promise<
  Array<{ title: string; visitors: number }>
> {
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    const workflows = getAllMockWorkflows(200);
    return workflows
      .sort((a, b) => b.visitors - a.visitors)
      .slice(0, limit)
      .map((w) => ({
        title: w.title,
        visitors: w.visitors,
      }));
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('workflows')
        .select('title, visitors')
        .order('visitors', { ascending: false })
        .limit(limit);

      if (error) {
        handleSupabaseError(error, 'getTopWorkflowsByVisitors');
      }

      return (data || []).map((w: any) => ({
        title: w.title,
        visitors: w.visitors || 0,
      }));
    });
  } catch (error) {
    console.error('Error fetching top workflows by visitors:', error);
    const workflows = getAllMockWorkflows(200);
    return workflows
      .sort((a, b) => b.visitors - a.visitors)
      .slice(0, limit)
      .map((w) => ({
        title: w.title,
        visitors: w.visitors,
      }));
  }
}

/**
 * 辅助函数：获取 N 天前的日期
 */
function getDateDaysAgo(days: number): string {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString();
}

/**
 * 获取模拟统计数据
 */
function getMockStats(): Stats {
  const workflows = getAllMockWorkflows(200);
  const recentWorkflows = workflows.filter((w) => isWithinDays(w.publishedAt, 30));
  const totalDownloads = workflows.reduce((sum, w) => sum + w.downloads, 0);

  return {
    totalWorkflows: workflows.length,
    totalAuthors: mockAuthors.length,
    totalCategories: mockCategories.length,
    totalDownloads,
    recentWorkflows: recentWorkflows.length,
  };
}
