# 🛠️ Harvest tool MCP server 💪 all 51 operations

> Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing all Harvest Tool operations to AI agents. Zero configuration needed - all 51 operations pre-built.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every Harvest Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n Harvest Tool tool with full error handling

## 📋 Available Operations (51 total)

Every possible Harvest Tool operation is included:

### 🔧 Client (5 operations)

• **Create a client**
• **Delete a client**
• **Get data of a client**
• **Get data of all clients**
• **Update a client**

### 🔧 Company (1 operations)

• **Retrieve the company for the currently authenticated user**

### 📇 Contact (5 operations)

• **Create a contact**
• **Delete a contact**
• **Get data of a contact**
• **Get data of all contacts**
• **Update a contact**

### 🔧 Estimate (5 operations)

• **Create an estimate**
• **Delete an estimate**
• **Get data of an estimate**
• **Get data of all estimates**
• **Update an estimate**

### 🔧 Expense (5 operations)

• **Create an expense**
• **Delete an expense**
• **Get data of an expense**
• **Get data of all expenses**
• **Update an expense**

### 🔧 Invoice (5 operations)

• **Create an invoice**
• **Delete an invoice**
• **Get data of an invoice**
• **Get data of all invoices**
• **Update an invoice**

### 🔧 Project (5 operations)

• **Create a project**
• **Delete a project**
• **Get data of a project**
• **Get data of all projects**
• **Update a project**

### 🔧 Task (5 operations)

• **Create a task**
• **Delete a task**
• **Get data of a task**
• **Get data of all tasks**
• **Update a task**

### 🔧 Timeentry (9 operations)

• **Create a time entry via duration**
• **Create a time entry via start and end time**
• **Delete a time entry**
• **Delete a time entry’s external reference**
• **Get data of a time entry**
• **Get data of all time entries**
• **Restart a time entry**
• **Stop a time entry**
• **Update a time entry**

### 👤 User (6 operations)

• **Create a user**
• **Delete a user**
• **Get data of a user**
• **Get data of all users**
• **Get data of authenticated user**
• **Update a user**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native Harvest Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every Harvest Tool operation available
• **Zero Setup**: No parameter mapping or configuration needed
• **AI-Ready**: Built-in `$fromAI()` expressions for all parameters
• **Production Ready**: Native n8n error handling and logging
• **Extensible**: Easily modify or add custom logic

&gt; 🆓 **[Free for community use](https://github.com/Cfomodz/community-use)!** Ready to deploy in under 2 minutes.

## 📊 Basic Information

- **Workflow ID:** 5242
- **Complexity:** advanced
- **Node Count:** 63
- **Views:** 132
- **Downloads:** 13
- **Created:** 2025/6/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5242)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- Project Management
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×11)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **harvestTool** (×51)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 63 nodes with 51 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
