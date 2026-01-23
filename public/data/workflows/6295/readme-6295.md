# Dynamic website assistant with DeepSeek AI, Pinecone Vectorstore & site-based routing

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## 🚀 Overview  
This workflow enables a powerful AI-driven virtual assistant that dynamically responds to website queries using **webhook input**, **Pinecone vector search**, and **OpenAI agents** — all smartly routed based on the source website.

## 🔧 How It Works  

1. **Webhook Trigger**  
   The workflow starts with a `Webhook` node that receives query parameters:
   - `query`: The user's question  
   - `userId`: Unique user identifier  
   - `site`: Website identifier (e.g., test_site)  
   - `page`: Page identifier (e.g., homepage, pricing)  

2. **Smart Routing**  
   A `Switch` node directs the request to the correct AI agent based on the `site` value. Each AI agent uses:
   - OpenAI GPT-4/3.5 model  
   - Pinecone vector store for context-aware answers  
   - SQL-based memory for consistent multi-turn conversation  

3. **Contextual AI Agent**  
   Each agent is customized per website using:
   - Site-specific Pinecone namespaces  
   - Predefined system prompts to stay in scope  
   - Webhook context including `page`, `site`, and `userId`  

4. **Final Response**  
   The response is sent back to the originating website using the `Respond to Webhook` node.

## 🧠 Use Case  
Ideal for multi-site platforms that want to serve **tailored AI chat experiences** per domain or page — whether it’s support, content discovery, or interactive agents.

## ✅ Highlights  
- 🧠 Vector search using Pinecone for contextual responses  
- 🔀 Website-aware logic with `Switch` node routing  
- 🔐 No hardcoded API keys  
- 🧩 Modular agents for scalable multi-site support  


## 📊 Basic Information

- **Workflow ID:** 6295
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 548
- **Downloads:** 54
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6295)

## 👤 Author

- **Name:** moosa
- **Username:** @moosa

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryPostgresChat** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×3)
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×7)
- **@n8n/n8n-nodes-langchain.embeddingsCohere** (×7)
- **webhook** 
- **respondToWebhook** (×3)
- **switch** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
