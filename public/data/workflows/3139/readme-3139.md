# 🔐🦙Private & local Ollama self-hosted + dynamic LLM router

> ## Who is this for?
This workflow template is designed for **AI enthusiasts**, **developers**, and **privacy-conscious users** who want to leverage the power of local large language models (LLMs) without sending data to external services. It's particularly valuable for those running Ollama locally who want intelligent routing between different specialized models.

## What problem is this workflow solving?
When working with multiple local LLMs, each with different strengths and capabilities, it can be challenging to manually select the right model for each specific task. This workflow automatically analyzes user prompts and routes them to the most appropriate specialized Ollama model, ensuring optimal performance without requiring technical knowledge from the end user.

## What this workflow does
This intelligent router:
- Analyzes incoming user prompts to determine the nature of the request
- Automatically selects the optimal Ollama model from your local collection based on task requirements
- Routes requests between specialized models for different tasks:
  - Text-only models (qwq, llama3.2, phi4) for various reasoning and conversation tasks
  - Code-specific models (qwen2.5-coder) for programming assistance
  - Vision-capable models (granite3.2-vision, llama3.2-vision) for image analysis
- Maintains conversation memory for consistent interactions
- Processes everything locally for complete privacy and data security

## Setup
1. Ensure you have [Ollama](https://ollama.ai/) installed and running locally
2. Pull the required models mentioned in the workflow using Ollama CLI (e.g., `ollama pull phi4`)
3. Configure the Ollama API credentials in n8n (default: http://127.0.0.1:11434)
4. Activate the workflow and start interacting through the chat interface

## How to customize this workflow to your needs
- Add or remove models from the router's decision framework based on your specific Ollama collection
- Adjust the system prompts in the LLM Router to prioritize different model selection criteria
- Modify the decision tree logic to better suit your specific use cases
- Add additional preprocessing steps for specialized inputs


This workflow demonstrates how n8n can be used to create sophisticated AI orchestration systems that respect user privacy by keeping everything local while still providing intelligent model selection capabilities.

## 📊 Basic Information

- **Workflow ID:** 3139
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 14718
- **Downloads:** 1471
- **Created:** 2025/3/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3139)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.lmChatOllama** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
