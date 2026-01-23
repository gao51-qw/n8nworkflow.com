# Gemini-powered Facebook comment & DM assistant with Notion

> ## What Problem Does It Solve?

Customers often ask product questions or prices in comments.

Businesses waste time replying manually, leading to delays.

Some comments only need a short thank-you reply, while others need a detailed private response.

This workflow solves these by:

Replying with a friendly public comment.

Sending a private message with details when needed.

Handling compliments, complaints, and unclear comments in a consistent way.

## How to Configure It

Facebook Setup

Connect your Facebook Page credentials in n8n.

Add the webhook URL from this workflow to your Facebook App/Webhook settings.

AI Setup

Add your Google Gemini API key (or swap for OpenAI/Claude).

The included prompt is generic — you can edit it to match your brand tone.

Optional Logging

If you want to track processed messages, connect a Notion database or another CRM.

## How It Works

Webhook catches new Facebook comments.

AI Agent analyzes the comment and categorizes it (question, compliment, complaint, unclear, spam).

Replying:

For questions/requests → public reply + private message with full details.

For compliments → short thank-you reply.

For complaints → apology reply + private message for clarification.

For unclear comments → ask politely if they need help.

For spam/offensive → ignored (no reply).

Replies and messages are sent instantly via the Facebook Graph API.

## Customization Ideas

Change the AI prompt to match your brand voice.

Add forwarding to Slack/Email if a human should review certain replies.

Log conversations in Notion, Google Sheets, or a CRM for reporting.

Expand to Instagram or WhatsApp with small adjustments.

If you need any help [Get In Touch](https://www.linkedin.com/in/abdallaelshikh0/)

## 📊 Basic Information

- **Workflow ID:** 8066
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 1086
- **Downloads:** 108
- **Created:** 2025/8/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8066)

## 👤 Author

- **Name:** Abdullah Alshiekh
- **Username:** @abdullah01

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **facebookGraphApi** (×5)
- **webhook** 
- **set** (×2)
- **notion** (×3)
- **httpRequest** (×3)
- **code** (×2)
- **if** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
