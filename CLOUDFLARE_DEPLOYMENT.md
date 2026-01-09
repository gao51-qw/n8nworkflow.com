# Cloudflare Pages 部署指南

本指南将详细介绍如何将 n8n Workflows 网站部署到 Cloudflare Pages，包含三种部署方法和完整的配置说明。

## 📋 目录

- [前置准备](#前置准备)
- [部署方法](#部署方法)
  - [方法一：GitHub 自动部署（推荐）](#方法一github-自动部署推荐)
  - [方法二：Wrangler CLI 部署](#方法二wrangler-cli-部署)
  - [方法三：Dashboard 手动部署](#方法三dashboard-手动部署)
- [配置优化](#配置优化)
- [故障排除](#故障排除)
- [验证和测试](#验证和测试)

---

## 前置准备

### 1. 账号注册

#### Cloudflare 账号
1. 访问 [Cloudflare 官网](https://www.cloudflare.com/)
2. 点击右上角 "Sign Up" 按钮
3. 填写邮箱和密码完成注册
4. 验证邮箱地址
5. 登录后进入 Cloudflare Dashboard

#### GitHub 账号（方法一需要）
1. 访问 [GitHub](https://github.com/)
2. 注册并验证账号
3. 确保项目代码已推送到 GitHub 仓库

### 2. 必需工具

#### Node.js 和 npm
```bash
# 检查是否已安装
node --version  # 需要 v18.14.1 或更高版本
npm --version   # 需要 v9.0.0 或更高版本

# Windows 安装（如未安装）
# 下载并安装：https://nodejs.org/
```

#### Git（方法一和二需要）
```bash
# 检查是否已安装
git --version

# Windows 安装（如未安装）
# 下载并安装：https://git-scm.com/
```

#### Wrangler CLI（方法二需要）
```bash
# 全局安装 Wrangler
npm install -g wrangler

# 验证安装
wrangler --version
```

### 3. 环境变量准备

在部署前，准备好以下环境变量：

```env
# Supabase 配置（必需）
PUBLIC_SUPABASE_URL=your_supabase_project_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# 站点配置（可选）
PUBLIC_SITE_URL=https://your-domain.pages.dev
PUBLIC_SITE_NAME=n8n Workflows
PUBLIC_SITE_DESCRIPTION=Discover and share n8n workflow templates

# 分析工具（可选）
PUBLIC_GA_ID=your_google_analytics_id
PUBLIC_UMAMI_WEBSITE_ID=your_umami_website_id
PUBLIC_UMAMI_SRC=your_umami_script_url
```

**获取 Supabase 凭证：**
1. 登录 [Supabase Dashboard](https://app.supabase.com/)
2. 选择你的项目
3. 点击左侧 "Settings" → "API"
4. 复制 "Project URL" 作为 `PUBLIC_SUPABASE_URL`
5. 复制 "anon public" key 作为 `PUBLIC_SUPABASE_ANON_KEY`

---

## 部署方法

## 方法一：GitHub 自动部署（推荐）

这是最推荐的方法，支持自动化部署和持续集成。

### 步骤 1：准备 GitHub 仓库

```bash
# 1. 初始化 Git 仓库（如果还没有）
git init

# 2. 添加所有文件
git add .

# 3. 提交更改
git commit -m "Initial commit for Cloudflare Pages deployment"

# 4. 添加远程仓库
git remote add origin https://github.com/your-username/your-repo.git

# 5. 推送到 GitHub
git push -u origin main
```

### 步骤 2：连接 Cloudflare Pages

1. **登录 Cloudflare Dashboard**
   - 访问 https://dash.cloudflare.com/
   - 登录你的账号

2. **创建新项目**
   - 在左侧菜单中选择 "Workers & Pages"
   - 点击 "Create application" 按钮
   - 选择 "Pages" 标签
   - 点击 "Connect to Git" 按钮

3. **授权 GitHub**
   - 选择 "GitHub" 作为 Git 提供商
   - 点击 "Connect GitHub" 按钮
   - 在弹出窗口中授权 Cloudflare 访问你的 GitHub 账号
   - 选择要授权的仓库（可以选择所有仓库或特定仓库）

4. **选择仓库**
   - 在仓库列表中找到你的项目
   - 点击仓库名称旁边的 "Begin setup" 按钮

### 步骤 3：配置构建设置

在 "Set up builds and deployments" 页面配置以下内容：

```yaml
# 项目名称
Project name: n8n-workflows  # 可自定义，将成为默认域名的一部分

# 生产分支
Production branch: main  # 或 master，根据你的主分支名称

# 构建设置
Framework preset: Astro  # 从下拉菜单选择

# 构建命令
Build command: npm run build

# 构建输出目录
Build output directory: dist

# Root 目录（通常留空）
Root directory (optional): 留空

# Node.js 版本（在环境变量中设置）
Environment variables:
  NODE_VERSION: 18.14.1
```

### 步骤 4：设置环境变量

在同一页面向下滚动到 "Environment variables" 部分：

1. 点击 "Add variable" 按钮
2. 逐个添加以下变量：

```env
# 必需变量
PUBLIC_SUPABASE_URL = your_supabase_project_url
PUBLIC_SUPABASE_ANON_KEY = your_supabase_anon_key

# 可选变量
PUBLIC_SITE_URL = https://n8n-workflows.pages.dev
PUBLIC_SITE_NAME = n8n Workflows
PUBLIC_SITE_DESCRIPTION = Discover and share n8n workflow templates
```

**注意：**
- 每个变量需要单独添加
- 敏感信息（如 API 密钥）会自动加密
- 可以为不同环境（生产/预览）设置不同的值

### 步骤 5：开始部署

1. 检查所有配置是否正确
2. 点击页面底部的 "Save and Deploy" 按钮
3. Cloudflare 将开始构建和部署过程

### 步骤 6：监控部署进度

部署开始后，你会看到：

1. **构建日志** - 实时显示构建过程
2. **部署状态** - 构建中/成功/失败
3. **预计时间** - 通常需要 2-5 分钟

### 步骤 7：访问部署的网站

部署成功后：
- 默认 URL 格式：`https://your-project-name.pages.dev`
- 每次推送到主分支都会自动触发新的部署

**触发条件：**
- 推送到生产分支（main/master）→ 生产环境部署
- 推送到其他分支 → 预览环境部署
- 创建 Pull Request → 自动创建预览部署

---

## 方法二：Wrangler CLI 部署

适合喜欢命令行操作或需要本地控制部署流程的开发者。

### 步骤 1：安装和配置 Wrangler

```bash
# 1. 全局安装 Wrangler（如果还没有）
npm install -g wrangler

# 2. 验证安装
wrangler --version

# 3. 登录 Cloudflare 账号
wrangler login
```

执行 `wrangler login` 后：
- 会自动打开浏览器
- 显示授权页面
- 点击 "Allow" 授权
- 看到成功消息后关闭浏览器

### 步骤 2：创建 Wrangler 配置文件

在项目根目录创建 `wrangler.toml` 文件：

```toml
# wrangler.toml
name = "n8n-workflows"
compatibility_date = "2024-01-01"

# Pages 配置
pages_build_output_dir = "dist"

# 环境变量（仅用于本地开发）
[vars]
PUBLIC_SITE_NAME = "n8n Workflows"
PUBLIC_SITE_DESCRIPTION = "Discover and share n8n workflow templates"

# 注意：敏感信息不要放在这里，使用 wrangler secret 命令
```

### 步骤 3：设置环境变量

```bash
# 通过命令行设置（推荐用于敏感信息）
wrangler pages secret put PUBLIC_SUPABASE_URL
# 输入值后按 Enter

wrangler pages secret put PUBLIC_SUPABASE_ANON_KEY
# 输入值后按 Enter
```

创建 `.dev.vars` 文件（仅用于本地开发）：

```env
PUBLIC_SUPABASE_URL=your_supabase_project_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
PUBLIC_SITE_URL=http://localhost:4321
```

**重要：** 将 `.dev.vars` 添加到 `.gitignore`

### 步骤 4：本地测试

```bash
# 1. 安装依赖
npm install

# 2. 构建项目
npm run build

# 3. 本地预览
wrangler pages dev dist
```

### 步骤 5：部署到 Cloudflare Pages

```bash
# 首次部署（创建新项目）
wrangler pages deploy dist --project-name=n8n-workflows

# 后续部署（项目已存在）
wrangler pages deploy dist
```

### 创建部署脚本

在 `package.json` 中添加脚本：

```json
{
  "scripts": {
    "build": "astro build",
    "preview": "astro preview",
    "deploy": "npm run build && wrangler pages deploy dist",
    "deploy:preview": "npm run build && wrangler pages deploy dist --branch=preview"
  }
}
```

---

## 方法三：Dashboard 手动部署

适合快速测试或不使用 Git 的场景。

### 步骤 1：构建项目

```bash
# 1. 安装依赖
npm install

# 2. 构建项目
npm run build
```

### 步骤 2：创建 ZIP 压缩包

**Windows 方法：**
1. 选中 `dist` 文件夹内的所有文件（不是文件夹本身）
2. 右键点击 → "发送到" → "压缩(zipped)文件夹"
3. 命名为 `deployment.zip`

**命令行方法：**
```bash
# Windows (使用 PowerShell)
Compress-Archive -Path dist\* -DestinationPath deployment.zip
```

**重要：** 确保 ZIP 文件的根目录直接包含 `index.html`

### 步骤 3：上传到 Cloudflare Pages

1. **访问 Cloudflare Dashboard**
   - 登录 https://dash.cloudflare.com/
   - 选择 "Workers & Pages"

2. **创建新项目**
   - 点击 "Create application"
   - 选择 "Pages" 标签
   - 点击 "Upload assets" 按钮

3. **上传文件**
   - 输入项目名称
   - 上传 `deployment.zip`
   - 等待上传完成

4. **设置环境变量**
   - 点击 "Settings" → "Environment variables"
   - 添加所有必需的环境变量
   - 重新部署

### 限制和注意事项

**手动部署的限制：**
- ❌ 不支持自动部署
- ❌ 不支持预览部署
- ❌ 需要手动管理每次更新
- ✅ 适合快速测试
- ✅ 不需要 Git 仓库

---

## 配置优化

### 1. 自定义域名设置

#### 添加自定义域名

1. 进入项目页面 → "Custom domains"
2. 点击 "Set up a custom domain"
3. 输入域名（例如：`workflows.example.com`）

#### 配置 DNS 记录

**域名已在 Cloudflare：**
- 自动添加 CNAME 记录

**域名在其他服务商：**
```
类型: CNAME
名称: workflows
值: your-project.pages.dev
TTL: 3600
```

#### 域名重定向

创建 `public/_redirects` 文件：

```
# 将 www 重定向到根域名
https://www.example.com/* https://example.com/:splat 301

# 将旧路径重定向到新路径
/old-page /new-page 301
```

### 2. 环境变量管理

#### 区分生产和预览环境

在 Cloudflare Dashboard 中为每个变量选择应用范围：
- **Production**：仅生产环境
- **Preview**：仅预览环境
- **Both**：两个环境都使用

### 3. 构建优化

#### 优化构建配置

在 `astro.config.mjs` 中：

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    compressHTML: true,
    assets: '_astro',
  },
  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
});
```

#### 启用构建缓存

在 Cloudflare Pages 设置中：
1. 进入 "Settings" → "Builds & deployments"
2. 启用 "Build cache"

### 4. 缓存策略

创建 `public/_headers` 文件：

```
# 全局安全头
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

# HTML 文件 - 不缓存
/*.html
  Cache-Control: public, max-age=0, must-revalidate

# 静态资源 - 长期缓存
/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/fonts/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=31536000, immutable

# API 响应 - 短期缓存
/api/*
  Cache-Control: public, max-age=300, s-maxage=600
```

---

## 故障排除

### 常见部署错误

#### 错误 1：构建失败 - "Module not found"

**错误信息：**
```
Error: Cannot find module 'astro'
```

**解决方案：**
```bash
# 1. 清除缓存
rm -rf node_modules package-lock.json

# 2. 重新安装依赖
npm install

# 3. 本地测试构建
npm run build

# 4. 检查 Cloudflare 的 Node 版本
# 在环境变量中添加：NODE_VERSION=18.14.1
```

#### 错误 2：构建失败 - "Out of memory"

**解决方案：**

在 `package.json` 中修改构建脚本：

```json
{
  "scripts": {
    "build": "NODE_OPTIONS='--max-old-space-size=4096' astro build"
  }
}
```

或在 Cloudflare 环境变量中添加：
```
NODE_OPTIONS=--max-old-space-size=4096
```

#### 错误 3：环境变量未生效

**解决方案：**

1. 检查变量名是否以 `PUBLIC_` 开头（Astro 要求）
2. 确认变量值正确
3. 添加或修改环境变量后必须重新部署

#### 错误 4：404 错误 - 页面未找到

**解决方案：**

创建或更新 `public/_redirects` 文件：

```
# SPA 回退规则
/*    /index.html   200
```

#### 错误 5：CORS 错误

**解决方案：**

1. 检查 Supabase 配置，确保站点 URL 在允许列表中
2. 在 `public/_headers` 中添加 CORS 头：

```
/api/*
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Methods: GET, POST, OPTIONS
```

### 调试技巧

#### 1. 查看构建日志

在 Cloudflare Dashboard 中：
- 进入项目 → "Deployments"
- 点击具体的部署记录
- 查看完整的构建日志

#### 2. 本地复现问题

```bash
# 清理环境
rm -rf node_modules dist .astro

# 使用生产环境变量
cp .env.production .env

# 安装依赖
npm ci

# 构建
npm run build

# 预览
npm run preview
```

#### 3. 使用 Wrangler 本地调试

```bash
# 构建项目
npm run build

# 使用 Wrangler 本地运行
wrangler pages dev dist

# 查看详细日志
wrangler pages dev dist --log-level=debug
```

---

## 验证和测试

### 部署后检查清单

#### ✅ 基础功能检查

- [ ] 网站可访问
- [ ] 页面导航正常
- [ ] 响应式设计正常
- [ ] 搜索功能正常
- [ ] 筛选和排序正常

#### ✅ 数据和 API 检查

- [ ] 工作流列表正常显示
- [ ] 分类数据正确
- [ ] API 端点正常工作
- [ ] 环境变量生效

#### ✅ SEO 和元数据检查

- [ ] 页面标题唯一
- [ ] Meta 描述正确
- [ ] Open Graph 标签正确
- [ ] robots.txt 可访问

#### ✅ 性能检查

- [ ] 首次加载 < 3 秒
- [ ] 图片已压缩
- [ ] CSS/JS 已压缩
- [ ] 缓存策略正确

### 性能测试

#### 1. Lighthouse 测试

在 Chrome DevTools 中：
1. 打开开发者工具（F12）
2. 切换到 "Lighthouse" 标签
3. 运行测试

**目标分数：**
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

#### 2. 在线测试工具

- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)

### 监控和维护

#### 设置监控

1. **Cloudflare Analytics** - 自动启用
2. **Google Analytics** - 设置 `PUBLIC_GA_ID`
3. **Uptime 监控** - 使用 [UptimeRobot](https://uptimerobot.com/)

#### 定期维护任务

**每周：**
- [ ] 检查 Cloudflare Analytics
- [ ] 查看错误日志
- [ ] 检查网站可用性

**每月：**
- [ ] 更新依赖包
- [ ] 运行性能测试
- [ ] 检查 SEO 排名

---

## 附录

### 快速参考命令

```bash
# 本地开发
npm install              # 安装依赖
npm run dev             # 启动开发服务器
npm run build           # 构建生产版本
npm run preview         # 预览构建结果

# Wrangler 部署
wrangler login          # 登录 Cloudflare
wrangler pages deploy dist  # 部署到 Pages

# Git 操作
git add .               # 添加所有更改
git commit -m "message" # 提交更改
git push                # 推送到远程仓库
```

### 有用的链接

**官方文档：**
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Astro 文档](https://docs.astro.build/)
- [Wrangler 文档](https://developers.cloudflare.com/workers/wrangler/)

**工具：**
- [Cloudflare Dashboard](https://dash.cloudflare.com/)
- [GitHub](https://github.com/)
- [Supabase Dashboard](https://app.supabase.com/)

**测试工具：**
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

### 环境变量模板

```env
# .env.example - 复制此文件为 .env.production

# ===== 必需配置 =====
PUBLIC_SUPABASE_URL=https://your-project.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# ===== 站点配置 =====
PUBLIC_SITE_URL=https://your-domain.com
PUBLIC_SITE_NAME=n8n Workflows
PUBLIC_SITE_DESCRIPTION=Discover and share n8n workflow templates

# ===== 分析工具（可选）=====
PUBLIC_GA_ID=
PUBLIC_UMAMI_WEBSITE_ID=
PUBLIC_UMAMI_SRC=
```

---

## 总结

本指南涵盖了将 n8n Workflows 网站部署到 Cloudflare Pages 的完整流程：

✅ **三种部署方法**
- GitHub 自动部署（推荐用于生产环境）
- Wrangler CLI 部署（适合开发者）
- Dashboard 手动部署（适合快速测试）

✅ **完整配置**
- 环境变量设置
- 自定义域名配置
- 缓存策略优化
- 性能优化建议

✅ **故障排除**
- 常见错误解决方案
- 调试技巧
- 性能问题排查

✅ **验证测试**
- 部署后检查清单
- 性能测试方法
- 监控和维护

### 推荐部署流程

1. **开发阶段** - 使用本地开发环境
2. **测试阶段** - 推送到 GitHub 分支，自动创建预览部署
3. **生产部署** - 合并到主分支，自动部署到生产环境
4. **维护阶段** - 定期检查性能和更新依赖

### 下一步

部署成功后，你可以：
1. 配置自定义域名
2. 启用分析工具
3. 优化性能
4. 设置监控

**需要帮助？**
- 查看本指南的[故障排除](#故障排除)部分
- 访问 [Cloudflare Community](https://community.cloudflare.com/)
- 查看项目的 [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) 文件

祝部署顺利！🚀
