# Manage AWS S3 with GPT-4 agent and Google Sheets audit logging via Slack

> # AI-Powered AWS S3 Manager with Audit Logging in n8n (Slack/ChatOps Workflow)
&gt; This n8n workflow empowers users to manage AWS S3 buckets and files using natural language via Slack or chat platforms. Equipped with an OpenAI-powered Agent and integrated audit logging to Google Sheets, it supports operations like listing buckets, copying/deleting files, managing folders, and automatically records every action for compliance and traceability.
## 👥 Who’s it for
This workflow is built for:
- DevOps engineers who want to manage AWS S3 using natural chat commands.
- Technical support teams interacting with AWS via Slack, Telegram, etc.
- Automation engineers building ChatOps tools.
- Organizations that require **audit logs** for every cloud operation.

Users don’t need AWS Console or CLI access — just send a message like “Copy file from dev to prod”.
## ⚙️ How it works / What it does
This workflow turns natural chat input into **automated AWS S3 actions** using an OpenAI-powered AI Agent in n8n.
### 🔁 Workflow Overview:
1. **Trigger**: A user sends a message in Slack, Telegram, etc.
2. **AI Agent**: 
   - Interprets the message
   - Calls one of 6 S3 tools:
     - `ListBuckets`
     - `ListObjects`
     - `CopyObject`
     - `DeleteObject`
     - `ListFolders`
     - `CreateFolder`
3. **S3 Action**: Performs the requested AWS S3 operation.
4. **Audit Log**: Logs the tool call to Google Sheets using `AddAuditLog`:
   - Includes timestamp, tool used, parameters, prompt, reasoning, and user info.

## 🛠️ How to set up
### Step-by-step Setup:
1. **Webhook Trigger**
   - Slack, Telegram, or custom chat platform → connects to n8n.

2. **OpenAI Agent**
   - Model: `gpt-4` or `gpt-3.5-turbo`
   - Memory: Simple Memory Node
   - Prompt: Instructs agent to always follow tool calls with an `AddAuditLog` call.

3. **AWS S3 Nodes**
   - Configure each tool with AWS credentials.
   - Tools:
     - `getAll: bucket`
     - `getAll: file`
     - `copy: file`
     - `delete: file`
     - `getAll: folder`
     - `create: folder`

4. **Google Sheets Node**
   - Sheet: `AWS S3 Audit Logs`
   - Operation: `Append or Update Row`
   - Columns (must match input keys):  
     - `timestamp`, `tool`, `status`, `chat_prompt`, `parameters`, `user_name`, `tool_call_reasoning`

5. **Agent Tool Definitions**
   - Include `AddAuditLog` as a 7th tool.
   - Agent calls it **immediately after every S3 action** (except when logging itself).

## ✅ Requirements
- [ ] n8n instance with AI Agent feature
- [ ] OpenAI API Key
- [ ] AWS IAM user with S3 access
- [ ] Google Sheet with required columns
- [ ] Chat integration (Slack, Telegram, etc.)

## 🧩 How to customize the workflow
| Feature              | Customization Tip                                            |
|----------------------|--------------------------------------------------------------|
| 🌎 Multi-region S3   | Let users include region in the message or agent memory      |
| 🛡️ Restricted actions| Use memory/user ID to limit delete/copy actions              |
| 📁 Folder filtering  | Extend `ListObjects` with prefix/suffix filters              |
| 📤 Upload file       | Add `PutObject` with pre-signed URL support                  |
| 🧾 Extra logging     | Add IP, latency, error trace to audit logs                   |
| 📊 Reporting         | Link Google Sheet to Looker Studio for audit dashboards      |
| 🚨 Security alerts   | Notify via Slack/Email when `DeleteObject` is triggered      |

## 📊 Basic Information

- **Workflow ID:** 8586
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 86
- **Downloads:** 8
- **Created:** 2025/9/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8586)

## 👤 Author

- **Name:** Trung Tran
- **Username:** @trungtran

## 🏷️ Categories

- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **awsS3Tool** (×6)
- **googleSheetsTool** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
