/**
 * API 端点: 提交用户工作流
 * 路径: /api/submit-workflow.json
 * 方法: POST
 * 
 * 用途: 接收用户提交的新工作流（进入审核队列）
 * 优先级: P1
 * 缓存: 无
 * 
 * 请求体:
 * {
 *   "title": "My Awesome Workflow",
 *   "description": "This workflow does...",
 *   "workflowUrl": "https://n8n.io/workflows/...",
 *   "categories": ["ai", "automation"],
 *   "complexity": "intermediate",
 *   "submitterEmail": "user@example.com",
 *   "submitterName": "John Doe"
 * }
 * 
 * 响应:
 * {
 *   "success": true,
 *   "submissionId": "sub_123",
 *   "message": "Workflow submitted successfully!"
 * }
 */

import type { APIRoute } from 'astro';

interface SubmitWorkflowRequest {
  title: string;
  description: string;
  workflowUrl: string;
  categories?: string[];
  complexity?: 'beginner' | 'intermediate' | 'advanced';
  submitterEmail: string;
  submitterName?: string;
}

interface SubmitWorkflowResponse {
  success: boolean;
  submissionId?: string;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_REGEX = /^https?:\/\/.+/;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body: SubmitWorkflowRequest = await request.json();

    // 输入验证
    const errors: string[] = [];

    if (!body.title || typeof body.title !== 'string') {
      errors.push('Title is required');
    } else if (body.title.length < 3 || body.title.length > 100) {
      errors.push('Title must be 3-100 characters');
    }

    if (!body.description || typeof body.description !== 'string') {
      errors.push('Description is required');
    } else if (body.description.length < 20 || body.description.length > 2000) {
      errors.push('Description must be 20-2000 characters');
    }

    if (!body.workflowUrl || typeof body.workflowUrl !== 'string') {
      errors.push('Workflow URL is required');
    } else if (!URL_REGEX.test(body.workflowUrl)) {
      errors.push('Invalid workflow URL format');
    } else if (body.workflowUrl.length > 2048) {
      errors.push('Workflow URL is too long');
    }

    if (!body.submitterEmail || typeof body.submitterEmail !== 'string') {
      errors.push('Submitter email is required');
    } else if (!EMAIL_REGEX.test(body.submitterEmail)) {
      errors.push('Invalid email format');
    }

    if (body.complexity && !['beginner', 'intermediate', 'advanced'].includes(body.complexity)) {
      errors.push('Invalid complexity level');
    }

    if (errors.length > 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: errors.join('; '),
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // TODO: 实现工作流提交逻辑
    // 1. 前端验证已通过，进行后端验证
    // 2. 检查工作流 URL 可访问性
    // 3. 检查是否重复提交
    // 4. 计算垃圾邮件评分
    // 5. 保存到 workflow_submissions 表 (status: pending)
    // 6. 发送确认邮件给提交者
    // 7. 发送通知给管理员
    // 示例实现:
    // const submission = await submitWorkflow({
    //   title: body.title,
    //   description: body.description,
    //   workflowUrl: body.workflowUrl,
    //   categories: body.categories || [],
    //   complexity: body.complexity,
    //   submitterEmail: body.submitterEmail,
    //   submitterName: body.submitterName,
    //   status: 'pending',
    //   spamScore: calculateSpamScore(body)
    // });

    const response: SubmitWorkflowResponse = {
      success: true,
      submissionId: `sub_${Date.now()}`,
      message:
        '感谢提交！我们会在 3-5 个工作日内审核您的工作流。请检查邮箱获取审核进度。',
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Error in submit-workflow API:', error);

    // 检查是否是 JSON 解析错误
    if (error instanceof SyntaxError) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid JSON in request body',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: false,
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
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
