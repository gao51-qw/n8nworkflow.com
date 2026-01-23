# Track support performance metrics across Zendesk & Freshdesk with Sheets, Slack & Gmail

> ## Description
Automatically consolidate Zendesk and Freshdesk ticket data into a unified performance dashboard with KPI calculations, Google Sheets logging, real-time Slack alerts, and weekly Gmail email reports. Provides complete visibility into support operations, SLA compliance, and customer satisfaction across multiple platforms. 📊💬📧

## What This Template Does
- Runs weekly on schedule to fetch tickets from both Zendesk and Freshdesk. ⏰
- Merges ticket data into a standardized JSON structure with normalized priorities, statuses, and channels. 🔄
- Logs all tickets and metadata into Google Sheets for audit-ready performance tracking. 📑
- Calculates advanced KPIs including resolution rates, SLA breaches, CSAT score estimation, urgent ticket rates, and performance grading. 📊
- Evaluates alert conditions (e.g., high SLA breach, low CSAT, backlog risk). 🚨
- Sends formatted Slack alerts with performance grades, key metrics, and recommendations. 💬
- Generates corporate-style HTML weekly reports and delivers them via Gmail. 📧

## Key Benefits
- Unifies Zendesk and Freshdesk data into one consistent reporting flow. 🌐
- Provides actionable KPIs for SLA monitoring, customer satisfaction, and backlog health. ⏱️
- Ensures leadership visibility with Google Sheets logs and professional email reports. 🧾
- Alerts the support team instantly on Slack when performance drops. 🚨
- Reduces manual data analysis with automated grading and recommendations. 🤖

## Features
- Multi-Platform Ticket Integration – Fetches tickets from Zendesk and Freshdesk. 🎫
- Data Normalization – Cleans descriptions, maps priorities/statuses, and detects escalations. 🧼
- Google Sheets Logging – Tracks tickets with IDs, URLs, tags, timestamps, and metadata. 📈
- KPI Calculation Engine – Computes SLA breach rate, resolution rate, CSAT, escalation %, and more. 🧮
- Performance Grading – Grades support performance (A–D) with detailed descriptions. 🏅
- Slack Alerts – Notifies with active alerts, recommendations, and emoji-based health signals. 📢
- Weekly Gmail Reports – Delivers branded HTML reports for management and audits. ✨

## Requirements
- n8n instance (cloud or self-hosted).
- Zendesk API credentials with ticket read access.
- Freshdesk API credentials with ticket read access.
- Google Sheets OAuth2 credentials with spreadsheet write permissions.
- Slack Bot API credentials with posting permissions.
- Gmail OAuth2 credentials with send email permissions.
- Pre-configured Google Sheet for KPI logging.

## Target Audience
- Support managers overseeing multi-platform ticketing systems. 👩‍💻
- Customer success teams monitoring SLA compliance and CSAT health. 🚀
- SMBs running Zendesk + Freshdesk who need unified dashboards. 🏢
- Remote/global support teams needing automated KPI visibility. 🌐
- Executives requiring weekly performance reports and recommendations. 📈

## Step-by-Step Setup Instructions
- Connect Zendesk, Freshdesk, Google Sheets, Slack, and Gmail credentials in n8n. 🔑
- Update the Google Sheet ID in the “Log KPIs in Google Sheets” node. 📊
- Configure Slack channel ID for alerts (default: zendesk-churn-alerts). 💬
- Replace {Enter Your Email} in the Gmail node with your recipient email. 📧
- Adjust thresholds in the KPI calculation node (default: 4h response, 24h resolution). ⏱️
- Test with sample tickets to validate Sheets logging, Slack alerts, and Gmail reports. ✅
- Deploy on schedule (default: weekly at 8 PM) for continuous tracking. 🗓️


## 📊 Basic Information

- **Workflow ID:** 8814
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 224
- **Downloads:** 22
- **Created:** 2025/9/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8814)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Support Chatbot

## 🔗 Nodes Used

- **slack** 
- **gmail** 
- **cron** 
- **zendesk** 
- **googleSheets** 
- **code** (×4)
- **if** 
- **stickyNote** (×12)
- **merge** 
- **freshdesk** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
