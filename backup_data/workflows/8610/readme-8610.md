# Get real-time crypto market data from Bybit with GPT-4.1-mini in Telegram

> **Instantly access live Bybit Spot Market data in Telegram!**

This workflow integrates the **Bybit REST v5 API** with **Telegram** and optional **GPT-4.1-mini formatting**, delivering real-time crypto market insights such as **latest prices, order books, trades, and candlesticks** — all presented in clean, structured Telegram messages.

---

## 🔎 How It Works

1. A **Telegram Trigger** node listens for incoming user requests.
2. **User Authentication** checks the Telegram ID against an allowlist.
3. A **Session ID** is created from `chat.id` for lightweight memory across interactions.
4. The **Bybit AI Agent** orchestrates multiple API requests via HTTP nodes:

   * **Latest Price & 24h Stats** (`/v5/market/tickers?category=spot&symbol=BTCUSDT`)
   * **Order Book Depth** (`/v5/market/orderbook?category=spot&symbol=BTCUSDT&limit=50`)
   * **Best Bid/Ask Snapshot** (from order book top levels)
   * **Candlestick Data (Klines)** (`/v5/market/kline?category=spot&symbol=BTCUSDT&interval=15&limit=200`)
   * **Recent Trades** (`/v5/market/recent-trade?category=spot&symbol=BTCUSDT&limit=100`)
5. **Utility Nodes** process and format the response:

   * **Calculator** → computes spreads, mid-prices, % changes.
   * **Think** → transforms JSON into human-readable reports.
   * **Simple Memory** → stores symbol, sessionId, and previous inputs.
6. **Message Splitter** ensures responses over 4000 characters are broken into chunks.
7. Final results are sent back to **Telegram** in structured, readable format.

---

## ✅ What You Can Do with This Agent

* Get **real-time Bybit prices & 24h statistics**.
* Retrieve **spot order book depth** and liquidity snapshots.
* Analyze **candlesticks (OHLCV)** across multiple timeframes.
* View **recent trades** for market activity.
* Monitor **bid/ask spreads & mid-prices** with calculated values.
* Receive **Telegram-ready reports**, cleanly formatted and auto-split when long.

---

## 🛠️ Setup Steps

1. **Create a Telegram Bot**

   * Use [@BotFather](https://t.me/BotFather) to create a bot and get a token.

2. **Configure in n8n**

   * Import `Bybit AI Agent v1.02.json`.
   * Update the **User Authentication node** with your Telegram ID.
   * Add your **Telegram API credentials** (bot token).
   * Add **OpenAI API key** 
* (Optional) Add [Bybit API key](https://www.bybit.com/future-activity/en/developer) if you want AI-enhanced formatting.

3. **Deploy and Test**

   * Activate the workflow in n8n.
   * Send a message like `BTCUSDT` to your bot.
   * Instantly receive Bybit Spot data inside Telegram.

---

## 📺 Setup Video Tutorial

Watch the full setup guide on YouTube:

[![Watch on YouTube](https://img.youtube.com/vi/IpWPGDt9OUU/0.jpg)](https://www.youtube.com/watch?v=IpWPGDt9OUU)


---

⚡ **Unlock Bybit Spot Market insights in Telegram — fast, structured, and API-key free.**

---

### 🧾 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
Architecture, prompts, and trade report structure are IP-protected.

**No unauthorized rebranding permitted.**

🔗 **For support:** [Don Jayamaha – LinkedIn](https://linkedin.com/in/donjayamahajr)

## 📊 Basic Information

- **Workflow ID:** 8610
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 786
- **Downloads:** 78
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8610)

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
