# WhatsApp productivity assistant with OpenAI, Gmail, Calendar, Tasks & Expense tracking

> ## Who's it for
This template is designed for anyone who wants to use **WhatsApp as a personal AI assistant hub**. If you often juggle tasks, emails, calendars, and expenses across multiple tools, this workflow consolidates everything into one seamless AI-powered agent accessible right from your most-used messaging app.

## What it does
Jarvis listens to your WhatsApp messages (text or audio) and processes them with OpenAI. Based on your request, it can:
* ✅ **Manage tasks** (create, complete, or delete)
* 📅 **Handle calendar events** (schedule, reschedule, or check availability)
* 📧 **Send, draft, or fetch emails** with Gmail
* 👥 **Retrieve Google Contacts**
* 💵 **Log and track expenses**
* 🎤 **Process voice notes** and respond intelligently

All responses are returned directly to WhatsApp, giving you a unified command center that works on any device.

## How to set up
1. Clone this template into your n8n workspace.
2. Set up a **WhatsApp Business API** account (via Meta Business Suite or providers like Twilio, 360dialog, or MessageBird).
3. Configure the WhatsApp webhook to connect to your n8n instance.
4. Connect your Google accounts (Gmail, Calendar, Contacts, etc.).
5. Add your **OpenAI API key** in the Credentials section.
6. Test by sending a WhatsApp message like:
   * "Create a meeting tomorrow at 3pm"
   * "Add expense $50 for lunch"
   * "Draft a reply to that email from Steve"
   * "What's on my calendar this week?"

## Requirements
* **n8n instance** (cloud or self-hosted with public webhook URL)
* **WhatsApp Business API** credentials (not regular WhatsApp)
* **Gmail, Google Calendar, and Google Contacts** credentials (optional based on features)
* **OpenAI API key**
* **ElevenLabs API Key** (optional, for advanced audio note processing)

## How to customize
* **Swap email providers** by replacing the Gmail MCP node with Outlook, Exchange, or IMAP/SMTP.
* **Add more integrations** like Notion, Slack, Todoist, or your CRM.
* **Adjust AI personality** by modifying the system prompt in the OpenAI node.
* **Control context memory** to determine how much conversation history Jarvis remembers.
* **Add automation rules** like auto-categorizing expenses or auto-scheduling recurring meetings.
* **Multi-language support** by configuring OpenAI to respond in different languages.

## Key advantages of WhatsApp version
* 🌍 **Universal access** - WhatsApp works everywhere, including international numbers
* 📱 **Cross-platform** - Seamlessly works on mobile, web, and desktop
* 🔒 **End-to-end encryption** for sensitive task and email data
* 👥 **Familiar interface** - No need to learn a new app
* ✅ **Read receipts** - Know when Jarvis has processed your request

With this template, you can transform WhatsApp into your **all-in-one AI productivity assistant**, simplifying workflows and saving hours every week—all from the app you're already using daily.

## 📊 Basic Information

- **Workflow ID:** 9295
- **Complexity:** advanced
- **Node Count:** 53
- **Views:** 1378
- **Downloads:** 137
- **Created:** 2025/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9295)

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
- **switch** (×2)
- **@elevenlabs/n8n-nodes-elevenlabs.elevenLabs** (×2)
- **googleSheetsTool** (×3)
- **googleContactsTool** 
- **@n8n/n8n-nodes-langchain.agent** 
- **filter** 
- **set** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **stickyNote** (×6)
- **whatsAppTrigger** 
- **whatsApp** (×3)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 53 nodes with 40 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
