# Automate receipt processing for expense tracking with Google Drive, VLM Run & Airtable

> **Transform your expense tracking with automated AI receipt processing that extracts data and organizes it instantly.**


## What this workflow does

1. **Monitors Google Drive** for new receipt uploads (images/PDFs)
2. **Downloads and processes** files automatically 
3. **Extracts key data** using verified [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) (merchant, amount, currency, date)
4. **Saves structured data** to Airtable for easy tracking

## Setup

**Prerequisites:** Google Drive account, Airtable account, VLM Run API credentials, n8n instance.

Install the verified [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) by searching for **VLM Run** in the node list, then click **Install**. Once installed, you can start using it in your workflows.

**Quick Setup:**
1. Configure Google Drive OAuth2, Airtable OAuth2 
2. Create receipt upload folder
3. Add VLM Run [API credentials](https://app.vlm.run/dashboard) 
4. Create Airtable table with columns: Customer, Merchant, Amount, Currency, Date
5. Update folder/table IDs in workflow nodes
6. Test and activate

## How to customize this workflow to your needs

**Extend functionality by:**
- Adding expense categories and approval workflows
- Connecting to accounting software (QuickBooks, Xero)
- Including Slack notifications for processed receipts
- Adding data validation and duplicate detection

This workflow transforms manual receipt processing into an automated system that saves hours while improving accuracy.
&gt; ⚠️ **Disclaimer:** This workflow requires a **self-hosted n8n setup** because it uses **custom nodes (VLM Run)** that are not available on the managed n8n.cloud service.


## 📊 Basic Information

- **Workflow ID:** 8393
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 176
- **Downloads:** 17
- **Created:** 2025/9/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8393)

## 👤 Author

- **Name:** Shahrear
- **Username:** @shahrear

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **googleDriveTrigger** 
- **googleDrive** 
- **@vlm-run/n8n-nodes-vlmrun.vlmRun** 
- **set** 
- **airtable** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
