# Track Upwork jobs from Vollna RSS with Google Sheets logging and Slack alerts

> ## Who’s it for

Freelancers and agencies who track new Upwork leads via Vollna RSS and want clean logging to Google Sheets with instant Slack alerts.

## What it does

Polls a Vollna RSS feed every few minutes, parses each job (title, budget, link, skills, categories), dedupes against your sheet, appends only new jobs, and notifies Slack with a compact alert.

## How it works
	1. Schedule Trigger fires on an interval.
	2. RSS Read pulls new items from Vollna.
	3. Filter (optional) skips non-ASCII titles.
	4. Code node normalizes fields (title/budget split, clean Upwork link, “Posted x mins ago”, etc.).
	5. Sheets Lookup + Compare prevents duplicates by job URL.
	6. Sheets Append writes new rows; Slack posts a job alert.

## Set up
	1. In ⚙️ Config, set: VOLLNA_RSS_URL, GOOGLE_SHEETS_DOC_ID, GOOGLE_SHEET_NAME, SLACK_CHANNEL_ID, EMAIL_TO (optional).
	2. Add OAuth credentials for Google Sheets, Slack, and Gmail (optional).
	3. Create sheet columns: TITLE, BUDGET, UPWORK JOB LINK, CATEGORIES, SKILLS, DATE, JOB DESCRIPTION, POSTED.
	4. (Optional) Adjust polling interval on the Schedule Trigger.

## Requirements
	• Vollna RSS feed URL (your tokenized link)
	• n8n (cloud or self-hosted) with Google Sheets + Slack creds

## Customize
	• Remove the ASCII filter for broader coverage.
	• Swap Gmail/Slack with your preferred notifier.
	• Add keyword filters before appending to Sheets.

## 📊 Basic Information

- **Workflow ID:** 9020
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 197
- **Downloads:** 19
- **Created:** 2025/9/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9020)

## 👤 Author

- **Name:** Jeremiah Wright
- **Username:** @jerrywright

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **filter** 
- **code** 
- **googleSheets** (×2)
- **scheduleTrigger** 
- **rssFeedRead** 
- **sort** 
- **compareDatasets** 
- **slack** 
- **gmail** 
- **aggregate** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
