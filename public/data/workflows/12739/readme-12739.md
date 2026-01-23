# Create consulting client onboarding tasks with GPT-4o-mini, Google Sheets and Slack

> ## Who this workflow is for
Consulting firms in strategy, management, or IT who want to automate client onboarding and internal task assignment.

## What this workflow does
Automatically creates onboarding tasks and checklists using AI, routes them to the right consultant, logs client info in Google Sheets, and sends client welcome emails. Internal teams get Slack notifications, and kickoff meetings can be scheduled automatically.

## How the workflow works
1. New client intake triggers workflow
2. AI generates onboarding checklist
3. Tasks routed based on project type
4. Client info logged in Google Sheets
5. Slack notifications sent to consultants
6. Optional PDF of onboarding sent to client
7. Email confirmation delivered to client
8. Optional CRM integration

## Setup Instructions
- Connect Webhook/Form for intake
- Connect Google Sheets
- Connect OpenAI
- Connect Slack and email
- Configure optional CRM integration

**Author:** Hyrum Hurst, AI Automation Engineer  
**Company:** QuarterSmart  
**Contact:** hyrum@quartersmart.com


## 📊 Basic Information

- **Workflow ID:** 12739
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12739)

## 👤 Author

- **Name:** Hyrum Hurst
- **Username:** @hyrum-hurst

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **switch** 
- **googleSheets** (×3)
- **slack** (×3)
- **emailSend** 
- **googleCalendar** 
- **httpRequest** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
