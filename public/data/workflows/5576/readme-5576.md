# eBay fulfillment API operations for AI agents with MCP server

> Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing 15 Fulfillment API operations to AI agents.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Credentials** Add Fulfillment API credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the Fulfillment API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://api.ebay.com{basePath}
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (15 total)

### 🔧 Order (6 endpoints)

• **GET /order**: Retrieve Fulfillment Details
• **GET /order/{orderId}**: Get {Orderid}
• **GET /order/{orderId}/shipping_fulfillment**: Get Shipping Fulfillment
• **POST /order/{orderId}/shipping_fulfillment**: Create/Search Shipping Fulfillment
• **GET /order/{orderId}/shipping_fulfillment/{fulfillmentId}**: Get {Fulfillmentid}
• **POST /order/{order_id}/issue_refund**: Issue Refund

### 🔧 Payment_Dispute (8 endpoints)

• **GET /payment_dispute/{payment_dispute_id}**: Get Payment Dispute Details
• **POST /payment_dispute/{payment_dispute_id}/accept**: Accept Payment Dispute
• **GET /payment_dispute/{payment_dispute_id}/activity**: Get Payment Dispute Activity
• **POST /payment_dispute/{payment_dispute_id}/add_evidence**: Add an Evidence File
• **POST /payment_dispute/{payment_dispute_id}/contest**: Contest Payment Dispute
• **GET /payment_dispute/{payment_dispute_id}/fetch_evidence_content**: Get Payment Dispute Evidence File
• **POST /payment_dispute/{payment_dispute_id}/update_evidence**: Update evidence
• **POST /payment_dispute/{payment_dispute_id}/upload_evidence_file**: Upload an Evidence File

### 🔧 Payment_Dispute_Summary (1 endpoints)

• **GET /payment_dispute_summary**: Search Payment Disputes

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native Fulfillment API responses with full data structure

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

- **Workflow ID:** 5576
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 112
- **Downloads:** 11
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5576)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- CRM
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **httpRequestTool** (×15)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
