# 部署检查清单

本文档提供了 N8N Workflows 网站部署前的完整检查清单，确保所有必要的步骤都已完成。

## 📋 部署前检查清单

### 1. 环境变量配置检查

#### 必需的环境变量
- [ ] `SUPABASE_URL` - Supabase 项目 URL
- [ ] `SUPABASE_ANON_KEY` - Supabase 匿名密钥
- [ ] `PUBLIC_SITE_URL` - 网站公开 URL
- [ ] `PUBLIC_SITE_NAME` - 网站名称

#### 可选的环境变量
- [ ] `GOOGLE_ANALYTICS_ID` - Google Analytics 跟踪 ID
- [ ] `SENTRY_DSN` - Sentry 错误跟踪 DSN
- [ ] `NODE_ENV` - 环境模式（development/production）

#### 验证方法
```bash
# 检查 .env 文件是否存在
ls -la .env

# 验证环境变量格式
node scripts/validate.js
```

---

### 2. 依赖安装验证

- [ ] Node.js 版本 >= 18.0.0
- [ ] npm 或 pnpm 已安装
- [ ] 所有依赖已安装且无漏洞

#### 验证命令
```bash
# 检查 Node.js 版本
node --version

# 检查 npm 版本
npm --version

# 安装依赖
npm install

# 检查安全漏洞
npm audit

# 修复可修复的漏洞
npm audit fix
```

---

### 3. 构建测试

- [ ] 开发模式启动成功
- [ ] 生产构建成功
- [ ] 构建输出无错误
- [ ] 构建输出无警告（或已知警告已记录）

#### 测试命令
```bash
# 开发模式测试
npm run dev

# 生产构建测试
npm run build

# 预览生产构建
npm run preview
```

#### 构建检查项
- [ ] 所有页面正确生成
- [ ] 静态资源正确输出
- [ ] CSS 和 JS 文件已压缩
- [ ] 图片已优化
- [ ] 构建大小合理（< 5MB）

---

### 4. 功能测试清单

#### 核心功能
- [ ] 首页加载正常
- [ ] Workflow 列表显示正确
- [ ] Workflow 详情页正常
- [ ] 搜索功能工作正常
- [ ] 分类筛选功能正常
- [ ] 复杂度筛选功能正常
- [ ] 排序功能正常
- [ ] 分页功能正常
- [ ] 无限滚动功能正常

#### 作者功能
- [ ] 作者列表页正常
- [ ] 作者详情页正常
- [ ] 作者 workflows 列表正常

#### 分类功能
- [ ] 分类列表页正常
- [ ] 分类详情页正常
- [ ] 分类 workflows 列表正常

#### API 端点
- [ ] `/api/stats.json` 返回正确数据
- [ ] `/api/search.json` 搜索功能正常
- [ ] `/api/load-more-workflows.json` 加载更多正常

#### 其他功能
- [ ] RSS Feed 生成正常
- [ ] 404 页面显示正常
- [ ] 500 错误页面显示正常
- [ ] 主题切换功能正常
- [ ] 面包屑导航正常
- [ ] 相关 workflows 推荐正常

---

### 5. 性能测试清单

#### 页面加载性能
- [ ] 首页 LCP < 2.5s
- [ ] 首页 FID < 100ms
- [ ] 首页 CLS < 0.1
- [ ] TTI < 3.5s

#### 资源优化
- [ ] 图片使用 WebP 格式
- [ ] 图片启用懒加载
- [ ] CSS 已压缩
- [ ] JavaScript 已压缩
- [ ] 字体已优化

#### 缓存策略
- [ ] 静态资源设置了正确的缓存头
- [ ] API 响应设置了合适的缓存策略
- [ ] CDN 配置正确（如使用）

#### 性能测试工具
```bash
# 使用 Lighthouse 测试
npx lighthouse https://your-site.com --view

# 使用 WebPageTest
# 访问 https://www.webpagetest.org/
```

---

### 6. SEO 检查清单

#### Meta 标签
- [ ] 所有页面都有唯一的 `<title>`
- [ ] 所有页面都有 `<meta name="description">`
- [ ] 所有页面都有 Open Graph 标签
- [ ] 所有页面都有 Twitter Card 标签
- [ ] 设置了 canonical URL

#### 结构化数据
- [ ] 首页有 WebSite schema
- [ ] Workflow 详情页有 Article schema
- [ ] 面包屑有 BreadcrumbList schema
- [ ] 作者有 Person schema

#### 技术 SEO
- [ ] `robots.txt` 配置正确
- [ ] `sitemap.xml` 生成正常
- [ ] RSS feed 可访问
- [ ] 301 重定向配置正确
- [ ] 无死链接
- [ ] 移动端友好

#### SEO 验证工具
```bash
# 检查 robots.txt
curl https://your-site.com/robots.txt

# 检查 sitemap
curl https://your-site.com/sitemap.xml

# 使用 Google Search Console 验证
# 使用 Bing Webmaster Tools 验证
```

---

### 7. 安全检查清单

#### 环境安全
- [ ] 敏感信息不在代码中硬编码
- [ ] `.env` 文件不在版本控制中
- [ ] API 密钥使用环境变量
- [ ] 生产环境使用 HTTPS

#### 依赖安全
- [ ] 运行 `npm audit` 无高危漏洞
- [ ] 所有依赖都是最新稳定版本
- [ ] 未使用已弃用的包

#### 内容安全
- [ ] CSP (Content Security Policy) 已配置
- [ ] XSS 防护已启用
- [ ] CORS 策略正确配置
- [ ] 安全响应头已设置

#### 安全响应头检查
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

---

### 8. 浏览器兼容性检查

#### 桌面浏览器
- [ ] Chrome (最新版本)
- [ ] Firefox (最新版本)
- [ ] Safari (最新版本)
- [ ] Edge (最新版本)

#### 移动浏览器
- [ ] iOS Safari
- [ ] Chrome Mobile
- [ ] Firefox Mobile
- [ ] Samsung Internet

#### 测试要点
- [ ] 布局正常显示
- [ ] 交互功能正常
- [ ] 动画流畅
- [ ] 字体正确加载

---

### 9. 响应式设计检查

#### 断点测试
- [ ] 移动端 (< 640px)
- [ ] 平板端 (640px - 1024px)
- [ ] 桌面端 (> 1024px)
- [ ] 大屏幕 (> 1920px)

#### 测试内容
- [ ] 导航菜单适配
- [ ] 卡片布局适配
- [ ] 图片响应式
- [ ] 表格响应式
- [ ] 表单响应式

---

### 10. 数据库检查

#### Supabase 配置
- [ ] 数据库表已创建
- [ ] 索引已优化
- [ ] RLS (Row Level Security) 策略已配置
- [ ] 备份策略已设置

#### 数据验证
- [ ] 测试数据已清理（生产环境）
- [ ] 必要的初始数据已导入
- [ ] 数据关系正确
- [ ] 查询性能良好

---

### 11. 监控和日志

#### 错误监控
- [ ] Sentry 或其他错误跟踪工具已配置
- [ ] 错误通知已设置
- [ ] 错误日志可访问

#### 分析工具
- [ ] Google Analytics 已配置
- [ ] 关键事件跟踪已设置
- [ ] 转化目标已定义

#### 性能监控
- [ ] 实时性能监控已启用
- [ ] 告警规则已设置
- [ ] 日志聚合已配置

---

### 12. 备份和恢复

- [ ] 数据库备份策略已设置
- [ ] 代码仓库有备份
- [ ] 环境变量已安全存储
- [ ] 恢复流程已测试

---

## 🚀 部署步骤

### 步骤 1: 准备部署环境

```bash
# 1. 克隆仓库
git clone <repository-url>
cd n8nworkflows.xyz

# 2. 安装依赖
npm install

# 3. 配置环境变量
cp .env.example .env
# 编辑 .env 文件，填入实际值
```

### 步骤 2: 构建项目

```bash
# 运行构建
npm run build

# 验证构建输出
ls -la dist/
```

### 步骤 3: 部署到 Netlify

#### 方法 1: 通过 Git 自动部署

1. 将代码推送到 GitHub/GitLab
2. 在 Netlify 中连接仓库
3. 配置构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
4. 添加环境变量
5. 触发部署

#### 方法 2: 手动部署

```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录 Netlify
netlify login

# 部署
netlify deploy --prod
```

### 步骤 4: 部署后验证

```bash
# 1. 检查网站是否可访问
curl -I https://your-site.com

# 2. 验证 API 端点
curl https://your-site.com/api/stats.json

# 3. 检查 robots.txt
curl https://your-site.com/robots.txt

# 4. 运行 Lighthouse 测试
npx lighthouse https://your-site.com --view
```

### 步骤 5: 配置域名和 SSL

- [ ] 自定义域名已配置
- [ ] DNS 记录已更新
- [ ] SSL 证书已启用
- [ ] HTTPS 重定向已启用

### 步骤 6: 提交搜索引擎

- [ ] 提交到 Google Search Console
- [ ] 提交到 Bing Webmaster Tools
- [ ] 提交 sitemap
- [ ] 验证索引状态

---

## 🔄 部署后监控

### 第一天
- [ ] 检查错误日志
- [ ] 监控性能指标
- [ ] 验证所有功能
- [ ] 检查用户反馈

### 第一周
- [ ] 分析流量数据
- [ ] 检查 SEO 表现
- [ ] 优化性能瓶颈
- [ ] 修复发现的问题

### 持续监控
- [ ] 每日检查错误率
- [ ] 每周审查性能报告
- [ ] 每月更新依赖
- [ ] 定期备份数据

---

## 📞 紧急联系

### 关键服务
- **托管平台**: Netlify
- **数据库**: Supabase
- **域名注册商**: [您的域名注册商]
- **CDN**: Netlify CDN

### 回滚流程

如果部署出现严重问题：

```bash
# Netlify 回滚到上一个版本
netlify rollback

# 或在 Netlify 控制台中选择之前的部署版本
```

---

## ✅ 最终确认

在点击"部署"按钮之前，确认：

- [ ] 所有检查清单项目都已完成
- [ ] 所有测试都已通过
- [ ] 团队成员已审查
- [ ] 备份已完成
- [ ] 回滚计划已准备
- [ ] 监控工具已就绪

**部署负责人签名**: ________________

**部署日期**: ________________

**部署版本**: ________________

---

## 📚 相关文档

- [测试指南](./TESTING.md)
- [故障排除指南](./TROUBLESHOOTING.md)
- [项目总结](./PROJECT_SUMMARY.md)
- [API 文档](./API.md)
- [架构文档](./ARCHITECTURE.md)
