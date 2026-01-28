# Capture and schedule HVAC leads with OpenAI, Google Sheets, Slack and SMS

> ## Who this workflow is for
Door-to-door HVAC companies seeking automated lead capture and appointment scheduling.

## What this workflow does
AI classifies incoming leads, routes them by service type, logs lead info in Google Sheets, notifies team via Slack, sends confirmations, schedules appointments, and optionally sends SMS reminders.

## How the workflow works
1. Lead submission triggers workflow
2. AI classifies lead
3. Route lead based on service type
4. Log in Google Sheets
5. Notify team via Slack
6. Send confirmation email
7. Schedule appointment in calendar
8. Send SMS reminder (optional)
9. Optional CRM/dispatch integration

**Author:** Hyrum Hurst, AI Automation Engineer  
**Company:** QuarterSmart  
**Contact:** hyrum@quartersmart.com


## 📊 Basic Information

- **Workflow ID:** 12742
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12742)

## 👤 Author

- **Name:** Hyrum Hurst
- **Username:** @hyrum-hurst

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **set** (×2)
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **switch** 
- **slack** (×3)
- **emailSend** 
- **googleCalendar** 
- **twilio** 
- **httpRequest** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
