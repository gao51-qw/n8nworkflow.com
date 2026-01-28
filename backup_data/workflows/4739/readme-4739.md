# Binance spot market quant AI agent | GPT-4o + Telegram  (Main interface)

> A professional-grade AI automation system for **spot market trading insights** on Binance. It analyzes **multi-timeframe technical indicators**, **live price/order data**, and **crypto sentiment**, then delivers fully formatted **Telegram-style trading reports**.

🎥 **Watch Tutorial**:
[![Click to Watch](https://img.youtube.com/vi/HWHD-eXP0IE/hqdefault.jpg)](https://youtu.be/HWHD-eXP0IE)

---

## 🧩 Required Workflows

You must install and activate **all of the following workflows** for the system to function correctly:

| ✅ Workflow Name                                    | 📌 Function Description                                                          |
| -------------------------------------------------- | -------------------------------------------------------------------------------- |
| [Binance Spot Market Quant AI Agent](https://n8n.io/workflows/4739-binance-spot-market-quant-ai-agent-or-gpt-4o-telegram-main-interface/)                 | Final AI orchestrator. Parses user prompt and generates Telegram-ready reports.  |
| [Binance SM Financial Analyst Tool](https://n8n.io/workflows/4741-get-binance-spot-market-financial-analysis-via-telegram-with-gpt-4o/)                  | Calls indicator tools and price/order data tools. Synthesizes structured inputs. |
| [Binance SM News and Sentiment Analyst Webhook Tool](https://n8n.io/workflows/4740-analyze-crypto-news-sentiment-for-any-token-with-gpt-4o-and-telegram-alerts/) | Analyzes crypto sentiment, gives summary and headlines via POST webhook.         |
| [Binance SM Price/24hrStats/OrderBook/Kline Tool](https://n8n.io/workflows/4742-binance-sm-price-24hrstats-orderbook-kline-tool/)    | Pulls price, order book, 24h stats, and OHLCV klines for 15m–1d.                 |
| [Binance SM 15min Indicators Tool](https://n8n.io/workflows/4743-binance-sm-15min-indicators-tool/)                   | Calculates 15m RSI, MACD, BBANDS, ADX, SMA/EMA from Binance kline data.          |
| [Binance SM 1hour Indicators Tool](https://n8n.io/workflows/4744-binance-sm-1hour-indicators-tool/)                   | Same as above but for 1h timeframe.                                              |
| [Binance SM 4hour Indicators Tool](https://n8n.io/workflows/4745-binance-sm-4hour-indicators-tool/)                   | Same as above but for 4h timeframe.                                              |
| [Binance SM 1day Indicators Tool](https://n8n.io/workflows/4746-binance-sm-1day-indicators-tool/)                    | Same as above but for 1d timeframe.                                              |
| [Binance SM Indicators Webhook Tool](https://n8n.io/workflows/4747-binance-sm-indicators-webhook-tool/)                 | Technical backend. Handles all webhook logic for each timeframe tool.            |

---

## ⚙️ Installation Instructions

### Step 1: Import Workflows

* Open your **n8n Editor UI**
* Import each workflow JSON file one by one
* Activate them or ensure they're called via `Execute Workflow`

### Step 2: Set Credentials

* **OpenAI API Key** (GPT-4o recommended)
* **Binance endpoints** are public (no auth required)

### Step 3: Configure Webhook Endpoints

* Deploy **Binance SM Indicators Webhook Tool**
* Ensure the following paths are reachable:

  * `/webhook/15m`
  * `/webhook/1h`
  * `/webhook/4h`
  * `/webhook/1d`

### Step 4: Telegram Integration

* Create a Telegram bot using [@BotFather](https://t.me/BotFather)
* Add your **Telegram API token** to n8n credentials
* Replace the Telegram ID placeholder with your own

### Step 5: Final Trigger

* Trigger the `Binance Spot Market Quant AI Agent` manually or from Telegram
* The agent:

  * Extracts the trading pair (e.g. `BTCUSDT`)
  * Calls all tools for market data and sentiment
  * Generates a clean, HTML-formatted Telegram report

---

## 💬 Telegram Report Output Format

```html
<b>BTCUSDT Market Report</b>

<b>Spot Strategy</b>
• Action: Buy
• Entry: $63,800 | SL: $61,200 | TP: $66,500
• Rationale:
 - MACD Crossover (1h)
 - RSI Rebound from Oversold (15m)
 - Sentiment: Bullish

<b>Leverage Strategy</b>
• Position: Long 3x
• Entry: $63,800
• SL/TP zones same as above

<b>News Sentiment:</b> Slightly Bullish  
• "Bitcoin rallies as ETF inflows surge" – CoinDesk  
• "Whales accumulate BTC at key support" – NewsBTC  
```

---

## 🧠 System Overview

```
[Telegram Trigger]
→ [Session + Auth Logic]
→ [Binance Spot Market Quant AI Agent]
→ [Financial Analyst Tool + News Tool]
→ [All Technical Indicator Tools (15m, 1h, 4h, 1d)]
→ [OrderBook/Price/Kline Fetcher]
→ [GPT-4o Reasoning]
→ [Split & Send Message to Telegram]
```

---

## 🧾 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
Architecture, prompts, and trade report structure are IP-protected.
**No unauthorized rebranding or resale permitted.**

🔗 For support: [LinkedIn – Don Jayamaha](https://linkedin.com/in/donjayamahajr)



## 📊 Basic Information

- **Workflow ID:** 4739
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 11238
- **Downloads:** 1123
- **Created:** 2025/6/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4739)

## 👤 Author

- **Name:** Don Jayamaha Jr
- **Username:** @don-the-gem-dealer

## 🏷️ Categories

- Crypto Trading
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **telegramTrigger** 
- **code** (×2)
- **set** 
- **telegram** 
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
