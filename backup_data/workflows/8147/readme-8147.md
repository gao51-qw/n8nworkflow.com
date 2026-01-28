# Document Q&A chatbot with Google Drive, GPT-4-mini & Telegram (RAG system)

> Description
📌 Overview

This workflow creates a chat-based Retrieval-Augmented Generation (RAG) agent that lets you upload documents to Google Drive and then query them directly through Telegram. It uses embeddings, vector storage, and an AI agent to retrieve, analyze, and answer user questions with context-aware responses.

🧩 Key Features

📂 Google Drive Integration

Watches a folder for new file uploads.

Downloads and loads documents automatically into the system.

🔎 Vector Embeddings & Storage

Uses OpenAI embeddings to transform documents into vectors.

Stores them in an in-memory vector store for retrieval.

🤖 AI Agent with Memory

Built on LangChain Agent + GPT-4.1-mini.

Performs similarity search in the vector store.

Provides contextual answers with citations from the uploaded documents.

Maintains short-term conversation memory for better continuity.

💬 Telegram Bot Integration

Users can send questions directly to the bot.

AI agent retrieves relevant information and replies with clear answers.

⚙️ How It Works

Trigger: Upload a file into the Google Drive folder.

Processing: Workflow downloads the file → loads → embeds → stores in vector memory.

Query: User sends a question via Telegram.

Retrieval & Response: AI agent searches stored documents → analyzes results → returns summarized answer in Telegram.

🔐 Requirements

Google Drive OAuth credentials.

OpenAI API key (for embeddings + LLM).

Telegram Bot API token.

📥 Use Cases

📑 Knowledge base assistant – Upload internal docs and query them in chat.

🏫 Learning support – Students upload study materials and ask questions.

📊 Business intelligence – Teams upload reports and get instant summaries.

More templet: https://auton8n.pw/

## 📊 Basic Information

- **Workflow ID:** 8147
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 825
- **Downloads:** 82
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8147)

## 👤 Author

- **Name:** DuyTran
- **Username:** @duytran82

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleDriveTrigger** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×2)
- **telegramTrigger** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
