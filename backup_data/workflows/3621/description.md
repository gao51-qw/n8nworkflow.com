# 📈 Daily Crypto Market Summary Bot (Binance to Telegram)

This workflow fetches 24h price change data from Binance for selected crypto pairs (BTC/USDC, ETH/USDC, SOL/USDC) every hour using a cron schedule.  
It performs in-depth analysis—including volatility, volume, bid-ask spread, momentum, and market comparison—then formats a detailed market summary.  
The final report is sent to a Telegram chat using HTML formatting, highlighting top gainers, losers, and key metrics in a clean, readable layout.

---

## 🔑 Key Features
- ⏱ Runs every hour (`cron: 5 * * * *`)
- 🔍 Filters and analyzes major coins: BTC, ETH, SOL
- 📊 Calculates market metrics:
  - Volatility
  - Bid-ask spread
  - Momentum
  - Estimated market cap
  - Market average comparison
- 📈 Highlights gainers, losers, and top coins by volume
- ✂️ Splits messages to fit Telegram’s 4096 character limit
- 💬 Sends output in rich HTML format to a Telegram group or chat

---

## 🎯 Use Cases
- ✅ Crypto traders wanting hourly performance insights
- ✅ Telegram groups needing automated market updates
- ✅ Analysts monitoring key coin metrics in real-time
- ✅ Bot developers creating crypto dashboards or alerts

---

## 🛠 Technical Details
- **Data Source:** Binance 24hr ticker API (`/api/v3/ticker/24hr`)
- **Coins Monitored:** `BTCUSDC`, `ETHUSDC`, `SOLUSDC` (can be expanded)
- **Metrics Calculated:**
  - Price change percentage
  - Volatility (high vs low price)
  - Bid-ask spread %
  - Momentum (vs weighted average)
  - Estimated market cap
  - Number of trades
  - Market average movement
- **Message Format:**
  - HTML with emojis, bold styling, and section headings
  - Auto-split messages when exceeding Telegram's 4096-char limit
- **Error Handling:**
  - Retry on HTTP failure (up to 5 times with 5s delay)
  - Message length checked and split for Telegram compatibility

---

## ⚙️ Setup Requirements
1. **Telegram Bot Token** — Create a bot via [@BotFather](https://t.me/BotFather) on Telegram
2. **Chat ID** — Use a personal ID or group chat ID (add the bot to the group)
3. **n8n Instance** — Either cloud or self-hosted
4. *(Optional)* Modify `relevantSymbols` in the Function node to track different coins

---

## 🧠 Notes
- This workflow is highly customizable—feel free to modify the analytics, tracked pairs, or formatting.
- Great base for alerting systems or crypto dashboards.

---

## 📷 Example Output (Telegram)
```html
📊 Crypto Market Summary — 2025-04-20 14:05:05 UTC

🌐 Market Overview (BTC, ETH, SOL)
Average Change: -1.54%
24h Volume: $850,358,765.46
Most Volatile: SOLUSDC (4.53%)
Most Liquid: BTCUSDC (0.0000% spread)

💹 Top by Volume
ETHUSDC: $403,860,356.75 | -1.640%
SOLUSDC: $279,241,338.60 | -1.706%
BTCUSDC: $167,257,070.12 | -1.261%

📉 Losers

SOLUSDC
🔻 Change: -1.71% (24h)
💰 Current: $137.10
📊 Range: $135.82 - $141.97
📈 Volatility: 4.53%
🔄 Volume: 2.01M | $279,241,338.60
⚖️ Bid-Ask Spread: 0.0073%
⬇️ vs Market Avg: -0.17%
🔽 Momentum: -1.42%
🔢 Trades: 366,119

ETHUSDC
🔻 Change: -1.64% (24h)
💰 Current: $1,577.42
📊 Range: $1,565.60 - $1,631.98
📈 Volatility: 4.24%
🔄 Volume: 252.11K | $403,860,356.75
⚖️ Bid-Ask Spread: 0.0044%
⬇️ vs Market Avg: -0.10%
🔽 Momentum: -1.53%
🔢 Trades: 596,801

BTCUSDC
🔻 Change: -1.26% (24h)
💰 Current: $84,336.65
📊 Range: $83,963.35 - $85,634.50
📈 Volatility: 1.99%
🔄 Volume: 1.97K | $167,257,070.12
⚖️ Bid-Ask Spread: 0.0000%
⭐ vs Market Avg: 0.27%
🔽 Momentum: -0.68%
🔢 Trades: 124,202