/**
 * API 端点：获取流量数据聚合
 * 提供综合的网站流量和内容统计数据
 */

import type { APIRoute } from 'astro';
import { getStats, getWorkflowStatsByCategory } from '../../lib/services/stats';
import { getPopularWorkflows, getRecentWorkflows } from '../../lib/services/workflows';

export const GET: APIRoute = async () => {
  try {
    // 并行获取所有数据
    const [stats, popularResult, recentResult, categoryStats] = await Promise.all([
      getStats(),
      getPopularWorkflows(5),
      getRecentWorkflows(5),
      getWorkflowStatsByCategory(),
    ]);

    // 格式化热门工作流数据
    const topWorkflows = popularResult.workflows.map((w) => ({
      id: w.id,
      title: w.title,
      slug: w.slug,
      downloads: w.downloads,
      visitors: w.visitors,
      author: w.author.name,
    }));

    // 格式化最新工作流数据
    const recentWorkflows = recentResult.workflows.map((w) => ({
      id: w.id,
      title: w.title,
      slug: w.slug,
      publishedAt: w.publishedAt,
      author: w.author.name,
    }));

    // 格式化分类统计
    const categoryBreakdown = categoryStats.reduce((acc, stat) => {
      acc[stat.category] = stat.count;
      return acc;
    }, {} as Record<string, number>);

    const trafficData = {
      totalWorkflows: stats.totalWorkflows,
      totalAuthors: stats.totalAuthors,
      newWorkflowsThisMonth: stats.recentWorkflows,
      topWorkflows,
      recentWorkflows,
      categoryBreakdown,
    };

    return new Response(JSON.stringify(trafficData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=600, s-maxage=1200',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Error in traffic-data API:', error);

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