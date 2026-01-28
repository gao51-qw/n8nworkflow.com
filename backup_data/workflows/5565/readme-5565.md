# Expose eBay taxonomy API to AI agents for category management

> Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing 8 Taxonomy API operations to AI agents.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Credentials** Add Taxonomy API credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the Taxonomy API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://api.ebay.com/commerce/taxonomy/v1
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (8 total)

### 🔧 Category_Tree (7 endpoints)

• **GET /category_tree/{category_tree_id}**: Get a Category Tree
• **GET /category_tree/{category_tree_id}/fetch_item_aspects**: Get Aspects for All Leaf Categories in a Marketplace
• **GET /category_tree/{category_tree_id}/get_category_subtree**: Get a Category Subtree
• **GET /category_tree/{category_tree_id}/get_category_suggestions**: Get Suggested Categories
• **GET /category_tree/{category_tree_id}/get_compatibility_properties**: Get Compatibility Properties
• **GET /category_tree/{category_tree_id}/get_compatibility_property_values**: Get Compatibility Property Values
• **GET /category_tree/{category_tree_id}/get_item_aspects_for_category**: Get Get Item Aspects For Category

### 🔧 Get_Default_Category_Tree_Id (1 endpoints)

• **GET /get_default_category_tree_id**: Fetch Default Category Tree ID

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native Taxonomy API responses with full data structure

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

- **Workflow ID:** 5565
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 113
- **Downloads:** 11
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5565)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **httpRequestTool** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
