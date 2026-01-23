Instantly access Upbit Spot Market Data in Telegram with AI Automation

This workflow integrates the **Upbit REST API** with **GPT-4o-mini** and **Telegram**, giving you **real-time price data, order books, trades, and candles** directly in chat. Perfect for **crypto traders, market analysts, and investors** who want structured Upbit data **at their fingertips—no manual API calls required.**

---

## ⚙️ **How It Works**

1. A **Telegram bot** listens for user queries like `upbit KRW-BTC 15m`.
2. The **Upbit AI Agent** parses the request and fetches live data from the official **Upbit REST API**:

   * **Price & 24h stats** (`/v1/ticker`)
   * **Order book depth & best bid/ask** (`/v1/orderbook`)
   * **Recent trades** (`/v1/trades/ticks`)
   * **Dynamic OHLCV candles** across all timeframes (`/v1/candles/{seconds|minutes|days|weeks|months|years}`)
3. A built-in **Calculator tool** computes spreads, % change, and midpoints.
4. A **Think module** reshapes raw JSON into simplified, clean fields.
5. The agent formats results into **concise, structured text** and sends them back via Telegram.

---

## 📊 **What You Can Do with This Agent**

✅ Get **real-time prices** and 24h change for any Upbit trading pair.
✅ View **order book depth** and best bid/ask snapshots.
✅ Fetch **multi-timeframe OHLCV candles** (from 1s to 1y).
✅ Track **recent trades** with price, volume, side, and timestamp.
✅ Calculate **midpoints, spreads, and percentage changes**.
✅ Receive **clean, human-readable reports** in Telegram—no JSON parsing needed.

---

## 🛠 **Set Up Steps**

1. **Create a Telegram Bot**

   * Use [@BotFather](https://t.me/BotFather) and save your bot token.

2. **Configure Telegram API and OpenAI in n8n**

   * Add your bot token under **Telegram credentials**.
   * Replace your **Telegram ID** in the authentication node to restrict access.

3. **Import the Workflow**

   * Load [Upbit](https://global-docs.upbit.com/reference/overall-account-inquiry) AI Agent v1.02.json into n8n.
   * Ensure connections to tools (`Ticker`, `Orderbook`, `Trades`, `Klines`).

4. **Deploy and Test**

   * Example query: `upbit KRW-BTC 15m` → returns price, order book, candles, and trades.
   * Example query: `upbit USDT-ETH trades 50` → returns 50 latest trades.

---

## 📺 Setup Video Tutorial

Watch the full setup guide on YouTube:

[![Watch on YouTube](https://img.youtube.com/vi/Yf6HJE_eu2k/0.jpg)](https://www.youtube.com/watch?v=Yf6HJE_eu2k)


---

⚡ **Unlock clean, structured Upbit Spot Market data instantly—directly in Telegram!**

---

### 🧾 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
Architecture, prompts, and trade report structure are IP-protected.

**No unauthorized rebranding permitted.**

🔗 **For support:** [Don Jayamaha – LinkedIn](https://linkedin.com/in/donjayamahajr)
