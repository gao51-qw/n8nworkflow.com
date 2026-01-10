/**
 * API 端点: 按时间段查询工作流
 * 路径: /api/workflows-by-time.json
 * 方法: GET
 * 
 * 用途: 获取指定时间段内的工作流列表（支持分页）
 * 优先级: P0
 * 缓存: 1分钟
 * 
 * 查询参数:
 * - period: '7days' | 'month' | '6months' | '1year'
 * - page: number (默认: 1)
 * - limit: number (默认: 12, 最大: 100)
 * 
 * 示例: /api/workflows-by-time.json?period=7days&page=1&limit=12
 * 
 * 响应:
 * {
 *   "workflows": [...],
 *   "total": 356,
 *   "page": 1,
 *   "totalPages": 30,
 *   "hasMore": true
 * }
 */

import type { APIRoute } from 'astro';
import type { Workflow } from '../../lib/types/workflow';

interface WorkflowsByTimeResponse {
  workflows: Workflow[];
  total: number;
  page: number;
  totalPages: number;
  hasMore: boolean;
}

type TimePeriod = '7days' | 'month' | '6months' | '1year';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    
    // 解析查询参数
    const period = (url.searchParams.get('period') || '7days') as TimePeriod;
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '12', 10), 100);

    // 参数验证
    const validPeriods: TimePeriod[] = ['7days', 'month', '6months', '1year'];
    if (!validPeriods.includes(period)) {
      return new Response(
        JSON.stringify({
          error: 'Invalid period parameter',
          message: 'period must be one of: 7days, month, 6months, 1year',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (isNaN(page) || page < 1) {
      return new Response(
        JSON.stringify({
          error: 'Invalid page parameter',
          message: 'page must be a positive number',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // TODO: 实现时间段查询逻辑
    // 1. 根据 period 参数计算时间范围
    // 2. 调用 getWorkflowsByTimePeriod() 服务
    // 3. 应用分页
    // 示例实现:
    // const result = await getWorkflowsByTimePeriod(period, page, limit);

    // 占位符响应
    const total = 356;
    const totalPages = Math.ceil(total / limit);
    
    const response: WorkflowsByTimeResponse = {
      workflows: [], // TODO: 填充实际工作流数据
      total,
      page,
      totalPages,
      hasMore: page < totalPages,
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60', // 1分钟缓存
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Error in workflows-by-time API:', error);

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

// 处理 OPTIONS 请求
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
