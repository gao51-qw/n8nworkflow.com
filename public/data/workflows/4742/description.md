A powerful sub-agent that collects **real-time market structure data** from Binance for any trading pair — including price, volume, order book depth, and candlestick snapshots across multiple timeframes (15m, 1h, 4h, 1d).

---
🎥 **Watch Tutorial**:
[![Click to Watch](https://img.youtube.com/vi/HWHD-eXP0IE/hqdefault.jpg)](https://youtu.be/HWHD-eXP0IE)

## 🎯 Purpose

This workflow powers the Quant AI system with:

* ✅ Real-time **price feed** (`/ticker/price`)
* ✅ **24-hour stats** (OHLC, % change, volume via `/ticker/24hr`)
* ✅ Live **order book depth** (`/depth`)
* ✅ Latest **candlestick data** (`/klines`) for all major intervals

All outputs are parsed and formatted using GPT and returned to the parent agent (e.g., Financial Analyst Tool) as a **Telegram-optimized summary**.

---

## ⚙️ Workflow Architecture

| Node                                 | Role                                                         |
| ------------------------------------ | ------------------------------------------------------------ |
| 🔗 `Execute Workflow Trigger`        | Accepts input from parent workflow                           |
| 🧠 `Simple Memory`                   | Stores session + symbol info                                 |
| 🤖 `Binance SM Market Agent`         | Parses prompt, routes tool calls                             |
| 💡 `OpenAI Chat Model (gpt-4o-mini)` | Converts raw data into a clean, readable format for Telegram |
| 🌐 `getCurrentPrice`                 | Gets latest price                                            |
| 🌐 `get24hrStats`                    | Gets OHLC/volume over past 24 hours                          |
| 🌐 `getOrderBook`                    | Gets top 100 bids and asks                                   |
| 🌐 `getKlines`                       | Gets latest 15m, 1h, 4h, and 1d candles                      |

---

## 📥 Input Requirements

This workflow is not called directly by the user. Instead, it is **triggered by another workflow**, such as:

```json
{
  "message": "BTCUSDT",
  "sessionId": "539847013"
}
```

---

## 📤 Telegram Output Example

```
📊 BTCUSDT Market Overview

💰 Price: $63,220  
📈 24h Change: +2.3% | Volume: 45,210 BTC  

📉 Order Book  
• Top Bid: $63,190  
• Top Ask: $63,230  

🕰️ Latest Candles  
• 15m: O: $63,000 | C: $63,220 | Vol: 320 BTC  
• 1h : O: $62,700 | C: $63,300 | Vol: 980 BTC  
• 4h : O: $61,800 | C: $63,500 | Vol: 2,410 BTC  
• 1d : O: $59,200 | C: $63,220 | Vol: 7,850 BTC
```

---

## ✅ Use Cases

| Scenario                           | Output Provided                                              |
| ---------------------------------- | ------------------------------------------------------------ |
| “Show current BTC price and trend” | Price, 24h stats, candles, and order book in one message     |
| “Candles for SOL”                  | 15m, 1h, 4h, 1d candlesticks for SOLUSDT                     |
| Triggered by Quant AI system       | Clean Telegram-ready summary with all structure tools merged |

---

## 🧩 Toolchain Breakdown

| Tool Name         | Endpoint               | Purpose                        |
| ----------------- | ---------------------- | ------------------------------ |
| `getCurrentPrice` | `/api/v3/ticker/price` | Latest trade price             |
| `get24hrStats`    | `/api/v3/ticker/24hr`  | 24h OHLC, % change, volume     |
| `getOrderBook`    | `/api/v3/depth`        | Top 100 bids and asks          |
| `getKlines`       | `/api/v3/klines`       | 1-candle snapshot across 4 TFs |

---

## 🚀 Installation Steps

1. **Import the JSON** into your n8n instance
2. Connect your OpenAI credentials for the Chat Model node
3. No Binance API key needed — public endpoints
4. Trigger this tool only via:

   * Binance SM Financial Analyst Tool
   * Binance Spot Market Quant AI Agent

---

## 🔐 Licensing & Attribution

© 2025 Treasurium Capital Limited Company
Architecture, prompts, and trade structure are IP-protected. No unauthorized rebranding permitted.

🔗 For support: [Don Jayamaha – LinkedIn](https://linkedin.com/in/donjayamahajr)
