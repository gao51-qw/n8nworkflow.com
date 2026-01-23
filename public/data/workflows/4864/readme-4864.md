# Automated news summarizer with GPT-4o + email delivery

> ## How it Works ##

This workflow fetches top news headlines every 10 minutes from NewsAPI, summarizes them using OpenAI's GPT-4o model, and sends a concise email digest to a list of recipients defined in a Google Spreadsheet. It's ideal for anyone who wants to stay updated with the latest news in a short, digestible format.

## 🎯 Use Case ##

- Professionals who want summarized daily news
- Newsletters or internal communication updates
- Teams that require contextual summaries of the latest events

## Setup Instructions ##

### 1. Upload the Spreadsheet
- File name: `Emails`
- Column: `Email` with recipient addresses
### 2. Configure Google Sheets Nodes
- Connect your Google account to:
  - `Email List`
  - `Send Email`
### 3. Add API Credentials
- **NewsAPI Key** → for fetching top headlines
- **OpenAI API Key** → for summarizing headlines
- **Gmail Account** → for sending the email digest
### 4. Activate the Workflow
- Once active, the workflow runs every 10 minutes via a cron trigger
- Summarized news is sent to the list of emails in the spreadsheet

## 🔁 Workflow Logic ##

1. **Trigger**: Every 10 minutes via Cron
2. **Fetch News**: HTTP request to NewsAPI for top headlines
3. **Summarize**: Headlines are passed to OpenAI's GPT-4o for 5-bullet summary
4. **Read Recipients**: Google Sheet is used to collect email recipients
5. **Send Email**: Summary is formatted and sent via Gmail

## 🧩 Node Descriptions ##

| Node Name | Description |
|-----------|-------------|
| Cron | Triggers the workflow every 10 minutes. |
| HTTP Request - NewsAPI | Fetches top news headlines using NewsAPI. |
| Set | Formats or structures raw news data before processing. |
| AI Agent | Summarizes the news content using OpenAI into 5 bullet points. |
| Email List | Reads recipient email addresses from the 'Emails' Google Spreadsheet. |
| Send Email | Sends the email digest to all recipients using Gmail. |

## 🛠️ Customization Tips ##

- Modify the AI prompt for tone, length, or content type
- Send summaries to Slack, Telegram, or Notion instead of Gmail
- Adjust cron interval for more/less frequent updates
- Change email formatting (HTML vs plain text)

## 📎 Required Files ##

| File Name | Purpose |
|-----------|---------|
| Emails spreadsheet | Google Sheet containing the list of email recipients |
| daily_news.json | Main n8n workflow file to automate daily news digest |

## 🧪 Testing Tips ##

- Add 1–2 test email addresses in your spreadsheet
- Temporarily change the Cron node to run every minute for testing
- Check email inbox for delivery and formatting
- Inspect the execution logs for API errors or formatting issues

## 🏷 Suggested Tags & Categories ##

#News #OpenAI #Automation #Email #Digest #Marketing


## 📊 Basic Information

- **Workflow ID:** 4864
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1927
- **Downloads:** 192
- **Created:** 2025/6/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4864)

## 👤 Author

- **Name:** Amit Mehta
- **Username:** @amitswba

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** 
- **gmail** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
