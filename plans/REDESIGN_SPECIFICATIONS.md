# 网站改版设计规范

**版本**: 1.0  
**最后更新**: 2026-01-10  
**维护者**: 设计与产品团队  

---

## 目录

1. [页面布局设计](#页面布局设计)
2. [组件设计规范](#组件设计规范)
3. [设计令牌](#设计令牌)
4. [交互设计](#交互设计)
5. [响应式设计标准](#响应式设计标准)

---

## 页面布局设计

### 1.1 首页改版布局

#### 修改前结构 (当前)
```
┌─ Header (导航)
├─ Hero Section (标题 + CTA)
├─ 统计数据网格 (4列)
┤  ├─ Total Workflows
│  ├─ Total Authors
│  ├─ Total Categories
│  └─ Total Downloads
├─ 工作流网格
├─ 分页控件
└─ Footer
```

#### 修改后结构 (改版)
```
┌─ Header (导航)
├─ Hero Section (增加Newsletter订阅 + Buy me a coffee)
├─ 统计数据网格 (保留现有)
├─ Share Your Workflow 卡片 (新增)
├─ 工作流网格区 (含左侧筛选)
│  ├─ 左侧: FilterSidebar (宽度: 20-25%)
│  │  ├─ Time Period 筛选
│  │  ├─ Price 筛选
│  │  ├─ Complexity 筛选
│  │  ├─ Sort by 选项
│  │  └─ Categories 列表
│  └─ 右侧: 工作流卡片网格 (宽度: 75-80%)
│     ├─ 响应式布局 (3列 desktop, 2列 tablet, 1列 mobile)
│     └─ 无限滚动或分页
├─ 广告/赞助商位 (可选)
└─ Footer
```

#### 布局尺寸规范

| 设备类型 | 宽度范围 | 布局特性 |
|---------|--------|--------|
| Desktop | 1024px+ | FilterSidebar固定左侧 + 3列网格 |
| Tablet | 768px-1023px | FilterSidebar抽屉式 + 2列网格 |
| Mobile | < 768px | FilterSidebar底部Sheet + 1列网格 |

**断点配置 (Tailwind)：**
- `lg`: 1024px (FilterSidebar展开)
- `md`: 768px (FilterSidebar折叠)
- `sm`: 640px (单列布局)

---

### 1.2 详情页结构化内容布局

#### 页面分区

```
┌─ Breadcrumb Navigation
├─ 工作流标题 & 基本信息条 (固定高度: 60px)
│  ├─ 工作流名称 (H1)
│  ├─ Free/Paid 标签
│  ├─ Complexity 徽章
│  └─ 分享按钮
├─ 主内容区 (2列布局)
│  ├─ 左列 (60%)
│  │  ├─  ⚠️ 免责声明区域 (Disclaimer)
│  │  ├─  📋 Workflow Overview
│  │  ├─  🔗 Logical Blocks
│  │  ├─  🔧 Block-by-Block Analysis
│  │  └─  💡 相关工作流推荐
│  └─ 右列 (40%) - Sidebar
│     ├─ 工作流预览/查看器
│     ├─ 作者信息卡片
│     ├─ 统计信息面板
│     └─ 操作按钮组 (下载、共享、收藏)
└─ Footer
```

#### 内容区域详细规范

**免责声明区域 (Disclaimer)：**
```
┌─ 🚨 DISCLAIMER 标题 (红色背景)
├─ 免责说明文本 (通常为加粗红色字体)
└─ 了解更多链接 (Optional)
```
- 背景色: 红色浅色 (警告色)
- 文字色: 红色深色或黑色
- 字体大小: 14px
- 左边框: 3px 红色
- 圆角: 4px

**Workflow Overview 部分：**
```
┌─ 标题: "1. Workflow Overview"
├─ 描述性文本段落
├─ 关键特性列表 (bullet points)
└─ 使用场景描述
```

**Logical Blocks 部分：**
```
┌─ 标题: "Logical Blocks"
├─ 1.1 Block Name
│  └─ Block 描述
├─ 1.2 Block Name
│  └─ Block 描述
└─ [显示所有按钮]
```

**Block-by-Block Analysis 部分：**
```
┌─ 标题: "2. Block-by-Block Analysis"
├─ Node: 节点名称
│  ├─ Type / Role: 节点类型和作用
│  ├─ Config choices: 配置说明
│  ├─ Connections: 连接关系
│  └─ Edge cases / failures: 边界情况
└─ ... (更多节点)
```

---

### 1.3 移动端响应式方案

#### 断点处理策略

**> 1024px (Desktop)**
- FilterSidebar: 固定左侧侧边栏，始终可见
- 宽度: 250px (相对内容区 20%)
- 工作流网格: 3列
- 详情页: 2列布局 (60% 左 + 40% 右)

**768px - 1023px (Tablet)**
- FilterSidebar: 汉堡菜单触发 (左上角)
- 菜单样式: 滑入式侧边栏或抽屉
- 工作流网格: 2列
- 详情页: 堆叠布局 (100% 宽度，顺序排列)

**< 768px (Mobile)**
- FilterSidebar: 底部Sheet (抽屉式)
- 触发器: 页面顶部的"筛选"按钮
- 工作流网格: 1列，全宽
- 卡片高度: 自动调整
- 详情页: 单栏全宽，内容堆叠

#### 移动端特殊处理

**FilterSidebar 在移动端：**
- 显示方式: 底部Sheet 或 全屏 Drawer
- 动画: 从下向上滑入 (250ms ease-out)
- 遮罩: 半透明背景 (opacity: 0.5)
- 关闭触发: 
  - 点击遮罩
  - 向下滑动Sheet
  - 点击顶部关闭按钮
- 宽度: 100% (全屏)
- 高度: 50%-80% 屏幕高度 (可滚动)

**工作流卡片在移动端：**
- 移除分类标签显示 (改为 "+N more")
- 缩小作者头像
- 降低统计信息字号
- 简化操作按钮 (改为单个菜单)

---

### 1.4 各页面视觉层级说明

#### 页面优先级顺序 (F-Pattern 和 Z-Pattern)

**首页 (Z-Pattern)：**
```
1. Hero 区域 (顶部) - 最高优先级，品牌和价值主张
2. Newsletter 订阅框 - 次高优先级，用户转化
3. 统计数据 - 社会证明
4. 筛选面板 + 工作流网格 - 主要内容
5. Footer CTA - 次要转化
```

**详情页 (Z-Pattern)：**
```
1. 工作流标题 & 基本信息 - 最高优先级
2. 工作流预览/查看器 - 主要内容展示
3. 详细说明文本 - 教育内容
4. 相关推荐 - 导航辅助
5. 作者信息 - 社区建设
```

#### 标题层级规范

| 层级 | 用途 | 字体大小 | 字重 | 行高 |
|-----|------|--------|------|------|
| H1 | 页面标题/工作流标题 | 36px | 700 (bold) | 1.2 |
| H2 | 主要分区标题 | 28px | 600 (semibold) | 1.3 |
| H3 | 子分区标题 | 24px | 600 (semibold) | 1.3 |
| H4 | 区块标题 | 20px | 600 (semibold) | 1.4 |
| H5 | 小区块标题 | 16px | 600 (semibold) | 1.4 |
| 正文 | 段落文本 | 16px | 400 (normal) | 1.6 |
| 小字 | 辅助信息 | 12px-14px | 400 (normal) | 1.5 |

---

## 组件设计规范

### 2.1 FilterSidebar 组件规范

#### 布局结构

```
┌──────────────────────────┐
│ 筛选面板 (FilterSidebar) │
├──────────────────────────┤
│ 📅 TIME PERIOD          │ (可折叠区间)
│ ☐ All Time (7947)      │
│ ☐ Last 7 days (8)      │
│ ☐ Last Month (374)     │
│ ☐ Last 6 Months (4508) │
├──────────────────────────┤
│ 💰 PRICE                │ (可折叠区间)
│ ☐ All Workflows (7947) │
│ ☐ Free (6898)          │
│ ☐ Paid (1049)          │
├──────────────────────────┤
│ 🎯 COMPLEXITY           │
│ ☐ All Levels (7947)    │
│ ☐ Beginner (500)       │
│ ☐ Intermediate (2835)  │
│ ☐ Advanced (4602)      │
├──────────────────────────┤
│ 📊 SORT BY              │
│ ▼ [Date (Newest)]      │
├──────────────────────────┤
│ 📁 CATEGORIES           │ (可滚动)
│ ☐ All Workflows (7947) │
│ ☐ Multimodal AI (2270) │
│ ☐ AI (1600)            │
│ ☐ AI Summarization...  │
│ [Show More →]          │
└──────────────────────────┘
```

#### 交互特性

- **复选框样式**: 
  - 未选中: 无背景，灰色边框
  - 选中: 蓝色背景，白色检查标记
  - 禁用: 浅灰背景，灰色边框

- **数量徽章**:
  - 颜色: 灰色文字 (#6B7280)
  - 字体大小: 12px
  - 位置: 选项文本右对齐

- **可折叠区间**:
  - 展开/收起图标: > / ∨
  - 平滑展开动画 (200ms)
  - 记住用户选择状态

- **排序下拉**:
  - 默认值: Date (Newest)
  - 选项: Last Modified, Downloads, Views, Likes
  - 变更即时反映到网格

#### 响应式行为

| 断点 | 行为 | 宽度 | 位置 |
|-----|------|------|------|
| Desktop (1024px+) | 固定侧边栏，始终可见 | 250px | 左侧 |
| Tablet (768-1023px) | 抽屉式，从左边滑入 | 250px | 左侧 overlay |
| Mobile (<768px) | 底部Sheet，可向上滚动 | 100% | 底部 overlay |

---

### 2.2 FilterCounter 组件规范

#### 显示位置

- 所有FilterSidebar复选框旁
- 分类卡片右侧
- 排序下拉选项内

#### 设计规范

**样式 A - 内联徽章 (在复选框旁):**
```
☐ Last 7 days  (8)
  └─ 灰色 12px 字体，括号显示
```

**样式 B - 圆形徽章 (分类卡片):**
```
Multimodal AI  [2270]
  └─ 蓝色背景圆形，20x20px，白色字体
```

#### 实现细节

- 使用 `getFilterCounts()` API 实时获取
- 计数包含当前其他筛选条件的影响
- 为 0 的选项显示为灰色禁用
- 缓存时间: 5分钟

---

### 2.3 WorkflowDetailedView 组件规范

#### 组件构成

```
<WorkflowDetailedView>
  <Disclaimer section>
    - 警告信息区域
    - 红色左边框
    - 可折叠设计
  
  <Overview section>
    - 工作流概览
    - 关键特性列表
    - 使用场景
  
  <LogicalBlocks section>
    - 逻辑块列表
    - 可展开详情
    - 流程图支持
  
  <NodeDetails section>
    - 逐个节点说明
    - 配置参数解释
    - 连接关系图
    - 错误处理指南
  
  <RelatedWorkflows section>
    - 推荐工作流列表
    - 3-5个相关项
</WorkflowDetailedView>
```

#### 内容区域样式

| 区域 | 背景色 | 边框 | 圆角 | 注意事项 |
|-----|------|------|------|---------|
| Disclaimer | 红色 (#FEE2E2) | 左 3px 红色 | 4px | 固定顶部，可关闭 |
| Overview | 白色/暗黑 | 无 | 0px | 通常为文本段落 |
| LogicalBlocks | 灰色背景 (#F3F4F6) | 无 | 8px | 每个块单独卡片 |
| NodeDetails | 白色/暗黑 | 1px 灰色 | 4px | 长段落需要 code 块 |
| RelatedWorkflows | 浅蓝 (#EFF6FF) | 无 | 8px | 卡片网格展示 |

#### 交互行为

- **展开/收起**: 点击区域标题，平滑展开动画 (200ms)
- **目录导航**: 右侧固定浮动目录，点击跳转到相应区域
- **复制代码**: Node 详情中的代码块支持一键复制
- **打印友好**: 所有区域都支持打印，隐藏不必要元素

---

### 2.4 NewsletterSubscribe 组件规范

#### 设计形态

**形态 A - Hero 内嵌 (首页):**
```
┌─────────────────────────────┐
│ Subscribe to Our Newsletter │
│ Get latest workflows weekly │
├─────────────────────────────┤
│ [邮箱输入框              ] │
│ [Subscribe 按钮]         │
│ ☐ I agree to terms       │
└─────────────────────────────┘
```

**形态 B - 侧边栏卡片:**
```
┌──────────────┐
│ 📬 Newsletter│
│              │
│ Stay updated │
│ with latest  │
│ workflows    │
│ [Email...]   │
│ [Subscribe]  │
│ [隐私政策]   │
└──────────────┘
```

#### 表单字段

| 字段 | 类型 | 验证 | 必需 |
|-----|------|------|------|
| Email | text | RFC 5322 | ✓ |
| Frequency | select | enum | ✓ |
| Categories | checkbox | array | ✗ |
| Terms | checkbox | boolean | ✓ |

#### 交互流程

```
1. 用户输入邮箱 [即时验证，红色错误提示]
2. 选择频率 (Weekly/Monthly)
3. 可选选择感兴趣分类
4. 勾选同意条款
5. 点击Subscribe按钮 [提交清除形式，显示加载中]
6. 成功后显示确认信息 [✓ 检查邮箱确认订阅]
7. 重定向到感谢页 [10秒后]
```

---

### 2.5 SubmitWorkflowForm 组件规范

#### 表单字段

| 字段 | 类型 | 验证 | 字符数 | 必需 |
|-----|------|------|--------|------|
| Workflow Title | text | 长度 | 3-100 | ✓ |
| Description | textarea | 长度 | 20-2000 | ✓ |
| Category | select | enum | - | ✓ |
| Complexity | select | enum | - | ✓ |
| Workflow JSON | textarea | JSON | 无限 | ✓ |
| Tags | input | 自定义 | - | ✗ |
| Author Email | email | RFC 5322 | - | ✓ |
| License | select | enum | - | ✓ |

#### 表单验证规则

```
字段验证 (前端):
- Title: 非空，3-100字符
- Description: 非空，20-2000字符  
- Workflow JSON: 有效JSON，能被解析
- Email: 有效邮箱格式

业务验证 (后端):
- 检查工作流名称是否已存在
- 验证JSON结构和节点有效性
- 检查用户提交频率限制 (防止滥用)
- 病毒/审查内容扫描
```

#### 提交流程

```
1. 用户填写表单
2. 点击"Submit"按钮
3. 前端验证失败 → 显示错误信息
4. 前端验证通过 → 发送到后端
5. 后端处理 (2-3秒) → 显示加载中
6. 后端验证通过 → 工作流进入待审核队列
7. 返回成功页面，显示审核预计时间
8. 用户收到确认邮件
```

---

### 2.6 WorkflowViewer 组件规范 (交互式查看器)

#### 功能按钮

| 按钮 | 图标 | 快捷键 | 功能 |
|-----|------|--------|------|
| Fullscreen | ⛶ | F | 全屏展示工作流 |
| Zoom In | 🔍+ | +/= | 放大工作流 |
| Zoom Out | 🔍- | - | 缩小工作流 |
| Fit Canvas | ↔↔ | 0 | 显示全部 |
| Reset | ↺ | R | 恢复初始状态 |
| Download | ⬇ | D | 下载工作流图片 |

#### 实现方案选择

**Option A: 使用 iframe 嵌入 (推荐)**
- 集成 n8n 官方编辑器
- 支持完整的交互和拖拽
- 缺点: 依赖 n8n 实例可用性

**Option B: 使用 React Flow (次选)**
- 自定义画布渲染
- 完整的缩放和导航控制
- 支持节点点击查看详情

**Option C: 静态图片 + 图片查看器**
- 集成 react-medium-image-zoom
- 轻量级，加载快
- 缺点: 不能交互

#### 推荐方案: Option C (静态图片 + 查看器)

```
<WorkflowViewer>
  <ImageViewer>
    <img src="workflow-diagram.png">
      ├─ 缩放: 鼠标滚轮 / 双指滑动
      ├─ 拖拽: 左键按住拖动
      ├─ 全屏: 双击或按钮
      └─ 下载: 右键菜单
  </ImageViewer>
  <Controls>
    - Zoom In/Out 按钮
    - Fit Canvas 按钮
    - Reset 按钮
    - Download 按钮
  </Controls>
</WorkflowViewer>
```

---

## 设计令牌

### 3.1 颜色系统

#### 基础调色板

**主色 (Primary)**
- Primary-50: #EFF6FF
- Primary-100: #DBEAFE
- Primary-200: #BFDBFE
- Primary-500: #3B82F6 (主要交互色)
- Primary-600: #2563EB
- Primary-700: #1D4ED8
- Primary-900: #1E3A8A

**成功色 (Success)**
- Success-50: #F0FDF4
- Success-500: #22C55E
- Success-600: #16A34A

**警告色 (Warning)**
- Warning-50: #FFFBEB
- Warning-500: #FBBF24
- Warning-600: #F59E0B

**危险色 (Danger)**
- Danger-50: #FEF2F2
- Danger-500: #EF4444
- Danger-600: #DC2626

**中立色 (Gray)**
- Gray-50: #F9FAFB
- Gray-100: #F3F4F6
- Gray-200: #E5E7EB
- Gray-400: #9CA3AF
- Gray-600: #4B5563
- Gray-700: #374151
- Gray-900: #111827

#### 功能色应用

| 用途 | 颜色 | 用例 |
|-----|------|------|
| 主要按钮 | Primary-600 | 提交、确认、Subscribe |
| 次要按钮 | Gray-200/400 | 取消、返回 |
| 危险操作 | Danger-600 | 删除、警告 |
| 成功状态 | Success-500 | ✓ 提交成功 |
| 警告提示 | Warning-500 | ⚠️ 需要注意 |
| 信息提示 | Primary-500 | ℹ️ 信息提示 |
| Free 标签 | Success-500 | 免费工作流 |
| Paid 标签 | Warning-500 | 付费工作流 |

#### 暗黑模式适配

- 文本色反转: White (亮) ↔ #0F172A (暗)
- 背景反转: #F9FAFB (亮) ↔ #1E293B (暗)
- 卡片背景: #FFFFFF (亮) ↔ #334155 (暗)
- 边框色: #E5E7EB (亮) ↔ #475569 (暗)

### 3.2 排版规范

#### 字体栈

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
             'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 
             'Segoe UI Emoji', 'Segoe UI Symbol';
```

#### 字体大小等级

| 名称 | 大小 | 字重 | 行高 | 应用场景 |
|-----|------|------|------|---------|
| xs | 12px | 400 | 1.5 | 辅助文本、时间戳 |
| sm | 14px | 400 | 1.5 | 标签、提示文本 |
| base | 16px | 400 | 1.6 | 正文、段落 |
| lg | 18px | 400 | 1.6 | 卡片标题 |
| xl | 20px | 600 | 1.4 | 子标题 (H4) |
| 2xl | 24px | 600 | 1.3 | 子标题 (H3) |
| 3xl | 28px | 600 | 1.3 | 主标题 (H2) |
| 4xl | 36px | 700 | 1.2 | 页面标题 (H1) |

#### 字重规范

| 字重 | 名称 | 用途 |
|-----|------|------|
| 400 | Normal | 正文、段落 |
| 500 | Medium | 强调文本 |
| 600 | Semibold | 小标题 |
| 700 | Bold | 大标题、关键信息 |

### 3.3 间距规范

#### 间距等级 (基数: 4px)

```
0:   0px
1:   4px
2:   8px
3:   12px
4:   16px
5:   20px
6:   24px
8:   32px
10:  40px
12:  48px
16:  64px
20:  80px
```

#### 应用场景

| 场景 | 空间大小 | 说明 |
|-----|--------|------|
| 元素内边距 (padding) | 2-4 (8-16px) | 按钮、卡片内部 |
| 元素间距 (margin) | 3-6 (12-24px) | 组件间隔 |
| 大分区间距 | 8-12 (32-48px) | 页面主要分区 |
| 行间距 (line-height) | 1.5-1.6 | 易读性 |

#### 常见组合

- 按钮 padding: 2 4 (8px 16px)
- 卡片 padding: 6 (24px)
- 输入框 padding: 2 3 (8px 12px)
- 页面内边距: 6 (24px)
- 页面最大宽度: 1280px

### 3.4 阴影系统

#### 阴影等级

```css
/* 无阴影 */
shadow-none: none

/* 轻微阴影 (用于卡片悬停) */
shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)

/* 普通阴影 (用于卡片) */
shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)

/* 中等阴影 (用于浮动元素) */
shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)

/* 大阴影 (用于模态框) */
shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)

/* 超大阴影 (用于dropdown) */
shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
```

#### 应用规则

| 元素 | 阴影等级 | 悬停时 |
|-----|---------|-------|
| 工作流卡片 | shadow | shadow-md |
| 筛选侧边栏 | shadow-md | - |
| 下拉菜单 | shadow-lg | - |
| 模态框 | shadow-xl | - |
| 浮动按钮 | shadow-lg | shadow-xl |

### 3.5 状态指示器样式

#### 按钮状态

```
┌─ 默认 (Default)
│  ├─ 背景: Primary-600
│  ├─ 文字: White
│  └─ 游标: pointer
│
├─ 悬停 (Hover)
│  ├─ 背景: Primary-700
│  ├─ 阴影: shadow-md
│  └─ 游标: pointer
│
├─ 按下 (Active)
│  ├─ 背景: Primary-900
│  ├─ 变换: scale(0.95)
│  └─ 转换: 50ms
│
├─ 禁用 (Disabled)
│  ├─ 背景: Gray-300
│  ├─ 文字: Gray-500
│  ├─ 游标: not-allowed
│  └─ 不透明: 0.6
│
└─ 加载中 (Loading)
   ├─ 背景: Primary-600
   ├─ 显示: 旋转加载动画
   └─ 禁用点击: true
```

#### 复选框/单选框状态

```
未选中:
  ┌─────┐
  │     │ (灰色边框)
  └─────┘

选中:
  ┌─────┐
  │  ✓  │ (蓝色背景)
  └─────┘

禁用 (未选):
  ┌─────┐
  │     │ (浅灰色)
  └─────┘

禁用 (已选):
  ┌─────┐
  │  ✓  │ (浅灰色背景)
  └─────┘
```

#### 标签/徽章状态

| 类型 | 背景色 | 文字色 | 用途 |
|-----|--------|--------|------|
| Primary | Primary-100 | Primary-900 | 强调 |
| Success | Success-100 | Success-900 | 成功 |
| Warning | Warning-100 | Warning-900 | 警告 |
| Danger | Danger-100 | Danger-900 | 危险 |
| Neutral | Gray-100 | Gray-900 | 中立 |

---

## 交互设计

### 4.1 FilterSidebar 交互流程

**筛选面板展开/收起：**

```
用户点击 FilterSidebar 标题
         ↓
检查当前状态 (展开/收起)
         ↓
执行反向动作:
  - 如果展开 → 平滑收起 (max-height: 0, opacity: 0.5)
  - 如果收起 → 平滑展开 (max-height: auto, opacity: 1)
         ↓
动画时间: 200ms easing: ease-out
         ↓
记住状态到 localStorage
```

**多条件筛选 URL 同步：**

```
用户选择筛选条件
         ↓
构建查询参数对象:
  {
    timePeriod: 'last-7-days',
    price: 'free',
    complexity: 'intermediate',
    category: 'ai',
    sortBy: 'date'
  }
         ↓
更新 URL 参数:
  /workflows?timePeriod=last-7-days&price=free&...
         ↓
发送 API 请求获取筛选结果
         ↓
更新工作流网格 (保留滚动位置)
         ↓
使用 History API 替换当前历史记录 (不创建新条目)
```

**筛选计数实时更新：**

```
初始化页面或用户改变筛选
         ↓
触发 getFilterCounts() 请求
         ↓
根据当前活跃筛选条件计算:
  - 其他筛选选项的结果数量
  - 显示在括号内 (灰色小字)
         ↓
禁用结果为 0 的选项 (灰色 + 不可点击)
         ↓
缓存结果 5 分钟
         ↓
实时展示数字 (无延迟)
```

### 4.2 工作流放大/缩小交互流程

**交互式查看器 (WorkflowViewer) 手势：**

```
鼠标滚轮向上 / 触摸两指向外扩张
         ↓
缩放级别增加 (最大 200%)
         ↓
以鼠标指针位置为中心缩放
         ↓
实时更新显示
         ↓
调整控制条按钮状态 (禁用最大/最小)


鼠标滚轮向下 / 触摸两指向内收缩
         ↓
缩放级别减少 (最小 50%)
         ↓
以鼠标指针位置为中心缩放
         ↓
实时更新显示
         ↓
调整控制条按钮状态 (禁用最大/最小)


左键按住并拖拽
         ↓
鼠标指针变为 grab
         ↓
追踪鼠标移动距离
         ↓
平移画布位置
         ↓
鼠标指针反馈: grabbing
         ↓
松开鼠标后恢复 grab
```

**按钮交互：**

```
点击 "Zoom In" 按钮
         ↓
缩放级别 += 20%
         ↓
如果达到 200% → 禁用按钮
         ↓
更新显示


点击 "Fit Canvas" 按钮
         ↓
计算工作流的边界框
         ↓
缩放至完全可见
         ↓
居中显示


点击 "Reset" 按钮
         ↓
缩放级别 = 100%
         ↓
平移位置 = (0, 0)
         ↓
恢复初始状态


点击 "Fullscreen" 按钮
         ↓
进入全屏模式 (requestFullscreen API)
         ↓
显示最小化工具栏
         ↓
ESC 或点击退出全屏
```

### 4.3 移动端底部 Sheet 滑入/滑出动画

**打开 FilterSidebar (底部 Sheet)：**

```
用户点击"筛选"按钮
         ↓
显示半透明遮罩 (rgba(0,0,0,0.5), z-index: 40)
         ↓
Sheet 从底部向上滑入:
  - 初始位置: translateY(100%)
  - 最终位置: translateY(0)
  - 动画时间: 250ms
  - easing: cubic-bezier(0.4, 0, 0.2, 1)
         ↓
Sheet 高度: 50%-80% 视口高度 (可滚动)
         ↓
焦点管理: 焦点转移到 Sheet
```

**关闭 FilterSidebar (底部 Sheet)：**

```
用户点击遮罩 / 向下滑动 / 点击关闭按钮
         ↓
Sheet 从当前位置向下滑出:
  - 目标位置: translateY(100%)
  - 动画时间: 250ms
  - easing: cubic-bezier(0.4, 0, 0.2, 1)
         ↓
遮罩淡出 (opacity: 0 → 0.5)
         ↓
完全隐藏 Sheet (display: none)
         ↓
焦点恢复: 触发"筛选"按钮
```

**向下滑动关闭的阈值：**

```
用户在 Sheet 顶部进行向下拖拽手势
         ↓
追踪手指移动距离 (distance)
         ↓
实时反馈:
  - 如果 distance < 80px: Sheet 跟随手指移动
  - 如果 distance >= 80px: 自动完全关闭
         ↓
手指抬起时判断:
  - 速度 > 500px/s → 自动关闭
  - distance > 30% 屏幕高度 → 自动关闭
  - 其他 → 反弹回原位置
```

### 4.4 动画和过渡设置

#### 时间规范

| 类型 | 时间 | easing | 用途 |
|-----|------|--------|------|
| 快速 | 150ms | ease-in-out | 简单状态变化 |
| 标准 | 200ms | ease-out | 面板展开、元素进入 |
| 慢速 | 300ms | ease-out | 模态框、全屏 |
| 很慢 | 500ms | ease-in-out | 骨架屏加载、数据转换 |

#### 常见过渡

```css
/* 按钮悬停 */
transition: all 150ms ease-in-out;

/* 面板展开 */
transition: max-height 200ms ease-out, opacity 200ms ease-out;

/* 页面进入 */
animation: fadeInUp 300ms ease-out;

/* 加载旋转 */
animation: spin 1s linear infinite;
```

---

## 响应式设计标准

### 5.1 断点定义

```javascript
// tailwind.config.js
const breakpoints = {
  'sm': '640px',   // 小手机
  'md': '768px',   // 平板
  'lg': '1024px',  // 桌面
  'xl': '1280px',  // 大桌面
  '2xl': '1536px'  // 超大屏
}
```

### 5.2 栅格布局规范

```
所有设备上一致的栅格系统:
- 列数: 12 列
- 根据断点调整每列宽度
- 始终使用 gap-4 (16px) 或 gap-6 (24px)
```

### 5.3 可触及性规范 (Mobile)

```
- 最小点击区域: 44x44px (iOS) / 48x48dp (Android)
- 最小间距: 8px (两个点击区域间)
- 文字大小最小: 16px (避免自动缩放)
- 表单输入: minimum height 44px
```

---

## 总结和检查清单

### 设计交付清单

- [ ] 所有页面高保真原型完成 (Figma/Sketch)
- [ ] 设计规范文档通过评审
- [ ] 颜色、排版、间距在原型中统一应用
- [ ] 交互动画原型演示 (Figma interactions)
- [ ] 移动端响应式设计验证
- [ ] 无障碍设计检查 (WCAG 2.1 AA)
- [ ] 设计令牌导出为 CSS 变量

### 实现前检查

- [ ] 前端团队理解所有设计规范
- [ ] 设计令牌已集成到项目中
- [ ] Tailwind 配置与设计規范同步
- [ ] 组件库初始化完成
- [ ] 动画库选择确定 (framer-motion / react-spring)

---

**文档版本**: 1.0  
**最后修改**: 2026-01-10  
**维护者**: 设计系统团队
