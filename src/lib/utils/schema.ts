/**
 * Schema.org 结构化数据生成工具
 * 用于生成各种类型的 JSON-LD 结构化数据
 */

import type { Workflow } from '@/lib/types/workflow';

/**
 * 网站基础 Schema
 */
export function generateWebSiteSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'N8N Workflows',
    alternateName: 'N8N 工作流分享平台',
    url: siteUrl,
    description: '发现和分享 n8n 自动化工作流，提升工作效率',
    inLanguage: 'zh-CN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'N8N Workflows',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.svg`,
      },
    },
  };
}

/**
 * 组织 Schema
 */
export function generateOrganizationSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'N8N Workflows',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.svg`,
    description: '发现和分享 n8n 自动化工作流，提升工作效率',
    sameAs: [
      // 可以添加社交媒体链接
      // 'https://twitter.com/n8nworkflows',
      // 'https://github.com/n8nworkflows',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Chinese', 'English'],
    },
  };
}

/**
 * 面包屑导航 Schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
  siteUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

/**
 * 工作流详情 Schema (作为 SoftwareApplication)
 */
export function generateWorkflowSchema(workflow: Workflow, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: workflow.title,
    description: workflow.description,
    url: `${siteUrl}/workflows/${workflow.slug}`,
    image: workflow.thumbnail,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: workflow.price || 0,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    author: {
      '@type': 'Person',
      name: workflow.author?.name || 'Anonymous',
    },
    datePublished: workflow.createdAt,
    dateModified: workflow.updatedAt,
    aggregateRating: workflow.visitors
      ? {
          '@type': 'AggregateRating',
          ratingValue: 4.5,
          reviewCount: Math.floor(workflow.visitors / 10),
          bestRating: 5,
          worstRating: 1,
        }
      : undefined,
    interactionStatistic: [
      {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/ViewAction',
        userInteractionCount: workflow.visitors || 0,
      },
      {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/DownloadAction',
        userInteractionCount: workflow.downloads || 0,
      },
    ],
  };
}

/**
 * 文章 Schema
 */
export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  image: string,
  datePublished: string,
  dateModified: string,
  author: string,
  siteUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'N8N Workflows',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

/**
 * 集合页面 Schema (用于分类、作者列表等)
 */
export function generateCollectionPageSchema(
  name: string,
  description: string,
  url: string,
  items: Array<{ name: string; url: string }>,
  siteUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: name,
    description: description,
    url: url,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: `${siteUrl}${item.url}`,
      })),
    },
  };
}

/**
 * 常见问题 Schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * 视频 Schema (如果工作流有视频演示)
 */
export function generateVideoSchema(
  name: string,
  description: string,
  thumbnailUrl: string,
  uploadDate: string,
  duration: string,
  contentUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: name,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate,
    duration: duration,
    contentUrl: contentUrl,
  };
}

/**
 * 评分 Schema
 */
export function generateRatingSchema(
  itemName: string,
  ratingValue: number,
  bestRating: number,
  worstRating: number,
  ratingCount: number
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'Thing',
      name: itemName,
    },
    ratingValue: ratingValue,
    bestRating: bestRating,
    worstRating: worstRating,
    ratingCount: ratingCount,
  };
}

/**
 * 课程 Schema (如果有教程内容)
 */
export function generateCourseSchema(
  name: string,
  description: string,
  provider: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: name,
    description: description,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    url: url,
  };
}

/**
 * 如何做 Schema (用于教程页面)
 */
export function generateHowToSchema(
  name: string,
  description: string,
  steps: Array<{ name: string; text: string; image?: string }>,
  totalTime?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    totalTime: totalTime,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  };
}

/**
 * 生成完整的 JSON-LD 脚本标签
 */
export function generateSchemaScript(schema: object | object[]): string {
  const schemaArray = Array.isArray(schema) ? schema : [schema];
  return `<script type="application/ld+json">${JSON.stringify(schemaArray, null, 2)}</script>`;
}

/**
 * 合并多个 Schema
 */
export function combineSchemas(...schemas: object[]): object[] {
  return schemas.filter(Boolean);
}

/**
 * 为页面生成所有相关的 Schema
 */
export interface PageSchemaOptions {
  type: 'home' | 'workflow' | 'category' | 'author' | 'article' | 'about';
  siteUrl: string;
  pageUrl: string;
  title: string;
  description: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  workflow?: Workflow;
  items?: Array<{ name: string; url: string }>;
}

export function generatePageSchemas(options: PageSchemaOptions): object[] {
  const schemas: object[] = [];

  // 所有页面都包含网站基础 Schema
  schemas.push(generateWebSiteSchema(options.siteUrl));

  // 根据页面类型添加特定 Schema
  switch (options.type) {
    case 'home':
      schemas.push(generateOrganizationSchema(options.siteUrl));
      break;

    case 'workflow':
      if (options.workflow) {
        schemas.push(generateWorkflowSchema(options.workflow, options.siteUrl));
      }
      if (options.breadcrumbs) {
        schemas.push(generateBreadcrumbSchema(options.breadcrumbs, options.siteUrl));
      }
      break;

    case 'category':
    case 'author':
      if (options.items) {
        schemas.push(
          generateCollectionPageSchema(
            options.title,
            options.description,
            options.pageUrl,
            options.items,
            options.siteUrl
          )
        );
      }
      if (options.breadcrumbs) {
        schemas.push(generateBreadcrumbSchema(options.breadcrumbs, options.siteUrl));
      }
      break;

    case 'article':
      if (options.breadcrumbs) {
        schemas.push(generateBreadcrumbSchema(options.breadcrumbs, options.siteUrl));
      }
      break;

    case 'about':
      schemas.push(generateOrganizationSchema(options.siteUrl));
      break;
  }

  return schemas;
}
