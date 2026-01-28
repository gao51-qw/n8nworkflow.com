# 🛠️ Asana tool MCP server 💪 all 22 operations

> Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing all Asana Tool operations to AI agents. Zero configuration needed - all 22 operations pre-built.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every Asana Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n Asana Tool tool with full error handling

## 📋 Available Operations (22 total)

Every possible Asana Tool operation is included:

### 🔧 Project (5 operations)

• **Create a project**
• **Delete a project**
• **Get a project**
• **Get many projects**
• **Update a project**

### 🔧 Subtask (2 operations)

• **Create a subtask**
• **Get many subtasks**

### 🔧 Task (7 operations)

• **Create a task**
• **Delete a task**
• **Get a task**
• **Get many tasks**
• **Move a task**
• **Search a task**
• **Update a task**

### 🔧 Taskcomment (2 operations)

• **Add a task comment**
• **Remove a task comment**

### 🔧 Taskproject (2 operations)

• **Add a task project**
• **Remove a task project**

### 🔧 Tasktag (2 operations)

• **Add a task tag**
• **Remove a task tag**

### 👤 User (2 operations)

• **Get a user**
• **Get many users**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native Asana Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every Asana Tool operation available
• **Zero Setup**: No parameter mapping or configuration needed
• **AI-Ready**: Built-in `$fromAI()` expressions for all parameters
• **Production Ready**: Native n8n error handling and logging
• **Extensible**: Easily modify or add custom logic

&gt; 🆓 **[Free for community use](https://github.com/Cfomodz/community-use)!** Ready to deploy in under 2 minutes.

## 📊 Basic Information

- **Workflow ID:** 5332
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 164
- **Downloads:** 16
- **Created:** 2025/6/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5332)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- Project Management
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×8)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **asanaTool** (×22)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
