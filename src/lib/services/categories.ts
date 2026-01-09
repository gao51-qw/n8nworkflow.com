/**
 * 分类数据服务
 * 提供分类数据的获取和查询功能
 */

import type { Category } from '../types/workflow';
import { supabase, isSupabaseConfigured, handleSupabaseError, withRetry } from './supabase';
import { mockCategories, getMockCategoryBySlug, getPopularMockCategories } from '../../data/mock-categories';

/**
 * 获取所有分类
 */
export async function getCategories(): Promise<Category[]> {
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    return mockCategories;
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
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    return getMockCategoryBySlug(slug) || null;
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
