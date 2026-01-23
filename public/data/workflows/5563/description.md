Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing 11 Browse API operations to AI agents.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Credentials** Add Browse API credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the Browse API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://api.ebay.com/buy/browse/v1
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (11 total)

### 🔧 Item (5 endpoints)

• **GET /item/**: Check Item Compatibility
• **GET /item/get_item_by_legacy_id**: Get Get Item By Legacy Id
• **GET /item/get_items_by_item_group**: This method retrieves the details of the individual items in an item group
• **GET /item/{item_id}**: Get {Item Id}
• **POST /item/{item_id}/check_compatibility**: This method checks if a product is compatible with the specified item

### 🔧 Item_Summary (2 endpoints)

• **GET /item_summary/search**: Search Items by Image
• **POST /item_summary/search_by_image**: This is an Experimental method

### 🔧 Shopping_Cart (4 endpoints)

• **GET /shopping_cart/**: Update Cart Item Quantity
• **POST /shopping_cart/add_item**: This is an Experimental method
• **POST /shopping_cart/remove_item**: This is an experimental method
• **POST /shopping_cart/update_quantity**: This is an experimental method

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native Browse API responses with full data structure

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