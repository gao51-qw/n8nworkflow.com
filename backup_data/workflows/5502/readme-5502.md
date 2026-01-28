# Aws cost & usage report management for AI agents

> Complete MCP server exposing 4 AWS Cost and Usage Report Service API operations to AI agents.

## ⚡ Quick Setup

Need help? Want access to more workflows and even live Q&A sessions with a top verified n8n creator.. All 100% free?

[Join the community](https://www.skool.com/n8n-nodes-automation-lab-1570/about)

1. **Import** this workflow into your n8n instance
2. **Credentials** Add AWS Cost and Usage Report Service credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the AWS Cost and Usage Report Service API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to http://cur.{region}.amazonaws.com
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (4 total)

### 🔧 #X-Amz-Target=Awsorigamiservicegatewayservice.Deletereportdefinition (1 endpoints)

• **POST /#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition**: Deletes the specified report.

### 🔧 #X-Amz-Target=Awsorigamiservicegatewayservice.Describereportdefinitions (1 endpoints)

• **POST /#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions**: Lists the AWS Cost and Usage reports available to this account.

### 🔧 #X-Amz-Target=Awsorigamiservicegatewayservice.Modifyreportdefinition (1 endpoints)

• **POST /#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition**: Allows you to programatically update your report preferences.

### 🔧 #X-Amz-Target=Awsorigamiservicegatewayservice.Putreportdefinition (1 endpoints)

• **POST /#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition**: Creates a new report using the description that you provide.

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native AWS Cost and Usage Report Service API responses with full data structure

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

- **Workflow ID:** 5502
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1019
- **Downloads:** 101
- **Created:** 2025/7/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5502)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- DevOps
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
