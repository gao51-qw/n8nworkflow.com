# Automated stock news alerts with Google RSS, Gemini & Telegram notifications

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## 🎯 Purpose
This workflow helps you automatically monitor stock related news, extract the main content, summarize it using a LLM (via OpenRouter), and send real time alerts to Telegram and store them in Google Sheets.

## ⚙️ How It Works
### Trigger
- A Cron node triggers the workflow every 15 minutes (adjustable).
- RSS Feed node checks latest articles from Google Alerts RSS.
- The workflow filters duplicates using Google Sheets as a log.
- The article URL is sent to Jina AI Readability API to extract the main body text.
- The content is summarized using a model from OpenRouter (e.g., Gemini, Claude, GPT-4).
- You can customize the prompt to suit your tone and analysis needs.
- The result is appended to a Google Sheets file.
- Sends the title, summary, and reccomendation to Telegram chat.

**🧾 Google Sheets Template**
Create a Google Sheet using this template: [Stock Alert](https://docs.google.com/spreadsheets/d/109kj97ABR37XviIpxARCFviZwq8opOoe--rayOeFDSo/edit?usp=sharing)

## 🧰 Requirements
- Telegram Bot + your Chat ID
- OpenRouter account and API key
- Jina AI account for content extraction
- Google Account with access to Google Sheets
- Google Alerts RSS feed

## 🛠 Setup Instructions
- Install required credentials:
  - Add OpenRouter API key to n8n credentials.
  - Add Telegram Bot Token and Chat ID.
  - Add Google Sheets credentials.
  - Add Jina AI credentials.
- Create or copy the Google Sheet using the link above.
- Go to Google Alerts, create alerts, and copy the RSS feed URL.
- Replace placeholder API keys and URLs.
- Adjust Telegram Chat ID.

## 🔐 Security Note
All sensitive credentials (e.g., API keys, personal chat IDs) have been removed from this template. Please replace them using the n8n credentials manager before activating the workflow.

## 📊 Basic Information

- **Workflow ID:** 5712
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1661
- **Downloads:** 166
- **Created:** 2025/7/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5712)

## 👤 Author

- **Name:** Budi SJ
- **Username:** @budisj

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **googleSheets** (×3)
- **stickyNote** (×7)
- **jinaAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **merge** 
- **telegram** 
- **scheduleTrigger** 
- **noOp** 
- **code** 
- **if** 
- **rssFeedRead** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
