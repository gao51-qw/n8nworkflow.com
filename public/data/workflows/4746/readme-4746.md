# Binance SM 1day indicators tool

> This advanced agent analyzes long-term price action in the Binance Spot Market using 1-day candles. It calculates key macro indicators like RSI, MACD, BBANDS, EMA, SMA, and ADX to identify high-confidence trend setups and market momentum. Used by the Quant AI system for directional bias and macro-level signal validation.

---
🎥 **Watch Tutorial**:
[![Click to Watch](https://img.youtube.com/vi/HWHD-eXP0IE/hqdefault.jpg)](https://youtu.be/HWHD-eXP0IE)

## 🎯 Purpose

* Detect major **trend reversals**, **consolidation zones**, and **macro bias**
* Support long-term **swing trading** decisions
* Provide reliable 1-day signals for downstream agents

---

## 🧠 Core Features

| Feature                     | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| 🔁 Trigger                  | Called by parent workflows via `Execute Workflow`            |
| 📥 Input Format             | `{ "message": "MATICUSDT", "sessionId": "telegram_id" }`     |
| 📡 Webhook Call             | Sends request to internal 1d indicators webhook              |
| 🧮 Technical Indicators     | RSI, MACD, BBANDS, EMA, SMA, ADX (based on 40 daily candles) |
| 🧠 GPT (gpt-4.1-mini) Agent | Interprets numerical data into human-readable trend signals  |
| 💬 Output                   | Summary suitable for Telegram or further agent consumption   |

---

## 🔗 External Tools Called

* `https://treasurium.app.n8n.cloud/webhook/1d-indicators`

Sends:

```json
{
  "symbol": "SOLUSDT"
}
```

---

## 📊 Indicator Calculations

| Indicator      | Purpose                         |
| -------------- | ------------------------------- |
| RSI (14)       | Overbought / Oversold Signals   |
| MACD (12,26,9) | Trend Reversals / Momentum      |
| BBANDS (20, 2) | Volatility Expansion            |
| EMA (20)       | Short-Term Trend Confirmation   |
| SMA (20)       | Macro-Level Support/Resistance  |
| ADX (14)       | Trend Strength + Directional DI |

---

## 📦 Setup

1. **Import the JSON** into n8n.
2. Add your **OpenAI API credentials**.
3. Ensure webhook `/1d-indicators` is connected and working.
4. Use this agent as a **sub-workflow** in:

   * Binance SM Financial Analyst Tool
   * Binance Spot Market Quant AI Agent

---

## 📤 Output Example

```
📅 1D Overview – MATICUSDT

• RSI: 71 → Overbought  
• MACD: Bearish Cross forming  
• BBANDS: Widening Volatility  
• EMA &lt; SMA → Downtrend Momentum  
• ADX: 33 → High Trend Strength
```

---

## 📌 Notes

* Not user-facing — outputs are structured JSON or Telegram-style summaries.
* Pairs well with shorter timeframe tools (15m–4h) for confidence stacking.

---

## 🧾 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
Architecture, prompts, and trade report structure are IP-protected.
No unauthorized rebranding permitted.

🔗 **Need help?** Reach out on [LinkedIn – Don Jayamaha](https://linkedin.com/in/donjayamahajr)


## 📊 Basic Information

- **Workflow ID:** 4746
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 3680
- **Downloads:** 368
- **Created:** 2025/6/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4746)

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
