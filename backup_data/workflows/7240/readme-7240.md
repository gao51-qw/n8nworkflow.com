# Automate stock trades with AI-driven technical analysis & Alpaca Trading

> # 📊 AI-Powered Stock Analysis & Auto-Trading Workflow  

Supercharge your trading decisions with this **end-to-end AI automation** that connects market intelligence, technical analysis, and automated trade execution — all without manual intervention.
![image.png](fileId:2056)
---

## My results so far:
(100k paper trading account with the current template strategy)
![image.png](fileId:2055)
## 🚀 What This Workflow Does
- **Live AI-Driven Market Scanning**  
  Integrates with **Danelfin’s AI scoring system** to identify top stocks daily based on technical, fundamental, sentiment, and risk scores.
  
- **Advanced Technical & Trend Analysis**  
  Combines **chart patterns, Fibonacci retracements, Bollinger Bands, MACD, RSI, EMA trends**, and support/resistance detection with **real-time news sentiment** to produce clear, professional-grade analysis reports.

- **Chart Image AI Analysis**  
  Uses LLM-powered vision models to interpret candlestick charts visually and extract pattern, trend, and indicator insights.

- **Automated Trade Execution**  
  Integrates with **Alpaca Paper Trading API** for secure, rule-based buy/sell execution.  
  Includes:
  - Risk management (position sizing, stop-loss/take-profit)
  - Account balance & buying power checks
  - No-repeat-loss policy

- **Data Storage & Strategy Memory**  
  Logs trades, PnL, and objectives in **PostgreSQL** for ongoing strategy refinement.

- **Automated Reporting**  
  Sends deep-dive market and trade reports directly to your email.

---

## 🔗 Integrated Services
- **Danelfin API** – AI-based stock ranking
- **Supabase Vector Store** – Strategy and knowledge retrieval
- **TwelveData API** – Market prices & indicators
- **Chart-img API** – TradingView chart generation
- **Alphavantage** – News sentiment feed
- **Alpaca API** – Automated order execution
- **OpenAI, Anthropic, Cohere, OpenRouter** – Multi-model AI reasoning

---

## 📥 Perfect For
- Quantitative analysts testing strategies
- Investors looking for **data-backed, automated execution**
- Educational environments for learning AI-based market strategies
- People that want to know Real results  Results 

---

## 💼 What You Get
**Full Setup**
- Pre-configured **n8n workflow** with all nodes and logic ready to run
- Step-by-step **API key integration guide** for Danelfin, Alpaca, TwelveData, Alphavantage, Chart-img
- Database logging setup with **PostgreSQL schema**
- Automated email reporting template

**Detailed Description**
- Explanation of every sub-agent and AI integration
- How the strategy agent selects stocks based on AI scores and past trades
- Deep technical indicators breakdown (EMA, RSI, MACD, Fibonacci, Bollinger, Support/Resistance)
- Risk management methodology and allocation rules

**Examples**
- **Daily Automated Analysis:** Every morning the system emails you the top 3 stocks to watch, with price, chart, and sentiment score
- **Trade Execution:** System buys AAPL with a defined stop-loss and take-profit based on technical setup
- **Chatbot Mode:** Ask “What’s the trend on TSLA?” and get a concise, professional-grade market report instantly

---

## 💡 Why You’ll Love It
This isn’t just an automation — it’s a **full-stack AI trading assistant** that *thinks*, *analyzes*, and *executes* while keeping risk in check. From sourcing the idea to placing the trade, it’s all covered.

---

### 🔑 Get Started
Replace the placeholder API keys, set your trading preferences, and let the automation do the heavy lifting.





## 📊 Basic Information

- **Workflow ID:** 7240
- **Complexity:** advanced
- **Node Count:** 96
- **Views:** 1027
- **Downloads:** 102
- **Created:** 2025/8/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7240)

## 👤 Author

- **Name:** Paul
- **Username:** @diagopl

## 🏷️ Categories

- Crypto Trading
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.toolThink** (×4)
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.rerankerCohere** 
- **httpRequestTool** (×7)
- **stickyNote** (×26)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **set** (×8)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×5)
- **httpRequest** (×7)
- **merge** (×2)
- **code** (×6)
- **@n8n/n8n-nodes-langchain.openAi** 
- **aggregate** (×2)
- **splitOut** (×2)
- **limit** 
- **@n8n/n8n-nodes-langchain.toolCalculator** (×2)
- **postgresTool** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agentTool** 
- **filter** 
- **gmail** 
- **markdown** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 96 nodes with 65 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
