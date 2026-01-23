# Personal life manager with Telegram, Google services & voice-enabled AI

> **How it works:**
This project teaches you to create a personal AI assistant named Jackie that operates through Telegram. Jackie can summarize unread emails, check calendar events, manage Google Tasks, and handle both voice and text interactions. The assistant provides a comprehensive digital life management solution accessible via Telegram messaging.

**Key Features:** 
- Supports hands-free voice interaction
- Maintains conversation memory
- Integrates with major Google services
- Provides personalized assistance for email management, scheduling, and task organization

**Step-by-step:**
Telegram Trigger: 
The workflow starts with a Telegram trigger that listens for incoming message events. The system determines if the incoming message is voice or text input.

Voice Processing: 
If a voice message is received, the workflow retrieves the voice file from Telegram and uses OpenAI's transcription API to convert speech to text.

AI Assistant: The processed text (whether original text or transcribed voice) is passed to Jackie, the AI assistant powered by OpenRouter's language model.

**Tools Integration:** 
Jackie is equipped with several productivity tools:

Get Email: Uses Gmail API to fetch unread emails from the inbox with sender, date, subject, and summary information

Google Calendar: Retrieves calendar events for specified dates, filtering out irrelevant future events

Google Tasks: Both creates new tasks and retrieves existing tasks from Google Tasks lists

**API Keys Required:**
- Telegram Bot API: Create a bot via @BotFather on Telegram to get your bot token
- OpenAI API: Required for voice-to-text transcription 
- OpenRouter API: Powers the AI language model responses 
- Google OAuth2: Needed for Gmail, Google Calendar, and Google Tasks integration


**Response Generation:**
The AI formulates intelligent responses based on the gathered information, current date context, and conversation history, then sends the response back to the user via Telegram in Markdown format.


## 📊 Basic Information

- **Workflow ID:** 8237
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 83966
- **Downloads:** 8396
- **Created:** 2025/9/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8237)

## 👤 Author

- **Name:** Derek Cheung
- **Username:** @derekcheungsa

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
- **stickyNote** (×11)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **googleTasksTool** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
