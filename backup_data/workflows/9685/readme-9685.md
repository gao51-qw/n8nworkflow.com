# Automate change request approvals with Monday.com, Jira, Slack & Google Sheets

> ## Description
Streamline IT and operations change management by automating approval routing, Jira issue creation, audit logging, and real-time Slack alerts. This workflow ensures faster reviews, traceable approvals, and transparent communication across systems. 🚀

## What This Template Does
- Step 1: Triggers automatically every weekday at 3:00 AM to fetch new or updated change requests from Monday.com. ⏰
- Step 2: Extracts key fields (request name, component, risk level, approvers, and description) for structured processing. 🧩
- Step 3: Routes each request based on its current status — Pending, Approved, or Rejected. 🔀
- Step 4: Sends Slack alerts for pending approvals with detailed context for quick action. 💬
- Step 5: Creates Jira tickets for approved requests, ensuring smooth implementation tracking. 🎫
- Step 6: Logs all approved requests to Google Sheets for compliance and audit purposes. 📊
- Step 7: Sends confirmation emails to requesters with Jira ticket details via Gmail. 📧
- Step 8: Automatically creates resubmission items in Monday.com for rejected requests. 🔁

## Key Benefits
✅ Eliminates manual approval routing between tools
 ✅ Centralizes audit trails and implementation data
 ✅ Accelerates change management turnaround
 ✅ Provides real-time alerts to approvers and teams
 ✅ Ensures compliance with automated record-keeping

## Features
- Automated daily trigger (Mon–Fri, 3 AM)
- Monday.com integration for request intake
- Conditional branching by status (Pending, Approved, Rejected)
- Jira issue creation for approved requests
- Slack notifications for pending and approved updates
- Google Sheets logging for audit tracking
- Gmail email confirmations for requesters
- Automatic resubmission handling for rejected requests

## Requirements
- Monday.com API credentials with board access
- Jira API credentials with project permissions
- Google Sheets OAuth2 credentials
- Slack Bot token with chat:write permissions
- Gmail OAuth2 credentials for email automation
- Target Audience
- IT & DevOps teams managing structured change approvals
- Project management teams tracking implementation requests
- Organizations seeking automated risk-based change routing
- Managers needing centralized logs and instant 

## Slack alerts
- Step-by-Step Setup Instructions
- Connect your Monday.com account and replace YOUR_BOARD_ID and groupId.
- Configure Jira credentials and set the target project for new tickets.
- Link your Google Sheets document and replace YOUR_SHEET_ID and YOUR_SHEET_GID.
- Add Slack credentials and update YOUR_CHANNEL_ID for notifications.
- Set up Gmail OAuth2 for sending confirmation emails.
- Adjust the cron expression (0 3 * * 1-5) if needed to match your timezone.
- Run the workflow manually once to test end-to-end connectivity.
- Enable for scheduled automation and enjoy a fully managed approval process.


## 📊 Basic Information

- **Workflow ID:** 9685
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 69
- **Downloads:** 6
- **Created:** 2025/10/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9685)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **stickyNote** (×13)
- **if** (×3)
- **mondayCom** (×2)
- **set** 
- **slack** (×2)
- **jira** 
- **googleSheets** 
- **gmail** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
