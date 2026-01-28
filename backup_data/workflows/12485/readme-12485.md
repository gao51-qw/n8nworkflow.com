# Generate daily stock buy/sell signals using technical indicators and Google Sheets

> ## 📊 Description
This automation calculates commonly used technical indicators for selected stocks and presents the results in a simple, structured dashboard. It removes the need for manual chart analysis by automatically fetching price data, calculating indicators, and generating clear Buy, Sell, or Neutral signals.
The workflow is designed to run daily and provides a consistent technical snapshot for each tracked stock. It is suitable for traders and analysts who want a repeatable and transparent way to monitor technical conditions without relying on manual tools.
## ⚙️ What This Template Does
- Runs automatically on a daily schedule
- Processes a predefined list of stock symbols
- Fetches recent daily price data from a market data API
- Calculates RSI, Moving Averages, and MACD
- Applies rule-based logic to generate Buy, Sell, or Neutral signals
- Stores indicator values and signals in Google Sheets
## ✅ Key Benefits
- Eliminates manual technical analysis
- Uses standard, widely accepted indicators
- Produces clear and easy-to-interpret signals
- Keeps all results in a single dashboard
- Easy to customize and extend
## 🧩 Features
- Daily scheduled execution
- Historical price data integration
- RSI (14-period) calculation
- Moving Averages (SMA 20 and SMA 50)
- MACD (12, 26, 9) calculation
- Rule-based Buy / Sell / Neutral classification
- Google Sheets dashboard output
- Built-in data validation checks
## 🔐 Requirements
- To use this workflow, you will need:
- A market data API key (Alpha Vantage or similar)
- A Google Sheets account for storing results
- Google Sheets credentials configured in n8n
- An active n8n instance (cloud or self-hosted)
## 🎯 Target Audience
- Stock traders and investors
- Technical analysts
- Finance and research teams
- Automation builders working with market data
## 🛠 Customization Options
- Update the stock list to track different symbols
- Adjust indicator periods or thresholds
- Modify Buy / Sell signal rules
- Change the schedule frequency
- Extend the dashboard with additional indicators

## 📊 Basic Information

- **Workflow ID:** 12485
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12485)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** (×3)
- **splitInBatches** 
- **if** 
- **googleSheets** 
- **httpRequest** 
- **stickyNote** (×5)
- **errorTrigger** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
