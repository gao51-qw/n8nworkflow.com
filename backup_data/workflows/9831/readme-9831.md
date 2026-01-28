# Monitor and report OKR variance from Monday.com and Jira via Slack and Email

> ## Description
Synchronize OKRs (Objectives and Key Results) between Monday.com and Jira to automatically calculate progress variance, update dashboards, and share variance reports via Slack and Outlook. This workflow ensures teams have accurate, real-time visibility into performance metrics and project alignment — without manual reconciliation. 🎯📈💬

## What This Template Does
- Step 1: Triggers daily at a scheduled time to fetch the latest OKRs from Monday.com. ⏰
- Step 2: Extracts Key Results and their linked Jira epic keys from the OKR board. 🔗
- Step 3: Fetches corresponding Jira epic details such as status, assignee, and last updated date. 🧩
- Step 4: Merges Monday.com KR data with Jira epic progress through SQL-style joins. 📋
- Step 5: Calculates real-time progress and variance against target goals. 📊
- Step 6: Updates Monday.com KR items with actual progress, variance percentage, and status (“On Track”, “At Risk”, or “Ahead”). 🔄
- Step 7: Aggregates all KR data into a consolidated report for communication. 📦
- Step 8: Sends formatted variance reports to Slack and Outlook, with summaries of owner, progress, and variance metrics. 📢

## Key Benefits
✅ Automates end-to-end OKR and Jira synchronization
 ✅ Eliminates manual progress tracking errors
 ✅ Provides daily visibility on team and project health
 ✅ Enables proactive risk detection via variance thresholds
 ✅ Keeps all stakeholders updated via Slack and Outlook
 ✅ Centralizes OKR performance metrics for reporting

## Features
- Daily scheduled trigger for automatic OKR sync
- Monday.com → Jira data integration via API
- Real-time variance computation logic
- Automatic updates of OKR fields in Monday.com
- SQL-style data merging and aggregation
- Slack notification with variance summaries
- Outlook email digest with formatted HTML tables

## Requirements
- Monday.com API credentials with board access
- Jira API credentials with permission to view epics
- Slack Bot token with chat:write permissions
- Microsoft Outlook OAuth2 credentials for sending emails
- Environment variables for board, channel, and recipient configuration

## Target Audience
- Product and engineering teams managing OKRs across platforms 🎯
- Project managers tracking cross-tool performance metrics 📋
- Leadership teams needing automated OKR reporting 💼
- Operations and strategy teams monitoring execution health 🧭

## Step-by-Step Setup Instructions
- Connect your Monday.com, Jira, Slack, and Outlook credentials in n8n. 🔑
- Replace MONDAY_BOARD_ID, GROUP_ID, and column identifiers with your own. 🧩
- Set environment variables for SLACK_CHANNEL_ID and REPORT_RECIPIENT_EMAIL. 💬
- Adjust the cron expression to define your sync frequency (e.g., daily at 9 AM). ⏰
- Test the workflow with a single OKR item to confirm successful synchronization. 🧠
- Enable the workflow to automate daily OKR variance tracking and reporting. ✅

## 📊 Basic Information

- **Workflow ID:** 9831
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 194
- **Downloads:** 19
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9831)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **stickyNote** (×13)
- **scheduleTrigger** 
- **mondayCom** (×2)
- **set** 
- **code** (×3)
- **jira** 
- **merge** 
- **aggregate** 
- **slack** 
- **microsoftOutlook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
