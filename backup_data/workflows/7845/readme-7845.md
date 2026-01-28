# 🍎 Update grocery lists in Asana via Telegram voice & text using GPT-4o mini

> This n8n workflow demonstrates how to use AI to update your grocery list in Asana via Telegram chat or voice. 

## Use cases
- Update grocery list details in Asana eg. check or uncheck the items, update expiry dates, update quantities etc.

## How it works
- Instruct telegram bot (via chat or voice) to update a grocery item using natural language. For example, "we just bought 10 cartons of milk that expires in 6 months".
- If via text, just the text message will be sent to the Grocery Agent.
- If via voice, voice file will be downloaded then transcribed into text using OpenAI.
- Once Grocery agent receives the text, it will search the item in your grocery list in Asana. It will then check the item since it's bought, and update the quantity and expiry date accordingly.
- Once task is done, it will respond with the changes it made and insert a hyperlink to Asana if you want to see it.

## How to set up
- Set up Telegram bot via Botfather. See setup instructions [here](https://core.telegram.org/bots/tutorial) 
- Setup OpenAI API for transcription services (Credits required) [here](https://openai.com/index/openai-api/)
- Set up Openrouter account. See details [here](https://openrouter.ai/docs/api-reference/authentication)
- Set up Asana API using the account where you have your grocery list set in. See details [here](https://developers.asana.com/docs/api-explorer)

## Customization Options
- You can have other custom fields you use to track other than expiry dates or quantity. For example, food type, date purchased etc. 

## Requirements
- Asana account where you manage your grocery list
- Telegram bot
- Open AI account
- Open Router account

## 📊 Basic Information

- **Workflow ID:** 7845
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 293
- **Downloads:** 29
- **Created:** 2025/8/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7845)

## 👤 Author

- **Name:** Zawanah
- **Username:** @zawanah

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **stickyNote** (×5)
- **telegram** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **asanaTool** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
