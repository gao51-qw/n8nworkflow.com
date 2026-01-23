# Tesla 15min indicators tool (short-term AI technical analysis)

> ⏱️ **Analyze Tesla (TSLA) short-term market structure and momentum using 6 technical indicators on the 15-minute timeframe.**
This AI agent tool is part of the **Tesla Quant Trading AI Agent** system. It is designed to detect intraday shifts in volatility, trend strength, and potential reversal signals.

 ⚠️ **Not standalone.** This agent is triggered via `Execute Workflow` by the [Tesla Financial Market Data Analyst Tool](https://n8n.io/workflows/4094-tesla-financial-market-data-analyst-tool-multi-timeframe-technical-ai-agent/).

 🔌 **Requires:**

 * [Tesla Quant Technical Indicators Webhooks Tool](https://n8n.io/workflows/4095-tesla-quant-technical-indicators-webhooks-tool/)
 * `Alpha Vantage Premium API Key`

---

## 📊 What It Does

This workflow pulls the **latest 20 data points** for 6 key technical indicators from a webhook-powered source, then uses **GPT-4.1** to interpret market momentum and structure:

### Connected Indicators:

* **RSI (Relative Strength Index)**
* **MACD (Moving Average Convergence Divergence)**
* **BBANDS (Bollinger Bands)**
* **SMA (Simple Moving Average)**
* **EMA (Exponential Moving Average)**
* **ADX (Average Directional Index)**

The output is a structured JSON with:

* Market summary
* Timeframe (`15m`)
* Indicator values

---

### 📋 Sample Output

```json
{
  "summary": "TSLA shows fading momentum. RSI dropped below 60, MACD is flattening, and BBANDS are tightening. Expect short-term consolidation.",
  "timeframe": "15m",
  "indicators": {
    "RSI": 58.3,
    "MACD": {
      "macd": -0.020,
      "signal": -0.018,
      "histogram": -0.002
    },
    "BBANDS": {
      "upper": 183.10,
      "lower": 176.70,
      "middle": 179.90,
      "close": 177.60
    },
    "SMA": 178.20,
    "EMA": 177.70,
    "ADX": 19.6
  }
}
```

---

## 🧠 Agent Components

| Module                | Role                                                     |
| --------------------- | -------------------------------------------------------- |
| **Webhook Data Node** | Calls `/15minData` endpoint for Alpha Vantage indicators |
| **LangChain Agent**   | Parses indicator payloads and generates reasoning        |
| **OpenAI GPT-4.1**    | Powers the AI logic to interpret technical structure     |
| **Memory Module**     | Maintains session consistency for multi-agent calls      |

---

## 🛠️ Setup Instructions

1. **Import Workflow into n8n**
   Name it: `Tesla_15min_Indicators_Tool`

2. **Configure Webhook Source**

   * Install and publish: `Tesla_Quant_Technical_Indicators_Webhooks_Tool`
   * Ensure `/15minData` is publicly reachable (or tunnel-enabled)

3. **Add Credentials**

   * Alpha Vantage API Key (`HTTP Query Auth`)
   * OpenAI GPT-4.1 (`OpenAI Chat Model`)

4. **Link as Sub-Agent**
   This workflow is not triggered manually. It is executed using `Execute Workflow` by:
   👉 `Tesla_Financial_Market_Data_Analyst_Tool`
   Pass in:

   * `message` (optional)
   * `sessionId` (for short-term memory linkage)

---

## 📌 Sticky Notes Summary

🟢 **Trigger Integration** – Receives `sessionId` and `message` from parent
🟡 **Webhook Fetcher** – Pulls Alpha Vantage data from `/15minData`
🧠 **GPT-4.1 Reasoning** – Produces structured JSON insight
🔵 **Session Memory** – Maintains evaluation flow across tools
📘 **Tool Description** – Explains indicator use and AI output format

---

## 🔒 Licensing & Author

© 2025 **Treasurium Capital Limited Company**
All logic, formatting, and agent design are protected under copyright. No resale or public re-use without permission.

Created by: [Don Jayamaha](https://linkedin.com/in/donjayamahajr)
Creator Profile: [https://n8n.io/creators/don-the-gem-dealer/](https://n8n.io/creators/don-the-gem-dealer/)

---

🚀 **Build faster intraday Tesla trading models using clean 15-minute indicator insights—processed by AI.**
**Required by the Tesla Financial Market Data Analyst Tool.**

## 📊 Basic Information

- **Workflow ID:** 4096
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1286
- **Downloads:** 128
- **Created:** 2025/5/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4096)

## 👤 Author

- **Name:** Don Jayamaha Jr
- **Username:** @don-the-gem-dealer

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
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
