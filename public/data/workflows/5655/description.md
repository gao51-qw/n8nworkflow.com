Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing 13 Notion API operations to AI agents.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Credentials** Add Notion API credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the Notion API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://api.notion.com
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (13 total)

### 🔧 V1 (13 endpoints)

• **DELETE /v1/blocks/{id}**: Delete a block
• **GET /v1/blocks/{id}**: Retrieve a block
• **PATCH /v1/blocks/{id}**: Update a block
• **GET /v1/blocks/{id}/children**: Retrieve block children
• **PATCH /v1/blocks/{id}/children**: Append block children
• **GET /v1/comments**: Retrieve Comments
• **GET /v1/databases/{id}**: Retrieve a database
• **PATCH /v1/databases/{id}**: Update a database
• **POST /v1/databases/{id}/query**: Query a database
• **GET /v1/pages/{id}**: Retrieve a Page
• **PATCH /v1/pages/{id}**: Update Page properties 
• **GET /v1/pages/{page_id}/properties/{property_id}**: Retrieve a Page Property Item
• **GET /v1/users/{id}**: Retrieve a user

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native Notion API responses with full data structure

**Error Handling**: Built-in n8n HTTP request error management

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Cursor**: Add MCP server SSE URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Zero Setup**: No parameter mapping or configuration needed
• **AI-Ready**: Built-in `$fromAI()` expressions for all parameters
• **Production Ready**: Native n8n HTTP request handling and logging
• **Extensible**: Easily modify or add custom logic

&gt; 🆓 **[Free for community use](https://github.com/Cfomodz/community-use)!** Ready to deploy in under 2 minutes.