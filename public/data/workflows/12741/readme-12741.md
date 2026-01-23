# Send Stripe invoice reminders with GPT-4.1-mini, Google Sheets and Slack

> ## Who this workflow is for
Accounting and bookkeeping firms needing automated invoice creation and payment reminders.

## What this workflow does
AI generates personalized emails for overdue invoices, logs invoice info in Google Sheets, notifies accountants via Slack, creates PDF invoices, and schedules follow-ups.

## How the workflow works
1. Invoice creation triggers workflow
2. AI drafts personalized email
3. Routes based on payment status
4. Logs invoice info in Google Sheets
5. Sends Slack notifications to accountant
6. Sends email to client
7. Generates PDF invoice
8. Schedules follow-up events
9. Optional CRM/accounting tool integration

**Author:** Hyrum Hurst, AI Automation Engineer  
**Company:** QuarterSmart  
**Contact:** hyrum@quartersmart.com


## 📊 Basic Information

- **Workflow ID:** 12741
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12741)

## 👤 Author

- **Name:** Hyrum Hurst
- **Username:** @hyrum-hurst

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **stripeTrigger** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **switch** 
- **googleSheets** 
- **slack** 
- **emailSend** 
- **convertToFile** 
- **googleCalendar** 
- **httpRequest** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
