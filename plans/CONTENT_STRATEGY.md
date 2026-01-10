# 网站改版内容策略

**版本**: 1.0  
**最后更新**: 2026-01-10  
**维护者**: 内容与运营团队

---

## 目录

1. [工作流详情页内容结构](#工作流详情页内容结构)
2. [Newsletter 内容规划](#newsletter-内容规划)
3. [社区内容贡献流程](#社区内容贡献流程)
4. [现有内容清理与丰富](#现有内容清理与丰富)

---

## 工作流详情页内容结构

### 1.1 Disclaimer (免责声明) 模板

#### 何时显示

- 非官方工作流 (社区贡献)
- 需要付费 n8n 功能的工作流
- 涉及第三方 API 集成的工作流
- 处理敏感数据的工作流

#### 模板内容

```
⚠️ DISCLAIMER (法律免责声明)

This workflow is a community contribution and is NOT officially 
supported by n8n. Use it at your own risk.

Key Points:
├─ Requires: n8n Pro or Cloud plan (specifiy version)
├─ Third-party API keys needed: [list APIs]
├─ Data handling: Custom implementation (validate compliance)
├─ Support: Community support only
└─ Testing: Test thoroughly before production use

By using this workflow, you agree to:
├─ Taking full responsibility for any data loss or issues
├─ Not claiming liability from n8n or workflow author
└─ Testing in a non-production environment first

Questions? Contact the workflow author or join n8n Community.
```

#### 具体示例

```
⚠️ DISCLAIMER

This workflow requires n8n v1.0+ or Cloud plan.

This workflow handles sensitive customer data including:
├─ Email addresses
├─ Phone numbers
├─ Business information

IMPORTANT:
├─ This is not an official n8n template
├─ You are responsible for GDPR/privacy compliance
├─ Test in staging before production
├─ Set up proper error handling for API timeouts
└─ Monitor cost impact on your n8n plan

The workflow author assumes no liability for data loss.
Use at your own risk.
```

#### 设计规范

- 背景色: 红色 (#FEE2E2)
- 左边框: 3px 红色
- 字体: 14px, 行高 1.6
- 最大宽度: 不受限
- 显示位置: 详情页顶部，可展开/收起
- 默认状态: 展开

### 1.2 Overview (概览) 部分标准模板

#### 结构

```
## 1. Workflow Overview

### 📌 Summary
[核心功能描述，1-2句话]

### 🎯 What it does
[详细说明工作流的功能，3-5句话]

### ✨ Key Features
- Feature 1: [描述]
- Feature 2: [描述]
- Feature 3: [描述]

### 💡 Use Cases
- Scenario 1: [使用场景]
- Scenario 2: [使用场景]
- Scenario 3: [使用场景]

### 📋 Prerequisites
- Requirement 1: [需要条件]
- Requirement 2: [需要条件]
```

#### 具体示例

```
## 1. Workflow Overview

### 📌 Summary
自动从 Gmail 提取邮件，使用 OpenAI 总结，存储到 Google Sheets。

### 🎯 What it does
该工作流监听 Gmail 中收到的新邮件。当有匹配特定标签的邮件时，
工作流会自动：
1. 提取邮件主题和内容
2. 调用 OpenAI API 生成摘要
3. 将摘要保存到 Google Sheets
4. 标记邮件为已处理
这样可以帮助您及时了解重要邮件内容，无需逐一查看原始邮件。

### ✨ Key Features
- 自动邮件监听和触发
- 基于 OpenAI 的智能总结
- 自动分类和标签管理
- Google Sheets 数据集中存储
- 错误处理和重试机制

### 💡 Use Cases
- 客户支持: 自动分类和总结客户邮件，加快响应速度
- 市场调研: 定期邮件内容汇总分析
- 项目管理: 自动提取邮件中的任务和截止日期
- 销售管理: 追踪客户邮件并自动录入 CRM

### 📋 Prerequisites
- 一个 Gmail 账户（带有 n8n 连接器支持）
- OpenAI API 密钥（支持 GPT-3.5 或更高版本）
- 一个 Google Sheets 文档和相应的权限
- n8n 账户和对应权限（Cloud 计划或自托管）
```

#### 字数指标

- Summary: 1-2句话 (30-50词)
- What it does: 3-5句话 (150-250词)
- Key Features: 3-5个特性
- Use Cases: 2-4个场景
- Prerequisites: 2-5项要求

### 1.3 Logical Blocks 编写指南

#### 定义

Logical Block 是工作流的逻辑模块，用于将复杂的工作流流程分解为易于理解的步骤。

#### 结构

```
## Logical Blocks

### 1.1 [Block Name]
**类型**: [trigger/condition/action]
**功能**: [简洁描述]
**涉及节点**: [列出相关节点]

Description:
[详细说明这个逻辑块如何工作，包括：
 - 输入数据
 - 处理过程
 - 输出结果]

### 1.2 [Block Name]
...
```

#### 具体示例

```
## Logical Blocks

### 1.1 Email Trigger & Extraction
**类型**: Trigger + Data Extraction
**功能**: 监听新邮件并提取关键信息
**涉及节点**: Gmail Trigger, Format Email Data

Description:
当新邮件到达时触发工作流。工作流会从邮件中提取以下信息：
- 发件人信息（名称、邮箱地址）
- 邮件主题和发送时间
- 邮件正文和附件（如有）

然后将这些信息格式化为结构化数据，传递给下一个逻辑块。

### 1.2 Content Analysis
**类型**: External API Call + Data Processing
**功能**: 使用 OpenAI 分析和总结邮件内容
**涉及节点**: OpenAI Request, Format Summary

Description:
将提取的邮件正文发送给 OpenAI API 进行分析：
- 生成内容摘要 (500字内)
- 提取关键词和主题
- 分类邮件类型（紧急/常规/推广）
- 建议响应优先级

处理结果返回给工作流用于后续决策。

### 1.3 Storage & Notification
**类型**: Data Storage + Notification
**功能**: 保存结果并通知用户
**涉及节点**: Google Sheets Append, Slack Notify

Description:
将分析结果存储到 Google Sheets 以便后续查看和统计。
同时根据邮件优先级发送 Slack 通知给相关人员。
```

#### 最佳实践

- 3-7个逻辑块为佳 (不超过10个)
- 每个块代表一个明确的功能单元
- 按执行顺序编号和排列
- 说清楚块之间的数据流向

### 1.4 Node Details 编写指南

#### 结构

每个关键节点需要详细说明：

```
### Node: [Node Name]

**Type & Role**: [节点类型] - [在工作流中的作用]

**Configuration**:
[详细说明节点的配置参数]

**Input Data**:
[说明节点期望的输入数据格式]

**Output Data**:
[说明节点产出的数据格式]

**Connections**:
[说明这个节点连接到哪些其他节点]

**Edge Cases & Failure Handling**:
[列出可能出现的问题及解决方案]

**Important Notes**:
[任何需要特别注意的事项]

**Example Configuration**:
[粘贴一个实际配置示例，if applicable]
```

#### 具体示例

```
### Node: Gmail Trigger

**Type & Role**: Trigger - 监听 Gmail 中的新邮件

**Configuration**:
Auth Method: OAuth 2.0
└─ Connect your Gmail account via n8n

Gmail Options:
├─ Watch: New E-mail Received
├─ Predefined filters: [specified label] emails only
├─ Simple polling (every 30 sec):
│  └─ Or use Gmail Push notifications (更高效)
└─ Include headers: Enabled
   └─ Extract sender info and timestamps

**Input Data**:
No input needed (this is a trigger node)

**Output Data**:
```json
{
  "id": "email-id",
  "threadId": "thread-id",
  "from": "sender@example.com",
  "to": "your@email.com",
  "subject": "Email Subject",
  "snippet": "Preview text...",
  "internalDate": "1643567890123",
  "payload": { /* detailed message structure */ }
}
```

**Connections**:
└─ Connects to: Format Email Data node

**Edge Cases & Failure Handling**:
1. Gmail API quota exceeded
   └─ Solution: Schedule during off-peak hours
   
2. Network timeout
   └─ Solution: n8n会 automatically retry (exponential backoff)
   
3. Email marked as spam before node processes
   └─ Solution: Use filters to exclude spam folders

4. Very large attachments (>25MB)
   └─ Solution: Configure to skip large attachments

**Important Notes**:
- First run may trigger on old emails (up to 24h old)
  Use "Manually trigger" option to verify configuration
- Consider n8n resource impact if checking every 30 seconds
- For production: Use Gmail Push notifications instead

**Example Configuration**:
Auth: Connect Gmail account (instructions provided)
Filter: label_Inbox + from:important@clients.com
Polling: 30 seconds
Headers: Included
```

### 1.5 内容质量检查清单

在发布工作流详情前，使用此清单验证：

- [ ] Overview 部分 (必需)
  - [ ] Summary 清晰简洁，30-50词
  - [ ] What it does 详细说明，150-250词
  - [ ] Key Features 至少3个
  - [ ] Use Cases 至少2个
  - [ ] Prerequisites 列明所有需求

- [ ] Logical Blocks (必需)
  - [ ] 3-7个块，覆盖完整工作流
  - [ ] 按执行顺序排列
  - [ ] 每个块有清晰的类型标签
  - [ ] 数据流向说明清楚

- [ ] Node Details (推荐)
  - [ ] 所有关键节点有详细说明
  - [ ] Configuration 参数完整
  - [ ] 有真实示例配置
  - [ ] Edge cases 列出常见问题

- [ ] Disclaimer (根据需要)
  - [ ] 如果需要免责声明，已添加并醒目

- [ ] 格式和排版
  - [ ] 使用 Markdown 格式规范
  - [ ] 标题层级合理 (H2-H4)
  - [ ] 代码块用 ```json 等标记
  - [ ] 列表和表格清晰

- [ ] 语言
  - [ ] 使用简洁、专业的语言
  - [ ] 避免行话或缩写 (若非必要)
  - [ ] 检查拼写和语法

---

## Newsletter 内容规划

### 2.1 发送频率建议

#### 初期方案 (前3个月)

**Monday & Thursday (每周2次)**
- 周一: 每周精选工作流 + 最新技术文章
- 周四: 用户故事 + 社区亮点
- 发送时间: 上午 10:00 (用户所在时区)
- 目标: 建立用户习惯，测试最佳发送时间

#### 稳定方案 (成熟阶段)

**Every Week (每周1次)**
- 发送时间: 周二或周四 11:00 - 14:00
- 内容: 精选工作流 + 教程 + 社区动态
- 预期打开率: 25%-35% (行业平均)
- 预期点击率: 5%-8%

#### 可选计划

**Daily Digest (可选，仅限 Pro 订户)**
- 发送时间: 每日 9:00
- 内容: 当日热门工作流 + 快速技巧

### 2.2 内容组成标准

每封简报应包含以下部分：

```
┌─ Header Section (固定)
│  ├─ 欢迎语/主题行
│  ├─ 本期重点 (bullet points، 3条)
│  └─ [Banner Image]
│
├─ Featured Workflows (主要内容)
│  ├─ 工作流 1: 标题 + 描述 (100词) + Link
│  ├─ 工作流 2: 标题 + 描述 (100词) + Link
│  └─ 工作流 3: 标题 + 描述 (100词) + Link
│
├─ Section: How-To / Tips
│  ├─ 教程标题
│  ├─ 简短说明 (100-150词)
│  └─ 阅读新闻按钮
│
├─ Section: Community Highlights
│  ├─ 社区贡献者故事 / 案例
│  ├─ 用户创建的工作流精选
│  └─ 社区活动公告
│
├─ Section: Trending This Week
│  ├─ 本周最受欢迎工作流 (Top 3)
│  ├─ 下载/查看统计
│  └─ 排行榜链接
│
└─ Footer (固定)
   ├─ 社交媒体链接
   ├─ 关于 n8n workflows
   ├─ 反馈 & 建议
   └─ 取消订阅链接
```

### 2.3 邮件模板设计

#### 模板要点

- **宽度**: 600px (适配移动端)
- **字体**: Sans-serif (Arial, Helvetica)
- **颜色**:
  - 主色: 品牌蓝色 (#3B82F6)
  - 文字: 深灰色 (#374151)
  - 链接: 蓝色 (#2563EB)
- **CTA 按钮**: Primary 蓝色，最小 48px 高
- **响应式**: 在手机上自动调整布局

#### 内容字数

| 部分 | 推荐字数 | 说明 |
|-----|---------|------|
| Subject Line | 35-50字 | 提高打开率 |
| Preheader Text | 40-50字 | 发件箱预览 |
| Featured Workflow | 100-150字 | 简洁吸引 |
| Internal Article | 150-200字 | 足够详细 |
| CTA 文本 | 5-10字 | 清晰简洁 |
| 整体推荐 | 600-800字 | 1-2分钟阅读 |

### 2.4 订阅者分段策略 (进阶)

#### 分段维度

1. **按兴趣分类**
   - AI & Automation
   - Data Integration
   - Business Workflows
   - Developer Tools

2. **按用户行为**
   - 活跃用户 (最近30天有活动)
   - 新用户 (注册< 90天)
   - 非活跃用户 (> 90天无活动)

3. **按订阅频率**
   - 每日摘要 (高频用户)
   - 每周简报 (普通用户)
   - 每月综述 (低频用户)

#### 个性化内容

```
根据订阅者兴趣推荐工作流：

Dear [USER_NAME],

This week we found [X] new [CATEGORY] workflows 
that match your interests...
```

---

## 社区内容贡献流程

### 3.1 提交表单字段设计

```
┌─ Workflow Information
│  ├─ Workflow Title* (文本输入)
│  │  └─ 最小长度: 5字, 最大: 100字
│  │
│  ├─ Description* (文本框)
│  │  └─ 最小: 50字, 最大: 2000字
│  │  └─ 预生成摘要: 使用前100字
│  │
│  ├─ Category* (单选下拉)
│  │  └─ 20+个预定义分类选项
│  │
│  ├─ Complexity Level* (单选)
│  │  ├─ Beginner
│  │  ├─ Intermediate
│  │  └─ Advanced
│  │
│  ├─ Price* (单选)
│  │  ├─ Free
│  │  └─ Paid (需要付费n8n计划)
│  │
│  ├─ Tags (多选输入)
│  │  └─ 最多5个标签，自动完成
│  │
│  └─ Workflow JSON* (文本框或文件上传)
│     └─ 粘贴完整的 workflow JSON
│
├─ Documentation
│  ├─ Overview* (Markdown 文本框)
│  │  └─ 预填充模板
│  │
│  ├─ Logical Blocks (可选)
│  │  └─ Markdown 编辑器
│  │
│  └─ Node Details (可选)
│     └─ Markdown 编辑器
│
├─ Author Information
│  ├─ Your Name (文本输入)
│  ├─ Email Address* (邮箱输入)
│  │  └─ 用于审核通知
│  │
│  └─ Website/Portfolio (URL 输入，可选)
│     └─ 作者个人链接
│
└─ Legal & Consent
   ├─ ☐ I've tested this workflow* (复选框)
   ├─ ☐ This workflow is my own creation* (复选框)
   ├─ ☐ I agree to the terms of service* (复选框)
   └─ ☐ Allow my name to be published* (复选框)
```

**字段说明**:
- `*` 表示必需字段
- 每个字段应有 help text 说明
- 依赖验证 (如选择 Paid，需提示选择清单)

### 3.2 内容审核标准

#### 合规检查

- [ ] 工作流有效 (JSON 可被解析)
- [ ] 没有恶意代码或病毒
- [ ] 没有个人隐私信息 (密钥、密码等)
- [ ] 遵守许可证要求

#### 质量检查

- [ ] 标题清晰、准确
- [ ] 描述至少50字
- [ ] 提供了至少基本的文档
- [ ] 没有明显的语法错误

#### 功能检查

- [ ] 工作流可以成功导入 n8n
- [ ] 所有节点配置完整
- [ ] 完整性评分 >= 60%
- [ ] 没有断开的连接或缺失节点

#### 最佳实践检查

- [ ] 工作流有有意义的描述
- [ ] 提供了清晰的前置条件说明
- [ ] 包含了错误处理逻辑
- [ ] 使用了合理的命名约定

### 3.3 社区贡献激励机制

#### Tier 1: Bronze Contributor (入门)
- **条件**: 提交第1个工作流
- **奖励**:
  - 在工作流页面显示 "Contributed by [Name]"
  - 获得 Bronze 徽章
  - 在 "Top Contributors" Page 展示

#### Tier 2: Silver Contributor (活跃)
- **条件**: 提交5个高质量工作流 (评分> 4.0)
- **奖励**:
  - Silver 徽章 + 个人作者页
  - 在每周 Newsletter 中推荐
  - 参与特殊采访机会

#### Tier 3: Gold Contributor (精英)
- **条件**: 提交20+个工作流，总下载>10K
- **奖励**:
  - Gold 徽章 + 官方认可
  - n8n 官方合作机会
  - 参与新功能测试
  - 可能的赞助机会

#### 排行榜

```
Top Contributors This Month
1. 👑 Alice (5 workflows, 2,345 downloads)
2. 🥈 Bob (3 workflows, 1,204 downloads)
3. 🥉 Carol (2 workflows, 892 downloads)
```

---

## 现有内容清理与丰富

### 4.1 优先级最高的100个工作流升级计划

#### 优先级排序逻辑

```
优先级 = (Monthly Views * 0.3) + (All-time Downloads * 0.2) + 
         (Reviews Count * 0.3) + (Recency Score * 0.2)

Priority Groups:
Tier 1 (Top 10): 立即升级
Tier 2 (11-50): 本月升级
Tier 3 (51-100): 本季度升级
```

#### 升级检查清单

对于每个优先级工作流：

- [ ] Disclaimer (若需要)
- [ ] Overview 完整
  - [ ] Summary 30-50词
  - [ ] What it does 150-250词
  - [ ] Key Features 列表
  - [ ] Use Cases 列表
  - [ ] Prerequisites 完整

- [ ] Logical Blocks
  - [ ] 3-7个块
  - [ ] 数据流清晰
  - [ ] 涉及节点列明

- [ ] Node Details (关键节点)
  - [ ] 5-10个关键节点
  - [ ] 配置说明完整
  - [ ] 边界情况处理

#### 月度升级计划

```
Week 1-2: Select top 10 workflows
Week 2-3: Write detailed documentation
Week 3-4: Review & publish
Week 4-5: Collect feedback & iterate
```

### 4.2 缺失内容补充方案

#### 识别缺失内容

查询条件:
- Workflows 没有 `workflow_details` 记录
- 描述长度 < 50字
- 没有分类标签
- 没有复杂度标签
- 发布日期 > 6 个月，从未更新

#### 批量内容生成

```typescript
// 使用 AI 辅助生成初始内容 (然后人工审查)
async function generateMissingContent(workflow) {
  // 使用 OpenAI 的 GPT-4
  const aiGenerated = await openai.createCompletion({
    prompt: `Generate a professional overview for this n8n workflow:
             Title: ${workflow.title}
             Current Description: ${workflow.description}
             
             Return format:
             ### What it does
             [detailed explanation]
             
             ### Key Features
             - Feature 1
             - Feature 2`
  });
  
  // 返回供人工审查
  return aiGenerated;
}
```

#### 原创内容补充

对于 30+ 星标工作流仍缺乏文档的情况：

- 联系工作流作者，邀请更新文档
- 若作者无响应，内容团队补充基初稿
- 发布前进行社区审查

### 4.3 内容迁移与验证策略

#### 数据迁移流程

```
1. 备份现有数据
   └─ 导出所有工作流到 JSON 文件

2. 创建新数据表
   └─ workflow_details 表创建完成

3. 数据验证
   ├─ 检查 JSON 结构完整性
   ├─ 验证所有外键引用
   └─ 检查数据类型正确性

4. 迁移脚本运行
   └─ 使用 Supabase 迁移脚本
      INSERT INTO workflow_details (workflow_id, overview, ...)
      SELECT id, ai_overview, ... FROM workflows WHERE ...

5. 验证迁移结果
   ├─ 对比迁移前后数据量
   ├─ 随机抽样检查数据准确性
   └─ 检查是否有 NULL 值

6. 索引重建
   └─ 重建所有数据库索引用于性能优化
```

#### 迁移前测试清单

- [ ] 测试环境完整迁移成功
- [ ] 所有查询性能正常
- [ ] 没有数据丢失或损坏
- [ ] 备份文件验证完整
- [ ] 回滚计划已准备好

#### 发布前验证

- [ ] 详情页渲染正确
- [ ] 所有链接存在且可用
- [ ] 图片加载正确
- [ ] 移动端显示正常
- [ ] SEO 元数据完整

---

## 最佳实践与维护

### 定期审查周期

- **周**: 新提交工作流审核
- **月**: 内容质量分析，改进机制调整
- **季**: 全面内容审计，缺失内容补充
- **年**: 战略调整，面向新用户的基础教程更新

### 内容团队工作流

```
编辑内容
  ↓
SEO 审查 (关键词、元数据)
  ↓
技术审查 (工作流可用性)
  ↓
语言审查 (拼写、清晰度)
  ↓
发布前测试 (渲染、链接)
  ↓
发布
  ↓
监控反馈 (用户评分、评论)
  ↓
按需迭代改进
```

---

**文档版本**: 1.0  
**最后修改**: 2026-01-10  
**维护者**: 内容与运营团队
