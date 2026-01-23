# Gmail to Zendesk ticket automation with Google Sheets logging

> ## Description

Turn incoming Gmail messages into Zendesk tickets and keep a synchronized log in Google Sheets. Uses Gmail as the trigger, creates Zendesk tickets, and appends or updates a central sheet for tracking. Gain a clean, auditable pipeline from inbox to support queue. ✨

## What This Template Does
- Fetches new emails via Gmail Trigger. ✉️
- Normalizes Gmail payload for consistent fields. 🧹
- Creates a Zendesk ticket from the email content. 🎫
- Formats data for Sheets and appends or updates a row. 📊
- Executes helper sub-workflows and writes logs for traceability. 🔁🧾

## Key Benefits
- Converts emails to actionable support tickets automatically. ⚡
- Maintains a single source of truth in Google Sheets. 📒
- Reduces manual triage and data entry. 🕒
- Improves accountability with structured logs. ✅

## Features
- Gmail Trigger for real-time intake. ⏱️
- Normalize Gmail Data for consistent fields. 🧩
- Create Zendesk Ticket (create: ticket). 🎟️
- Format Sheet Data for clean columns. 🧱
- Log to Google Sheets with appendOrUpdate. 🔄
- Execute workflow (sub-workflow) steps for modularity. 🧩

## Requirements
- n8n instance (cloud or self-hosted). 🛠️
- Gmail credentials configured in n8n (with read access to the monitored inbox). ✉️
- Zendesk credentials (API token or OAuth) with permission to create tickets. 🔐
- Google Sheets credentials with access to the target spreadsheet for append/update. 📊
- Access to any sub-workflows referenced by the Execute workflow nodes. 🔁

## Target Audience
- IT support and helpdesk teams managing email-based requests. 🖥️
- Ops teams needing auditable intake logs. 🧾
- Agencies and service providers converting client emails to tickets. 🤝
- Small teams standardizing email-to-ticket flows. 🧑‍💼

## Step-by-Step Setup Instructions 
- Connect Gmail, Zendesk, and Google Sheets in n8n Credentials. 🔑
- Set the Gmail Trigger to watch the desired label/inbox. 📨
- Map Zendesk fields (description) from normalized Gmail data. 🧭
- Point the Google Sheets node to your spreadsheet and confirm appendOrUpdate mode. 📄
- Assign credentials to all nodes, including any Execute workflow steps. 🔁
- Run once to test end-to-end; then activate the workflow. ✅

## 📊 Basic Information

- **Workflow ID:** 8956
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 90
- **Downloads:** 9
- **Created:** 2025/9/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8956)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **gmailTrigger** 
- **zendesk** 
- **code** (×2)
- **googleSheets** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
