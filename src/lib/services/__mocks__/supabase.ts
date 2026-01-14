/**
 * 模拟 Supabase 服务用于测试
 */

export const supabase = null;

export function isSupabaseConfigured(): boolean {
  return false;
}

export function getSupabaseClient() {
  throw new Error('Supabase is not configured in test environment');
}

export function handleSupabaseError(error: any, context: string): never {
  console.error(`[Supabase Error - ${context}]:`, error);
  throw new Error(`Database error in ${context}: ${error.message || 'Unknown error'}`);
}

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