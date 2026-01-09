/**
 * 模拟工作流数据
 * 用于开发和测试
 */

import type { Workflow } from '../lib/types/workflow';
import { mockAuthors } from './mock-authors';
import { formatShortDate } from '../lib/utils/date';

export const mockWorkflows: Workflow[] = [
  {
    id: 12399,
    slug: 'email-reports-on-expiring-microsoft-entra-id',
    title: 'Email reports on expiring Microsoft Entra ID',
    description: 'Automate Entra ID secret/cert expiry monitoring with email notifications',
    thumbnail: 'https://supabase.amastuces.com/storage/v1/object/public/n8n-workflows/placeholder-workflow.webp',
    author: mockAuthors[0],
    categories: ['DevOps'],
    complexityLevel: 'advanced',
    price: 0,
    visitors: 24,
    downloads: 8,
    createdAt: '2026-01-02T00:00:00Z',
    updatedAt: '2026-01-02T00:00:00Z',
    publishedAt: '2026-01-02T00:00:00Z',
    date: formatShortDate('2026-01-02T00:00:00Z'),
    nodes: 12,
    version: '1.0.0',
  },
  {
    id: 12398,
    slug: 'automated-social-media-posting',
    title: 'Automated Social Media Posting',
    description: 'Schedule and post content across multiple social media platforms automatically',
    thumbnail: 'https://supabase.amastuces.com/storage/v1/object/public/n8n-workflows/placeholder-workflow.webp',
    author: mockAuthors[1],
    categories: ['Marketing', 'Social Media'],
    complexityLevel: 'intermediate',
    price: 0,
    visitors: 156,
    downloads: 45,
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z',
    publishedAt: '2026-01-01T00:00:00Z',
    date: formatShortDate('2026-01-01T00:00:00Z'),
    nodes: 8,
    version: '1.2.0',
  },
  {
    id: 12397,
    slug: 'crm-lead-enrichment',
    title: 'CRM Lead Enrichment',
    description: 'Automatically enrich CRM leads with data from multiple sources',
    thumbnail: 'https://supabase.amastuces.com/storage/v1/object/public/n8n-workflows/placeholder-workflow.webp',
    author: mockAuthors[2],
    categories: ['Sales', 'Data & Analytics'],
    complexityLevel: 'intermediate',
    price: 29,
    visitors: 89,
    downloads: 23,
    createdAt: '2025-12-30T00:00:00Z',
    updatedAt: '2025-12-30T00:00:00Z',
    publishedAt: '2025-12-30T00:00:00Z',
    date: formatShortDate('2025-12-30T00:00:00Z'),
    nodes: 15,
    version: '2.0.0',
  },
  {
    id: 12396,
    slug: 'ecommerce-order-processing',
    title: 'E-commerce Order Processing',
    description: 'Streamline order processing from multiple e-commerce platforms',
    thumbnail: 'https://supabase.amastuces.com/storage/v1/object/public/n8n-workflows/placeholder-workflow.webp',
    author: mockAuthors[4],
    categories: ['E-commerce'],
    complexityLevel: 'advanced',
    price: 49,
    visitors: 234,
    downloads: 67,
    createdAt: '2025-12-28T00:00:00Z',
    updatedAt: '2025-12-28T00:00:00Z',
    publishedAt: '2025-12-28T00:00:00Z',
    date: formatShortDate('2025-12-28T00:00:00Z'),
    nodes: 20,
    version: '1.5.0',
  },
  {
    id: 12395,
    slug: 'slack-notification-system',
    title: 'Slack Notification System',
    description: 'Send customized notifications to Slack channels based on various triggers',
    thumbnail: 'https://supabase.amastuces.com/storage/v1/object/public/n8n-workflows/placeholder-workflow.webp',
    author: mockAuthors[0],
    categories: ['Communication', 'Productivity'],
    complexityLevel: 'beginner',
    price: 0,
    visitors: 312,
    downloads: 98,
    createdAt: '2025-12-27T00:00:00Z',
    updatedAt: '2025-12-27T00:00:00Z',
    publishedAt: '2025-12-27T00:00:00Z',
    date: formatShortDate('2025-12-27T00:00:00Z'),
    nodes: 5,
    version: '1.0.0',
  },
  {
    id: 12394,
    slug: 'invoice-generation-automation',
    title: 'Invoice Generation Automation',
    description: 'Automatically generate and send invoices based on completed orders',
    thumbnail: 'https://supabase.amastuces.com/storage/v1/object/public/n8n-workflows/placeholder-workflow.webp',
    author: mockAuthors[3],
    categories: ['Finance', 'E-commerce'],
    complexityLevel: 'intermediate',
    price: 0,
    visitors: 178,
    downloads: 54,
    createdAt: '2025-12-26T00:00:00Z',
    updatedAt: '2025-12-26T00:00:00Z',
    publishedAt: '2025-12-26T00:00:00Z',
    date: formatShortDate('2025-12-26T00:00:00Z'),
    nodes: 10,
    version: '1.1.0',
  },
  {
    id: 12393,
    slug: 'employee-onboarding-workflow',
    title: 'Employee Onboarding Workflow',
    description: 'Automate the entire employee onboarding process from start to finish',
    thumbnail: 'https://supabase.amastuces.com/storage/v1/object/public/n8n-workflows/placeholder-workflow.webp',
    author: mockAuthors[1],
    categories: ['Human Resources', 'Productivity'],
    complexityLevel: 'advanced',
    price: 39,
    visitors: 145,
    downloads: 34,
    createdAt: '2025-12-25T00:00:00Z',
    updatedAt: '2025-12-25T00:00:00Z',
    publishedAt: '2025-12-25T00:00:00Z',
    date: formatShortDate('2025-12-25T00:00:00Z'),
    nodes: 18,
    version: '1.3.0',
  },
  {
    id: 12392,
    slug: 'data-backup-automation',
    title: 'Data Backup Automation',
    description: 'Automatically backup data from multiple sources to cloud storage',
    thumbnail: 'https://supabase.amastuces.com/storage/v1/object/public/n8n-workflows/placeholder-workflow.webp',
    author: mockAuthors[2],
    categories: ['DevOps', 'Data & Analytics'],
    complexityLevel: 'intermediate',
    price: 0,
    visitors: 267,
    downloads: 89,
    createdAt: '2025-12-24T00:00:00Z',
    updatedAt: '2025-12-24T00:00:00Z',
    publishedAt: '2025-12-24T00:00:00Z',
    date: formatShortDate('2025-12-24T00:00:00Z'),
    nodes: 9,
    version: '2.1.0',
  },
  {
    id: 12391,
    slug: 'content-calendar-management',
    title: 'Content Calendar Management',
    description: 'Manage and schedule content across multiple platforms from a central calendar',
    thumbnail: 'https://supabase.amastuces.com/storage/v1/object/public/n8n-workflows/placeholder-workflow.webp',
    author: mockAuthors[1],
    categories: ['Marketing', 'Productivity'],
    complexityLevel: 'beginner',
    price: 0,
    visitors: 198,
    downloads: 67,
    createdAt: '2025-12-23T00:00:00Z',
    updatedAt: '2025-12-23T00:00:00Z',
    publishedAt: '2025-12-23T00:00:00Z',
    date: formatShortDate('2025-12-23T00:00:00Z'),
    nodes: 7,
    version: '1.0.0',
  },
  {
    id: 12390,
    slug: 'customer-feedback-analysis',
    title: 'Customer Feedback Analysis',
    description: 'Collect and analyze customer feedback from multiple channels',
    thumbnail: 'https://supabase.amastuces.com/storage/v1/object/public/n8n-workflows/placeholder-workflow.webp',
    author: mockAuthors[3],
    categories: ['Data & Analytics', 'Sales'],
    complexityLevel: 'advanced',
    price: 59,
    visitors: 123,
    downloads: 28,
    createdAt: '2025-12-22T00:00:00Z',
    updatedAt: '2025-12-22T00:00:00Z',
    publishedAt: '2025-12-22T00:00:00Z',
    date: formatShortDate('2025-12-22T00:00:00Z'),
    nodes: 16,
    version: '1.4.0',
  },
  {
    id: 12389,
    slug: 'email-marketing-campaign',
    title: 'Email Marketing Campaign',
    description: 'Create and manage automated email marketing campaigns',
    thumbnail: 'https://supabase.amastuces.com/storage/v1/object/public/n8n-workflows/placeholder-workflow.webp',
    author: mockAuthors[1],
    categories: ['Marketing', 'Communication'],
    complexityLevel: 'intermediate',
    price: 0,
    visitors: 289,
    downloads: 102,
    createdAt: '2025-12-21T00:00:00Z',
    updatedAt: '2025-12-21T00:00:00Z',
    publishedAt: '2025-12-21T00:00:00Z',
    date: formatShortDate('2025-12-21T00:00:00Z'),
    nodes: 11,
    version: '1.2.0',
  },
  {
    id: 12388,
    slug: 'project-management-sync',
    title: 'Project Management Sync',
    description: 'Synchronize tasks and projects across multiple project management tools',
    thumbnail: 'https://supabase.amastuces.com/storage/v1/object/public/n8n-workflows/placeholder-workflow.webp',
    author: mockAuthors[2],
    categories: ['Productivity', 'DevOps'],
    complexityLevel: 'beginner',
    price: 0,
    visitors: 345,
    downloads: 134,
    createdAt: '2025-12-20T00:00:00Z',
    updatedAt: '2025-12-20T00:00:00Z',
    publishedAt: '2025-12-20T00:00:00Z',
    date: formatShortDate('2025-12-20T00:00:00Z'),
    nodes: 6,
    version: '1.0.0',
  },
];

/**
 * 生成更多模拟工作流数据（用于分页测试）
 */
export function generateMockWorkflows(count: number, startId = 12387): Workflow[] {
  const workflows: Workflow[] = [];
  const titles = [
    'API Integration Workflow',
    'Database Sync Automation',
    'Report Generation System',
    'Webhook Handler',
    'File Processing Pipeline',
    'Notification Router',
    'Data Transformation Flow',
    'Scheduled Task Manager',
    'Error Monitoring System',
    'User Registration Flow',
  ];

  for (let i = 0; i < count; i++) {
    const id = startId - i;
    const titleIndex = i % titles.length;
    const authorIndex = i % mockAuthors.length;
    const date = new Date(2025, 11, 20 - i);

    workflows.push({
      id,
      slug: `${titles[titleIndex].toLowerCase().replace(/\s+/g, '-')}-${id}`,
      title: `${titles[titleIndex]} #${id}`,
      description: `Automated workflow for ${titles[titleIndex].toLowerCase()}`,
      thumbnail: 'https://supabase.amastuces.com/storage/v1/object/public/n8n-workflows/placeholder-workflow.webp',
      author: mockAuthors[authorIndex],
      categories: ['Productivity'],
      complexityLevel: ['beginner', 'intermediate', 'advanced'][i % 3] as any,
      price: i % 3 === 0 ? 0 : Math.floor(Math.random() * 50) + 10,
      visitors: Math.floor(Math.random() * 500) + 50,
      downloads: Math.floor(Math.random() * 150) + 10,
      createdAt: date.toISOString(),
      updatedAt: date.toISOString(),
      publishedAt: date.toISOString(),
      date: formatShortDate(date.toISOString()),
      nodes: Math.floor(Math.random() * 15) + 5,
      version: '1.0.0',
    });
  }

  return workflows;
}

/**
 * 获取所有模拟工作流（包括生成的）
 */
export function getAllMockWorkflows(total = 100): Workflow[] {
  const additional = generateMockWorkflows(total - mockWorkflows.length);
  return [...mockWorkflows, ...additional];
}

/**
 * 根据 slug 获取工作流
 */
export function getMockWorkflowBySlug(slug: string): Workflow | undefined {
  return mockWorkflows.find((workflow) => workflow.slug === slug);
}

/**
 * 根据 ID 获取工作流
 */
export function getMockWorkflowById(id: number): Workflow | undefined {
  return mockWorkflows.find((workflow) => workflow.id === id);
}
