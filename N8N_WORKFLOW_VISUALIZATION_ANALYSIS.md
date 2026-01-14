# n8nworkflows.xyz 工作流可视化实现分析

## 概述

该网站使用 **n8n 官方提供的 Web Component** 来实现工作流的可视化展示。通过加载工作流的 JSON 数据并传递给 `<n8n-demo>` 组件，即可在网页中渲染出交互式的工作流画布。

## 核心实现流程

### 1. 工作流数据加载

在 [`src/pages/workflows/[slug].astro`](src/pages/workflows/[slug].astro:78) 文件中，首先从本地加载工作流的 JSON 数据：

```javascript
// 第78-87行
let workflowJson = null;
try {
  const workflowJsonPath = `/data/workflows/${slug}/${workflow.id}.json`;
  const response = await fetch(new URL(workflowJsonPath, Astro.url.origin));
  if (response.ok) {
    workflowJson = await response.json();
  }
} catch (error) {
  console.error('Error loading workflow JSON:', error);
}
```

**工作流JSON文件存储位置：**
- `public/data/workflows/{slug}/{id}.json`
- 例如：`public/data/workflows/ai-powered-social-media-content-generator-publisher-2950/2950.json`

### 2. n8n Web Component 集成

在 [`src/pages/workflows/[slug].astro`](src/pages/workflows/[slug].astro:117) 的第117-142行，使用 n8n 的 Web Component 来渲染工作流：

```html
<!-- 容器设置样式 -->
<div class="workflow-preview-container" 
     style="--n8n-workflow-min-height: 600px; --n8n-json-background-color: #FDF6F0;">
  
  <!-- 加载必要的 Polyfill 和依赖库 -->
  <script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.0.0/webcomponents-loader.js" 
          crossorigin="anonymous" data-cfasync="false"></script>
  
  <script src="https://www.unpkg.com/lit@2.0.0-rc.2/polyfill-support.js" 
          crossorigin="anonymous" data-cfasync="false"></script>
  
  <!-- 加载 n8n Demo Component -->
  <script type="module" 
          src="https://cdn.jsdelivr.net/npm/@n8n_io/n8n-demo-component/n8n-demo.bundled.js" 
          crossorigin="anonymous" data-cfasync="false"></script>
  
  <!-- 隐藏底部页脚 -->
  <script type="4994abcb98f644aea97c64c4-text/javascript">
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        const footers = document.querySelectorAll('.workflow-canvas-footer');
        footers.forEach(function(footer) {
          footer.style.display = 'none';
        });
      }, 1000);
    });
  </script>
  
  <!-- n8n-demo Web Component -->
  <n8n-demo 
    workflow={JSON.stringify(workflowJson)} 
    theme="light" 
    frame="false" 
    clicktointeract="true" 
    disableinteractivity="false" 
    hidecanvaserrors="true" 
    collapseformobile="true">
  </n8n-demo>
</div>
```

### 3. 关键组件和参数说明

#### 必需的脚本库：

1. **@webcomponents/webcomponentsjs** (v2.0.0)
   - 提供 Web Components 的 Polyfill 支持
   - 确保在不同浏览器中的兼容性

2. **lit polyfill-support** (v2.0.0-rc.2)
   - Lit 框架的 Polyfill 支持
   - n8n 组件基于 Lit 框架构建

3. **@n8n_io/n8n-demo-component**
   - n8n 官方的演示组件包
   - 包含完整的工作流可视化渲染引擎

#### `<n8n-demo>` 组件属性：

| 属性 | 值 | 说明 |
|------|-----|------|
| `workflow` | JSON字符串 | 工作流的完整 JSON 数据 |
| `theme` | `"light"` | 主题模式（light/dark） |
| `frame` | `"false"` | 是否显示边框 |
| `clicktointeract` | `"true"` | 点击后允许交互 |
| `disableinteractivity` | `"false"` | 不禁用交互功能 |
| `hidecanvaserrors` | `"true"` | 隐藏画布错误提示 |
| `collapseformobile` | `"true"` | 移动端自适应折叠 |

### 4. CSS 样式自定义

在 [`src/pages/workflows/[slug].astro`](src/pages/workflows/[slug].astro:117) 第117行，通过 CSS 变量自定义样式：

```css
style="
  height: 635px; 
  --n8n-workflow-min-height: 600px; 
  --n8n-json-background-color: #FDF6F0; 
  --n8n-copy-button-background-color: #FDF6F0;
"
```

**可用的 CSS 变量：**
- `--n8n-workflow-min-height`: 工作流画布的最小高度
- `--n8n-json-background-color`: JSON 视图的背景色
- `--n8n-copy-button-background-color`: 复制按钮的背景色

### 5. 降级方案

如果工作流 JSON 数据加载失败，系统会降级显示静态图片：

```html
{workflowJson ? (
  <!-- n8n-demo 组件 -->
) : (
  <!-- 降级到静态图片 -->
  <img
    src={workflow.featuredImage || '/placeholder-workflow.webp'}
    alt={workflow.title}
    class="w-full h-full object-cover rounded-lg"
  />
)}
```

## 工作流 JSON 数据结构

工作流 JSON 文件通常包含以下结构：

```json
{
  "nodes": [
    {
      "id": "node-id",
      "name": "Node Name",
      "type": "n8n-nodes-base.nodeType",
      "position": [x, y],
      "parameters": { ... }
    }
  ],
  "connections": {
    "Node Name": {
      "main": [[{ "node": "Target Node", "type": "main", "index": 0 }]]
    }
  },
  "settings": { ... }
}
```

## 完整的技术栈

### 前端框架
- **Astro**: 静态站点生成器
- **Web Components**: 用于嵌入 n8n 可视化组件

### n8n 可视化组件
- **来源**: https://n8n-io.github.io/n8n-demo-webcomponent/
- **NPM 包**: `@n8n_io/n8n-demo-component`
- **文档**: https://github.com/n8n-io/n8n-demo-webcomponent

### CDN 服务
- **CDN.jsdelivr.net**: 提供 npm 包的 CDN 服务
- **Unpkg.com**: Lit 框架的 Polyfill

## 实现优势

1. **官方支持**: 使用 n8n 官方提供的组件，确保兼容性和更新
2. **零后端依赖**: 纯前端实现，工作流数据存储在静态文件中
3. **交互式体验**: 用户可以点击、缩放、查看节点详情
4. **响应式设计**: 自动适配移动端和桌面端
5. **性能优化**: 通过 CDN 加载，支持浏览器缓存

## 关键文件路径

1. **工作流详情页**: [`src/pages/workflows/[slug].astro`](src/pages/workflows/[slug].astro)
2. **工作流 JSON 数据**: `public/data/workflows/{slug}/{id}.json`
3. **工作流元数据**: `public/data/workflows/{slug}/metadata.json`
4. **工作流缩略图**: `public/data/workflows/{slug}/{slug}.webp`

## 总结

该网站通过以下步骤实现工作流可视化：

1. ✅ 从静态 JSON 文件加载工作流数据
2. ✅ 加载 n8n 官方的 Web Component 库
3. ✅ 将 JSON 数据传递给 `<n8n-demo>` 组件
4. ✅ 组件自动渲染交互式工作流画布
5. ✅ 提供降级方案（静态图片）

这种实现方式简单高效，无需自己开发复杂的工作流渲染引擎，直接复用 n8n 官方的可视化能力。

---

## ❌ 工作流 JSON "Invalid JSON" 错误分析

### 问题描述

在使用 n8n demo webcomponent 显示工作流时，可能会遇到 "Invalid JSON" 错误，导致工作流无法正常渲染。

![error-screenshot](截图显示: "Could not load workflow preview. Invalid JSON")

### 根本原因分析

根据对代码和 JSON 数据结构的分析，发现以下**关键问题**：

#### 1. 🔴 JSON 数据结构不匹配

**当前实现的问题 (第82行):**

```javascript
// src/pages/workflows/[slug].astro 第82行
workflowJson = fullData.workflow || fullData;
```

**问题解释:**

从 [`public/data/workflows/workflow-4-4/4.json`](public/data/workflows/workflow-4-4/4.json) 可以看到，JSON 文件的结构是：

```json
{
  "id": 4,
  "name": "Send selected GitHub events to Slack",
  "views": 2579,
  "workflow": {
    "nodes": [...],
    "connections": {...}
  },
  "user": {...},
  "nodes": [...],
  "categories": [...]
}
```

代码提取的是 `fullData.workflow` 对象，但这个对象**只包含 nodes 和 connections**，缺少 n8n demo 组件所需的必要字段。

#### 2. 🔴 n8n-demo 组件的 JSON 要求

根据 [n8n-demo-webcomponent](https://n8n-io.github.io/n8n-demo-webcomponent/) 文档，组件需要的是**完整的 n8n 工作流格式**，应该包含：

- ✅ `name`: 工作流名称
- ✅ `nodes`: 节点数组
- ✅ `connections`: 连接对象
- ✅ `settings` (可选): 工作流设置
- ✅ `active` (可选): 是否激活
- ✅ `createdAt`/`updatedAt` (可选): 时间戳

**当前代码传递的数据:**

```javascript
// 只有 nodes 和 connections
{
  "nodes": [...],
  "connections": {...}
}
```

这种格式**不完整**，可能导致组件解析失败。

#### 3. 🔴 属性传递方式错误

**当前实现 (第146-152行):**

```javascript
<script is:inline define:vars={{ workflowJson }}>
  document.addEventListener('DOMContentLoaded', function() {
    const demoElement = document.querySelector('n8n-demo');
    if (demoElement && workflowJson) {
      demoElement.workflow = workflowJson;  // ⚠️ 直接赋值对象
    }
  });
</script>
```

然后在第162行：

```html
<n8n-demo theme="light" frame="false" ...></n8n-demo>
```

**问题:**
1. workflow 属性没有在 HTML 属性中设置
2. JavaScript 动态赋值可能在组件初始化之前或之后执行，时机不确定
3. 组件可能期望字符串化的 JSON 而不是对象

#### 4. 🔴 JSON 验证失败

使用 n8n MCP 工具验证工作流时发现：

```
"valid": false
"Single-node workflows are only valid for webhook endpoints"
```

虽然这是工作流逻辑的警告，但如果 JSON 结构本身有问题，也会导致组件解析失败。

### ✅ 解决方案

#### 方案1: 修正 JSON 数据结构提取

确保传递给组件的是完整的工作流对象：

```javascript
// src/pages/workflows/[slug].astro 第75-86行
let workflowJson = null;
try {
  const workflowJsonPath = `/data/workflows/${slug}/${workflow.id}.json`;
  const response = await fetch(new URL(workflowJsonPath, Astro.url.origin));
  if (response.ok) {
    const fullData = await response.json();
    
    // 构建完整的 n8n 工作流格式
    workflowJson = {
      name: fullData.name || workflow.title,
      nodes: fullData.workflow?.nodes || [],
      connections: fullData.workflow?.connections || {},
      settings: fullData.workflow?.settings || {},
      active: false,
      // 可选字段
      id: fullData.id,
      createdAt: fullData.createdAt,
      updatedAt: fullData.updatedAt || fullData.createdAt
    };
  }
} catch (error) {
  console.error('Error loading workflow JSON:', error);
}
```

#### 方案2: 修正组件属性传递

使用 HTML 属性而不是 JavaScript 动态赋值：

```html
<!-- 第142-162行修改 -->
{workflowJson ? (
  <div class="workflow-preview-container" style="--n8n-workflow-min-height: 600px;">
    <script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.0.0/webcomponents-loader.js" crossorigin="anonymous"></script>
    <script src="https://www.unpkg.com/lit@2.0.0-rc.2/polyfill-support.js" crossorigin="anonymous"></script>
    <script type="module" src="https://cdn.jsdelivr.net/npm/@n8n_io/n8n-demo-component/n8n-demo.bundled.js" crossorigin="anonymous"></script>
    
    <!-- 直接在 HTML 属性中传递 workflow -->
    <n8n-demo 
      workflow={JSON.stringify(workflowJson)}
      theme="light" 
      frame="false" 
      clicktointeract="true" 
      disableinteractivity="false" 
      hidecanvaserrors="true" 
      collapseformobile="true">
    </n8n-demo>
    
    <script is:inline>
      // 隐藏底部页脚
      setTimeout(() => {
        document.querySelectorAll('.workflow-canvas-footer').forEach(footer => {
          footer.style.display = 'none';
        });
      }, 1000);
    </script>
  </div>
) : (
  <img src={workflow.featuredImage || '/placeholder-workflow.webp'} alt={workflow.title} />
)}
```

#### 方案3: 添加 JSON 验证

在传递给组件之前验证 JSON 格式：

```javascript
// 验证工作流 JSON 是否有效
function validateWorkflowJson(json) {
  if (!json) return false;
  if (!json.nodes || !Array.isArray(json.nodes)) return false;
  if (!json.connections || typeof json.connections !== 'object') return false;
  if (json.nodes.length === 0) return false;
  return true;
}

// 在第86行后添加
if (workflowJson && !validateWorkflowJson(workflowJson)) {
  console.error('Invalid workflow JSON structure:', workflowJson);
  workflowJson = null;
}
```

### 🔍 调试步骤

1. **检查 JSON 文件内容**
   ```bash
   # 查看 JSON 文件是否是有效的 JSON
   cat public/data/workflows/{slug}/{id}.json | jq
   ```

2. **检查浏览器控制台**
   - 打开开发者工具
   - 查看 Console 错误信息
   - 检查 Network 标签，确认 JSON 文件是否正确加载

3. **验证 JSON 结构**
   ```javascript
   console.log('Workflow JSON:', JSON.stringify(workflowJson, null, 2));
   ```

4. **使用 n8n MCP 验证**
   ```javascript
   // 使用 validate_workflow 工具检查工作流是否有效
   ```

### 📊 对比: 正确 vs 错误的 JSON 结构

#### ❌ 错误 - 只有 nodes 和 connections
```json
{
  "nodes": [...],
  "connections": {...}
}
```

#### ✅ 正确 - 完整的工作流对象
```json
{
  "name": "My Workflow",
  "nodes": [
    {
      "id": "...",
      "name": "Start",
      "type": "n8n-nodes-base.start",
      "position": [250, 300],
      "parameters": {}
    }
  ],
  "connections": {
    "Start": {
      "main": [[{"node": "Next Node", "type": "main", "index": 0}]]
    }
  },
  "active": false,
  "settings": {}
}
```

### 🎯 最佳实践建议

1. **数据格式标准化**
   - 统一所有工作流 JSON 文件的格式
   - 确保包含 n8n demo 组件所需的所有必要字段

2. **错误处理增强**
   - 添加 JSON 验证逻辑
   - 提供更详细的错误信息
   - 优雅地降级到静态图片

3. **使用 n8n MCP 工具**
   - 在保存工作流前使用 `validate_workflow` 验证
   - 确保工作流在 n8n 中可正常运行

4. **测试覆盖**
   - 测试不同类型的工作流 JSON
   - 测试边缘情况（空节点、复杂连接等）

### 🔗 相关资源

- [n8n Demo Web Component 文档](https://n8n-io.github.io/n8n-demo-webcomponent/)
- [n8n Workflow JSON Schema](https://docs.n8n.io/workflows/components/)
- [n8n MCP 工具](https://github.com/n8n-io/n8n-mcp)

---

**最后更新**: 2026-01-13
