# AI email assistant: Prioritize Gmail with ChatGPT summaries and Slack digests

> This n8n workflow acts as an AI-powered Inbox Assistant that automatically summarizes and classifies Gmail emails, prioritizes important messages, and sends a daily digest to Slack. It’s ideal for startup founders and small teams juggling investor intros, customer leads, and support queries — all from a busy Gmail inbox.

Each email is processed using ChatGPT to generate a concise summary, classify the message (e.g., Support, Investor, Spam), and determine its urgency. High and medium priority messages are forwarded to Slack instantly. Lower priority emails are logged to Google Sheets for review. A daily 7 PM digest summarizes the day’s most important messages.

💡 Use Cases
Preventing missed investor or lead emails

Lightweight CRM alternative using Google Sheets

Slack summaries of critical Gmail activity

🔧 How It Works
Gmail node fetches new messages

ChatGPT summarizes and extracts urgency + type

High/medium urgency → sent to Slack + labeled in Gmail

Low urgency → logged in Google Sheets

Cron node triggers a daily 7 PM Slack summary

✅ Requirements
OpenAI API Key (GPT-4 or GPT-4o recommended)

Gmail access with read and label permission

Slack Bot Token or Webhook URL

Google Sheets integration (optional)

🛠 Customization Ideas
Replace Slack with Telegram or WhatsApp

Route investor leads to Airtable or Notion

Add multi-language support in ChatGPT prompt

Create weekly summaries via email

## 📊 Basic Information

- **Workflow ID:** 5446
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 3588
- **Downloads:** 358
- **Created:** 2025/6/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5446)

## 👤 Author

- **Name:** Darsheel
- **Username:** @n8ndarsheel

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **if** 
- **code** (×3)
- **slack** (×2)
- **gmail** (×2)
- **googleSheets** (×3)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
