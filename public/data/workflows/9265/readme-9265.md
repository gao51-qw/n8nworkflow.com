# Build a text & image responding Telegram bot with Google Gemini 2.5 Flash

> # Telegram AI Bot Workflow

An intelligent Telegram bot powered by Google Gemini AI that provides smart responses to both text messages and images.

## Features

- **Multi-Modal Input**: Handles both text messages and image uploads
- **AI-Powered Responses**: Uses Google Gemini 2.5 Flash for intelligent reply generation
- **Image Analysis**: Automatically analyzes uploaded images and responds with descriptions
- **Conversation Memory**: Maintains context across 20 messages per conversation
- **Formatted Output**: Delivers well-structured, Telegram-friendly responses

## How It Works

1. User sends a message (text or image) to the Telegram bot
2. Workflow routes the input based on message type
3. Images are downloaded and analyzed using Gemini Vision AI
4. AI agent processes the input with conversation context
5. Formatted response is sent back to the user instantly

## Requirements

- Telegram Bot Token (from @BotFather)
- Google Gemini API Key
- n8n instance with webhook capability

Perfect for building interactive AI assistants, customer support bots, or educational tools on Telegram.

## 📊 Basic Information

- **Workflow ID:** 9265
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1560
- **Downloads:** 156
- **Created:** 2025/10/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9265)

## 👤 Author

- **Name:** Ahmed Sherif
- **Username:** @asherif08

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **set** (×2)
- **switch** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **telegramTrigger** 
- **telegram** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
