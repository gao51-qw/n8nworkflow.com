# 导出 Kilo 任务对话文件计划

## 目标
将 Kilo Code 的所有任务对话历史从全局存储目录导出到当前工作区，并进行重命名和索引，以便于查阅。

## 路径信息
- **源目录**: `c:/Users/Administrator/AppData/Roaming/Code/User/globalStorage/kilocode.kilo-code/tasks/`
- **目标目录**: `d:/n8nworkflows.xyz/exports/kilo_tasks/`

## 导出步骤

### 1. 环境准备
- 创建目标目录 `exports/kilo_tasks/`。

### 2. 编写导出脚本 `scripts/export-kilo-tasks.mjs`
脚本将执行以下逻辑：
- 使用 `fs` 模块遍历源目录。
- 对每个子目录：
    - 尝试读取 `task_metadata.json`。
    - 提取 `task_metadata.json` 中的 `title` 和 `createdAt`。
    - 格式化日期为 `YYYY-MM-DD_HHmm`。
    - 清理标题中的非法文件名字符。
    - 构造新文件夹名：`[日期]_[标题]`。
    - 将 `api_conversation_history.json`、`task_metadata.json` 和 `ui_messages.json` 复制到新文件夹。
- 维护一个任务列表，用于生成 `summary.md`。

### 3. 生成索引
- 在 `exports/kilo_tasks/` 下创建 `summary.md`。
- 包含任务标题、日期和指向对应文件夹的链接。

### 4. 执行与验证
- 运行脚本。
- 检查 `exports/kilo_tasks/` 目录结构。
- 验证 `summary.md` 中的链接是否有效。

## 预期结果
```text
exports/kilo_tasks/
├── 2024-01-10_1430_初始化项目/
│   ├── api_conversation_history.json
│   ├── task_metadata.json
│   └── ui_messages.json
├── 2024-01-12_0945_导出任务对话/
│   ├── ...
├── summary.md
└── export_log.txt
```
