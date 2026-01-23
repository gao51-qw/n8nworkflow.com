# Multilingual voice & text Telegram bot with ElevenLabs TTS and LangChain agents

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

# Telegram Voice AI Assistant
This n8n template creates a **multimodal Telegram bot** that dynamically responds to users:

- **Replies with voice** when receiving voice messages (using ElevenLabs TTS)

- **Replies with text** for text-based queries

- Supports **custom AI tools** (e.g., crypto APIs, databases, or custom functions)

Built with **LangChain Agents**, it can integrate any external API or data source into conversations.

## Key Features
🎙️ **Smart Response Logic**
- **Voice Query? → Voice Reply**
1. Transcribes audio via ElevenLabs STT
2. Processes with AI (Groq/Gemini)
3. Converts text response to natural speech (ElevenLabs TTS)

- **Text Query? → Text Reply**
Bypasses TTS/STT for faster responses

🛠️ **Extensible AI Tools**
Add your own tools:
- Database lookups
- Weather/stock APIs
- Custom Python functions
- RAG (document retrieval)

Supports **multi-step tool chaining** (e.g., "Get BTC price → analyze trends → summarize")

🌐 **Language & Context**
- Auto-detects user language (via Telegram’s *language_code*)
- Maintains **session memory** (remembers conversation history)

## Use Cases
- **Voice-first customer support**
- **Crypto/analytics assistants** (e.g., "What’s Ethereum’s current gas fee?")
- **Multilingual FAQ bots**
- **Educational tutors** (voice-interactive learning)

## Requirements
- **Telegram Bot Token**
- **ElevenLabs API Key** (For TTS/STT)
- **Groq API Key** or **Google Gemini API Key**

## Customization Tips
- **Change AI personality**: Modify the *systemMessage* in the Voice Assistant node
- **Add more models**: Swap Groq/Gemini for OpenAI, Anthropic, etc.
- **Extend functionality**: Add RAG (Retrieval-Augmented Generation) for document queries

Take this template to create a **Siri-like AI assistant** for Telegram in minutes! 🚀

## 📊 Basic Information

- **Workflow ID:** 5511
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 2894
- **Downloads:** 289
- **Created:** 2025/7/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5511)

## 👤 Author

- **Name:** IvanCore
- **Username:** @ivancore

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **set** (×2)
- **switch** 
- **telegram** (×2)
- **@elevenlabs/n8n-nodes-elevenlabs.elevenLabs** (×2)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **@n8n/n8n-nodes-langchain.agent** 
- **if** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
