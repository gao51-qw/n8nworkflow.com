# Voice & text assistant with Telegram, Gemini AI, Calendar, Gmail & Notion

> ## **This n8n template demonstrates how to turn a Telegram bot into a personal AI-powered assistant that understands both voice notes and text messages. The assistant can transcribe speech, interpret user intent with AI, and perform smart actions such as managing calendars, sending emails, or creating notes.**

**Use cases**

- Hands-free scheduling with Google Calendar

- Quickly capturing ideas as Notion notes via voice

- Sending Gmail messages directly from Telegram

- A personal productivity assistant available on-the-go

**Good to know**

Voice notes are automatically transcribed into text before being processed. This template uses Google Gemini for AI reasoning.The AI agent supports memory, enabling more natural and contextual conversations.

## How it works

- Telegram Trigger – Starts when you send a text or voice note to your Telegram bot.

- Account Check – Ensures only authorized users can interact with the bot.

- Audio Handling – If it’s a voice message, the workflow retrieves and transcribes the recording.

- AI Agent – Both transcribed voice or text are sent to the AI Agent powered by Google Gemini + Simple Memory.

- Smart Actions – Based on the query, the AI can:

- Read or create events in Google Calendar

- Create notes in Notion

- Send messages in Gmail

- Reply in Telegram – The bot sends a response confirming the action or providing the requested information.

## How to use

- Clone this workflow into your n8n instance.

- Replace the Telegram Trigger with your bot credentials.

- Connect Google Calendar, Notion, and Gmail accounts where required.

- Start chatting with your Telegram bot to add events, notes, or send emails using just your voice or text.

## Requirements

- Telegram bot & API key

- Google Gemini account for AI

- Google Calendar, Notion, and Gmail integrations (optional, depending on use case)

## Customising this workflow

Add more integrations (Slack, Trello, Airtable, etc.) for extended productivity. Modify the AI prompt in the agent node to fine-tune personality or task focus. Swap in another transcription service if preferred.

## 📊 Basic Information

- **Workflow ID:** 8648
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1646
- **Downloads:** 164
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8648)

## 👤 Author

- **Name:** Paul Abraham
- **Username:** @hellopaul

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **gmailTool** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **telegram** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **googleCalendarTool** (×2)
- **notionTool** 
- **stickyNote** (×4)
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
