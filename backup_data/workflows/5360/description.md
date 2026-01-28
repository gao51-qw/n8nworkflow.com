Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing all Spotify Tool operations to AI agents. Zero configuration needed - all 30 operations pre-built.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every Spotify Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n Spotify Tool tool with full error handling

## 📋 Available Operations (30 total)

Every possible Spotify Tool operation is included:

### 🔧 Album (4 operations)

• **Get an album**
• **Get new album releases**
• **Get an album's tracks by URI or ID**
• **Search albums by keyword**

### 🔧 Artist (5 operations)

• **Get an artist**
• **Get an artist's albums by URI or ID**
• **Get an artist's related artists by URI or ID**
• **Get an artist's top tracks by URI or ID**
• **Search artists by keyword**

### 🔧 Library (1 operations)

• **Get liked tracks**

### 🔧 Mydata (1 operations)

• **Get your followed artists**

### 🔧 Player (9 operations)

• **Add a song to a queue**
• **Get the currently playing track**
• **Skip to the next track**
• **Pause the player**
• **Skip to the previous song**
• **Get the recently played tracks**
• **Resume the player**
• **Set volume on the player**
• **Start music on the player**

### 🔧 Playlist (7 operations)

• **Add an Item to a playlist**
• **Create a playlist**
• **Get a playlist**
• **Get a user's playlists**
• **Get a playlist's tracks by URI or ID**
• **Remove an item from a playlist**
• **Search playlists by keyword**

### 🔧 Track (3 operations)

• **Get a track**
• **Get audio features of a track**
• **Search tracks by keyword**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native Spotify Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every Spotify Tool operation available
• **Zero Setup**: No parameter mapping or configuration needed
• **AI-Ready**: Built-in `$fromAI()` expressions for all parameters
• **Production Ready**: Native n8n error handling and logging
• **Extensible**: Easily modify or add custom logic

&gt; 🆓 **[Free for community use](https://github.com/Cfomodz/community-use)!** Ready to deploy in under 2 minutes.