# Extract and organize receipt data for expense tracking with VLM Run and Google

> **Transform your expense tracking with automated AI receipt processing that extracts data and organizes it instantly.**


## What this workflow does

1. **Monitors Google Drive** for new receipt uploads (images/PDFs)
2. **Downloads and processes** files automatically 
3. **Extracts key data** using verified [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) (merchant, amount, currency, date)
4. **Saves structured data** to Google Sheets for easy tracking

## Setup

**Prerequisites:** Google Drive/Sheets accounts, VLM Run API credentials, n8n instance.

Install the verified [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) by searching for **VLM Run** in the node list, then click **Install**. Once installed, you can start using it in your workflows.

**Quick Setup:**
1. Configure Google Drive OAuth2 and create receipt upload folder
2. Add VLM Run [API credentials](https://app.vlm.run/dashboard) 
3. Create Google Sheets with columns: Customer, Merchant, Amount, Currency, Date
4. Update folder/sheet IDs in workflow nodes
5. Test and activate

## How to customize this workflow to your needs

**Extend functionality by:**
- Adding expense categories and approval workflows
- Connecting to accounting software (QuickBooks, Xero)
- Including Slack notifications for processed receipts
- Adding data validation and duplicate detection

This workflow transforms manual receipt processing into an automated system that saves hours while improving accuracy.

## 📊 Basic Information

- **Workflow ID:** 5051
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1280
- **Downloads:** 128
- **Created:** 2025/6/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5051)

## 👤 Author

- **Name:** Shahrear
- **Username:** @shahrear

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **googleDriveTrigger** 
- **googleDrive** 
- **@vlm-run/n8n-nodes-vlmrun.vlmRun** 
- **set** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
