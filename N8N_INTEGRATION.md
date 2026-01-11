# N8N 集成指南

本项目支持两种方式集成 n8n 工作流数据：

1.  **GitHub Workflow Hub (推荐)**: 通过 n8n 抓取数据并推送到 GitHub 仓库，网站通过 GitHub API 获取。详见 [GITHUB_HUB_INTEGRATION.md](./GITHUB_HUB_INTEGRATION.md)。
2.  **N8N 官方 API**: 直接从运行中的 n8n 实例获取数据。

---

## N8N 官方 API 集成

本文档说明如何在 N8N Workflows 项目中集成并使用 N8N 官方 API 来获取 demo 工作流。

## 目录

- [概述](#概述)
- [环境变量配置](#环境变量配置)
- [API 端点](#api-端点)
- [使用示例](#使用示例)
- [故障排除](#故障排除)
- [安全建议](#安全建议)

---

## 概述

N8N Workflows 项目现已支持从 N8N 官方实例（包括 demo 实例）获取工作流数据。

### 支持的功能

- ✅ 从 N8N 实例获取工作流列表
- ✅ 获取单个工作流的详细信息
- ✅ 自动转换 N8N 数据格式为本地格式
- ✅ 支持 N8N 数据和 Supabase 数据的融合
- ✅ CORS 跨域访问支持

---

## 环境变量配置

### 1. 获取 N8N API 密钥

#### 对于自托管 N8N 实例：

1. 访问你的 N8N 实例 URL（如 `https://n8n.yourcompany.com`）
2. 登录管理员账户
3. 进入 **Settings** → **API** 或 **Users**
4. 生成新的 API 密钥
5. 复制密钥备用

#### 对于 N8N Cloud：

1. 访问 [N8N Cloud](https://app.n8n.cloud)
2. 进入 **Settings** → **API**
3. 创建新的 API 密钥
4. 复制密钥备用

### 2. 配置环境变量

#### 开发环境 (`.env.development`)

```env
# N8N API 配置（可选，用于获取 demo 工作流）
# N8N 实例 URL (例: https://n8n.yourdomain.com)
N8N_API_URL=https://your-n8n-instance.com

# N8N API 密钥 (从 N8N 设置获取)
N8N_API_KEY=your-n8n-api-key

# 启用 N8N Demo 数据源
N8N_DEMO_ENABLED=true
```

#### 生产环境 (`.env.production`)

```env
N8N_API_URL=https://your-n8n-instance.com
N8N_API_KEY=your-secure-api-key
N8N_DEMO_ENABLED=true
```

> ⚠️ **安全提示**：
> - 永远不要在版本控制中提交实际的 API 密钥
> - 在生产环境中使用环境变量或密钥管理服务
> - 定期轮换 API 密钥

---

## API 端点

### 1. 获取 N8N 工作流列表

**端点：** `GET /api/n8n-workflows.json`

**查询参数：** 无

**响应示例：**

```json
{
  "workflows": [
    {
      "id": 1,
      "slug": "email-automation-workflow",
      "title": "Email Automation Workflow",
      "description": "Automated email workflow from N8N demo",
      "thumbnail": "",
      "author": {
        "id": 1,
        "name": "N8N Demo",
        "slug": "n8n-demo",
        "bio": "Official N8N demo workflows",
        "avatar": ""
      },
      "categories": ["Email", "Automation"],
      "complexityLevel": "intermediate",
      "price": 0,
      "visitors": 0,
      "downloads": 0,
      "createdAt": "2026-01-09T12:00:00Z",
      "updatedAt": "2026-01-09T12:00:00Z",
      "publishedAt": "2026-01-09T12:00:00Z",
      "date": "9 Jan 2026",
      "nodes": 8,
      "version": "1.0.0",
      "sourceUrl": "n8n-demo://1"
    }
  ],
  "total": 15,
  "source": "n8n-demo",
  "timestamp": "2026-01-09T12:16:23Z"
}
```

**错误响应：**

```json
{
  "error": "N8N not configured",
  "message": "Please set N8N_API_URL and N8N_API_KEY environment variables",
  "workflows": []
}
```

---

## 使用示例

### 在 Astro 页面中使用

#### 方法 1：仅使用 N8N 工作流

```astro
---
// src/pages/n8n-workflows.astro
import { getN8NWorkflowsList } from '../lib/services/n8n';

const workflows = await getN8NWorkflowsList();
---

<html>
  <body>
    <h1>N8N Demo 工作流</h1>
    <div class="workflows-grid">
      {workflows.map(workflow => (
        <div class="workflow-card">
          <h2>{workflow.title}</h2>
          <p>{workflow.description}</p>
          <span class="complexity">{workflow.complexityLevel}</span>
          <span class="nodes">{workflow.nodes} nodes</span>
        </div>
      ))}
    </div>
  </body>
</html>
```

#### 方法 2：融合 Supabase 和 N8N 数据

```astro
---
// src/pages/all-workflows.astro
import { getWorkflows } from '../lib/services/workflows';
import { mergeWorkflows } from '../lib/services/n8n';

// 获取 Supabase 工作流
const { workflows: supabaseWorkflows } = await getWorkflows({ limit: 50 });

// 融合 N8N 工作流
const allWorkflows = await mergeWorkflows(supabaseWorkflows, true);
---

<html>
  <body>
    <h1>所有工作流</h1>
    <p>共 {allWorkflows.length} 个工作流</p>
    <!-- 显示所有工作流 -->
  </body>
</html>
```

### 在客户端 JavaScript 中使用

```javascript
// 获取 N8N 工作流
async function loadN8NWorkflows() {
  try {
    const response = await fetch('/api/n8n-workflows.json');
    const data = await response.json();
    
    if (data.error) {
      console.error('Error:', data.message);
      return [];
    }
    
    return data.workflows;
  } catch (error) {
    console.error('Failed to load N8N workflows:', error);
    return [];
  }
}

// 使用
loadN8NWorkflows().then(workflows => {
  console.log(`Loaded ${workflows.length} workflows from N8N`);
  workflows.forEach(wf => {
    console.log(`- ${wf.title} (${wf.complexityLevel})`);
  });
});
```

---

## 故障排除

### 问题 1: "N8N not configured" 错误

**原因：** 环境变量未设置或设置不正确

**解决方案：**

```bash
# 1. 检查 .env 文件
cat .env.development | grep N8N

# 2. 确保 N8N_API_URL 和 N8N_API_KEY 都已设置
# 3. 重启开发服务器
npm run dev
```

### 问题 2: API 密钥无效或过期

**原因：** API 密钥错误或已过期

**解决方案：**

1. 重新获取 API 密钥
2. 验证密钥是否正确复制
3. 检查密钥的权限范围

### 问题 3: CORS 错误

**原因：** N8N 实例的 CORS 配置问题

**解决方案：**

1. 在 N8N 实例中配置 CORS 允许列表
2. 在 N8N `settings.json` 中添加：
   ```json
   {
     "external": {
       "frontend": {
         "allowedHosts": ["https://your-site.com"]
       }
     }
   }
   ```
3. 或者使用自托管实例，进行完整配置

### 问题 4: 工作流数据转换错误

**原因：** N8N 数据结构与预期不符

**解决方案：**

1. 检查 N8N API 响应格式：
   ```bash
   curl -H "X-N8N-API-KEY: your-key" \
        https://your-n8n.com/api/v1/workflows
   ```

2. 查看 `src/lib/services/n8n.ts` 中的 `transformN8NWorkflow` 函数
3. 根据实际数据结构调整转换逻辑

---

## 安全建议

### 1. API 密钥管理

✅ **推荐做法：**

- 使用环境变量或秘密管理服务
- 定期轮换 API 密钥
- 为生产和开发环境使用不同的密钥
- 限制 API 密钥的权限范围
- 使用 readonly 权限的 API 密钥

❌ **不推荐做法：**

- 在代码中硬编码 API 密钥
- 将 API 密钥提交到版本控制
- 在不安全的通信中传输 API 密钥
- 为多个环境共用同一个密钥

### 2. 数据安全

- N8N 工作流数据作为公开演示数据处理
- 避免在 N8N demo 中存放敏感信息
- 实施访问控制和日志审计
- 加密敏感的环境变量

### 3. 网络安全

- 在生产环境使用 HTTPS
- 实施速率限制防止滥用
- 使用 IP 白名单（如果 N8N 支持）
- 监控 API 调用频率和异常

---

## 高级配置

### 缓存策略

当前 API 端点缓存配置：

```
Cache-Control: public, max-age=300, s-maxage=600
```

- 浏览器缓存：5 分钟
- CDN 缓存：10 分钟

自定义缓存时间：

修改 `src/pages/api/n8n-workflows.json.ts` 中的 `Cache-Control` 头

### 自定义数据转换

编辑 `src/lib/services/n8n.ts` 中的 `transformN8NWorkflow` 函数：

```typescript
function transformN8NWorkflow(n8nWf: N8NWorkflow): Workflow {
  // 自定义转换逻辑
  return {
    // ...
  };
}
```

### 添加自定义字段

在 `Workflow` 类型中添加新字段前，先更新类型定义：

编辑 `src/lib/types/workflow.ts`：

```typescript
export interface Workflow {
  // ... 现有字段
  customField?: string; // 新字段
}
```

---

## 支持的 N8N 版本

- ✅ N8N 0.160.0 及以上
- ✅ N8N Cloud
- ✅ 自托管 N8N 实例

---

## 相关文档

- [N8N API 文档](https://docs.n8n.io/api/overview/)
- [N8N 工作流导出和导入](https://docs.n8n.io/workflows/import-export/)
- [N8N 环境变量配置](https://docs.n8n.io/hosting/configuration/)

---

## 许可证

MIT License
