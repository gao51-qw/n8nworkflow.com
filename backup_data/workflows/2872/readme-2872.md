# 🤖🧠 AI agent chatbot + LONG TERM memory + note storage + Telegram

> This workflow template creates an AI agent chatbot with long-term memory and note storage using Google Docs and Telegram integration.

## Google Docs Integration 📄
[n8n Google Docs Node Setup](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledocs/)
[Google Credentials](https://docs.n8n.io/integrations/builtin/credentials/google/)

## Telegram Integration 💬
[Telegram Setup](https://n8n.io/workflows/2751-telegram-messaging-agent-for-textaudioimages/)

## Core Features 🌟

**AI Agent Integration** 🤖
- Implements a sophisticated AI agent with memory management capabilities
- Uses GPT-4o-mini and DeepSeek models for intelligent conversation handling
- Maintains context awareness through session management

**Memory System** 🧠
- Long-term memory storage using Google Docs
- Separate note storage system for specific information
- Window buffer memory for maintaining conversation context
- Intelligent memory retrieval and storage mechanisms

**Communication Interface** 💬
- Telegram integration for message handling
- Real-time message processing and response generation

## Technical Components 🔧

**Memory Architecture** 📚
- Dual storage system separating memories from notes
- Automated memory retrieval before each interaction
- Structured memory saving with timestamps

**AI Models** 🤖
- Primary GPT-4o-mini mini model for general interactions
- DeepSeek-V3 Chat for specialized processing
- Custom agent system with tool integration

**Storage Integration** 💾
- Google Docs integration for persistent storage
- Separate document management for memories and notes
- Automated document updates and retrievals

## 📊 Basic Information

- **Workflow ID:** 2872
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 57858
- **Downloads:** 5785
- **Created:** 2025/2/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2872)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×8)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleDocsTool** (×2)
- **googleDocs** (×2)
- **telegram** 
- **@n8n/n8n-nodes-langchain.agent** 
- **aggregate** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
