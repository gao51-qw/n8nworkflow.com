# Auto bug report aggregator: Sync Zendesk bug tickets into Google Sheets

> ## Description:
Stay on top of product issues with this n8n automation template that centralizes bug reports from Zendesk into a Google Sheets dashboard. The workflow filters only tickets tagged as “bug,” enriches them with reporter details, and updates a single source of truth for developers, QA teams, and support staff.
 Perfect for product managers, SaaS companies, and agile teams that need full visibility into bug trends and customer impact without wasting time on manual data entry.

## What This Template Does (Step-by-Step)
 ⚡ Manual Trigger or Scheduling
-  Run on-demand after releases or bug triage meetings, or set up a schedule to auto-run daily/weekly.
📥 Fetch All Zendesk Tickets
-  Retrieves tickets from your Zendesk account with full metadata.
🔍 Filter Bug Reports Only
-  Processes only tickets tagged as “bug” to ensure relevance.
👤 Add Reporter Details
-  Enriches bug reports with requester’s name, email, and profile data for impact tracking.
📊 Update Google Sheets Bug Tracker
-  Stores bug details including Ticket No., Description, Status, Reporter Info, and Tags.
 ✔️ Smart update avoids duplicates by using description as a unique key.
🔁 Continuous Bug Aggregation
-  Ensures all relevant bug reports are tracked and kept up-to-date in one central place.

## Key Features
 🔍 Tag-based bug filtering
 📊 Centralized bug dashboard in Google Sheets
 ⚡ Zendesk + Google Sheets integration with OAuth2
 ♻️ Real-time sync with deduplication logic
 🔐 Secure API credential handling

## Use Cases
 🐞 Track and prioritize product bugs from customer reports
 📊 Give QA and dev teams a shared bug dashboard
 📩 Identify high-impact bugs based on affected customers
 📈 Monitor bug frequency and trends for release planning

## Required Integrations
- Zendesk API (for ticket fetch + user info)
- Google Sheets (for storing/updating bug tracker)

## Why Use This Template?
 ✅ Centralizes bug visibility for all teams
 ✅ Saves hours of manual spreadsheet updates
 ✅ Improves prioritization with customer context
 ✅ Scales easily with more tags or categories
 ✅ Keeps bug tracking transparent across stakeholders


## 📊 Basic Information

- **Workflow ID:** 8815
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 60
- **Downloads:** 6
- **Created:** 2025/9/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8815)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×6)
- **if** 
- **zendesk** (×2)
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
