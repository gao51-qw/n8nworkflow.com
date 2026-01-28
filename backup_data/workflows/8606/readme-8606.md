# Fetch real-time Coinbase spot market data with GPT-4o + Telegram

> **Coinbase AI Agent instantly fetches real-time market data directly in Telegram!** 

This workflow integrates the **Coinbase REST API** with **Telegram** (plus optional **AI-powered formatting**) to deliver the latest crypto price, order book, candles, and trade stats in seconds. Perfect for **crypto traders, analysts, and investors** who want **actionable market data at their fingertips—without API keys.**

## **How It Works**

1. A **Telegram bot** listens for user requests (e.g., `BTC-USD`).
2. The workflow calls **Coinbase public endpoints** *(no key required)* to fetch real-time data:

   * **Latest price (ticker)**
   * **24h stats** (open, high, low, close, volume)
   * **Order book snapshots** (best bid/ask + depth)
   * **Candlestick data** (OHLCV for multiple intervals)
   * **Recent trades** (executed orders)
3. A **Calculator node** derives useful values like mid-price and spread.
4. An **AI or “Think” node** reshapes JSON into clear, human-readable messages.
5. A **splitter** ensures long messages are broken into safe Telegram chunks.
6. The final **market insights** are sent instantly back to Telegram.

## **What You Can Do with This Agent**

This Telegram bot gives you:

✅ **Get instant price & 24h stats** for any Coinbase spot pair.
✅ **Monitor live order books** with top bids/asks.
✅ **Analyze candle data** (e.g., 15m, 1h, 4h, 1d).
✅ **Track recent trades** to see market activity.
✅ **Receive clean, structured reports**—optionally AI-enhanced.

## **Set Up Steps**

1. **Create a Telegram Bot**

   * Use [@BotFather](https://t.me/BotFather) on Telegram to create your bot and get an API token.
2. **Configure in n8n**

   * Import the provided workflow JSON.
   * Add your **Telegram credentials** (bot token + your Telegram ID for authentication).
   * (Optional) Add an **OpenAI key** if you want AI-enhanced formatting.
3. **Deploy and Test**

   * Send a query like `BTC-USD` to your bot.
   * Instantly receive [Coinbase spot data](https://www.coinbase.com/developer-platform/products/exchange-api) in Telegram!

🚀 **Unlock powerful, real-time Coinbase market insights directly in Telegram—no Coinbase API key required!**

## 📺 Setup Video Tutorial

Watch the full setup guide on YouTube:

[![Watch on YouTube](https://img.youtube.com/vi/AnLG0tnnhSs/0.jpg)](https://www.youtube.com/watch?v=AnLG0tnnhSs)


---

## 🧾 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
Architecture, prompts, and trade report structure are IP-protected.
**No unauthorized rebranding or resale permitted.**

🔗 For support: [LinkedIn – Don Jayamaha](https://linkedin.com/in/donjayamahajr)

## 📊 Basic Information

- **Workflow ID:** 8606
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 378
- **Downloads:** 37
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8606)

## 👤 Author

- **Name:** Don Jayamaha Jr
- **Username:** @don-the-gem-dealer

## 🏷️ Categories

- Crypto Trading
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **telegramTrigger** 
- **code** (×2)
- **set** 
- **telegram** 
- **stickyNote** (×18)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequestTool** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
