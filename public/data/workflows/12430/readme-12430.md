# Send package and visitor alerts with Slack, SMS, email, Google Sheets and Claude

> ## Who this is for

Property management teams handling multiple properties with high package/visitor traffic who want automated tenant and management notifications.

## What this workflow does

Automatically classifies package and visitor events, sends notifications to tenants, alerts property managers, and logs activity for accountability.

## How it works

1. Package/visitor system triggers workflow.
2. AI classifies urgency and type.
3. Notifications sent via Email, SMS, and Slack.
4. Google Sheets logs all events.
5. Optional AI follow-up suggestions for unclaimed packages or missed visitors.

## How to set up

Connect Webhook, Slack, Email, SMS, and AI. Test routing and logging. Adjust AI prompts for local building protocols.

## Requirements

- AI Node
- Webhook from package/visitor system
- Slack, Email, SMS credentials
- Google Sheets

Built by QuarterSmart. Created by Hyrum Hurst.


## 📊 Basic Information

- **Workflow ID:** 12430
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 22
- **Downloads:** 2
- **Created:** 2026/1/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12430)

## 👤 Author

- **Name:** Hyrum Hurst
- **Username:** @hyrum-hurst

## 🏷️ Categories

- Miscellaneous
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** (×2)
- **switch** 
- **emailSend** (×2)
- **sms77** 
- **slack** 
- **googleSheets** 
- **merge** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
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
