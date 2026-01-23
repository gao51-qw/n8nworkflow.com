# Sync Zendesk how-to tickets to Google Sheets knowledge base

> ## Description:
Keep your customer knowledge base up to date with this n8n automation template. The workflow connects Zendesk with Google Sheets, automatically fetching tickets tagged as “howto,” enriching them with requester details, and saving them into a structured spreadsheet.

 This ensures your internal or public knowledge base reflects the latest customer how-to queries—without manual copy-pasting. Perfect for customer support teams, SaaS companies, and service providers who want to streamline documentation workflows.

## What This Template Does (Step-by-Step)
 ⚡ Manual Trigger or Scheduling
-  Run the workflow manually for testing/troubleshooting, or configure a schedule trigger for daily/weekly updates.
📥 Fetch All Zendesk Tickets
-  Connects to your Zendesk account and retrieves all available tickets.
🔍 Filter for "howto" Tickets Only
-  Processes only tickets that contain the “howto” tag, ensuring relevance.
👤 Enrich User Data
-  Fetches requester details (name, email, profile info) to provide context.
📊 Update Google Sheets Knowledge Base
-  Saves ticket data—including Ticket No., Description, Status, Tag, Owner Name, and Email.
 ✔️ Smart update prevents duplicates by matching on description.
🔁 Continuous Sync
-  Each new or updated “howto” ticket is synced automatically into your knowledge base sheet.

## Key Features
 🔍 Tag-based filtering for precise categorization
 📊 Smart append-or-update logic in Google Sheets
 ⚡ Zendesk + Google Sheets integration with OAuth2
 ♻️ Keeps knowledge base fresh without manual effort
 🔐 Secure API credential handling

## Use Cases
 📖 Maintain a live “how-to” guide from real customer queries
 🎓 Build self-service documentation for support teams
 📩 Monitor and track recurring help topics
 💼 Equip knowledge managers with a ready-to-export dataset

## Required Integrations
- Zendesk API (for ticket fetch + user info)
- Google Sheets (for storing/updating records)

## Why Use This Template?
 ✅ Automates repetitive data entry
 ✅ Ensures knowledge base accuracy & freshness
 ✅ Reduces support team workload
 ✅ Easy to extend with more tags, filters, or sheet logic


## 📊 Basic Information

- **Workflow ID:** 8816
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 112
- **Downloads:** 11
- **Created:** 2025/9/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8816)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **errorTrigger** 
- **stickyNote** (×13)
- **if** 
- **zendesk** (×2)
- **googleSheets** (×3)
- **code** (×2)
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
