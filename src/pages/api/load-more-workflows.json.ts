/**
 * API 端点：加载更多工作流
 * 支持分页、排序、筛选
 */

import type { APIRoute } from 'astro';
import type { LoadMoreResponse, LoadMoreParams } from '../../lib/types/workflow';
import { getWorkflows } from '../../lib/services/workflows';

export const GET: APIRoute = async ({ request }) => {
  try {
    // 解析查询参数
    const url = new URL(request.url);
    const params: Partial<LoadMoreParams> = {
      type: (url.searchParams.get('type') as any) || 'all',
      category: url.searchParams.get('category') || undefined,
      author: url.searchParams.get('author') || undefined,
      complexity: (url.searchParams.get('complexity') as any) || undefined,
      sort: (url.searchParams.get('sort') as any) || 'date-desc',
      price: (url.searchParams.get('price') as any) || 'all',
      time: (url.searchParams.get('time') as any) || 'all',
      offset: parseInt(url.searchParams.get('offset') || '0', 10),
      limit: parseInt(url.searchParams.get('limit') || '12', 10),
    };

    // 验证参数
    if (isNaN(params.offset!) || params.offset! < 0) {
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

    if (isNaN(params.limit!) || params.limit! < 1 || params.limit! > 100) {
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

    // 获取工作流数据
    const { workflows, total } = await getWorkflows(params);

    // 构建响应
    const response: LoadMoreResponse = {
      workflows,
      total,
      offset: params.offset!,
      limit: params.limit!,
      hasMore: params.offset! + workflows.length < total,
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
    console.error('Error in load-more-workflows API:', error);

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
