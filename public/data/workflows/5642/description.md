Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing 15 Pinecone API operations to AI agents.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Credentials** Add Pinecone API credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the Pinecone API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://controller.{environment}.pinecone.io
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (15 total)

### 🔧 Collections (4 endpoints)

• **GET /collections**: Describe Collection
• **POST /collections**: Create collection
• **DELETE /collections/{collectionName}**: Delete Collection
• **GET /collections/{collectionName}**: Describe collection

### 🔧 Describe_Index_Stats (1 endpoints)

• **POST /describe_index_stats**: Retrieve Index Stats

### 🔧 Indexes (5 endpoints)

• **GET /indexes**: Configure Index
• **POST /indexes**: Create index
• **DELETE /indexes/{indexName}**: Delete Index
• **GET /indexes/{indexName}**: Describe index
• **PATCH /indexes/{indexName}**: Configure index

### 🔧 Query (1 endpoints)

• **POST /query**: Execute Query

### 🔧 Vectors (4 endpoints)

• **POST /vectors/delete**: Delete Vectors
• **POST /vectors/fetch**: Fetch Vectors
• **POST /vectors/update**: Update Vectors
• **POST /vectors/upsert**: Upsert Vectors

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native Pinecone API responses with full data structure

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