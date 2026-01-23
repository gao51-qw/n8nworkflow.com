# Expense logging with Telegram and Google Sheets

> 
### Weekly Summaries and Budget Alerts
## Who’s it for
This workflow is perfect for individuals who want a simple expense tracker without needing a full app. If you already use Telegram daily, this makes it effortless to log purchases, track spending, and stay accountable to your budget.

## How it works / What it does
* Send an expense in Telegram using the format /spent 5 lunch.
* n8n parses the message and appends the entry to Google Sheets.
* Every Sunday at 11:00, the workflow sends a weekly expense summary to Telegram.
* If you exceed your weekly budget (default €100), you’ll instantly get a budget warning alert.
* Optionally, the sheet can be cleared weekly to start fresh.

## How to set up
1. Create a Telegram bot with BotFather, copy the token, and get your Chat ID via getUpdates.
2. Make a copy of the provided Google Sheets template and connect your Google credentials in n8n.
3. Replace &lt;YOUR_CHAT_ID&gt; and &lt;YOUR_SHEET_ID&gt; placeholders in the workflow.
4. Adjust the budget threshold in the “Check Weekly Budget” node if needed.
5. Activate the workflow and test with a sample expense.
Requirements
## What to do
* A Telegram bot (free, via BotFather).
* Google Sheets with n8n OAuth2 credentials.
* An n8n instance (self-hosted or cloud).
How to customize the workflow
* Change the budget threshold in the Code node.
* Update the summary schedule in the Schedule Trigger node.
* Expand the Google Sheet with more categories or details.
* Personalize the Telegram messages to fit your style.


## 📊 Basic Information

- **Workflow ID:** 8268
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 610
- **Downloads:** 61
- **Created:** 2025/9/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8268)

## 👤 Author

- **Name:** Gtaras
- **Username:** @tarasidis

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **stickyNote** (×4)
- **telegramTrigger** 
- **code** (×3)
- **googleSheets** (×4)
- **scheduleTrigger** 
- **telegram** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
