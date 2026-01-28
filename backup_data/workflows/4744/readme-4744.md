# Binance SM 1hour indicators tool

> # 🧪 Binance SM 1hour Indicators Tool

A precision trading signal engine that interprets **1-hour candlestick indicators** for Binance Spot Market pairs using a GPT-4.1-mini LLM. Ideal for swing traders seeking directional bias and momentum clarity across medium timeframes.

---

🎥 **Watch Tutorial**:
[![Click to Watch](https://img.youtube.com/vi/HWHD-eXP0IE/hqdefault.jpg)](https://youtu.be/HWHD-eXP0IE)

## 🎯 Purpose

This tool provides a structured 1-hour market read using:

* **RSI** (Relative Strength Index)
* **MACD** (Moving Average Convergence Divergence)
* **BBANDS** (Bollinger Bands)
* **SMA & EMA** (Simple and Exponential Moving Averages)
* **ADX** (Average Directional Index)

It’s invoked as a sub-agent in broader AI workflows, such as the Binance Financial Analyst Tool and the Spot Market Quant AI Agent.

---

## ⚙️ Key Features

| Feature                | Description                                                   |
| ---------------------- | ------------------------------------------------------------- |
| 🔄 Subworkflow Trigger | Runs only when called by parent agent (not standalone)        |
| 🧠 GPT-4.1-mini LLM    | Translates numeric indicators into natural-language summaries |
| 📊 Real-time Data      | Pulls latest 40×1h candles via internal webhook from Binance  |
| 📥 Input Format        | `{ "message": "ETHUSDT", "sessionId": "telegram_chat_id" }`   |
| 📤 Output Format       | JSON summary + Telegram-friendly HTML overview                |

---

## 💡 Example Output

```
📊 1h Technical Overview – ETHUSDT

• RSI: 59 (Neutral)  
• MACD: Bullish Crossover  
• BBANDS: Price at Upper Band  
• EMA &gt; SMA → Positive Slope  
• ADX: 28 → Moderate Trend Strength
```

---

## 🧩 Use Cases

| Scenario                               | Result                                          |
| -------------------------------------- | ----------------------------------------------- |
| Mid-frame market alignment             | Verifies momentum between 15m and 4h timeframes |
| Quant AI Agent input                   | Supplies trend context for entry/exit decisions |
| Standalone medium-term signal snapshot | Validates swing trade setups or filters noise   |

---

## 📦 Installation Instructions

1. **Import workflow** into your n8n instance
2. Confirm internal webhook `/1h-indicators` is live and authorized
3. Insert your OpenAI credentials for GPT-4.1-mini node
4. Use only when triggered via:

   * Binance Financial Analyst Tool
   * Binance Spot Market Quant AI Agent

---

## 🧾 Licensing & Support

🔗 **Don Jayamaha – LinkedIn**
[linkedin.com/in/donjayamahajr](https://linkedin.com/in/donjayamahajr)

© 2025 Treasurium Capital Limited Company
Architecture, prompts, and signal logic are proprietary. Redistribution or commercial use requires explicit licensing. No unauthorized cloning permitted.



## 📊 Basic Information

- **Workflow ID:** 4744
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 3688
- **Downloads:** 368
- **Created:** 2025/6/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4744)

## 👤 Author

- **Name:** Don Jayamaha Jr
- **Username:** @don-the-gem-dealer

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequestTool** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
