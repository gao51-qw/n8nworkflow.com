# Monitor core web vitals with Lighthouse, Gemini AI, Telegram alerts & Google Sheets

> # Automate Lighthouse report alerts to messenger and Google Sheets

## Who’s it for
This workflow is ideal for developers, SEO specialists, performance engineers, and digital agencies who want to continuously monitor website performance using Core Web Vitals. It’s also perfect for product or infrastructure teams that need real-time alerts when a site underperforms and want a historical log of reports in Google Sheets.

## What it does
This automation periodically fetches a Lighthouse report from the PageSpeed Insights API, checks whether any of the Core Web Vitals (CWV) scores fall below a defined threshold, and sends a notification to Telegram (or any other preferred messenger). It also logs the summarized report in a specific row within a Google Spreadsheet for long-term tracking and reporting.

The CWV audit results are processed using JavaScript and passed through a summarization step using Gemini Chat, making the audit descriptions concise and actionable.

## How to set up
1. Configure the Schedule Trigger node to run at your preferred frequency.

2. Set your target URLs and API Key, then connect the HTTP Request node to Google PageSpeed Insights.

3. Update the JavaScript Code node to filter and parse only CWV metrics.

4. Define thresholds in the IF Node to trigger Telegram messages only when needed.

5. Connect your Telegram (or other messenger) credentials.

6. Set up the Google Sheets node by linking your account and choosing the sheet and range to log data.

## Requirements
- Google account with access to Google Sheets

- Telegram bot token or any preferred messenger

- API key for PageSpeed Insights

- Gemini Chat integration (optional for summarization, can be replaced or removed)

## How to customize the workflow
Swap Telegram for Slack, Discord, or email by replacing the Send Notification node.

Adjust the CWV thresholds or include other Lighthouse metrics by modifying the IF Node and JavaScript logic.

Add multiple URLs to monitor by introducing a loop or extending the schedule with different endpoints.

Replace the Gemini Chat model with OpenAI, Claude, or your custom summarizer if needed.

## 📊 Basic Information

- **Workflow ID:** 6490
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 571
- **Downloads:** 57
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6490)

## 👤 Author

- **Name:** Rully Saputra
- **Username:** @rullysaputra15

## 🏷️ Categories

- DevOps
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **if** 
- **telegram** 
- **httpRequest** 
- **code** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
