# Daily crypto yield monitor: Track top Binance Earn APY rates with earnings calculator

> # Get top Binance Earn yields sent to Email

This workflow automates the tracking of passive income opportunities on Binance by fetching real-time Flexible Earn APY rates, calculating potential returns, and delivering a daily summary to your inbox.

Manually checking crypto savings rates is tedious. This template handles the complex authentication required by Binance (HMAC-SHA256 signing), filters through hundreds of assets to find the highest yields, and calculates exactly how much you would earn daily on a simulated capital amount.

## 👥 Who is this for?
- **Crypto Investors** looking to maximize passive income on idle assets.
- **DeFi/CeFi Analysts** monitoring market rate fluctuations.
- **Hodlers** who want to ensure their assets are generating the best possible yield without daily manual checks.

## ⚙️ How it works
1. **Schedule Trigger:** Initiates the workflow every 24 hours (customizable).
2. **Authentication Handler:** Generates a timestamp and creates a secure HMAC-SHA256 signature required by the Binance API.
3. **Data Fetching:** specific HTTP Request retrieves the full list of "Flexible Earn" products.
4. **Processing:** The workflow splits the data, standardizes field names, and sorts all assets by **Annual Percentage Rate (APR)** in descending order.
5. **Analysis:** It limits the list to the top 15 assets and calculates estimated daily earnings based on a $10,000 reference capital (customizable via code).
6. **Reporting:** A formatted HTML email is sent via Gmail with the top opportunities.

## 🛠️ Setup Guide
1. **Binance API:** Log in to Binance and create a Read-Only API Key.
2. **Configure Nodes:**
   - Open the **Set Credentials 1** node: Paste your `API_KEY` and `SECRET_KEY` in each field.
3. **Email Setup:**
   - Open the **Send Email** node.
   - Select or connect your Gmail credentials.
   - Update the "To" address to your email.

## 🔌 Requirements
- An active Binance account.
- Binance API Key & Secret (Read-Only permissions are sufficient).
- A Gmail account (or you can swap the Gmail node for Outlook/Slack/Telegram).

## 🎨 How to customize
- **Change Capital Calculation:** Open the "Filter & Analyze" Code node and change `const capital = 10000;` to your actual portfolio size to see real projected earnings.
- **Filter Assets:** Add an `If` node after the "Split Out" node to only filter for specific assets (e.g., USDT, BTC, ETH) if you don't want to see altcoins.
- **Change Frequency:** Open the "Daily Trigger" node to run this hourly or weekly.

## 📊 Basic Information

- **Workflow ID:** 11426
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 210
- **Downloads:** 21
- **Created:** 2025/12/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11426)

## 👤 Author

- **Name:** GYEONGJUN CHAE
- **Username:** @jun

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **stickyNote** (×4)
- **scheduleTrigger** 
- **code** (×2)
- **crypto** 
- **httpRequest** 
- **gmail** 
- **splitOut** 
- **set** (×2)
- **sort** 
- **limit** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
