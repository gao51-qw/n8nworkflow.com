# Create Notion tasks from Telegram messages with GPT-3.5

> Using the power and ease of Telegram, send a simple text or audio message to a bot with a request to add a new Task to your Notion Tasks database.

## How it works
ChatGPT is used to transacribe the audio or text message, parse it, and determine the title to add as a new Notion Task. You can optionally include a "do date" as well and ChatGPT will include that when creating the task. Once complete you will receive a simple confirmation message back.

### Minimal Setup Required
Just follow n8n's instructions on how to connect to Telegram and create your own chatBot, provide the chatID in the 2 Telegram nodes, and you're finished! A few optional settings include tweaking the ChatGPT system prompt (unnecessary) and the timezone for your Notion Task(s).



## 📊 Basic Information

- **Workflow ID:** 7087
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 604
- **Downloads:** 60
- **Created:** 2025/8/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7087)

## 👤 Author

- **Name:** Jason Krol
- **Username:** @shorttompkins

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **telegramTrigger** 
- **switch** 
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **notionTool** 
- **code** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
