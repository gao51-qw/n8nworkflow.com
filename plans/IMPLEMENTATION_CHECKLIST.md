# 网站改版项目 P0 阶段 - 代码架构实现清单

**版本**: 1.0  
**最后更新**: 2026-01-10  
**阶段**: P0 - 框架初始化  
**状态**: 代码架构已初始化，待业务逻辑实现

---

## 一、创建的文件清单

### 1. 数据类型定义

| 文件 | 位置 | 用途 | 状态 |
|-----|------|------|------|
| `workflow.ts` | `src/lib/types/` | 扩展工作流类型定义 | ✅ 已创建 |
| | | - 新增 `WorkflowDetailed` 接口 | |
| | | - 新增 `LogicalBlock` 接口 | |
| | | - 新增 `NodeDetail` 接口 | |
| | | - 新增 `WorkflowOverview` 接口 | |

### 2. 数据库迁移

| 文件 | 位置 | 用途 | 状态 |
|-----|------|------|------|
| `supabase-migrations.sql` | `scripts/` | 数据库表结构定义 | ✅ 已创建 |
| | | - `workflow_details` 表 | |
| | | - `newsletter_subscriptions` 表 | |
| | | - `workflow_submissions` 表 | |
| | | - `workflow_reviews` 表 | |
| | | - 数据库视图和触发器 | |

### 3. API 端点

| 文件 | 方法 | 功能 | 优先级 | 状态 |
|-----|------|------|--------|------|
| `filter-counts.json.ts` | POST | 获取筛选计数 | P0 | ✅ 框架完成 |
| `workflows-by-time.json.ts` | GET | 按时间段查询工作流 | P0 | ✅ 框架完成 |
| `workflow-details.json.ts` | GET | 获取工作流详情 | P0 | ✅ 框架完成 |
| `newsletter-subscribe.json.ts` | POST | Newsletter 订阅 | P1 | ✅ 框架完成 |
| `submit-workflow.json.ts` | POST | 工作流提交审核 | P1 | ✅ 框架完成 |

### 4. UI 组件

| 文件 | 位置 | 用途 | 优先级 | 状态 |
|-----|------|------|--------|------|
| `FilterSidebar.astro` | `src/components/ui/` | 筛选侧边栏 | P0 | ✅ 框架完成 |
| `WorkflowDetailedView.astro` | `src/components/workflow/` | 详情页内容展示 | P0 | ✅ 框架完成 |
| `FilterCounter.astro` | `src/components/ui/` | 筛选计数徽章 | P0 | ✅ 框架完成 |
| `NewsletterSubscribe.astro` | `src/components/common/` | Newsletter 订阅表单 | P1 | ✅ 框架完成 |
| `WorkflowViewer.astro` | `src/components/common/` | 交互式查看器 | P0 | ✅ 框架完成 |
| `SubmitWorkflowForm.astro` | `src/components/forms/` | 工作流提交表单 | P1 | ✅ 框架完成 |

### 5. 服务层

| 文件 | 位置 | 新增函数 | 状态 |
|-----|------|---------|------|
| `workflows.ts` | `src/lib/services/` | 8个新增服务函数 | ✅ 框架完成 |
| | | - `getFilterCountsV2()` | |
| | | - `getWorkflowsByTimePeriod()` | |
| | | - `getWorkflowDetailedById()` | |
| | | - `enrichWorkflowWithDetails()` | |
| | | - `getRelatedWorkflows()` | |
| | | - `subscribeNewsletter()` | |
| | | - `submitWorkflow()` | |
| | | - `getWorkflowReviews()` |, `addWorkflowReview()` | |

### 6. 配置文件

| 文件 | 位置 | 更新内容 | 状态 |
|-----|------|---------|------|
| `.env.example` | 根目录 | 新增P0阶段配置项 | ✅ 已更新 |

---

## 二、核心功能集成点

### 2.1 筛选功能流程

```
用户交互 (FilterSidebar组件)
    ↓
触发筛选变更
    ↓
调用 /api/filter-counts 获取实时计数
    ↓
更新 URL 参数 (使用 History API)
    ↓
刷新工作流网格
```

**关键文件**:
- 前端: [`FilterSidebar.astro`](../../src/components/ui/FilterSidebar.astro)
- API: [`filter-counts.json.ts`](../../src/pages/api/filter-counts.json.ts)
- 服务: [`getFilterCountsV2()`](../../src/lib/services/workflows.ts)

### 2.2 详情页内容展示流程

```
访问工作流详情页
    ↓
调用 /api/workflow-details 获取完整信息
    ↓
使用 WorkflowDetailedView 分层展示
    ├─ Disclaimer 区域
    ├─ Overview 概览
    ├─ LogicalBlocks 逻辑块
    ├─ NodeDetails 节点分析
    └─ Related 相关推荐
```

**关键文件**:
- 组件: [`WorkflowDetailedView.astro`](../../src/components/workflow/WorkflowDetailedView.astro)
- API: [`workflow-details.json.ts`](../../src/pages/api/workflow-details.json.ts)
- 类型: [`WorkflowDetailed`](../../src/lib/types/workflow.ts)

### 2.3 Newsletter 订阅流程

```
用户提交邮箱 (NewsletterSubscribe组件)
    ↓
发送到 /api/newsletter-subscribe
    ↓
保存到 newsletter_subscriptions 表
    ↓
调用 Mailchimp/SendGrid API
    ↓
发送确认邮件
```

**关键文件**:
- 组件: [`NewsletterSubscribe.astro`](../../src/components/common/NewsletterSubscribe.astro)
- API: [`newsletter-subscribe.json.ts`](../../src/pages/api/newsletter-subscribe.json.ts)
- 服务: [`subscribeNewsletter()`](../../src/lib/services/workflows.ts)

### 2.4 工作流提交审核流程

```
用户填写表单 (SubmitWorkflowForm组件)
    ↓
前端验证
    ↓
发送到 /api/submit-workflow
    ↓
后端验证 + 垃圾检测
    ↓
保存到 workflow_submissions 表 (status: pending)
    ↓
发送确认和通知邮件
    ↓
进入审核队列
```

**关键文件**:
- 组件: [`SubmitWorkflowForm.astro`](../../src/components/forms/SubmitWorkflowForm.astro)
- API: [`submit-workflow.json.ts`](../../src/pages/api/submit-workflow.json.ts)
- 服务: [`submitWorkflow()`](../../src/lib/services/workflows.ts)

---

## 三、待实现的 TODO 清单

### 3.1 API 端点实现 (Code阶段)

- [ ] **filter-counts.json.ts** - 完整的筛选计数逻辑
  - [ ] 学习现有的 `getFilterCounts()` 实现模式
  - [ ] 实现多条件筛选的计数计算
  - [ ] 集成 Redis 缓存

- [ ] **workflows-by-time.json.ts** - 时间段查询逻辑
  - [ ] 实现时间范围计算
  - [ ] 优化 Supabase 查询性能
  - [ ] 添加索引优化

- [ ] **workflow-details.json.ts** - 详情数据合并逻辑
  - [ ] 从 workflow_details 表获取扩展数据
  - [ ] 合并基础和详情数据
  - [ ] 错误处理

- [ ] **newsletter-subscribe.json.ts** - 订阅处理
  - [ ] Mailchimp API 集成
  - [ ] 邮件验证逻辑
  - [ ] 错误处理和重试

- [ ] **submit-workflow.json.ts** - 提交审核处理
  - [ ] 文件上传处理
  - [ ] 垃圾检测集成 (Akismet)
  - [ ] 邮件通知

### 3.2 组件交互实现 (Code阶段)

- [ ] **FilterSidebar.astro** - 筛选交互
  - [ ] 监听筛选变更事件
  - [ ] URL 参数同步
  - [ ] 移动端 Sheet 动画
  - [ ] localStorage 状态持久化

- [ ] **WorkflowDetailedView.astro** - 详情页交互
  - [ ] 目录导航交互
  - [ ] 区间展开/收起动画
  - [ ] 打印样式调整

- [ ] **NewsletterSubscribe.astro** - 表单提交
  - [ ] 表单验证
  - [ ] 提交处理
  - [ ] 成功/错误提示

- [ ] **WorkflowViewer.astro** - 图片查看器
  - [ ] 缩放功能 (滚轮/按钮)
  - [ ] 拖拽平移
  - [ ] 全屏模式
  - [ ] 键盘快捷键

- [ ] **SubmitWorkflowForm.astro** - 提交表单
  - [ ] 实时验证
  - [ ] 字符计数
  - [ ] 表单提交处理
  - [ ] 进度反馈

### 3.3 服务层实现 (Code阶段)

- [ ] **src/lib/services/workflows.ts** - 新增服务函数实现
  - [ ] `getFilterCountsV2()` - 参考现有的 `getFilterCounts()` 实现模式
  - [ ] `getWorkflowsByTimePeriod()` - 使用 Supabase 时间范围查询
  - [ ] `getWorkflowDetailedById()` - 从 workflow_details 表获取数据
  - [ ] `enrichWorkflowWithDetails()` - 数据合并逻辑
  - [ ] `getRelatedWorkflows()` - 相似度计算
  - [ ] `subscribeNewsletter()` - Mailchimp API 调用
  - [ ] `submitWorkflow()` - 提交处理和验证
  - [ ] `getWorkflowReviews()` / `addWorkflowReview()` - 评论CRUD

### 3.4 数据库实现 (DevOps阶段)

- [ ] **supabase-migrations.sql** - 执行迁移脚本
  - [ ] 连接 Supabase 数据库
  - [ ] 创建所有表结构
  - [ ] 创建索引
  - [ ] 设置 RLS 策略
  - [ ] 创建视图和触发器

### 3.5 第三方服务集成 (DevOps阶段)

- [ ] **Mailchimp 集成**
  - [ ] 创建 Mailchimp 账户
  - [ ] 配置邮件列表
  - [ ] 生成 API 密钥
  - [ ] 设置确认邮件模板

- [ ] **图像存储配置**
  - [ ] Cloudflare 账户配置
  - [ ] 存储桶设置
  - [ ] 图像优化配置

- [ ] **垃圾检测配置 (Akismet)**
  - [ ] 注册 Akismet 账户
  - [ ] 配置 API 密钥
  - [ ] 测试垃圾检测

---

## 四、依赖项和关键库

### 已有依赖

```json
{
  "dependencies": {
    "astro": "latest",
    "@supabase/supabase-js": "^2.38.0",
    "tailwindcss": "latest"
  }
}
```

### 需要添加的依赖 (下一阶段)

```json
{
  "dependencies": {
    "@mailchimp/marketing": "^3.0.80",
    "react-medium-image-zoom": "^5.1.0",
    "zod": "^3.22.0",
    "axios": "^1.6.0"
  },
  "devDependencies": {
    "@types/sharp": "^0.32.0"
  }
}
```

---

## 五、开发优先级顺序

### 第一阶段 (P0 - 高级筛选)

1. ✅ **类型和数据库架构** - 已完成
2. ⏳ **API 端点** (filter-counts, workflows-by-queryingTime)
   - 预计 4-6小时
3. ⏳ **FilterSidebar 组件** 交互
   - 预计 6-8小时
4. ⏳ **集成测试**
   - 预计 3-4小时

### 第二阶段 (P0 - 详情页升级)

1. ⏳ **workflow-details API** 实现
   - 预计 4-5小时
2. ⏳ **WorkflowDetailedView** 交互
   - 预计 5-6小时
3. ⏳ **WorkflowViewer** 查看器实现
   - 预计 6-8小时

### 第三阶段 (P1 - 社区功能)

1. ⏳ **newsletter-subscribe** API
   - Mailchimp 集成: 3-4小时
2. ⏳ **submit-workflow** API
   - 垃圾检测集成: 4-5小时
3. ⏳ **相关组件** 完成
   - NewsletterSubscribe / SubmitWorkflowForm: 6-8小时

**总预计**: 45-60小时 (5-7工作日)

---

## 六、测试策略

### 单元测试

- [ ] API 端点单元测试
- [ ] 服务函数单元测试
- [ ] 类型定义验证

### 集成测试

- [ ] 筛选流程端到端测试
- [ ] 详情页数据加载测试
- [ ] Newsletter 订阅流程测试
- [ ] 工作流提交流程测试

### 性能测试

- [ ] API 响应时间 (目标 <500ms)
- [ ] 页面加载时间 (目标 <2s)
- [ ] 缓存效率

---

## 七、文件交叉依赖关系

```
类型定义 (workflow.ts)
    ├─ API 端点
    │  ├─ filter-counts.json.ts
    │  ├─ workflows-by-time.json.ts
    │  ├─ workflow-details.json.ts
    │  ├─ newsletter-subscribe.json.ts
    │  └─ submit-workflow.json.ts
    │
    ├─ 服务层 (workflows.ts)
    │  ├─ getFilterCountsV2()
    │  ├─ getWorkflowsByTimePeriod()
    │  ├─ getWorkflowDetailedById()
    │  ├─ enrichWorkflowWithDetails()
    │  ├─ subscribeNewsletter()
    │  ├─ submitWorkflow()
    │  └─ getWorkflowReviews()
    │
    └─ 组件
       ├─ FilterSidebar.astro → API (filter-counts)
       ├─ WorkflowDetailedView.astro → API (workflow-details)
       ├─ NewsletterSubscribe.astro → API (newsletter-subscribe)
       ├─ SubmitWorkflowForm.astro → API (submit-workflow)
       ├─ WorkflowViewer.astro
       └─ FilterCounter.astro
```

---

## 八、后续维护清单

- [ ] 定期审查 TODO 注释完成情况
- [ ] 更新文档版本号
- [ ] 归档完成的任务
- [ ] 收集团队反馈
- [ ] 性能优化基准测试

---

**下一步**: 转到 Code 模式，按优先级实现 API 端点和组件交互逻辑。
