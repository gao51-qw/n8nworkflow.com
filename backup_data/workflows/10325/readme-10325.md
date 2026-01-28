# Automate inactive deal cleanup from GoHighLevel to Slack and Sheets

> ## Description
Keep your CRM pipeline clean and actionable by automatically archiving inactive deals, logging results to Google Sheets, and sending Slack summary reports. This workflow ensures your sales team focuses on active opportunities while maintaining full audit visibility. 🚀📈

## What This Template Does
- Triggers daily at 9 AM to check all GoHighLevel CRM opportunities. ⏰
- Filters deals that have been inactive for 10+ days using last activity or update date. 🔍
- Automatically archives inactive deals to keep pipelines clutter-free. 📦
- Formats and logs deal details into Google Sheets for record-keeping. 📊
- Sends a Slack summary report with total archived count, value, and deal names. 💬

## Key Benefits
✅ Keeps pipelines organized by removing stale opportunities.
 ✅ Saves time through fully automated archiving and reporting.
 ✅ Maintains a transparent audit trail in Google Sheets.
 ✅ Improves sales visibility with automated Slack summaries.
 ✅ Easily adjustable inactivity threshold and scheduling.

## Features
- Daily scheduled trigger (9 AM) with adjustable cron expression.
- GoHighLevel CRM integration for fetching and updating opportunities.
- Conditional logic to detect inactivity periods.
- Google Sheets logging with automatic updates.
- Slack integration for real-time reporting and team visibility.

## Requirements
- GoHighLevel API credentials (OAuth2) with opportunity access.
- Google Sheets OAuth2 credentials with edit permissions.
- Slack Bot token with chat:write permission.
- A connected n8n instance (cloud or self-hosted).

## Target Audience
- Sales and operations teams managing CRM hygiene.
- Business owners wanting automated inactive deal cleanup.
- Agencies monitoring client pipelines across teams.
- CRM administrators ensuring data accuracy and accountability.

## Step-by-Step Setup Instructions
- Connect your GoHighLevel OAuth2 credentials in n8n. 🔑
- Link your Google Sheets document and replace the Sheet ID. 📋
- Configure Slack credentials and specify your target channel. 💬
- Adjust inactivity threshold (default: 10 days) as needed. ⚙️
- Update the cron schedule (default: 9 AM daily). ⏰
- Test the workflow manually to verify end-to-end automation. ✅


## 📊 Basic Information

- **Workflow ID:** 10325
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 61
- **Downloads:** 6
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10325)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stickyNote** (×8)
- **scheduleTrigger** 
- **highLevel** (×2)
- **filter** 
- **code** 
- **googleSheets** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
