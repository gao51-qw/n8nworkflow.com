# Job brief analysis with OpenAI to find relevant templates and log in Google Sheets

> ## Who’s it for

Recruiters, freelancers, and ops teams who scan job briefs and want quick, relevant n8n template suggestions, saved in a Google Sheet for tracking.

## What it does

Parses any job text, extracts exactly 5 search keywords, queries the n8n template library, and appends the matched templates (ID, name, description, author) to Google Sheets, including the canonical template URL.

## How it works
	1. Trigger receives a message or paste-in job brief.
	2. LLM agent returns 5 concise search terms (JSON).
	3. For each keyword, an HTTP request searches the n8n templates API.
	4. Results are split and written to Google Sheets; the workflow builds the public URL from ID+slug.

## Set up
	1. Add credentials for OpenAI (or swap the LLM node to your provider).
	2. Create a Google Sheet with columns: Template ID, Name, User, Description, URL.
	3. In the ⚙️ Config node, set: GOOGLE_SHEETS_DOC_ID, GOOGLE_SHEET_NAME, N8N_TEMPLATES_API_URL.

## Requirements
	• n8n (cloud or self-hosted)
	• OpenAI (or alternative LLM) credentials
	• Google Sheets OAuth credentials

## Customize
	• Change the model/system prompt to tailor keyword extraction.
	• Swap Google Sheets for Airtable/Notion.
	• Extend filters (e.g., only AI/CRM templates) before writing rows.

## 📊 Basic Information

- **Workflow ID:** 9019
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 76
- **Downloads:** 7
- **Created:** 2025/9/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9019)

## 👤 Author

- **Name:** Jeremiah Wright
- **Username:** @jerrywright

## 🏷️ Categories

- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** (×2)
- **httpRequest** 
- **splitOut** 
- **splitInBatches** 
- **googleSheets** (×3)
- **set** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
