# Automated stock trading with AI: integrating Alpaca and Google Sheets

> 
## Description

Transform your investment strategy with a fully automated, AI-driven trading bot. This workflow bridges the gap between AI-powered market insights and real-world trading by executing buy and sell orders directly through the Alpaca paper trading API.

Designed to work in tandem with the **Automated Stock Sentiment Analysis** workflow, this solution takes the top-performing stocks based on daily news sentiment and automatically rebalances your portfolio. It's perfect for algorithmic traders, data-driven investors, and n8n enthusiasts who want to see their AI analysis translate into tangible actions, all while maintaining a comprehensive log of every transaction in Google Sheets.

### Key Features & Benefits

* **Automated Trading Execution:** Automatically places buy and sell orders on the Alpaca paper trading platform without manual intervention.
* **Sentiment-Driven Decisions:** Leverages the output from the sentiment analysis workflow to make informed decisions, selling positions with waning sentiment and buying into those with high positive sentiment.
* **Dynamic Portfolio Rebalancing:** Intelligently calculates which positions to close and how to allocate the resulting funds into new, high-potential stocks.
* **Paper Trading Ready:** Safely test and refine your trading strategies in a risk-free environment using Alpaca's paper trading API.
* **Daily Performance Tracking:** Automatically logs your account equity and daily percentage change to a Google Sheet, giving you a clear view of your portfolio's performance.
* **Detailed Trade Logging:** Every buy and sell order is meticulously recorded in a Google Sheet for easy review and historical analysis.
* **Scheduled and Autonomous:** The entire process runs on a daily schedule, making it a "set and forget" solution for systematic trading.

### How It Works

This workflow executes a sophisticated, automated trading strategy in a few key stages:

1.  **Daily Kick-off & Snapshot:** The workflow triggers on a daily schedule, first fetching your current Alpaca account balance and logging it to a Google Sheet to track daily performance.
2.  **Strategy Formulation:** It then reads the daily sentiment scores produced by the accompanying "Stock Sentiment Analysis" workflow. A Code node filters these results to identify the **top four stocks** with the highest positive sentiment.
3.  **The Decision Engine:** The core of the workflow is a custom Code node that acts as the trading brain. It:
    * Retrieves your currently open positions from Alpaca.
    * Compares your holdings against the day's top four sentiment stocks.
    * Generates a **"sell list"** of positions you hold that are no longer in the top four.
    * Generates a **"buy list"** of top-sentiment stocks that you don't yet own.
    * Calculates the total cash value from the "sell list" and determines the exact notional value to invest in each stock on the "buy list."
4.  **Trade Execution:**
    * The workflow first iterates through the "sell list" and executes a `DELETE` request to Alpaca for each, closing the positions.
    * A **Wait** node pauses the workflow for two minutes to ensure the sell orders are filled and the account balance is updated.
    * It then iterates through the "buy list," executing `POST` requests to Alpaca to purchase the new assets with the calculated funds.
5.  **Record Keeping:** All executed orders (both buys and sells) are merged and logged in a dedicated Google Sheet, giving you a permanent and detailed transaction history.

### Nodes Used

* Schedule Trigger
* HttpRequest (Alpaca API)
* Google Sheets
* Code (JavaScript)
* SplitOut
* Wait
* Merge

This workflow is the perfect next step for anyone looking to take their AI analysis to the next level. Take the emotion out of your trading and let this bot systematically execute your data-driven strategy.

## 📊 Basic Information

- **Workflow ID:** 5711
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 21788
- **Downloads:** 2178
- **Created:** 2025/7/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5711)

## 👤 Author

- **Name:** Raz Hadas
- **Username:** @raz-hadas

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **httpRequest** (×4)
- **code** (×2)
- **googleSheets** (×3)
- **splitOut** (×2)
- **merge** 
- **stickyNote** (×5)
- **wait** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
