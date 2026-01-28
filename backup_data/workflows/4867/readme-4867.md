# AI-powered stock market summary bot

> An automated n8n workflow that analyzes stocks using RSI and MACD, summarizes insights with OpenAI, and sends a Slack-ready market update every hour.

This workflow:
Runs hourly from 6:30 AM to 2:30 PM PT, Mon–Fri
Checks if the U.S. stock market is open using Alpaca’s /clock API
Pulls daily stock bars for a list of tickers via Alpaca’s /v2/stocks/bars
Calculates RSI and MACD using a Python code node
Categorizes each stock as Buy / Hold / Sell
Uses OpenAI Assistant to summarize the results in Slack markdown
Sends the message to a specific Slack user or channel

## 📊 Basic Information

- **Workflow ID:** 4867
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 26532
- **Downloads:** 2653
- **Created:** 2025/6/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4867)

## 👤 Author

- **Name:** kenandrewmiranda
- **Username:** @kenandrewmiranda

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **set** 
- **httpRequest** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **slack** 
- **scheduleTrigger** 
- **if** 
- **noOp** (×2)
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
