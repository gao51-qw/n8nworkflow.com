/**
 * N8N Workflows 核心类型定义
 * 定义工作流、分类、作者等数据结构
 */

/**
 * 工作流复杂度级别
 */
export type ComplexityLevel = 'beginner' | 'intermediate' | 'advanced';

/**
 * 作者信息
 */
export interface Author {
  id: number;
  slug: string;
  name: string;
  avatar?: string;
  bio?: string;
  website?: string;
  twitter?: string;
  github?: string;
  workflowCount?: number;
}

/**
 * 分类信息
 */
export interface Category {
  id: number;
  slug: string;
  name: string;
  description?: string;
  icon?: string;
  color?: string;
  workflowCount?: number;
}

/**
 * 工作流数据结构
 */
export interface Workflow {
  // 基础信息
  id: number;
  slug: string;
  title: string;
  description: string;

  // 媒体资源
  thumbnail: string;
  screenshots?: string[];

  // 作者信息
  author: Author;

  // 分类和标签
  categories: string[];
  tags?: string[];

  // 复杂度和定价
  complexityLevel: ComplexityLevel;
  price: number; // 0 表示免费

  // 统计数据
  visitors: number;
  downloads: number;
  likes?: number;

  // 时间戳
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  date?: string; // 格式化后的日期字符串

  // SEO
  metaTitle?: string;
  metaDescription?: string;

  // 工作流详情
  nodes?: number; // 节点数量
  version?: string; // n8n 版本
  sourceUrl?: string; // 原始链接
}

/**
 * API 响应 - 加载更多工作流
 */
export interface LoadMoreResponse {
  workflows: Workflow[];
  total: number;
  offset: number;
  limit: number;
  hasMore: boolean;
}

/**
 * API 查询参数 - 加载更多工作流
 */
export interface LoadMoreParams {
  type?: 'all' | 'popular' | 'recent';
  category?: string;
  author?: string;
  complexity?: ComplexityLevel;
  sort?: 'date-desc' | 'date-asc' | 'visitors-desc' | 'downloads-desc';
  price?: 'all' | 'free' | 'paid';
  time?: 'all' | 'today' | 'week' | 'month';
  offset: number;
  limit: number;
}

/**
 * 搜索查询参数
 */
export interface SearchParams {
  q: string; // 搜索关键词
  category?: string;
  complexity?: ComplexityLevel;
  price?: 'all' | 'free' | 'paid';
  offset?: number;
  limit?: number;
}

/**
 * 搜索响应
 */
export interface SearchResponse {
  results: Workflow[];
  total: number;
  query: string;
}

/**
 * 统计数据
 */
export interface Stats {
  totalWorkflows: number;
  totalAuthors: number;
  totalCategories: number;
  totalDownloads: number;
  recentWorkflows: number; // 最近 30 天
}

/**
 * SEO Meta 数据
 */
export interface SEOMeta {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  noindex?: boolean;
}

/**
 * 导航菜单项
 */
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
}

/**
 * 分页信息
 */
export interface Pagination {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  hasNext: boolean;
  hasPrev: boolean;
}
