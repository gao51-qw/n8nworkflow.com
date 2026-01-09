/**
 * 内容生成服务
 * 基于实时数据动态生成页面内容
 */

import { getStats } from './stats';
import { getPopularWorkflows, getRecentWorkflows } from './workflows';
import { formatNumber } from '../utils/format';

/**
 * 生成首页Hero内容
 */
export async function generateHeroContent(): Promise<{
  title: string;
  subtitle: string;
  stats: {
    workflows: string;
    authors: string;
    recent: string;
  };
}> {
  try {
    const stats = await getStats();

    return {
      title: `Discover ${formatNumber(stats.totalWorkflows)} Powerful N8N Workflows`,
      subtitle: `Explore automation workflows created by ${formatNumber(stats.totalAuthors)} talented authors. ${formatNumber(stats.recentWorkflows)} new workflows added this month.`,
      stats: {
        workflows: formatNumber(stats.totalWorkflows),
        authors: formatNumber(stats.totalAuthors),
        recent: formatNumber(stats.recentWorkflows),
      },
    };
  } catch (error) {
    console.error('Error generating hero content:', error);
    // 降级到默认内容
    return {
      title: 'Discover Powerful N8N Workflows',
      subtitle: 'Explore automation workflows created by talented authors.',
      stats: {
        workflows: '1,000+',
        authors: '100+',
        recent: '50+',
      },
    };
  }
}

/**
 * 生成热门原因列表
 */
export async function generatePopularReasons(): Promise<Array<{
  title: string;
  description: string;
  stats: string;
}>> {
  try {
    const { workflows } = await getPopularWorkflows(10);

    if (workflows.length === 0) {
      return getDefaultPopularReasons();
    }

    // 基于实际数据生成原因
    const topByDownloads = workflows.reduce((max, w) =>
      w.downloads > max.downloads ? w : max
    );

    const topByVisitors = workflows.reduce((max, w) =>
      w.visitors > max.visitors ? w : max
    );

    const topByLikes = workflows.reduce((max, w) =>
      (w.likes || 0) > (max.likes || 0) ? w : max
    );

    return [
      {
        title: 'High Download Volume',
        description: `The "${topByDownloads.title}" workflow has been downloaded ${formatNumber(topByDownloads.downloads)} times, proving its reliability and usefulness.`,
        stats: `${formatNumber(topByDownloads.downloads)} downloads`,
      },
      {
        title: 'Massive User Interest',
        description: `With ${formatNumber(topByVisitors.visitors)} visitors, "${topByVisitors.title}" demonstrates exceptional community engagement.`,
        stats: `${formatNumber(topByVisitors.visitors)} visitors`,
      },
      {
        title: 'Community Favorite',
        description: `"${topByLikes.title}" has earned ${formatNumber(topByLikes.likes || 0)} likes, reflecting strong community approval and quality.`,
        stats: `${formatNumber(topByLikes.likes || 0)} likes`,
      },
    ];
  } catch (error) {
    console.error('Error generating popular reasons:', error);
    return getDefaultPopularReasons();
  }
}

/**
 * 生成最新洞察内容
 */
export async function generateRecentInsights(): Promise<Array<{
  title: string;
  description: string;
  stats: string;
}>> {
  try {
    const { workflows } = await getRecentWorkflows(10);
    const stats = await getStats();

    if (workflows.length === 0) {
      return getDefaultRecentInsights();
    }

    // 计算最近30天的新工作流数量
    const recentCount = stats.recentWorkflows;

    // 找到最新的工作流
    const latestWorkflow = workflows[0];

    // 计算平均发布频率（简化计算）
    const avgNewPerWeek = Math.round(recentCount / 4.3); // 30天约4.3周

    return [
      {
        title: 'Fresh Ideas Daily',
        description: `Our community adds ${formatNumber(recentCount)} new workflows monthly, bringing fresh automation solutions and innovative approaches.`,
        stats: `${formatNumber(recentCount)} new this month`,
      },
      {
        title: 'Latest Trends',
        description: `Stay ahead with cutting-edge workflows like "${latestWorkflow.title}", published just ${getDaysAgo(latestWorkflow.publishedAt)} days ago.`,
        stats: `${formatNumber(avgNewPerWeek)}+ per week`,
      },
      {
        title: 'Growing Ecosystem',
        description: `With ${formatNumber(stats.totalWorkflows)} total workflows and ${formatNumber(stats.totalAuthors)} contributors, the N8N community continues to expand rapidly.`,
        stats: `${formatNumber(stats.totalWorkflows)} total workflows`,
      },
    ];
  } catch (error) {
    console.error('Error generating recent insights:', error);
    return getDefaultRecentInsights();
  }
}

/**
 * 生成页面Meta描述
 */
export async function generateMetaDescription(page: 'home' | 'popular' | 'recent'): Promise<string> {
  try {
    const stats = await getStats();

    switch (page) {
      case 'home':
        return `Discover ${formatNumber(stats.totalWorkflows)} powerful N8N automation workflows created by ${formatNumber(stats.totalAuthors)} talented authors. ${formatNumber(stats.recentWorkflows)} new workflows added this month.`;

      case 'popular':
        const { workflows: popularWorkflows } = await getPopularWorkflows(5);
        const totalDownloads = popularWorkflows.reduce((sum, w) => sum + w.downloads, 0);
        return `Explore the most popular N8N workflows with ${formatNumber(totalDownloads)} total downloads. Find trending automation solutions used by thousands of users.`;

      case 'recent':
        return `Discover the latest N8N workflows with ${formatNumber(stats.recentWorkflows)} new additions this month. Stay updated with cutting-edge automation solutions from our community.`;

      default:
        return `Explore powerful N8N automation workflows created by talented authors.`;
    }
  } catch (error) {
    console.error('Error generating meta description:', error);
    return 'Explore powerful N8N automation workflows created by talented authors.';
  }
}

/**
 * 默认热门原因（降级使用）
 */
function getDefaultPopularReasons(): Array<{
  title: string;
  description: string;
  stats: string;
}> {
  return [
    {
      title: 'High Download Volume',
      description: 'Popular workflows often have thousands of downloads, indicating their reliability and widespread adoption.',
      stats: '10,000+ downloads',
    },
    {
      title: 'Community Engagement',
      description: 'These workflows attract significant visitor traffic, showing strong community interest and relevance.',
      stats: '50,000+ visitors',
    },
    {
      title: 'Quality Assurance',
      description: 'Top-rated workflows maintain high user satisfaction scores, ensuring dependable automation solutions.',
      stats: '4.8+ stars',
    },
  ];
}

/**
 * 默认最新洞察（降级使用）
 */
function getDefaultRecentInsights(): Array<{
  title: string;
  description: string;
  stats: string;
}> {
  return [
    {
      title: 'Fresh Ideas Daily',
      description: 'Our community continuously adds new workflows, bringing innovative automation solutions and fresh perspectives.',
      stats: '50+ new monthly',
    },
    {
      title: 'Latest Trends',
      description: 'Stay current with the newest workflow developments and emerging automation patterns in the N8N ecosystem.',
      stats: '12+ per week',
    },
    {
      title: 'Growing Ecosystem',
      description: 'The N8N community expands rapidly with new contributors and workflows joining regularly.',
      stats: '1,000+ workflows',
    },
  ];
}

/**
 * 计算几天前
 */
function getDaysAgo(dateString: string): number {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}