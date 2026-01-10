# GitHub Projects 看板设置指南 (GITHUB_PROJECTS_SETUP)

> **任务管理与协作工具配置** | 版本: v1.0 | 最后更新: 2026-01-10

---

## 📋 项目概述

本文档指导团队如何使用 **GitHub Projects** 作为项目的日常任务管理、进度追踪和协作工具。GitHub Projects 是 GitHub 原生的项目管理工具，与代码库紧密集成，便于 Issues、PRs 和代码变更的跟踪。

---

## 🎯 看板结构与工作流

### 主看板设置

**看板名称**: `n8nworkflow-redesign` (改版项目主看板)

**看板类型**: Table view (表格视图) + Board view (看板视图)

### 看板列 (Columns)

GitHub Projects 使用"状态"字段来组织任务。下面定义五个主要列：

#### 1. 📋 Backlog (待规划)
- **用途**: 所有新任务的初始位置
- **条件**: 
  - 优先级未排序或待评估
  - 未分配给个人
  - 暂未启动
- **进出规则**:
  - 新建 Issue 自动进入此列
  - PM 或 Lead 定期整理，推动优先级高的任务进入"This Week"列
- **KPI**: Backlog 中的 Issue 应在 1 周内被评估

#### 2. 🎯 This Week (本周任务)
- **用途**: 当周计划的任务（来自 Weekly Planning 会议）
- **条件**:
  - 已分配优先级 (P0/P1/P2)
  - 已分配给具体人员
  - Acceptance criteria 已定义
  - Week 内应完成
- **进出规则**:
  - 从 Backlog 选择并拖拽进入
  - Week 结束时，未完成的任务移回 Backlog 或标记为延期
- **KPI**: This Week 列应包含 ~15-20 个任务 (根据 team velocity)

#### 3. 🚀 In Progress (进行中)
- **用途**: 正在被积极开发的任务
- **条件**:
  - 已分配给人员
  - 有明确的 start time
  - 代码/设计工作已开始
- **进出规则**:
  - 开发者从 "This Week" 拖拽任务进入此列时，任务开始计时
  - 完成开发（自测通过）后，移入 "In Review"
- **KPI**: 同时进行中的任务数不超过 3 个/人

#### 4. 👀 In Review (等待评审)
- **用途**: 已完成开发，等待 Code Review 或 Design Review 的任务
- **条件**:
  - PR/设计稿已提交
  - 等待 reviewer 反馈
  - 有明确的评审 deadline (通常 24 小时)
- **进出规则**:
  - 开发者自动或手动将任务移入此列
  - Reviewer 反馈后，任务移回 In Progress (有修改需求) 或 Done (获批)
- **KPI**: In Review 中的任务平均停留时间不超过 24 小时

#### 5. ✅ Done (已完成)
- **用途**: 已完成、已验证的任务
- **条件**:
  - PR/设计已合并 (merged)
  - 代码已部署到至少 staging 环境
  - 功能测试已通过
  - 或设计已被接受
- **进出规则**:
  - Reviewer 批准 → PR 自动合并 → 自动或手动移入 Done
  - QA 验证通过后确认 Done
- **KPI**: 每周 Done 的任务数应对标 capacity planning

---

## 🔄 工作流程详解

### 任务生命周期

```
1. 创建 Issue (Backlog)
   ↓
2. PM 评估优先级 (Backlog)
   ↓
3. Weekly Planning - 选入本周 (This Week)
   ↓
4. 开发者认领 (In Progress)
   ↓
5. 完成开发、自测通过 (In Review)
   ↓
6. Code Review 反馈
   ├─ 需要修改 → 回到 In Progress
   └─ 批准通过 → Done
   ↓
7. QA 验证 (可选额外步骤)
   ↓
8. 关闭 Issue 或存档
```

### 自动化规则配置

GitHub Projects 支持自动化规则。下面列出建议配置：

#### 规则 1: 新 Issue 自动进入 Backlog

```
触发条件: Issue 新建
操作: 将 Issue 添加到 Projects
设置状态为: Backlog
```

#### 规则 2: PR 创建时自动进入 In Review

```
触发条件: Pull Request 新建或打开
操作: 将关联的 Issue 设置状态为: In Review
```

#### 规则 3: PR 合并时自动进入 Done

```
触发条件: Pull Request 被合并
操作: 将关联的 Issue 设置状态为: Done
```

#### 规则 4: Issue 标记为 "P0" 时自动优先排序

```
触发条件: Issue 标签包含 "P0"
操作: 在 "This Week" 列中按优先级排序
```

#### 规则 5: 长期滞留的 Issue 自动通知

```
触发条件: Issue 在同一列超过 7 天
操作: 自动评论 @assignee: "这个任务已经滞留7天，请提供进度更新"
```

---

## 📊 看板视图与过滤

### 默认视图

#### 视图 1: 主看板 (Board View)

这是默认的看板视图，展示五列流程。

```
┌──────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
│  📋 Backlog  │ 🎯 This Week │ 🚀 In Prog.  │ 👀 In Review │ ✅ Done      │
├──────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
│ Issue #1     │ Issue #10    │ Issue #20    │ Issue #30    │ Issue #40    │
│ (优先级低)    │ (P0)         │ (进行中)      │ (PR 待审)     │ (已完成)      │
│              │ Issue #11    │ Issue #21    │ Issue #31    │ Issue #41    │
│              │ (P1)         │              │              │              │
│ ...          │ ...          │ ...          │ ...          │ ...          │
└──────────────┴──────────────┴──────────────┴──────────────┴──────────────┘
```

#### 视图 2: P0 Functions (Table View)

**过滤条件**:
- 标签: "P0"
- 排序: 优先级 (高 → 低) → 创建日期

**显示列**:
- Title
- Assignee
- Priority
- Status
- Due Date
- Est. Hours

**用途**: PM 和 Lead 快速查看 P0 级功能的进度

#### 视图 3: By Assignee (Grouped View)

**分组方式**: Assignee (按人员分组)

**用途**: 每个团队成员查看自己的任务

#### 视图 4: Current Sprint (Filtered View)

**过滤条件**:
- Status: "This Week" 或 "In Progress"
- Created date: 本周内

**用途**: 周期内的实时进度看板

#### 视图 5: Performance Metrics (Custom View)

**显示数据**:
- 完成率 (Done / This Week)
- 平均完成时间
- 优先级分布

**用途**: 项目 KPI 监控

---

## 📝 Issue 模板与字段

### Issue 的必填字段

每个 Issue 应包含以下字段（通过 GitHub 的 Issue Form 强制）：

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| **Title** | Text | 简洁的 Issue 标题 | "Implement FilterSidebar component" |
| **Description** | Markdown | 详细描述或模板 | 见下文 |
| **Priority** | Dropdown | P0 / P1 / P2 | P0 |
| **Type** | Dropdown | Feature / Bug / Task / Docs | Feature |
| **Assignee** | User | 负责人 | @developer-name |
| **Milestone** | Dropdown | 所属里程碑 | M3: P0 开发 |
| **Labels** | Multi-select | 分类标签 | p0, frontend, blocked |
| **Est. Hours** | Number | 预估工时 | 5 |
| **Due Date** | Date | 截止日期 | 2026-01-17 |

### Issue 模板

#### 模板 1: User Story (功能需求)

```markdown
---
name: User Story
about: 用户故事 - 新功能或需求
title: "[FEATURE] "
labels: ['feature', 'p0/p1/p2']
projects: ['n8nworkflow-redesign']
---

## 用户故事
作为 [用户角色], 我想 [功能需求], 这样我可以 [期望价值]

**示例**:
作为网站访客，我想使用筛选侧边栏按分类和时间段查看工作流，这样我可以快速找到相关内容。

## 接受标准
- [ ] FilterSidebar 组件已创建并集成到主页
- [ ] 用户可以点击筛选选项更新结果
- [ ] 筛选计数正确显示 (即实时更新)
- [ ] 响应式设计在移动端、平板、桌面都可用
- [ ] 无 console 错误或 accessibility 问题

## 技术任务 (子任务)
- [ ] Task 1: 创建 FilterSidebar.astro 组件
- [ ] Task 2: 实现 getFilterCountsV2() 服务函数
- [ ] Task 3: 集成 /api/filter-counts 端点
- [ ] Task 4: 编写单元测试 (>=80% 覆盖)
- [ ] Task 5: 性能优化和灰度监控配置

## 相关链接
- 设计规范: [REDESIGN_SPECIFICATIONS.md]
- 技术设计: [TECHNICAL_ARCHITECTURE.md]
- 代码结构: [CODE_STRUCTURE.md#FilterSidebar]

## 预估工时
- 前端: 5 小时
- 后端: 2 小时
- 测试: 2 小时
- **总计: 9 小时**

## 优先级
[ ] P0 (关键路径) / [ ] P1 (重要) / [ ] P2 (可选)

## 里程碑
[ ] M0-启动 / [ ] M1-设计 / [x] M3-P0开发 / [ ] M4-测试
```

#### 模板 2: Bug Report (缺陷报告)

```markdown
---
name: Bug Report
about: 报告软件缺陷或问题
title: "[BUG] "
labels: ['bug', 'triage']
projects: ['n8nworkflow-redesign']
---

## 问题描述
简明扼要地描述这个 bug。

**示例**:
FilterSidebar 在移动设备上显示时，筛选选项溢出屏幕范围。

## 重现步骤
1. 使用手机浏览器打开首页 (宽度 < 640px)
2. 向下滚动至 FilterSidebar
3. 尝试点击任何筛选选项

## 预期行为
FilterSidebar 应该响应式地调整大小，文本应该换行，所有选项应该可见和可点击。

## 实际行为
筛选选项水平溢出，部分文本被截断，无法点击某些选项。

## 截图或视频
[附加截图 or 录屏]

## 浏览器信息
- 浏览器: Chrome 121
- 操作系统: iOS 17.2
- 设备: iPhone 14

## 优先级
[ ] 🔴 Critical (功能完全不可用)
[ ] 🟠 High (主要功能受影响)
[x] 🟡 Medium (用户体验问题)
[ ] 🟢 Low (视觉或轻微功能问题)

## 缺陷影响
- 影响用户: 移动端用户
- 影响功能: FilterSidebar
- 估计影响范围: 30% 流量

## 根本原因 (可选, 供 QA/Developer 填写)
CSS 媒体查询未正确处理 flex wrap。

## 修复建议
在 FilterSidebar.astro 中添加 `flex-wrap: wrap` 或使用 `@media (max-width: 640px)`。

## 关联 Issue
关联特性: #123 (FilterSidebar 实现)
```

#### 模板 3: Task (任务)

```markdown
---
name: Task
about: 具体的开发任务或工作项
title: "[TASK] "
labels: ['task']
projects: ['n8nworkflow-redesign']
---

## 任务描述
清晰地描述需要完成的具体工作。

**示例**:
实现 `getFilterCountsV2()` 服务函数，从 Supabase 查询工作流的分类和复杂度计数。

## 验收标准
- [ ] 函数已在 `src/lib/services/workflows.ts` 中实现
- [ ] 包含类型定义 (TypeScript interfaces)
- [ ] 支持可选的筛选参数 (时间段, 分类等)
- [ ] 返回结构化的计数对象
- [ ] 已编写单元测试，覆盖各种场景
- [ ] 代码已通过 Code Review
- [ ] 性能满足要求 (< 200ms)

## 依赖
- 依赖于: `src/lib/types/workflow.ts` (类型定义)
- 阻塞: `src/components/ui/FilterSidebar.astro` (FilterSidebar 组件)

## 时间估计
- 预估工时: 2 小时
- 复杂度: 中等

## 实现说明
详见 `CODE_STRUCTURE.md` 中的 FilterSidebar 数据流说明。

## 检查清单
- [ ] 代码已本地测试
- [ ] 已运行 `npm run lint` 和 `npm run format`
- [ ] 已编写或更新相关测试用例
- [ ] 已更新相关文档或 JSDoc 注释
- [ ] 已准备好进行 Code Review
```

#### 模板 4: Documentation (文档)

```markdown
---
name: Documentation
about: 编写或更新文档
title: "[DOCS] "
labels: ['documentation']
projects: ['n8nworkflow-redesign']
---

## 文档需求
说明需要编写或更新的文档。

## 文档位置
将放在: `docs/xxx.md` 或 README 中的 XXX 部分

## 内容大纲
- [ ] 概述 (What)
- [ ] 为什么 (Why)
- [ ] 如何使用 (How)
- [ ] 示例代码/截屏
- [ ] 常见问题 or 陷阱

## 审阅人
由 [Team Lead] 审阅

## 完成标准
- [ ] 文档已完成并可读
- [ ] 包含必要的示例和图表
- [ ] 已通过拼写和语法检查
- [ ] 已获得技术审阅
```

---

## 🏷️ 标签体系

建议使用以下标签对 Issue 进行分类：

### 优先级标签
- `p0` - 关键路径 (必须完成)
- `p1` - 重要 (应该完成)
- `p2` - 可选 (nice-to-have)

### 功能标签
- `frontend` - 前端相关
- `backend` - 后端相关
- `design` - 设计相关
- `database` - 数据库相关
- `api` - API 相关
- `testing` - 测试相关

### 状态标签
- `blocked` - 被阻碍 (等待其他任务完成或决策)
- `on-hold` - 暂停
- `wontfix` - 不会修复
- `duplicate` - 重复 Issue
- `invalid` - 无效

### 工作量标签
- `good-first-issue` - 适合新人的任务
- `help-wanted` - 需要帮助

### 其他
- `bug` - 缺陷
- `feature` - 功能需求
- `task` - 任务
- `documentation` - 文档
- `question` - 问题或讨论

---

## 📅 里程碑配置

创建以下里程碑（Milestones），对应 PROJECT_MILESTONES.md：

| 里程碑 | 描述 | 目标完成日期 | Issue 数 (预估) |
|--------|------|-------------|-----------------|
| M0-启动 | 项目启动和环境准备 | 2026-01-10 | 15 |
| M1-设计评审 | 需求和设计评审 | 2026-01-17 | 10 |
| M2-设计完成 | 高保真设计完成 | 2026-01-24 | 5 |
| M3-P0开发 | 核心功能开发 | 2026-02-07 | 30 |
| M4-P0测试 | P0 功能 QA | 2026-02-14 | 20 |
| M5-P1开发 | 次要功能开发 | 2026-02-28 | 20 |
| M6-灰度Phase1 | 内部灰度发布 | 2026-03-07 | 10 |
| M7-灰度评估 | 灰度数据评估 | 2026-03-14 | 5 |
| M8-全量发布 | 全量发布上线 | 2026-03-21 | 10 |

---

## 🤖 GitHub Actions 与自动化

### CI/CD 集成

设置 GitHub Actions 工作流，使得每个 PR 自动运行测试、linting 等：

```yaml
# .github/workflows/ci.yml
name: CI

on: [pull_request, push]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run lint

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run test

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
```

### Issue 处理自动化

通过 GitHub Actions 或 third-party apps (如 Probot) 自动化 Issue 处理：

```yaml
# .github/workflows/auto-assign-reviewer.yml
name: Auto-assign Reviewers

on: [pull_request]

jobs:
  assign:
    runs-on: ubuntu-latest
    steps:
      - uses: kentaro-m/auto-assign-action@v1.2.1
        with:
          configuration-path: '.github/auto_assign.yml'
```

---

## 📊 报告与指标

### 关键指标 (KPIs)

GitHub Projects 可以导出或订阅以下关键指标：

| 指标 | 计算方式 | 目标值 | 查看频率 |
|------|---------|--------|---------|
| **周速度** | This Week 完成数 / 计划数 | 90%+ | 每周一次 |
| **完成率** | Done 数 / Total 数 | 95%+ | 每周一次 |
| **平均周期** | (Done 日期 - 创建日期) 平均值 | < 5 天 | 每周一次 |
| **代码审查时间** | In Review 平均滞留时间 | < 24 小时 | 实时 |
| **缺陷逃逸率** | 生产环境缺陷数 / 总缺陷数 | < 5% | 按发布 |
| **优先级分布** | P0% / P1% / P2% | 40% / 40% / 20% | 每周一次 |

### 生成报告

**手动方式**:
1. 在 GitHub Projects 中使用 Table View, 按需过滤和排序
2. 导出为 CSV 格式
3. 使用 Excel 或 Google Sheets 进行进一步分析

**自动方式** (可选):
- 使用 GitHub API 编写脚本，定期获取数据
- 集成 third-party 工具 (如 Jira, Linear 的 GitHub 集成)
- 使用 GitHub Actions 定期生成报告

---

## 🔒 权限与访问控制

### 团队成员的 GitHub Projects 权限

| 角色 | Issue 创建 | 修改状态 | 分配任务 | 删除Issue |
|------|-----------|---------|---------|----------|
| PM | ✅ | ✅ | ✅ | ✅ |
| Tech Lead | ✅ | ✅ | ✅ | ✅ |
| 开发者 | ✅ | ✅ | ⚠️ (仅自己) | ❌ |
| QA | ✅ | ⚠️ (Done) | ❌ | ❌ |
| 设计师 | ✅ | ✅ | ❌ | ❌ |

### 设置权限

```
Repository → Settings → Collaborators
  → 添加团队成员，设置 Write 或 Maintain 权限
  → 对于开源协作者, 使用 Discussion 或 Issue 评论进行沟通
```

---

## 📋 日常操作流程

### 每日 Standup (10 分钟)

```
时间: 每天 10:00 AM
参与: 所有开发团队成员

流程:
1. 打开 GitHub Projects → "Current Sprint" 视图
2. 逐个检查团队成员的任务:
   - 完成了什么? (从 In Progress 移至 In Review)
   - 今天计划做什么? (从 This Week 迁移到 In Progress)
   - 是否有阻碍?

3. 更新 blockers (标记为 blocked 标签, 留言说明)
4. 讨论优先级调整 (如有)
```

### 周一 Planning (90 分钟)

```
时间: 每周一 14:00
Owner: PM
参与: 全体团队

流程:
1. 回顾上周完成度 (查看 Done 列)
2. 讨论上周 blocker 和 lessons learned
3. 从 Backlog 中选择本周任务，拖拽到 This Week
4. 按优先级排序 This Week 中的任务
5. 分配 assignee (如未分配)
6. 更新预估工时和截止日期
7. 同步到日历作为团队承诺
```

### 周五 Retro & Review (60 分钟)

```
时间: 每周五 17:30
Owner: PM / Scrum Master
参与: 全体团队

流程:
1. 查看本周完成度
   - This Week 中有多少迁移到 Done?
   - 完成率 = Done / 计划 数
   
2. 团队回顾 (15 min)
   - 做得好的地方 (Keep)
   - 需要改进的地方 (Stop/Improve)
   - 下周的建议 (Start)

3. 数据分析 (10 min)
   - 周速度趋势
   - 平均完成时间
   - 优先级分布

4. 行动项 (可选)
   - 记录下周需要改进的 action items
```

---

## 🔗 与其他工具的集成

### Slack 集成

配置 Slack 通知，实时跟踪 GitHub Projects 变更：

```
Slack App Store → GitHub
→ 订阅 "Issues and Pull Requests"
→ 选择频道: #n8nworkflow-redesign
→ 通知类型: Assigned to me, Review requested, PR merged, etc.
```

### Email 通知

GitHub 默认支持 email 通知。在 GitHub 账户设置中配置：

```
Settings → Notifications
→ Email notifications:
   ☑ Issue or pull request assigned to me
   ☑ Pull request review requested
   ☑ Comments on issues and pull requests I'm participating in
   ☑ Pull request pushed to
```

### 其他工具集成

- **Figma**: 在 Figma 评论中链接 GitHub Issue (`#123`)
- **时间跟踪**: 使用 GitHub API 的第三方时间跟踪工具 (如 Harvest)
- **文档**: 在 Notion / Wiki 中链接相关 GitHub Issues (#123)

---

## 🎓 团队培训清单

在使用 GitHub Projects 前，确保所有团队成员已培训：

- [ ] **所有成员**: 
  - [ ] Github Projects 基础导航
  - [ ] Issue 提交和描述
  - [ ] 标签和里程碑的含义
  - [ ] 看板视图使用

- [ ] **开发者**:
  - [ ] 如何链接 PR 和 Issue
  - [ ] 如何移动自己的任务状态
  - [ ] Code Review 流程和 CI/CD

- [ ] **PM**:
  - [ ] 创建和管理里程碑
  - [ ] 优先级排序和容量规划
  - [ ] 生成报告和 KPI 跟踪

- [ ] **Design**:
  - [ ] 创建设计相关 Issue
  - [ ] 链接 Figma 设计稿
  - [ ] 设计评审流程

---

## ✅ 启动检查清单

在项目开始前，完成以下设置：

- [ ] GitHub Projects board 已创建 (`n8nworkflow-redesign`)
- [ ] 五个主要列已配置 (Backlog, This Week, In Progress, In Review, Done)
- [ ] Issue 模板已配置 (User Story, Bug, Task, Documentation)
- [ ] 标签已创建和分类 (优先级, 功能, 状态等)
- [ ] 里程碑已创建 (M0-M8)
- [ ] 自动化规则已配置 (至少 3 条)
- [ ] 视图已创建 (主看板, P0 Functions, By Assignee, Current Sprint)
- [ ] Slack 集成已配置 (可选)
- [ ] 团队成员已培训
- [ ] 第一周的任务已添加到 This Week
- [ ] 首次 Planning Meeting 已召开

---

## 📚 参考资源

- [GitHub Projects 官方文档](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
- [GitHub Issues 最佳实践](https://github.com/features/issues)
- [敏捷开发 Scrum 指南](https://www.scrum.org/resources/what-is-scrum)

---

**文档维护**:
- 版本: v1.0
- 最后更新: 2026-01-10
- 维护者: PM Team
- 下次审查: Week 2
