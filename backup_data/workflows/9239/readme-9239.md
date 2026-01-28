# Deal stage tracking automation with HighLevel CRM, ClickUp, and Slack

> ## Description
This workflow automates the tracking of deal stage updates in HighLevel CRM and syncs them with ClickUp for task management. It filters opportunities based on the most recent update date, creates actionable tasks in ClickUp for recent deals, and sends Slack alerts when older deal updates are detected. This ensures that your sales and operations teams stay aligned, reducing manual tracking and improving visibility of pipeline activity.

## What This Template Does (Step-by-Step)
- 📋 Fetch All Deals from HighLevel CRM
-  Pulls a complete list of opportunities with contact details and deal stages.
- ⏱ Filter Recent Deal Updates
-  Checks if a deal was updated on/after a specific date (e.g., Sept 30, 2025).
- 🔀 Route Deals via If Node
- ✅ Recent Updates → Proceed to get contact details & create a task in ClickUp.
- ❌ Older Updates → Trigger a Slack notification for awareness.
- 👤 Get Contact Information
-  Retrieves full contact details (name, location ID, etc.) from HighLevel for better context in tasks.
- 🗂 Create ClickUp Task
-  Generates a new ClickUp task containing deal and contact information, ensuring your team has actionable follow-up tasks.
- 💬 Send Slack Notification
-  Notifies a specified Slack user when a deal update is older than the defined threshold, highlighting deals that may need attention.

## Prerequisites
- HighLevel CRM account & API credentials
- ClickUp account & API credentials
- Slack workspace & API credentials
- n8n instance (cloud or self-hosted)

## Step-by-Step Setup
- Connect HighLevel CRM → Fetch all opportunities.
- Apply Date Filter (If Node) → Split deals into recent vs. old updates.
- Recent Deals → Fetch contact details → Create task in ClickUp.
- Old Deals → Send Slack notification to assigned user.

## Customization Ideas
🎯 Adjust the date threshold for “recent updates.”
 📢 Add Slack/Teams alerts for new deals as well.
 📚 Sync ClickUp tasks into Notion or Airtable for reporting.
 💡 Enrich ClickUp tasks with deal value, stage, or assigned salesperson.

## Key Benefits
✅ Keeps deal updates transparent and organized
 ✅ Ensures no recent deal activity is missed
 ✅ Automates ClickUp task creation for sales follow-ups
 ✅ Sends real-time Slack alerts for old updates
 ✅ 100% automated, customizable workflow

## Perfect For
👥 Sales teams managing multiple deals daily
 🏢 Companies using HighLevel CRM & ClickUp
 🎯 Teams wanting instant visibility into pipeline changes
 📊 Managers tracking deal activity timelines

## 📊 Basic Information

- **Workflow ID:** 9239
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 185
- **Downloads:** 18
- **Created:** 2025/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9239)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×6)
- **highLevel** (×2)
- **if** 
- **clickUp** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
