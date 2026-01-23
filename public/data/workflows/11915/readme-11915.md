# Send automated invoice payment reminders with Gmail, Google Sheets and Twilio

> This workflow streamlines accounts receivable management by automatically monitoring invoices in Google Sheets and sending scheduled payment reminders. It is designed for businesses using Gmail and Google Sheets that need a scalable alternative to complex accounting software.

**How it works**
1. **Watches for invoices:** Triggers daily or via form submission to check for new entries.
2. **First Follow-up (Day 7):** Checks payment status one week after the invoice date. If unpaid, it sends a friendly email (and optional SMS).
3. **Second Follow-up (Day 9):** Re-checks status and sends a firmer reminder if funds are still not received.
4. **Final Notice (Day 12):** Sends a final urgent reminder before closing the cycle.
5. **Smart Stopping:** The workflow checks the 'Payment Status' column before every single message to ensure clients who have already paid are never disturbed.

**Setup time:** About 20 minutes.

**Prerequisites:** A Google Sheet with columns for Date, Email, and Payment Status.

## 📊 Basic Information

- **Workflow ID:** 11915
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 41
- **Downloads:** 4
- **Created:** 2025/12/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11915)

## 👤 Author

- **Name:** Neal Mcleod
- **Username:** @ctk-industries

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **stickyNote** (×4)
- **formTrigger** 
- **wait** (×3)
- **gmail** (×3)
- **googleSheets** (×3)
- **if** (×3)
- **twilio** (×3)
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
