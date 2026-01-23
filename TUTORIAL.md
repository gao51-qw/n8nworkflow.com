# n8n Workflows 网站维护与管理教程

本教程将指导你如何进行工作流的抓取、截图、索引，以及如何修改广告位、页头、页脚和 Logo。

---

## 1. 工作流管理 (Workflows)

### 1.1 抓取工作流 (Crawl)
如果你需要从 n8n 官方或其他来源抓取新的工作流数据，可以使用以下命令：
```bash
npm run crawl
```
*   **脚本位置**：`scripts/crawl-n8n-workflows.mjs`
*   **功能**：自动获取工作流的 JSON 数据并保存到 `public/data/workflows/` 目录下。

### 1.2 截图工作流 (Screenshots)
抓取数据后，需要为工作流生成预览图：
```bash
npm run screenshots
```
*   **脚本位置**：`scripts/generate-workflow-screenshots.mjs`
*   **功能**：使用 Puppeteer 模拟浏览器打开工作流，并生成 `.webp` 格式的截图。

### 1.3 索引工作流 (Reindex)
在添加或修改了 `public/data/workflows/` 下的文件后，必须重新生成索引文件，网站才能显示更新：
```bash
npm run reindex
```
*   **脚本位置**：`scripts/reindex-local.mjs`
*   **功能**：扫描 `public/data/workflows/` 目录，更新 `src/data/workflows.json` 索引文件，并生成 `src/data/workflows/` 下的详情 JSON。

---

## 2. 广告位编辑 (Ads)

网站中的推荐卡片（如 n8n Cloud, Bright Data 等）是在数据文件中定义的。

*   **文件位置**：[`src/data/ads.json`](src/data/ads.json)
*   **修改方法**：
    *   `name`: 卡片标题
    *   `description`: 主要描述文字
    *   `url`: 点击跳转的链接
    *   `icon`: 图标（可以是图片链接或 Emoji）
    *   `cta`: 按钮文字（如 "Try free"）

修改保存后，主页和工作流详情页的广告位会自动更新。

---

## 3. 页头、页脚与 Logo 修改

### 3.1 修改 Logo
Logo 目前是由代码生成的，包含一个图标块和文字。

*   **页头 Logo**：[`src/components/common/Header.astro`](src/components/common/Header.astro) (约第 37-47 行)
*   **页脚 Logo**：[`src/components/common/Footer.astro`](src/components/common/Footer.astro) (约第 33-40 行)
*   **修改建议**：
    *   若修改文字，直接替换 `N8N Workflows`。
    *   若更换为图片 Logo，请将图片放入 `public/` 目录，并使用 `<img src="/your-logo.png" />` 替换原有的 `div` 和 `span`。

### 3.2 修改页头 (Header)
*   **文件位置**：[`src/components/common/Header.astro`](src/components/common/Header.astro)
*   **功能**：修改导航菜单项（`navItems` 数组）、GitHub 链接或主题切换功能。

### 3.3 修改页脚 (Footer)
*   **文件位置**：[`src/components/common/Footer.astro`](src/components/common/Footer.astro)
*   **功能**：修改底部的快速链接（`quickLinks`）、资源链接（`resourceLinks`）以及版权声明文字。

## 4. 实时数据更新

网站的部分统计数据（如工作流总数、最后更新时间）是实时从数据库或本地索引中获取的：

*   **主页统计**：显示总工作流数和最后更新日期。
*   **最新页面**：显示最新更新日期。

这些数据通过 `src/lib/services/stats.ts` 中的 `getStats()` 函数获取。如果你运行了 `npm run reindex`，本地索引更新后，这些实时数据也会随之更新。

---

## 5. 开发建议

在进行任何修改后，你可以运行以下命令在本地预览效果：
```bash
npm run dev
```
然后在浏览器访问 `http://localhost:4321` 查看更改。
