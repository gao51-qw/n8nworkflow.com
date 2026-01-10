# n8nworkflow.com 网站改版 - 项目启动文件 (LAUNCH)

> **项目启动主文档** | 版本: v1.0 | 状态: 启动版 | 最后更新: 2026-01-10

---

## 📋 项目总览

### 项目基本信息

| 字段 | 内容 |
|------|------|
| **项目名称** | n8nworkflow.com 网站改版 Phase 1 |
| **项目周期** | 6-8周 |
| **投入规模** | 8-12人核心团队 |
| **启动日期** | Week 0 (周一) |
| **目标上线** | Week 6-8 (灰度→全量) |

### 项目目标 (KPI 指标)

以下目标以 **12 个月内预期增长** 为基础，基于用户粘性、参与度和商业化提升：

| 目标指标 | 当前值 | 目标值 | 增长幅度 | 验收标准 |
|---------|--------|--------|----------|---------|
| **月活用户粘性** | 100% | 170% | **+70%** | 人均月访问增加70% |
| **用户参与度** | 100% | 200% | **+100%** | 平均会话时长翻倍 |
| **内容提交量** | 100% | 400% | **+300%** | 用户提交工作流数翻倍 |
| **邮件列表增长** | 基线 | +500~1000% | **+500-1000%** | 新增订阅用户 5~10 倍 |
| **工作流下载量** | 基线 | +150% | **+150%** | 下载数增加 1.5 倍 |

### 商业 ROI 预期

- **投入**: ~6-8周工作周期，8-12人团队
- **收益预期**: 
  - 邮件列表商业化 (Mailchimp)
  - 工作流下载转化 (高参与用户)
  - 用户贡献内容价值 (UGC)
  - 预计 12 个月内收益回报率 **200%+** (基于保真数据)

### 成功指标

✅ **质量指标**
- 代码测试覆盖率 ≥ 80%
- Critical Bug = 0
- Performance 达标 (LCP < 2.5s, FCP < 1.8s)
- 灰度期用户满意度 ≥ 4.0/5.0

✅ **交付指标**
- P0 功能按时完成 (Week 4)
- P1 功能按时完成 (Week 6)
- 全量发布零事故

---

## 🗂️ 快速导航 - 所有相关文档

### 📋 规划文档 (Planning)

| 文档 | 路径 | 说明 | Owner |
|------|------|------|-------|
| 🎨 **设计规范** | [`plans/REDESIGN_SPECIFICATIONS.md`](REDESIGN_SPECIFICATIONS.md) | UI/UX设计标准、组件定义、设计令牌 | 设计团队 |
| 🏗️ **技术架构** | [`plans/TECHNICAL_ARCHITECTURE.md`](TECHNICAL_ARCHITECTURE.md) | 技术栈、API设计、数据库结构、集成方案 | Tech Lead |
| 📅 **里程碑计划** | [`plans/PROJECT_MILESTONES.md`](PROJECT_MILESTONES.md) | 阶段目标、关键时间点、交付物 | PM |
| 📄 **内容策略** | [`plans/CONTENT_STRATEGY.md`](CONTENT_STRATEGY.md) | 工作流描述模板、内容质量标准 | 内容团队 |
| 🧪 **用户测试** | [`plans/USER_TESTING_PLAN.md`](USER_TESTING_PLAN.md) | 测试场景、用户研究方法、反馈收集 | QA/设计 |
| 🔍 **对比分析** | [`plans/website-comparison.md`](website-comparison.md) | 竞品分析、功能对标 | 产品 |

### 🚀 执行文档 (Execution)

| 文档 | 路径 | 说明 | Owner |
|------|------|------|-------|
| 📍 **执行框架** | [`plans/EXECUTION_FRAMEWORK.md`](EXECUTION_FRAMEWORK.md) | 日常工作流程、决策机制、风险管理 | PM |
| 📊 **监控体系** | [`plans/MONITORING_DASHBOARD.md`](MONITORING_DASHBOARD.md) | KPI追踪、性能监控、灰度指标 | Tech Lead |
| 👥 **团队对齐** | [`plans/STAKEHOLDER_ALIGNMENT.md`](STAKEHOLDER_ALIGNMENT.md) | 角色职责、沟通计划、汇报机制 | PM |
| ✅ **实现清单** | [`plans/IMPLEMENTATION_CHECKLIST.md`](IMPLEMENTATION_CHECKLIST.md) | 功能实现检查点、验收标准 | Tech Lead |
| 🛠️ **代码清单** | [`plans/CODE_STRUCTURE.md`](CODE_STRUCTURE.md) | 代码结构、文件映射、数据流说明 | 开发团队 |

### 💻 代码资源 (Code Resources)

| 资源 | 路径 | 说明 |
|------|------|------|
| 📝 **类型定义** | [`src/lib/types/workflow.ts`](../src/lib/types/workflow.ts) | TypeScript 接口定义 (WorkflowDetailed, LogicalBlock, NodeDetail, 等) |
| 🔗 **API 框架** | [`src/pages/api/`](../src/pages/api/) | API 端点集合 (filter-counts, workflow-details, 等) |
| 🎨 **组件框架** | [`src/components/`](../src/components/) | Astro 组件库 (FilterSidebar, WorkflowViewer, 等) |
| 🗄️ **数据迁移** | [`scripts/supabase-migrations.sql`](../scripts/supabase-migrations.sql) | 数据库 DDL (workflow_details, newsletter_subscriptions, 等) |
| ⚙️ **环境配置** | [`env.example`](../env.example) | 环境变量模板 |

### 📚 支持文档 (References)

- [`API.md`](../API.md) - API 详细文档
- [`ARCHITECTURE.md`](../ARCHITECTURE.md) - 项目整体架构
- [`COMPONENTS.md`](../COMPONENTS.md) - 组件库说明
- [`TESTING.md`](../TESTING.md) - 测试框架和用例

---

## ✅ 关键决策与假设

### 已确定的关键决策

| 决策项 | 结论 | 依据 | 状态 |
|--------|------|------|------|
| **功能优先级** | P0: FilterSidebar + DetailView + Viewer<br/>P1: Newsletter + SubmitForm | 用户反馈、商业价值 | ✅ 确定 |
| **开发周期** | 8周 | 上述功能量估算 | ✅ 确定 |
| **技术栈** | Astro + TS + Tailwind + Supabase + Mailchimp | 性能、开发效率、成本 | ✅ 确定 |
| **邮件服务** | Mailchimp (免费到 500 订户) | 成本、集成便利性 | ✅ 确定 |
| **图片查看器** | react-medium-image-zoom | 轻量级、UX 好 | ✅ 确定 |
| **灰度策略** | 4 个阶段发布 (内部→20%→50%→100%) | 风险管理、用户反馈 | ✅ 确定 |
| **内容审核** | 编辑+自动检查 (字数、格式validation) | 质量控制 | ✅ 确定 |

### 重要假设

| 假设 | 重要性 | 验证方法 | 风险级别 |
|------|--------|----------|----------|
| **内容数据完整性** | P0 | 数据迁移前审查，60% 可用率满足启动 | 🟡 中 |
| **第三方服务可用性** | P0 | 周期检查服务状态、有备用方案 | 🟢 低 |
| **灰度期反馈充分** | P1 | 设定最少反馈量阈值 (N > 100) | 🟡 中 |
| **团队全职投入** | P0 | 项目启动时确认排期 | 🟡 中 |
| **用户接受度** | P1 | A/B 测试、NPS 问卷 | 🟡 中 |

---

## 👥 参与角色与职责矩阵

### 核心团队成员

| 角色 | 姓名 | 部门 | 主要职责 | 周期投入 | 报告线 |
|------|------|------|---------|---------|--------|
| **项目经理 (PM)** | [ ] | [ ] | 协调、进度追踪、风险管理、客户/Stakeholder 沟通 | **100%** | CTO |
| **产品/UX 设计** | [ ] | [ ] | UI/UX 设计、用户研究、设计评审、反馈收集 | **80%** | 产品VP |
| **前端工程师 1** | [ ] | [ ] | FilterSidebar、详情页 UI、性能优化 | **100%** | Tech Lead |
| **前端工程师 2** | [ ] | [ ] | WorkflowViewer、组件集成、响应式适配 | **100%** | Tech Lead |
| **后端工程师** | [ ] | [ ] | API 开发、数据库、第三方集成 (Mailchimp等) | **100%** | Tech Lead |
| **QA/测试工程师** | [ ] | [ ] | 测试计划、bug 追踪、灰度验证、E2E 测试 | **100%** | Tech Lead |
| **内容编辑** | [ ] | [ ] | 工作流描述撰写、质量审核、模板维护 | **50%** | 内容VP |
| **技术负责人 (Tech Lead)** | [ ] | [ ] | 架构评审、技术决策、技术顾问、CR | **30%** | CTO |
| **DevOps/基础设施** | [ ] | [ ] | 灰度环境部署、监控、性能优化 | **40%** | Tech Lead |

**[需要团队填写实际名字和部门信息]**

### 关键职责描述

#### PM 职责
- 📅 制定周期计划和里程碑检查点
- 🎯 KPI 追踪和目标对齐
- 🚨 风险识别和问题升级
- 📢 Stakeholder 沟通和定期汇报
- 🔄 敏捷仪式组织 (Daily Standup, Retro, Planning)

#### 设计职责
- 🎨 将规范转换为高保真原型 (Figma)
- 👥 用户研究和测试
- 💡 设计评审和迭代
- 📊 收集用户反馈并优化

#### 开发职责 (前端)
- 💻 按优先级实现组件 (P0→P1)
- ✅ 代码质量把控 (测试, Lint)
- 🔍 Code Review 和知识分享
- ⚡ 性能优化和灰度监控

#### 开发职责 (后端)
- 🔗 API 实现和文档
- 🗄️ 数据库设计和迁移
- 🔐 数据一致性和安全
- 🚀 第三方服务集成

#### QA 职责
- 📋 测试计划制定
- 🧪 功能测试、性能测试、兼容性测试
- 🐛 Bug 追踪和优先级管理
- 🌐 灰度期用户反馈收集

---

## 📊 关键里程碑总结

### 完整时间线

```
Week 0 (启动周)
├─ M0.1: 启动会议 (周一)
│  └─ 全体签核项目文档, 确认职责分工
│
├─ M0.2: 账户/工具准备完成 (周二-周三)
│  └─ GitHub, Figma, 数据库等工具可用
│
└─ M0.3: 开发环境初始化 (周五)
   └─ Local dev 环境可用, 依赖安装完成

Week 1 (需求评审)
├─ M1.1: 需求评审通过 (周五)
│  └─ PM: 所有docs已读+签核, 无阻碍点
│  └─ 验收: 所有技术问题已解答, Stakeholder OK
│
└─ M1.2: 技术方案评审 (周五下午)
   └─ Tech Lead: Architecture review, 数据库设计OK
   └─ 验收: 无技术风险, 预估工作量已确认

Week 2 (设计评审)
├─ M2.1: 初版原型完成 (周二)
│  └─ 设计: 低保真快速原型, 所有主要页面已覆盖
│  └─ 验收: 内部评审反馈 < 5 个
│
├─ M2.2: 设计评审通过 (周四)
│  └─ 设计: 应用反馈, 高保真设计已完成
│  └─ 验收: 技术评审通过, 无设计blocker
│
└─ M2.3: 组件库建立 (周五)
   └─ 前端: Figma components 可用, Astro 框架已建立

Week 3-4 (P0 开发 Phase 1)
├─ M3.1: FilterSidebar 完成 (周中)
│  └─ 前端: 功能完成, 自测通过
│  └─ 后端: filter-counts API 完成
│  └─ 验收: 关键路径测试通过, 无critical bug
│
├─ M3.2: WorkflowDetailedView 完成 (周末)
│  └─ 前端: UI完成, 内容展示逻辑正确
│  └─ 后端: workflow-details API 完成
│  └─ 内容: 示例数据已迁移
│  └─ 验收: E2E 功能测试通过
│
└─ M3.3: WorkflowViewer 完成 (Week 4 中/末)
   └─ 前端: 查看器集成, 响应式OK
   └─ 验收: 性能测试通过 (LCP < 2.5s)

Week 4-5 (P0 测试与优化)
├─ M4.1: P0 QA 开始 (周一)
│  └─ QA: 全量测试覆盖, 性能基准建立
│
├─ M4.2: P0 功能 QA 通过 (周四)
│  └─ QA: 0 critical bug, 功能覆盖 > 95%
│  └─ 验收: 性能基准达标, 用户体验OK
│
└─ M4.3: P1 开发启动 (周五)
   └─ 后端: API 完成, 集成测试进行中

Week 5-6 (P1 开发与集成)
├─ M5.1: Newsletter + SubmitForm 开发完成 (周中/末)
│  └─ 前端: 组件完成
│  └─ 后端: 邮件集成、表单处理、审核流程
│  └─ 内容: 审核模板就位
│  └─ 验收: 集成测试通过
│
└─ M5.2: 全功能集成完成 (周末)
   └─ 前端: 所有页面无冲突渲染
   └─ 后端: 所有API互调通过
   └─ 数据: 迁移完成 >80%
   └─ 验收: 全链路 Smoke Test 通过

Week 6 (灰度发布 Phase 1 - 内部)
├─ M6.1: 灰度准备完成 (周一)
│  └─ DevOps: 灰度基础设施就位, 监控配置完成
│  └─ QA: 灰度测试计划准备就位
│
├─ M6.2: 内部灰度发布 (周二)
│  └─ DevOps + PM: 发布到 staging/admin only
│  └─ 内部团队: 7 天内部验证 + feedback 收集
│  └─ 验收: 0 critical issues, 内部反馈 OK
│
└─ M6.3: 灰度发布 Phase 2 (周五-周末)
   └─ DevOps: 发布给 20% 真实用户
   └─ 监控: 实时 KPI 监控 + 用户反馈
   └─ 验收: 无异常告警, 性能基准稳定

Week 7 (灰度验证与扩大)
├─ M7.1: 灰度数据评估 (周一)
│  └─ PM + 分析: 收集 1 周数据, 评估 KPI
│  └─ 验收: KPI 向好, 无major insight 需求调整
│
├─ M7.2: 灰度发布 Phase 3 (周中)
│  └─ DevOps: 发布给 50% 用户
│  └─ 监控: 继续实时监控
│
└─ M7.3: bug fix & 优化 (周末)
   └─ 开发: 基于用户反馈快速修复 bugs
   └─ 验收: Critical issue backlog 已清空

Week 8 (全量发布与回顾)
├─ M8.1: 全量发布准备 (周一-周二)
│  └─ DevOps: 最终检查 + GO/NO-GO decision
│  └─ 沟通: 用户通知、客户沟通就位
│
├─ M8.2: 全量发布 (周三)
│  └─ DevOps: 100% 用户发布
│  └─ 监控: 事故响应团队待命
│  └─ 验收: 发布无事故, 性能稳定
│
└─ M8.3: 项目回顾 (周五)
   └─ PM: 组织全体回顾会
   └─ 验收: KPI 评估, lessons learned 记录
```

### 里程碑验收标准

| 里程碑 | Owner | 验收条件 | Go/No-Go |
|--------|-------|---------|----------|
| M0 启动会议 | PM | 全体签核、职责确认 | GO 或 延期 |
| M1 需求评审 | PM | Docs 无controversy、技术问题解答 | GO 或 调整 |
| M2 设计评审 | 设计 | 原型完成、无blocked issues | GO 或 重做 |
| M3 P0 开发 | Tech Lead | Code CR通过、自测100% | GO 或 加班 |
| M4 P0 QA | QA | 0 critical、覆盖>95% | GO 或 缺陷贬低 |
| M5 P1 开发 | Tech Lead | 集成测试>80% | GO 或 缺陷推迟 |
| M6 灰度Phase1 | PM/DevOps | 内部反馈OK、无异常 | GO 或 回滚 |
| M7 灰度评估 | PM | KPI向好、>80%目标达成 | GO 或 增加周期 |
| M8 全量发布 | DevOps | 发布无事故、性能稳定 | GO 或 延期 |

---

## 🎬 项目启动日程 (Week 0 活动表)

### Monday (周一) - 启动会议

```
09:00 - 10:00  项目启动大会
                - PM 讲解项目目标、时间表、关键决策
                - 技术团队讲解架构和开发计划
                - 全体确认理解, 签核此文档

10:00 - 11:00  角色分工确认会
                - 确认每位成员的职责 (参考矩阵表)
                - 设置报告线和 escalation path

14:00 - 15:00  工具准备说明会
                - GitHub Projects board 演示
                - Figma workspace 权限检查
                - Notion workspace 演示
                - Slack/钉钉 channel 确认
```

### Tuesday-Thursday (周二-四) - 工具准备

```
全天     GitHub 权限配置、Figma 项目建立、数据库账户开通等
        （参考 LAUNCH_CHECKLIST.md 2.1-2.5 的详细操作）
```

### Friday (周五) - 开发环境启动

```
09:00 - 10:00  开发环境设置说明
                - Clone repo, npm install
                - .env 配置
                - Local dev server 启动

10:00 - 12:00  技术栈验证
                - Astro + TypeScript 环境检查
                - Supabase 连接测试
                - API endpoint 基础结构完成

14:00 - 15:00  知识转移 (Tech Onboarding)
                - 架构讲解 + 代码审查
                - 数据库结构讲解
                - 组件框架讲解

15:00 - 16:00  答疑与计划确认
                - Q&A session
                - 下周第一次 Planning Meeting 时间确认
```

---

## 🚨 风险清单与应对

| # | 风险 | 概率 | 影响 | 应对策略 | Owner |
|----|------|------|------|---------|-------|
| R1 | 内容迁移不及时 (60% 可用率不达) | 🟡 中 | 🔴 高 | 启动 AI 辅助内容生成、增加编辑资源 | 内容VP |
| R2 | 第三方服务 (Mailchimp) 故障 | 🟢 低 | 🟡 中 | 有备用邮件服务方案、测试环境提前验证 | Tech Lead |
| R3 | 前端性能未达 LCP 要求 | 🟡 中 | 🔴 高 | Week 4 开始性能测试、优化计划预留 | 前端Lead |
| R4 | 灰度期用户反馈不足 | 🟡 中 | 🟡 中 | 设定最少反馈量 N>100、主动收集反馈 | PM |
| R5 | 团队成员被打断 | 🟡 中 | 🟡 中 | 争取 100% 投入承诺、Weekly check-in | PM |
| R6 | 设计评审循环过长 | 🟡 中 | 🟡 中 | 限制 iteration 轮数 (max 2 rounds) | 设计VP |

---

## 📞 关键联系方式与 Escalation

```
🚨 紧急问题 (Critical Issues)
  → 发送 #urgent-support 到 Slack/钉钉
  → 联系: PM 或 Tech Lead (值班表见下)
  → 响应时间目标: 15 分钟

📊 日常协作问题
  → Slack/钉钉 #n8nworkflow-redesign 频道
  → 周一 14:00 Weekly Planning
  → 周三 14:00 Tech Sync
  → 周五 17:30 Retro

👤 重要决策需求
  → 直接联系 PM
  → 涉及业务决策: 联系产品 VP
  → 涉及技术决策: 联系 Tech Lead + CTO

📈 性能/监控问题
  → Slack/钉钉通知: DevOps @ [name]
  → 基础设施文档: [链接]
```

---

## ✨ 成功指标总结 (Week 8 验收标准)

### 功能性验收

- ✅ P0 功能 100% 完成 (FilterSidebar, DetailView, Viewer)
- ✅ P1 功能 ≥ 90% 完成 (Newsletter, SubmitForm)
- ✅ 全量发布无关键故障

### 质量验收

- ✅ Unit Test 覆盖率 ≥ 80%
- ✅ E2E Test 通过率 100%
- ✅ 0 个 Critical Bug
- ✅ 性能基准: LCP < 2.5s, FCP < 1.8s

### 商业验收

- ✅ 月活粘性 +70%
- ✅ 用户参与 +100% (会话时长)
- ✅ 邮件订阅增长 +500%+
- ✅ 工作流下载 +150%

### 团队验收

- ✅ 团队满意度 ≥ 4.0/5.0
- ✅ 0 个重大团队冲突
- ✅ 知识转移完成率 100%
- ✅ Lessons learned 已记录

---

## 📝 下一步行动

### 立即行动 (Week 0 前)

1. **打印此文档** 并发送给全团队
2. **收集团队成员信息** 填入上述"参与角色"表格
3. **确认各工具权限** (GitHub, Figma, Notion, 数据库)
4. **准备会议室** 并发送日程邀请
5. **检查 6-8 周内是否有假期冲突**

### Week 0 活动

1. **周一上午**: 启动大会 (全体参加, 签核此文档)
2. **周二-四**: 工具配置完成 (参考 LAUNCH_CHECKLIST.md)
3. **周五**: 开发环境启动 + 技术 Onboarding

### Week 1-2 工作

1. 需求评审通过
2. 设计原型+评审完成
3. 开发正式启动

---

## 📚 附录：文档版本与变更历史

| 版本 | 日期 | 变更内容 | Author |
|------|------|---------|--------|
| v1.0 | 2026-01-10 | 初始版本，Project Launch | PM |

---

**本文档是项目执行的官方指南。任何重大变更需要通过 Change Control 流程并获得 Steering Committee 批准。**

> 最后更新: 2026-01-10  
> 下次审查: Week 2  
> 维护者: PM Team
