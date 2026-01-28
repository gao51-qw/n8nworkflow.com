A medium-term trend analyzer for the Binance Spot Market that leverages core technical indicators across 4-hour candle data to provide human-readable swing-trade signals via AI.

🎥 **Watch Tutorial**:
[![Click to Watch](https://img.youtube.com/vi/HWHD-eXP0IE/hqdefault.jpg)](https://youtu.be/HWHD-eXP0IE)
---

## 🎯 What It Does

* Accepts a Binance trading pair (e.g., `AVAXUSDT`)
* Sends the symbol to an internal webhook for technical indicator calculation
* Computes 4h RSI, MACD, Bollinger Bands, SMA, EMA, ADX
* Returns structured, GPT-analyzed signals ready for Telegram delivery

---

## 🧠 AI Agent Details

* **Model:** GPT-4.1-mini (OpenAI Chat)
* **Agent Role:** Translates raw indicator values into sentiment-labeled signals
* **Memory:** Tracks session + symbol context for cleaner multi-turn logic

---

## 🔗 Required Backend Workflow

To calculate indicators, this tool depends on:

```
POST https://treasurium.app.n8n.cloud/webhook/4h-indicators
{
  "symbol": "AVAXUSDT"
}
```

Returns a JSON object with the latest 40×4h candle-based calculations.

---

## 📥 Input Format

```json
{
  "message": "AVAXUSDT",
  "sessionId": "telegram_chat_id"
}
```

---

## 📊 Sample Output

```
🕓 4h Technical Signals – AVAXUSDT

• RSI: 64 → Slightly Bullish  
• MACD: Bullish Cross above baseline  
• BB: Upper band touch – volatility expanding  
• EMA &gt; SMA → Confirmed Upside Momentum  
• ADX: 31 → Strengthening Trend
```

---

## 📚 Use Case Scenarios

| Use Case                      | Result                                               |
| ----------------------------- | ---------------------------------------------------- |
| Swing trend confirmation      | Uses 4h indicators to validate or reject setups      |
| Breakout signal confluence    | Helps assess if momentum is real or noise            |
| Inputs to Quant AI or Analyst | Supports higher-frame trade recommendation synthesis |

---

## 🛠️ Setup Instructions

1. Import the JSON template into your n8n workspace.
2. Set your OpenAI API credentials for the GPT node.
3. Ensure the `/webhook/4h-indicators` backend tool is live and accessible.
4. Connect this to your **Binance Financial Analyst Tool** or master Quant AI orchestrator.

---

## 🤖 Parent Workflows That Use This Tool

* Binance SM Financial Analyst Tool
* Binance Spot Market Quant AI Agent

---

## 📎 Sticky Notes & Annotations

This workflow includes internal sticky notes describing:

* Node roles (GPT, webhook, memory)
* System behavior (reasoning agent logic)
* Telegram formatting guidance

---

## 🔐 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
All architecture, prompt logic, and signal formatting are proprietary. Redistribution or rebranding is prohibited.

🔗 Connect with the creator: [Don Jayamaha – LinkedIn](https://linkedin.com/in/donjayamahajr)
