# ZenTrade your AI-powered rational stock trading advisor

> ### This n8n template automates intraday trading insights by combining candlestick pattern analysis and news sentiment aggregation to suggest actionable Buy / Sell / Hold decisions across international stock markets.

  **Use cases**

- Automatically analyze stock trends using live candlestick data.
- Aggregate real-time news sentiment to strengthen trading confidence.
- Generate AI-backed Buy / Sell / Hold recommendations for traders.
- Build an automated Telegram trading assistant or analytics bot.
- Create a backend for AI-powered portfolio advisors or trading dashboards.

**Good to know**

This workflow integrates both market and news APIs, processes data intelligently, and leverages an AI model (Gemini or OpenAI) for trading recommendations.
It runs smoothly on both n8n Cloud and self-hosted instances, and setup typically takes 10–15 minutes.

### Requirements

- n8n Cloud or self-hosted instance
- TwelveData API key (for fetching OHLC & candlestick data) → twelvedata.com
- NewsAPI.org key (for aggregating relevant stock news) → newsapi.org
- AI model API key (Google Gemini or OpenAI) for sentiment reasoning
- Telegram Bot Token (via @BotFather) for command input & output

### Customising this workflow

- Replace Telegram with Slack, Discord, or Notion for alternate alerts.
- Integrate TradingView or Alpaca API for executing mock trades.
- Modify the candlestick intervals (1m, 15m, 1h) or patterns as per strategy.
- Add portfolio tracking or alert thresholds for advanced users.
- Expand to cover crypto, forex, or commodities with minimal edits.

## 📊 Basic Information

- **Workflow ID:** 10630
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 255
- **Downloads:** 25
- **Created:** 2025/11/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10630)

## 👤 Author

- **Name:** Paul Abraham
- **Username:** @hellopaul

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **telegramTrigger** 
- **httpRequest** (×4)
- **merge** (×2)
- **aggregate** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **telegram** 
- **switch** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
