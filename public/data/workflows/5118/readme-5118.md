# 🛠️ NASA tool MCP server 💪 all 15 operations

> # 🛠️ NASA Tool MCP Server

Complete MCP server exposing all NASA Tool operations to AI agents. Zero configuration needed - all 15 operations pre-built.

## ⚡ Quick Setup

Need help? Want access to more workflows and even live Q&A sessions with a top verified n8n creator.. All 100% free?

[Join the community](https://www.skool.com/n8n-nodes-automation-lab-1570/about)

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every NASA Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n NASA Tool tool with full error handling

## 📋 Available Operations (15 total)

Every possible NASA Tool operation is included:

### 🔧 Asteroidneobrowse (1 operations)

• **Get many asteroid neos**

### 🔧 Asteroidneofeed (1 operations)

• **Get an asteroid neo feed**

### 🔧 Asteroidneolookup (1 operations)

• **Get an asteroid neo lookup**

### 🔧 Astronomypictureoftheday (1 operations)

• **Get the astronomy picture of the day**

### 🔧 Donkicoronalmassejection (1 operations)

• **Get a DONKI coronal mass ejection**

### 🔧 Donkihighspeedstream (1 operations)

• **Get a DONKI high speed stream**

### 🔧 Donkiinterplanetaryshock (1 operations)

• **Get a DONKI interplanetary shock**

### 🔧 Donkimagnetopausecrossing (1 operations)

• **Get a DONKI magnetopause crossing**

### 🔧 Donkinotifications (1 operations)

• **Get a DONKI notifications**

### 🔧 Donkiradiationbeltenhancement (1 operations)

• **Get a DONKI radiation belt enhancement**

### 🔧 Donkisolarenergeticparticle (1 operations)

• **Get a DONKI solar energetic particle**

### 🔧 Donkisolarflare (1 operations)

• **Get a DONKI solar flare**

### 🔧 Donkiwsaenlilsimulation (1 operations)

• **Get a DONKI wsa enlil simulation**

### 🔧 Earthassets (1 operations)

• **Get Earth assets**

### 🔧 Earthimagery (1 operations)

• **Get Earth imagery**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native NASA Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every NASA Tool operation available
• **Zero Setup**: No parameter mapping or configuration needed
• **AI-Ready**: Built-in `$fromAI()` expressions for all parameters
• **Production Ready**: Native n8n error handling and logging
• **Extensible**: Easily modify or add custom logic

&gt; 🆓 **[Free for community use](https://github.com/Cfomodz/community-use)!** Ready to deploy in under 2 minutes.

## 📊 Basic Information

- **Workflow ID:** 5118
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 160
- **Downloads:** 16
- **Created:** 2025/6/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5118)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **nasaTool** (×15)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
