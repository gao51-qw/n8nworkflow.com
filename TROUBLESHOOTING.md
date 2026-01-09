# 故障排除指南

本文档提供了 N8N Workflows 网站常见问题的解决方案和调试技巧。

## 📋 目录

- [安装问题](#安装问题)
- [构建错误](#构建错误)
- [运行时错误](#运行时错误)
- [数据库连接问题](#数据库连接问题)
- [部署问题](#部署问题)
- [性能问题](#性能问题)
- [样式问题](#样式问题)
- [API 问题](#api-问题)

---

## 🔧 安装问题

### 问题 1: npm install 失败

**症状：**
```bash
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
```

**解决方案：**

1. **清除缓存并重试**
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

2. **使用 --legacy-peer-deps**
```bash
npm install --legacy-peer-deps
```

3. **更新 npm 版本**
```bash
npm install -g npm@latest
```

4. **检查 Node.js 版本**
```bash
node --version  # 应该 >= 18.0.0
```

如果版本过低，请升级：
- 访问 https://nodejs.org/
- 下载并安装最新 LTS 版本

---

### 问题 2: 权限错误 (EACCES)

**症状：**
```bash
npm ERR! code EACCES
npm ERR! syscall access
npm ERR! path /usr/local/lib/node_modules
```

**解决方案：**

**Linux/Mac:**
```bash
# 方法 1: 使用 sudo (不推荐)
sudo npm install -g <package>

# 方法 2: 修改 npm 默认目录 (推荐)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

**Windows:**
```bash
# 以管理员身份运行 PowerShell 或 CMD
```

---

### 问题 3: 依赖版本冲突

**症状：**
```bash
npm ERR! peer dep missing: astro@^4.0.0
```

**解决方案：**

1. **检查 package.json 中的版本要求**
```json
{
  "dependencies": {
    "astro": "^4.0.0"
  }
}
```

2. **安装正确版本**
```bash
npm install astro@^4.0.0
```

3. **更新所有依赖**
```bash
npm update
```

---

## 🏗️ 构建错误

### 问题 1: 构建失败 - 内存不足

**症状：**
```bash
FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
```

**解决方案：**

1. **增加 Node.js 内存限制**
```bash
# Linux/Mac
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build

# Windows (CMD)
set NODE_OPTIONS=--max-old-space-size=4096
npm run build

# Windows (PowerShell)
$env:NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

2. **在 package.json 中永久设置**
```json
{
  "scripts": {
    "build": "NODE_OPTIONS='--max-old-space-size=4096' astro build"
  }
}
```

---

### 问题 2: TypeScript 类型错误

**症状：**
```bash
src/components/WorkflowCard.astro:10:5 - error TS2322: Type 'string' is not assignable to type 'number'.
```

**解决方案：**

1. **检查类型定义**
```typescript
// src/lib/types/workflow.ts
export interface Workflow {
  id: string;
  title: string;
  views: number;  // 确保类型正确
}
```

2. **添加类型断言**
```typescript
const views = Number(workflow.views);
```

3. **临时禁用类型检查（不推荐）**
```typescript
// @ts-ignore
const value = someValue;
```

4. **更新 tsconfig.json**
```json
{
  "compilerOptions": {
    "strict": false  // 临时禁用严格模式
  }
}
```

---

### 问题 3: 模块未找到

**症状：**
```bash
Error: Cannot find module '@/lib/services/workflows'
```

**解决方案：**

1. **检查路径别名配置**

在 [`tsconfig.json`](tsconfig.json) 中：
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

在 [`astro.config.mjs`](astro.config.mjs) 中：
```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});
```

2. **使用相对路径**
```typescript
// 替代方案
import { getWorkflows } from '../lib/services/workflows';
```

---

### 问题 4: 图片优化失败

**症状：**
```bash
Error: Failed to optimize image: public/images/workflow.jpg
```

**解决方案：**

1. **检查图片格式**
```bash
# 支持的格式: jpg, jpeg, png, webp, avif, gif, svg
```

2. **检查图片大小**
```bash
# 如果图片过大，先压缩
# 使用在线工具: https://tinypng.com/
```

3. **禁用图片优化（临时）**
```javascript
// astro.config.mjs
export default defineConfig({
  image: {
    service: { entrypoint: 'astro/assets/services/noop' }
  }
});
```

---

## 🚀 运行时错误

### 问题 1: 开发服务器无法启动

**症状：**
```bash
Error: listen EADDRINUSE: address already in use :::4321
```

**解决方案：**

1. **查找占用端口的进程**

**Linux/Mac:**
```bash
lsof -i :4321
kill -9 <PID>
```

**Windows:**
```bash
netstat -ano | findstr :4321
taskkill /PID <PID> /F
```

2. **使用不同端口**
```bash
npm run dev -- --port 3000
```

---

### 问题 2: 热重载不工作

**症状：**
修改文件后页面不自动刷新

**解决方案：**

1. **检查文件监听限制 (Linux)**
```bash
# 查看当前限制
cat /proc/sys/fs/inotify/max_user_watches

# 增加限制
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

2. **重启开发服务器**
```bash
# Ctrl+C 停止
npm run dev
```

3. **清除缓存**
```bash
rm -rf .astro node_modules/.vite
npm run dev
```

---

### 问题 3: 页面显示 404

**症状：**
访问 `/workflows/my-workflow` 显示 404

**解决方案：**

1. **检查文件路径**
```bash
# 确保文件存在
ls src/pages/workflows/[slug].astro
```

2. **检查动态路由**
```typescript
// src/pages/workflows/[slug].astro
export async function getStaticPaths() {
  const workflows = await getWorkflows();
  return workflows.map(workflow => ({
    params: { slug: workflow.slug }
  }));
}
```

3. **检查 Netlify 重定向配置**
```
# public/_redirects
/*    /index.html   200
```

---

### 问题 4: JavaScript 错误

**症状：**
```bash
Uncaught ReferenceError: document is not defined
```

**解决方案：**

1. **确保代码只在客户端运行**
```astro
---
// 服务器端代码
---

<script>
  // 客户端代码
  if (typeof document !== 'undefined') {
    document.querySelector('.button').addEventListener('click', () => {
      // ...
    });
  }
</script>
```

2. **使用 client:load 指令**
```astro
<Component client:load />
```

---

## 🗄️ 数据库连接问题

### 问题 1: Supabase 连接失败

**症状：**
```bash
Error: Invalid Supabase URL or key
```

**解决方案：**

1. **检查环境变量**
```bash
# .env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

2. **验证环境变量加载**
```typescript
// src/lib/services/supabase.ts
console.log('SUPABASE_URL:', import.meta.env.SUPABASE_URL);
console.log('Key exists:', !!import.meta.env.SUPABASE_ANON_KEY);
```

3. **检查 Supabase 项目状态**
- 访问 https://app.supabase.com/
- 确认项目正在运行
- 检查 API 密钥是否正确

---

### 问题 2: 查询超时

**症状：**
```bash
Error: Query timeout after 30000ms
```

**解决方案：**

1. **优化查询**
```typescript
// 添加索引
// 在 Supabase Dashboard 中执行
CREATE INDEX idx_workflows_category ON workflows(category);
CREATE INDEX idx_workflows_created_at ON workflows(created_at);
```

2. **减少返回数据量**
```typescript
const { data } = await supabase
  .from('workflows')
  .select('id, title, slug')  // 只选择需要的字段
  .limit(10);
```

3. **使用分页**
```typescript
const { data } = await supabase
  .from('workflows')
  .select('*')
  .range(0, 9);  // 返回前 10 条
```

---

### 问题 3: RLS 策略阻止访问

**症状：**
```bash
Error: new row violates row-level security policy
```

**解决方案：**

1. **检查 RLS 策略**
```sql
-- 在 Supabase SQL Editor 中
SELECT * FROM pg_policies WHERE tablename = 'workflows';
```

2. **添加读取策略**
```sql
CREATE POLICY "Enable read access for all users"
ON workflows FOR SELECT
USING (true);
```

3. **临时禁用 RLS（仅开发环境）**
```sql
ALTER TABLE workflows DISABLE ROW LEVEL SECURITY;
```

---

## 🌐 部署问题

### 问题 1: Netlify 构建失败

**症状：**
```bash
Build failed: Command failed with exit code 1
```

**解决方案：**

1. **检查构建日志**
- 登录 Netlify Dashboard
- 查看详细构建日志
- 找到具体错误信息

2. **检查 Node.js 版本**
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
```

3. **检查环境变量**
- 在 Netlify Dashboard 中设置所有必需的环境变量
- 确保没有拼写错误

4. **本地测试构建**
```bash
npm run build
```

---

### 问题 2: 部署后页面空白

**症状：**
网站部署成功但显示空白页面

**解决方案：**

1. **检查浏览器控制台**
```bash
# 按 F12 打开开发者工具
# 查看 Console 和 Network 标签
```

2. **检查基础路径配置**
```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://your-site.com',
  base: '/',  // 确保正确
});
```

3. **检查 _redirects 文件**
```
# public/_redirects
/*    /index.html   200
```

---

### 问题 3: 环境变量未生效

**症状：**
```bash
Error: SUPABASE_URL is undefined
```

**解决方案：**

1. **Netlify 环境变量设置**
- Site settings → Environment variables
- 添加所有必需变量
- 重新部署

2. **检查变量前缀**
```javascript
// Astro 要求公开变量使用 PUBLIC_ 前缀
PUBLIC_SITE_URL=https://your-site.com

// 在代码中访问
import.meta.env.PUBLIC_SITE_URL
```

3. **重新触发部署**
```bash
# 推送一个空提交
git commit --allow-empty -m "Trigger rebuild"
git push
```

---

### 问题 4: 自定义域名不工作

**症状：**
自定义域名无法访问

**解决方案：**

1. **检查 DNS 配置**
```
A 记录: @ → 75.2.60.5
CNAME: www → your-site.netlify.app
```

2. **等待 DNS 传播**
```bash
# 检查 DNS 状态
nslookup your-domain.com
dig your-domain.com
```

3. **强制 HTTPS**
- Netlify Dashboard → Domain settings
- 启用 "Force HTTPS"

---

### 问题 5: npm 包不存在或版本不匹配

**症状：**
```bash
error: No version matching "^0.1.0" found for specifier "@n8n_io/n8n-demo-component" (but package exists)
error: @n8n_io/n8n-demo-component@^0.1.0 failed to resolve
```

**原因：**
某些包可能：
- 不存在于 npm registry
- 版本号不正确
- 是私有包或示例包名
- 已被废弃或删除

**解决方案：**

1. **验证包是否存在**
```bash
# 在 npm 上搜索包
npm search @n8n_io/n8n-demo-component

# 或访问
https://www.npmjs.com/package/@n8n_io/n8n-demo-component
```

2. **从 package.json 中移除不存在的包**
```json
{
  "dependencies": {
    // 移除不存在的包
    // "@n8n_io/n8n-demo-component": "^0.1.0"
  }
}
```

3. **寻找替代方案**
- 查找官方文档确认正确的包名
- 使用其他类似功能的包
- 自行实现所需功能

4. **清理并重新安装**
```bash
rm -rf node_modules package-lock.json
npm install
```

**特定案例 - @n8n_io/n8n-demo-component：**

这个包在原始项目规划中提到，但实际上不存在于 npm registry。如果需要集成 n8n 工作流展示功能，可以：

- 使用 iframe 嵌入 n8n 工作流
- 使用 n8n 的官方 API 获取工作流数据
- 创建自定义组件展示工作流 JSON

参考 [`src/components/workflow/WorkflowDetail.astro`](src/components/workflow/WorkflowDetail.astro:1) 中的注释说明。

---

## ⚡ 性能问题

### 问题 1: 页面加载缓慢

**症状：**
首次加载时间 > 5 秒

**解决方案：**

1. **分析性能瓶颈**
```bash
# 运行 Lighthouse
npx lighthouse https://your-site.com --view
```

2. **优化图片**
```bash
# 使用 WebP 格式
# 启用懒加载
<img loading="lazy" src="image.jpg" alt="..." />
```

3. **减少 JavaScript 大小**
```javascript
// 使用动态导入
const module = await import('./heavy-module.js');
```

4. **启用缓存**
```
# public/_headers
/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

---

### 问题 2: 内存泄漏

**症状：**
页面使用一段时间后变慢

**解决方案：**

1. **检查事件监听器**
```javascript
// 错误示例
element.addEventListener('click', handler);

// 正确示例
const controller = new AbortController();
element.addEventListener('click', handler, { signal: controller.signal });
// 清理时
controller.abort();
```

2. **使用 Chrome DevTools Memory Profiler**
```bash
# F12 → Memory → Take heap snapshot
# 执行操作
# 再次 Take heap snapshot
# 比较差异
```

---

### 问题 3: API 响应慢

**症状：**
API 请求时间 > 2 秒

**解决方案：**

1. **添加数据库索引**
```sql
CREATE INDEX idx_workflows_slug ON workflows(slug);
```

2. **实现缓存**
```typescript
// 使用内存缓存
const cache = new Map();

export async function getWorkflows() {
  if (cache.has('workflows')) {
    return cache.get('workflows');
  }
  
  const data = await fetchFromDB();
  cache.set('workflows', data);
  return data;
}
```

3. **使用 CDN**
```javascript
// 配置 Netlify CDN 缓存
// netlify.toml
[[headers]]
  for = "/api/*"
  [headers.values]
    Cache-Control = "public, max-age=300"
```

---

## 🎨 样式问题

### 问题 1: Tailwind 样式不生效

**症状：**
Tailwind 类名不起作用

**解决方案：**

1. **检查 Tailwind 配置**
```javascript
// tailwind.config.js
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // ...
}
```

2. **确保导入了 Tailwind**
```css
/* src/styles/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. **清除缓存并重建**
```bash
rm -rf .astro node_modules/.vite
npm run dev
```

---

### 问题 2: 样式冲突

**症状：**
组件样式互相覆盖

**解决方案：**

1. **使用 Astro 的 scoped 样式**
```astro
<style>
  /* 自动作用域化 */
  .button {
    color: blue;
  }
</style>
```

2. **使用 CSS Modules**
```astro
<style module>
  .button {
    color: blue;
  }
</style>
```

3. **增加选择器特异性**
```css
.workflow-card .button {
  /* 更具体的选择器 */
}
```

---

### 问题 3: 响应式断点不工作

**症状：**
移动端样式不正确

**解决方案：**

1. **检查 viewport meta 标签**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

2. **使用正确的 Tailwind 断点**
```html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- sm: 640px, md: 768px, lg: 1024px, xl: 1280px -->
</div>
```

3. **测试不同设备**
```bash
# Chrome DevTools
# F12 → Toggle device toolbar (Ctrl+Shift+M)
```

---

## 🔌 API 问题

### 问题 1: CORS 错误

**症状：**
```bash
Access to fetch at 'https://api.example.com' from origin 'https://your-site.com' has been blocked by CORS policy
```

**解决方案：**

1. **配置 Netlify Headers**
```
# public/_headers
/api/*
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Methods: GET, POST, OPTIONS
  Access-Control-Allow-Headers: Content-Type
```

2. **在 API 端点中设置 CORS**
```typescript
// src/pages/api/data.json.ts
export async function GET() {
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
```

---

### 问题 2: API 返回 500 错误

**症状：**
```bash
Internal Server Error
```

**解决方案：**

1. **添加错误处理**
```typescript
export async function GET() {
  try {
    const data = await fetchData();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
```

2. **检查日志**
```bash
# Netlify Functions 日志
# Dashboard → Functions → 查看日志
```

---

## 🆘 获取帮助

### 社区资源

- **Astro Discord**: https://astro.build/chat
- **Astro GitHub**: https://github.com/withastro/astro
- **Stack Overflow**: 标签 `astro`
- **Supabase Discord**: https://discord.supabase.com/

### 调试技巧

1. **启用详细日志**
```bash
DEBUG=* npm run dev
```

2. **使用浏览器开发者工具**
```bash
# Chrome DevTools (F12)
# - Console: 查看错误
# - Network: 查看请求
# - Performance: 分析性能
# - Application: 查看存储
```

3. **检查构建输出**
```bash
npm run build -- --verbose
```

---

## 📚 相关文档

- [部署检查清单](./DEPLOYMENT_CHECKLIST.md)
- [测试指南](./TESTING.md)
- [项目总结](./PROJECT_SUMMARY.md)
- [API 文档](./API.md)

---

## 🔄 报告问题

如果以上解决方案都无法解决您的问题，请：

1. 在 GitHub 上创建 Issue
2. 提供详细的错误信息
3. 包含复现步骤
4. 附上环境信息（Node.js 版本、操作系统等）

**Issue 模板：**
```markdown
## 问题描述
[简要描述问题]

## 复现步骤
1. 
2. 
3. 

## 预期行为
[描述预期的正确行为]

## 实际行为
[描述实际发生的情况]

## 环境信息
- Node.js 版本: 
- npm 版本: 
- 操作系统: 
- 浏览器: 

## 错误日志
```
[粘贴错误日志]
```

## 截图
[如果适用，添加截图]
```
