# 项目启动检查清单 (LAUNCH_CHECKLIST)

> **启动前准备工作清单** | 版本: v1.0 | 最后更新: 2026-01-10

---

## 📋 概述

本清单确保 **Week 0 启动周** 所有必要工作已准备完毕。由各功能负责人在周五前完成相应检查点，由 PM 汇总验收。

**总体目标**: Week 0 结束时，所有环节绿灯，Team ready to go for Week 1 开发。

---

## 1️⃣ 文档准备 (Document Readiness) - Week 0

**Owner**: PM | **Deadline**: 周五中午  
**验收标准**: 所有规划文档链接已整理，版本号已标记，可被访问

### 1.1 规划文档清单

- [ ] `plans/REDESIGN_SPECIFICATIONS.md` 已上传（设计规范）
- [ ] `plans/TECHNICAL_ARCHITECTURE.md` 已上传（技术架构）
- [ ] `plans/PROJECT_MILESTONES.md` 已上传（里程碑计划）
- [ ] `plans/CONTENT_STRATEGY.md` 已上传（内容策略）
- [ ] `plans/USER_TESTING_PLAN.md` 已上传（用户测试计划）
- [ ] `plans/EXECUTION_FRAMEWORK.md` 已上传（执行框架）
- [ ] `plans/MONITORING_DASHBOARD.md` 已上传（监控体系）
- [ ] `plans/STAKEHOLDER_ALIGNMENT.md` 已上传（团队对齐）
- [ ] `plans/IMPLEMENTATION_CHECKLIST.md` 已上传（实现清单）
- [ ] `plans/CODE_STRUCTURE.md` 已上传（代码清单）
- [ ] `plans/website-comparison.md` 已上传（对比分析）

### 1.2 文档整理与分发

- [ ] 所有文档链接已集中在 `LAUNCH.md` 导航栏
- [ ] 文档版本号已标记为 `v1.0 启动版`
- [ ] 所有文档均已进入版本控制（Git）
- [ ] 团队成员可访问所有文档 (权限检查)
- [ ] 文档共享链接已发送给 Stakeholder

### 1.3 文档评审与签核

- [ ] PM 已检查所有文档完整性
- [ ] CTO 已评审技术相关文档
- [ ] 设计 VP 已评审设计规范
- [ ] 内容 VP 已评审内容策略
- [ ] 所有 Stakeholder 已知悉项目文档并表示同意
- [ ] 无重大 controversial 点待解决

---

## 2️⃣ 工具与协作平台准备 - Week 0

**Owner**: PM / Tech Lead | **Deadline**: 周三  
**验收标准**: 所有工具可用，团队成员权限已配置，首次使用已成功

### 2.1 GitHub 配置

- [ ] 项目代码库权限已检查 (maintainer level for leads)
- [ ] Feature branch `feature/redesign-v1` 已创建
- [ ] Protection rules 已配置 (main 分支需 PR review)
- [ ] GitHub Projects board 已创建 (`n8nworkflow-redesign`)
- [ ] Issue 模板已配置 (User Story, Bug, Task)
- [ ] 代码审查 (CODEOWNERS) 已配置
- [ ] GitHub Actions CI/CD 已测试可用
- [ ] 所有团队成员的 GitHub 权限已验证

**权限清单:**
```
├─ PM: maintainer (代码库)
├─ Tech Lead: maintain (代码库)
├─ 前端工程师 x2: write (feature branch)
├─ 后端工程师: write (feature branch)
└─ QA: read (报告 issue)
```

### 2.2 Figma 配置

- [ ] Figma workspace 已建立 (`n8nworkflow redesign`)
- [ ] 共享链接已通知所有设计相关成员
- [ ] 设计库 (Design System) 文件已新建
- [ ] 原型文件已新建 (可开始设计)
- [ ] 权限已配置:
  - [ ] 设计师: Editor
  - [ ] PM: Viewer
  - [ ] Tech Lead: Viewer
  - [ ] 前端 Lead: Viewer
- [ ] Figma 与开发工具集成已检查（如 Penpot 或其他）

### 2.3 项目管理工具 (Notion / Linear / Jira)

**工作流平台选择**: [ ] Notion / [ ] Linear / [ ] Jira / [ ] 其他: ____

- [ ] 工作空间已建立 (`n8nworkflow redesign`)
- [ ] 通知设置已配置 (Slack/钉钉集成)
- [ ] 模板已建立:
  - [ ] Weekly Report 模板
  - [ ] Risk Log 模板
  - [ ] Decision Log 模板
  - [ ] Meeting Notes 模板
- [ ] 权限已配置给所有团队成员
- [ ] 首次同步测试成功 (Slack notification, etc.)

### 2.4 沟通平台 (Slack / 钉钉)

**选择**: [ ] Slack / [ ] 钉钉 / [ ] 其他: ____

- [ ] Project channel 已建立 (`#n8nworkflow-redesign` 或 group)
- [ ] 所有团队成员已加入
- [ ] 子 channel / topic 已建立:
  - [ ] #general (通知、会议、重要事项)
  - [ ] #development (代码、API、讨论)
  - [ ] #design (设计反馈、原型)
  - [ ] #qa (测试、bug、性能)
  - [ ] #urgent-support (紧急问题)
- [ ] Bot 集成已配置:
  - [ ] GitHub notifications
  - [ ] Figma updates
  - [ ] Project management tool updates
- [ ] 值班表已生成 (PM / Tech Lead 紧急联系方式)
- [ ] Slack workspace guidelines 已分享

### 2.5 文档与笔记工具

- [ ] Google Drive / OneDrive 共享文件夹已建立
- [ ] 会议记录模板已准备
- [ ] 知识库 / Wiki 已准备 (GitHub Wiki 或其他)
- [ ] 链接已整理在 LAUNCH.md 或团队 Onboarding 文档

---

## 3️⃣ 开发环境准备 - Week 0

**Owner**: Tech Lead / 后端工程师 | **Deadline**: 周四  
**验收标准**: 本地开发环境可用，依赖安装完成，首次运行成功

### 3.1 代码库准备

- [ ] 改版相关的 feature 分支已创建:
  - [ ] `feature/redesign-v1` (主分支)
  - [ ] `feature/redesign-filter-sidebar` (前端分支)
  - [ ] `feature/redesign-detail-view` (前端分支)
  - [ ] `feature/redesign-apis` (后端分支)
- [ ] `.gitignore` 已检查 (node_modules, .env local files, 等)
- [ ] `.env.example` 已更新，新增环境变量已列出:
  - [ ] `SUPABASE_URL` (示例值或说明)
  - [ ] `SUPABASE_ANON_KEY` (示例值或说明)
  - [ ] `MAILCHIMP_API_KEY` (说明: 见 credentials sheet)
  - [ ] `MAILCHIMP_AUDIENCE_ID` (说明: 见 credentials sheet)
  - [ ] 其他第三方服务 API keys
- [ ] `package.json` 已检查，新增依赖列出但**未**安装:
  - [ ] `react-medium-image-zoom` (version TBD)
  - [ ] `mailchimp-marketing` (version TBD)
  - [ ] 其他新增包
  - **说明**: 暂不安装，等待 Week 1 完整依赖评审
- [ ] `tsconfig.json` 已检查（TypeScript 配置 OK）
- [ ] `astro.config.mjs` 已检查（Astro 配置 OK）

### 3.2 依赖版本检查

- [ ] Node.js 版本需求已确认 (≥ 16.x)
- [ ] npm / yarn 版本已检查
- [ ] `package-lock.json` 状态已知晓 (不修改，待 Week 1)
- [ ] 新增依赖的 license 已检查 (Apache, MIT, 等合规)
- [ ] 新增依赖的 npm trends / security check 已做 (no known vulnerabilities)

**依赖版本决策表:**
```
| Package | 版本 | 理由 | Status |
|---------|------|------|--------|
| react-medium-image-zoom | ^5.x or ^6.x | [待确认] | ⏳ Review pending |
| mailchimp-marketing | ^3.x | [官方推荐] | ⏳ Review pending |
```

### 3.3 本地开发环境设置指南

- [ ] README 或 SETUP.md 已更新，包含以下信息:
  - [ ] Clone 命令
  - [ ] Node.js 版本要求
  - [ ] 依赖安装命令 (`npm install`)
  - [ ] 环境变量配置步骤 (`.env.development` 参考 `.env.example`)
  - [ ] 本地开发服务启动命令 (`npm run dev` or `astro dev`)
  - [ ] 其他必要信息 (database setup, 等)
- [ ] 故障排查 (Troubleshooting) 文档已准备或链接已提供

### 3.4 开发工具链验证

- [ ] Code editor (VSCode, WebStorm, etc.) 推荐已列出
- [ ] Linter / Formatter (ESLint, Prettier) 配置已检查:
  - [ ] `.eslintrc` 已存在且配置 OK
  - [ ] `.prettierrc` 已存在且配置 OK
  - [ ] 团队已安装对应 IDE extension
- [ ] Git hooks (pre-commit) 已配置 (Husky, lint-staged)
- [ ] 开发工具脚本已验证:
  - [ ] `npm run dev` (启动开发服务)
  - [ ] `npm run build` (生产构建)
  - [ ] `npm run lint` (linting)
  - [ ] `npm run format` (formatting)
  - [ ] `npm run test` (测试运行)

---

## 4️⃣ 数据库准备 - Week 0

**Owner**: 后端工程师 | **Deadline**: 周四  
**验收标准**: Supabase 项目可用，迁移脚本已评审，备份计划已制定

### 4.1 Supabase 项目确认

- [ ] Supabase 项目已创建或已有现存项目可用
- [ ] Project ID 已记录: `_______________`
- [ ] Region 已选择并合理: `_______________` (考虑数据驻地等)
- [ ] API Key (anon & service role) 已生成
- [ ] API Key 已安全保存 (Password Manager, 等)
- [ ] Database connection string 已测试可用
- [ ] Supabase dashboard 访问权限已分配给开发团队

### 4.2 数据库迁移脚本审查

- [ ] `scripts/supabase-migrations.sql` 已创建并包含:
  - [ ] `workflow_details` 表 (DDL, indexes, constraints)
  - [ ] `newsletter_subscriptions` 表
  - [ ] `workflow_submissions` 表
  - [ ] `workflow_reviews` 表
  - [ ] 其他关联表或视图
- [ ] SQL 脚本已通过 Code Review (Tech Lead + 后端 lead):
  - [ ] Schema 设计合理
  - [ ] 索引策略合理
  - [ ] 外键约束正确
  - [ ] 没有 SQL injection 风险
- [ ] SQL 脚本暂**未**执行 (等待 Week 1 正式启动)
- [ ] 脚本版本号已标记: `v1.0`
- [ ] 脚本执行步骤文档已准备 (在 Wiki / README 中)

### 4.3 本地开发数据库配置

- [ ] Docker Compose 或本地数据库 (SQLite for local dev) 已配置:
  - [ ] `docker-compose.yml` 已检查或 SQLite 配置已完成
  - [ ] 本地 DB 初始化脚本已准备
  - [ ] 种子数据 (seed data) 已准备 (示例 workflows 等)
- [ ] 本地 DB 连接字符串已配置在 `.env.development`
- [ ] 本地 DB Connection 已测试成功
- [ ] DB Admin UI (如 pgAdmin for Postgres) 已配置 (可选但推荐)

### 4.4 数据库备份与恢复计划

- [ ] 备份策略已制定:
  - [ ] 备份频率 (daily / weekly)
  - [ ] 备份保留期 (30 天 / 90 天)
  - [ ] 备份存储位置 (AWS S3, Google Cloud Storage, etc.)
- [ ] 备份工具已选择 (Supabase 自带功能 or 第三方)
- [ ] 恢复步骤文档已准备
- [ ] 恢复测试已计划 (至少做过 1 次演练)

### 4.5 数据安全与隐私合规

- [ ] Row Level Security (RLS) 策略已规划:
  - [ ] 谁可以读取 workflow_details
  - [ ] 谁可以写 workflow_submissions
  - [ ] 谁可以管理 newsletter_subscriptions
- [ ] GDPR / 隐私政策要求已识别 (如有)
- [ ] 敏感数据加密需求已识别 (如邮箱等)
- [ ] 数据访问审计日志需求已识别

---

## 5️⃣ 设计准备 - Week 0

**Owner**: 设计师 / 设计 VP | **Deadline**: 周四  
**验收标准**: 设计规范转化为 Figma 件，组件库建立，移动端 breakpoints 配置

### 5.1 设计规范转化为 Figma

- [ ] Figma 项目已建立 (`n8nworkflow redesign`)
- [ ] 设计规范文档 (`REDESIGN_SPECIFICATIONS.md`) 已读完
- [ ] 设计系统已在 Figma 建立:
  - [ ] 颜色令牌已定义 (primary, secondary, neutral, status colors)
  - [ ] 排版令牌已定义 (font sizes, line heights, weights)
  - [ ] 间距令牌已定义 (4px grid, 8px increments)
  - [ ] 组件令牌已定义 (Button, Input, Card styles)
- [ ] 设计令牌已应用到 Tailwind config 或 CSS variables
- [ ] Figma 组件库已建立 (reusable components)

### 5.2 组件库建立

- [ ] 以下组件已在 Figma 建立:
  - [ ] Button (primary, secondary, tertiary, sizes)
  - [ ] Input fields (text, email, textarea)
  - [ ] Dropdown / Select
  - [ ] Filter sidebar (样式已定义)
  - [ ] Pagination (样式已定义)
  - [ ] Loading spinner
  - [ ] Progress indicator
  - [ ] Alert / Toast
  - [ ] Modal dialog
  - [ ] Card (workflow card, author card)
- [ ] 所有组件已有使用文档或说明
- [ ] 组件变体 (variants) 已定义 (hover, disabled, active states)

### 5.3 响应式设计检查

- [ ] Desktop breakpoint (1440px) 已设置
- [ ] Tablet breakpoint (768px) 已设置
- [ ] Mobile breakpoint (375px) 已设置
- [ ] 所有主要页面已有 3 个 breakpoint 的设计:
  - [ ] HomePage (首页)
  - [ ] WorkflowListPage (工作流列表)
  - [ ] WorkflowDetailPage (工作流详情)
  - [ ] SearchResultsPage (搜索结果)
- [ ] 响应式布局问题已识别 (如有)

### 5.4 初版原型完成

- [ ] 低保真原型 (Wireframe) 已完成，包含:
  - [ ] 主要页面布局
  - [ ] 用户交互流 (User flows)
  - [ ] 导航结构
  - [ ] 内容占位符
- [ ] 初版原型已进行内部设计评审:
  - [ ] 反馈已收集 (评审 checklist)
  - [ ] 反馈数量 < 5 个 (控制在合理范围)
  - [ ] 反馈已记录并分类 (must-have, nice-to-have)
- [ ] 原型已无 major blockers，可进入下一阶段

### 5.5 设计评审准备

- [ ] 设计评审会已排期 (Week 2)
- [ ] 评审清单已准备: 架构清晰度、可用性、视觉一致性等
- [ ] 评审参与者名单已确认 (PM, Tech Lead, 前端 lead)
- [ ] 评审会议链接 / 房间已预订

---

## 6️⃣ 内容准备 - Week 0

**Owner**: 内容编辑 / 内容 VP | **Deadline**: 周五  
**验收标准**: 内容模板已建立，Top 10 示例数据已撰写，质量检查已完成

### 6.1 内容模板建立

- [ ] **Disclaimer 模板** 已编写:
  - [ ] 长度建议 (50-150 words)
  - [ ] 必填信息 (legal, disclaimers, limitations)
  - [ ] 示例已准备
- [ ] **Workflow Overview 模板** 已编写:
  - [ ] 长度建议 (100-300 words)
  - [ ] 结构 (What, Why, How)
  - [ ] 示例已准备
- [ ] **Logical Blocks 编写指南** 已完成:
  - [ ] 块的定义 (workflow 中的逻辑段)
  - [ ] 块的命名规范
  - [ ] 块的描述格式
  - [ ] 示例已准备
- [ ] **Node Details 编写标准** 已制定:
  - [ ] Node 类型的分类 (Trigger, Action, Condition, etc.)
  - [ ] 每种 Node 类型的描述格式
  - [ ] 参数说明方式
  - [ ] 示例已准备
- [ ] **内容质量检查清单** 已完成:
  - [ ] 拼写 / 语法检查
  - [ ] 格式一致性
  - [ ] 链接有效性
  - [ ] 示例代码正确性

### 6.2 试点数据撰写

- [ ] **Top 10 工作流** 已选定并列出:
  ```
  1. [Workflow 名字] - 作为示例数据使用
  2. [Workflow 名字]
  ...
  10. [Workflow 名字]
  ```

- [ ] 上述 10 个工作流的详细内容已撰写:
  - [ ] Disclaimer 已撰写
  - [ ] Overview 已撰写
  - [ ] Logical Blocks 已列出并描述
  - [ ] Node Details 已完整说明
  - [ ] 所有字段已填充 (无缺失)

- [ ] 质量检查已进行:
  - [ ] 自检: 语法、格式、内容完整性
  - [ ] 同行评审: 至少 1 位同事已评审
  - [ ] 符合质量标准的数量: 10/10

### 6.3 示例数据准备完毕

- [ ] 上述 10 个工作流的数据已转化为与代码兼容的格式:
  - [ ] JSON 格式 (如使用 API)
  - [ ] Markdown 格式 (如使用文件)
  - [ ] 数据库插入脚本 (seed data)
- [ ] 示例数据已准备好用于 Week 3+ 的开发和测试
- [ ] 示例数据文件已保存在版本控制 (`scripts/seed-data/`)

### 6.4 数据迁移计划

- [ ] 全量数据迁移计划已制定:
  - [ ] 当前工作流数: ____ (多少个需要迁移)
  - [ ] 预期可用率: 60% (基于规划)
  - [ ] 迁移策略: 优先级排序, AI 辅助 for 缺失内容 等
  - [ ] Timeline: Week 2-3 开始批量迁移
- [ ] AI 辅助工具评估已完成 (如使用 GPT 等补充内容):
  - [ ] 工具已选定: _____________
  - [ ] 成本评估已做
  - [ ] 质量风险已识别
- [ ] 数据审核计划已制定:
  - [ ] 谁负责审核? [名字]
  - [ ] 阅读时间预计? [多少小时]
  - [ ] 审核频率? [每周 / 每日]

---

## 7️⃣ 测试环境准备 - Week 0

**Owner**: QA 工程师 / Tech Lead | **Deadline**: 周四  
**验收标准**: 测试框架已建立，测试计划已制定，灰度环境基础完成

### 7.1 测试框架准备

- [ ] 测试类型已规划:
  - [ ] **单元测试** (Unit Tests) - 代码级别
  - [ ] **集成测试** (Integration Tests) - 组件/API 级别
  - [ ] **端到端测试** (E2E Tests) - 用户流程
  - [ ] **性能测试** (Performance Tests) - LCP, FCP, etc.
  - [ ] **可用性测试** (Accessibility Tests) - A11y 检查
  - [ ] **跨浏览器兼容性** (Browser Compatibility)

- [ ] 测试工具已选定和配置:
  - [ ] **单元测试**: Jest / Vitest 等
  - [ ] **E2E 测试**: Cypress / Playwright 等
  - [ ] **性能测试**: Lighthouse / WebPageTest 等
  - [ ] **Mock 工具**: MSW (Mock Service Worker) 已配置
  - [ ] **测试数据库**: SQLite 或 test fixtures 已准备

- [ ] 测试覆盖率目标已设定:
  - [ ] 单元测试覆盖率: ≥ 80%
  - [ ] 关键路径覆盖率: 100%
  - [ ] E2E 测试覆盖率: ≥ 70%

### 7.2 测试计划制定

- [ ] 整体测试计划已根据 `USER_TESTING_PLAN.md` 制定:
  - [ ] 用户测试场景已列出 (主要用户流程)
  - [ ] 测试用例已编写 (Given-When-Then 格式)
  - [ ] 测试数据已准备 (fixtures, mocks)
  - [ ] 预期结果已定义

- [ ] 缺陷追踪系统已配置:
  - [ ] **工具选择**: GitHub Issues / Linear / Jira / 其他: ___
  - [ ] **Bug 模板** 已建立 (重现步骤、优先级等)
  - [ ] **Bug 分类** 已定义 (Critical, High, Medium, Low)
  - [ ] **Bug 生命周期** 已定义 (Open → In Progress → Resolved → Verified → Closed)

### 7.3 灰度环境准备

- [ ] **灰度方案** 已选定:
  - [ ] Cloudflare Workers (用于流量分割)
  - [ ] 网关配置 (Kong, Nginx 等)
  - [ ] 功能开关 (Feature Flags)
  - [ ] 其他: _______________

- [ ] **灰度配置** 已初步评估:
  - [ ] 灰度流量分割逻辑已设计 (IP, user ID, random, etc.)
  - [ ] 回滚机制已设计
  - [ ] 灰度监控指标已列出 (error rate, latency, etc.)
  - [ ] 灰度告警规则已制定 (如 error rate > 5%, 自动回滚)

- [ ] **测试环境** 已准备:
  - [ ] Staging 环境已配置 (类似生产环境)
  - [ ] Test database 已初始化
  - [ ] Test API keys 已配置 (Mailchimp test account, etc.)
  - [ ] Staging 地址已文档化: _______________

- [ ] **监控与日志** 已准备:
  - [ ] 日志收集方案已选定 (DataDog, Splunk, etc. or 本地)
  - [ ] 关键日志点已识别
  - [ ] 监控仪表板已设计 (Grafana, Datadog, etc.)

### 7.4 灰度发布脚本准备

- [ ] 灰度发布脚本已准备:
  - [ ] Phase 1 (0% → 100% 内部) 脚本
  - [ ] Phase 2 (0% → 20% 真实用户) 脚本
  - [ ] Phase 3 (20% → 50%) 脚本
  - [ ] Phase 4 (50% → 100%) 脚本
  - [ ] 回滚脚本

- [ ] 灰度发布清单已准备:
  - [ ] 发布前检查项 (缺陷数, 性能指标, 等)
  - [ ] GO / NO-GO 决策标准
  - [ ] 发布中止条件
  - [ ] 回滚条件

---

## 8️⃣ 沟通与协作准备 - Week 0

**Owner**: PM | **Deadline**: 周五  
**验收标准**: 所有会议已排期，团队成员已收到邀请并确认

### 8.1 定期会议排期

**日常会议:**
- [ ] **Daily Standup** 
  - [ ] 时间: 周一至周五 10:00 AM (15 分钟)
  - [ ] 形式: 同步 / 异步 (选择一个)
  - [ ] 地点: _____________ (Zoom link / 会议室)
  - [ ] Owner: PM
  - [ ] 所有团队成员已收到邀请并确认参加

**周期会议:**
- [ ] **Weekly Planning**
  - [ ] 时间: 每周一 14:00
  - [ ] 时长: 1.5 小时
  - [ ] Owner: PM
  - [ ] 议程模板已准备 (已有的工作, 本周计划, blockers)

- [ ] **Weekly Retrospective**
  - [ ] 时间: 每周五 17:30
  - [ ] 时长: 1 小时
  - [ ] Owner: PM / Scrum Master
  - [ ] 议程模板已准备 (做得好, 改进点, action items)

- [ ] **双周设计评审**
  - [ ] 时间: 每周二 10:00 (开始于 Week 2)
  - [ ] 时长: 1 小时
  - [ ] Owner: 设计师
  - [ ] 参与者: PM, Tech Lead, 前端 lead

- [ ] **双周技术评审**
  - [ ] 时间: 每周三 14:00 (开始于 Week 2)
  - [ ] 时长: 1 小时
  - [ ] Owner: Tech Lead
  - [ ] 参与者: 所有工程师, PM

- [ ] **周报汇总**
  - [ ] 时间: 每周五 16:00
  - [ ] 时长: 30 分钟
  - [ ] Owner: PM
  - [ ] 模板: `WEEKLY_REPORT_TEMPLATE.md`

### 8.2 会议室与视频链接预约

- [ ] 所有会议链接已预约 (Zoom / Google Meet / Teams)
- [ ] 会议室日历已同步 (Google Calendar / Outlook)
- [ ] 重复邀请已发送给全体成员
- [ ] 会议议程链接已添加到日历邀请
- [ ] 所有成员已确认参加 (回复邀请)

### 8.3 Stakeholder 通知

- [ ] **项目启动通知** 已发送给:
  - [ ] CTO / VP Engineering
  - [ ] 产品 VP
  - [ ] 设计 VP
  - [ ] 内容 VP
  - [ ] 其他关键 Stakeholder

- [ ] **沟通邮件** 包含以下信息:
  - [ ] 项目名称、目标、时间表
  - [ ] 团队成员名单
  - [ ] 关键文档链接 (LAUNCH.md, etc.)
  - [ ] 紧急联系方式
  - [ ] 期望 Stakeholder 回复确认

### 8.4 外部协作方通知

- [ ] **客户 / 合作伙伴** 已通知 (如有):
  - [ ] 项目时间表已确认
  - [ ] 交付物预期已对齐
  - [ ] 沟通频率已确定 (双周 check-in, etc.)

- [ ] **第三方服务提供商** 已通知 (如有):
  - [ ] Mailchimp: 账户已激活, 支持联系方式已获取
  - [ ] Cloudflare: 账户已激活, 配置支持已联系
  - [ ] 其他服务: ____________

---

## 9️⃣ 环境变量与凭证管理 - Week 0

**Owner**: Tech Lead | **Deadline**: 周四  
**验收标准**: 所有环境变量已安全管理，团队成员可访问

### 9.1 环境变量清单

- [ ] 以下环境变量已列出并配置:

**开发环境变量** (`.env.development`):
```
□ SUPABASE_URL = [dev database URL]
□ SUPABASE_ANON_KEY = [dev anon key]
□ MAILCHIMP_API_KEY = [test API key]
□ MAILCHIMP_AUDIENCE_ID = [test audience ID]
□ NODE_ENV = development
□ DEBUG = * (可选, 用于调试)
```

**生产环境变量** (`.env.production`, 仅 DevOps/PM 知晓):
```
□ SUPABASE_URL = [prod database URL]
□ SUPABASE_ANON_KEY = [prod anon key]
□ MAILCHIMP_API_KEY = [prod API key]
□ MAILCHIMP_AUDIENCE_ID = [prod audience ID]
□ NODE_ENV = production
```

- [ ] `.env.example` 已更新包含上述所有 keys (值为占位符或说明)
- [ ] `.env.example` 已提交到 Git
- [ ] `.env.development` 和 `.env.production` 已添加到 `.gitignore`

### 9.2 凭证安全管理

- [ ] **凭证存储方案** 已选定:
  - [ ] 1Password / LastPass 等密码管理器
  - [ ] GitHub Secrets (用于 CI/CD)
  - [ ] 其他: _______________

- [ ] **凭证分发方案** 已制定:
  - [ ] 谁有权访问生产凭证? [PM, Tech Lead, DevOps 仅]
  - [ ] 谁有权访问开发凭证? [全体工程师]
  - [ ] 凭证轮换计划? [每 90 天]
  - [ ] 审计日志记录? [是]

- [ ] **Mailchimp 凭证** 已获取:
  - [ ] Test API key 已生成
  - [ ] Audience ID 已确认
  - [ ] 权限范围已检查 (read/write lists, etc.)

- [ ] **Supabase 凭证** 已获取:
  - [ ] Project URL 已记录
  - [ ] Anon key 已生成
  - [ ] Service role key 已生成 (仅后端使用)
  - [ ] 权限范围已检查

### 9.3 CI/CD 密钥配置

- [ ] GitHub Actions 已配置:
  - [ ] GitHub Secrets 已添加:
    - [ ] `SUPABASE_URL`
    - [ ] `SUPABASE_ANON_KEY`
    - [ ] 其他第三方 API keys
  - [ ] CI/CD 工作流能访问这些密钥

---

## 🔟 最终检查清单 - 周五下午

**Owner**: PM | **Deadline**: 周五 17:00

在 Week 0 结束前，PM 应检查以下所有工作已完成:

### 最终验收检查

- [ ] **文档**: 所有 9 份规划文档已完成、已链接、可访问
- [ ] **工具**: GitHub, Figma, 项目管理平台, 沟通平台全部可用
- [ ] **开发环境**: 本地 dev 环境已测试，npm install 成功
- [ ] **数据库**: Supabase 可用，迁移脚本已评审 (未执行)
- [ ] **设计**: 初版原型已完成，设计系统已建立
- [ ] **内容**: Top 10 工作流已撰写，质量检查已完成
- [ ] **测试**: 测试框架已选定，灰度环境基础已准备
- [ ] **沟通**: 所有会议已排期，Stakeholder 已通知
- [ ] **权限**: 所有团队成员权限已配置

### GO / NO-GO 决策

**GO 条件** (所有以下条件必须满足):
- ✅ 上述所有检查点已打勾
- ✅ 无 critical blockers (未解决的关键障碍)
- ✅ Team 已准备好进入 Week 1

**NO-GO 条件** (如果存在):
- ⛔ 重要工具 (如 Supabase) 无法访问
- ⛔ 团队成员关键知识缺失
- ⛔ 硬件 / 网络 环境存在问题

**决策记录**:
```
Week 0 完成度评估:
- 文档准备: XX% 完成
- 工具准备: XX% 完成
- 开发环境: XX% 完成
- 数据库准备: XX% 完成
- 设计准备: XX% 完成
- 内容准备: XX% 完成
- 测试准备: XX% 完成
- 全体完成度: XX%

GO/NO-GO 决策: [ ] GO / [ ] NO-GO
如果 NO-GO, 原因: ________________________
推迟至: ________________________
```

---

## 🎯 Week 0 最终交付清单

**截至周五下午，以下物品应已交付并确认：**

1. ✅ LAUNCH.md 已完成并签核
2. ✅ LAUNCH_CHECKLIST.md 已完成
3. ✅ 所有工具可用性已验证
4. ✅ 本地开发环境已测试
5. ✅ 初版原型已完成
6. ✅ Top 10 内容示例已撰写
7. ✅ 所有定期会议已排期并邀请已发出
8. ✅ Team 已开启培训与知识转移
9. ✅ 项目启动会议已召开
10. ✅ GO / NO-GO 决策已做出并记录

**周一 Week 1 早上，团队即可开始日常工作。**

---

## 📞 支持与问题升级

遇到问题？参考以下流程：

| 问题类型 | 联系人 | 响应时间 | 频道 |
|---------|--------|---------|------|
| 文档相关 | PM | 2小时 | Slack #general |
| 工具相关 | Tech Lead | 1小时 | Slack #urgent-support |
| 数据库相关 | 后端 Lead | 1小时 | Slack #development |
| 设计相关 | 设计师 | 2小时 | Slack #design |
| 测试相关 | QA | 2小时 | Slack #qa |
| 紧急阻碍 | PM + Tech Lead | 15 分钟 | Phone + Slack |

---

**文档维护**:
- 版本: v1.0
- 最后更新: 2026-01-10
- 维护者: PM Team
- 下次审查: Week 2
