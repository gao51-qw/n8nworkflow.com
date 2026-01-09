/**
 * 模拟分类数据
 * 用于开发和测试
 */

import type { Category } from '../lib/types/workflow';

export const mockCategories: Category[] = [
  {
    id: 1,
    slug: 'devops',
    name: 'DevOps',
    description: 'Automation workflows for DevOps and infrastructure management',
    icon: '🔧',
    color: '#FF5E4D',
    workflowCount: 156,
  },
  {
    id: 2,
    slug: 'marketing',
    name: 'Marketing',
    description: 'Marketing automation and campaign management workflows',
    icon: '📢',
    color: '#FFD447',
    workflowCount: 234,
  },
  {
    id: 3,
    slug: 'sales',
    name: 'Sales',
    description: 'Sales automation and CRM integration workflows',
    icon: '💼',
    color: '#4CAF50',
    workflowCount: 189,
  },
  {
    id: 4,
    slug: 'data-analytics',
    name: 'Data & Analytics',
    description: 'Data processing and analytics automation workflows',
    icon: '📊',
    color: '#2196F3',
    workflowCount: 145,
  },
  {
    id: 5,
    slug: 'ecommerce',
    name: 'E-commerce',
    description: 'E-commerce automation and order management workflows',
    icon: '🛒',
    color: '#9C27B0',
    workflowCount: 198,
  },
  {
    id: 6,
    slug: 'social-media',
    name: 'Social Media',
    description: 'Social media automation and content management workflows',
    icon: '📱',
    color: '#FF9800',
    workflowCount: 167,
  },
  {
    id: 7,
    slug: 'productivity',
    name: 'Productivity',
    description: 'Personal and team productivity automation workflows',
    icon: '⚡',
    color: '#00BCD4',
    workflowCount: 223,
  },
  {
    id: 8,
    slug: 'communication',
    name: 'Communication',
    description: 'Communication and notification automation workflows',
    icon: '💬',
    color: '#E91E63',
    workflowCount: 178,
  },
  {
    id: 9,
    slug: 'finance',
    name: 'Finance',
    description: 'Financial automation and accounting workflows',
    icon: '💰',
    color: '#4CAF50',
    workflowCount: 134,
  },
  {
    id: 10,
    slug: 'hr',
    name: 'Human Resources',
    description: 'HR automation and employee management workflows',
    icon: '👥',
    color: '#3F51B5',
    workflowCount: 112,
  },
];

/**
 * 根据 slug 获取分类
 */
export function getMockCategoryBySlug(slug: string): Category | undefined {
  return mockCategories.find((category) => category.slug === slug);
}

/**
 * 根据 ID 获取分类
 */
export function getMockCategoryById(id: number): Category | undefined {
  return mockCategories.find((category) => category.id === id);
}

/**
 * 获取热门分类（按工作流数量排序）
 */
export function getPopularMockCategories(limit = 5): Category[] {
  return [...mockCategories].sort((a, b) => (b.workflowCount || 0) - (a.workflowCount || 0)).slice(0, limit);
}
