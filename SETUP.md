# N8N Workflows 网站设置指南

## 快速开始

### 1. 安装依赖

首先需要安装 `@astrojs/rss` 包来支持 RSS Feed 功能：

```bash
npm install @astrojs/rss
```

### 2. 环境变量配置

复制 `.env.example` 文件为 `.env` 并填入实际值：

```bash
cp .env.example .env
```

编辑 `.env` 文件：

```bash
# Supabase 配置
PUBLIC_SUPABASE_URL=https://your-project.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# 网站配置
PUBLIC_SITE_URL=https://n8nworkflow.com
PUBLIC_SITE_NAME=N8N Workflows

# Google Analytics
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# API 配置
API_BASE_URL=https://n8nworkflow.com/api

# 功能开关
ENABLE_ANALYTICS=true
ENABLE_SEARCH=true
```

### 3. 生成图片资源

#### 方法 1: 使用现有 SVG 生成 WebP

如果已安装 ImageMagick：

```bash
# 生成工作流占位图
convert public/images/placeholder-workflow.svg -resize 1280x720 public/images/placeholder-workflow.webp

# 生成 favicon.ico
convert public/favicon.svg -resize 32x32 public/favicon.ico
```

#### 方法 2: 使用在线工具

访问以下网站生成所需图片：
- [Favicon Generator](https://realfavicongenerator.net/) - 生成各种尺寸的图标
- [Squoosh](https://squoosh.app/) - 转换和优化图片

#### 方法 3: 手动创建

参考 [`public/images/README.md`](public/images/README.md) 中的详细说明。

### 4. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:4321`

### 5. 构建生产版本

```bash
npm run build
```

### 6. 预览生产构建

```bash
npm run preview
```

## 部署到 Cloudflare Pages

### 方法 1: 通过 GitHub Actions（推荐）

1. 在 GitHub 仓库设置中添加以下 Secrets：
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`
   - `PUBLIC_GA_MEASUREMENT_ID`

2. 推送代码到 `main` 分支，GitHub Actions 会自动部署

### 方法 2: 手动部署

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 Pages 部分
3. 创建新项目并连接 GitHub 仓库
4. 配置构建设置：
   - 构建命令: `npm run build`
   - 构建输出目录: `dist`
   - Node 版本: `18`
5. 添加环境变量
6. 部署

## 验证配置

### 检查 RSS Feed

访问 `http://localhost:4321/rss.xml` 确认 RSS Feed 正常工作。

### 检查 Sitemap

构建后检查 `dist/sitemap-0.xml` 文件是否生成。

### 检查 PWA Manifest

访问 `http://localhost:4321/manifest.json` 确认 manifest 文件可访问。

### 检查安全头

部署后使用 [Security Headers](https://securityheaders.com/) 检查安全头配置。

### 检查性能

使用以下工具测试性能：
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- Chrome DevTools Lighthouse

## 常见问题

### Q: RSS Feed 报错找不到模块

**A**: 需要安装 `@astrojs/rss` 包：
```bash
npm install @astrojs/rss
```

### Q: 图片显示占位图

**A**: 需要生成实际的图片文件，参考上面的"生成图片资源"部分。

### Q: TypeScript 类型错误

**A**: 某些类型错误是正常的，因为使用了路径别名。确保 `tsconfig.json` 中配置了正确的路径映射。

### Q: Analytics 不工作

**A**: 确保：
1. 已设置 `PUBLIC_GA_MEASUREMENT_ID` 环境变量
2. 在生产环境（`npm run build` 后）
3. 浏览器没有阻止 Google Analytics

### Q: 部署后 404 错误

**A**: 检查：
1. `public/_redirects` 文件是否正确
2. Cloudflare Pages 设置中的构建输出目录是否为 `dist`
3. 路由是否正确配置

## 开发工作流

### 1. 创建新功能分支

```bash
git checkout -b feature/your-feature-name
```

### 2. 开发和测试

```bash
npm run dev
```

### 3. 代码格式化

```bash
npm run format
```

### 4. 构建测试

```bash
npm run build
npm run preview
```

### 5. 提交代码

```bash
git add .
git commit -m "feat: your feature description"
git push origin feature/your-feature-name
```

### 6. 创建 Pull Request

在 GitHub 上创建 PR，等待 CI/CD 检查通过后合并到 `main` 分支。

## 性能优化检查清单

部署前确保：

- [ ] 所有图片已优化（WebP 格式）
- [ ] 未使用的代码已移除
- [ ] 环境变量已正确配置
- [ ] RSS Feed 可访问
- [ ] Sitemap 已生成
- [ ] PWA Manifest 正确配置
- [ ] 安全头已设置
- [ ] Analytics 正常工作
- [ ] 404/500 页面正常显示
- [ ] 移动端响应式正常

## 更多资源

- [Astro 文档](https://docs.astro.build/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Supabase 文档](https://supabase.com/docs)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [OPTIMIZATION.md](OPTIMIZATION.md) - 详细的优化文档
- [ARCHITECTURE.md](ARCHITECTURE.md) - 架构设计文档

## 支持

如有问题，请：
1. 查看文档
2. 搜索 GitHub Issues
3. 创建新的 Issue
4. 联系团队

---

**最后更新**: 2026-01-09
