# 代码结构说明文档 (CODE_STRUCTURE)

> **开发架构与文件映射** | 版本: v1.0 | 最后更新: 2026-01-10

---

## 📋 概述

本文档为开发团队（特别是新成员）提供快速理解代码架构、文件结构、数据流的指南。基于已制定的技术架构（`TECHNICAL_ARCHITECTURE.md`），本进一步细化了代码层面的组织方式。

---

## 🏗️ 项目全景图

```
n8nworkflow.com/
│
├─ 📁 src/                          # 伙伴源代码
│  ├─ lib/                          # 核心业务逻辑和工具
│  ├─ components/                   # Astro 组件库
│  ├─ pages/                        # 页面和 API 端点
│  ├─ layouts/                      # 页面布局模板
│  ├─ styles/                       # 全局样式
│  ├─ scripts/                      # 客户端脚本 (JavaScript/TypeScript)
│  └─ data/                         # 静态数据 (mock, fixtures)
│
├─ 📁 scripts/                      # 服务端脚本与工具
│  ├─ supabase-migrations.sql       # 数据库迁移脚本 ✨ NEW
│  ├─ seed-data/                    # 种子数据 (content examples)
│  └─ validate.js                   # 验证脚本
│
├─ 📁 public/                       # 静态资源
│  ├─ images/                       # 图片资源
│  ├─ fonts/                        # 字体文件
│  └─ ...
│
├─ 📁 .github/                      # GitHub 配置
│  └─ workflows/                    # CI/CD 工作流
│
├─ 📁 plans/                        # 项目规划文档 (此目录)
│  ├─ LAUNCH.md                     # 项目启动主文件
│  ├─ LAUNCH_CHECKLIST.md           # 启动检查清单
│  ├─ CODE_STRUCTURE.md             # 本文件
│  ├─ REDESIGN_SPECIFICATIONS.md
│  ├─ TECHNICAL_ARCHITECTURE.md
│  ├─ PROJECT_MILESTONES.md
│  ├─ EXECUTION_FRAMEWORK.md
│  ├─ MONITORING_DASHBOARD.md
│  ├─ STAKEHOLDER_ALIGNMENT.md
│  ├─ IMPLEMENTATION_CHECKLIST.md
│  ├─ CONTENT_STRATEGY.md
│  ├─ USER_TESTING_PLAN.md
│  └─ website-comparison.md
│
├─ 📄 package.json                  # npm 依赖和脚本
├─ 📄 tsconfig.json                 # TypeScript 配置
├─ 📄 tailwind.config.js            # Tailwind CSS 配置
├─ 📄 astro.config.mjs              # Astro 框架配置
├─ 📄 .env.example                  # 环境变量模板
├─ 📄 .env.development              # 开发环境变量 (git ignored)
├─ 📄 .prettierrc                   # Prettier 格式化配置
├─ 📄 docker-compose.yml            # Docker 本地开发配置
└─ 📄 README.md                     # 项目说明

```

---

## 🔍 核心目录结构详解

### 1. `src/lib/` - 核心业务逻辑

这是应用的"大脑"，包含所有可复用的业务逻辑、工具和类型定义。

#### 1.1 `src/lib/types/` - TypeScript 类型定义

```
src/lib/types/
├─ workflow.ts                      # ✨ NEW: 改版相关的新类型
│  ├─ export interface Workflow
│  ├─ export interface WorkflowDetailed        # ✨ NEW
│  ├─ export interface LogicalBlock            # ✨ NEW
│  ├─ export interface NodeDetail               # ✨ NEW
│  ├─ export interface FilterCriteria           # ✨ NEW
│  └─ export type FilterCountResponse         # ✨ NEW
│
└─ [其他现有类型文件...]
```

**WorkflowDetailed 数据结构** (详细工作流对象):
```typescript
interface WorkflowDetailed {
  // 基础信息 (来自 workflows 表)
  id: string;                       // 工作流 ID
  name: string;                     // 名称
  slug: string;                     // URL 路由参数
  description: string;              // 简短描述
  category: string;                 // 分类
  complexity: 'beginner' | 'intermediate' | 'advanced';
  createdAt: Date;
  updatedAt: Date;
  author?: Author;

  // 详细内容 (来自 workflow_details 表) ✨ NEW
  disclaimer?: string;              // 免责声明 (50-150 words)
  overview?: string;                // 工作流总体说明 (100-300 words)
  logicalBlocks?: LogicalBlock[];    // 逻辑块数组
  nodeDetails?: NodeDetail[];        // 节点详情数组

  // 统计信息
  viewCount?: number;
  downloadCount?: number;
}

interface LogicalBlock {
  id: string;
  blockNumber: number;              // 块序号 (1, 2, 3, ...)
  title: string;                    // 块标题 (如 "触发器设置", "数据处理")
  description: string;              // 块的详细描述
  nodeIds: string[];                // 该块包含的节点 IDs
}

interface NodeDetail {
  id: string;
  nodeId: string;                   // n8n 中的节点 ID
  nodeType: string;                 // 节点类型 (如 "trigger", "action", "condition")
  nodeLabel: string;                // 节点标签 (来自 n8n)
  description: string;              // 节点功能说明
  parameters?: Record<string, any>; // 参数说明 (序列化的 JSON)
  tips?: string;                    // 使用提示
}
```

#### 1.2 `src/lib/services/` - 业务逻辑服务

```
src/lib/services/
├─ workflows.ts                     # 工作流数据获取和处理
│  ├─ export async getWorkflows()                   # 现有函数
│  ├─ export async getFilterCountsV2()             # ✨ NEW: 获取筛选计数
│  ├─ export async getWorkflowsByTimePeriod()      # ✨ NEW: 按时间段筛选
│  ├─ export async getWorkflowDetailedById()       # ✨ NEW: 获取详细工作流
│  └─ export async searchWorkflows()               # 现有函数
│
├─ supabase.ts                      # Supabase 连接和通用 CRUD
│  ├─ export const supabase                     # Supabase 客户端实例
│  └─ [各表的通用 query 函数]
│
├─ n8n.ts                           # n8n API 集成
│  ├─ export async fetchWorkflowsFromN8n()      # 从 n8n 同步工作流
│  └─ [其他 n8n API 相关]
│
├─ mailchimp.ts                     # ✨ NEW: Mailchimp 集成 (P1)
│  ├─ export async subscribeNewsletter()
│  ├─ export async validateEmail()
│  └─ [其他邮件服务相关]
│
├─ categories.ts                    # 分类相关
├─ authors.ts                       # 作者相关
├─ stats.ts                         # 统计数据
└─ content-generator.ts             # ✨ NEW: AI 内容生成辅助 (可选)
```

**关键函数签名:**

```typescript
// src/lib/services/workflows.ts

// 获取筛选计数 - 支持时间、分类、复杂度等筛选
export async function getFilterCountsV2(filters?: {
  timePeriods?: string[];           // e.g., ['7days', '30days', 'all']
}): Promise<{
  timePeriods: Record<string, number>;
  categories: Record<string, number>;
  complexities: Record<string, number>;
}>;

// 按时间段获取工作流
export async function getWorkflowsByTimePeriod(
  period: '7days' | '30days' | '90days' | 'all'
): Promise<Workflow[]>;

// 获取单个工作流的详细信息（包含 disclaimer, overview, blocks, node details）
export async function getWorkflowDetailedById(
  slug: string
): Promise<WorkflowDetailed>;
```

#### 1.3 `src/lib/utils/` - 工具函数

```
src/lib/utils/
├─ date.ts                          # 日期处理函数
├─ format.ts                        # 格式化函数 (文本、数字等)
├─ performance.ts                   # 性能监控工具
├─ schema.ts                        # 数据验证 (Zod schemas)
└─ [其他通用工具]
```

---

### 2. `src/components/` - Astro 组件库

Astro 组件是可复用的 UI 元素。改版新增和修改的组件如下：

#### 2.1 `src/components/ui/` - UI 基础组件

```
src/components/ui/
├─ FilterSidebar.astro              # ✨ NEW (P0): 筛选侧边栏
│  └─ 功能:
│     • 时间段筛选 (7天, 30天, 全部)
│     • 分类筛选 (多选)
│     • 复杂度筛选
│     • 显示各筛选条件的计数
│     • 发送 API 请求更新计数
│
├─ FilterCounter.astro              # ✨ NEW (P0): 筛选计数标签
│  └─ 功能: 显示每个筛选选项的计数 (如 "AI (42)")
│
├─ FilterBar.astro                  # 已有: 搜索和排序栏
├─ Pagination.astro                 # 已有: 分页组件
├─ SearchBar.astro                  # 已有: 搜索组件
├─ SortDropdown.astro               # 已有: 排序下拉菜单
├─ LoadingSpinner.astro             # 已有: 加载中动画
├─ EmptyState.astro                 # 已有: 空状态提示
└─ [其他 UI 组件...]
```

**FilterSidebar 实现详解:**

```astro
---
// src/components/ui/FilterSidebar.astro
import { getFilterCountsV2 } from '@/lib/services/workflows';

// 服务端获取初始计数数据
const filterCounts = await getFilterCountsV2();

interface Props {
  selectedFilters?: {
    timePeriods?: string[];
    categories?: string[];
    complexities?: string[];
  };
  onFilterChange?: (filters: any) => void;
}

const { selectedFilters = {} } = Astro.props;
---

<aside class="filter-sidebar">
  <!-- 时间段筛选 -->
  <div class="filter-group">
    <h3>时间段</h3>
    {['7days', '30days', 'all'].map(period => (
      <label class="filter-option">
        <input 
          type="radio" 
          name="timePeriod" 
          value={period}
          checked={selectedFilters.timePeriods?.includes(period)}
        />
        <span>
          {formatPeriod(period)}
          <count>{filterCounts.timePeriods[period]}</count>
        </span>
      </label>
    ))}
  </div>

  <!-- 分类筛选 -->
  <div class="filter-group">
    <h3>分类</h3>
    {Object.entries(filterCounts.categories).map(([cat, count]) => (
      <label class="filter-option">
        <input 
          type="checkbox" 
          name="category" 
          value={cat}
          checked={selectedFilters.categories?.includes(cat)}
        />
        <span>{cat} ({count})</span>
      </label>
    ))}
  </div>

  <!-- 复杂度筛选 -->
  <div class="filter-group">
    <h3>复杂度</h3>
    {['beginner', 'intermediate', 'advanced'].map(level => (
      <label>
        <input 
          type="checkbox" 
          name="complexity" 
          value={level}
        />
        <span>{level} ({filterCounts.complexities[level]})</span>
      </label>
    ))}
  </div>
</aside>

<script>
  // 客户端交互逻辑
  document.querySelectorAll('.filter-option input').forEach(input => {
    input.addEventListener('change', () => {
      const params = new URLSearchParams();
      // 收集选中的筛选条件
      // 更新 URL query params
      // 页面重新加载或通过 AJAX 更新结果
    });
  });
</script>

<style>
  .filter-sidebar { /* 样式 */ }
  .filter-group { /* ... */ }
  .filter-option { /* ... */ }
</style>
```

#### 2.2 `src/components/workflow/` - 工作流相关组件

```
src/components/workflow/
├─ WorkflowCard.astro               # 已有: 工作流卡片 (列表视图)
├─ WorkflowDetail.astro             # 已有: 工作流简单详情
├─ WorkflowDetailedView.astro       # ✨ NEW (P0): 详细工作流展示
│  └─ 功能:
│     • 显示 Disclaimer（免责声明）
│     • 显示 Overview（总体说明）
│     • 分块显示 Logical Blocks
│     • 逐节点显示 Node Details
│     • 支持图片缩放（react-medium-image-zoom）
│     • 响应式布局
│
├─ WorkflowViewer.astro             # ✨ NEW (P0): 工作流查看器
│  └─ 功能:
│     • 嵌入 n8n 工作流编辑器 (iframe or embedded)
│     • 或显示工作流的图形化表示
│     • 支持放大缩小、节点悬停提示
│
├─ WorkflowGrid.astro               # 已有: 工作流网格布局
├─ RelatedWorkflows.astro           # 已有: 相关工作流推荐
└─ InfiniteScrollSentinel.astro     # 已有: 无限滚动触发器
```

**WorkflowDetailedView 实现详解:**

```astro
---
// src/components/workflow/WorkflowDetailedView.astro
import type { WorkflowDetailed } from '@/lib/types/workflow';

interface Props {
  workflow: WorkflowDetailed;
}

const { workflow } = Astro.props;
---

<article class="workflow-detailed-view">
  <!-- 头部：基本信息 -->
  <header>
    <h1>{workflow.name}</h1>
    <p class="description">{workflow.description}</p>
    <div class="meta">
      <span class="category">{workflow.category}</span>
      <span class="complexity">{workflow.complexity}</span>
      <span class="views">{workflow.viewCount} views</span>
    </div>
  </header>

  <!-- 免责声明 -->
  {workflow.disclaimer && (
    <section class="section disclaimer">
      <h2>Disclaimer</h2>
      <div class="content">{workflow.disclaimer}</div>
    </section>
  )}

  <!-- 总体说明 -->
  {workflow.overview && (
    <section class="section overview">
      <h2>Overview</h2>
      <div class="content">{workflow.overview}</div>
    </section>
  )}

  <!-- 逻辑块 -->
  {workflow.logicalBlocks && workflow.logicalBlocks.length > 0 && (
    <section class="section logical-blocks">
      <h2>Workflow Structure</h2>
      {workflow.logicalBlocks.map(block => (
        <div class="logical-block">
          <h3>Block {block.blockNumber}: {block.title}</h3>
          <p>{block.description}</p>
          <ul class="node-list">
            {block.nodeIds.map(nodeId => {
              const nodeDetail = workflow.nodeDetails?.find(n => n.nodeId === nodeId);
              return (
                <li>
                  <strong>{nodeDetail?.nodeLabel}</strong>
                  {nodeDetail?.description && <p>{nodeDetail.description}</p>}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  )}

  <!-- 节点详情 -->
  {workflow.nodeDetails && workflow.nodeDetails.length > 0 && (
    <section class="section node-details">
      <h2>Node Configuration Details</h2>
      {workflow.nodeDetails.map(node => (
        <details class="node-detail">
          <summary>
            <span class="node-type">{node.nodeType}</span>
            <span class="node-label">{node.nodeLabel}</span>
          </summary>
          <div class="node-content">
            <p>{node.description}</p>
            {node.parameters && (
              <pre><code>{JSON.stringify(node.parameters, null, 2)}</code></pre>
            )}
            {node.tips && (
              <div class="tips">
                <strong>Tips:</strong> {node.tips}
              </div>
            )}
          </div>
        </details>
      ))}
    </section>
  )}

  <!-- 工作流查看器 -->
  <WorkflowViewer workflowId={workflow.id} />
</article>

<style>
  .workflow-detailed-view { /* 主容器样式 */ }
  .section { /* 节区样式 */ }
  .logical-block { /* 逻辑块样式 */ }
  .node-detail { /* 节点详情样式 */ }
</style>
```

#### 2.3 `src/components/common/` - 通用组件

```
src/components/common/
├─ Header.astro                     # 已有: 页面头部
├─ Footer.astro                     # 已有: 页面底部
├─ Analytics.astro                  # 已有: 分析追踪代码
├─ ThemeToggle.astro                # 已有: 深色/浅色模式切换
├─ NewsletterSubscribe.astro        # ✨ NEW (P1): 邮件订阅表单
│  └─ 功能:
│     • 邮箱输入验证
│     • 提交到 Mailchimp
│     • 成功/失败提示
│     • 防止重复订阅
│
└─ WorkflowViewer.astro             # ✨ NEW (P0): 见上文
```

#### 2.4 `src/components/forms/` - 表单组件

```
src/components/forms/
├─ SubmitWorkflowForm.astro         # ✨ NEW (P1): 提交工作流表单
│  └─ 功能:
│     • 工作流名称、URL、描述输入
│     • 分类、复杂度选择
│     • 表单验证
│     • 提交到后端 API
│     • 成功/失败处理
│
└─ [其他表单...]
```

---

### 3. `src/pages/` - 页面和 API 端点

#### 3.1 API 端点 (`src/pages/api/`)

```
src/pages/api/
├─ filter-counts.json.ts            # ✨ NEW (P0) 
│  └─ GET /api/filter-counts.json
│     响应: { timePeriods: {...}, categories: {...}, complexities: {...} }
│     用途: FilterSidebar 获取初始计数
│
├─ workflows-by-time.json.ts        # ✨ NEW (P0)
│  └─ GET /api/workflows-by-time.json?period=7days
│     响应: Workflow[] (按时间段筛选)
│     用途: 主页面按时间段显示工作流
│
├─ workflow-details.json.ts         # ✨ NEW (P0)
│  └─ GET /api/workflow-details.json?id=workflow-slug
│     响应: WorkflowDetailed (包含详细内容)
│     用途: 详情页面获取完整数据
│
├─ newsletter-subscribe.json.ts     # ✨ NEW (P1)
│  └─ POST /api/newsletter-subscribe.json
│     请求: { email: string }
│     响应: { success: boolean, message: string }
│     用途: NewsletterSubscribe 组件提交数据
│
├─ submit-workflow.json.ts          # ✨ NEW (P1)
│  └─ POST /api/submit-workflow.json
│     请求: { name, url, description, category, complexity, ... }
│     响应: { success: boolean, submissionId: string, ... }
│     用途: SubmitWorkflowForm 提交用户贡献的工作流
│
├─ n8n-workflows.json.ts            # 已有: n8n 工作流同步
├─ search.json.ts                   # 已有: 搜索功能
├─ stats.json.ts                    # 已有: 统计数据
└─ [其他 API 端点...]
```

**API 端点详解:**

```typescript
// src/pages/api/filter-counts.json.ts
import type { APIRoute } from 'astro';
import { getFilterCountsV2 } from '@/lib/services/workflows';

export const GET: APIRoute = async () => {
  try {
    const counts = await getFilterCountsV2();
    return new Response(JSON.stringify(counts), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // 1小时缓存
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch counts' }), {
      status: 500,
    });
  }
};
```

```typescript
// src/pages/api/workflow-details.json.ts
import type { APIRoute } from 'astro';
import { getWorkflowDetailedById } from '@/lib/services/workflows';

export const GET: APIRoute = async ({ url }) => {
  const id = url.searchParams.get('id');
  
  if (!id) {
    return new Response(JSON.stringify({ error: 'Missing id parameter' }), {
      status: 400,
    });
  }

  try {
    const workflow = await getWorkflowDetailedById(id);
    if (!workflow) {
      return new Response(JSON.stringify({ error: 'Workflow not found' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(workflow), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300', // 5分钟缓存
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch workflow' }), {
      status: 500,
    });
  }
};
```

#### 3.2 页面 (`src/pages/`)

```
src/pages/
├─ index.astro                      # 修改: 主页
│  ├─ 集成 FilterSidebar 组件
│  └─ 集成 NewsletterSubscribe 组件 (在 hero section)
│
├─ workflows/
│  ├─ [slug].astro                  # 修改: 工作流详情页
│  │  ├─ 使用 WorkflowDetailedView 组件替代 WorkflowDetail
│  │  ├─ 集成 WorkflowViewer
│  │  └─ 调用 getWorkflowDetailedById() 获取数据
│  │
│  └─ index.astro                   # 工作流列表页 (现有)
│
├─ categories/
│  ├─ [slug].astro                  # 分类页面 (现有)
│  └─ index.astro
│
├─ authors/
│  ├─ [slug].astro                  # 作者页面 (现有)
│  └─ index.astro
│
├─ search.astro                     # 搜索结果页 (现有)
├─ popular.astro                    # 热门工作流页 (现有)
├─ recent.astro                     # 最新工作流页 (现有)
├─ about.astro                      # 关于页面 (现有)
├─ 404.astro                        # 404 页面 (现有)
├─ 500.astro                        # 500 页面 (现有)
└─ rss.xml.ts                       # RSS 订阅源 (现有)
```

**index.astro 修改示例:**

```astro
---
// src/pages/index.astro
import BaseLayout from '@/layouts/BaseLayout.astro';
import FilterSidebar from '@/components/ui/FilterSidebar.astro';
import NewsletterSubscribe from '@/components/common/NewsletterSubscribe.astro';
import WorkflowGrid from '@/components/workflow/WorkflowGrid.astro';
import { getWorkflows } from '@/lib/services/workflows';

const workflows = await getWorkflows({ limit: 20 });
---

<BaseLayout title="n8n Workflows" description="...">
  <section class="hero">
    <h1>Discover n8n Workflows</h1>
    <p>Automate your workflows with our community repository</p>
    <NewsletterSubscribe />
  </section>

  <section class="content-with-sidebar">
    <aside>
      <FilterSidebar />
    </aside>

    <main>
      <WorkflowGrid workflows={workflows} />
    </main>
  </section>
</BaseLayout>

<style>
  .content-with-sidebar {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    .content-with-sidebar {
      grid-template-columns: 1fr;
    }
  }
</style>
```

**workflows/[slug].astro 修改示例:**

```astro
---
// src/pages/workflows/[slug].astro
import BaseLayout from '@/layouts/BaseLayout.astro';
import WorkflowDetailedView from '@/components/workflow/WorkflowDetailedView.astro';
import RelatedWorkflows from '@/components/workflow/RelatedWorkflows.astro';
import { getWorkflowDetailedById, getRelatedWorkflows } from '@/lib/services/workflows';

const { slug } = Astro.params;
const workflow = await getWorkflowDetailedById(slug);
const related = await getRelatedWorkflows(workflow.id, 3);

if (!workflow) {
  return Astro.redirect('/404');
}
---

<BaseLayout title={workflow.name}>
  <WorkflowDetailedView workflow={workflow} />

  {related.length > 0 && (
    <aside class="related-section">
      <h2>Related Workflows</h2>
      <RelatedWorkflows workflows={related} />
    </aside>
  )}
</BaseLayout>
```

---

### 4. `src/layouts/` - 页面布局

```
src/layouts/
├─ BaseLayout.astro                 # 基础布局 (包含 Header, Footer, SEO)
├─ MainLayout.astro                 # 主内容布局 (含侧边栏)
└─ [其他布局...]
```

---

### 5. `src/styles/` - 全局样式

```
src/styles/
└─ global.css                       # 全局 CSS
   ├─ Tailwind CSS imports
   ├─ CSS Custom Properties (design tokens)
   ├─ 新增: Filter sidebar 样式
   ├─ 新增: 响应式 breakpoints
   └─ [其他全局样式]
```

**需要补充的样式:**

```css
/* src/styles/global.css */

:root {
  /* 颜色 token */
  --color-primary: #3b82f6;         /* 蓝色 */
  --color-secondary: #10b981;       /* 绿色 */
  --color-danger: #ef4444;          /* 红色 */
  --color-neutral-100: #f9fafb;
  --color-neutral-900: #111827;

  /* 排版 token */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;

  /* 间距 token */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}

/* 响应式 breakpoints */
@media (max-width: 640px) {
  /* 移动: 320px - 640px */
  :root {
    --container-width: 100%;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  /* 平板: 641px - 1024px */
  :root {
    --container-width: 90%;
  }
}

@media (min-width: 1025px) {
  /* 桌面: 1025px+ */
  :root {
    --container-width: 1200px;
  }
}

/* Filter Sidebar 样式 */
.filter-sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  border-radius: 0.5rem;
  background: var(--color-neutral-100);
}

.filter-group h3 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
}

.filter-option {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  cursor: pointer;
}

.filter-option input {
  cursor: pointer;
}

.filter-option count {
  font-size: var(--font-size-sm);
  color: #999;
}
```

---

### 6. `src/scripts/` - 客户端脚本

```
src/scripts/
├─ infinite-scroll.ts               # 已有: 无限滚动
├─ theme-toggle.ts                  # 已有: 主题切换
└─ [其他客户端脚本...]
```

---

### 7. `src/data/` - 静态数据

```
src/data/
├─ mock-workflows.ts                # Mock 工作流数据 (用于开发)
├─ mock-authors.ts                  # Mock 作者数据
├─ mock-categories.ts               # Mock 分类数据
└─ [其他 mock 数据...]
```

---

### 8. `scripts/` - 服务端脚本

#### 8.1 数据库迁移

```
scripts/
├─ supabase-migrations.sql          # ✨ NEW: 数据库 DDL 脚本
│  └─ CREATE TABLE workflow_details
│     CREATE TABLE newsletter_subscriptions
│     CREATE TABLE workflow_submissions
│     CREATE TABLE workflow_reviews
│     CREATE INDEX statements
│     CREATE RLS policies
│
├─ seed-data/                       # ✨ NEW: 种子数据目录
│  ├─ top-10-workflows.json         # Top 10 工作流详情
│  └─ [其他示例数据...]
│
└─ validate.js                      # 数据验证脚本
```

**supabase-migrations.sql 结构:**

```sql
-- 工作流详情表
CREATE TABLE IF NOT EXISTS workflow_details (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  workflow_id uuid NOT NULL,           -- 链接到 workflows 表
  disclaimer text,                     -- 免责声明
  overview text,                       -- 总体说明
  created_at timestamp DEFAULT now(),
  updated_at timestamp DEFAULT now(),
  FOREIGN KEY (workflow_id) REFERENCES workflows(id) ON DELETE CASCADE
);

-- 逻辑块表
CREATE TABLE IF NOT EXISTS logical_blocks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  workflow_detail_id uuid NOT NULL,
  block_number int NOT NULL,
  title varchar(255),
  description text,
  created_at timestamp DEFAULT now(),
  FOREIGN KEY (workflow_detail_id) REFERENCES workflow_details(id) ON DELETE CASCADE
);

-- 节点详情表
CREATE TABLE IF NOT EXISTS node_details (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  workflow_detail_id uuid NOT NULL,
  node_id varchar(255),
  node_type varchar(100),
  node_label varchar(255),
  description text,
  parameters jsonb,                   -- 存储 JSON 参数
  tips text,
  created_at timestamp DEFAULT now(),
  FOREIGN KEY (workflow_detail_id) REFERENCES workflow_details(id) ON DELETE CASCADE
);

-- 邮件订阅表
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email varchar(255) UNIQUE NOT NULL,
  status varchar(50),                 -- subscribed, unsubscribed, pending
  subscribed_at timestamp,
  unsubscribed_at timestamp,
  mailchimp_id varchar(255),          -- Mailchimp 中的订阅者 ID
  created_at timestamp DEFAULT now(),
  updated_at timestamp DEFAULT now()
);

-- 工作流提交表 (用户贡献)
CREATE TABLE IF NOT EXISTS workflow_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id varchar(255),              -- 可选: 用户 ID (如果有用户系统)
  name varchar(255) NOT NULL,
  url varchar(500) NOT NULL,
  description text,
  category varchar(100),
  complexity varchar(50),
  status varchar(50),                 -- pending, approved, rejected
  review_notes text,
  submitted_at timestamp DEFAULT now(),
  reviewed_at timestamp,
  created_at timestamp DEFAULT now()
);

-- 工作流评论/审查表
CREATE TABLE IF NOT EXISTS workflow_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  workflow_id uuid NOT NULL,
  reviewer_id varchar(255),          -- 编辑或 admin
  comments text,
  rating int,                         -- 1-5
  created_at timestamp DEFAULT now(),
  FOREIGN KEY (workflow_id) REFERENCES workflows(id) ON DELETE CASCADE
);

-- 索引优化查询性能
CREATE INDEX idx_workflow_details_workflow_id ON workflow_details(workflow_id);
CREATE INDEX idx_logical_blocks_workflow_detail_id ON logical_blocks(workflow_detail_id);
CREATE INDEX idx_node_details_workflow_detail_id ON node_details(workflow_detail_id);
CREATE INDEX idx_newsletter_email ON newsletter_subscriptions(email);

-- Row Level Security (RLS) 策略示例
ALTER TABLE workflow_details ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view published workflow details" ON workflow_details
  FOR SELECT USING (true);
```

---

## 📊 数据流架构

### 数据流 1: FilterSidebar 交互流程

```
┌─────────────────────────────────────┐
│ 用户打开页面 (src/pages/index.astro)  │
└──────────────┬──────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│ FilterSidebar.astro 组件加载          │
│ (服务端执行)                         │
└──────────────┬──────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│ 调用: getFilterCountsV2()            │
│ (src/lib/services/workflows.ts)      │
└──────────────┬──────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│ Supabase 查询计数                    │
│ (workflow 表的计数)                  │
└──────────────┬──────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│ 返回计数对象:                         │
│ {                                   │
│   timePeriods: {7days: 42, ...},    │
│   categories: {AI: 52, ...},        │
│   complexities: {...}               │
│ }                                   │
└──────────────┬──────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│ FilterSidebar 渲染 UI               │
│ (显示计数标签)                       │
└──────────────┬──────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│ 用户点击筛选选项                      │
│ (例: 选择 "AI" 分类)                 │
└──────────────┬──────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│ 客户端脚本监听 change 事件            │
│ 更新 URL query params                │
│ (?category=AI)                      │
└──────────────┬──────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│ 页面重新加载或通过 AJAX 更新结果      │
│ WorkflowGrid 显示筛选后的工作流       │
└──────────────────────────────────────┘
```

### 数据流 2: WorkflowDetailedView 加载流程

```
┌─────────────────────────────────────────────┐
│ 用户点击工作流卡片 → 跳转到详情页            │
│ (src/pages/workflows/[slug].astro)          │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│ 解析 URL 参数: slug = "workflow-name"       │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│ 服务端调用:                                 │
│ getWorkflowDetailedById(slug)               │
│ (src/lib/services/workflows.ts)             │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│ 内部执行 SQL:                               │
│ SELECT w.*, wd.* FROM workflows w          │
│ LEFT JOIN workflow_details wd ON ...        │
│ LEFT JOIN logical_blocks lb ON ...          │
│ LEFT JOIN node_details nd ON ...            │
│ WHERE w.slug = ?                            │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│ 返回 WorkflowDetailed 完整对象:             │
│ {                                           │
│   id, name, slug, category, ...            │
│   disclaimer: "...",                        │
│   overview: "...",                          │
│   logicalBlocks: [...],                     │
│   nodeDetails: [...],                       │
│ }                                           │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│ 将数据传给 WorkflowDetailedView 组件        │
│ (src/components/workflow/WorkflowDetailedView.astro)
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│ 组件渲染:                                   │
│ 1. 标题、基本信息                           │
│ 2. Disclaimer 部分                          │
│ 3. Overview 部分                            │
│ 4. Logical Blocks 列表                      │
│ 5. Node Details (可展开)                    │
│ 6. WorkflowViewer 查看器                    │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────┐
│ 页面完整加载                                │
│ 支持图片缩放 (react-medium-image-zoom)      │
└─────────────────────────────────────────────┘
```

---

## 🔧 环境变量配置

### 开发环境 (`.env.development`)

```bash
# Supabase
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=xxx_anon_key_xxx

# Mailchimp (可选, P1 功能)
MAILCHIMP_API_KEY=xxx
MAILCHIMP_AUDIENCE_ID=xxx

# n8n
N8N_API_URL=https://n8n.example.com
N8N_API_KEY=xxx

# 开发环境标志
NODE_ENV=development
DEBUG=*
```

### 生产环境 (`.env.production`, 由 DevOps 管理)

```bash
SUPABASE_URL=https://yyy.supabase.co
SUPABASE_ANON_KEY=yyy_key
MAILCHIMP_API_KEY=yyy
MAILCHIMP_AUDIENCE_ID=yyy
NODE_ENV=production
DEBUG=false
```

---

## 📦 主要依赖版本

| 包名 | 版本 | 用途 | 新增? |
|------|------|------|------|
| `astro` | ^4.x | 框架 | - |
| `typescript` | ^5.x | 类型检查 | - |
| `tailwindcss` | ^3.x | CSS 框架 | - |
| `@supabase/supabase-js` | ^2.x | 数据库客户端 | - |
| `react-medium-image-zoom` | ^5.x | 图片缩放 | ✨ NEW |
| `mailchimp-marketing` | ^3.x | 邮件服务 | ✨ NEW (P1) |
| `zod` | ^3.x | 数据验证 | - |
| `eslint` | ^8.x | 代码检查 | - |
| `prettier` | ^3.x | 代码格式 | - |

---

## 🚀 开发工作流

### 本地开发启动

```bash
# 1. 克隆项目
git clone https://github.com/xxx/n8nworkflow.com.git
cd n8nworkflow.com

# 2. 安装依赖
npm install

# 3. 配置环境变量
cp .env.example .env.development
# 编辑 .env.development, 填入开发 API keys

# 4. 启动开发服务
npm run dev

# 5. 打开浏览器
# http://localhost:3000
```

### 常用命令

```bash
npm run dev        # 启动开发服务
npm run build      # 生产构建
npm run preview    # 预览生产构建
npm run lint       # 代码检查
npm run format     # 代码格式化
npm run test       # 运行测试
```

---

## 📝 代码示例：完整流程

### 示例: 实现一个新的 API 端点

**1. 定义类型** (`src/lib/types/workflow.ts`):
```typescript
export interface GetTrendingRequest {
  limit?: number;
  offset?: number;
}

export interface GetTrendingResponse {
  workflows: Workflow[];
  total: number;
}
```

**2. 实现服务函数** (`src/lib/services/workflows.ts`):
```typescript
export async function getTrendingWorkflows(
  limit: number = 10
): Promise<Workflow[]> {
  const { data, error } = await supabase
    .from('workflows')
    .select()
    .order('viewCount', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data || [];
}
```

**3. 创建 API 端点** (`src/pages/api/trending-workflows.json.ts`):
```typescript
import type { APIRoute } from 'astro';
import { getTrendingWorkflows } from '@/lib/services/workflows';

export const GET: APIRoute = async ({ url }) => {
  const limit = url.searchParams.get('limit') || '10';

  try {
    const workflows = await getTrendingWorkflows(parseInt(limit));
    return new Response(JSON.stringify(workflows), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed' }), { status: 500 });
  }
};
```

**4. 创建页面**:
```astro
---
// src/pages/trending.astro
import { getTrendingWorkflows } from '@/lib/services/workflows';

const workflows = await getTrendingWorkflows(20);
---

<h1>Trending Workflows</h1>
<WorkflowGrid workflows={workflows} />
```

---

## 🎯 开发建议

1. **优先使用 TypeScript** - 所有新代码应使用 TS 以确保类型安全
2. **遵循组件化设计** - 组件应小而专一，易于测试和复用
3. **缓存策略** - API 响应应根据数据变化频率设置合理的 Cache-Control
4. **性能优化** - 使用 Astro 的 static generation 和 partial hydration
5. **错误处理** - 所有 API 端点应返回一致的错误格式
6. **测试覆盖** - P0 功能的测试覆盖率应 ≥ 90%

---

**文档维护**:
- 版本: v1.0
- 最后更新: 2026-01-10
- 维护者: Tech Lead
- 下次审查: Week 2
