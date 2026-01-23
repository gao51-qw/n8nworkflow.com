/**
 * 分类数据服务
 * 提供分类数据的获取和查询功能
 */

import type { Category } from '../types/workflow';
import { supabase, isSupabaseConfigured, handleSupabaseError, withRetry } from './supabase';
import { mockCategories, getMockCategoryBySlug, getPopularMockCategories } from '../../data/mock-categories';
import workflowsData from '../../data/workflows.json';

/**
 * 获取所有分类
 */
export async function getCategories(): Promise<Category[]> {
  // 从工作流数据中提取所有分类
  const categoriesMap = new Map<string, Category>();
  
  // 从本地工作流数据中提取分类
  if (workflowsData && Array.isArray(workflowsData)) {
    workflowsData.forEach((workflow: any) => {
      if (workflow.categories && Array.isArray(workflow.categories)) {
        workflow.categories.forEach((catName: string) => {
          const slug = catName.toLowerCase().trim().replace(/\s+/g, '-');
          if (!categoriesMap.has(slug)) {
            // 尝试从模拟数据中获取更详细的信息
            const mockCat = getMockCategoryBySlug(slug);
            categoriesMap.set(slug, {
              id: mockCat?.id || Math.floor(Math.random() * 10000),
              slug: slug,
              name: catName,
              ...(mockCat || {}),
              workflowCount: 1
            });
          } else {
            const cat = categoriesMap.get(slug)!;
            cat.workflowCount = (cat.workflowCount || 0) + 1;
          }
        });
      }
    });
  }

  // 如果未配置 Supabase，返回提取到的分类列表
  if (!isSupabaseConfigured()) {
    return Array.from(categoriesMap.values());
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('categories')
        .select('*')
        .order('name', { ascending: true });

      if (error) {
        handleSupabaseError(error, 'getCategories');
      }

      return data || [];
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return mockCategories;
  }
}

/**
 * 根据 slug 获取分类
 */
export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const categories = await getCategories();
  const category = categories.find(c => c.slug === slug);
  if (category) return category;

  // 如果未配置 Supabase，返回 null
  if (!isSupabaseConfigured()) {
    return null;
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('categories')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // 未找到记录
          return null;
        }
        handleSupabaseError(error, 'getCategoryBySlug');
      }

      return data;
    });
  } catch (error) {
    console.error('Error fetching category by slug:', error);
    return getMockCategoryBySlug(slug) || null;
  }
}

/**
 * 根据 ID 获取分类
 */
export async function getCategoryById(id: number): Promise<Category | null> {
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    return mockCategories.find((c) => c.id === id) || null;
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('categories')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null;
        }
        handleSupabaseError(error, 'getCategoryById');
      }

      return data;
    });
  } catch (error) {
    console.error('Error fetching category by id:', error);
    return mockCategories.find((c) => c.id === id) || null;
  }
}

/**
 * 获取热门分类（按工作流数量排序）
 */
export async function getPopularCategories(limit = 5): Promise<Category[]> {
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    return getPopularMockCategories(limit);
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('categories')
        .select('*')
        .order('workflowCount', { ascending: false })
        .limit(limit);

      if (error) {
        handleSupabaseError(error, 'getPopularCategories');
      }

      return data || [];
    });
  } catch (error) {
    console.error('Error fetching popular categories:', error);
    return getPopularMockCategories(limit);
  }
}

/**
 * 获取分类统计信息
 */
export async function getCategoryStats(): Promise<{
  total: number;
  categories: Array<{ name: string; count: number }>;
}> {
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    return {
      total: mockCategories.length,
      categories: mockCategories.map((c) => ({
        name: c.name,
        count: c.workflowCount || 0,
      })),
    };
  }

  try {
    return await withRetry(async () => {
      const { data, error, count } = await supabase!
        .from('categories')
        .select('name, workflowCount', { count: 'exact' })
        .order('workflowCount', { ascending: false });

      if (error) {
        handleSupabaseError(error, 'getCategoryStats');
      }

      return {
        total: count || 0,
        categories: (data || []).map((c: any) => ({
          name: c.name,
          count: c.workflowCount || 0,
        })),
      };
    });
  } catch (error) {
    console.error('Error fetching category stats:', error);
    return {
      total: mockCategories.length,
      categories: mockCategories.map((c) => ({
        name: c.name,
        count: c.workflowCount || 0,
      })),
    };
  }
}
