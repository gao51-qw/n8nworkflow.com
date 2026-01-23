# Convert and manipulate PDFs with Api2Pdf and AWS Lambda

> Complete MCP server exposing 9 Api2Pdf - PDF Generation, Powered by AWS Lambda API operations to AI agents.

## ⚡ Quick Setup

Need help? Want access to more workflows and even live Q&A sessions with a top verified n8n creator.. All 100% free?

[Join the community](https://www.skool.com/n8n-nodes-automation-lab-1570/about)
1. **Import** this workflow into your n8n instance
2. **Credentials** Add Api2Pdf - PDF Generation, Powered by AWS Lambda credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the Api2Pdf - PDF Generation, Powered by AWS Lambda API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://v2018.api2pdf.com
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (9 total)

### 🔧 Chrome (3 endpoints)

• **POST /chrome/html**: Convert raw HTML to PDF
• **GET /chrome/url**: Convert URL to PDF
• **POST /chrome/url**: Convert URL to PDF

### 🔧 Libreoffice (1 endpoints)

• **POST /libreoffice/convert**: Convert office document or image to PDF

### 🔧 Merge (1 endpoints)

• **POST /merge**: Merge multiple PDFs together

### 🔧 Wkhtmltopdf (3 endpoints)

• **POST /wkhtmltopdf/html**: Convert raw HTML to PDF
• **GET /wkhtmltopdf/url**: Convert URL to PDF
• **POST /wkhtmltopdf/url**: Convert URL to PDF

### 🔧 Zebra (1 endpoints)

• **GET /zebra**: Generate bar codes and QR codes with ZXING.

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native Api2Pdf - PDF Generation, Powered by AWS Lambda API responses with full data structure

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

- **Workflow ID:** 5522
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 321
- **Downloads:** 32
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5522)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **httpRequestTool** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
