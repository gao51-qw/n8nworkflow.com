# Create, update alerts 🛠️ UptimeRobot tool MCP server 💪 all 21 operations

> Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing all UptimeRobot Tool operations to AI agents. Zero configuration needed - all 21 operations pre-built.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every UptimeRobot Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n UptimeRobot Tool tool with full error handling

## 📋 Available Operations (21 total)

Every possible UptimeRobot Tool operation is included:

### 👤 Account (1 operations)

• **Get an account**

### 🔧 Alertcontact (5 operations)

• **Create an alert contact**
• **Delete an alert contact**
• **Get an alert contact**
• **Get many alert contacts**
• **Update an alert contact**

### 🔧 Maintenancewindow (5 operations)

• **Create a maintenance window**
• **Delete a maintenance window**
• **Get a maintenance window**
• **Get many maintenance windows**
• **Update a maintenance window**

### 🔧 Monitor (6 operations)

• **Create a monitor**
• **Delete a monitor**
• **Get a monitor**
• **Get many monitors**
• **Reset a monitor**
• **Update a monitor**

### 🔧 Publicstatuspage (4 operations)

• **Create a public status page**
• **Delete a public status page**
• **Get a public status page**
• **Get many public status pages**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native UptimeRobot Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every UptimeRobot Tool operation available
• **Zero Setup**: No parameter mapping or configuration needed
• **AI-Ready**: Built-in `$fromAI()` expressions for all parameters
• **Production Ready**: Native n8n error handling and logging
• **Extensible**: Easily modify or add custom logic

&gt; 🆓 **[Free for community use](https://github.com/Cfomodz/community-use)!** Ready to deploy in under 2 minutes.

## 📊 Basic Information

- **Workflow ID:** 5075
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 124
- **Downloads:** 12
- **Created:** 2025/6/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5075)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **uptimeRobotTool** (×21)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
