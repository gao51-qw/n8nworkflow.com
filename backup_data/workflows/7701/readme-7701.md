# Real-time stock monitor with smart alerts for Indian & US markets

> Monitor Indian (NSE/BSE) and US stock markets with intelligent price alerts, cooldown periods, and multi-channel notifications (Email + Telegram). Automatically tracks price movements and sends alerts when stocks cross predefined upper/lower limits.

Perfect for day traders, investors, and portfolio managers who need instant notifications for price breakouts and breakdowns.

## How It Works

**Market Hours Trigger** - Runs every 2 minutes during market hours
**Read Stock Watchlist** - Fetches your stock list from Google Sheets
**Parse Watchlist Data** - Processes stock symbols and alert parameters
**Fetch Live Stock Price** - Gets real-time prices from Twelve Data API
**Smart Alert Logic** - Intelligent price checking with cooldown periods
**Check Alert Conditions** - Validates if alerts should be triggered
**Send Email Alert** - Sends detailed email notifications
**Send Telegram Alert** - Instant mobile notifications
**Update Alert History** - Records alert timestamps in Google Sheets
**Alert Status Check** - Monitors workflow success/failure
**Success/Error Notifications** - Admin notifications for monitoring

## Key Features:
- **Smart Cooldown**: Prevents alert spam
- **Multi-Market**: Supports Indian & US stocks
- **Dual Alerts**: Email + Telegram notifications
- **Auto-Update**: Tracks last alert times
- **Error Handling**: Built-in failure notifications

## Setup Requirements:

### 1. Google Sheets Setup:
Create a Google Sheet with these columns (in exact order):
- **A**: symbol (e.g., TCS, AAPL, RELIANCE.BSE)
- **B**: upper_limit (e.g., 4000)
- **C**: lower_limit (e.g., 3600) 
- **D**: direction (both/above/below)
- **E**: cooldown_minutes (e.g., 15)
- **F**: last_alert_price (auto-updated)
- **G**: last_alert_time (auto-updated)

### 2. API Keys & IDs to Replace:
- `YOUR_GOOGLE_SHEET_ID_HERE` - Replace with your Google Sheet ID
- `YOUR_TWELVE_DATA_API_KEY` - Get free API key from twelvedata.com
- `YOUR_TELEGRAM_CHAT_ID` - Your Telegram chat ID (optional)
- `your-email@gmail.com` - Your sender email
- `alert-recipient@gmail.com` - Alert recipient email

### 3. Stock Symbol Format:
- **US Stocks**: Use simple symbols like `AAPL`, `TSLA`, `MSFT`
- **Indian Stocks**: Use `.BSE` or `.NSE` suffix like `TCS.NSE`, `RELIANCE.BSE`

### 4. Credentials Setup in n8n:
- **Google Sheets**: Service Account credentials
- **Email**: SMTP credentials 
- **Telegram**: Bot token (optional)

## Example Google Sheet Data:
```
symbol          upper_limit  lower_limit  direction  cooldown_minutes
TCS.NSE         4000         3600         both       15
AAPL            180          160          both       10
RELIANCE.BSE    2800         2600         above      20
```

## Output Example:
```
Alert: TCS crossed the upper limit. Current Price: ₹4100, Upper Limit: ₹4000.
```


## 📊 Basic Information

- **Workflow ID:** 7701
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 4527
- **Downloads:** 452
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7701)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Crypto Trading
- Multimodal AI

## 🔗 Nodes Used

- **cron** 
- **googleSheets** (×2)
- **code** (×2)
- **httpRequest** 
- **if** (×2)
- **emailSend** (×3)
- **telegram** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
