Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing 8 YouTube Reporting API operations to AI agents.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Credentials** Add YouTube Reporting API credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the YouTube Reporting API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://youtubereporting.googleapis.com/
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (8 total)

### 🔧 V1 (8 endpoints)

• **GET /v1/jobs**: Retrieve Report Metadata
• **POST /v1/jobs**: Creates a job and returns it.
• **DELETE /v1/jobs/{jobId}**: Deletes a job.
• **GET /v1/jobs/{jobId}**: Gets a job.
• **GET /v1/jobs/{jobId}/reports**: Lists reports created by a specific job. Returns NOT_FOUND if the job does no...
• **GET /v1/jobs/{jobId}/reports/{reportId}**: Gets the metadata of a specific report.
• **GET /v1/media/{resourceName}**: Method for media download. Download is supported on the URI `/v1/media/{+name...
• **GET /v1/reportTypes**: List Report Types

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native YouTube Reporting API responses with full data structure

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