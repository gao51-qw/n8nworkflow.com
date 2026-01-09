# 贡献指南

感谢您对 N8N Workflows 项目的关注！我们欢迎所有形式的贡献，包括但不限于代码、文档、设计和反馈。

## 📋 目录

- [行为准则](#行为准则)
- [如何贡献](#如何贡献)
- [开发环境设置](#开发环境设置)
- [代码规范](#代码规范)
- [提交规范](#提交规范)
- [Pull Request 流程](#pull-request-流程)
- [问题报告](#问题报告)
- [功能建议](#功能建议)

---

## 🤝 行为准则

### 我们的承诺

为了营造一个开放和友好的环境，我们承诺：

- 尊重不同的观点和经验
- 优雅地接受建设性批评
- 关注对社区最有利的事情
- 对其他社区成员表示同理心

### 不可接受的行为

- 使用性化的语言或图像
- 人身攻击或侮辱性评论
- 公开或私下骚扰
- 未经许可发布他人的私人信息
- 其他不道德或不专业的行为

---

## 🎯 如何贡献

### 贡献类型

#### 1. 代码贡献
- 修复 Bug
- 添加新功能
- 性能优化
- 重构代码

#### 2. 文档贡献
- 改进文档
- 添加示例
- 翻译文档
- 修正错别字

#### 3. 设计贡献
- UI/UX 改进
- 图标设计
- 品牌设计

#### 4. 测试贡献
- 编写测试用例
- 报告 Bug
- 验证修复

---

## 🛠️ 开发环境设置

### 前置要求

- Node.js >= 18.0.0
- npm >= 9.0.0 或 pnpm >= 8.0.0
- Git
- 代码编辑器（推荐 VS Code）

### 设置步骤

1. **Fork 项目**

访问 [项目仓库](https://github.com/your-org/n8nworkflows.xyz)，点击右上角的 "Fork" 按钮。

2. **克隆仓库**

```bash
git clone https://github.com/YOUR_USERNAME/n8nworkflows.xyz.git
cd n8nworkflows.xyz
```

3. **添加上游仓库**

```bash
git remote add upstream https://github.com/your-org/n8nworkflows.xyz.git
```

4. **安装依赖**

```bash
npm install
```

5. **配置环境变量**

```bash
cp .env.example .env
# 编辑 .env 文件，填入必要的配置
```

6. **启动开发服务器**

```bash
npm run dev
```

访问 http://localhost:4321 查看效果。

### VS Code 推荐扩展

```json
{
  "recommendations": [
    "astro-build.astro-vscode",
    "bradlc.vscode-tailwindcss",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

---

## 📝 代码规范

### TypeScript/JavaScript

#### 命名规范

```typescript
// 文件名：kebab-case
// workflow-card.ts

// 类名：PascalCase
class WorkflowService {}

// 函数名：camelCase
function getWorkflows() {}

// 常量：UPPER_SNAKE_CASE
const MAX_ITEMS = 100;

// 接口：PascalCase，以 I 开头（可选）
interface Workflow {}
interface IWorkflowService {}

// 类型：PascalCase
type WorkflowStatus = 'draft' | 'published';
```

#### 代码风格

```typescript
// ✅ 好的示例
export async function getWorkflows(
  category?: string,
  limit: number = 10
): Promise<Workflow[]> {
  try {
    const { data, error } = await supabase
      .from('workflows')
      .select('*')
      .eq('category', category)
      .limit(limit);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Failed to fetch workflows:', error);
    return [];
  }
}

// ❌ 不好的示例
export async function getWorkflows(category?,limit=10) {
  const {data,error}=await supabase.from('workflows').select('*').eq('category',category).limit(limit);
  if(error)throw error;
  return data||[];
}
```

#### 注释规范

```typescript
/**
 * 获取工作流列表
 * @param category - 分类筛选（可选）
 * @param limit - 返回数量限制
 * @returns 工作流数组
 */
export async function getWorkflows(
  category?: string,
  limit: number = 10
): Promise<Workflow[]> {
  // 实现代码
}
```

### Astro 组件

```astro
---
// ✅ 好的示例
import type { Workflow } from '@/lib/types/workflow';

interface Props {
  workflow: Workflow;
  featured?: boolean;
}

const { workflow, featured = false } = Astro.props;
---

<article class="workflow-card" data-featured={featured}>
  <h2>{workflow.title}</h2>
  <p>{workflow.description}</p>
</article>

<style>
  .workflow-card {
    @apply rounded-lg border p-4;
  }

  .workflow-card[data-featured="true"] {
    @apply border-blue-500;
  }
</style>
```

### CSS/Tailwind

```html
<!-- ✅ 好的示例：使用 Tailwind 类 -->
<div class="flex items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-md">
  <h3 class="text-lg font-semibold text-gray-900">Title</h3>
  <button class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
    Click
  </button>
</div>

<!-- ❌ 避免：内联样式 -->
<div style="display: flex; padding: 16px;">
  <h3 style="font-size: 18px;">Title</h3>
</div>
```

### 文件组织

```
src/
├── components/
│   ├── common/          # 通用组件
│   ├── ui/              # UI 组件
│   └── workflow/        # 业务组件
├── layouts/             # 布局组件
├── pages/               # 页面
├── lib/
│   ├── services/        # 服务层
│   ├── types/           # 类型定义
│   └── utils/           # 工具函数
├── data/                # 静态数据
└── styles/              # 全局样式
```

---

## 💬 提交规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范。

### 提交消息格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type 类型

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式（不影响代码运行）
- `refactor`: 重构（既不是新功能也不是 Bug 修复）
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动
- `ci`: CI 配置文件和脚本的变动
- `revert`: 回滚之前的提交

### 示例

```bash
# 新功能
git commit -m "feat(workflow): add infinite scroll support"

# Bug 修复
git commit -m "fix(search): resolve search query encoding issue"

# 文档更新
git commit -m "docs(readme): update installation instructions"

# 性能优化
git commit -m "perf(api): optimize database queries with indexes"

# 重构
git commit -m "refactor(components): extract common logic to hooks"

# 多行提交消息
git commit -m "feat(workflow): add workflow filtering

- Add category filter
- Add complexity filter
- Update UI components

Closes #123"
```

### 提交最佳实践

1. **保持提交原子性**：每个提交只做一件事
2. **编写清晰的消息**：说明做了什么和为什么
3. **频繁提交**：小步快跑，便于回滚
4. **提交前测试**：确保代码可以运行

---

## 🔄 Pull Request 流程

### 1. 创建分支

```bash
# 同步主分支
git checkout main
git pull upstream main

# 创建功能分支
git checkout -b feat/your-feature-name

# 或修复分支
git checkout -b fix/bug-description
```

### 2. 开发和测试

```bash
# 进行开发
# ...

# 运行测试
npm run build
npm run preview

# 检查代码格式
npm run format

# 提交更改
git add .
git commit -m "feat: add new feature"
```

### 3. 推送分支

```bash
git push origin feat/your-feature-name
```

### 4. 创建 Pull Request

1. 访问 GitHub 仓库
2. 点击 "New Pull Request"
3. 选择你的分支
4. 填写 PR 模板

### PR 模板

```markdown
## 描述
[简要描述这个 PR 的目的]

## 更改类型
- [ ] Bug 修复
- [ ] 新功能
- [ ] 重构
- [ ] 文档更新
- [ ] 性能优化
- [ ] 其他

## 相关 Issue
Closes #[issue number]

## 更改内容
- [列出主要更改]
- [列出主要更改]

## 测试
- [ ] 本地测试通过
- [ ] 构建成功
- [ ] 添加了测试用例（如适用）

## 截图
[如果有 UI 更改，添加截图]

## 检查清单
- [ ] 代码遵循项目规范
- [ ] 已更新相关文档
- [ ] 提交消息符合规范
- [ ] 已自测所有更改
- [ ] 无 console.log 等调试代码
```

### 5. 代码审查

- 响应审查意见
- 进行必要的修改
- 推送更新

```bash
# 修改代码后
git add .
git commit -m "fix: address review comments"
git push origin feat/your-feature-name
```

### 6. 合并

PR 被批准后，维护者会合并到主分支。

---

## 🐛 问题报告

### 报告 Bug

使用 [GitHub Issues](https://github.com/your-org/n8nworkflows.xyz/issues) 报告 Bug。

### Bug 报告模板

```markdown
## Bug 描述
[清晰简洁地描述 Bug]

## 复现步骤
1. 访问 '...'
2. 点击 '...'
3. 滚动到 '...'
4. 看到错误

## 预期行为
[描述你期望发生什么]

## 实际行为
[描述实际发生了什么]

## 截图
[如果适用，添加截图]

## 环境信息
- 操作系统: [e.g. Windows 10, macOS 12.0]
- 浏览器: [e.g. Chrome 120, Safari 17]
- Node.js 版本: [e.g. 18.17.0]
- 项目版本: [e.g. 1.0.0]

## 额外信息
[任何其他相关信息]
```

---

## 💡 功能建议

### 提出新功能

使用 [GitHub Issues](https://github.com/your-org/n8nworkflows.xyz/issues) 提出功能建议。

### 功能建议模板

```markdown
## 功能描述
[清晰简洁地描述建议的功能]

## 问题背景
[这个功能解决什么问题？]

## 建议的解决方案
[描述你希望如何实现]

## 替代方案
[描述你考虑过的其他方案]

## 额外信息
[任何其他相关信息、截图、示例等]
```

---

## 🎨 设计贡献

### UI/UX 改进

1. 在 Issue 中讨论设计想法
2. 创建设计稿（Figma、Sketch 等）
3. 获得反馈后实现
4. 提交 PR

### 设计原则

- **简洁性**：保持界面简洁明了
- **一致性**：遵循现有设计系统
- **可访问性**：确保所有用户都能使用
- **响应式**：适配各种设备尺寸

---

## 📚 文档贡献

### 文档类型

- **用户文档**：使用指南、教程
- **开发文档**：API 文档、架构说明
- **贡献文档**：本文档的改进

### 文档规范

```markdown
# 标题使用 H1

## 主要章节使用 H2

### 子章节使用 H3

- 使用列表组织信息
- 保持简洁明了

\`\`\`bash
# 代码块使用语法高亮
npm install
\`\`\`

**重要内容**使用粗体

*强调内容*使用斜体

[链接文本](URL)
```

---

## 🧪 测试贡献

### 编写测试

```typescript
// 示例：单元测试
import { describe, it, expect } from 'vitest';
import { formatDate } from '@/lib/utils/date';

describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = new Date('2024-01-01');
    expect(formatDate(date)).toBe('2024年1月1日');
  });

  it('should handle invalid date', () => {
    expect(formatDate(null)).toBe('');
  });
});
```

### 运行测试

```bash
# 运行所有测试
npm test

# 运行特定测试
npm test -- workflow.test.ts

# 生成覆盖率报告
npm test -- --coverage
```

---

## 🏆 贡献者

感谢所有贡献者！

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- 这里会自动生成贡献者列表 -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

---

## 📞 联系方式

- **GitHub Issues**: [项目 Issues](https://github.com/your-org/n8nworkflows.xyz/issues)
- **Discord**: [加入我们的 Discord](https://discord.gg/your-invite)
- **Email**: contact@n8nworkflow.com

---

## 📄 许可证

通过贡献代码，您同意您的贡献将在 [MIT License](./LICENSE) 下授权。

---

## 🙏 致谢

感谢您花时间为这个项目做出贡献！每一个贡献，无论大小，都对项目的成功至关重要。

---

## 📚 相关资源

- [项目 README](./README.md)
- [架构文档](./ARCHITECTURE.md)
- [API 文档](./API.md)
- [测试指南](./TESTING.md)
- [部署检查清单](./DEPLOYMENT_CHECKLIST.md)
- [故障排除指南](./TROUBLESHOOTING.md)
