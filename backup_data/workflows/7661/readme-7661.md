# Manage Appian tasks with Ollama Qwen LLM and Postgres memory

> This workflow is a simple example of using n8n as an AI chat interface into Appian. It connects a local LLM, persistent memory, and API tools to demonstrate how an agent can interact with Appian tasks.

What this workflow does
- Chat interface: Accepts user input through a webhook or chat trigger
- Local LLM (Ollama): Runs on qwen2.5:7b with an 8k context window
- Conversation memory: Stores chat history in Postgres, keyed by sessionId
- AI Agent node: Handles reasoning, follows system rules (helpful assistant persona, date formatting, iteration limits), and decides when to call tools
- Appian integration tools:
- List Tasks: Fetches a user’s tasks from Appian
- Create Task: Submits data for a new task in Appian (title, description, hours, cost)

How it works
1. A user sends a chat message
2. The workflow normalizes fields such as text, username, and sessionId
3. The AI Agent processes the message using Ollama and Postgres memory
4. If the user asks about tasks, the agent calls the Appian APIs
5. The result, either a task list or confirmation of a new task, is returned through the webhook

Why this is useful
- Demonstrates how to build a basic Appian connector in n8n with an AI chat front end
- Shows how an LLM can decide when to call Appian APIs to list or create tasks
- Provides a pattern that can be extended with more Appian endpoints, different models, or custom system prompts


## 📊 Basic Information

- **Workflow ID:** 7661
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 128
- **Downloads:** 12
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7661)

## 👤 Author

- **Name:** Joe Swink
- **Username:** @dhawk

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **set** (×3)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **httpRequestTool** (×3)
- **respondToWebhook** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
