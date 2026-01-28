# Create WooCommerce products via Telegram bot with Google Gemini AI

> **How it Works?**

1. User Answers Questions Prompted by the Telegram Bot
2. Data Tables are updated to with relevant step of the process and a chat id
3. Upon Approval, the Title, Description and Slug are created and then Product is created on WooCommerce via API request.
4. Data Tables are reset and user is prompted to create another product.

**Setup Steps:** (25 Minutes)
1. Create a Telegram bot via @botfather on telegram
2. Setup 2 Data Tables with names WooCommerce Product Manager & User_Images
3. Add your  Preffered LLM Credentials and set credentials in telegram node 
4. In TelegramGroupMedia node and EditFields 1 node, add your bot token to replace {{your bot token}}
5. Voila! Your Workflow is now configured.

## 📊 Basic Information

- **Workflow ID:** 12326
- **Complexity:** advanced
- **Node Count:** 106
- **Views:** 203
- **Downloads:** 20
- **Created:** 2025/12/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12326)

## 👤 Author

- **Name:** Kshitij Matta
- **Username:** @autom8nstudio

## 🏷️ Categories

- Content Creation
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **switch** 
- **telegram** (×15)
- **if** (×9)
- **set** (×2)
- **httpRequest** (×6)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×8)
- **@n8n/n8n-nodes-langchain.chainLlm** (×6)
- **merge** 
- **code** (×10)
- **dataTable** (×24)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **stickyNote** (×19)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 106 nodes with 75 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
