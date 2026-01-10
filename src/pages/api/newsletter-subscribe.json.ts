/**
 * API 端点: Newsletter 订阅
 * 路径: /api/newsletter-subscribe.json
 * 方法: POST
 * 
 * 用途: 处理用户 Newsletter 订阅请求
 * 优先级: P1
 * 缓存: 无
 * 
 * 请求体:
 * {
 *   "email": "user@example.com",
 *   "frequency": "weekly",  // 'daily' | 'weekly' | 'monthly'
 *   "categories": ["ai", "automation"],
 *   "subscriptionSource": "homepage"  // 'homepage', 'widget', 'sidebar'
 * }
 * 
 * 响应:
 * {
 *   "success": true,
 *   "message": "Subscription confirmed! Check your email.",
 *   "subscriptionId": "uuid"
 * }
 */

import type { APIRoute } from 'astro';

interface NewsletterSubscribeRequest {
  email: string;
  frequency?: 'daily' | 'weekly' | 'monthly';
  categories?: string[];
  subscriptionSource?: string;
}

interface NewsletterSubscribeResponse {
  success: boolean;
  subscriptionId?: string;
  message: string;
}

// 简单的邮箱验证正则
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body: NewsletterSubscribeRequest = await request.json();

    // 输入验证
    if (!body.email || typeof body.email !== 'string') {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Email is required and must be a string',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!EMAIL_REGEX.test(body.email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid email format',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (body.email.length > 255) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Email is too long',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const frequency = body.frequency || 'weekly';
    const validFrequencies = ['daily', 'weekly', 'monthly'];
    if (!validFrequencies.includes(frequency)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid frequency value',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // TODO: 实现订阅逻辑
    // 1. 验证邮箱地址
    // 2. 检查是否已订阅
    // 3. 保存到 newsletter_subscriptions 表
    // 4. 调用 Mailchimp 或 SendGrid API 添加到邮件列表
    // 5. 发送确认邮件
    // 示例实现:
    // const subscription = await subscribeNewsletter({
    //   email: body.email,
    //   frequency,
    //   categories: body.categories || [],
    //   source: body.subscriptionSource
    // });

    // 占位符响应
    const response: NewsletterSubscribeResponse = {
      success: true,
      subscriptionId: `sub_${Date.now()}`, // 生成临时ID
      message: '感谢订阅！请检查邮箱确认您的订阅。',
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
    console.error('Error in newsletter-subscribe API:', error);

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
