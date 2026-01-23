# Daily B2B lead monitoring: Website visitor digest with ProspectPro and Gmail

> This template sends you a daily email notification with all prospects that visited your website in the past 24 hours. It uses ProspectPro data to collect, filter, and format prospects into a clear summary, delivered straight to your inbox each morning. Qualified leads are highlighted first, ensuring you don’t miss important activity.

### ✨ Features

- Automatically collect new website visitors from ProspectPro every day
- Highlight qualified (label 1) prospects first in your notification
- Customizable prospect list: name, location, domain, tags, and visit data
- Smart filtering: excludes disqualified prospects and old activity
- Clean daily email with direct link to ProspectPro for more details
- Extendable with logging, CRM sync, or Slack alerts

### ⚙ Requirements

- n8n instance or cloud workspace
- Install the ProspectPro Verified Community Node
- ProspectPro account & API credentials (14-day free trial available)
- Gmail OAuth2 credentials (or replace with your preferred email provider)

### 🔧 Setup Instructions

1. Import the template into your n8n workspace
2. Configure your ProspectPro API credentials
3. Configure Gmail (or swap for your own email node)
4. Adjust notification content in the "Create a Prospect List" and "Send Notification" nodes

(Optional) Add extra error logging, Slack alerts, or CRM sync steps

### 🔐 Security Notes

- Workflow includes error branches for ProspectPro and Gmail nodes
- Prevents sending empty emails if no new prospects are found
- Code filters out disqualified prospects automatically

### 🧪 Testing

- Trigger the workflow manually or wait for the daily schedule
- Check your Gmail inbox for the notification email
- Verify the total count and details against ProspectPro dashboard

### 📌 About ProspectPro
ProspectPro is a B2B Prospecting Platform for Dutch SMEs. It helps sales teams identify prospects, track website visitors, and streamline sales without requiring a full CRM.

**Website:** https://www.prospectpro.nl
**Platform:** https://mijn.prospectpro.nl
**API docs:** https://docs.prospectpro.nl

### Support: 
https://www.prospectpro.nl/klantenservice

Support hours: Monday–Friday, 09:00–17:00 CET

## 📊 Basic Information

- **Workflow ID:** 8689
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 260
- **Downloads:** 26
- **Created:** 2025/9/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8689)

## 👤 Author

- **Name:** Olivier
- **Username:** @olivier-nl

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **code** (×3)
- **@bedrijfsdatanl/n8n-nodes-prospectpro.prospectpro** 
- **if** 
- **noOp** (×4)
- **gmail** 
- **stickyNote** (×11)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
