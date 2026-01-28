# Binance SM 15min indicators tool

> A short-term technical analysis agent for **15-minute candles** on Binance Spot Market pairs. Calculates and interprets key trading indicators (RSI, MACD, BBANDS, ADX, SMA/EMA) and returns structured summaries, optimized for Telegram or downstream AI trading agents.

This tool is designed to be **triggered by another workflow** (such as the Binance SM Financial Analyst Tool or Binance Quant AI Agent) and is not intended for standalone use.

---

### 🔧 Key Features

* ⏱️ Uses **15-minute kline data** (last 100 candles)
* 📈 Calculates: RSI, MACD, Bollinger Bands, SMA/EMA, ADX
* 🧠 Interprets numeric data using GPT-4.1-mini
* 📤 Outputs concise, formatted analysis like:

  ```
  • RSI: 72 → Overbought  
  • MACD: Cross Up  
  • BB: Expanding  
  • ADX: 34 → Strong Trend
  ```

---

### 🧠 AI Agent Purpose

&gt; You are a short-term analysis tool for spotting volatility, early breakouts, and scalping setups.

Used by higher agents to determine:

* Entry/exit precision
* Momentum shifts
* Scalping opportunities

---

### ⚙️ How it Works

1. **Triggered externally** by another workflow
2. Accepts input:

   ```json
   {
     "message": "BTCUSDT",
     "sessionId": "123456789"
   }
   ```
3. Sends POST request to backend endpoint:

   ```
   https://treasurium.app.n8n.cloud/webhook/15m-indicators
   ```
4. Fetches last 100 candles and calculates indicators
5. Passes data to GPT for interpretation
6. Returns summary with indicator tags for human readability

---

### 🔗 Dependencies

This tool is triggered by:

* ✅ **Binance SM Financial Analyst Tool**
* ✅ **Binance Spot Market Quant AI Agent**

---

### 🚀 Setup Instructions

1. Import into your n8n instance
2. Make sure `/15m-indicators` webhook is active and calculates indicators correctly
3. Connect your **OpenAI GPT-4.1-mini** credentials
4. Trigger from upstream agent with Binance symbol and session ID
5. Ensure all external calls (to Binance + webhook) are working

---

### 🧪 Example Use Cases

| Use Case                              | Result                                  |
| ------------------------------------- | --------------------------------------- |
| Short-term trade decision for ETHUSDT | Receives 15m signal indicators summary  |
| Input from Financial Analyst Tool     | Returns real-time volatility snapshot   |
| Telegram bot asks for “DOGE update”   | Returns momentum indicators in 15m view |

---

🎥 **Watch Tutorial**:
[![Click to Watch](https://img.youtube.com/vi/HWHD-eXP0IE/hqdefault.jpg)](https://youtu.be/HWHD-eXP0IE)

---

### 🧾 Licensing & Attribution

© 2025 Treasurium Capital Limited Company
Architecture, prompts, and trade report structure are IP-protected.
No unauthorized rebranding or resale permitted.

🔗 **For support:** [Don Jayamaha – LinkedIn](https://linkedin.com/in/donjayamahajr)


## 📊 Basic Information

- **Workflow ID:** 4743
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 5148
- **Downloads:** 514
- **Created:** 2025/6/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4743)

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
