This workflow acts as a **central API gateway** for all technical indicator agents in the **Binance Spot Market Quant AI system**. It listens for incoming webhook requests and dynamically routes them to the correct timeframe-based indicator tool (15m, 1h, 4h, 1d). Designed to power multi-timeframe analysis at scale.

🎥 **Watch Tutorial**:
[![Click to Watch](https://img.youtube.com/vi/HWHD-eXP0IE/hqdefault.jpg)](https://youtu.be/HWHD-eXP0IE)

---

## 🎯 What It Does

* Accepts requests via webhook with a token symbol and timeframe
* Forwards requests to the correct internal technical indicator tool
* Returns a clean JSON payload with RSI, MACD, BBANDS, EMA, SMA, and ADX
* Can be used directly or as a microservice by other agents

---

## 🛠️ Input Format

Webhook endpoint:

```
POST /webhook/indicators
```

Body format:

```json
{
  "symbol": "DOGEUSDT",
  "timeframe": "15m"
}
```

---

## 🔄 Routing Logic

| Timeframe | Routed To                        |
| --------- | -------------------------------- |
| 15m       | Binance SM 15min Indicators Tool |
| 1h        | Binance SM 1hour Indicators Tool |
| 4h        | Binance SM 4hour Indicators Tool |
| 1d        | Binance SM 1day Indicators Tool  |

---

## 🔎 Use Cases

| Use Case                                           | Description                                            |
| -------------------------------------------------- | ------------------------------------------------------ |
| 🔗 Used by Binance Financial Analyst Tool          | Automatically triggers all indicator tools in parallel |
| 🤖 Integrated in Binance Quant AI System           | Supports reasoning, signal generation, and summaries   |
| ⚙️ Can be called independently for raw data access | Useful for dashboards or advanced analytics            |

---

## 📤 Output Example

```json
{
  "symbol": "DOGEUSDT",
  "timeframe": "15m",
  "rsi": 56.7,
  "macd": "Bearish Crossover",
  "bbands": "Stable",
  "ema": "Price above EMA",
  "adx": 19.4
}
```

---

## ✅ Prerequisites

* Make sure all the following workflows are installed and operational:

  * Binance SM 15min Indicators Tool
  * Binance SM 1hour Indicators Tool
  * Binance SM 4hour Indicators Tool
  * Binance SM 1day Indicators Tool
* OpenAI credentials (for any agent using LLM formatting)

---

## 🧾 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
All architectural routing logic and endpoint structuring is IP-protected.
No unauthorized rebranding or resale permitted.

🔗 **Need help?** [Connect on LinkedIn – Don Jayamaha](https://linkedin.com/in/donjayamahajr)