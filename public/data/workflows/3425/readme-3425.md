# Analyze crypto markets with the AI-powered CoinMarketCap data analyst

> **Meet your AI-powered crypto data analyst—fully integrated with CoinMarketCap APIs.**  

This workflow acts as the **supervisor agent** for a multi-agent architecture built in n8n, connecting three powerful sub-agents to extract real-time insights from centralized and decentralized markets. It’s the ultimate tool for **crypto traders, analysts, developers**, and **researchers** who need **strategic multi-source intelligence**—all through Telegram.

This workflow **requires 3 sub-agent templates** to function correctly. See below.

---

## 🔌 Required Sub-Workflows (Install First)

1. [**CoinMarketCap Crypto Agent Tool**](https://n8n.io/workflows/3422-get-live-crypto-market-data-with-ai-powered-coinmarketcap-agent)  
   → Token prices, metadata, conversions, listings

2. [**CoinMarketCap Exchange & Community Agent Tool**](https://n8n.io/workflows/3423-get-exchange-and-sentiment-insights-with-coinmarketcap-ai-agent)  
   → Exchange info, token holdings, Fear & Greed index

3. [**CoinMarketCap DEXScan Agent Tool**](https://n8n.io/workflows/3424-analyze-dex-liquidity-trades-and-spot-pairs-with-coinmarketcap-ai-agent)  
   → DEX trading pairs, liquidity, OHLCV data

 **Download all from my Creator Profile**:  
 [https://n8n.io/creators/don-the-gem-dealer/](https://n8n.io/creators/don-the-gem-dealer/)

---

##  What Makes This Workflow Special?

This is **not just another API wrapper**—it’s an intelligent routing agent powered by **GPT-4o-mini**, capable of:

- Understanding complex user queries  
- Choosing the appropriate tool workflow  
- Structuring the API request  
- Executing sub-workflows  
- Formatting the output  
- Returning insights via Telegram

It connects **three domains** of market data:
- **Cryptocurrencies (CEX)**
- **Exchanges & Sentiment**
- **DEX trading data**

---

## 🔍 What You Can Do  

💰 **Token Intelligence**
- Get token metadata, price, volume, supply
- Compare rankings and conversions

🏦 **Exchange Insights**
- View assets held by exchanges
- Track the CMC 100 Index and Fear & Greed Score

🌐 **DEX Market Analysis**
- Analyze pair quotes, historical OHLCV, live trades
- Discover the top DEXs by volume across blockchains

---

## ✅ Example Questions to Ask
- _“What’s the market cap of Ethereum today?”_  
- _“Show liquidity and volume for SOL/USDT on Solana”_  
- _“Get token holdings for Binance”_  
- _“Compare BTC price on Uniswap vs Binance”_  
- _“What’s the Fear & Greed index right now?”_

---

## 🛠️ Setup Instructions

1. **Create Telegram Bot**  
   - Use [@BotFather](https://t.me/BotFather) to get your bot token.

2. **Get CoinMarketCap API Key**  
   - Apply here: [https://coinmarketcap.com/api/](https://coinmarketcap.com/api/)

3. **Install Sub-Agent Templates**  
   - Required:
     - [Crypto Agent Tool](https://n8n.io/workflows/3422-get-live-crypto-market-data-with-ai-powered-coinmarketcap-agent)  
     - [Exchange & Community Tool](https://n8n.io/workflows/3423-get-exchange-and-sentiment-insights-with-coinmarketcap-ai-agent)  
     - [DEXScan Tool](https://n8n.io/workflows/3424-analyze-dex-liquidity-trades-and-spot-pairs-with-coinmarketcap-ai-agent)

4. **Configure Credentials in n8n**  
   - Add both **Telegram** and **CoinMarketCap** keys as `HTTP Header Auth`.

5. **Deploy & Test**  
   - Ask your Telegram bot: _“Top 10 tokens by 24h volume”_ or _“Convert 5 ETH to USD”_

---

##  Workflow Architecture

- **AI Brain**: GPT-4o-mini  
- **Memory**: Windowed buffer memory via `sessionId`  
- **Tool Agents**:  
   - `toolWorkflow()` → routes requests to the appropriate sub-agent  
   - Executes real-time API queries and returns structured output

---

##  Included Sticky Notes  
- **System Overview**  
- **Error Handling Guide (200, 400, 401, 429, 500)**  
- **Step-by-Step Usage Instructions**  
- **Prompt Examples + API Docs**  
- **Legal & Licensing Notes**

---

**Your crypto insights—smarter, faster, and all in one Telegram message.**



## 📊 Basic Information

- **Workflow ID:** 3425
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 25214
- **Downloads:** 2521
- **Created:** 2025/4/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3425)

## 👤 Author

- **Name:** Don Jayamaha Jr
- **Username:** @don-the-gem-dealer

## 🏷️ Categories

- Crypto Trading
- AI Chatbot

## 🔗 Nodes Used

- **telegram** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **telegramTrigger** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
