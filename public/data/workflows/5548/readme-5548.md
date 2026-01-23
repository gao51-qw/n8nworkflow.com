# Sms messaging API integration for AI agents with BulkSMS

> Complete MCP server exposing 15 BulkSMS JSON REST API operations to AI agents.

## ⚡ Quick Setup

Need help? Want access to more workflows and even live Q&A sessions with a top verified n8n creator.. All 100% free?

[Join the community](https://www.skool.com/n8n-nodes-automation-lab-1570/about)

1. **Import** this workflow into your n8n instance
2. **Credentials** Add BulkSMS JSON REST API credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the BulkSMS JSON REST API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://api.bulksms.com/v1
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (15 total)

### 🔧 Blocked-Numbers (2 endpoints)

• **GET /blocked-numbers**: Block Phone Number
• **POST /blocked-numbers**: Create a blocked number

### 🔧 Credit (1 endpoints)

• **POST /credit/transfer**: Transfer Account Credits

### 🔧 Messages (5 endpoints)

• **GET /messages**: List Related Messages
• **POST /messages**: Send Messages
• **GET /messages/send**: Send message by simple GET or POST
• **GET /messages/{id}**: Show Message
• **GET /messages/{id}/relatedReceivedMessages**: List Related Messages

### 🔧 Profile (1 endpoints)

• **GET /profile**: Retrieve User Profile

### 🔧 Rmm (1 endpoints)

• **POST /rmm/pre-sign-attachment**: Generate Attachment Upload URL

### 🔧 Webhooks (5 endpoints)

• **GET /webhooks**: Update Webhook Settings
• **POST /webhooks**: Create a webhook
• **DELETE /webhooks/{id}**: Delete a webhook
• **GET /webhooks/{id}**: Read a webhook
• **POST /webhooks/{id}**: Update a webhook

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native BulkSMS JSON REST API responses with full data structure

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

- **Workflow ID:** 5548
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 679
- **Downloads:** 67
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5548)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- Social Media
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×8)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **httpRequestTool** (×15)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
