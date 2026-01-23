# Automate Stripe payment to QuickBooks sales receipt sync

> Automated Stripe Payment to QuickBooks Sales Receipt

This n8n workflow seamlessly connects Stripe and QuickBooks Online to keep your accounting in perfect sync. Whenever a payment in Stripe succeeds, the workflow automatically checks if the corresponding customer exists in QuickBooks. If found, it instantly creates a Sales Receipt under that customer. If not, it creates the customer first — then logs the sale.

Key Features:

⚡ Real-Time Sync: Automatically triggers when a Stripe payment intent succeeds.

👤 Smart Customer Matching: Searches for existing customers in QuickBooks to prevent duplicates.

🧾 Automated Sales Receipts: Creates accurate sales records for every successful Stripe payment.

🔄 End-to-End Automation: Handles customer creation, receipt generation, and data consistency without manual entry.

Requirements:
A running n8n instance, active Stripe and QuickBooks Online accounts with API access.

## 📊 Basic Information

- **Workflow ID:** 10558
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 14
- **Downloads:** 1
- **Created:** 2025/11/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10558)

## 👤 Author

- **Name:** Chintan Prajapati
- **Username:** @satva-technolabs

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **httpRequest** (×3)
- **stripe** 
- **stripeTrigger** 
- **if** 
- **quickbooks** 
- **set** (×3)
- **code** (×3)
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
