/**
 * API 端点：搜索工作流
 * 支持关键词搜索和筛选
 */

import type { APIRoute } from 'astro';
import type { SearchResponse } from '../../lib/types/workflow';
import { searchWorkflows } from '../../lib/services/workflows';

export const GET: APIRoute = async ({ request }) => {
  try {
    // 解析查询参数
    const url = new URL(request.url);
    const query = url.searchParams.get('q') || '';
    const category = url.searchParams.get('category') || undefined;
    const complexity = (url.searchParams.get('complexity') as any) || undefined;
    const price = (url.searchParams.get('price') as any) || 'all';
    const offset = parseInt(url.searchParams.get('offset') || '0', 10);
    const limit = parseInt(url.searchParams.get('limit') || '12', 10);

    // 验证查询参数
    if (!query || query.trim().length === 0) {
      return new Response(
        JSON.stringify({
          error: 'Missing query parameter',
          message: 'Search query (q) is required',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (query.length > 200) {
      return new Response(
        JSON.stringify({
          error: 'Invalid query parameter',
          message: 'Search query must be less than 200 characters',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // 验证分页参数
    if (isNaN(offset) || offset < 0) {
      return new Response(
        JSON.stringify({
          error: 'Invalid offset parameter',
          message: 'Offset must be a non-negative number',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (isNaN(limit) || limit < 1 || limit > 100) {
      return new Response(
        JSON.stringify({
          error: 'Invalid limit parameter',
          message: 'Limit must be between 1 and 100',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // 搜索工作流
    const { workflows, total } = await searchWorkflows(query, {
      category,
      complexity,
      price,
      offset,
      limit,
    });

    // 构建响应
    const response: SearchResponse = {
      results: workflows,
      total,
      query: query.trim(),
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300, s-maxage=600',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Error in search API:', error);

    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error occurred',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
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
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
