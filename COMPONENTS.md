# N8N Workflows 组件使用文档

本文档详细说明了项目中所有核心组件的使用方法和示例。

## 目录

- [类型定义](#类型定义)
- [布局组件](#布局组件)
- [通用组件](#通用组件)
- [工作流组件](#工作流组件)
- [SEO 组件](#seo-组件)
- [客户端脚本](#客户端脚本)
- [工具函数](#工具函数)

---

## 类型定义

### 位置
`src/lib/types/workflow.ts`

### 主要类型

#### Workflow
```typescript
interface Workflow {
  id: number;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  author: Author;
  categories: string[];
  complexityLevel: 'beginner' | 'intermediate' | 'advanced';
  price: number;
  visitors: number;
  downloads: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  date?: string;
}
```

#### Author
```typescript
interface Author {
  id: number;
  slug: string;
  name: string;
  avatar?: string;
  bio?: string;
}
```

---

## 布局组件

### BaseLayout

基础 HTML 布局，提供全局配置和 SEO 支持。

**位置**: `src/layouts/BaseLayout.astro`

**Props**:
```typescript
interface Props extends SEOMeta {
  class?: string;
}
```

**使用示例**:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="My Page Title"
  description="Page description"
  canonical="/my-page"
>
  <h1>Page Content</h1>
</BaseLayout>
```

### MainLayout

主布局，包含 Header 和 Footer。

**位置**: `src/layouts/MainLayout.astro`

**Props**:
```typescript
interface Props extends SEOMeta {
  class?: string;
  currentPath?: string;
}
```

**使用示例**:
```astro
---
import MainLayout from '../layouts/MainLayout.astro';
---

<MainLayout
  title="Home Page"
  description="Welcome to N8N Workflows"
>
  <section>
    <h1>Welcome</h1>
  </section>
</MainLayout>
```

---

## 通用组件

### Header

网站导航栏，包含 Logo、菜单和主题切换。

**位置**: `src/components/common/Header.astro`

**Props**:
```typescript
interface Props {
  currentPath?: string;
}
```

**使用示例**:
```astro
---
import Header from '../components/common/Header.astro';
---

<Header currentPath="/popular" />
```

### Footer

网站页脚，包含链接和版权信息。

**位置**: `src/components/common/Footer.astro`

**使用示例**:
```astro
---
import Footer from '../components/common/Footer.astro';
---

<Footer />
```

### ThemeToggle

主题切换按钮。

**位置**: `src/components/common/ThemeToggle.astro`

**使用示例**:
```astro
---
import ThemeToggle from '../components/common/ThemeToggle.astro';
---

<ThemeToggle />
```

---

## 工作流组件

### WorkflowCard

单个工作流卡片。

**位置**: `src/components/workflow/WorkflowCard.astro`

**Props**:
```typescript
interface Props {
  workflow: Workflow;
  lazy?: boolean; // 是否懒加载图片，默认 true
}
```

**使用示例**:
```astro
---
import WorkflowCard from '../components/workflow/WorkflowCard.astro';

const workflow = {
  id: 1,
  slug: 'my-workflow',
  title: 'My Workflow',
  description: 'A great workflow',
  thumbnail: '/image.jpg',
  author: { id: 1, slug: 'john', name: 'John Doe' },
  categories: ['Email', 'Automation'],
  complexityLevel: 'beginner',
  price: 0,
  visitors: 100,
  downloads: 50,
  createdAt: '2026-01-01T00:00:00Z',
  updatedAt: '2026-01-01T00:00:00Z',
  publishedAt: '2026-01-01T00:00:00Z',
  date: '1 Jan 2026',
};
---

<WorkflowCard workflow={workflow} lazy={false} />
```

### WorkflowGrid

工作流网格容器。

**位置**: `src/components/workflow/WorkflowGrid.astro`

**Props**:
```typescript
interface Props {
  workflows: Workflow[];
  columns?: 1 | 2 | 3 | 4; // 默认 3
  class?: string;
}
```

**使用示例**:
```astro
---
import WorkflowGrid from '../components/workflow/WorkflowGrid.astro';

const workflows = [/* workflow 数组 */];
---

<WorkflowGrid workflows={workflows} columns={3} />
```

### InfiniteScrollSentinel

无限滚动哨兵元素。

**位置**: `src/components/workflow/InfiniteScrollSentinel.astro`

**Props**:
```typescript
interface Props {
  loadMoreUrl: string;
  totalCount: number;
  initialOffset?: number; // 默认 12
}
```

**使用示例**:
```astro
---
import InfiniteScrollSentinel from '../components/workflow/InfiniteScrollSentinel.astro';
---

<InfiniteScrollSentinel
  loadMoreUrl="/api/load-more-workflows.json?type=all"
  totalCount={7943}
  initialOffset={12}
/>
```

---

## SEO 组件

### SEOHead

完整的 SEO Meta 标签组件。

**位置**: `src/components/seo/SEOHead.astro`

**Props**:
```typescript
interface Props extends SEOMeta {
  siteName?: string;
}

interface SEOMeta {
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
```

**使用示例**:
```astro
---
import SEOHead from '../components/seo/SEOHead.astro';
---

<head>
  <SEOHead
    title="My Page"
    description="Page description"
    canonical="/my-page"
    image="/og-image.png"
    type="article"
    author="John Doe"
    tags={['automation', 'n8n']}
  />
</head>
```

---

## 客户端脚本

### theme-toggle.ts

主题切换逻辑。

**位置**: `src/scripts/theme-toggle.ts`

**功能**:
- 自动检测系统主题偏好
- LocalStorage 持久化
- 支持键盘快捷键 (Ctrl/Cmd + Shift + D)
- 触发自定义事件 `themechange`

**事件监听**:
```javascript
window.addEventListener('themechange', (e) => {
  console.log('Theme changed to:', e.detail.theme);
});
```

### infinite-scroll.ts

无限滚动逻辑。

**位置**: `src/scripts/infinite-scroll.ts`

**功能**:
- Intersection Observer API
- 滚动回退机制
- 自动加载更多工作流
- 错误处理和重试

**事件监听**:
```javascript
window.addEventListener('workflowsloaded', (e) => {
  console.log('Loaded workflows:', e.detail.count);
  console.log('Total workflows:', e.detail.total);
});
```

---

## 工具函数

### 日期格式化 (date.ts)

**位置**: `src/lib/utils/date.ts`

**函数**:

#### formatRelativeTime
```typescript
formatRelativeTime(date: string | Date): string
// 示例: "2 days ago"
```

#### formatShortDate
```typescript
formatShortDate(date: string | Date): string
// 示例: "2 Jan 2026"
```

#### formatLongDate
```typescript
formatLongDate(date: string | Date): string
// 示例: "January 2, 2026"
```

#### formatISODate
```typescript
formatISODate(date: string | Date): string
// 示例: "2026-01-02T00:00:00.000Z"
```

**使用示例**:
```typescript
import { formatShortDate, formatRelativeTime } from '../lib/utils/date';

const date = new Date('2026-01-02');
console.log(formatShortDate(date)); // "2 Jan 2026"
console.log(formatRelativeTime(date)); // "2 days ago"
```

### 数字格式化 (format.ts)

**位置**: `src/lib/utils/format.ts`

**函数**:

#### formatNumber
```typescript
formatNumber(num: number): string
// 示例: 1234 → "1,234"
```

#### formatCompactNumber
```typescript
formatCompactNumber(num: number): string
// 示例: 1500 → "1.5K", 1500000 → "1.5M"
```

#### formatPrice
```typescript
formatPrice(price: number, currency?: string): string
// 示例: 0 → "Free", 29.99 → "$29.99"
```

#### truncateText
```typescript
truncateText(text: string, maxLength: number): string
// 示例: truncateText("Long text...", 10) → "Long text..."
```

#### slugify
```typescript
slugify(text: string): string
// 示例: "My Workflow!" → "my-workflow"
```

**使用示例**:
```typescript
import { formatCompactNumber, formatPrice, slugify } from '../lib/utils/format';

console.log(formatCompactNumber(1500)); // "1.5K"
console.log(formatPrice(29.99)); // "$29.99"
console.log(slugify("My Workflow")); // "my-workflow"
```

---

## 完整页面示例

```astro
---
// src/pages/example.astro
import MainLayout from '../layouts/MainLayout.astro';
import WorkflowGrid from '../components/workflow/WorkflowGrid.astro';
import InfiniteScrollSentinel from '../components/workflow/InfiniteScrollSentinel.astro';
import type { Workflow } from '../lib/types/workflow';

// 获取工作流数据
const workflows: Workflow[] = [/* 数据 */];

const seoConfig = {
  title: 'Example Page',
  description: 'This is an example page',
  canonical: '/example',
};
---

<MainLayout {...seoConfig}>
  <section class="py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-black mb-8">Example Page</h1>
      
      <WorkflowGrid workflows={workflows} columns={3} />
      
      <InfiniteScrollSentinel
        loadMoreUrl="/api/load-more-workflows.json"
        totalCount={1000}
        initialOffset={workflows.length}
      />
    </div>
  </section>
</MainLayout>
```

---

## 样式自定义

所有组件都使用 Tailwind CSS 类，可以通过以下方式自定义：

### 全局样式
编辑 `src/styles/global.css` 来修改全局样式和主题变量。

### Tailwind 配置
编辑 `tailwind.config.js` 来自定义颜色、字体等。

### 组件样式
大多数组件接受 `class` prop，可以传递额外的 Tailwind 类：

```astro
<WorkflowGrid workflows={workflows} class="my-custom-class" />
```

---

## 最佳实践

1. **类型安全**: 始终使用 TypeScript 类型定义
2. **懒加载**: 对于首屏以下的图片使用 `lazy={true}`
3. **SEO**: 为每个页面提供完整的 SEO 配置
4. **可访问性**: 使用语义化 HTML 和 ARIA 标签
5. **性能**: 使用无限滚动而不是传统分页
6. **响应式**: 所有组件都支持移动端

---

## 故障排除

### 主题切换不工作
确保 `theme-toggle.ts` 脚本已正确导入到 BaseLayout 中。

### 无限滚动不触发
检查：
1. `infinite-scroll-sentinel` 元素是否存在
2. `workflows-grid` 元素是否存在
3. API 端点是否正确

### 样式不生效
确保：
1. Tailwind CSS 已正确配置
2. `global.css` 已导入
3. 使用了正确的 Tailwind 类名

---

## 支持

如有问题，请查看：
- [ARCHITECTURE.md](./ARCHITECTURE.md) - 架构设计文档
- [website-analysis.md](./website-analysis.md) - 网站分析文档
- [README.md](./README.md) - 项目说明

---

**文档版本**: 1.0  
**最后更新**: 2026-01-09
