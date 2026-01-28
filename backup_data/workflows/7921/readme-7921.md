# Create smart Telegram reminders with GPT-4 mini and Airtable cancel codes

> How It Works

User sends a reminder request via Telegram (e.g., “Remind me to clean the garage tomorrow at 12 pm”).

The request is parsed by AI Agent and stored in Airtable with a unique reminder code.

The reminder workflow checks Airtable at scheduled intervals and sends a Telegram notification when the reminder is due.

Each reminder includes a unique cancel code (e.g., Reply 4936 to stop this reminder).

If the user replies with the code, the bot searches Airtable, deletes the reminder, and confirms the deletion in Telegram.

If the code doesn’t exist, the bot replies “Code not found.”

⚡ Setup Steps

Create a Telegram Bot

Use BotFather
 on Telegram.

Run /newbot and copy your bot token.

Add the token in your Telegram Trigger and Telegram Send nodes in n8n.

Set Up Airtable

Create an Airtable base called REMINDER-TABLE.

Add a table with fields:

title (Text) – reminder text

due_at (Date/Time) – when the reminder is due

chat_id (Text) – user’s Telegram chat ID

code (Number/Text) – unique cancel code

Generate an API key / Personal Access Token and connect it in n8n.

Import This Workflow

In n8n, click Import Workflow.

Paste the JSON template.

Connect your Telegram and Airtable credentials.

Activate the Workflow

Start the workflow in n8n Cloud or Self-Hosted.

Send a test reminder in Telegram (e.g., “Remind me in 5 minutes to call mom”).

When notified, reply with the cancel code to test deletion.

Optional Customizations

Modify reminder frequency (Every 5 minutes node).

Change reminder message formatting in the Format Message node.

Add logging/analytics by connecting Google Sheets or another DB.

⚡ Result: You now have a fully automated AI-powered Telegram Reminder Bot with Airtable storage, cancel codes, and real-time notifications!

## 📊 Basic Information

- **Workflow ID:** 7921
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 191
- **Downloads:** 19
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7921)

## 👤 Author

- **Name:** kiran adhikari
- **Username:** @kiran1adh

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **airtable** (×3)
- **code** (×2)
- **telegram** (×3)
- **merge** 
- **if** (×3)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
