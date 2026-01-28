# Fetch real-time Bitget Spot Market Data with GPT-4o + Telegram

> **Instantly fetch real-time Bitget spot market data directly in Telegram!** This workflow integrates the **Bitget REST v2 API** with **Telegram** (plus optional **AI-powered formatting**) to deliver the latest crypto price, order book, candles, and recent trades. Perfect for **crypto traders, analysts, and investors** who need **reliable market data at their fingertips—no API key required.**&#x20;

**Sign-up for Bitget for 6,200 USDT in rewards to trade:** [Collect Now](https://partner.bitget.com/bg/AEC3JB)

## **How It Works**

1. A **Telegram bot** listens for user requests (e.g., `BTCUSDT`).
2. The workflow connects to **Bitget public endpoints** to fetch:

   * **Ticker (latest price & 24h stats)**
   * **Order book depth** (top bids/asks)
   * **Recent trades** (price, side, volume, timestamp)
   * **Candlestick data** (1m, 15m, 1h, 4h, 1d)
   * **Historical candles** (optional, for backfill before `endTime`)
3. A **Calculator node** derives useful metrics like mid-price and spread.
4. A **Think node** reshapes raw JSON into Telegram-ready text.
5. A **splitter** ensures reports over 4000 characters are chunked safely.
6. The **final market insights** are delivered instantly back to Telegram.

## **What You Can Do with This Agent**

✅ **Track live prices & 24h stats** for any Bitget spot pair.
✅ **Monitor order book liquidity** and spreads in real-time.
✅ **Analyze candlesticks** across multiple timeframes.
✅ **Review recent trades** to see execution flow.
✅ **Fetch historical candles** for extended market context.
✅ **Receive clean, structured reports** with optional AI-enhanced formatting.

## **Set Up Steps**

1. **Create a Telegram Bot**

   * Use [@BotFather](https://t.me/BotFather) to generate a bot token.
2. **Configure in n8n**

   * Import `Bitget AI Agent v1.02.json` into your n8n instance.
   * Add your **Telegram credentials** (bot token + your Telegram ID in the `User Authentication` node).
   * Add an **OpenAI key** if you want AI-powered formatting.
   *(Optional) Add an **[Bitget api key](https://www.bitget.com/bitget-api)** .

3. **Deploy and Test**

   * Send `BTCUSDT` to your bot.
   * Get live Bitget spot data instantly in Telegram!

🚀 **Unlock powerful, real-time Bitget insights in Telegram—zero setup, zero API keys required!**

## 📺 Setup Video Tutorial

Watch the full setup guide on YouTube:

[![Watch on YouTube](https://img.youtube.com/vi/KNppg7xhySA/0.jpg)](https://www.youtube.com/watch?v=KNppg7xhySA)


---

### 🧾 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
Architecture, prompts, and trade report structure are IP-protected.

**No unauthorized rebranding permitted.**

🔗 **For support:** [Don Jayamaha – LinkedIn](https://linkedin.com/in/donjayamahajr)


## 📊 Basic Information

- **Workflow ID:** 8607
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 421
- **Downloads:** 42
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8607)

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
- **stickyNote** (×16)
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequestTool** (×5)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.toolThink** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
