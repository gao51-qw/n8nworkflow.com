# Audio & video data search and analysis with Clarify API and AI agent integration

> Complete MCP server exposing 21 api.clarify.io API operations to AI agents.

## ⚡ Quick Setup

Need help? Want access to more workflows and even live Q&A sessions with a top verified n8n creator.. All 100% free?

[Join the community](https://www.skool.com/n8n-nodes-automation-lab-1570/about)

1. **Import** this workflow into your n8n instance
2. **Credentials** Add api.clarify.io credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the api.clarify.io API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://api.clarify.io/
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (21 total)

### 🔧 V1 (21 endpoints)

• **GET /v1/bundles**: Add Media to Track
• **POST /v1/bundles**: Create a bundle
• **DELETE /v1/bundles/{bundle_id}**: Delete a bundle
• **GET /v1/bundles/{bundle_id}**: Get a bundle
• **PUT /v1/bundles/{bundle_id}**: Update a bundle
• **GET /v1/bundles/{bundle_id}/insights**: Get bundle insights
• **POST /v1/bundles/{bundle_id}/insights**: Request an insight to be run
• **GET /v1/bundles/{bundle_id}/insights/{insight_id}**: Get bundle insight
• **DELETE /v1/bundles/{bundle_id}/metadata**: Delete bundle metadata
• **GET /v1/bundles/{bundle_id}/metadata**: Get bundle metadata
• **PUT /v1/bundles/{bundle_id}/metadata**: Update bundle metadata
• **DELETE /v1/bundles/{bundle_id}/tracks**: Delete bundle tracks
• **GET /v1/bundles/{bundle_id}/tracks**: Get bundle tracks
• **POST /v1/bundles/{bundle_id}/tracks**: Add a track for a bundle
• **PUT /v1/bundles/{bundle_id}/tracks**: Update a tracks for a bundle
• **DELETE /v1/bundles/{bundle_id}/tracks/{track_id}**: Delete a bundle track
• **GET /v1/bundles/{bundle_id}/tracks/{track_id}**: Get bundle track
• **PUT /v1/bundles/{bundle_id}/tracks/{track_id}**: Add media to a track
• **GET /v1/reports/scores**: Generate Group Report
• **GET /v1/reports/trends**: Generate Trends Report
• **GET /v1/search**: Search Bundles

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native api.clarify.io API responses with full data structure

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

- **Workflow ID:** 5557
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 646
- **Downloads:** 64
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5557)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **httpRequestTool** (×21)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
