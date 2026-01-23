# Automate assignee payroll calculations with Dart, Gemini AI, and Google Sheets

> ## Task-based Assignee billing via Time Tracking
This workflow automates billing by scanning a target Dartboard on schedule, aggregating time logs from completed tasks, cross‑referencing assignee rates in Google Sheets, calculating total pay, and updating the sheet with final billable hours and amounts.

### Who's it for
Individuals, agencies, companies, and project managers automating payroll or client invoicing from task data.

### How to setup
- Link your [Dart](https://help.dartai.com/en/articles/12313191-n8n-integration) and Google accounts.
- Replace the dummy ID in the **List tasks** node with your actual target Dartboard ID.
- Set your preferred run frequency (e.g., Weekly).
- Create a Google Sheet with these exact headers: `Name`, `HourlyRate`, `TotalHours`, `TotalPay`, `DateCalculated`.
- Connect the Sheet nodes to your file. Pre-fill `Name` (matching Dart Assignees exactly) and `HourlyRate` in your Google Spreadsheet.
- Optional: Add a last header column in the sheet as a Status header to track if the bill is paid or pending.

### Customizing the workflow
- Choose your AI model for your AI time tracking and assignee scanner
- Use your own google sheet account and target spreadsheet document

## 📊 Basic Information

- **Workflow ID:** 11257
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 43
- **Downloads:** 4
- **Created:** 2025/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11257)

## 👤 Author

- **Name:** Dart
- **Username:** @dart-team

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **n8n-nodes-dart.dart** 
- **googleSheets** (×2)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **stickyNote** (×6)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
