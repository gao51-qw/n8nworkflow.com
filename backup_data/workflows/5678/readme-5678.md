# Automate email filtering & AI summarization. 100% free & effective, works 7/24

> ![dddss.png](fileId:1796)
## Good to know:
This workflow automatically processes incoming emails (you can filter them base on your needs) and creates concise AI-powered summaries, then logs them to a Google Sheets spreadsheet for easy tracking and analysis.

## Who is this for?

➖Business professionals who receive many emails and need quick summaries
➖Customer service teams tracking email communications
➖Project managers monitoring email correspondence
➖Anyone who wants to automatically organize and summarize their email communications

## What problem is this workflow solving?

This workflow solves the problem of email overload by automatically reading incoming emails, generating concise summaries using AI, and organizing them in a structured format. It eliminates the need to manually read through every email to understand the key points and maintains a searchable record of communications.

## What this workflow does:

✅Monitors your Gmail inbox for new emails
✅Filters emails based on specific criteria (sender validation)
✅Extracts key information (sender, date, subject, content)
✅Uses AI to generate concise summaries of email content
✅Automatically logs all data including the AI summary to a Google Sheets spreadsheet

## How it works:

1️⃣Gmail trigger monitors for new emails at specified intervals
2️⃣Email data is processed and formatted using JavaScript
3️⃣A conditional check validates the sender
4️⃣AI agent (powered by Groq's language model) reads the email content and generates a summary
5️⃣All information is automatically appended to a Google Sheets document

## How to use:

Set up Gmail OAuth2 credentials in n8n
Configure Google Sheets OAuth2 credentials
Set up Groq API credentials for AI processing
Create a Google Sheets document and update the document ID
Customize the sender validation criteria as needed
Activate the workflow

## Requirements:

✅n8n instance (cloud or self-hosted)
✅Gmail account with OAuth2 access
✅Google Sheets account
✅AI API
✅Basic understanding of n8n workflow

## Customizing this workflow:

🟢Modify the Gmail trigger filters to target specific labels or criteria
🟢Adjust the sender validation logic in the conditional node
🟢Customize the AI prompt to change summary style or focus
🟢Add additional data fields to the Google Sheets output
🟢Change the polling frequency for checking new emails
🟢Switch to different AI models by replacing the Groq node


## 📊 Basic Information

- **Workflow ID:** 5678
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 27442
- **Downloads:** 2744
- **Created:** 2025/7/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5678)

## 👤 Author

- **Name:** ARRE
- **Username:** @arre

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×8)
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.agent** 
- **gmailTrigger** 
- **if** 
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
