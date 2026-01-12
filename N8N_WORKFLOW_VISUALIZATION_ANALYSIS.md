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
