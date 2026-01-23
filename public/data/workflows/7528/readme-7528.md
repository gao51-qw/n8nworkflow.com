# Personal finance assistant: Query Notion data via Telegram & WhatsApp with Claude AI

> ## Query personal finance data in Notion via Telegram and WhatsApp

### Who’s it for
This workflow is for individuals who track their finances in Notion and want quick answers via chat. Entrepreneurs, freelancers, and professionals can use it to check expenses, income, or budgets instantly without opening Notion.

### How it works
The workflow acts as an **Accountant Agent** powered by Claude AI through OpenRouter. When you send a query like *“Total expenses for August 2025”* through Telegram or WhatsApp, the agent identifies the right Notion database, applies filters, and retrieves the requested data. It then replies with a summarized result directly to your phone.

### How to set up
1. **Clone the [Personal Finance System Notion template](https://www.notion.so/templates/personal-finance-system)** into your workspace.  
2. Create a Telegram bot with BotFather and collect the bot token and chat ID.  
3. Get an API key from OpenRouter.  
4. Create a Notion integration token and connect it with your duplicated finance template.  
5. Set up WhatsApp Business credentials via Meta (WABA ID, Phone Number ID, and permanent access token).  

### Requirements
- n8n instance (self-hosted or cloud)  
- Accounts on Telegram, OpenRouter, Notion, and WhatsApp Business  
- Your duplicated **Personal Finance System Notion template**  

### How to customize the workflow
You can extend the workflow to handle assets, liabilities, or budgets. Add more Notion databases, adjust query filters, or configure WhatsApp templates for automated financial updates.


## 📊 Basic Information

- **Workflow ID:** 7528
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1152
- **Downloads:** 115
- **Created:** 2025/8/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7528)

## 👤 Author

- **Name:** Anoop
- **Username:** @anoop

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **whatsApp** 
- **@n8n/n8n-nodes-langchain.agent** 
- **notionTool** 
- **httpRequestTool** (×2)
- **telegramTrigger** 
- **telegram** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
