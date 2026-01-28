# Automate content requests from Telegram to Notion with Gemini AI

> ### ⚡ Overview
This workflow connects Telegram with an AI Agent (Gemini) and Notion to automate content requests.
Team members can request content ideas directly in Telegram. The AI processes the request, then automatically creates a new entry in your Notion Content database.

### 🛠️ Features
🤖 **AI-powered assistant**: Gemini AI with memory to understand context and generate better responses.
📲 **Telegram integration**: Accepts requests directly from your Telegram bot.
🗂️ **Notion automation**: Auto-creates records in your Notion database (title, content draft, channel, assignee, date, references, type).
🛡️ **Secure & flexible**: No hardcoded API keys, placeholders used for easy setup.

### 📝 Setup Instructions
Add your Telegram Bot Token, Google Gemini API Key, and Notion Integration Token in n8n credentials.
Steps:
Import this template JSON into your n8n instance.
Configure credentials in n8n (Telegram, Notion, Gemini API).

### 🎯 Use Cases
Content marketing teams managing requests via Telegram.
Automating idea collection from distributed teams.
Keeping Notion Content updated without manual entry.

## 📊 Basic Information

- **Workflow ID:** 8052
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 162
- **Downloads:** 16
- **Created:** 2025/8/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8052)

## 👤 Author

- **Name:** Miftah Rahmat
- **Username:** @miftahr

## 🏷️ Categories

- Content Creation
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** (×2)
- **if** (×3)
- **telegram** (×5)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **notionTool** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
