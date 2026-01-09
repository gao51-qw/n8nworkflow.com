# N8N Workflows

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![Astro](https://img.shields.io/badge/Astro-4.0-FF5D01.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg)

一个基于 Astro 构建的现代化 N8N 工作流展示平台，用于发现、浏览和分享自动化工作流。

[在线演示](https://n8nworkflow.com) · [报告问题](https://github.com/your-org/n8nworkflows.xyz/issues) · [功能建议](https://github.com/your-org/n8nworkflows.xyz/issues)

</div>

---

## 📋 目录

- [项目简介](#-项目简介)
- [功能特性](#-功能特性)
- [技术栈](#️-技术栈)
- [快速开始](#-快速开始)
- [项目结构](#-项目结构)
- [开发命令](#-开发命令)
- [配置说明](#-配置说明)
- [部署](#-部署)
- [文档](#-文档)
- [贡献](#-贡献)
- [许可证](#-许可证)

---

## 🎯 项目简介

N8N Workflows 是一个现代化的工作流展示网站，旨在帮助用户发现、学习和分享 N8N 自动化工作流。

### 核心价值

- 🔍 **轻松发现** - 浏览和搜索数千个自动化工作流
- 📊 **智能筛选** - 按分类、作者、复杂度快速定位
- 🎨 **优雅体验** - 现代化 UI 设计，支持明暗主题
- 📱 **全端适配** - 完美支持桌面、平板和移动设备
- ⚡ **极速加载** - 静态站点生成，性能卓越
- 🔒 **SEO 优化** - 完整的搜索引擎优化

---

## ✨ 功能特性

### 核心功能

- ✅ **Workflow 浏览** - 网格和列表视图展示
- ✅ **高级搜索** - 全文搜索和实时建议
- ✅ **多维筛选** - 分类、作者、复杂度筛选
- ✅ **智能排序** - 最新、最热门、浏览量排序
- ✅ **无限滚动** - 流畅的内容加载体验
- ✅ **详情页面** - 完整的 Workflow 信息展示
- ✅ **相关推荐** - 智能推荐相似 Workflow
- ✅ **作者系统** - 作者主页和作品集

### 用户体验

- 🎨 **主题切换** - 亮色/暗色模式自由切换
- 📱 **响应式设计** - 适配所有设备尺寸
- ♿ **可访问性** - WCAG 2.1 AA 级别合规
- 🌐 **国际化** - 多语言支持（计划中）
- 🔔 **通知系统** - 实时更新提醒（计划中）

### 性能优化

- ⚡ **静态生成** - Astro SSG 极速加载
- 🖼️ **图片优化** - 懒加载和 WebP 格式
- 📦 **代码分割** - 按需加载 JavaScript
- 🗜️ **资源压缩** - Gzip/Brotli 压缩
- 🌐 **CDN 加速** - 全球内容分发网络

### SEO 优化

- 📝 **Meta 标签** - 完整的页面元信息
- 🔗 **Open Graph** - 社交媒体分享优化
- 🗺️ **Sitemap** - 自动生成站点地图
- 🤖 **Robots.txt** - 搜索引擎爬虫配置
- 📊 **结构化数据** - Schema.org 标记
- 📡 **RSS Feed** - 订阅支持

---

## 🛠️ 技术栈

### 前端框架
- **[Astro 4.0](https://astro.build/)** - 现代静态站点生成器
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - 类型安全的 JavaScript
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - 实用优先的 CSS 框架

### 后端服务
- **[Supabase](https://supabase.com/)** - PostgreSQL 数据库和认证
- **[@supabase/supabase-js](https://github.com/supabase/supabase-js)** - JavaScript 客户端

### 开发工具
- **[Vite](https://vitejs.dev/)** - 快速的构建工具
- **[Prettier](https://prettier.io/)** - 代码格式化
- **[ESLint](https://eslint.org/)** - 代码质量检查

### 部署平台
- **[Netlify](https://www.netlify.com/)** - 静态站点托管（推荐）
- **[Cloudflare Pages](https://pages.cloudflare.com/)** - 备选方案
- **[Docker](https://www.docker.com/)** - 容器化部署

---

## 🚀 快速开始

### 环境要求

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 或 **pnpm** >= 8.0.0
- **Git**

### 方法 1: 自动设置（推荐）

#### Linux/Mac
```bash
git clone https://github.com/your-org/n8nworkflows.xyz.git
cd n8nworkflows.xyz
chmod +x scripts/setup.sh
./scripts/setup.sh
```

#### Windows
```bash
git clone https://github.com/your-org/n8nworkflows.xyz.git
cd n8nworkflows.xyz
scripts\setup.bat
```

### 方法 2: 手动设置

#### 1. 克隆项目
```bash
git clone https://github.com/your-org/n8nworkflows.xyz.git
cd n8nworkflows.xyz
```

#### 2. 安装依赖
```bash
npm install
```

#### 3. 配置环境变量
```bash
cp .env.example .env
```

编辑 `.env` 文件，填入必要的配置：

```env
# Supabase 配置
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key

# 网站配置
PUBLIC_SITE_URL=http://localhost:4321
PUBLIC_SITE_NAME=N8N Workflows

# 可选配置
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

#### 4. 启动开发服务器
```bash
npm run dev
```

访问 [http://localhost:4321](http://localhost:4321) 查看网站。

### 验证安装

运行验证脚本检查项目配置：

```bash
node scripts/validate.js
```

---

## 📁 项目结构

```
n8nworkflows.xyz/
├── .github/                    # GitHub 配置
│   └── workflows/             # CI/CD 工作流
├── public/                     # 静态资源
│   ├── images/                # 图片资源
│   ├── fonts/                 # 字体文件
│   └── robots.txt             # 搜索引擎配置
├── scripts/                    # 自动化脚本
│   ├── setup.sh               # Linux/Mac 设置
│   ├── setup.bat              # Windows 设置
│   └── validate.js            # 项目验证
├── src/
│   ├── components/            # 组件
│   │   ├── common/           # 通用组件
│   │   ├── ui/               # UI 组件
│   │   ├── workflow/         # Workflow 组件
│   │   └── seo/              # SEO 组件
│   ├── layouts/               # 布局
│   │   ├── BaseLayout.astro
│   │   └── MainLayout.astro
│   ├── pages/                 # 页面路由
│   │   ├── index.astro       # 首页
│   │   ├── workflows/        # Workflow 页面
│   │   ├── categories/       # 分类页面
│   │   ├── authors/          # 作者页面
│   │   └── api/              # API 端点
│   ├── lib/                   # 库文件
│   │   ├── services/         # 服务层
│   │   ├── types/            # 类型定义
│   │   └── utils/            # 工具函数
│   ├── data/                  # 静态数据
│   ├── scripts/               # 客户端脚本
│   └── styles/                # 样式文件
├── .env.example               # 环境变量示例
├── .env.development           # 开发环境配置
├── .env.production            # 生产环境配置
├── astro.config.mjs           # Astro 配置
├── tailwind.config.js         # Tailwind 配置
├── tsconfig.json              # TypeScript 配置
├── Dockerfile                 # Docker 配置
├── docker-compose.yml         # Docker Compose
└── package.json               # 项目依赖
```

详细结构说明请参考 [`PROJECT_SUMMARY.md`](PROJECT_SUMMARY.md)。

---

## 📦 开发命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器（http://localhost:4321） |
| `npm run build` | 构建生产版本到 `dist/` 目录 |
| `npm run preview` | 预览生产构建 |
| `npm run format` | 格式化代码（Prettier） |
| `node scripts/validate.js` | 验证项目配置 |

---

## 🔧 配置说明

### 必需的环境变量

```env
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-anon-key
PUBLIC_SITE_URL=your-site-url
PUBLIC_SITE_NAME=your-site-name
```

### 可选的环境变量

```env
GOOGLE_ANALYTICS_ID=your-ga-id
SENTRY_DSN=your-sentry-dsn
```

详细配置说明：
- 开发环境：[`.env.development`](.env.development)
- 生产环境：[`.env.production`](.env.production)

---

## 🚢 部署

### Netlify 部署（推荐）

#### 方法 1: Git 自动部署
1. 连接 GitHub 仓库到 Netlify
2. 配置构建设置：
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18
3. 添加环境变量
4. 触发部署

#### 方法 2: CLI 部署
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Docker 部署

```bash
# 构建镜像
docker build -t n8nworkflows:latest .

# 运行容器
docker run -p 4321:4321 --env-file .env n8nworkflows:latest

# 使用 Docker Compose
docker-compose up -d
```

### 其他平台

项目也支持部署到：
- Vercel
- Cloudflare Pages
- GitHub Pages
- 任何支持静态站点的平台

详细部署指南请参考 [`DEPLOYMENT_CHECKLIST.md`](DEPLOYMENT_CHECKLIST.md)。

---

## 📚 文档

### 核心文档
- [📖 设置指南](SETUP.md) - 详细的安装和配置说明
- [🏗️ 架构文档](ARCHITECTURE.md) - 项目架构和设计决策
- [🧩 组件文档](COMPONENTS.md) - 组件使用指南
- [🔌 API 文档](API.md) - API 端点说明
- [📊 项目总结](PROJECT_SUMMARY.md) - 完整的项目概览

### 开发文档
- [⚡ 优化指南](OPTIMIZATION.md) - 性能优化最佳实践
- [🧪 测试指南](TESTING.md) - 测试方法和工具
- [🔧 故障排除](TROUBLESHOOTING.md) - 常见问题解决方案

### 部署文档
- [✅ 部署检查清单](DEPLOYMENT_CHECKLIST.md) - 部署前检查项

### 贡献文档
- [🤝 贡献指南](CONTRIBUTING.md) - 如何参与项目
- [📝 更新日志](CHANGELOG.md) - 版本更新记录
- [📄 许可证](LICENSE) - MIT 许可证

---

## 🎓 学习资源

### 官方文档
- [Astro 文档](https://docs.astro.build/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Supabase 文档](https://supabase.com/docs)
- [TypeScript 文档](https://www.typescriptlang.org/docs/)

### 教程和指南
- [Astro 快速入门](https://docs.astro.build/en/getting-started/)
- [Tailwind CSS 教程](https://tailwindcss.com/docs/utility-first)
- [Supabase 入门](https://supabase.com/docs/guides/getting-started)

---

## 🤝 贡献

我们欢迎所有形式的贡献！无论是报告 Bug、提出新功能建议、改进文档还是提交代码。

### 贡献方式

1. 🐛 [报告 Bug](https://github.com/your-org/n8nworkflows.xyz/issues)
2. 💡 [提出功能建议](https://github.com/your-org/n8nworkflows.xyz/issues)
3. 📝 改进文档
4. 💻 提交代码

### 贡献流程

1. Fork 项目
2. 创建功能分支 (`git checkout -b feat/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: add amazing feature'`)
4. 推送到分支 (`git push origin feat/amazing-feature`)
5. 创建 Pull Request

详细指南请参考 [`CONTRIBUTING.md`](CONTRIBUTING.md)。

### 代码规范

项目遵循以下规范：
- **代码风格**: Prettier
- **提交规范**: Conventional Commits
- **分支策略**: Git Flow

---

## 📊 项目状态

- ✅ **版本**: 1.0.0
- ✅ **状态**: 生产就绪
- ✅ **维护**: 积极维护中
- ✅ **测试覆盖率**: 正在完善

### 性能指标

- **Lighthouse 分数**: 90+
- **首次内容绘制**: < 1.8s
- **最大内容绘制**: < 2.5s
- **累积布局偏移**: < 0.1

---

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

```
MIT License

Copyright (c) 2026 N8N Workflows

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 📞 联系方式

- **网站**: [https://n8nworkflow.com](https://n8nworkflow.com)
- **GitHub**: [https://github.com/your-org/n8nworkflows.xyz](https://github.com/your-org/n8nworkflows.xyz)
- **问题追踪**: [GitHub Issues](https://github.com/your-org/n8nworkflows.xyz/issues)
- **邮箱**: contact@n8nworkflow.com

---

## 🙏 致谢

感谢以下优秀的开源项目：

- [Astro](https://astro.build/) - 现代化的静态站点生成器
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [Supabase](https://supabase.com/) - 开源的 Firebase 替代品
- [N8N](https://n8n.io/) - 工作流自动化平台

特别感谢所有贡献者和支持者！

---

## 🌟 Star History

如果这个项目对你有帮助，请给我们一个 ⭐️！

[![Star History Chart](https://api.star-history.com/svg?repos=your-org/n8nworkflows.xyz&type=Date)](https://star-history.com/#your-org/n8nworkflows.xyz&Date)

---

<div align="center">

**Built with ❤️ using [Astro](https://astro.build/)**

[⬆ 回到顶部](#n8n-workflows)

</div>
