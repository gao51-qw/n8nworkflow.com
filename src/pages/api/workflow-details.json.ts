/**
 * API 端点: 获取工作流详细信息
 * 路径: /api/workflow-details.json
 * 方法: GET
 * 
 * 用途: 获取工作流的完整详细信息（包含新的结构化内容）
 * 优先级: P0
 * 缓存: 10分钟
 * 
 * 查询参数:
 * - workflowId: number (必需)
 * - slug: string (可选，如果提供则使用 slug 查询)
 * 
 * 示例: /api/workflow-details.json?workflowId=123
 *       /api/workflow-details.json?slug=advanced-email-automation
 * 
 * 响应: WorkflowDetailed 对象
 */

import type { APIRoute } from 'astro';
import type { WorkflowDetailed } from '../../lib/types/workflow';
import { getWorkflowDetailedById, getWorkflowBySlug } from '../../lib/services/workflows';

interface WorkflowDetailsRequest {
  workflowId?: string | number;
  slug?: string;
}

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);

    // 解析查询参数
    const workflowIdParam = url.searchParams.get('workflowId');
    const slugParam = url.searchParams.get('slug');

    // 参数验证
    if (!workflowIdParam && !slugParam) {
      return new Response(
        JSON.stringify({
          error: 'Missing parameters',
          message: 'Either workflowId or slug is required',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    let workflow: WorkflowDetailed | null = null;

    // 如果提供了 workflowId，按 ID 查询
    if (workflowIdParam) {
      const workflowId = parseInt(workflowIdParam, 10);
      
      if (isNaN(workflowId) || workflowId < 1) {
        return new Response(
          JSON.stringify({
            error: 'Invalid workflowId',
            message: 'workflowId must be a positive number',
          }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      workflow = await getWorkflowDetailedById(workflowId);
    }
    // 否则按 slug 查询
    else if (slugParam) {
      const baseWorkflow = await getWorkflowBySlug(slugParam);
      if (baseWorkflow) {
        workflow = await getWorkflowDetailedById(baseWorkflow.id);
      }
    }

    // 如果未找到工作流，返回 404
    if (!workflow) {
      return new Response(
        JSON.stringify({
          error: 'Not found',
          message: 'The specified workflow could not be found',
        }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify(workflow), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=600', // 10分钟缓存
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Error in workflow-details API:', error);

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
