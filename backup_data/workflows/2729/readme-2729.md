# 🔐🦙🤖 Private & local Ollama self-hosted AI assistant

> Transform your local N8N instance into a powerful chat interface using any local & private Ollama model, with zero cloud dependencies ☁️. This workflow creates a structured chat experience that processes messages locally through a language model chain and returns formatted responses 💬.

## How it works 🔄
- 💭 Chat messages trigger the workflow
- 🧠 Messages are processed through Llama 3.2 via Ollama (or any other Ollama compatible model)
- 📊 Responses are formatted as structured JSON
- ⚡ Error handling ensures robust operation

## Set up steps 🛠️
- 📥 Install N8N and Ollama
- ⚙️ Download Ollama 3.2 model (or other model)
- 🔑 Configure Ollama API credentials
- ✨ Import and activate workflow

This template provides a foundation for building AI-powered chat applications while maintaining full control over your data and infrastructure 🚀.


## 📊 Basic Information

- **Workflow ID:** 2729
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 60225
- **Downloads:** 6022
- **Created:** 2025/1/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2729)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmOllama** 
- **stickyNote** (×8)
- **set** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
