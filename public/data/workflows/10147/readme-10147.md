# Automate client renewal alerts from GoHighLevel to Gmail, Slack & Google Sheets

> ## Description
Streamline client retention and contract renewals by automatically identifying expiring accounts, sending personalized reminder emails, and notifying account managers through Slack. This workflow ensures timely outreach, improved renewal rates, and centralized tracking — without manual effort. 🔁📧📅

## What This Template Does
- Triggers daily at 9 AM to check for contracts expiring within 10 days. ⏰
- Fetches all client records from GoHighLevel CRM. 🗂️
- Validates client data to ensure required custom fields (Contract End Date & Account Manager) are available. 🧩
- Filters expiring contracts and formats key client details (name, email, expiry date). 🔍
- Sends renewal reminder emails to clients using Gmail. 💌
- Notifies account managers in Slack with full client and renewal details. 💬
- Generates a summary report of total reminders sent and execution status. 📋
- Logs all reminders and timestamps into Google Sheets for performance tracking. 📊

## Key Benefits
✅ Never miss renewal deadlines again
 ✅ Improve client retention and satisfaction
 ✅ Reduce manual tracking and follow-up work
 ✅ Keep account managers informed in real-time
 ✅ Maintain a clear audit trail of renewal activities

## Features
- Automated daily scheduling (9 AM trigger)
- GoHighLevel integration for client data
- Dynamic filtering for contracts expiring within 10 days
- Gmail email automation for personalized messages
- Slack notifications for internal visibility
- Google Sheets logging for analytics and reporting

## Requirements
- GoHighLevel account with access to Contacts API
- Custom fields: Contract End Date and Account Manager
- Gmail account with OAuth2 credentials
- Slack Bot token with chat:write permission
- Google Sheets OAuth2 credentials

## Target Audience
- Account management and client success teams
- Agencies handling multiple client contracts
- Businesses with recurring subscriptions or service renewals
- Teams wanting automated retention workflows

## Step-by-Step Setup Instructions
- Connect your GoHighLevel account and ensure contract-related custom fields are configured.
- Set your Slack channel ID where renewal notifications will be sent.
- Connect Gmail for automated client communication.
- Link Google Sheets for centralized renewal logging.
- Adjust reminder window in the code node (daysUntilExpiry &lt;= 10) as per your needs.
- Test the workflow once manually, then enable scheduling for automation.


## 📊 Basic Information

- **Workflow ID:** 10147
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 154
- **Downloads:** 15
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10147)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stickyNote** (×9)
- **scheduleTrigger** 
- **highLevel** 
- **if** 
- **code** (×2)
- **filter** 
- **gmail** 
- **slack** 
- **merge** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
