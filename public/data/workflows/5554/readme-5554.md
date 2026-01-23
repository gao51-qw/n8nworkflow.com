# File hash verification for AI agents with hashlookup CIRCL API

> Complete MCP server exposing 11 hashlookup CIRCL API operations to AI agents.

## ⚡ Quick Setup

Need help? Want access to more workflows and even live Q&A sessions with a top verified n8n creator.. All 100% free?

[Join the community](https://www.skool.com/n8n-nodes-automation-lab-1570/about)
1. **Import** this workflow into your n8n instance
2. **Credentials** Add hashlookup CIRCL API credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the hashlookup CIRCL API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://hashlookup.circl.lu
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (11 total)

### 🔧 Bulk (2 endpoints)

• **POST /bulk/md5**: Bulk Search MD5 Hashes
• **POST /bulk/sha1**: Bulk Search SHA1 Hashes

### 🔧 Children (1 endpoints)

• **GET /children/{sha1}/{count}/{cursor}**: Return children from a given SHA1.  A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.

### 🔧 Info (1 endpoints)

• **GET /info**: Get Database Info

### 🔧 Lookup (3 endpoints)

• **GET /lookup/md5/{md5}**: Lookup MD5.
• **GET /lookup/sha1/{sha1}**: Lookup SHA-1.
• **GET /lookup/sha256/{sha256}**: Lookup SHA-256.

### 🔧 Parents (1 endpoints)

• **GET /parents/{sha1}/{count}/{cursor}**: Return parents from a given SHA1. A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.

### 🔧 Session (2 endpoints)

• **GET /session/create/{name}**: Create a session key to keep search context. The session is attached to a name. After the session is created, the header `hashlookup_session` can be set to the session name.
• **GET /session/get/{name}**: Return set of matching and non-matching hashes from a session.

### 🔧 Stats (1 endpoints)

• **GET /stats/top**: Get Top Queries

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native hashlookup CIRCL API responses with full data structure

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

- **Workflow ID:** 5554
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 273
- **Downloads:** 27
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5554)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- SecOps
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **httpRequestTool** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
