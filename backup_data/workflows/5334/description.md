Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing all Airtop Tool operations to AI agents. Zero configuration needed - all 20 operations pre-built.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every Airtop Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n Airtop Tool tool with full error handling

## 📋 Available Operations (20 total)

Every possible Airtop Tool operation is included:

### 🔧 Extraction (3 operations)

• **Query page**
• **Query page with pagination**
• **Smart scrape page**

### 📄 File (5 operations)

• **Delete a file**
• **Get a file**
• **Get many files**
• **Load a file**
• **Upload a file**

### 🔧 Interaction (5 operations)

• **Click an element**
• **Fill form**
• **Hover on an element**
• **Scroll on page**
• **Type text**

### 🔧 Session (3 operations)

• **Create a session**
• **Save a profile on session termination**
• **Terminate a session**

### 🔧 Window (4 operations)

• **Create a window**
• **Load a page**
• **Take screenshot**
• **Close a window**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native Airtop Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every Airtop Tool operation available
• **Zero Setup**: No parameter mapping or configuration needed
• **AI-Ready**: Built-in `$fromAI()` expressions for all parameters
• **Production Ready**: Native n8n error handling and logging
• **Extensible**: Easily modify or add custom logic

&gt; 🆓 **[Free for community use](https://github.com/Cfomodz/community-use)!** Ready to deploy in under 2 minutes.