# Multi-timeframe trading analysis for WEEX spot market with GPT-4o & Telegram

> # 📊 WEEX Spot Market Quant AI Agent (All-in-One Multi-Agent Trading System)

## ⚡ Overview

This **multi-agent n8n workflow** delivers an **automated, intelligent trading analysis system** for the **WEEX Spot Market**. It uses **GPT-4o** to interpret user prompts, route them to the correct sub-agent tools, analyze technical indicators, price data, sentiment insights, and return concise trading signals via **Telegram** or downstream automations.

No need to download additional workflows—**everything is embedded in this single orchestrated agent.**

---

## 🧠 Core Features

🔹 **Single-entry architecture** → Built-in orchestration logic with **no external subworkflow dependencies**
🔹 **Multi-timeframe indicator analysis** → 15m, 1h, 4h, and 1d
🔹 **Sentiment + news insights** from crypto sources
🔹 **Live price, volume, kline, and order book analysis**
🔹 **LLM-powered signal evaluation** using **GPT-4o**
🔹 **Telegram integration** for fast human queries or autonomous alerts

---

## 🤖 Built-In Agent Modules

| Module                              | Description                                                |
| ----------------------------------- | ---------------------------------------------------------- |
| ✅ **Financial Analyst Tool**        | Routes prompts, interprets tokens, and triggers sub-agents |
| ✅ **News & Sentiment Analyst Tool** | Gathers real-time sentiment from crypto news sources       |
| ✅ **Technical Indicator Tools**     | 15m, 1h, 4h, 1d indicators using WEEX spot market data     |
| ✅ **Price & Order Book Agent**      | Fetches real-time stats, price, and structure              |
| ✅ **Trading Signal Evaluator**      | GPT-4o merges all data and generates trading decision      |

---

## 🖥️ Prompt Flow Example

```
User Input: “Should I long or short ETH on WEEX today?”
→ Financial Analyst Agent interprets the query
→ Fetches multi-timeframe indicators, live price, sentiment
→ GPT-4o evaluates conditions and creates recommendation
→ Output delivered via Telegram:
```

📈 ETH/USDT Overview
• Price: \$3,710
• 4h RSI: 64.5 – Slightly Overbought
• MACD: Bullish Crossover
• Market Sentiment: 🔼 Positive
**Recommendation**: Consider long entry with stop at \$3,640.

---

## 🔧 Setup Instructions

Follow these steps to fully deploy and operate the WEEX Quant AI Agent in your n8n environment:

1. **🟢 Get Telegram Bot API Key**

   * Create your bot via **[@BotFather](https://t.me/BotFather)** on Telegram
   * Save the token it gives you (format: `123456789:ABCdefGHIjkLMNopQRStuvWXyz`)

2. **🔑 Add OpenAI / DeepSeek Chat API Key**

   * Compatible with **GPT-4o** (OpenAI) or **DeepSeek Chat**
   
3. **📈 (Optional) WEEX API Keys**

   * If expanding to live trading or authenticated data, get a **WEEX Spot API key** from your account dashboard
   * Not required for the analysis agent to function

4. **🔗 Connect Telegram to n8n**

   * Use `Telegram Trigger` and `Telegram` node with your API key
   * Ensure webhook is set correctly (or use polling mode)


---

## ✅ Example Use Cases

| Scenario                           | Outcome                                               |
| ---------------------------------- | ----------------------------------------------------- |
| “Is BTC bullish or bearish?”       | Merged indicator + sentiment + price analysis summary |
| “Get 15m and 4h trends for SOL”    | Multi-timeframe volatility vs macro trend report      |
| “Latest crypto news on XRP”        | Real-time filtered news + DeepSeek sentiment summary  |
| “What’s the order book structure?” | Level-by-level spread analysis with buy/sell volumes  |

---

## 🎥 Watch the Live Demo

[![Watch the Live Demo](https://img.youtube.com/vi/cc6wMdxwwLw/hqdefault.jpg)](https://youtu.be/cc6wMdxwwLw)



---

## 👨‍💼 Licensing & Support

🧾 **© 2025 Treasurium Capital Limited Company**
Architecture, prompts, and trade signal framework are IP-protected. No unauthorized rebranding or replication permitted.

📩 **Connect with the Creator**
**Don Jayamaha** – [LinkedIn Profile](https://linkedin.com/in/donjayamahajr)

## 📊 Basic Information

- **Workflow ID:** 7928
- **Complexity:** advanced
- **Node Count:** 57
- **Views:** 1141
- **Downloads:** 114
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7928)

## 👤 Author

- **Name:** Don Jayamaha Jr
- **Username:** @don-the-gem-dealer

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×9)
- **telegramTrigger** 
- **set** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.agentTool** (×8)
- **rssFeedReadTool** (×3)
- **httpRequestTool** (×12)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×9)
- **@n8n/n8n-nodes-langchain.toolThink** (×6)
- **@n8n/n8n-nodes-langchain.toolCalculator** (×4)
- **telegram** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 57 nodes with 55 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
