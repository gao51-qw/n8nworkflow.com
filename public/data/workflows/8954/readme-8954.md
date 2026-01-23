# Stripe dispute management with Google Sheets ledger & Gmail notifications

> ## Description
This automation manages Stripe disputes by fetching dispute data, formatting it, logging it into Google Sheets, updating related payment records, and notifying the customer via email. It ensures finance and support teams always have up-to-date dispute information while keeping customers informed automatically.

## What This Template Does (Step-by-Step)
-  📋 Manual Trigger → Start the workflow manually.
-  🔗 Fetch Latest Disputes from Stripe → Retrieves the 5 most recent disputes via the Stripe API.
-  🛠 Format Stripe Dispute Data → Cleans and restructures the raw Stripe response (dispute_id,        charge_id, amount, currency, reason, status, respond_by, etc.).
-  📊 Log Dispute in Disputes Sheet → Appends a new row in the Disputes sheet for historical record-keeping.
-  📧 Send Customer Dispute Notification Email → Notifies the customer about the dispute with all relevant details (amount, status, respond-by date).
-  📑 Find Payment in Ledger → Searches the Payments Sheet for a matching charge_id.
-  ✅ Check if Payment Exists → Confirms whether the disputed payment already exists in the ledger.
-  ✏️ Update Payment Record with Dispute Info → If found, updates the existing payment row with dispute details (status, dispute amount, respond_by date, etc.).

## Prerequisites
- Stripe account + API key
- Google Sheets with:
- Disputes Sheet (for logging disputes)
- Payments Sheet (for updating transactions)
- Gmail account with OAuth2 credentials

## Key Benefits
 ✅ Keeps a historical log of all disputes in one sheet
 ✅ Updates existing payment records with dispute status
 ✅ Sends automatic customer notifications to reduce confusion
 ✅ Helps finance and support teams track disputes in real time

## Perfect For
- Finance teams handling payment disputes
- Support teams needing automatic customer updates
- Businesses that want clear visibility into disputes alongside payment records

## 📊 Basic Information

- **Workflow ID:** 8954
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 31
- **Downloads:** 3
- **Created:** 2025/9/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8954)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×7)
- **httpRequest** 
- **code** 
- **googleSheets** (×3)
- **if** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
