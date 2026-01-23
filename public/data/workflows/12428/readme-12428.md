# Triage tenant complaints with GPT-4.1, Slack, email and Google Sheets

> ## Who this is for

Property management teams handling multiple properties with high tenant complaint volumes who want AI-assisted triage.

## What this workflow does

Automatically classifies tenant complaints by urgency and type, escalates high-priority complaints, schedules medium-priority follow-ups, acknowledges low-priority complaints, and logs all activity for reporting.

## How it works

1. Tenant submits a complaint through the portal.
2. AI classifies complaint urgency and type.
3. High-priority complaints trigger Slack notifications and follow-up tasks.
4. Tenant receives an AI-personalized acknowledgment email.
5. Google Sheets logs each complaint with details.

## How to set up

Connect your form, Slack, Email, Google Sheets, and AI credentials. Customize AI prompts for your tenant complaint categories and test routing.

## Requirements

- n8n (cloud or self-hosted)
- AI node access
- Slack and Email credentials
- Google Sheets

## How to customize

Adjust complaint types, escalation rules, notification channels, or AI follow-up prompts.

Built by QuarterSmart. Created by Hyrum Hurst.


## 📊 Basic Information

- **Workflow ID:** 12428
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 16
- **Downloads:** 1
- **Created:** 2026/1/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12428)

## 👤 Author

- **Name:** Hyrum Hurst
- **Username:** @hyrum-hurst

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **switch** 
- **slack** 
- **emailSend** 
- **merge** 
- **googleSheets** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
