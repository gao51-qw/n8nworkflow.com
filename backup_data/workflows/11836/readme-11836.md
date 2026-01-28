# Automated Gmail classification and labeling with GPT-4, Sheets and Slack alerts

> ## This n8n template automates email labeling using AI-enhanced classification and intelligent routing

Gmail users report spending significant time manually sorting email, so this tool helps alleviate that burden.

## How it works
- Gmail Trigger monitors unread emails every 2 minutes
- Once an email arrives, the content is extracted with HTML cleaning
- AI Agent (the node is set for Chat GPT-4) is used for classification & entity extraction
- A Structured Output Parser parses the email to JSON
- A 9-way category routing system categorizes the email (Inquiry, Support, Newsletter, Marketing, Personal, Urgent, Spam, Invoice, Meeting)
- Gmail auto-labeling is used for each category
- Google Sheets is used for logging (the main log that includes all emails and  an error log which are emails that cannot be classified)
- Slack alerts are generated for high-priority/urgent emails
- Error handling is done with separate error logging in Google Sheets

## How to use
- Set up credentials for Google Gmail, LLM (ChatGPT, Gemini, etc.), Google Sheets, and Slack
- Modify the categories as needed per user preference

## Requirements
- Gmail 
- Any LLM like ChatGPT or Google Gemini
- Google Drive with Google Sheets is optional for logging and error handling
- Slack is optional for high-priority messages

## 📊 Basic Information

- **Workflow ID:** 11836
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 71
- **Downloads:** 7
- **Created:** 2025/12/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11836)

## 👤 Author

- **Name:** Chris Mielke
- **Username:** @chrismielke

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **code** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.agent** 
- **if** (×2)
- **switch** 
- **gmail** (×9)
- **googleSheets** (×2)
- **slack** 
- **stickyNote** (×6)
- **gmailTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
