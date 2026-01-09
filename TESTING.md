# 测试指南

本文档提供了 N8N Workflows 网站的完整测试指南，包括本地开发测试、组件测试、API 测试等。

## 📋 目录

- [本地开发测试](#本地开发测试)
- [组件测试](#组件测试)
- [API 端点测试](#api-端点测试)
- [浏览器兼容性测试](#浏览器兼容性测试)
- [响应式设计测试](#响应式设计测试)
- [性能测试](#性能测试)
- [SEO 测试](#seo-测试)
- [可访问性测试](#可访问性测试)
- [安全测试](#安全测试)

---

## 🚀 本地开发测试

### 环境准备

```bash
# 1. 克隆项目
git clone <repository-url>
cd n8nworkflows.xyz

# 2. 安装依赖
npm install

# 3. 配置环境变量
cp .env.example .env
# 编辑 .env 文件

# 4. 启动开发服务器
npm run dev
```

### 开发服务器测试

访问 `http://localhost:4321` 并验证：

- [ ] 页面正常加载
- [ ] 热重载功能正常
- [ ] 控制台无错误
- [ ] 样式正确应用
- [ ] 图片正常显示

### 构建测试

```bash
# 生产构建
npm run build

# 预览构建结果
npm run preview
```

验证构建输出：
- [ ] `dist/` 目录已创建
- [ ] 所有页面已生成
- [ ] 静态资源已复制
- [ ] 无构建错误

---

## 🧩 组件测试

### 布局组件测试

#### BaseLayout
测试文件：[`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro)

**测试要点：**
- [ ] HTML 结构正确
- [ ] Meta 标签正确渲染
- [ ] 样式表正确加载
- [ ] 脚本正确加载

#### MainLayout
测试文件：[`src/layouts/MainLayout.astro`](src/layouts/MainLayout.astro)

**测试要点：**
- [ ] Header 正确显示
- [ ] Footer 正确显示
- [ ] 主内容区域正确渲染
- [ ] 面包屑导航正确显示

### UI 组件测试

#### WorkflowCard
测试文件：[`src/components/workflow/WorkflowCard.astro`](src/components/workflow/WorkflowCard.astro)

**测试场景：**

1. **正常数据显示**
```typescript
// 测试数据
const workflow = {
  id: '1',
  title: 'Test Workflow',
  description: 'Test description',
  category: 'automation',
  complexity: 'beginner',
  views: 100,
  likes: 10
};
```

验证：
- [ ] 标题正确显示
- [ ] 描述正确显示
- [ ] 分类标签正确显示
- [ ] 复杂度标签正确显示
- [ ] 统计数据正确显示
- [ ] 链接正确生成

2. **长文本处理**
```typescript
const workflow = {
  title: 'Very Long Title That Should Be Truncated...',
  description: 'Very long description that should be truncated...'
};
```

验证：
- [ ] 文本正确截断
- [ ] 省略号正确显示
- [ ] 布局不被破坏

3. **缺失数据处理**
```typescript
const workflow = {
  title: 'Test',
  description: null,
  views: 0
};
```

验证：
- [ ] 缺失字段有默认值
- [ ] 不显示错误
- [ ] 布局保持正常

#### SearchBar
测试文件：[`src/components/ui/SearchBar.astro`](src/components/ui/SearchBar.astro)

**测试场景：**

1. **基本搜索功能**
- [ ] 输入框正常工作
- [ ] 搜索按钮可点击
- [ ] 表单提交正常
- [ ] URL 参数正确生成

2. **边界情况**
- [ ] 空搜索处理
- [ ] 特殊字符处理
- [ ] 超长文本处理

#### FilterBar
测试文件：[`src/components/ui/FilterBar.astro`](src/components/ui/FilterBar.astro)

**测试场景：**

1. **分类筛选**
- [ ] 所有分类正确显示
- [ ] 选中状态正确
- [ ] URL 参数正确更新

2. **复杂度筛选**
- [ ] 所有复杂度选项显示
- [ ] 多选功能正常
- [ ] 筛选结果正确

#### Pagination
测试文件：[`src/components/ui/Pagination.astro`](src/components/ui/Pagination.astro)

**测试场景：**

1. **基本分页**
```typescript
// 测试数据
const pagination = {
  currentPage: 1,
  totalPages: 10,
  pageSize: 12
};
```

验证：
- [ ] 当前页正确高亮
- [ ] 上一页/下一页按钮状态正确
- [ ] 页码链接正确生成
- [ ] 边界页码正确处理

2. **边界情况**
- [ ] 第一页：上一页按钮禁用
- [ ] 最后一页：下一页按钮禁用
- [ ] 单页：不显示分页
- [ ] 大量页码：显示省略号

---

## 🔌 API 端点测试

### Stats API
端点：`/api/stats.json`

**测试命令：**
```bash
# 开发环境
curl http://localhost:4321/api/stats.json

# 生产环境
curl https://your-site.com/api/stats.json
```

**预期响应：**
```json
{
  "totalWorkflows": 100,
  "totalCategories": 10,
  "totalAuthors": 20,
  "totalViews": 10000
}
```

**验证项：**
- [ ] 返回 200 状态码
- [ ] Content-Type 为 application/json
- [ ] 数据格式正确
- [ ] 数值合理
- [ ] 响应时间 < 500ms

### Search API
端点：`/api/search.json?q=keyword`

**测试命令：**
```bash
# 基本搜索
curl "http://localhost:4321/api/search.json?q=automation"

# 带分类筛选
curl "http://localhost:4321/api/search.json?q=automation&category=data-processing"

# 带复杂度筛选
curl "http://localhost:4321/api/search.json?q=automation&complexity=beginner"
```

**测试场景：**

1. **正常搜索**
- [ ] 返回匹配结果
- [ ] 结果按相关性排序
- [ ] 分页正确

2. **空搜索**
```bash
curl "http://localhost:4321/api/search.json?q="
```
- [ ] 返回所有结果或提示

3. **无结果搜索**
```bash
curl "http://localhost:4321/api/search.json?q=nonexistent"
```
- [ ] 返回空数组
- [ ] 状态码仍为 200

4. **特殊字符搜索**
```bash
curl "http://localhost:4321/api/search.json?q=%23%40%24"
```
- [ ] 正确处理特殊字符
- [ ] 不返回错误

### Load More API
端点：`/api/load-more-workflows.json?page=2`

**测试命令：**
```bash
# 加载第二页
curl "http://localhost:4321/api/load-more-workflows.json?page=2"

# 带分类筛选
curl "http://localhost:4321/api/load-more-workflows.json?page=2&category=automation"

# 带排序
curl "http://localhost:4321/api/load-more-workflows.json?page=2&sort=popular"
```

**验证项：**
- [ ] 返回正确页码的数据
- [ ] 不重复第一页数据
- [ ] 分页信息正确
- [ ] 筛选和排序正确应用

---

## 🌐 浏览器兼容性测试

### 桌面浏览器测试

#### Chrome (最新版本)
- [ ] 页面正常渲染
- [ ] 所有功能正常
- [ ] 性能良好
- [ ] DevTools 无错误

#### Firefox (最新版本)
- [ ] 页面正常渲染
- [ ] CSS 兼容性
- [ ] JavaScript 功能正常
- [ ] 字体渲染正常

#### Safari (最新版本)
- [ ] 页面正常渲染
- [ ] Flexbox/Grid 布局正常
- [ ] 动画流畅
- [ ] 表单功能正常

#### Edge (最新版本)
- [ ] 页面正常渲染
- [ ] 所有功能正常
- [ ] 性能良好

### 移动浏览器测试

#### iOS Safari
- [ ] 触摸交互正常
- [ ] 滚动流畅
- [ ] 视口设置正确
- [ ] 表单输入正常

#### Chrome Mobile
- [ ] 页面正常渲染
- [ ] 触摸事件正常
- [ ] 性能良好

#### Firefox Mobile
- [ ] 页面正常渲染
- [ ] 功能正常

### 测试工具

**BrowserStack**
```
访问 https://www.browserstack.com/
测试多个浏览器和设备组合
```

**Can I Use**
```
访问 https://caniuse.com/
检查 CSS/JS 特性兼容性
```

---

## 📱 响应式设计测试

### 断点测试

#### 移动端 (< 640px)
测试设备：iPhone SE, iPhone 12, Galaxy S21

**测试要点：**
- [ ] 单列布局
- [ ] 导航菜单折叠
- [ ] 字体大小适中
- [ ] 按钮易于点击（最小 44x44px）
- [ ] 图片正确缩放
- [ ] 表单易于填写

**测试命令：**
```bash
# Chrome DevTools
# 打开 DevTools (F12)
# 点击设备工具栏图标 (Ctrl+Shift+M)
# 选择移动设备
```

#### 平板端 (640px - 1024px)
测试设备：iPad, iPad Pro, Galaxy Tab

**测试要点：**
- [ ] 两列或三列布局
- [ ] 导航适配
- [ ] 内容密度适中
- [ ] 横屏和竖屏都正常

#### 桌面端 (> 1024px)
测试分辨率：1366x768, 1920x1080, 2560x1440

**测试要点：**
- [ ] 多列布局
- [ ] 最大宽度限制
- [ ] 内容居中
- [ ] 充分利用空间

### 响应式图片测试

```html
<!-- 验证 srcset 和 sizes 属性 -->
<img 
  src="image.jpg"
  srcset="image-320w.jpg 320w, image-640w.jpg 640w, image-1024w.jpg 1024w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Test"
/>
```

验证：
- [ ] 不同屏幕加载不同尺寸
- [ ] 图片清晰不模糊
- [ ] 加载速度快

---

## ⚡ 性能测试

### Lighthouse 测试

**运行命令：**
```bash
# 安装 Lighthouse
npm install -g lighthouse

# 运行测试
lighthouse https://your-site.com --view

# 只测试性能
lighthouse https://your-site.com --only-categories=performance --view

# 移动端测试
lighthouse https://your-site.com --preset=mobile --view

# 桌面端测试
lighthouse https://your-site.com --preset=desktop --view
```

**性能指标目标：**
- [ ] Performance Score > 90
- [ ] FCP (First Contentful Paint) < 1.8s
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] TBT (Total Blocking Time) < 200ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] SI (Speed Index) < 3.4s

### WebPageTest

**测试步骤：**
1. 访问 https://www.webpagetest.org/
2. 输入网站 URL
3. 选择测试位置和浏览器
4. 运行测试

**验证项：**
- [ ] First Byte Time < 600ms
- [ ] Start Render < 1.5s
- [ ] Document Complete < 3s
- [ ] Fully Loaded < 5s

### 性能分析工具

#### Chrome DevTools Performance

```bash
# 1. 打开 DevTools (F12)
# 2. 切换到 Performance 标签
# 3. 点击录制按钮
# 4. 执行操作
# 5. 停止录制
# 6. 分析结果
```

**分析要点：**
- [ ] 长任务 (Long Tasks) < 50ms
- [ ] 布局抖动 (Layout Thrashing) 最小化
- [ ] 内存泄漏检查
- [ ] FPS 保持 60

#### Bundle 分析

```bash
# 安装分析工具
npm install -D rollup-plugin-visualizer

# 构建并生成报告
npm run build

# 查看 stats.html
```

**优化目标：**
- [ ] 总 bundle 大小 < 500KB
- [ ] 首屏 JS < 200KB
- [ ] 首屏 CSS < 50KB
- [ ] 无重复依赖

---

## 🔍 SEO 测试

### Meta 标签测试

**测试工具：**
```bash
# 使用 curl 检查
curl -s https://your-site.com | grep -i "<meta"

# 使用在线工具
# https://www.heymeta.com/
# https://metatags.io/
```

**验证项：**
- [ ] 每个页面有唯一的 `<title>`
- [ ] 每个页面有 `<meta name="description">`
- [ ] 有 Open Graph 标签
- [ ] 有 Twitter Card 标签
- [ ] 有 canonical URL

### 结构化数据测试

**测试工具：**
```bash
# Google Rich Results Test
# https://search.google.com/test/rich-results

# Schema.org Validator
# https://validator.schema.org/
```

**验证项：**
- [ ] JSON-LD 格式正确
- [ ] 无验证错误
- [ ] 所有必需字段存在

### Robots.txt 测试

```bash
# 检查 robots.txt
curl https://your-site.com/robots.txt

# 验证语法
# https://www.google.com/webmasters/tools/robots-testing-tool
```

**验证项：**
- [ ] 文件可访问
- [ ] 语法正确
- [ ] Sitemap 链接正确
- [ ] 爬虫规则合理

### Sitemap 测试

```bash
# 检查 sitemap
curl https://your-site.com/sitemap.xml

# 验证格式
# https://www.xml-sitemaps.com/validate-xml-sitemap.html
```

**验证项：**
- [ ] XML 格式正确
- [ ] 所有 URL 可访问
- [ ] 优先级设置合理
- [ ] 更新频率合理

---

## ♿ 可访问性测试

### 自动化测试

**使用 axe DevTools：**
```bash
# 1. 安装 Chrome 扩展
# https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/

# 2. 打开网站
# 3. 打开 DevTools
# 4. 切换到 axe DevTools 标签
# 5. 点击 "Scan ALL of my page"
```

**使用 Lighthouse：**
```bash
lighthouse https://your-site.com --only-categories=accessibility --view
```

### 手动测试

#### 键盘导航
- [ ] Tab 键可以遍历所有交互元素
- [ ] 焦点指示器清晰可见
- [ ] Enter/Space 可以激活按钮
- [ ] Esc 可以关闭模态框

#### 屏幕阅读器测试
使用 NVDA (Windows) 或 VoiceOver (Mac)

- [ ] 所有图片有 alt 文本
- [ ] 链接文本有意义
- [ ] 表单标签正确关联
- [ ] 标题层级正确
- [ ] ARIA 标签正确使用

#### 颜色对比度
```bash
# 使用 WebAIM Contrast Checker
# https://webaim.org/resources/contrastchecker/
```

- [ ] 正常文本对比度 >= 4.5:1
- [ ] 大文本对比度 >= 3:1
- [ ] 交互元素对比度 >= 3:1

---

## 🔒 安全测试

### 依赖安全扫描

```bash
# npm audit
npm audit

# 修复漏洞
npm audit fix

# 查看详细报告
npm audit --json
```

### 安全响应头测试

**使用 SecurityHeaders.com：**
```
访问 https://securityheaders.com/
输入网站 URL
查看评分和建议
```

**验证响应头：**
```bash
curl -I https://your-site.com
```

检查：
- [ ] `X-Frame-Options`
- [ ] `X-Content-Type-Options`
- [ ] `X-XSS-Protection`
- [ ] `Referrer-Policy`
- [ ] `Content-Security-Policy`
- [ ] `Permissions-Policy`

### XSS 测试

**测试场景：**
```javascript
// 在搜索框输入
<script>alert('XSS')</script>
<img src=x onerror=alert('XSS')>
javascript:alert('XSS')
```

验证：
- [ ] 输入被正确转义
- [ ] 脚本不执行
- [ ] 无安全警告

---

## 📊 测试报告模板

### 测试执行报告

```markdown
# 测试报告

**测试日期**: 2026-01-09
**测试人员**: [姓名]
**测试环境**: [开发/预生产/生产]
**测试版本**: v1.0.0

## 测试摘要
- 总测试用例: 100
- 通过: 95
- 失败: 5
- 跳过: 0

## 失败用例
1. [用例名称] - [失败原因] - [优先级]
2. ...

## 性能指标
- Lighthouse Score: 92/100
- LCP: 2.1s
- FID: 45ms
- CLS: 0.05

## 建议
1. [优化建议]
2. ...

## 结论
[总体评估]
```

---

## 🔧 测试工具清单

### 必备工具
- [ ] Chrome DevTools
- [ ] Lighthouse
- [ ] npm audit
- [ ] curl

### 推荐工具
- [ ] BrowserStack (浏览器测试)
- [ ] WebPageTest (性能测试)
- [ ] axe DevTools (可访问性)
- [ ] SecurityHeaders.com (安全测试)
- [ ] Google Search Console (SEO)

### 可选工具
- [ ] Playwright (E2E 测试)
- [ ] Jest (单元测试)
- [ ] Cypress (集成测试)
- [ ] k6 (负载测试)

---

## 📚 相关文档

- [部署检查清单](./DEPLOYMENT_CHECKLIST.md)
- [故障排除指南](./TROUBLESHOOTING.md)
- [项目总结](./PROJECT_SUMMARY.md)
- [优化指南](./OPTIMIZATION.md)
