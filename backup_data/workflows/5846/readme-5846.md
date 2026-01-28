# Summarize & reply to Slack channel messages with Claude AI assistant

> ## ✨ What It Does

**Mello** is a Claude-powered Slack assistant that helps you stay on top of unread messages across all your channels.

It:
- Summarizes conversations contextually using Claude AI.
- Generates reply suggestions and sends them as private (ephemeral) Slack messages.
- Lets you respond instantly with one-click AI-suggested replies.

Perfect for busy teams, founders, and anyone looking to reduce Slack noise and save hours each week.

---

## 🔧 Setup Instructions

1. **Create a Slack App**
   - Go to [Slack API → Your Apps](https://api.slack.com/apps)
   - Click **Create New App** and set it up for your workspace
   - Under **OAuth & Permissions**, add:
     - **Bot Token Scopes**: `commands`, `chat:write`, `channels:history`, `users:read`
     - **User Token Scopes**: `channels:history`, `chat:write`
   - Enable **Interactivity**, and point the Request URL to your n8n webhook (e.g. `/slash-summarize`)

2. **Add Claude API**
   - Get an API key from [Claude (Anthropic)](https://www.anthropic.com/)
   - In n8n, set up the Claude API credential (or switch to OpenAI)

3. **Import This Workflow**
   - Go to your n8n instance, click **Import**, and paste this template
   - Update any placeholders (Slack app, Claude key, webhook URLs)
   - Follow the inline sticky notes for guidance

4. **Test It**
   - Type `/summarize` in any Slack channel
   - Mello will fetch unread messages, summarize them, and show reply buttons in a private message

⏱ Setup time: ~10 minutes

---

## 🛠 Workflow Highlights

- Slash command trigger (`/summarize`)
- Slack API integration to fetch messages
- Claude AI for contextual summaries
- Reply suggestions with smart buttons
- Private Slack delivery (ephemeral messages)
- Designed to be easily extended (e.g. add support for OpenAI, custom storage)

---

## 🔒 Note

This is a **lite preview** of the full Mello workflow.

✅ The full version includes:
- Slack reply buttons with thread context
- Full OAuth flow with token storage
- MongoDB integration
- Custom Claude/OpenAI configuration
- Hosted version with onboarding, branding & support

💡 Want access to the complete version?  
📩 Email **nina@baloon.dev**


## 📊 Basic Information

- **Workflow ID:** 5846
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 453
- **Downloads:** 45
- **Created:** 2025/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5846)

## 👤 Author

- **Name:** Ankur Pata
- **Username:** @melloai

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **code** (×3)
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
