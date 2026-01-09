/**
 * 作者数据服务
 * 提供作者数据的获取和查询功能
 */

import type { Author } from '../types/workflow';
import { supabase, isSupabaseConfigured, handleSupabaseError, withRetry } from './supabase';
import { mockAuthors, getMockAuthorBySlug, getMockAuthorById } from '../../data/mock-authors';

/**
 * 获取所有作者
 */
export async function getAuthors(): Promise<Author[]> {
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    return mockAuthors;
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('authors')
        .select('*')
        .order('name', { ascending: true });

      if (error) {
        handleSupabaseError(error, 'getAuthors');
      }

      return data || [];
    });
  } catch (error) {
    console.error('Error fetching authors:', error);
    return mockAuthors;
  }
}

/**
 * 根据 slug 获取作者
 */
export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    return getMockAuthorBySlug(slug) || null;
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('authors')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // 未找到记录
          return null;
        }
        handleSupabaseError(error, 'getAuthorBySlug');
      }

      return data;
    });
  } catch (error) {
    console.error('Error fetching author by slug:', error);
    return getMockAuthorBySlug(slug) || null;
  }
}

/**
 * 根据 ID 获取作者
 */
export async function getAuthorById(id: number): Promise<Author | null> {
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    return getMockAuthorById(id) || null;
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('authors')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null;
        }
        handleSupabaseError(error, 'getAuthorById');
      }

      return data;
    });
  } catch (error) {
    console.error('Error fetching author by id:', error);
    return getMockAuthorById(id) || null;
  }
}

/**
 * 获取热门作者（按工作流数量排序）
 */
export async function getPopularAuthors(limit = 10): Promise<Author[]> {
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    return [...mockAuthors]
      .sort((a, b) => (b.workflowCount || 0) - (a.workflowCount || 0))
      .slice(0, limit);
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('authors')
        .select('*')
        .order('workflowCount', { ascending: false })
        .limit(limit);

      if (error) {
        handleSupabaseError(error, 'getPopularAuthors');
      }

      return data || [];
    });
  } catch (error) {
    console.error('Error fetching popular authors:', error);
    return [...mockAuthors]
      .sort((a, b) => (b.workflowCount || 0) - (a.workflowCount || 0))
      .slice(0, limit);
  }
}

/**
 * 获取作者统计信息
 */
export async function getAuthorStats(): Promise<{
  total: number;
  authors: Array<{ name: string; count: number }>;
}> {
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    return {
      total: mockAuthors.length,
      authors: mockAuthors.map((a) => ({
        name: a.name,
        count: a.workflowCount || 0,
      })),
    };
  }

  try {
    return await withRetry(async () => {
      const { data, error, count } = await supabase!
        .from('authors')
        .select('name, workflowCount', { count: 'exact' })
        .order('workflowCount', { ascending: false });

      if (error) {
        handleSupabaseError(error, 'getAuthorStats');
      }

      return {
        total: count || 0,
        authors: (data || []).map((a: any) => ({
          name: a.name,
          count: a.workflowCount || 0,
        })),
      };
    });
  } catch (error) {
    console.error('Error fetching author stats:', error);
    return {
      total: mockAuthors.length,
      authors: mockAuthors.map((a) => ({
        name: a.name,
        count: a.workflowCount || 0,
      })),
    };
  }
}

/**
 * 搜索作者
 */
export async function searchAuthors(query: string, limit = 10): Promise<Author[]> {
  // 如果未配置 Supabase，使用模拟数据
  if (!isSupabaseConfigured()) {
    const lowerQuery = query.toLowerCase();
    return mockAuthors
      .filter(
        (a) =>
          a.name.toLowerCase().includes(lowerQuery) ||
          a.bio?.toLowerCase().includes(lowerQuery)
      )
      .slice(0, limit);
  }

  try {
    return await withRetry(async () => {
      const { data, error } = await supabase!
        .from('authors')
        .select('*')
        .or(`name.ilike.%${query}%,bio.ilike.%${query}%`)
        .limit(limit);

      if (error) {
        handleSupabaseError(error, 'searchAuthors');
      }

      return data || [];
    });
  } catch (error) {
    console.error('Error searching authors:', error);
    const lowerQuery = query.toLowerCase();
    return mockAuthors
      .filter(
        (a) =>
          a.name.toLowerCase().includes(lowerQuery) ||
          a.bio?.toLowerCase().includes(lowerQuery)
      )
      .slice(0, limit);
  }
}
