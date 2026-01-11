# N8N Workflows 测试环境设置

## 测试环境概述

本文档描述了 N8N Workflows 项目的测试环境设置和配置。

## 1. 测试环境要求

### 1.1 硬件要求

- **最低要求**：
  - 2 核 CPU
  - 4GB RAM
  - 20GB 可用磁盘空间

- **推荐要求**：
  - 4 核 CPU
  - 8GB RAM
  - 50GB 可用磁盘空间

### 1.2 软件要求

- Node.js v18+ (LTS 版本)
- npm v8+
- Git v2.30+
- Chrome/Firefox/Safari（用于 E2E 测试）
- Docker（用于容器化测试，可选）

## 2. 测试环境设置

### 2.1 本地开发环境设置

```bash
# 克隆仓库
git clone https://github.com/n8n-workflows/n8nworkflows.xyz.git
cd n8nworkflows.xyz

# 安装依赖
npm install

# 创建环境配置文件
cp .env.example .env.development

# 编辑环境变量
# .env.development
PUBLIC_SUPABASE_URL=https://test.supabase.com
PUBLIC_SUPABASE_ANON_KEY=test-anon-key
PUBLIC_SITE_URL=http://localhost:3000
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# 启动开发服务器
npm run dev
```

### 2.2 测试数据库设置

我们使用 Supabase 作为测试数据库。您可以使用本地 Docker 设置或 Supabase 云服务。

#### 2.2.1 使用 Docker 设置本地 Supabase

```bash
# 启动 Supabase 容器
docker-compose -f docker-compose.test.yml up -d

# 等待数据库准备就绪
sleep 10

# 运行数据库迁移
npm run db:migrate
```

#### 2.2.2 使用 Supabase 云服务

1. 登录到 [Supabase](https://supabase.com/)
2. 创建一个新项目
3. 获取项目 URL 和匿名密钥
4. 更新 `.env.development` 文件

### 2.3 测试用户和数据

我们提供了测试用户和数据用于测试目的。

```bash
# 导入测试数据
npm run db:seed

# 测试用户凭证
- 管理员用户：admin@test.com / password123
- 普通用户：user@test.com / password123
- 编辑用户：editor@test.com / password123
```

## 3. 测试配置

### 3.1 Jest 配置

我们的单元测试使用 Jest。配置文件位于 `jest.config.cjs`。

```javascript
// jest.config.cjs
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  // 其他配置...
};
```

### 3.2 Playwright 配置

我们的 E2E 测试使用 Playwright。配置文件位于 `playwright.config.js`。

```javascript
// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  fullyParallel: true,
  // 其他配置...
});
```

### 3.3 Lighthouse 配置

我们使用 Lighthouse 进行性能审计。

```bash
# 运行 Lighthouse 审计
npm run test:lighthouse
```

## 4. 测试数据管理

### 4.1 模拟数据

我们提供了模拟数据用于测试：

- `src/data/mock-workflows.ts` - 模拟工作流数据
- `src/data/mock-authors.ts` - 模拟作者数据
- `src/data/mock-categories.ts` - 模拟类别数据

### 4.2 测试数据生成

```bash
# 生成测试数据
npm run generate:test-data

# 清除测试数据
npm run clear:test-data
```

## 5. 测试环境变量

```env
# 测试环境变量
NODE_ENV=test
PUBLIC_SUPABASE_URL=https://test.supabase.com
PUBLIC_SUPABASE_ANON_KEY=test-anon-key
PUBLIC_SITE_URL=http://localhost:3000
PUBLIC_GA_MEASUREMENT_ID=G-TEST123456

# 测试数据库
TEST_DB_URL=postgresql://test:test@localhost:5432/test_db

# 测试用户
TEST_ADMIN_EMAIL=admin@test.com
TEST_ADMIN_PASSWORD=password123
TEST_USER_EMAIL=user@test.com
TEST_USER_PASSWORD=password123
```

## 6. 测试执行

### 6.1 运行所有测试

```bash
# 运行所有测试（单元 + E2E）
npm test

# 运行单元测试
npm run test:unit

# 运行 E2E 测试
npm run test:e2e

# 运行 Lighthouse 审计
npm run test:lighthouse
```

### 6.2 选择性测试执行

```bash
# 运行特定单元测试文件
npx jest tests/unit/utils.test.ts

# 运行特定 E2E 测试文件
npx playwright test tests/e2e/homepage.spec.ts

# 运行带 UI 的 E2E 测试
npm run test:e2e:ui
```

## 7. 测试报告和日志

### 7.1 测试报告位置

- 单元测试报告：`coverage/` 目录
- E2E 测试报告：`test-results/` 目录
- Lighthouse 报告：`lighthouse-report.html`

### 7.2 日志文件

- 测试日志：`logs/test.log`
- 错误日志：`logs/error.log`
- 访问日志：`logs/access.log`

## 8. 测试环境清理

```bash
# 清理测试数据
npm run test:cleanup

# 重置测试数据库
npm run db:reset

# 删除测试报告
npm run test:clean-reports
```

## 9. CI/CD 集成

测试环境与我们的 CI/CD 流程集成。请参阅 `.github/workflows/ci-testing.yml` 了解详细信息。

## 10. 故障排除

### 10.1 常见问题

**问题：测试数据库连接失败**
- 解决方案：检查 Docker 容器是否运行，并验证连接字符串

**问题：E2E 测试超时**
- 解决方案：增加 Playwright 超时设置或检查网络连接

**问题：单元测试内存不足**
- 解决方案：增加 Node.js 内存限制：`NODE_OPTIONS=--max-old-space-size=4096 npm test`

### 10.2 获取帮助

如果遇到测试环境问题，请联系：
- 测试团队：test-team@n8nworkflow.com
- 开发团队：dev-team@n8nworkflow.com

## 11. 测试环境最佳实践

1. **隔离测试环境**：始终将测试环境与生产环境隔离
2. **定期清理**：定期清理测试数据以避免污染
3. **版本控制**：跟踪测试环境配置的更改
4. **监控**：监控测试环境的性能和资源使用
5. **文档**：记录所有测试环境的更改和配置

## 12. 测试环境维护

```bash
# 更新测试依赖
npm update

# 审计测试依赖
npm audit

# 更新测试数据
npm run update:test-data
```

## 13. 测试环境安全

1. **访问控制**：限制对测试环境的访问
2. **凭证管理**：安全存储测试凭证
3. **网络安全**：使用 VPN 或防火墙保护测试环境
4. **数据保护**：定期备份测试数据
5. **合规性**：确保测试环境符合安全标准

---

**文档版本**：1.0
**创建日期**：2026-01-11
**维护者**：N8N Workflows 测试团队