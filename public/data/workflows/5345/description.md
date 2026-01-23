# 🛠️ Pipedrive Tool MCP Server

Complete MCP server exposing all Pipedrive Tool operations to AI agents. Zero configuration needed - all 45 operations pre-built.

## ⚡ Quick Setup

Need help? Want access to more workflows and even live Q&A sessions with a top verified n8n creator.. All 100% free?

[Join the community](https://www.skool.com/n8n-nodes-automation-lab-1570/about)

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every Pipedrive Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n Pipedrive Tool tool with full error handling

## 📋 Available Operations (45 total)

Every possible Pipedrive Tool operation is included:

### 🔧 Activity (5 operations)

• **Create an activity**
• **Delete an activity**
• **Get an activity**
• **Get many activities**
• **Update an activity**

### 💰 Deal (7 operations)

• **Create a deal**
• **Delete a deal**
• **Duplicate a deal**
• **Get a deal**
• **Get many deals**
• **Search a deal**
• **Update a deal**

### 🔧 Dealactivity (1 operations)

• **Get many deal activities**

### 🔧 Dealproduct (4 operations)

• **Add a deal product**
• **Get many deal products**
• **Remove a deal product**
• **Update a deal product**

### 📄 File (5 operations)

• **Create a file**
• **Delete a file**
• **Download a file**
• **Get a file**
• **update details of a file**

### 🔧 Lead (5 operations)

• **Create a lead**
• **Delete a lead**
• **Get a lead**
• **Get many leads**
• **Update a lead**

### 🔧 Note (5 operations)

• **Create a note**
• **Delete a note**
• **Get a note**
• **Get many notes**
• **Update a note**

### 🏢 Organization (6 operations)

• **Create an organization**
• **Delete an organization**
• **Get an organization**
• **Get many organizations**
• **Search an organization**
• **Update an organization**

### 👥 Person (6 operations)

• **Create a person**
• **Delete a person**
• **Get a person**
• **Get many people**
• **Search a person**
• **Update a person**

### 🔧 Product (1 operations)

• **Get many products**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native Pipedrive Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every Pipedrive Tool operation available
• **Zero Setup**: No parameter mapping or configuration needed
• **AI-Ready**: Built-in `$fromAI()` expressions for all parameters
• **Production Ready**: Native n8n error handling and logging
• **Extensible**: Easily modify or add custom logic

&gt; 🆓 **[Free for community use](https://github.com/Cfomodz/community-use)!** Ready to deploy in under 2 minutes.