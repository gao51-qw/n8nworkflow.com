# Sync open Zendesk tickets to Google Sheets with Zendesk and Google Sheets

> ## Description:
Stay on top of your support pipeline with this Ticket Status Digest automation for Zendesk. Built in n8n, this workflow automatically fetches tickets from Zendesk, filters only open ones, enriches them with requester details, and saves them into Google Sheets. 📊

Instead of manually checking Zendesk, you get a real-time digest of pending tickets with full customer details—perfect for support leads who need a quick snapshot of unresolved cases.
Whether you’re tracking team workload, prioritizing open issues, or preparing daily status reports, this automation ensures your support data is always structured, centralized, and up to date. 🚀

## What This Template Does (Step-by-Step)
🔔 Trigger – Manual Start (or Schedule)
- Begin workflow with a manual trigger (ideal for testing).
- Can be switched to scheduled runs (daily, hourly) for automated digests.
🎫 Fetch All Tickets (Zendesk)
- Pulls all tickets from Zendesk API.
- Captures ticket ID, subject, description, status, priority, tags, and timestamps.
🔍 Filter Open Tickets Only
- Includes only tickets where status = open.
- Skips closed, solved, or pending tickets.
👤 User Information Enrichment
- Looks up requester details (name, email, organization).
- Converts raw IDs into human-readable contact info.
📊 Save to Google Sheets
- Appends/updates ticket rows in “Ticket status dummy → Sheet1”.
- Columns: Ticket No. | Description | Status | Owner | Email | Tag.

## Required Integrations:
- Zendesk API (OAuth or API Key)
- Google Sheets (OAuth2 credentials)

## Best For:
🧑‍💼 Support leads monitoring unresolved tickets
📈 Managers building daily ticket status dashboards
🤝 Teams that need centralized visibility of customer issues
⏱️ Anyone tired of manual Zendesk data exports


## Key Benefits:
 ✅ Automated ticket sync to Google Sheets
 ✅ Real-time visibility of open issues
 ✅ Centralized view with enriched requester details
 ✅ Reduces manual tracking and reporting
 ✅ Scalable for daily, weekly, or custom digest runs


## 📊 Basic Information

- **Workflow ID:** 8745
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 79
- **Downloads:** 7
- **Created:** 2025/9/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8745)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Content Creation
- Ticket Management

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×12)
- **set** (×2)
- **if** (×2)
- **googleSheets** (×2)
- **code** 
- **slack** 
- **zendesk** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
