# Extract and track receipt data with VLM Run and Google Drive + Airtable

> **Simplify expense tracking with AI-powered automation that extracts receipt data and organizes it instantly.**

## What this workflow does

1. **Watches Google Drive** for new receipt uploads (images/PDFs)
2. **Automatically downloads and prepares** files for processing
3. **Parses key details** using the trusted [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) (merchant, customer, amount, currency, date)
4. **Stores structured records** in Airtable for real-time tracking

## Setup

**Prerequisites:** Google Drive & Airtable accounts, VLM Run API credentials, n8n instance.

Install the verified [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) by searching for **VLM Run** in the node list, then click **Install**. Once installed, you can start using it in your workflows.

**Quick Setup:**

1. Configure Google Drive OAuth2 and create a receipt upload folder
2. Add VLM Run [API credentials](https://app.vlm.run/dashboard)
3. Create an Airtable base with fields: Customer, Merchant, Amount, Currency, Date
4. Update folder/base IDs in workflow nodes
5. Test and activate

## How to customize this workflow to your needs

**Extend functionality by:**

* Adding categories, budgets, or approval steps
* Syncing with accounting tools (QuickBooks, Xero)
* Sending Slack or email alerts for processed receipts
* Enabling error handling and duplicate checks

This workflow eliminates manual data entry and creates a seamless, automated system that saves time and improves accuracy.


## 📊 Basic Information

- **Workflow ID:** 8477
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 117
- **Downloads:** 11
- **Created:** 2025/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8477)

## 👤 Author

- **Name:** Atik
- **Username:** @atik

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **googleDriveTrigger** 
- **googleDrive** 
- **@vlm-run/n8n-nodes-vlmrun.vlmRun** 
- **set** 
- **airtable** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
