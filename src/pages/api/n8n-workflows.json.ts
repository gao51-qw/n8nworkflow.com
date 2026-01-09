/**
 * N8N 工作流 API 端点
 * GET /api/n8n-workflows.json
 *
 * 从 N8N 实例获取工作流
 */

import type { APIRoute } from 'astro';
import { getN8NWorkflowsList, isN8NConfigured } from '../../lib/services/n8n';

export const GET: APIRoute = async () => {
  // 检查 N8N 是否已配置
  if (!isN8NConfigured()) {
    return new Response(
      JSON.stringify({
        error: 'N8N not configured',
        message: 'Please set N8N_API_URL and N8N_API_KEY environment variables',
        workflows: [],
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }

  try {
    const workflows = await getN8NWorkflowsList();

    return new Response(
      JSON.stringify({
        workflows,
        total: workflows.length,
        source: 'n8n-demo',
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300, s-maxage=600',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching N8N workflows:', error);

    return new Response(
      JSON.stringify({
        error: 'Failed to fetch N8N workflows',
        message: error instanceof Error ? error.message : 'Unknown error',
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
