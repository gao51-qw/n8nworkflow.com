🕒 **Evaluate Tesla (TSLA) price action and market structure on the 1-hour timeframe using 6 real-time indicators.**
This sub-agent is designed to feed **mid-term technical insights** into the [Tesla Financial Market Data Analyst Tool](https://n8n.io/workflows/4094-tesla-financial-market-data-analyst-tool-multi-timeframe-technical-ai-agent/). It uses **GPT-4.1** to interpret Alpha Vantage indicator data delivered via secure webhooks.

 ⚠️ This workflow is **not standalone** and is executed via `Execute Workflow`.
 🔌 **Requires:**

 * [Tesla Quant Technical Indicators Webhooks Tool](https://n8n.io/workflows/4095-tesla-quant-technical-indicators-webhooks-tool/)
 * `Alpha Vantage Premium API Key`

---

## 🔧 Connected Indicators

This tool fetches and analyzes the **latest 20 datapoints** for:

* **RSI (Relative Strength Index)**
* **MACD (Moving Average Convergence Divergence)**
* **BBANDS (Bollinger Bands)**
* **SMA (Simple Moving Average)**
* **EMA (Exponential Moving Average)**
* **ADX (Average Directional Index)**

---

## 📋 Sample Output

```json
{
  "summary": "TSLA is gaining strength on the 1-hour chart. RSI is rising, MACD has crossed bullish, and BBANDS are widening.",
  "timeframe": "1h",
  "indicators": {
    "RSI": 62.1,
    "BBANDS": {
      "upper": 176.90,
      "lower": 169.70,
      "middle": 173.30,
      "close": 176.30
    },
    "SMA": 174.20,
    "EMA": 175.60,
    "ADX": 27.5,
    "MACD": {
      "macd": 0.84,
      "signal": 0.65,
      "histogram": 0.19
    }
  }
}
```

---

## 🧠 Agent Components

| Component                      | Role                                               |
| ------------------------------ | -------------------------------------------------- |
| `1hour Data`                   | Pulls Alpha Vantage indicator data via webhook     |
| `Tesla 1hour Indicators Agent` | Interprets signals using structured GPT-4.1 prompt |
| `OpenAI Chat Model`            | GPT-4.1 LLM performs analysis                      |
| `Simple Memory`                | Maintains session context                          |

---

## 🛠️ Setup Instructions

1. **Import Workflow into n8n**
   Name it: `Tesla_1hour_Indicators_Tool`

2. **Install the Webhook Fetcher Tool**
   👉 Required: `Tesla_Quant_Technical_Indicators_Webhooks_Tool`

   * This agent expects webhook `/1hourData` to return pre-cleaned data

3. **Add Credentials**

   * Alpha Vantage Premium API Key (via HTTP Query Auth)
   * OpenAI GPT-4.1 credentials

4. **Configure for Sub-Agent Use**

   * Triggered only via `Execute Workflow` from:
     👉 `Tesla Financial Market Data Analyst Tool`
   * Inputs:

     * `message` (optional)
     * `sessionId` (required for memory linkage)

---

## 📌 Sticky Notes Overview

🟢 **Trigger Setup** – Activated only by the parent agent
📊 **1h Webhook Fetcher** – Calls Alpha Vantage via secured endpoint
🧠 **AI Agent Summary** – Interprets trend/momentum from indicator data
🔗 **GPT Model Notes** – GPT-4.1 parses and explains technical alignment
📘 **Documentation Sticky** – Embedded in canvas with full walkthrough

---

## 🔐 Licensing & Support

© 2025 **Treasurium Capital Limited Company**
This tool is part of a proprietary multi-agent AI architecture. No commercial reuse or redistribution permitted.

🔗 Author: [Don Jayamaha](https://linkedin.com/in/donjayamahajr)
🔗 Templates: [https://n8n.io/creators/don-the-gem-dealer/](https://n8n.io/creators/don-the-gem-dealer/)

---

🚀 **Detect TSLA trend shifts and validate setups with 1-hour technical clarity—powered by Alpha Vantage + GPT-4.1.**
**This tool is required by the Tesla Financial Market Data Analyst Tool.**

