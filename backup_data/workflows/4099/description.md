📉 **Detect key candlestick reversal patterns and volume divergence on Tesla (TSLA) using GPT-4.1 and real-time OHLCV data.**
This AI agent evaluates **1-hour and 1-day candles** and is an essential part of the **Tesla Financial Market Data Analyst Tool**. It identifies signals like Doji, Engulfing, Hammer, and volume anomalies to support trade entry and exit logic.

 ⚠️ **Not a standalone template** — must be triggered by the [Tesla Financial Market Data Analyst Tool](https://n8n.io/workflows/4094-tesla-financial-market-data-analyst-tool-multi-timeframe-technical-ai-agent/)
 🔐 Requires:

 * **Alpha Vantage Premium API Key**
 * **OpenAI GPT-4.1 access**

---

## 🔍 What This Agent Does

1. Calls **Alpha Vantage** to fetch:

   * 🕐 1-hour OHLCV data
   * 📅 1-day OHLCV data
2. GPT-4.1 evaluates:

   * 📊 **Candlestick patterns** like Doji, Engulfing, Shooting Star
   * 🔄 **Volume divergence** (price/volume inconsistency)
3. Returns a **structured JSON output** like:

```json
{
  "summary": "Bearish signs detected on 1-day chart. A shooting star formed on high volume while RSI is elevated. Volume divergence seen on 1h chart as price rises but volume weakens.",
  "candlestickPatterns": {
    "1h": "None",
    "1d": "Shooting Star"
  },
  "volumeDivergence": {
    "1h": "Bearish",
    "1d": "None"
  },
  "ohlcv": {
    "1h": {
      "close": 174.1,
      "volume": 1430000,
      "high": 175.0,
      "low": 173.8
    },
    "1d": {
      "close": 188.3,
      "volume": 21234000,
      "high": 189.9,
      "low": 183.7
    }
  }
}
```

---

## 🛠️ Setup Instructions

1. **Import the Workflow**

   * Name it: `Tesla_1hour_and_1day_Klines_Tool`

2. **Install Dependencies**

   * ✅ [Tesla Financial Market Data Analyst Tool](https://n8n.io/workflows/4094-tesla-financial-market-data-analyst-tool-multi-timeframe-technical-ai-agent/) (this is the trigger parent)

3. **Add Required Credentials**

   * **Alpha Vantage Premium** → via HTTP Query Auth
   * **OpenAI GPT-4.1** → via OpenAI credentials

4. **Verify Web Access**

   * This tool fetches data live from Alpha Vantage:

     * `/query?function=TIME_SERIES_INTRADAY&interval=60min`
     * `/query?function=TIME_SERIES_DAILY`

5. **Run via Execute Workflow Trigger**
   This tool will activate **only when called** by the Financial Analyst Agent. Inputs:

   * `message` (optional)
   * `sessionId` (used for memory continuity)

---

## 🧠 Agent Architecture

| Component               | Description                                         |
| ----------------------- | --------------------------------------------------- |
| `Candlestick Data Hour` | Fetches 60min TSLA candles via Alpha Vantage        |
| `Candlestick Data Day`  | Fetches daily TSLA candles via Alpha Vantage        |
| `OpenAI Chat Model`     | GPT-4.1 reasoning engine for pattern detection      |
| `Simple Memory`         | Maintains short-term logic context                  |
| `Tesla Klines Agent`    | LangChain AI agent analyzing both candle and volume |

---

## 📌 Sticky Notes Overview

* 📘 **Workflow Purpose**
* 🧠 **Short-Term Memory Notes**
* 🔍 **1h/1d Data Fetch Logic**
* 📉 **Candlestick Pattern Types Detected**
* 📊 **Volume Divergence Definitions**
* 🤖 **GPT-4.1 Prompt Configuration**

---

## 🔐 Licensing & Support

© 2025 **Treasurium Capital Limited Company**
Logic, pattern reasoning, and prompt structure are proprietary IP.

🔗 [Don Jayamaha – LinkedIn](https://linkedin.com/in/donjayamahajr)
🔗 [n8n Creator Profile](https://n8n.io/creators/don-the-gem-dealer/)

---

🚀 **Automate technical edge: detect TSLA candle reversals and volume anomalies with precision using GPT-4.1 and Alpha Vantage.**
**Required by the Tesla Financial Market Data Analyst Tool.**