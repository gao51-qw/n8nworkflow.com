/**
 * Supabase 客户端配置和初始化
 * 提供数据库连接和查询功能
 */

import { createClient } from '@supabase/supabase-js';

// 环境变量
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// 检查环境变量是否存在
const hasSupabaseConfig = Boolean(supabaseUrl && supabaseAnonKey);

// 创建 Supabase 客户端（如果配置存在）
export const supabase = hasSupabaseConfig
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
      },
      global: {
        headers: {
          'x-client-info': 'n8nworkflows.xyz',
        },
      },
    })
  : null;

/**
 * 检查 Supabase 是否已配置
 */
export function isSupabaseConfigured(): boolean {
  return hasSupabaseConfig;
}

/**
 * 获取 Supabase 客户端
 * 如果未配置，抛出错误
 */
export function getSupabaseClient() {
  if (!supabase) {
    throw new Error(
      'Supabase is not configured. Please set PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY environment variables.'
    );
  }
  return supabase;
}

/**
 * 错误处理辅助函数
 */
export function handleSupabaseError(error: any, context: string): never {
  console.error(`[Supabase Error - ${context}]:`, error);
  throw new Error(`Database error in ${context}: ${error.message || 'Unknown error'}`);
}

/**
 * 重试机制包装器
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  delay = 1000
): Promise<T> {
  let lastError: Error | null = null;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (i < maxRetries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
      }
    }
  }

  throw lastError || new Error('Max retries reached');
}
