# Transportation laws and incentives MCP server

> Complete MCP server exposing 4 Transportation Laws and Incentives API operations to AI agents.

## ⚡ Quick Setup
Need help? Want access to more workflows and even live Q&A sessions with a top verified n8n creator.. All 100% free?

[Join the community](https://www.skool.com/n8n-nodes-automation-lab-1570)
1. **Import** this workflow into your n8n instance
2. **Credentials** Add Transportation Laws and Incentives credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the Transportation Laws and Incentives API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to http://developer.nrel.gov/api/transportation-incentives-laws
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (4 total)

### 🔧 V1.{Output_Format} (1 endpoints)

• **GET /v1.{output_format}**: Return a full list of laws and incentives that match your query.

### 🔧 V1 (3 endpoints)

• **GET /v1/category-list.{output_format}**: Return the law categories for a given category type.
• **GET /v1/pocs.{output_format}**: Get the points of contact for a given jurisdiction.
• **GET /v1/{id}.{output_format}**: Fetch the details of a specific law given the law's ID.

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native Transportation Laws and Incentives API responses with full data structure

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

- **Workflow ID:** 5644
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 333
- **Downloads:** 33
- **Created:** 2025/7/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5644)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **httpRequestTool** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
