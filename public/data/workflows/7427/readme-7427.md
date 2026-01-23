# Generate weekly grocery lists in Notion with automated email notifications

> ## Who’s it for
Busy homemakers, creators, and anyone who wants a simple, no-cost way to plan weekly meals and get a ready-to-shop grocery list—without extra apps.

## What it does
Runs on a weekly Cron schedule, generates a grocery list, creates rows in your Notion database (Ingredient, Quantity, Status), and emails the list (optional Telegram confirmation). It includes a Notion connection check, detailed error notifications (email and optional Telegram), a success email with timestamp, and optional persistent logging to a Notion “Logs” database.

## Requirements
- Notion account + integration connected to your database  
- SMTP credentials for the Email node  
- (Optional) Telegram bot and chat ID for alerts  
- (Optional) Notion log database if you want persistent logs

## How to set up
1. Import the workflow and open **Set: Configuration** to fill:
   - `fromEmail`, `emailTo`, `notifyEmail`, `notionDb`, `telegramChatId`  
   - (Optional) `logToNotion` (true/false), `notionLogDb`
2. In Notion, create a DB with properties:
   - **Ingredient** (Title), **Quantity** (Rich text), **Status** (Select: “To Buy”)
3. Attach your **Notion** and **SMTP** credentials (and Telegram if used).
4. Run once to test, then set Cron to your preferred weekly time.

## How to customize
- Edit the recipe/grocery items in the Code node.
- Change the Cron schedule (test with “Every minute,” then revert to weekly).
- Enable Telegram alerts, and/or turn on Notion logging for audit trails.


## 📊 Basic Information

- **Workflow ID:** 7427
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 143
- **Downloads:** 14
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7427)

## 👤 Author

- **Name:** Shelly-Ann Davy
- **Username:** @SheCodesFlow

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×2)
- **cron** 
- **set** (×3)
- **code** (×2)
- **notion** (×4)
- **if** (×3)
- **emailSend** (×3)
- **telegram** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
