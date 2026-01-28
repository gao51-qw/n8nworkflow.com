# Manage personal expenses with webhooks and Google Sheets automated tracker

> - How it works:
This system functions by receiving expenses via webhook POST. It validates the data, stores it in Google Sheets, and, daily at 8 PM, generates and sends financial summaries. Automatic categorization simplifies the organization of expenses.

- Set up steps:
Setup involves creating the Google Sheet, configuring the webhook, and defining the categorization rules. The process is quick and intuitive, taking about 10-15 minutes for the system to be ready to receive your expenses.

## 📊 Basic Information

- **Workflow ID:** 5517
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1180
- **Downloads:** 118
- **Created:** 2025/7/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5517)

## 👤 Author

- **Name:** Solido AI
- **Username:** @solidoai

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **webhook** 
- **function** (×3)
- **googleSheets** (×2)
- **respondToWebhook** (×2)
- **cron** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
