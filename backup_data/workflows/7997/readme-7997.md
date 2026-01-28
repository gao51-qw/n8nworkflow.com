# Crypto RSI alert system with EODHD, Telegram and TradingView charts

> **How it works**

Runs on a schedule and iterates a watchlist of symbols (e.g., BTC/ETH/SOL).

For each symbol, request intraday 1h OHLCV from EODHD.

A Code node computes Wilder’s RSI(14) and detects 30/70 crossings.

When a signal appears, the bot sends a Telegram alert (HTML message) with price, RSI (prev → now), timestamp, and a “View chart” button that opens the pair on TradingView (BINANCE/USD).

**Set up steps (≈10–15 min)**

Prereqs: n8n (cloud or self-hosted), EODHD API key, Telegram bot + your chat_id.

Env vars: set EODHD_TOKEN and TELEGRAM_CHAT_ID on your n8n instance.

Credentials: add your Telegram credential (bot token).

Import the workflow JSON.

Edit Fields node: adjust the symbol array to your watchlist.

Schedule Trigger: choose how often to run (e.g., every 5–10 min).

Test: temporarily flip the Code node’s FORCE_ALERT flag to true to verify Telegram delivery, then set it back to false.

EODHD API [Access the EODHD API with a 10% discount](https://eodhd.com/pricing-special-10?via=kmg&ref1=Meneses)

## 📊 Basic Information

- **Workflow ID:** 7997
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1181
- **Downloads:** 118
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7997)

## 👤 Author

- **Name:** Kevin Meneses 
- **Username:** @pythonia-kevin

## 🏷️ Categories

- Crypto Trading
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×7)
- **set** 
- **splitOut** 
- **splitInBatches** 
- **httpRequest** 
- **code** 
- **if** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
