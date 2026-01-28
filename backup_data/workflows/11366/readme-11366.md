# KaizenCrypto - smarter crypto decisions with multi-timeframe AI analysis

> ### This n8n template automates crypto market analysis by combining multi-timeframe candlestick data with real-time news sentiment to generate actionable AI-backed Buy / Sell / Hold signals for any cryptocurrency. Built around the Kaizen principle of continuous improvement, it delivers sharper, more reliable insights with every run.

**Use cases**
- Automatically analyze crypto market trends using 15m, 1h, and 1d candlestick data.
- Aggregate global crypto news sentiment to reinforce price-action confidence.
- Generate AI-powered Buy / Sell / Hold recommendations for traders.
- Build your own Telegram-based crypto trading assistant or analytics bot.
- Create backends for crypto dashboards, portfolio advisors, or auto-alert systems.
- Expand trading strategies using AI reasoning instead of manual analysis.

**Good to know**
This workflow merges both technical analysis (candlesticks) and fundamental sentiment (news), then passes them through an AI model (Gemini) to produce clean, easy-to-understand trading signals.
It works seamlessly on n8n Cloud and self-hosted setups, with configuration taking about 5 minutes.

### Requirements
- n8n Cloud or self-hosted instance
- Crypto price data API key 
- Crypto news API key
- AI model API key (Google Gemini)
- Telegram Bot Token (via @BotFather)

### Customising this workflow
- Replace Telegram with Slack, Discord, WhatsApp Cloud API, or Notion for alerts.
- Switch AI models (Gemini, OpenAI, Claude) to change tone or reasoning style.
- Modify candlestick intervals (15m, 1h, 1d) or add more timeframes.
- Attach TradingView webhooks for live alerts or automated triggers.
- Add portfolio tracking, price-level alerts, or risk scoring for advanced users.
- Expand the template to support forex, stocks, indices, or commodities with minimal edits.





## 📊 Basic Information

- **Workflow ID:** 11366
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 311
- **Downloads:** 31
- **Created:** 2025/11/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11366)

## 👤 Author

- **Name:** Paul Abraham
- **Username:** @hellopaul

## 🏷️ Categories

- Crypto Trading
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **code** (×3)
- **httpRequest** (×4)
- **set** (×3)
- **merge** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **telegram** 
- **stickyNote** (×10)
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
