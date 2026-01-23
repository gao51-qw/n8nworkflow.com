# Create a private document Q&A system with Llama3, Postgres, Qdrant and Google Drive

> ## ⚙️ How It Works: LocalRAG.AI

⚠️ Note: This system only works for self-hosted n8n instances. It will not function on n8n.cloud or other remote setups.
LocalRAG.AI is a private, on-prem AI assistant that uses your own documents to answer questions intelligently. It combines LangChain, Ollama, Qdrant, and Postgres into a powerful AI pipeline — all running locally for maximum data privacy.

## 🔄 What It Does
Monitors Your Google Drive Folders for new or updated files.
Downloads the file, extracts the text, and prepares it.
Generates Embeddings using your local Ollama model (e.g., LLaMA 3).
Stores them in Qdrant, your local vector database.
During a chat, it:
Uses vector search to retrieve relevant chunks.
Combines them with chat history stored in Postgres.
Responds via a LangChain AI agent using your local model.
🛠️ Setup Steps (Self-hosted Only)
Install and Self-host n8n (e.g., via Docker).
Set up your Ollama instance locally and load your desired LLM (e.g., llama3).
Deploy Qdrant locally for vector storage.
Connect a Postgres DB to store chat history.
Create and import the workflow in n8n.
Authenticate Google Drive to monitor folders.
Connect credentials for Ollama, Qdrant, Postgres in the n8n workflow.
Start chatting through the Webhook Trigger or custom UI.
🧠 Perfect For:
Research teams handling confidential data
Internal documentation Q&A
AI chatbots that don’t rely on OpenAI or cloud


## 📊 Basic Information

- **Workflow ID:** 5508
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 3032
- **Downloads:** 303
- **Created:** 2025/7/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5508)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **@n8n/n8n-nodes-langchain.lmOllama** 
- **@n8n/n8n-nodes-langchain.embeddingsOllama** (×2)
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **stickyNote** (×3)
- **googleDriveTrigger** (×2)
- **set** 
- **googleDrive** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
