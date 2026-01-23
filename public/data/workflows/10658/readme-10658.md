# Create a voice-enabled AI assistant with Groq, SerpAPI and TTS

> #  What It Does

Build your own AI Chatbot that listens, thinks, searches, and speaks — all inside n8n.
This template combines Groq AI, LangChain Agent, SerpAPI, and StreamElements TTS to create a chatbot that:

- Understands natural language input
- Searches the web for real-time answers
- Remembers previous messages (context memory)
- Replies with a realistic AI voice

# How It Works

- Chat Trigger: The workflow activates whenever a new message is received.
- Groq AI Agent: Processes user input, performs reasoning, and integrates with SerpAPI for live web results.
- Memory Node: Keeps the chat context for a natural conversation flow.
- TTS Node: Converts AI responses into realistic voice replies using StreamElements API.

# Setup Steps

- Connect your Groq, SerpAPI, and StreamElements credentials (no coding required).
- Customize the chatbot behavior directly inside n8n.
- Deploy instantly and chat via webhook or UI widget.

# Use Cases

- Voice-enabled customer-support bots
- AI chat widgets for websites
- Personal assistants that talk and search the web

## 📊 Basic Information

- **Workflow ID:** 10658
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 193
- **Downloads:** 19
- **Created:** 2025/11/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10658)

## 👤 Author

- **Name:** Muhammad Shaheer Awan
- **Username:** @shaheer03

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **httpRequest** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
