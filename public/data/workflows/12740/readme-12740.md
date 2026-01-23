# Analyze legal contracts with GPT-4.1 and manage cases in Google Sheets and Slack

> ## Who this workflow is for
Law firms in corporate, litigation, or family law needing streamlined case and contract management.

## What this workflow does
Automatically analyzes contracts using AI, extracts key clauses, logs cases in Google Sheets, routes cases to attorneys, sends client summaries, generates PDFs, and schedules follow-ups.

## How the workflow works
1. Webhook triggers on new case or contract
2. AI analyzes contract
3. Case routed by type
4. Logs case info in Google Sheets
5. Notifies attorney via Slack
6. Sends client email summary
7. Generates PDF report
8. Schedules follow-up events
9. Optional integration with practice management software

**Author:** Hyrum Hurst, AI Automation Engineer  
**Company:** QuarterSmart  
**Contact:** hyrum@quartersmart.com


## 📊 Basic Information

- **Workflow ID:** 12740
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12740)

## 👤 Author

- **Name:** Hyrum Hurst
- **Username:** @hyrum-hurst

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **set** (×2)
- **extractFromFile** 
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
