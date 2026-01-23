# Tesla 1day indicators tool (Macro-Level Technical AI)

> 📅 **Analyze Tesla’s daily trading structure with AI using 6 Alpha Vantage indicators.**
This tool evaluates long-term trend health, volatility patterns, and potential reversal signals at the **1-day timeframe**. Designed for use within the [Tesla Financial Market Data Analyst Tool](https://n8n.io/workflows/4094-tesla-financial-market-data-analyst-tool-multi-timeframe-technical-ai-agent/), this agent helps swing and position traders anchor macro sentiment.

 ⚠️ Not standalone. Must be executed via `Execute Workflow`
 🔌 Requires:

 * [Tesla Quant Technical Indicators Webhooks Tool](https://n8n.io/workflows/4095-tesla-quant-technical-indicators-webhooks-tool/)
 * `Alpha Vantage Premium API Key`
 * `OpenAI GPT-4.1` credentials

---

## 🔍 What It Does

This tool queries a **secured webhook** (`/1dayData`) to retrieve real-time, trimmed JSON data for:

* **RSI (Relative Strength Index)**
* **BBANDS (Bollinger Bands)**
* **SMA (Simple Moving Average)**
* **EMA (Exponential Moving Average)**
* **ADX (Average Directional Index)**
* **MACD (Moving Average Convergence Divergence)**

These values are then passed to a **LangChain AI Agent** powered by GPT-4.1, which returns:

* A 2–3 sentence **market condition summary**
* Structured indicator values
* Timeframe tag (`"1d"`)

---

## 📋 Sample Output

```json
{
  "summary": "TSLA shows consolidation on the daily chart. RSI is neutral, BBANDS are contracting, and MACD is flattening.",
  "timeframe": "1d",
  "indicators": {
    "RSI": 51.3,
    "BBANDS": {
      "upper": 192.80,
      "lower": 168.20,
      "middle": 180.50,
      "close": 179.90
    },
    "SMA": 181.10,
    "EMA": 179.75,
    "ADX": 15.8,
    "MACD": {
      "macd": -0.25,
      "signal": -0.20,
      "histogram": -0.05
    }
  }
}
```

---

## 🧠 Agent Components

| Component                     | Description                                        |
| ----------------------------- | -------------------------------------------------- |
| `1day Data` (HTTP Node)       | Pulls latest data from secured `/1dayData` webhook |
| `OpenAI Chat Model`           | GPT-4.1 powers the analysis logic                  |
| `Tesla 1day Indicators Agent` | LangChain agent performing interpretation          |
| `Simple Memory`               | Short-term session continuity                      |

---

## 🛠️ Setup Instructions

1. **Import Workflow into n8n**

   * Name: `Tesla_1day_Indicators_Tool`

2. **Add Required Credentials**

   * `Alpha Vantage Premium` (via HTTP Query Auth)
   * `OpenAI GPT-4.1` (Chat Model)

3. **Install Webhook Fetcher**

   * Required: [Tesla Quant Technical Indicators Webhooks Tool](https://n8n.io/workflows/4095-tesla-quant-technical-indicators-webhooks-tool/)
   * Endpoint `/1dayData` must be active

4. **Execution Context**
   This tool is only triggered via:
   👉 `Tesla Financial Market Data Analyst Tool`

   * Inputs expected:

     * `message`: optional context
     * `sessionId`: session memory linkage

---

## 📌 Sticky Notes Overview

📘 Tesla 1-Day Indicators Tool – Purpose and integration
📡 Webhook Fetcher – Pulls daily Alpha Vantage data via HTTPS
🧠 GPT-4.1 Model – Reasoning for trend classification
🔗 Sub-Agent Trigger – Used only by Financial Market Analyst
🧠 Memory Buffer – Ensures consistent session logic

---

## 🔒 Licensing & Support

© 2025 **Treasurium Capital Limited Company**
This workflow—including prompts, logic, and formatting—is protected IP.

🔗 [Don Jayamaha – LinkedIn](https://linkedin.com/in/donjayamahajr)
🔗 [Creator Profile](https://n8n.io/creators/don-the-gem-dealer/)

---

🚀 **Evaluate long-term Tesla price behavior with AI-enhanced technical analysis—critical for swing trading strategy.**
**Required by the Tesla Financial Market Data Analyst Tool.**


## 📊 Basic Information

- **Workflow ID:** 4098
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 782
- **Downloads:** 78
- **Created:** 2025/5/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4098)

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
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
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
