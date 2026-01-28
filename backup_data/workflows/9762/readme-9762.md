# Create an intelligent FAQ Telegram bot with Google Gemini and Supabase

> Overview This template creates a smart FAQ bot on Telegram, powered by Google Gemini for intelligent answers and Supabase to store user data. The workflow can distinguish between new and existing users.

How It Works

Trigger: The workflow starts when a user sends any message to the Telegram Bot.

Check User: It looks up the user's chat_id in a Supabase telegram_users table.

Route (New vs. Existing):

New User (True Path): If the user is not found, the workflow saves their chat_id to Supabase and sends a one-time welcome message.

Existing User (False Path): If the user exists, the workflow proceeds to the AI step.

Generate Answer: It loads a predefined FAQ context and combines it with the user's question. This is sent to Google Gemini via the AI Agent node.

Send Response: The AI-generated answer is sent back to the user on Telegram.

Setup Instructions

Telegram:

Connect your Telegram credentials to the Telegram Trigger and both Send a text message nodes.

Supabase:

Connect your Supabase credentials to the Find user in DB and Create a row nodes.

You MUST have a table named telegram_users.

This table MUST have a column named chat_id (type: text or varchar).

Google Gemini:

Connect your Google Gemini (Palm API) credentials to the Google Gemini Chat Model node.

(REQUIRED) Customization:

Open the Set FAQ Context node and change its contents with Questions (Q) and Answers (A) that are appropriate for your bot.

Change the text in the Send a text message (Welcome Message) node as you want.

## 📊 Basic Information

- **Workflow ID:** 9762
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 273
- **Downloads:** 27
- **Created:** 2025/10/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9762)

## 👤 Author

- **Name:** Mohammad Jibril
- **Username:** @muimsa

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **stickyNote** (×6)
- **supabase** (×2)
- **if** 
- **telegram** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
