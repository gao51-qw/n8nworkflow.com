# Coordinate move-out cleaning and repair tasks with Google Sheets, Slack, email and Claude

> ## Who this is for

Property management companies managing frequent tenant move-outs across multiple units.

## What this workflow does

Automatically schedules and coordinates move-out cleaning and repair tasks, sends vendor instructions, notifies internal teams, tracks completions, and logs everything for reporting.

## How it works

1. Cron triggers workflow before lease end.
2. AI generates personalized move-out instructions and checklists.
3. Vendors and property management teams are notified.
4. Completion updates logged in Google Sheets.
5. Optional AI suggests follow-up actions for delays.

## How to set up

Connect tenant data, configure Cron, Slack, Email, and Task Manager credentials. Customize AI prompts and verify notification flows.

## Requirements

- Google Sheets
- Email & Slack credentials
- AI Node access
- Task Manager (Trello/Asana/etc.)

Built by QuarterSmart. Created by Hyrum Hurst.


## 📊 Basic Information

- **Workflow ID:** 12429
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 18
- **Downloads:** 1
- **Created:** 2026/1/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12429)

## 👤 Author

- **Name:** Hyrum Hurst
- **Username:** @hyrum-hurst

## 🏷️ Categories

- Project Management
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** (×2)
- **gmail** 
- **slack** (×2)
- **webhook** 
- **if** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
