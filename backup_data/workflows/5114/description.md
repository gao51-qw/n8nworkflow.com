Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing all Onfleet Tool operations to AI agents. Zero configuration needed - all 37 operations pre-built.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every Onfleet Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n Onfleet Tool tool with full error handling

## 📋 Available Operations (37 total)

Every possible Onfleet Tool operation is included:

### 🔧 Admin (4 operations)

• **Create an admin**
• **Delete an admin**
• **Get many admins**
• **Update an admin**

### 🔧 Container (3 operations)

• **Add tasks**
• **Get a container**
• **Update tasks**

### 🔧 Destination (2 operations)

• **Create a destination**
• **Get a destination**

### 🔧 Hub (3 operations)

• **Create a hub**
• **Get many hubs**
• **Update a hub**

### 🏢 Organization (2 operations)

• **Get my organization**
• **Get a delegatee's details**

### 🔧 Recipient (3 operations)

• **Create a recipient**
• **Get a recipient**
• **Update a recipient**

### 🔧 Task (7 operations)

• **Clone a task**
• **Complete a task**
• **Create a task**
• **Delete a task**
• **Get a task**
• **Get many tasks**
• **Update a task**

### 🔧 Team (7 operations)

• **Auto-dispatch a team**
• **Create a team**
• **Delete a team**
• **Get a team**
• **Get many teams**
• **Get time estimates for a team**
• **Update a team**

### 🔧 Worker (6 operations)

• **Create a worker**
• **Delete a worker**
• **Get a worker**
• **Get many workers**
• **Get the schedule for a worker**
• **Update a worker**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native Onfleet Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every Onfleet Tool operation available
• **Zero Setup**: No parameter mapping or configuration needed
• **AI-Ready**: Built-in `$fromAI()` expressions for all parameters
• **Production Ready**: Native n8n error handling and logging
• **Extensible**: Easily modify or add custom logic

&gt; 🆓 **[Free for community use](https://github.com/Cfomodz/community-use)!** Ready to deploy in under 2 minutes.