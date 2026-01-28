# 🐋DeepSeek V3 chat & R1 reasoning quick start

> This n8n workflow demonstrates multiple ways to harness DeepSeek's AI models in your automation pipeline! 🌟

## Core Features

**Multiple Integration Methods** 🔌
- Local deployment using Ollama for DeepSeek-R1
- Direct API integration with DeepSeek Chat V3
- Conversational agent with memory buffer
- HTTP request implementation with both raw and JSON formats

**Model Options** 🧠
- DeepSeek Chat V3 for general conversation
- DeepSeek-R1 for advanced reasoning
- Memory-enabled agent for persistent context

## Quick Setup 🛠️

**API Configuration**
- Base URL: https://api.deepseek.com
- Get your API key from platform.deepseek.com/api_keys

**Local Setup** 💻
- Install Ollama for local deployment
- Set up DeepSeek-R1 via Ollama
- Configure local credentials in n8n

## Implementation Details 🔧

**Conversational Agent**
- Window Buffer Memory for context
- Customizable system messages
- Built-in error handling with retries

**API Endpoints** 🌐
- Chat completions for V3 and R1 models
- OpenAI API format compatibles


## 📊 Basic Information

- **Workflow ID:** 2777
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 39257
- **Downloads:** 3925
- **Created:** 2025/1/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2777)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
