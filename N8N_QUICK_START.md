# N8N 集成快速开始

快速配置指南，让你在 5 分钟内启用 N8N demo 工作流集成。

## 简单 3 步配置

### 步骤 1：获取 N8N API 密钥

#### 使用 N8N Cloud（推荐新手）

1. 访问 [N8N Cloud](https://app.n8n.cloud)
2. 登录或创建账户
3. 进入 **Settings** → **API**
4. 点击 **Create API Token**
5. 复制生成的 API 密钥

#### 使用自托管 N8N

1. 访问你的 N8N 实例（如 `https://n8n.yourcompany.com`）
2. 以管理员身份登录
3. 进入 **Settings** → **API** 或 **Users**
4. 生成新的 API 密钥
5. 复制密钥

### 步骤 2：配置环境变量

编辑 `.env.development`：

```bash
# 打开文件
# Linux/Mac
nano .env.development

# Windows (在 VSCode 中打开)
code .env.development
```

添加以下配置：

```env
# N8N API 配置
N8N_API_URL=https://cloud.n8n.io
N8N_API_KEY=你的-API-密钥
N8N_DEMO_ENABLED=true
```

替换：
- `https://cloud.n8n.io` → 你的 N8N 实例 URL（Cloud 用户使用默认值）
- `你的-API-密钥` → 刚才复制的 API 密钥

### 步骤 3：重启开发服务器

```bash
# 停止当前服务器 (Ctrl+C)

# 重启
npm run dev
```

访问 `http://localhost:4321/api/n8n-workflows.json` 查看工作流列表！

---

## 验证配置是否成功

### 方法 1：查看 API 响应

在浏览器中访问：
```
http://localhost:4321/api/n8n-workflows.json
```

如果看到类似以下响应说明成功：

```json
{
  "workflows": [
    {
      "id": 1,
      "title": "Email Automation Workflow",
      ...
    }
  ],
  "total": 15,
  "source": "n8n-demo"
}
```

### 方法 2：在页面中使用

创建测试页面 `src/pages/test-n8n.astro`：

```astro
---
import { getN8NWorkflowsList } from '../lib/services/n8n';

const workflows = await getN8NWorkflowsList();
---

<html>
  <body>
    <h1>N8N 工作流 - {workflows.length} 个</h1>
    {workflows.length > 0 ? (
      <ul>
        {workflows.map(wf => (
          <li>{wf.title} ({wf.complexityLevel})</li>
        ))}
      </ul>
    ) : (
      <p>未加载到工作流。请检查 N8N 配置。</p>
    )}
  </body>
</html>
```

访问 `http://localhost:4321/test-n8n` 查看结果。

---

## 常见问题排查

### 看到 "N8N not configured" 错误

✅ 检查清单：

- [ ] `.env.development` 文件中是否有 `N8N_API_URL`
- [ ] `.env.development` 文件中是否有 `N8N_API_KEY`
- [ ] 重启了开发服务器吗？（很重要！）
- [ ] API 密钥是否正确复制（不要有空格）

**解决方案：**

```bash
# 1. 检查环境变量
echo N8N_API_URL=$N8N_API_URL
echo N8N_API_KEY=$N8N_API_KEY

# 2. 如果为空，重新编辑 .env.development
# 3. 重启服务器
npm run dev
```

### API 密钥无效

**原因：** 密钥错误或过期

**解决方案：**

1. 重新生成 API 密钥
2. 核对是否有多余的空格或换行符
3. 确保密钥仍然有效（未被撤销）

### 仍然显示空列表

**可能原因：**

1. N8N 实例中没有工作流
2. API 密钥权限不足（需要读取工作流权限）
3. N8N 版本过旧（需要 0.160.0+）

**检查方法：**

```bash
# 直接测试 API 调用
curl -X GET "https://your-n8n-instance.com/api/v1/workflows" \
  -H "X-N8N-API-KEY: your-api-key"
```

---

## 下一步

### 集成到页面

在任何 Astro 页面中使用工作流：

```astro
---
import { getN8NWorkflowsList } from '../lib/services/n8n';

const workflows = await getN8NWorkflowsList();
---

<div class="workflows">
  {workflows.map(workflow => (
    <div class="card">
      <h3>{workflow.title}</h3>
      <p>{workflow.description}</p>
    </div>
  ))}
</div>
```

### 融合数据源

混合 Supabase 和 N8N 数据：

```astro
---
import { getWorkflows } from '../lib/services/workflows';
import { mergeWorkflows } from '../lib/services/n8n';

const { workflows } = await getWorkflows({ limit: 50 });
const allWorkflows = await mergeWorkflows(workflows, true);
---
```

### 自定义样式

在你的组件中使用工作流数据进行自定义渲染。

---

## 更多信息

- 📖 [完整集成文档](./N8N_INTEGRATION.md)
- 🔧 [工作流服务 API](./API.md)
- 🏗️ [项目架构](./ARCHITECTURE.md)

---

## 需要帮助？

如果遇到问题：

1. 查看 [N8N_INTEGRATION.md](./N8N_INTEGRATION.md) 的故障排除部分
2. 检查 [N8N 官方文档](https://docs.n8n.io/)
3. 查看项目日志：
   ```bash
   # 检查浏览器控制台
   # 按 F12 → Console 标签
   ```

---

**祝你集成顺利！** 🚀
