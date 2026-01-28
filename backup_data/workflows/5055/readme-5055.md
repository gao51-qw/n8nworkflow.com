# Multi-engine search API server with SerpApi - complete MCP integration

> This workflow contains community nodes that are only compatible with the self-hosted version of n8n.

# 🛠️ SerpApi Official Tool MCP Server

Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing all SerpApi Official Tool operations to AI agents. Zero configuration needed - all 22 operations pre-built.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every SerpApi Official Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n SerpApi Official Tool tool with full error handling

## 📋 Available Operations (22 total)

Every possible SerpApi Official Tool operation is included:

### 🔧 Search (22 operations)

• **Search Baidu**
• **Search Bing Images**
• **Search Bing**
• **Search DuckDuckGo**
• **Search eBay**
• **Search Google Autocomplete**
• **Search Google Flights**
• **Search Google Images**
• **Search Google Jobs**
• **Search Google Lens**
• **Search Google**
• **Search Google Local**
• **Search Google Maps**
• **Search Google Maps Directions**
• **Search Google Maps Reviews**
• **Search Google News**
• **Search Google Product**
• **Search Google Scholar**
• **Search Google**
• **Search Google Shopping**
• **Search Google Trends**
• **Search Google Videos**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native SerpApi Official Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every SerpApi Official Tool operation available
• **Zero Setup**: No parameter mapping or configuration needed
• **AI-Ready**: Built-in `$fromAI()` expressions for all parameters
• **Production Ready**: Native n8n error handling and logging
• **Extensible**: Easily modify or add custom logic

&gt; 🆓 **[Free for community use](https://github.com/Cfomodz/community-use)!** Ready to deploy in under 2 minutes.

## 📊 Basic Information

- **Workflow ID:** 5055
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 189
- **Downloads:** 18
- **Created:** 2025/6/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5055)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **n8n-nodes-serpapi.serpApiTool** (×21)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
