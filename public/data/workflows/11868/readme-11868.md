# Lead collection with SendPulse and GPT-generated welcome emails/SMS

> ## How it works

This n8n template automates lead processing from your website. It receives customer data via a Webhook, stores the customer's contact (email or phone number) in the respective [**SendPulse**](https://sendpulse.com) address books, and uses the [**SendPulse MCP Server**](https://sendpulse.com/knowledge-base/account-settings/mcp-server)  to send personalized welcome messages (email or SMS) generated using AI.

The template also includes built-in SendPulse token management logic with caching in the Data Table, which reduces the number of unnecessary API requests.

[**SendPulse’s MCP server**](https://sendpulse.com/knowledge-base/account-settings/mcp-server) is a tool that helps you manage your account through a chat with an AI assistant. It uses SendPulse API methods to get information and perform actions, such as request statistics, run message campaigns, or update user data.

MCP server acts as middleware between your AI assistant and your [**SendPulse account**](https://sendpulse.com). It processes requests through the SendPulse API and sends results back to chat, so you can manage everything without leaving the conversation.

Once connected, the MCP server operates as follows:

1. You ask your AI assistant something in chat.
2. It forwards your request to the MCP server.
3. The MCP server calls the API to get data or perform an action.
4. The AI assistant sends the result back to your chat.

## Set up

### Requirements:
- An active SendPulse account.
- Client ID and Client Secret from your SendPulse account.
- An API key from your OpenAI account to power the AI agent.

### Set up steps:

1. Get your **OpenAI API Key** - [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Add your **OpenAI API Key** to **OpenAI Chat Model** node in n8n workflow.
3. Get your **Client ID** and **Client Secret** from your SendPulse account - [https://login.sendpulse.com/settings/#api](https://login.sendpulse.com/settings/#api)
4. Add your **Client ID** and **Client Secret** to **Workflow Configuration** node.
5. Add your **Client ID** and **Client Secret** to **SendPulse MCP Client** node as headers **X-SP-ID** і **X-SP-SECRET** in Multiple Headers Auth.
6. In the **Workflow Configuration** node, change the names of the mailing lists, senderName, senderEmail, smsSender, routeCountryCode and routeType fileds as needed.
7. Create a **tokens** table with the columns: **hash** (string), **accessToken** (string), **tokenExpiry** (string) in the Data tables section of your n8n platform account.

## 📊 Basic Information

- **Workflow ID:** 11868
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 27
- **Downloads:** 2
- **Created:** 2025/12/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11868)

## 👤 Author

- **Name:** SendPulse
- **Username:** @sendpulse

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** (×7)
- **dataTable** (×2)
- **code** (×3)
- **set** (×2)
- **if** (×5)
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **stickyNote** (×6)
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
