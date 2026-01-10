/**
 * API 端点: 获取筛选选项的计数
 * 路径: /api/filter-counts.json
 * 方法: POST
 * 
 * 用途: 获取基于当前筛选条件下，其他筛选选项的实时工作流计数
 * 优先级: P0
 * 缓存: 5分钟
 * 
 * 示例请求:
 * POST /api/filter-counts.json
 * {
 *   "timePeriod": "7days",
 *   "category": "ai",
 *   "complexity": null
 * }
 * 
 * 示例响应:
 * {
 *   "timePeriods": { "7days": 100, "month": 500, "6months": 2000 },
 *   "categories": { "ai": 100, "automation": 50 },
 *   "complexities": { "beginner": 30, "intermediate": 50, "advanced": 20 }
 * }
 */

import type { APIRoute } from 'astro';
import { getFilterCountsV2 } from '../../lib/services/workflows';

interface FilterCountsRequest {
  timePeriod?: string | null;
  category?: string | null;
  complexity?: string | null;
  price?: 'all' | 'free' | 'paid';
}

interface FilterCountsResponse {
  timePeriods: Record<string, number>;
  categories: Record<string, number>;
  complexities: Record<string, number>;
  price: Record<string, number>;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // 解析请求体
    let body: FilterCountsRequest = {};
    
    try {
      body = await request.json();
    } catch (e) {
      // 允许空的 POST 请求
      body = {};
    }

    // 调用服务函数获取筛选计数
    const response = await getFilterCountsV2({
      timePeriod: body.timePeriod || null,
      category: body.category || null,
      complexity: body.complexity || null,
      price: body.price || 'all',
    });

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300', // 5分钟缓存
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Error in filter-counts API:', error);

    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error occurred',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

// 处理 OPTIONS 请求（CORS 预检）
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
