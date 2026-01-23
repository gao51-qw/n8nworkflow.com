# NPR listening service MCP server

> Complete MCP server exposing 9 NPR Listening Service API operations to AI agents.

## ⚡ Quick Setup
Need help? Want access to more workflows and even live Q&A sessions with a top verified n8n creator.. All 100% free?

[Join the community](https://www.skool.com/n8n-nodes-automation-lab-1570/about)
1. **Import** this workflow into your n8n instance
2. **Credentials** Add NPR Listening Service credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the NPR Listening Service API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://listening.api.npr.org
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (9 total)

### 🔧 V2 (9 endpoints)

• **GET /v2/aggregation/{aggId}/recommendations**: Get a set of recommendations for an aggregation independent of the user's lis...
• **GET /v2/channels**: List Available Channels
• **GET /v2/history**: Get User Ratings History
• **GET /v2/organizations/{orgId}/categories/{category}/recommendations**: Get a list of recommendations from a category of content from an organization
• **GET /v2/organizations/{orgId}/recommendations**: Get a variety of details about an organization including various lists of rec...
• **GET /v2/promo/recommendations**: Get Recent Promo Audio
• **POST /v2/ratings**: Submit Media Ratings
• **GET /v2/recommendations**: Get User Recommendations
• **GET /v2/search/recommendations**: Get Search Recommendations

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native NPR Listening Service API responses with full data structure

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

## 📊 Basic Information

- **Workflow ID:** 5650
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 231
- **Downloads:** 23
- **Created:** 2025/7/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5650)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×10)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **httpRequestTool** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
