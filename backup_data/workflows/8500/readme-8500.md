# Jarvis: productivity AI agent for tasks, calendar, email & expense using MCPs

> ## Who’s it for
This template is designed for anyone who wants to use **Telegram as a personal AI assistant hub**.  
If you often juggle tasks, emails, calendars, and expenses across multiple tools, this workflow consolidates everything into one seamless AI-powered agent.

## What it does
Jarvis listens to your Telegram messages (text or audio) and processes them with OpenAI.  
Based on your request, it can:
- ✅ Manage tasks (create, complete, or delete)  
- 📅 Handle calendar events (schedule, reschedule, or check availability)  
- 📧 Send, draft, or fetch emails with Gmail  
- 👥 Retrieve Google Contacts  
- 💵 Log and track expenses  

All responses are returned directly to Telegram, giving you a unified command center.

## How to set up
1. Clone this template into your n8n workspace.  
2. Connect your accounts (Telegram, Gmail, Google Calendar, Contacts, etc.).  
3. Add your OpenAI API key in the **Credentials** section.  
4. Test by sending a Telegram message like “Create a meeting tomorrow at 3pm” or “Add expense $50 for lunch.”  or "Draft a reply with a project proposal to that email from Steve"

## Requirements
- n8n instance (cloud or self-hosted)  
- Telegram Bot API credentials  
- Gmail, Google Calendar, and Google Contacts credentials (optional, if using those features)  
- OpenAI API key  
- ElevenLabs API Key (optional, if you need audio note support)

## How to customize
- Swap Gmail with another email provider by replacing the Gmail MCP node.  
- Add additional MCP integrations (e.g., Notion, Slack, CRM tools).  
- Adjust memory length to control how much context Jarvis remembers.  

With this template, you can transform Telegram into your **all-in-one AI assistant**, simplifying workflows and saving hours every week.


## 📊 Basic Information

- **Workflow ID:** 8500
- **Complexity:** advanced
- **Node Count:** 52
- **Views:** 27333
- **Downloads:** 2733
- **Created:** 2025/9/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8500)

## 👤 Author

- **Name:** Jitesh Dugar
- **Username:** @jiteshdugar

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** (×5)
- **@n8n/n8n-nodes-langchain.mcpTrigger** (×5)
- **gmailTool** (×7)
- **googleCalendarTool** (×6)
- **googleTasksTool** (×5)
- **telegramTrigger** 
- **switch** (×2)
- **@elevenlabs/n8n-nodes-elevenlabs.elevenLabs** (×2)
- **googleSheetsTool** (×3)
- **telegram** (×3)
- **googleContactsTool** 
- **@n8n/n8n-nodes-langchain.agent** 
- **filter** 
- **set** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 52 nodes with 39 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
