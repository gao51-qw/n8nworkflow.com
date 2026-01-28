# 📉 Buy the Dip Alert (Telegram/Slack/SMS)

## 📌 Overview
This workflow automatically notifies you when **Bitcoin or Ethereum** drops more than a set percentage in the last 24 hours. It’s ideal for traders who want to stay ready for **buy-the-dip opportunities** without constantly refreshing charts.

---

## ⚙️ How it works
1. **Schedule Trigger** — runs every 30 minutes (adjustable).  
2. **HTTP Request (CoinGecko)** — fetches BTC & ETH prices and 24h % change.  
3. **Code Node (“Dip Check”)** — compares changes against your dip threshold.  
4. **IF Node** — continues only if dip condition is true.  
5. **Notification Node** — sends alert via Telegram, Slack, or SMS (Twilio).

**Example Output:**  
Dip Alert — BTC –3.2%, ETH –2.8%
Not financial advice.

---

## 🛠 Setup Guide

### 1) Dip threshold  
- Open the **Code node**.  
- Change the line:  
  ```js
  const DIP = -2.5; // trigger if 24h drop &lt;= -2.5%
Set your preferred dip value (e.g., –5 for a 5% drop).
2) Choose your alert channel
Telegram: add your bot token & chat ID.
Slack: connect Slack API & set channel name.
Twilio: configure SID, token, from/to numbers.
3) Test
Temporarily set DIP to 0 to force an alert.
Run once from the Code node → confirm alert message text.
Execute the Notification node → confirm delivery to your channel.
🎛 Customization
Cadence: change Schedule Trigger (every 5m, 15m, hourly, etc.).
Coins: extend the CoinGecko call (add solana, bnb) and update Code node logic.
Multiple alerts: duplicate IF → Notification branch for different thresholds (minor vs major dip).
Combine with “Threshold Alerts” workflow to cover both upside breakouts and downside dips.
Storage: log alerts into Google Sheets for tracking dip history.
🧩 Troubleshooting
No alerts firing: check CoinGecko API response in Execution Data.
Wrong %: CoinGecko returns usd_24h_change directly — no math needed.
Duplicate alerts: add a debounce using a Sheet/DB to store last fired time.
Telegram not posting: confirm bot has access to your channel/group.
