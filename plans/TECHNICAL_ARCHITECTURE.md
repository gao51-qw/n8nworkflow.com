# 网站改版技术架构方案

**版本**: 1.0  
**最后更新**: 2026-01-10  
**架构设计**: 技术团队  

---

## 目录

1. [前端架构](#前端架构)
2. [后端与数据库](#后端与数据库)
3. [第三方服务集成](#第三方服务集成)
4. [开发环境与工具链](#开发环境与工具链)
5. [性能优化策略](#性能优化策略)
6. [安全性考虑](#安全性考虑)

---

## 前端架构

### 2.1 FilterSidebar 数据流设计

#### 组件数据模型

```typescript
// src/lib/types/filter.ts
export interface FilterOption {
  id: string;
  label: string;
  count: number;        // 实时计数
  isSelected: boolean;
  isDisabled: boolean;  // 当 count = 0 时禁用
}

export interface FilterState {
  timePeriod: string | null;      // 'last-7-days' | 'last-month' | 'last-6-months'
  price: string | null;            // 'free' | 'paid'
  complexity: string | null;       // 'beginner' | 'intermediate' | 'advanced'
  category: string[];              // 多选
  sortBy: string;                  // 'date' | 'views' | 'downloads' | 'likes'
  page: number;
  limit: number;
}

export interface FilterCounts {
  timePeriods: Record<string, number>;
  prices: Record<string, number>;
  complexities: Record<string, number>;
  categories: Record<string, number>;
}
```

#### 数据获取流程

```
用户改变筛选条件
         ↓
验证选择 (前端)
         ↓
构建 FilterState 对象并序列化到 URL
         ↓
同步调用 getFilterCounts() API
  - 返回其他筛选选项的实时计数
  - 缓存 5 分钟
         ↓
发送主查询请求 getWorkflowsByFilter()
  - 返回工作流列表
  - 分页信息
         ↓
使用 History API 更新 URL (replaceState)
  - 不创建新浏览历史
  - 便于前进后退按钮
         ↓
渲染工作流网格
```

#### 实现代码示例

```typescript
// src/lib/services/filters.ts
export async function getFilterCounts(
  currentFilter: Partial<FilterState>
): Promise<FilterCounts> {
  // 生成缓存键
  const cacheKey = `filter-counts-${JSON.stringify(currentFilter)}`;
  const cached = sessionStorage.getItem(cacheKey);
  
  if (cached) {
    return JSON.parse(cached);
  }
  
  // 发送 API 请求
  const response = await fetch(`/api/filter-counts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(currentFilter)
  });
  
  const counts = await response.json();
  
  // 缓存结果 5 分钟
  sessionStorage.setItem(cacheKey, JSON.stringify(counts));
  setTimeout(() => sessionStorage.removeItem(cacheKey), 300000);
  
  return counts;
}

// Astro 组件中使用
export async function getServerSideProps(context) {
  const filterState = parseFilterFromURL(context.url);
  const filtrCounts = await getFilterCounts(filterState);
  return { props: { filterCounts } };
}
```

#### URL 参数结构

```
/workflows?timePeriod=last-7-days&price=free&complexity=intermediate&category=ai&category=email&sortBy=date&page=1

query 参数:
- timePeriod: 单一字符串值
- price: 单一字符串值
- complexity: 单一字符串值
- category: 数组值 (重复参数)
- sortBy: 单一字符串值
- page: 数字值
```

### 2.2 WorkflowDetailed 数据模型扩展

#### 当前数据模型 (不完整)

```typescript
export interface Workflow {
  id: string;
  slug: string;
  title: string;
  description: string;
  complexity: 'beginner' | 'intermediate' | 'advanced';
  price: 'free' | 'paid';
  image?: string;
  author?: string;
  categories?: string[];
  tags?: string[];
  json?: object;
  created_at: string;
  updated_at: string;
}
```

#### 改版后扩展模型

```typescript
export interface WorkflowDetailed extends Workflow {
  // 新增字段: 文档内容
  disclaimer?: string;              // 免责声明
  overview?: {
    title: string;
    description: string;
    features: string[];             // 列表项
    useCases: string[];              // 使用场景
  };
  logicalBlocks?: {
    id: string;
    title: string;
    description: string;
    blockType: 'trigger' | 'action' | 'condition';
  }[];
  nodeDetails?: {
    nodeId: string;
    nodeName: string;
    nodeType: string;                // e.g., 'trigger', 'action'
    role: string;                    // 节点作用
    configChoices: string;           // 配置说明
    connections: string[];           // 连接关系
    edgeCases: string;               // 边界情况
    failureHandling?: string;        // 失败处理
    exampleConfig?: Record<string, any>; // 配置示例
  }[];
  
  // 统计信息
  stats?: {
    viewers: number;
    downloads: number;
    likes: number;
    rating?: number;
  };
  
  // SEO 和分享
  seoDescription?: string;
  ogImage?: string;
  
  // 用户互动
  relatedWorkflows?: string[];       // 相关工作流 ID 列表
  comments?: Comment[];              // 评论列表
  reviews?: Review[];                // 评分和评论
}

export interface NodeDetails {
  nodeId: string;
  nodeName: string;
  nodeType: string;
  role: string;
  configChoices: string;
  connections: string[];
  edgeCases: string;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  rating?: number;
}

export interface Review {
  id: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  author: string;
  helpful: number;
}
```

#### 数据来源

```
Workflow 基础字段
  ├─ 来自: Supabase (existing)
  ├─ 字段: title, description, complexity, price, author, image
  └─ 更新频率: 按需

Workflow 详情字段 (新增)
  ├─ 来自: Supabase 新增表或 CMS
  ├─ 字段: disclaimer, overview, logicalBlocks, nodeDetails
  └─ 更新频率: 内容团队维护

统计信息
  ├─ 来自: Supabase analytics 表
  ├─ 字段: viewers, downloads, likes
  └─ 更新频率: 实时 (通过触发器或后台任务)
```

### 2.3 API 端点设计

#### 新增 API 端点清单

| 端点 | 方法 | 功能 | 缓存 | 优先级 |
|-----|------|------|------|--------|
| `/api/filter-counts` | POST | 获取筛选选项的实时计数 | 5min | P0 |
| `/api/workflows` | GET | 获取工作流列表 (支持筛选) | 1min | P0 |
| `/api/workflows/:id/detailed` | GET | 获取工作流详细信息 | 10min | P0 |
| `/api/workflows/:id/related` | GET | 获取相关工作流 | 30min | P1 |
| `/api/workflows/submit` | POST | 提交新工作流 (审核中) | 无 | P1 |
| `/api/newsletter/subscribe` | POST | Newsletter 订阅 | 无 | P1 |
| `/api/newsletter/unsubscribe` | POST | Newsletter 取消订阅 | 无 | P1 |
| `/api/workflows/:id/comments` | GET/POST | 工作流评论 | 5min | P2 |
| `/api/workflows/:id/reviews` | GET/POST | 工作流评分评论 | 5min | P2 |

#### 端点详细设计

**POST /api/filter-counts**

请求:
```json
{
  "timePeriod": "last-7-days",
  "price": null,
  "complexity": null,
  "category": []
}
```

响应:
```json
{
  "timePeriods": {
    "all-time": 7947,
    "last-7-days": 8,
    "last-month": 374,
    "last-6-months": 4508,
    "last-year": 6758,
    "last-2-years": 7236,
    "last-3-years": 7328
  },
  "prices": {
    "all": 7947,
    "free": 6898,
    "paid": 1049
  },
  "complexities": {
    "all": 7947,
    "beginner": 500,
    "intermediate": 2835,
    "advanced": 4602
  },
  "categories": {
    "multimodal-ai": 2270,
    "ai": 1600,
    "ai-summarization": 1088
  }
}
```

**GET /api/workflows/:id/detailed**

响应:
```typescript
{
  // 基础字段
  id: "wf_123",
  title: "Advanced Email Automation",
  
  // 详情字段
  disclaimer: "This workflow requires n8n Pro or v1.0+",
  overview: {
    title: "Email Automation with AI Analysis",
    description: "...",
    features: ["Auto-reply", "AI Analysis", "Draft Review"],
    useCases: ["Customer Support", "Email Triage"]
  },
  logicalBlocks: [
    {
      id: "block_1",
      title: "Email Trigger",
      description: "监听新邮件"
    }
  ],
  nodeDetails: [
    {
      nodeId: "node_1",
      nodeName: "Gmail Trigger",
      nodeType: "trigger",
      role: "监听来自特定发件人的新邮件",
      configChoices: "设置 Gmail 账号和标签筛选",
      connections: ["node_2"],
      edgeCases: "处理附件文件、多语言主题"
    }
  ],
  stats: {
    viewers: 4523,
    downloads: 892,
    likes: 234
  }
}
```

### 2.4 组件通信方案

#### 架构决策: Astro SSG + Minimal JS

**方案选择理由：**
- Astro 原生支持 Islands Architecture
- 大部分页面为静态内容，无需 hydration
- 仅在 Gallery 页面使用交互式 JS (infinite scroll, filter)
- 详情页为完全静态 HTML

**实现方式：**

```astro
<!-- src/pages/workflows/[slug].astro -->
---
export async function getStaticPaths() {
  const workflows = await getAllWorkflows();
  return workflows.map(w => ({
    params: { slug: w.slug },
    props: { workflow: w }
  }));
}

const { workflow } = Astro.props;
const detailed = await getWorkflowDetailed(workflow.id);
---

<Layout title={workflow.title}>
  {/* 完全静态 HTML，无交互 */}
  <WorkflowDetailView workflow={{ ...workflow, ...detailed }} />
</Layout>
```

```astro
<!-- src/pages/index.astro -->
---
// 服务端获取数据
const workflows = await getRecentWorkflows(12);
const stats = await getStats();
---

<Layout>
  {/* 静态内容 */}
  <Hero stats={stats} />
  <WorkflowGrid workflows={workflows} />
  
  {/* 交互式岛屿 - 无限滚动 */}
  <InfiniteScrollWorkflows client:load />
</Layout>
```

#### Astro 与组件通信

1. **SSG 编译时通信** (推荐)
   - 通过 `getStaticProps` 获取数据
   - 生成静态 HTML
   - 零运行时成本

2. **客户端运行时通信** (仅在需要时)
   - 使用 `client:load` 指令激活 JS
   - 通过 fetch API 获取动态数据
   - 例: 无限滚动、实时筛选

3. **混合方案** (推荐)
   ```astro
   ---
   // 静态数据在构建时获取
   const initialWorkflows = await getWorkflows();
   ---
   
   {/* 初始内容静态渲染 */}
   <WorkflowGrid workflows={initialWorkflows} />
   
   {/* 交互功能通过 JS */}
   <InfiniteScroll client:load initialPage={1} />
   ```

### 2.5 性能优化策略

#### 缓存策略

```typescript
// src/lib/utils/cache.ts

const CACHE_CONFIG = {
  // API 端点缓存
  'api:filter-counts': {
    ttl: 300,           // 5 minutes
    key: 'filter-counts-{hash}'
  },
  'api:workflows': {
    ttl: 60,            // 1 minute
    key: 'workflows-{filter}'
  },
  'api:workflow-detail': {
    ttl: 600,           // 10 minutes
    key: 'workflow-{id}'
  },
  
  // 页面缓存
  'page:index': {
    ttl: 3600,          // 1 hour
    revalidate: '/api/revalidate'
  },
  'page:workflows': {
    ttl: 1800,          // 30 minutes
    revalidate: '/api/revalidate'
  }
};

// 三层缓存策略:
// L1: 浏览器 sessionStorage (用户会话)
// L2: 服务器内存缓存 (Cloudflare 缓存)
// L3: CDN 缓存 (Cloudflare Pages)
```

#### 预加载热点数据

```typescript
// 在应用启动时预加载
export async function preloadHotData() {
  try {
    // 预加载首页数据
    await Promise.all([
      getStats(),
      getPopularWorkflows(10),
      getRecentWorkflows(10),
      getCategories()
    ]);
  } catch (error) {
    console.warn('Failed to preload hot data', error);
  }
}
```

#### 增量静态再生成 (ISR)

```typescript
// astro.config.mjs
export default defineConfig({
  integrations: [
    // 配置增量重新生成
    // 当工作流更新时触发重新构建
  ]
});

// 手动触发重新验证
export async function revalidateWorkflow(workflowId: string) {
  // 通知构建系统重新生成此页面
  await fetch('/api/revalidate', {
    method: 'POST',
    body: JSON.stringify({ path: `/workflows/${workflowId}` })
  });
}
```

---

## 后端与数据库

### 3.1 数据库扩展设计

#### 新增表结构

**表: workflow_details**

```sql
CREATE TABLE workflow_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workflow_id UUID NOT NULL UNIQUE REFERENCES workflows(id) ON DELETE CASCADE,
  
  -- 文档内容
  disclaimer TEXT,
  overview JSONB DEFAULT NULL,  -- 包含 title, description, features, useCases
  logical_blocks JSONB DEFAULT NULL,  -- 数组: [{id, title, description, blockType}]
  node_details JSONB DEFAULT NULL,    -- 数组: [{nodeId, nodeName, nodeType, ...}]
  
  -- 元数据
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  created_by UUID REFERENCES auth.users(id),
  is_reviewed BOOLEAN DEFAULT false,
  review_notes TEXT
);

CREATE INDEX idx_workflow_details_workflow_id ON workflow_details(workflow_id);
CREATE INDEX idx_workflow_details_created_at ON workflow_details(created_at);
```

**表: workflow_submissions**

```sql
CREATE TABLE workflow_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- 工作流信息
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category_id UUID REFERENCES categories(id),
  complexity VARCHAR(50),
  price VARCHAR(50),
  
  -- 工作流定义
  workflow_json JSONB,
  
  -- 提交者信息
  author_email VARCHAR(255) NOT NULL,
  author_name VARCHAR(255),
  contact_email VARCHAR(255),
  
  -- 审核信息
  status VARCHAR(50) DEFAULT 'pending',  -- pending, approved, rejected, published
  submitted_at TIMESTAMP DEFAULT now(),
  reviewed_at TIMESTAMP,
  review_notes TEXT,
  reviewed_by UUID REFERENCES auth.users(id),
  
  -- 合规检查
  has_disclaimer BOOLEAN,
  has_documentation BOOLEAN,
  spam_score FLOAT DEFAULT 0.0
);

CREATE INDEX idx_submissions_status ON workflow_submissions(status);
CREATE INDEX idx_submissions_submitted_at ON workflow_submissions(submitted_at);
```

**表: newsletter_subscriptions**

```sql
CREATE TABLE newsletter_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  frequency VARCHAR(50) DEFAULT 'weekly',  -- daily, weekly, monthly
  
  -- 分类偏好
  category_interests TEXT[],  -- 数组: ['ai', 'automation', ...]
  
  -- 状态
  is_active BOOLEAN DEFAULT true,
  confirmed_at TIMESTAMP,
  unsubscribed_at TIMESTAMP,
  
  -- 元数据
  source VARCHAR(100),  -- 'homepage', 'widget', 'email'
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

CREATE INDEX idx_subscriptions_email ON newsletter_subscriptions(email UNIQUE);
CREATE INDEX idx_subscriptions_is_active ON newsletter_subscriptions(is_active);
```

**表: workflow_reviews**

```sql
CREATE TABLE workflow_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workflow_id UUID NOT NULL REFERENCES workflows(id) ON DELETE CASCADE,
  
  rating INT CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  helpful_count INT DEFAULT 0,
  unhelpful_count INT DEFAULT 0,
  
  reviewer_id UUID REFERENCES auth.users(id),
  reviewer_name VARCHAR(255),
  
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

CREATE INDEX idx_reviews_workflow_id ON workflow_reviews(workflow_id);
CREATE INDEX idx_reviews_rating ON workflow_reviews(rating);
CREATE INDEX idx_reviews_created_at ON workflow_reviews(created_at);
```

#### 数据库视图 (用于性能优化)

```sql
-- 工作流热度排行视图
CREATE VIEW workflow_rankings AS
SELECT
  w.id,
  w.title,
  w.slug,
  COUNT(DISTINCT r.id) as review_count,
  AVG(r.rating) as avg_rating,
  w.downloads_count,
  w.views_count,
  ROW_NUMBER() OVER (ORDER BY w.views_count DESC) as view_rank,
  ROW_NUMBER() OVER (ORDER BY COUNT(DISTINCT r.id) DESC) as review_rank
FROM workflows w
LEFT JOIN workflow_reviews r ON w.id = r.workflow_id
GROUP BY w.id;

-- 分类热度视图
CREATE VIEW category_stats AS
SELECT
  c.id,
  c.name,
  COUNT(w.id) as workflow_count,
  SUM(w.downloads_count) as total_downloads,
  SUM(w.views_count) as total_views,
  AVG(w.views_count) as avg_views
FROM categories c
LEFT JOIN workflows w ON c.id = w.category_id
GROUP BY c.id;
```

### 3.2 筛选结果缓存策略

#### 缓存架构

```
Query from User
  ↓
Check L1 Cache (Redis in-memory)
  ├─ Hit → Return cached result (< 5ms)
  └─ Miss → Continue
  ↓
Query Supabase with optimized SQL
  ├─ Use indexed columns (timePeriod, category, price)
  ├─ Limit results (pagination)
  └─ Return results (< 500ms)
  ↓
Cache result in Redis (TTL: 5 minutes)
  ├─ Key format: filter:{timePeriod}:{price}:{category}:{page}
  └─ Size limit: 100MB
  ↓
Return to client
  ├─ Add Cache-Control headers
  └─ ETag for cache validation
```

#### 实现代码

```typescript
// src/lib/services/cache-manager.ts
import { createClient } from '@node-redis/client';

const redis = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

export async function getCachedFilterResults(
  filter: FilterState
): Promise<Workflow[] | null> {
  const cacheKey = generateCacheKey(filter);
  
  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (error) {
    console.warn('Redis get failed:', error);
  }
  
  return null;
}

export async function setFilterCache(
  filter: FilterState,
  results: Workflow[]
): Promise<void> {
  const cacheKey = generateCacheKey(filter);
  
  try {
    // 缓存 5 分钟
    await redis.setEx(
      cacheKey,
      300,
      JSON.stringify(results)
    );
  } catch (error) {
    console.warn('Redis set failed:', error);
  }
}

function generateCacheKey(filter: FilterState): string {
  const parts = [
    filter.timePeriod || 'all',
    filter.price || 'all',
    filter.complexity || 'all',
    filter.category?.sort().join(',') || 'all',
    filter.sortBy || 'date',
    filter.page || 1
  ];
  return `filter:${parts.join(':')}`;
}
```

#### 缓存失效策略

```typescript
// 当工作流数据更新时自动清除相关缓存
export async function invalidateWorkflowCache(workflowId: string) {
  // 清除该工作流的缓存
  await redis.del(`workflow:${workflowId}`);
  
  // 清除所有筛选缓存 (因为过滤结果可能变化)
  // 注: 使用 pattern matching 可能很慢，考虑使用 tags
  
  // 更好方式: 使用 tag-based cache
  const keys = await redis.keys('filter:*');
  if (keys.length > 0) {
    await redis.del(...keys);
  }
}

// 定时清理过期缓存
setInterval(async () => {
  // Redis 自动处理 TTL
  // 这里可以添加额外的清理逻辑
}, 3600000); // 每小时
```

### 3.3 邮件服务集成方案

#### 邮件服务选择对比

| 服务 | 价格 | 免费额度 | API | 优点 | 缺点 |
|-----|------|---------|------|------|------|
| Mailchimp | 免费 | 500初始联系人 | ✓ | 免费额度充足 | 功能有限 |
| SendGrid | $14.95/月 | 100/天免费 | ✓✓ | 可靠性高 | 成本 |
| Brevo (Sendinblue) | €20/月 | 300/天 | ✓ | 价格便宜 | 文档不全 |
| AWS SES | 按量计费 | 62,000/月 | ✓✓✓ | 超便宜 | 需要配置多 |

**推荐方案**: Mailchimp (免费入门) → SendGrid (规模扩大时)

#### 集成流程

```typescript
// src/lib/services/newsletter.ts
import mailchimp from '@mailchimp/marketing';

// 初始化
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

// 订阅邮件列表
export async function subscribeNewsletter(
  email: string,
  preferences?: {
    frequency: 'daily' | 'weekly' | 'monthly';
    categories: string[];
  }
): Promise<{ success: boolean; message: string }> {
  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_LIST_ID,
      {
        email_address: email,
        status: 'pending',  // 需要确认
        merge_fields: {
          FREQ: preferences?.frequency || 'weekly',
          CATS: preferences?.categories?.join(',') || ''
        }
      }
    );
    
    // 同时保存到本地数据库 (备份)
    await saveNewsletterSubscription(email, preferences);
    
    return {
      success: true,
      message: '已发送确认邮件，请检查邮箱'
    };
  } catch (error) {
    console.error('Newsletter subscription failed:', error);
    return {
      success: false,
      message: '订阅失败，请稍后重试'
    };
  }
}

// 取消订阅
export async function unsubscribeNewsletter(email: string): Promise<void> {
  await mailchimp.lists.updateListMember(
    process.env.MAILCHIMP_LIST_ID,
    email,
    { status: 'unsubscribed' }
  );
}

// 发送简报
export async function sendNewsletter(
  listId: string,
  content: {
    subject: string;
    previewText: string;
    htmlContent: string;
  }
): Promise<{ campaignId: string }> {
  // 使用 Mailchimp Campaigns API
  // 或使用触发式邮件 (更推荐)
}
```

### 3.4 用户提交工作流的审核工作流

#### 审核流程

```
1. 用户提交工作流
   ├─ 前端表单验证
   ├─ 后端验证 (JSON 结构、字段完整性)
   └─ 保存到 workflow_submissions 表 (status: pending)
   
2. 自动检查
   ├─ 病毒扫描 (若有文件上传)
   ├─ 垃圾邮件检测 (标题、邮箱)
   ├─ 内容重复检查
   └─ 如果失败 → 自动拒绝，给用户反馈
   
3. 人工审核
   ├─ 审核员访问审核队列
   ├─ 检查工作流完整性
   ├─ 验证工作流可用性
   ├─ 评审文档质量
   └─ 修改状态 (approved / rejected)
   
4. 发布
   ├─ 创建 workflows 表记录
   ├─ 创建 workflow_details 记录
   ├─ 触发缓存更新
   ├─ 发送确认邮件给提交者
   └─ 显示在网站上
```

#### 数据库存储

```sql
-- 审核队列视图 (用于审核界面)
CREATE VIEW submission_queue AS
SELECT
  id,
  title,
  author_email,
  status,
  spam_score,
  submitted_at,
  CASE
    WHEN spam_score > 0.8 THEN 'high'
    WHEN spam_score > 0.5 THEN 'medium'
    ELSE 'low'
  END as priority
FROM workflow_submissions
WHERE status = 'pending'
ORDER BY priority DESC, submitted_at ASC;
```

#### API 端点

```typescript
// POST /api/workflows/submit
export async function submitWorkflow(request: Request) {
  const formData = await request.formData();
  const workflow = parseFormData(formData);
  
  // 前端验证
  validateWorkflow(workflow);
  
  // 后端验证
  await validateWorkflowJSON(workflow.workflow_json);
  
  // 垃圾检测
  const spamScore = await calculateSpamScore(workflow);
  if (spamScore > 0.9) {
    return Response.json(
      { error: '提交被拒绝' },
      { status: 403 }
    );
  }
  
  // 保存记录
  const submission = await db.insert('workflow_submissions').values({
    ...workflow,
    status: 'pending',
    spam_score: spamScore
  });
  
  // 发送确认邮件
  await sendSubmissionConfirmation(workflow.author_email);
  
  return Response.json({
    success: true,
    submissionId: submission.id,
    message: '感谢提交！我们会在 3-5 个工作日内审核'
  });
}
```

---

## 第三方服务集成

### 4.1 邮件服务集成步骤

#### Mailchimp 集成

```
1. 注册 Mailchimp 账户
   └─ https://mailchimp.com

2. 创建邮件列表
   └─ 名称: n8n Workflows Community Newsletter
   └─ 默认发件人: noreply@n8nworkflow.com
   
3. 生成 API 密钥
   └─ 保存到 .env
   
4. 安装 npm 包
   npm install @mailchimp/marketing
   
5. 配置端点
   ├─ /api/newsletter/subscribe (POST)
   ├─ /api/newsletter/unsubscribe (POST)
   └─ /api/newsletter/status (GET)
   
6. 前端集成
   └─ NewsletterSubscribe 组件
```

#### 触发式邮件 (自动化)

```
事件 1: 用户订阅
└─ 发送: 欢迎邮件 + 确认链接

事件 2: 订阅确认
└─ 发送: 首份简报 + 最新工作流

事件 3: 每周/每月
└─ 发送: 定期简报

事件 4: 新工作流发布
└─ 发送: 通知订阅者

事件 5: 用户取消订阅
└─ 发送: 再见邮件 + 反馈问卷
```

### 4.2 图像处理服务 (工作流截图)

#### 选项评估

| 工具 | 用途 | 推荐 |
|-----|------|------|
| sharp | 本地图像处理 | ✓ 推荐 |
| Cloudinary | CDN + 处理 | - 备选 |
| AWS S3 + Lambda | 自动化处理 | - 高成本 |
| n8n 官方 API | 获取工作流截图 | ✓ 推荐 |

#### 推荐方案: n8n API + Sharp

```typescript
// src/lib/services/workflow-screenshot.ts
import sharp from 'sharp';

// 从 n8n 实例获取工作流截图
export async function getWorkflowScreenshot(workflowId: string) {
  // n8n 实例 API (如果支持)
  // 或使用 headless browser (puppeteer)
  
  const response = await fetch(
    `${process.env.N8N_INSTANCE_URL}/api/workflows/${workflowId}/screenshot`
  );
  
  if (!response.ok) {
    throw new Error('Failed to get screenshot from n8n');
  }
  
  const buffer = await response.buffer();
  
  // 使用 sharp 处理图像
  const optimized = await sharp(buffer)
    .resize(800, 600, { fit: 'contain', background: { r: 255, g: 255, b: 255 } })
    .webp({ quality: 80 })
    .toBuffer();
  
  return optimized;
}
```

### 4.3 工作流查看器方案

#### 最终推荐: 静态图片 + react-medium-image-zoom

```
优点:
- 轻量级，加载快
- 支持缩放、全屏
- 移动端友好
- SEO 友好 (可索引的图片)

缺点:
- 不能交互 (但通常不需要)
- 需要定期更新截图
```

#### 实现

```typescript
// src/components/workflow/WorkflowViewer.astro
---
import ImageZoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/styles.css';

const { workflow } = Astro.props;
const screenshotUrl = `https://cdn.n8nworkflow.com/workflows/${workflow.id}/screenshot.webp`;
---

<div class="workflow-viewer">
  <ImageZoom>
    <img 
      src={screenshotUrl}
      alt={`${workflow.title} workflow diagram`}
      class="workflow-image"
      loading="lazy"
    />
  </ImageZoom>
  
  <div class="controls">
    <button>↔ Fit Canvas</button>
    <button>⬇ Download</button>
    <button>⛶ Fullscreen</button>
  </div>
</div>
```

### 4.4 社区提交表单存储后端

#### 选择方案: Supabase Storage + 数据库

```
用户提交表单
  ├─ 数据库: 保存元数据 (title, description, etc.)
  ├─ Storage: 保存工作流 JSON 文件
  ├─ Storage: 保存预览截图 (如有)
  └─ 邮件: 确认邮件
```

#### 实现

```typescript
// src/lib/services/workflow-submit.ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function submitWorkflow(formData: SubmitFormData) {
  // 1. 保存元数据到数据库
  const { data: submission, error: dbError } = await supabase
    .from('workflow_submissions')
    .insert([{
      title: formData.title,
      description: formData.description,
      author_email: formData.authorEmail,
      category_id: formData.categoryId,
      complexity: formData.complexity,
      status: 'pending',
      spam_score: calculateSpamScore(formData)
    }])
    .select()
    .single();
  
  if (dbError) throw dbError;
  
  // 2. 上传工作流 JSON 到 Storage
  const { error: uploadError } = await supabase.storage
    .from('workflow-submissions')
    .upload(
      `${submission.id}/workflow.json`,
      new File(
        [JSON.stringify(formData.workflowJson)],
        'workflow.json'
      ),
      { cacheControl: '3600' }
    );
  
  if (uploadError) throw uploadError;
  
  // 3. 发送确认邮件
  await sendSubmissionEmail(formData.authorEmail, submission.id);
  
  return { submissionId: submission.id };
}
```

---

## 开发环境与工具链

### 5.1 新增依赖包列表

#### 前端依赖

```json
{
  "dependencies": {
    // 图像处理
    "react-medium-image-zoom": "^5.1.0",
    "sharp": "^0.33.0",
    
    // 邮件表单
    "@mailchimp/marketing": "^3.0.80",
    "zod": "^3.22.0",
    
    // 表单管理
    "react-hook-form": "^7.48.0",
    
    // 动画
    "framer-motion": "^10.16.0",
    
    // UI 组件 (可选)
    "headlessui": "^1.7.0",
    
    // HTTP 客户端
    "axios": "^1.6.0"
  },
  "devDependencies": {
    "@types/sharp": "^0.32.0",
    "@testing-library/astro": "^1.1.0"
  }
}
```

#### 后端依赖

```json
{
  "dependencies": {
    // Supabase
    "@supabase/supabase-js": "^2.38.0",
    
    // Redis 缓存
    "redis": "^4.6.0",
    
    // 邮件服务
    "@mailchimp/marketing": "^3.0.80",
    "nodemailer": "^6.9.0",
    
    // 验证
    "zod": "^3.22.0",
    
    // 垃圾检测
    "akismet": "^1.2.0",
    
    // 速率限制
    "express-rate-limit": "^7.1.0"
  }
}
```

### 5.2 开发流程变化

#### CI/CD 更新

```yaml
# .github/workflows/deploy.yml (更新)
name: Deploy to Cloudflare

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - name: Install dependencies
        run: npm ci
      
      # 新增: 数据库迁移检查
      - name: Check database migrations
        run: |
          npm run db:migrate:status
      
      - name: Run tests
        run: npm run test
      
      - name: Build
        run: npm run build
      
      # 新增: 缓存预热
      - name: Warm up cache
        run: npm run cache:warm
      
      - name: Deploy to Cloudflare
        uses: cloudflare/pages-action@v1
```

#### 环境变量配置

```bash
# .env.production (新增/修改)

# Mailchimp
MAILCHIMP_API_KEY=xxx
MAILCHIMP_SERVER_PREFIX=us12
MAILCHIMP_LIST_ID=xxx

# Redis
REDIS_URL=redis://...

# n8n (如果需要)
N8N_API_URL=https://...
N8N_API_KEY=xxx

# 第三方服务
AKISMET_API_KEY=xxx

# 功能标志
FEATURE_NEWSLETTER=true
FEATURE_SUBMIT_WORKFLOW=true
FEATURE_WORKFLOW_REVIEWS=false
```

### 5.3 测试框架扩展

#### 新增测试类型

```typescript
// tests/api/filter.test.ts
describe('Filter API', () => {
  test('should return filter counts', async () => {
    const response = await fetch('/api/filter-counts', {
      method: 'POST',
      body: JSON.stringify({ timePeriod: null })
    });
    const data = await response.json();
    expect(data.timePeriods).toBeDefined();
  });
});

// tests/components/FilterSidebar.test.ts
describe('FilterSidebar Component', () => {
  test('should handle filter selection', async () => {
    // 测试筛选交互
  });
  
  test('should sync with URL', async () => {
    // 测试 URL 参数同步
  });
});

// tests/e2e/newsletter.test.ts
describe('Newsletter Flow', () => {
  test('should subscribe user', async () => {
    // 端到端测试: 订阅流程
  });
});
```

---

## 性能优化策略

### 6.1 前端性能

- **代码分割**: 按路由分割 JS 代码
- **图像优化**: WebP + 适应式图片
- **预加载**: DNS-prefetch, preconnect 关键资源
- **缓存**: Service Worker + HTTP 缓存
- **CDN**: Cloudflare Pages 自动 CDN

### 6.2 后端性能

- **数据库**: 使用索引，优化查询
- **缓存**: Redis 多层缓存
- **异步任务**: 后台队列处理邮件、截图生成
- **监控**: 性能指标收集

---

## 安全性考虑

### 7.1 输入验证

- **前端**: 表单字段验证 (Zod)
- **后端**: 验证所有输入，防止 SQL 注入
- **API**: CORS, CSRF 保护

### 7.2 认证与授权

- **邮件验证**: Newsletter 订阅需要邮件确认
- **API 密钥**: 敏感端点需要认证
- **速率限制**: 防止滥用

### 7.3 数据字段建议

强烈建议使用 environment variables 而不是硬编码：
- API KEY, SECRET 等
- 数据库连接字符串
- 第三方服务凭证

---

**文档版本**: 1.0  
**最后修改**: 2026-01-10  
**维护者**: 技术架构团队
