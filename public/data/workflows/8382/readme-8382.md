# Monitor Bitcoin & Ethereum prices with CoinGecko alerts via Email/SMS

> # ⚠️ Crypto Price Threshold Alerts (Email/SMS/Telegram)

## 📌 Overview
This workflow monitors **Bitcoin (BTC)** and **Ethereum (ETH)** prices in real-time using **CoinGecko’s public API**. It sends you an **instant alert** when a price crosses a custom threshold or when the 24-hour change moves beyond your defined % range.

Perfect for traders who want **automated price pings** without constantly checking charts.

---

## ⚙️ How it works
1. **Schedule Trigger** — runs every 10–15 minutes (configurable cron).  
2. **HTTP Request (CoinGecko)** — fetches live BTC/ETH prices + 24h % changes.  
3. **Code Node** — compares values against your target thresholds.  
4. **IF Node** — checks if any condition is true (cross up/down or big move).  
5. **Notification Node** — sends alert via Email, SMS (Twilio), or Telegram.

**Example Output:**  
&gt; “BTC broke $110,000 (+2.1% 24h)”

---

## 🛠 Setup Guide
1. **Set your thresholds** in the **Code node**:  
   - `BTC_UP` / `BTC_DOWN`  
   - `ETH_UP` / `ETH_DOWN`  
   - `MOVE_ABS` (absolute % change to trigger)

2. **Choose delivery channel**:  
   - **Email Node** → SMTP (Gmail, Outlook, etc.)  
   - **Twilio Node** → SMS alerts  
   - **Telegram Node** → DM or channel alerts

3. **Test Run**:  
   - Execute once from the Code node.  
   - If thresholds are crossed, you’ll see a formatted alert payload.  

---

## 🎛 Customization
- Adjust **interval** in the **Schedule Trigger** (default: every 15m).  
- Add more cryptos by editing the CoinGecko API call.  
- Use **Slack** or **Discord** instead of Email/Telegram for team alerts.  
- Store last triggered state in **Google Sheets/DB** to avoid repeated pings.

---

## 👤 Author
**David Olusola**  
For traning automation & 1:1 consulting: [sales@daexai.com](mailto:sales@daexai.com)


## 📊 Basic Information

- **Workflow ID:** 8382
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 458
- **Downloads:** 45
- **Created:** 2025/9/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8382)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **code** (×2)
- **if** 
- **gmail** 
- **twilio** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
