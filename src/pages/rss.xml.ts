import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getWorkflows } from '@/lib/services/workflows';

export async function GET(context: APIContext) {
  try {
    // 获取最新的 50 个工作流
    const { workflows } = await getWorkflows({
      limit: 50,
      offset: 0,
      sort: 'date-desc',
    });

    return rss({
      title: 'N8N Workflows - 最新工作流',
      description: '发现和分享 n8n 自动化工作流，提升工作效率',
      site: context.site || 'https://n8nworkflows.xyz',
      items: workflows.map((workflow) => ({
        title: workflow.title,
        description: workflow.description,
        link: `/workflows/${workflow.slug}`,
        pubDate: new Date(workflow.createdAt),
        author: workflow.author?.name || 'Anonymous',
        categories: workflow.categories || [],
        customData: `
          <complexity>${workflow.complexityLevel}</complexity>
          <price>${workflow.price === 0 ? 'Free' : 'Paid'}</price>
          <visitors>${workflow.visitors || 0}</visitors>
          <downloads>${workflow.downloads || 0}</downloads>
        `,
      })),
      customData: `
        <language>zh-CN</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <generator>Astro RSS</generator>
      `,
      stylesheet: '/rss-styles.xsl',
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new Response('Error generating RSS feed', { status: 500 });
  }
}
