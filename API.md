# N8N Workflows API 文档

本文档描述了 N8N Workflows 网站的数据层和 API 端点。

## 目录

- [数据服务层](#数据服务层)
- [API 端点](#api-端点)
- [模拟数据](#模拟数据)
- [使用示例](#使用示例)

---

## 数据服务层

### Supabase 客户端 (`src/lib/services/supabase.ts`)

提供 Supabase 数据库连接和配置。

**功能：**
- 自动检测环境变量配置
- 错误处理和重试机制
- 支持降级到模拟数据

**环境变量：**
```bash
PUBLIC_SUPABASE_URL=https://your-project.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 工作流服务 (`src/lib/services/workflows.ts`)

提供工作流数据的获取和查询功能。

**主要函数：**

#### `getWorkflows(params)`
获取工作流列表，支持分页、排序、筛选。

```typescript
const { workflows, total } = await getWorkflows({
  offset: 0,
  limit: 12,
  category: 'DevOps',
  complexity: 'intermediate',
  sort: 'date-desc',
  price: 'free'
});
```

#### `getWorkflowBySlug(slug)`
根据 slug 获取单个工作流。

```typescript
const workflow = await getWorkflowBySlug('email-reports-on-expiring-microsoft-entra-id');
```

#### `searchWorkflows(query, params)`
搜索工作流。

```typescript
const { workflows, total } = await searchWorkflows('automation', {
  category: 'Marketing',
  limit: 10
});
```

#### `getPopularWorkflows(limit)`
获取热门工作流。

```typescript
const { workflows } = await getPopularWorkflows(12);
```

#### `getRecentWorkflows(limit)`
获取最新工作流。

```typescript
const { workflows } = await getRecentWorkflows(12);
```

### 分类服务 (`src/lib/services/categories.ts`)

提供分类数据的获取和查询功能。

**主要函数：**

#### `getCategories()`
获取所有分类。

```typescript
const categories = await getCategories();
```

#### `getCategoryBySlug(slug)`
根据 slug 获取分类。

```typescript
const category = await getCategoryBySlug('devops');
```

#### `getPopularCategories(limit)`
获取热门分类。

```typescript
const categories = await getPopularCategories(5);
```

### 作者服务 (`src/lib/services/authors.ts`)

提供作者数据的获取和查询功能。

**主要函数：**

#### `getAuthors()`
获取所有作者。

```typescript
const authors = await getAuthors();
```

#### `getAuthorBySlug(slug)`
根据 slug 获取作者。

```typescript
const author = await getAuthorBySlug('alexander-schnabl');
```

#### `getPopularAuthors(limit)`
获取热门作者。

```typescript
const authors = await getPopularAuthors(10);
```

### 统计服务 (`src/lib/services/stats.ts`)

提供统计数据的获取功能。

**主要函数：**

#### `getStats()`
获取网站统计数据。

```typescript
const stats = await getStats();
// {
//   totalWorkflows: 7943,
//   totalAuthors: 156,
//   totalCategories: 10,
//   totalDownloads: 45678,
//   recentWorkflows: 234
// }
```

#### `getWorkflowStatsByCategory()`
获取按分类的工作流统计。

```typescript
const stats = await getWorkflowStatsByCategory();
```

#### `getWorkflowStatsByComplexity()`
获取按复杂度的工作流统计。

```typescript
const stats = await getWorkflowStatsByComplexity();
```

---

## API 端点

### 1. 加载更多工作流

**端点：** `GET /api/load-more-workflows.json`

**查询参数：**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | string | `all` | 类型：`all`, `popular`, `recent` |
| `category` | string | - | 分类 slug |
| `author` | string | - | 作者 slug |
| `complexity` | string | - | 复杂度：`beginner`, `intermediate`, `advanced` |
| `sort` | string | `date-desc` | 排序：`date-desc`, `date-asc`, `visitors-desc`, `downloads-desc` |
| `price` | string | `all` | 价格：`all`, `free`, `paid` |
| `time` | string | `all` | 时间范围：`all`, `today`, `week`, `month` |
| `offset` | number | `0` | 偏移量 |
| `limit` | number | `12` | 每页数量（1-100） |

**示例请求：**
```
GET /api/load-more-workflows.json?type=all&sort=date-desc&offset=12&limit=10
```

**响应格式：**
```json
{
  "workflows": [
    {
      "id": 12399,
      "slug": "email-reports-on-expiring-microsoft-entra-id",
      "title": "Email reports on expiring Microsoft Entra ID",
      "description": "Automate Entra ID secret/cert expiry monitoring",
      "thumbnail": "https://...",
      "author": {
        "id": 1,
        "name": "Alexander Schnabl",
        "avatar": "https://..."
      },
      "categories": ["DevOps"],
      "complexityLevel": "advanced",
      "price": 0,
      "visitors": 24,
      "downloads": 8,
      "date": "2 Jan 2026"
    }
  ],
  "total": 7943,
  "offset": 12,
  "limit": 10,
  "hasMore": true
}
```

### 2. 搜索工作流

**端点：** `GET /api/search.json`

**查询参数：**

| 参数 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `q` | string | ✓ | 搜索关键词（最多 200 字符） |
| `category` | string | - | 分类 slug |
| `complexity` | string | - | 复杂度 |
| `price` | string | `all` | 价格筛选 |
| `offset` | number | `0` | 偏移量 |
| `limit` | number | `12` | 每页数量（1-100） |

**示例请求：**
```
GET /api/search.json?q=automation&category=marketing&limit=10
```

**响应格式：**
```json
{
  "results": [
    {
      "id": 12398,
      "slug": "automated-social-media-posting",
      "title": "Automated Social Media Posting",
      "description": "Schedule and post content across multiple platforms",
      ...
    }
  ],
  "total": 45,
  "query": "automation"
}
```

### 3. 统计数据

**端点：** `GET /api/stats.json`

**查询参数：** 无

**示例请求：**
```
GET /api/stats.json
```

**响应格式：**
```json
{
  "totalWorkflows": 7943,
  "totalAuthors": 156,
  "totalCategories": 10,
  "totalDownloads": 45678,
  "recentWorkflows": 234
}
```

---

## 模拟数据

当未配置 Supabase 环境变量时，系统会自动使用模拟数据进行开发和测试。

### 模拟数据文件

- **`src/data/mock-workflows.ts`** - 工作流模拟数据
- **`src/data/mock-categories.ts`** - 分类模拟数据
- **`src/data/mock-authors.ts`** - 作者模拟数据

### 特性

- 包含 12 个预定义工作流
- 可生成最多 200 个工作流用于测试
- 包含 10 个分类和 5 个作者
- 支持所有筛选和排序功能

---

## 使用示例

### 在 Astro 页面中使用

```astro
---
// src/pages/index.astro
import { getWorkflows } from '../lib/services/workflows';
import { getCategories } from '../lib/services/categories';

// 获取初始工作流
const { workflows, total } = await getWorkflows({ limit: 12 });

// 获取分类
const categories = await getCategories();
---

<html>
  <body>
    <h1>工作流列表</h1>
    <div id="workflows-grid">
      {workflows.map(workflow => (
        <div class="workflow-card">
          <h2>{workflow.title}</h2>
          <p>{workflow.description}</p>
        </div>
      ))}
    </div>
  </body>
</html>
```

### 在客户端 JavaScript 中使用

```javascript
// 加载更多工作流
async function loadMoreWorkflows(offset) {
  const response = await fetch(
    `/api/load-more-workflows.json?offset=${offset}&limit=12`
  );
  const data = await response.json();
  
  // 渲染工作流
  data.workflows.forEach(workflow => {
    // 添加到 DOM
  });
  
  return data.hasMore;
}

// 搜索工作流
async function searchWorkflows(query) {
  const response = await fetch(
    `/api/search.json?q=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  
  return data.results;
}
```

---

## 错误处理

所有 API 端点都包含完善的错误处理：

**客户端错误（400）：**
```json
{
  "error": "Invalid parameter",
  "message": "Limit must be between 1 and 100"
}
```

**服务器错误（500）：**
```json
{
  "error": "Internal server error",
  "message": "Database connection failed"
}
```

---

## 缓存策略

- **工作流列表 API：** `Cache-Control: public, max-age=300, s-maxage=600`
- **搜索 API：** `Cache-Control: public, max-age=300, s-maxage=600`
- **统计 API：** `Cache-Control: public, max-age=600, s-maxage=1200`

---

## CORS 支持

所有 API 端点都支持 CORS，允许跨域访问：

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

---

## 性能优化

1. **查询优化：** 只获取必要的字段
2. **分页支持：** 避免一次性加载大量数据
3. **缓存策略：** 合理的缓存时间设置
4. **重试机制：** 自动重试失败的请求
5. **降级策略：** 自动切换到模拟数据

---

## 开发建议

1. **本地开发：** 不配置 Supabase 环境变量，使用模拟数据
2. **测试环境：** 配置测试数据库的环境变量
3. **生产环境：** 配置生产数据库的环境变量

---

## 类型定义

所有类型定义位于 [`src/lib/types/workflow.ts`](src/lib/types/workflow.ts)：

- `Workflow` - 工作流数据结构
- `Category` - 分类数据结构
- `Author` - 作者数据结构
- `LoadMoreParams` - 加载更多参数
- `LoadMoreResponse` - 加载更多响应
- `SearchParams` - 搜索参数
- `SearchResponse` - 搜索响应
- `Stats` - 统计数据结构

---

## 技术栈

- **Astro** - 静态站点生成器
- **Supabase** - 数据库和存储
- **TypeScript** - 类型安全
- **模拟数据** - 开发和测试支持

---

## 许可证

MIT License
