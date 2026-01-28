Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing all Lemlist Tool operations to AI agents. Zero configuration needed - all 15 operations pre-built.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every Lemlist Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n Lemlist Tool tool with full error handling

## 📋 Available Operations (15 total)

Every possible Lemlist Tool operation is included:

### 🔧 Activity (1 operations)

• **Get many activities**

### 📢 Campaign (2 operations)

• **Get many campaigns**
• **Get campaign stats**

### 🔧 Enrich (3 operations)

• **Fetches a previously completed enrichment**
• **Enrich a lead using an email or LinkedIn URL**
• **Enrich a person using an email or LinkedIn URL**

### 🔧 Lead (4 operations)

• **Create a lead**
• **Delete a lead**
• **Get a lead**
• **Unsubscribe a lead**

### 🔧 Team (2 operations)

• **Get a team**
• **Get team credits**

### 🔧 Unsubscribe (3 operations)

• **Add an email to an unsubscribe list**
• **Delete an email from an unsubscribe list**
• **Get many unsubscribed emails**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native Lemlist Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every Lemlist Tool operation available
• **Zero Setup**: No parameter mapping or configuration needed
• **AI-Ready**: Built-in `$fromAI()` expressions for all parameters
• **Production Ready**: Native n8n error handling and logging
• **Extensible**: Easily modify or add custom logic

&gt; 🆓 **[Free for community use](https://github.com/Cfomodz/community-use)!** Ready to deploy in under 2 minutes.