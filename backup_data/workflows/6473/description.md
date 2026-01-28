# ⚙️ How It Works

This workflow is a **comprehensive crypto automation system** that combines three critical functions for traders and investors into one powerful tool:

## 📊 Price Monitor
- A `Cron` trigger runs on a schedule (e.g., every minute).
- A `HTTP Request` node checks the cryptocurrency's price.
- An `If` node compares the price against a defined threshold.
- If the condition is met, a `Telegram` node sends an alert.

## 📰 New Listing Notifier
- An `RSS Feed Trigger` monitors exchange announcements.
- When a new listing is published, a `Telegram` node sends a real-time notification.

## 🧾 Automated Crypto Transaction Logger
- A second `Cron` trigger runs daily (or as scheduled).
- A `HTTP Request` node fetches trade history from your exchange’s API.
- A `Code` node formats the transaction data.
- A `Google Sheets` node logs it in your spreadsheet.

---

# 🛠️ How to Set Up

## 1️⃣ Configure Credentials
You will need credentials for:
- **Telegram**: To send alerts and notifications.
- **Google Sheets**: To log transaction history.
- **Exchange API** (e.g., Binance): To fetch your trade history.

## 2️⃣ Customize the Price Monitor
- **Node 2**: `HTTP Request (Check BTC Price)`  
  Change the `url` to monitor a different crypto (e.g., Ethereum).
- **Node 3**: `If (Price &gt; $50k)`  
  Adjust `rightValue` to set your target price threshold.
- **Node 4**: `Telegram (Send Alert)`  
  Replace `[YOUR TELEGRAM CHAT ID]` with your actual ID.

## 3️⃣ Customize the Listing Notifier
- **Node 1**: `RSS Feed (New Listing Trigger)`  
  Replace `feedUrl` with your preferred exchange’s RSS feed.
- **Node 2**: `Telegram (Listing Notif)`  
  Replace `[YOUR TELEGRAM CHAT ID]` with your actual ID.

## 4️⃣ Customize the Transaction Logger
- **Node 2**: `HTTP Request (Get Binance Trades)`  
  Set the `url` to your exchange’s trade history endpoint.  
  Configure `headerParameters` for Authorization with your API key.
- **Node 4**: `Google Sheets (Log Transactions)`  
  Replace `[YOUR SPREADSHEET ID]` and `[YOUR SHEET NAME]` accordingly.

## 5️⃣ Final Activation
Once credentials and parameters are configured:
- ✅ Save the workflow
- 🔁 Activate it!

---

Ready to give this a visual punch with icons or a mini preview for the n8n template gallery? I can help dress it up in seconds!
