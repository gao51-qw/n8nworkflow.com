# Real-time crypto market data from Gate.io with GPT-4o and Telegram

> **Instantly fetch live Gate.io Spot Market data directly in Telegram!**

This workflow integrates the **Gate.io REST v4 API** with **GPT-4.1-mini-powered AI** and **Telegram**, giving traders real-time access to **price action, order books, candlesticks, and trade data**. Perfect for **crypto traders, analysts, and DeFi builders** who need **fast and reliable exchange insights**.

---

## ⚙️ How It Works

1. A **Telegram bot** listens for user queries (e.g., `"BTC_USDT"`).
2. The workflow securely processes the request, authenticates the user, and attaches a **sessionId**.
3. The **Gate AI Agent** orchestrates data retrieval via **Gate.io Spot Market API**, including:

   * ✅ **Latest Price & 24h Stats** (`/spot/tickers`)
   * ✅ **Order Book Depth** (with best bid/ask snapshots)
   * ✅ **Klines (candlesticks)** for OHLCV data
   * ✅ **Recent Trades** (up to 100 latest trades)
4. Data is optionally cleaned using **Calculator** (for spreads, midpoints, % changes) and **Think** (for formatting).
5. An **AI-powered formatter (GPT-4.1-mini)** structures results into **Telegram-friendly reports**.
6. The final **Gate.io Spot insights** are sent back instantly in **HTML-formatted Telegram messages**.

---

## 💡 What You Can Do with This Agent

This AI-driven Telegram bot enables you to:

✅ **Track real-time spot prices** for any Gate.io pair
✅ **Monitor order book depth** (liquidity snapshots)
✅ **View recent trades** for activity insights
✅ **Analyze candlesticks** across multiple intervals
✅ **Compare bid/ask spreads** with calculated metrics
✅ **Get clean, structured data** without raw JSON clutter

---

## 🛠️ Setup Steps

1. **Create a Telegram Bot**

   * Use [@BotFather](https://t.me/BotFather) on Telegram to create a bot and obtain an API token.

2. **Configure Telegram API Credentials in n8n**

   * Add your bot token under **Telegram API credentials**.
   * Replace the placeholder Telegram ID in the **Authentication node** with your own.

3. **Import & Deploy Workflow**

   * Load `Gate AI Agent v1.02.json` into **n8n**.
   * Configure your **OpenAI API key** for .
  * Configure your [Gate api key](https://www.gate.com/docs/developers/apiv4/en/).
   * Save and activate the workflow.

4. **Run & Test**

   * Send a query (e.g., `"BTC_USDT"`) to your Telegram bot.
   * Receive **instant Gate.io market insights** formatted for easy reading.

---

## 📺 Setup Video Tutorial

Watch the full setup guide on YouTube:

[![Watch on YouTube](https://img.youtube.com/vi/_tXy_3iBE4U/0.jpg)](https://www.youtube.com/watch?v=_tXy_3iBE4U&t=2s)


---

⚡ **Unlock real-time Gate.io Spot Market insights directly in Telegram — fast, clean, and reliable.**

---

### 🧾 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
Architecture, prompts, and trade report structure are IP-protected.

**No unauthorized rebranding permitted.**

🔗 **For support:** [Don Jayamaha – LinkedIn](https://linkedin.com/in/donjayamahajr)

## 📊 Basic Information

- **Workflow ID:** 8608
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 317
- **Downloads:** 31
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8608)

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
- **stickyNote** (×18)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequestTool** (×7)
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
