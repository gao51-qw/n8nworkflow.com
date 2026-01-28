Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing all ActiveCampaign Tool operations to AI agents. Zero configuration needed - all 48 operations pre-built.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Activate** the workflow to start your MCP server
3. **Copy** the webhook URL from the MCP trigger node
4. **Connect** AI agents using the MCP URL

## 🔧 How it Works

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **Tool Nodes**: Pre-configured for every ActiveCampaign Tool operation
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Uses official n8n ActiveCampaign Tool tool with full error handling

## 📋 Available Operations (48 total)

Every possible ActiveCampaign Tool operation is included:

### 👤 Account (5 operations)

• **Create an account**
• **Delete an account**
• **Get an account**
• **Get many accounts**
• **Update an account**

### 🔧 Accountcontact (3 operations)

• **Create an account contact**
• **Delete an account contact**
• **Update an account contact**

### 🔌 Connection (5 operations)

• **Create a connection**
• **Delete a connection**
• **Get a connection**
• **Get many connections**
• **Update a connection**

### 📇 Contact (5 operations)

• **Create a contact**
• **Delete a contact**
• **Get a contact**
• **Get many contacts**
• **Update a contact**

### 🔧 Contactlist (2 operations)

• **Add a contact to a list**
• **Remove a contact from a list**

### 🔧 Contacttag (2 operations)

• **Add a contact tag**
• **Remove a contact tag**

### 💰 Deal (7 operations)

• **Create a deal**
• **Create a deal note**
• **Delete a deal**
• **Get a deal**
• **Get many deals**
• **Update a deal**
• **Update a deal note**

### 🔧 Ecommercecustomer (5 operations)

• **Create an e-commerce customer**
• **Delete an e-commerce customer**
• **Get an e-commerce customer**
• **Get many e-commerce customers**
• **Update an e-commerce customer**

### 🔧 Ecommerceorder (5 operations)

• **Create an e-commerce order**
• **Delete an e-commerce order**
• **Get an e-commerce order**
• **Get many e-commerce orders**
• **Update an e-commerce order**

### 🔧 Ecommerceorderproducts (3 operations)

• **Get many ecommerce orders**
• **Get an e-commerce order product by product ID**
• **Get an e-commerce order product by order ID**

### 📝 List (1 operations)

• **Get many lists**

### 🏷️ Tag (5 operations)

• **Create a tag**
• **Delete a tag**
• **Get a tag**
• **Get many tags**
• **Update a tag**

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Resource IDs and identifiers
• Search queries and filters
• Content and data payloads
• Configuration options

**Response Format**: Native ActiveCampaign Tool API responses with full data structure

**Error Handling**: Built-in n8n error management and retry logic

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **Other n8n Workflows**: Call MCP tools from any workflow
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Complete Coverage**: Every ActiveCampaign Tool operation available
• **Zero Setup**: No parameter mapping or configuration needed
• **AI-Ready**: Built-in `$fromAI()` expressions for all parameters
• **Production Ready**: Native n8n error handling and logging
• **Extensible**: Easily modify or add custom logic

&gt; 🆓 **[Free for community use](https://github.com/Cfomodz/community-use)!** Ready to deploy in under 2 minutes.