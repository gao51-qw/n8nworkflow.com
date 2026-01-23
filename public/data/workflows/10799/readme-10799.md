# Generate structured article summaries with Telegram, Claude AI & Jina Reader

> ## Article summarizer bot

Send any URL to your Telegram bot and get an AI summary instantly.

What it does

- Receives URLs via Telegram
- Fetches clean article content (removes ads, navbars)
- Generates AI summary 
- Sends formatted summary back to Telegram


How to set up

1. **Create Telegram bot**
   - Message @BotFather on Telegram
   - Run /newbot and follow prompts
   - Copy your bot token
   - Add credentials to n8n

2. **Get API keys** (optional but recommended)
   - Jina AI: Sign up at jina.ai/reader  
   - Add keys to nodes

3. **Configure AI model and output parser format**


Requirements

- Telegram bot token
- OpenRouter API key or any other LLM you have


How to customize

- Change summary format: Edit prompt in "Summarize Article" node
- Update Output Parser schema (title, tags, etc)
- Save to database: Enable Google Sheets node or add Notion/Airtable
- Different language: Modify prompt to force specific language

## 📊 Basic Information

- **Workflow ID:** 10799
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 43
- **Downloads:** 4
- **Created:** 2025/11/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10799)

## 👤 Author

- **Name:** Dahiana
- **Username:** @mssporto

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **telegramTrigger** 
- **filter** 
- **set** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **telegram** (×3)
- **stickyNote** (×5)
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
