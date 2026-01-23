# Search, manage, and analyze podcasts with Listen API for AI Agents

> Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing 23 Listen API: Podcast Search, Directory, and Insights API operations to AI agents.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Credentials** Add Listen API: Podcast Search, Directory, and Insights API credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the Listen API: Podcast Search, Directory, and Insights API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://listen-api.listennotes.com/api/v2
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (23 total)

### 🔧 Best_Podcasts (1 endpoints)

• **GET /best_podcasts**: Delete Podcast by ID

### 🔧 Curated_Podcasts (2 endpoints)

• **GET /curated_podcasts**: Fetch Curated Podcast List by ID
• **GET /curated_podcasts/{id}**: Fetch a curated list of podcasts by id

### 🔧 Episodes (3 endpoints)

• **POST /episodes**: Fetch Episode Recommendations
• **GET /episodes/{id}**: Fetch detailed meta data for an episode by id
• **GET /episodes/{id}/recommendations**: Fetch recommendations for an episode

### 🔧 Genres (1 endpoints)

• **GET /genres**: Fetch Podcast Genres

### 🔧 Just_Listen (1 endpoints)

• **GET /just_listen**: Fetch Random Podcast Episode

### 🔧 Languages (1 endpoints)

• **GET /languages**: Fetch Supported Languages

### 🔧 Playlists (2 endpoints)

• **GET /playlists**: Fetch Playlist Details by ID
• **GET /playlists/{id}**: Fetch a playlist's info and items (i.e., episodes or podcasts).

### 🔧 Podcasts (6 endpoints)

• **POST /podcasts**: Fetch Podcast Audience Data
• **POST /podcasts/submit**: Submit a podcast to Listen Notes database
• **DELETE /podcasts/{id}**: Request to delete a podcast
• **GET /podcasts/{id}**: Fetch detailed meta data and episodes for a podcast by id
• **GET /podcasts/{id}/audience**: Fetch audience demographics for a podcast
• **GET /podcasts/{id}/recommendations**: Fetch recommendations for a podcast

### 🔧 Regions (1 endpoints)

• **GET /regions**: Fetch Supported Regions

### 🔧 Related_Searches (1 endpoints)

• **GET /related_searches**: Fetch Related Search Terms

### 🔧 Search (1 endpoints)

• **GET /search**: Full-Text Search

### 🔧 Spellcheck (1 endpoints)

• **GET /spellcheck**: Spell Check Search Term

### 🔧 Trending_Searches (1 endpoints)

• **GET /trending_searches**: Fetch Trending Search Terms

### 🔧 Typeahead (1 endpoints)

• **GET /typeahead**: Typeahead Search

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native Listen API: Podcast Search, Directory, and Insights API responses with full data structure

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

- **Workflow ID:** 5605
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 115
- **Downloads:** 11
- **Created:** 2025/7/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5605)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×12)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **httpRequestTool** (×23)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
