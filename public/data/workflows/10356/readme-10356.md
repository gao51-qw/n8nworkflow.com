# Shopify & WooCommerce inventory sync with Google Sheets alerts

> ## How It Works
A webhook or timer triggers the workflow to automatically fetch inventory data from multiple platforms. Stock levels are compared across stores to identify discrepancies, and any inconsistencies are updated on the respective platforms in real time. All changes and updates are recorded in Google Sheets for easy tracking, and email alerts are sent to notify relevant team members of any exceptions or issues that require attention. This ensures inventory accuracy and timely response to stock mismatches.

## Setup Steps
1. Add Shopify and/or WooCommerce API credentials to enable secure data access.
2. Connect Google Sheets for comprehensive logging of all inventory updates and Gmail for sending timely email alerts.
3. Configure the sync frequency within the Function nodes to control how often inventory data is fetched, compared, and updated.

## Prerequisites
- Shopify/WooCommerce API keys
- Google Sheets access
- Gmail credentials
- n8n instance
- 
## Customization
- Add ERPNext or custom APIs
- Enable Slack notifications
- AI discrepancy detection

## Benefits
- Real-time inventory accuracy
- Automated cross-platform updates
- Centralized audit logging


## 📊 Basic Information

- **Workflow ID:** 10356
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 88
- **Downloads:** 8
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10356)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **scheduleTrigger** 
- **webhook** 
- **set** 
- **httpRequest** (×4)
- **merge** (×2)
- **code** (×4)
- **if** (×3)
- **switch** 
- **googleSheets** 
- **gmail** 
- **respondToWebhook** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
