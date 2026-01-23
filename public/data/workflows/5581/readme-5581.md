# Full Instagram API MCP server

> Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing 27 Instagram API operations to AI agents.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Credentials** Add Instagram API credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the Instagram API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://api.instagram.com/v1
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (27 total)

### 🔧 Geographies (1 endpoints)

• **GET /geographies/{geo-id}/media/recent**: Get recent media from a custom geo-id.

### 🔧 Locations (3 endpoints)

• **GET /locations/search**: Search Locations by Coordinates
• **GET /locations/{location-id}**: Get information about a location.
• **GET /locations/{location-id}/media/recent**: Get a list of recent media objects from a given location.

### 🔧 Media (10 endpoints)

• **GET /media/popular**: Get Popular Media
• **GET /media/search**: Search Media by Area
• **GET /media/shortcode/{shortcode}**: Get information about a media object.
• **GET /media/{media-id}**: Get information about a media object.
• **GET /media/{media-id}/comments**: Get a list of recent comments on a media object.
• **POST /media/{media-id}/comments**: Create a comment on a media object.
• **DELETE /media/{media-id}/comments/{comment-id}**: Remove a comment.
• **DELETE /media/{media-id}/likes**: Remove a like on this media by the current user.
• **GET /media/{media-id}/likes**: Get a list of users who have liked this media.
• **POST /media/{media-id}/likes**: Set a like on this media by the current user.

### 🔧 Tags (3 endpoints)

• **GET /tags/search**: Search Tags by Name
• **GET /tags/{tag-name}**: Get information about a tag object.
• **GET /tags/{tag-name}/media/recent**: Get a list of recently tagged media.

### 🔧 Users (10 endpoints)

• **GET /users/search**: Search Users by Name
• **GET /users/self/feed**: Get User Feed
• **GET /users/self/media/liked**: Get User Liked Media
• **GET /users/self/requested-by**: Get Follow Requests
• **GET /users/{user-id}**: Get basic information about a user.
• **GET /users/{user-id}/followed-by**: Get the list of users this user is followed by.
• **GET /users/{user-id}/follows**: Get the list of users this user follows.
• **GET /users/{user-id}/media/recent**: Get the most recent media published by a user.
• **GET /users/{user-id}/relationship**: Get information about a relationship to another user.
• **POST /users/{user-id}/relationship**: Modify the relationship between the current user and the target user.

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native Instagram API responses with full data structure

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

- **Workflow ID:** 5581
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 407
- **Downloads:** 40
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5581)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- Social Media
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×13)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **httpRequestTool** (×27)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
