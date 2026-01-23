# Automate daily GLPI pending ticket notifications to Microsoft Teams

> GLPI Pending Tickets Notification to Microsoft Teams

📋 Overview
Automate daily notifications for pending GLPI tickets directly to Microsoft Teams. Never miss critical support cases with this workflow that monitors assigned tickets and sends personal alerts.

🔧 How It Works

Connect to GLPI - Authenticates and searches for your assigned tickets
Filter Results - Finds tickets in "In Progress" status within your entity
Send Notifications - Delivers formatted alerts to your Teams chat
Clean Up - Properly closes GLPI session for security

📊 What Gets Monitored

Tickets assigned to specific technician (configurable)
Status: "In Progress/Assigned"
Entity: Your organization (customizable)
Date range: Tickets after specified date

⚡ Key Benefits

Never Miss Deadlines - Daily automated reminders
Personal Focus - Only your assigned tickets
Time Savings - Eliminates manual checking (15-30 min daily)
Rich Details - Shows ticket title, ID, and due date

⚙️ Setup Steps
Time Required: ~30 minutes

Import Template - Add workflow to your n8n instance
Configure GLPI - Set server URL, credentials, and app token
Set Technician ID - Update to your GLPI user ID
Connect Teams - Link your Microsoft Teams account
Customize Filters - Adjust entity name and date range
Test & Schedule - Verify notifications and set daily trigger

🎨 Easy Customization

Change technician ID for different users
Adjust notification schedule (default: 8 AM daily)
Modify entity filters for your organization
Add multiple technicians by duplicating workflow

📋 Prerequisites

GLPI instance with API enabled
GLPI user account with ticket read permissions
Microsoft Teams account (basic license)
n8n with Microsoft Teams integration

Perfect for support technicians who want automated reminders about their pending GLPI tickets without manual daily checks.

## 📊 Basic Information

- **Workflow ID:** 7018
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 897
- **Downloads:** 89
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7018)

## 👤 Author

- **Name:** Luis Hernandez
- **Username:** @integropen

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **httpRequest** (×3)
- **scheduleTrigger** 
- **splitInBatches** 
- **noOp** (×2)
- **microsoftTeams** 
- **splitOut** 
- **aggregate** 
- **stickyNote** (×8)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
