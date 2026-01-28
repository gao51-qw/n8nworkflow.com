# Automate bitcoin trading insights with 10-exchange liquidity data and GPT-4.1 analysis

> **Create your own Bitcoin Liquidity Exchange Channel with an AI Agent—fully integrated with 10 major centralized exchanges.**

This workflow acts as a **liquidity intelligence agent**, connecting multiple exchange order books into a unified dataset, then applying AI analysis to generate actionable trading insights. It’s the ultimate tool for **Bitcoin traders, analysts, community managers**, and **researchers** who need **cross-exchange liquidity monitoring**—delivered instantly through Telegram.

---

## 🔌 Supported Exchanges (Integrated)

1. Binance
2. Coinbase
3. Bybit
4. MEXC
5. Gate.io
6. Bitget
7. OKX
8. Kraken
9. HTX (Huobi)
10. Crypto.com

---

## 🌟 What Makes This Workflow Special?

This isn’t just raw order book data—it’s an **AI-powered aggregator** that:

* Fetches **BTC/USDT order books** (up to 5000 levels deep) from 10 exchanges
* **Normalizes & merges** liquidity data into a single view
* Uses **GPT-4.1 or GPT-4.1-mini** to detect liquidity clusters, imbalances, and support/resistance
* Generates **two structured outputs**:

  * **Liquidity Report** (raw snapshots from all exchanges)
  * **AI Trading Brief** (intraday + weekly signals)
* Publishes insights directly into a **Telegram channel**

---

## 🔍 What You Can Do

📊 **Cross-Exchange Liquidity View**

* Monitor total liquidity depth across top 10 exchanges
* Spot hidden bid/ask clusters and weak order book levels

⚡ **Real-Time Signals**

* Detect when liquidity evaporates at key price points
* Receive intraday + weekly trading briefs

📢 **Community Ready**

* Run your own public or private Telegram channel with automated liquidity updates

---

## ✅ Example Alerts

* *“BTC liquidity depth update: $30M bid wall forming at $62,000 across Binance & OKX.”*
* *“Ask-side liquidity dropped 20% in the last hour on Bybit + Coinbase.”*
* *“Daily summary: Cross-exchange liquidity balanced, net inflow +3.2%.”*
* *“Liquidity cluster detected: strong support between $61,800 – $62,150.”*

---

## 🛠️ Setup Instructions

1. **Create a Telegram Bot**

   * Use [@BotFather](https://t.me/botfather) to generate a bot token
   * Add the bot to your channel and get the channel ID

2. **Configure API Keys**

   * OpenAI API Key (GPT-4.1 or GPT-4.1-mini)
   * Telegram Bot Token + Channel ID

3. **Import Workflow into n8n**

   * Add credentials in the **Set** node (no hardcoding in HTTP nodes)
   * Configure schedule trigger (15m, hourly, daily, etc.)

4. **Deploy & Test**

   * Run the workflow and confirm liquidity + AI insights appear in Telegram

---

## ⚙️ Workflow Architecture

* **AI Brain** → GPT-4.1 or GPT-4.1-mini
* **Data Sources** → 10 centralized exchanges (BTC/USDT order books)
* **Data Normalization** → Unified liquidity dataset
* **Outputs** →

  * Liquidity Report (raw exchange stats)
  * AI Trading Brief (signals + summaries)
* **Delivery** → Telegram Channel

---

## 📝 Included Sticky Notes

* **System Overview** (workflow purpose & design)
* **Exchange Data Integration** (order book depth per CEX)
* **Setup Guide** (Telegram + API keys)
* **Customization Notes** (change frequency, extend signals)
* **Legal Disclaimer** (AI analysis, not financial advice)

---

**Your Bitcoin liquidity insights—unified, AI-analyzed, and delivered in real time to Telegram.** 



## 📊 Basic Information

- **Workflow ID:** 9308
- **Complexity:** advanced
- **Node Count:** 50
- **Views:** 1318
- **Downloads:** 131
- **Created:** 2025/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9308)

## 👤 Author

- **Name:** Don Jayamaha Jr
- **Username:** @don-the-gem-dealer

## 🏷️ Categories

- Crypto Trading
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×10)
- **code** (×24)
- **merge** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 50 nodes with 39 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
