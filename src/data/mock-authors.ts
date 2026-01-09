/**
 * 模拟作者数据
 * 用于开发和测试
 */

import type { Author } from '../lib/types/workflow';

export const mockAuthors: Author[] = [
  {
    id: 1,
    slug: 'alexander-schnabl',
    name: 'Alexander Schnabl',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alexander',
    bio: 'DevOps Engineer and automation enthusiast',
    website: 'https://example.com',
    github: 'alexanderschnabl',
    workflowCount: 15,
  },
  {
    id: 2,
    slug: 'sarah-johnson',
    name: 'Sarah Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    bio: 'Marketing automation specialist',
    twitter: 'sarahjohnson',
    workflowCount: 23,
  },
  {
    id: 3,
    slug: 'michael-chen',
    name: 'Michael Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael',
    bio: 'Full-stack developer passionate about workflow automation',
    github: 'michaelchen',
    workflowCount: 18,
  },
  {
    id: 4,
    slug: 'emma-wilson',
    name: 'Emma Wilson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma',
    bio: 'Data analyst and workflow optimizer',
    website: 'https://emmawilson.dev',
    workflowCount: 12,
  },
  {
    id: 5,
    slug: 'david-martinez',
    name: 'David Martinez',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
    bio: 'E-commerce automation expert',
    twitter: 'davidmartinez',
    github: 'davidmartinez',
    workflowCount: 20,
  },
];

/**
 * 根据 slug 获取作者
 */
export function getMockAuthorBySlug(slug: string): Author | undefined {
  return mockAuthors.find((author) => author.slug === slug);
}

/**
 * 根据 ID 获取作者
 */
export function getMockAuthorById(id: number): Author | undefined {
  return mockAuthors.find((author) => author.id === id);
}
