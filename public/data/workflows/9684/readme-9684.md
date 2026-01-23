# Automate cross-project dependency tracking between Jira and Monday

> ## Description
Keep your product and project teams perfectly aligned by automatically syncing task dependencies between Jira and Monday.com. This workflow ensures real-time visibility into cross-platform blockers and dependencies, allowing smoother delivery across multiple teams and tools. 🔄📅💼

## What This Template Does
- Step 1: Trigger the workflow on a schedule or manual run.
- Step 2: Fetch project tasks and dependencies from Jira.
- Step 3: Retrieve matching items from Monday.com based on linked project IDs or issue keys.
- Step 4: Compare dependencies between both systems.
- Step 5: Identify mismatched or missing dependencies across platforms.
- Step 6: Send summarized reports to Slack or Gmail for team visibility.
- Step 7: Optionally update Monday.com or Jira items with dependency status tags.

## Key Benefits
✅ Maintain alignment across multiple projects and teams.
 ✅ Detect and resolve dependency conflicts before they cause delays.
 ✅ Automate visibility — no more manual cross-checking.
 ✅ Simplify multi-tool management for product and engineering leads.

## Features
- Integration between Jira Cloud and Monday.com API
- Cross-dependency comparison logic
- Scheduled or manual execution
- Slack/Gmail notifications for updates or conflicts
- Custom mapping for project and issue identifiers

## Requirements
- Jira Cloud account with API credentials
- Monday.com API key or OAuth2 token
- Optional: Slack or Gmail credentials for notifications
- n8n instance (cloud or self-hosted)

## Target Audience
- Product and Project Managers coordinating across tools 🧩
- Engineering Leads overseeing multi-platform sprints ⚙️
- PMOs managing dependencies across cross-functional teams 📊
- Operations teams aiming for unified delivery visibility 📈

## Step-by-Step Setup Instructions
- Connect your Jira and Monday.com credentials in n8n.
- Map project identifiers or keys between Jira and Monday.com.
- (Optional) Configure Slack or Gmail for daily status alerts.
- Adjust the cron expression to match your monitoring schedule.
- Run the workflow once manually to validate mappings.
- Activate the workflow for ongoing dependency tracking. ✅

## 📊 Basic Information

- **Workflow ID:** 9684
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 69
- **Downloads:** 6
- **Created:** 2025/10/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9684)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **stickyNote** (×11)
- **cron** 
- **if** 
- **function** (×2)
- **mondayCom** 
- **gmail** 
- **jira** (×2)
- **slack** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
