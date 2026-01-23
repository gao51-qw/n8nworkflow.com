# Complete Zendesk API integration with MCP server for AI agents

> Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing all Zendesk Tool operations to AI agents. Zero configuration needed - all 23 operations pre-built.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every Zendesk Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n Zendesk Tool tool with full error handling

## 📋 Available Operations (23 total)

Every possible Zendesk Tool operation is included:

### 🔧 Ticket (6 operations)

• **Create a ticket**
• **Delete a ticket**
• **Get a ticket**
• **Get many tickets**
• **Recover a ticket**
• **Update a ticket**

### 🔧 Ticketfield (2 operations)

• **Get a ticket field**
• **Get many ticket fields**

### 👤 User (8 operations)

• **Create a user**
• **Delete a user**
• **Get a user**
• **Get many users**
• **Get a user's organizations**
• **Get data related to a user**
• **Search a user**
• **Update a user**

### 🏢 Organization (7 operations)

• **Count organizations**
• **Create an organization**
• **Delete an organization**
• **Get an organization**
• **Get many organizations**
• **Get data related to an organization**
• **Update an organization**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native Zendesk Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every Zendesk Tool operation available
• **Zero Setup**: No parameter mapping or configuration needed
• **AI-Ready**: Built-in `$fromAI()` expressions for all parameters
• **Production Ready**: Native n8n error handling and logging
• **Extensible**: Easily modify or add custom logic

&gt; 🆓 **[Free for community use](https://github.com/Cfomodz/community-use)!** Ready to deploy in under 2 minutes.

## 📊 Basic Information

- **Workflow ID:** 5057
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 374
- **Downloads:** 37
- **Created:** 2025/6/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5057)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **zendeskTool** (×23)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
