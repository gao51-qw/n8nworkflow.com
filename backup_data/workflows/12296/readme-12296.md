# Manage your Shopify store via AI assistant with OpenAI and MCP server

> ## Who it's for
This **n8n workflow** is designed for Shopify store owners and e-commerce managers who want to automate their store operations through an intelligent AI assistant. The workflow creates a conversational interface that can manage products, process orders, and provide store analytics through natural language commands.

## Features
- **Intelligent AI Assistant**: Powered by OpenAI with specialized system prompts for e-commerce operations
- **Shopify Integration**: Complete MCP (Model Context Protocol) server implementation for seamless Shopify operations
- **Product Management**: Create, update, search, retrieve, and delete products automatically
- **Order Processing**: Create, update, retrieve, and manage orders including fulfillment status
- **Context-Aware Automation**: Uses conversation history and Shopify data to minimize user input requirements

## Requirements
- **Shopify Access Token**: For accessing Shopify store data and operations
- **OpenAI API Credentials**: For powering the AI assistant
- **Notification Service Credentials**:
  `Discord Bot API`, `Telegram Bot API`, `Rapiwa API (for WhatsApp)`, `Gmail OAuth2`
#### Configure Credentials
- **Shopify Access Token**: Configure with proper permissions for your store
- **OpenAI API**: Set up with appropriate model access (gpt-4.1-mini or similar)
- **Notification Services**: Configure each service with proper API keys and target IDs

## Important Notes
- **MCP Server Setup**: The workflow includes a Shopify MCP Server that must be properly configured for production use
- **Tool Selection**: The MCP Client includes specific Shopify tools that can be enabled/disabled based on requirements
- **System Prompt**: The AI assistant is configured with specialized e-commerce guidelines that can be customized
- **Confirmation Requirements**: Irreversible actions like deletions will require confirmation
- **Rate Limiting**: The workflow includes appropriate delays to prevent API rate limiting
- **Notification Content**: All notifications include a standard success message that can be customized

## Production Deployment for MCP Server
`To deploy this workflow in production`

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 📊 Basic Information

- **Workflow ID:** 12296
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 22
- **Downloads:** 2
- **Created:** 2025/12/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12296)

## 👤 Author

- **Name:** SpaGreen Creative
- **Username:** @spagreen

## 🏷️ Categories

- CRM
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×6)
- **shopifyTool** (×13)
- **discord** 
- **telegram** 
- **n8n-nodes-rapiwa.rapiwa** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **if** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **stopAndError** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
