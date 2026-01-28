A fully autonomous, **HTX Spot Market AI Agent** **(Huobi AI Agent)** built using GPT-4o and Telegram. This workflow is the **primary interface**, orchestrating all internal reasoning, trading logic, and output formatting.

---

### ⚙️ Core Features

* 🧠 **LLM-Powered Intelligence**: Built on GPT-4o with advanced reasoning
* ⏱️ **Multi-Timeframe Support**: 15m, 1h, 4h, and 1d indicator logic
* 🧩 **Self-Contained Multi-Agent Workflow**: No external subflows required
* 🧮 **Real-Time HTX Market Data**: Live spot price, volume, 24h stats, and order book
* 📲 **Telegram Bot Integration**: Interact via chat or schedule
* 🔄 **Autonomous Runs**: Support for webhook, schedule, or Telegram triggers

---

### 📥 Input Examples

| User Input      | Agent Action                                  |
| --------------- | --------------------------------------------- |
| `btc`           | Returns 15m + 1h analysis for BTC             |
| `eth 4h`        | Returns 4-hour swing data for ETH             |
| `bnbusdt today` | Full day snapshot with technicals + 24h stats |

---

### 🖥️ Telegram Output Sample

```
📊 BTC/USDT Market Summary

💰 Price: $62,400  
📉 24h Stats: High $63,020 | Low $60,780 | Volume: 89,000 BTC

📈 1h Indicators:
• RSI: 68.1 → Overbought  
• MACD: Bearish crossover  
• BB: Tight squeeze forming  
• ADX: 26.5 → Strengthening trend

📉 Support: $60,200  
📈 Resistance: $63,800
```

---

### 🛠️ Setup Instructions

1. **Create your Telegram Bot** using [@BotFather](https://t.me/BotFather)
2. **Add Bot Token** in n8n Telegram credentials
3. **Add your GPT-4o or OpenAI-compatible key** under HTTP credentials in n8n
4. *(Optional)* Add your [HTX API](https://www.htx.com/en-us/opend/) credentials if expanding to authenticated endpoints
5. Deploy this main workflow using:

   * ✅ Webhook (HTTP Request Trigger)
   * ✅ Telegram messages
   * ✅ Cron / Scheduled automation

---

### 🎥 Live Demo

[![Watch the Live Demo](https://img.youtube.com/vi/Crr41F8tr0Q/hqdefault.jpg)](https://youtu.be/Crr41F8tr0Q?si=hZv_WRY2ZOA9-Y0V)  

---

### 🧠 Internal Architecture

| Component          | Role                                                     |
| ------------------ | -------------------------------------------------------- |
| 🔄 Telegram Trigger | Entry point for external or manual signal                |
| 🧠 GPT-4o          | Symbol + timeframe extraction + strategy generation      |
| 📊 Data Collector  | Internal tools fetch price, indicators, order book, etc. |
| 🧮 Reasoning Layer | Merges everything into a trading signal summary          |
| 💬 Telegram Output | Sends formatted HTML report via Telegram                 |

---

### 📌 Use Case Examples

| Scenario                               | Outcome                                                 |
| -------------------------------------- | ------------------------------------------------------- |
| Auto-run every 4 hours                 | Sends new HTX signal summary to Telegram                |
| Human requests “eth 1h”                | Bot replies with real-time 1h chart-based summary       |
| System-wide trigger from another agent | Invokes webhook and returns response to parent workflow |

---

### 🧾 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
Architecture, prompts, and trade report structure are IP-protected.

**No unauthorized rebranding permitted.**

🔗 **For support:** [Don Jayamaha – LinkedIn](https://linkedin.com/in/donjayamahajr)
