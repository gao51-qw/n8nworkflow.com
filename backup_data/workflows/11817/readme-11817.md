# Manage Notion to-do tasks via Telegram with voice messages & OpenAI

> # Your Own Personal Assistant

This workflow turns a Telegram bot into a simple Notion To-Do assistant.

Send a message in Telegram (text or voice). If it’s a voice message, the workflow downloads the audio and uses OpenAI to transcribe it into text. Then an AI agent (“Tard”) uses the latest message + a short memory of the recent chat to understand what you want and perform the right action in Notion (search your pages or create a new task/page in your To-Do list). The result is sent back to you in Telegram in a clean, readable format.

&gt; Email and Calendar nodes are included for future expansion but are disabled by default. The assistant is designed to work with Notion only.

## 📊 Basic Information

- **Workflow ID:** 11817
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 97
- **Downloads:** 9
- **Created:** 2025/12/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11817)

## 👤 Author

- **Name:** weblane
- **Username:** @weblane

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **googleCalendarTool** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **gmailTool** (×2)
- **telegramTrigger** 
- **telegram** (×2)
- **if** 
- **set** 
- **notionTool** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
