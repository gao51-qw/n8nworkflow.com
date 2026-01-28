Complete MCP server exposing 8 Bulk WHOIS API operations to AI agents.

## ⚡ Quick Setup

Need help? Want access to more workflows and even live Q&A sessions with a top verified n8n creator.. All 100% free?

[Join the community](https://www.skool.com/n8n-nodes-automation-lab-1570/about)

1. **Import** this workflow into your n8n instance
2. **Credentials** Add Bulk WHOIS API credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the Bulk WHOIS API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to http://localhost:5000
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (8 total)

### 🔧 Batch (4 endpoints)

• **GET /batch**: Get your batches
• **POST /batch**: Create batch. Batch is then being processed until all provided items have been completed. At any time it can be `get` to provide current status with results optionally.
• **DELETE /batch/{id}**: Delete batch
• **GET /batch/{id}**: Get batch

### 🔧 Db (1 endpoints)

• **GET /db**: Query domain database

### 🔧 Domains (3 endpoints)

• **GET /domains/{domain}/check**: Check domain availability
• **GET /domains/{domain}/rank**: Check domain rank (authority).
• **GET /domains/{domain}/whois**: WHOIS query for a domain

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native Bulk WHOIS API responses with full data structure

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