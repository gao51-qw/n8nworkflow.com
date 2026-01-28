This workflow template creates an AI agent chatbot with long-term memory and note storage using Google Docs and Telegram integration.

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