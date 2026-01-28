# Stock market information assistant with Telegram, Yahoo Finance, and GPT-4 Nano

> **How it works**

1. Listens to Telegram messages to detect stock-related queries.
2. Extracts company name and identifies its exact stock ticker symbol.
3. Searches Yahoo Finance for stock info using the ticker.
4. Fetches and formats the latest stock data like price and key stats.
5. Sends a clean, simplified reply back to the user on Telegram.

**Set up steps**
- Requires Telegram Bot Token and Apify API credentials.
- Import workflow to n8n and link both Apify actors (Google Search + Yahoo Finance).
- Link OpenRouter for AI and enable Telegram trigger.
- Takes ~10–15 min to connect services and test.
- Includes sticky notes with setup links and tutorial videos.

## 📊 Basic Information

- **Workflow ID:** 5039
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1213
- **Downloads:** 121
- **Created:** 2025/6/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5039)

## 👤 Author

- **Name:** Archit Jain
- **Username:** @architjn

## 🏷️ Categories

- Crypto Trading
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **httpRequest** (×2)
- **set** 
- **httpRequestTool** 
- **telegram** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
