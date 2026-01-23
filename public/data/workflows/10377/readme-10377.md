# Customer financial report delivery system with Telegram and Google Sheets

> How it works

This workflow receives messages from Telegram using the Telegram Trigger node.

It detects the user’s action (/start or customer name) and decides whether to send a welcome message or perform a customer search.

The system fetches customer and access information from Google Sheets, checks if the user is authorized (based on chat IDs in the “Access” sheet), and then proceeds accordingly.

If access is granted, the workflow aggregates financial and weight data, formats a summary report, and sends it back to the same Telegram chat automatically.

If access is denied or customer data is not found, it sends an appropriate “no permission” or “incorrect name” message to the user.

⚙️ Set up steps

Connect your Telegram Bot API credentials in the Input user2, Send Report2, and related Telegram nodes.

Connect your Google Sheets account and update:

documentId → link to your Google Sheet

sheetName → replace with your actual sheet/tab names (“Access”, “Sheet1”, etc.)

lookupColumn → update to match column names used in your sheet (e.g., Customer name, Groups).

Replace placeholder text such as Your Custom Message and Your Custom Name with your actual message texts or variable names.

Test by sending a message to your Telegram bot with either /start or a known customer name.

Expected setup time: 10–15 minutes depending on how your Google Sheets and Telegram bot are configured.

Keep detailed field mapping or transformation logic (column names, sheet IDs) inside sticky notes within your workflow.

## 📊 Basic Information

- **Workflow ID:** 10377
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 147
- **Downloads:** 14
- **Created:** 2025/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10377)

## 👤 Author

- **Name:** Miad Dadbin
- **Username:** @miad-dadbin

## 🏷️ Categories

- Support Chatbot

## 🔗 Nodes Used

- **code** (×6)
- **telegramTrigger** 
- **telegram** (×4)
- **merge** (×2)
- **googleSheets** (×3)
- **if** (×3)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
