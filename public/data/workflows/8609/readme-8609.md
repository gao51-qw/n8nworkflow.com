# Real-time OKX spot market data with GPT-4o & Telegram

> **Instantly access live OKX Spot Market data directly in Telegram!**

This workflow integrates the **OKX REST v5 API** with **Telegram** and optional **GPT-4.1-mini formatting**, delivering real-time insights such as **latest prices, order book depth, candlesticks, trades, and mark prices** — all in clean, structured reports.

---

## 🔎 How It Works

1. A **Telegram Trigger** node listens for incoming user commands.
2. The **User Authentication** node validates the Telegram ID to allow only authorized users.
3. The workflow creates a **Session ID** from `chat.id` to manage session memory.
4. The **OKX AI Agent** orchestrates data retrieval via HTTP requests to OKX endpoints:

   * **Latest Price** (`/api/v5/market/ticker?instId=BTC-USDT`)
   * **24h Stats** (`/api/v5/market/ticker?instId=BTC-USDT`)
   * **Order Book Depth** (`/api/v5/market/books?instId=BTC-USDT&sz=50`)
   * **Best Bid/Ask** (book ticker snapshot)
   * **Candlesticks / Klines** (`/api/v5/market/candles?instId=BTC-USDT&bar=15m`)
   * **Average / Mark Price** (`/api/v5/market/mark-price?instType=SPOT&instId=BTC-USDT`)
   * **Recent Trades** (`/api/v5/market/trades?instId=BTC-USDT&limit=100`)
5. Utility tools refine the data:

   * **Calculator** → spreads, % change, normalized volumes.
   * **Think** → reshapes raw JSON into clean text.
   * **Simple Memory** → stores `sessionId`, symbol, and state for multi-turn interactions.
6. A **message splitter** ensures Telegram output stays under 4000 characters.
7. Final results are **sent to Telegram** in structured, human-readable format.

---

## ✅ What You Can Do with This Agent

* Get **latest price and 24h stats** for any Spot instrument.
* Retrieve **order book depth** with configurable size (up to 400 levels).
* View **best bid/ask snapshots** instantly.
* Fetch **candlestick OHLCV data** across intervals (`1m` → `1M`).
* Monitor **recent trades** (up to 100).
* Check the **mark price** as a fair average reference.
* Receive clean, **Telegram-ready reports** (auto-split if too long).

---

## 🛠️ Setup Steps

1. **Create a Telegram Bot**

   * Use [@BotFather](https://t.me/BotFather) to generate a bot token.

2. **Configure in n8n**

   * Import `OKX AI Agent v1.02.json`.
   * Replace the placeholder in **User Authentication node** with your Telegram ID.
   * Add **Telegram API credentials** (bot token).
   * Add your **OpenAI API key** for GPT-4.1-mini.
* Add your [OKX API key](https://www.okx.com/en-us/okx-api) optional.

3. **Deploy and Test**

   * Activate the workflow in n8n.
   * Send a query like `BTC-USDT` to your bot.
   * Instantly get structured OKX Spot data back in Telegram.

---

## 📺 Setup Video Tutorial

Watch the full setup guide on YouTube:

[![Watch on YouTube](https://img.youtube.com/vi/TAA_BFuwml0/0.jpg)](https://www.youtube.com/watch?v=TAA_BFuwml0)

---

⚡ **Unlock real-time OKX Spot Market insights directly in Telegram — no private API keys required!**

---

### 🧾 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
Architecture, prompts, and trade report structure are IP-protected.

**No unauthorized rebranding permitted.**

🔗 **For support:** [Don Jayamaha – LinkedIn](https://linkedin.com/in/donjayamahajr)


## 📊 Basic Information

- **Workflow ID:** 8609
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 360
- **Downloads:** 36
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8609)

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
