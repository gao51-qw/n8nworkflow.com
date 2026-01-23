# Basic RAG chat

> This workflow demonstrates a simple Retrieval-Augmented Generation (RAG) pipeline in n8n, split into two main sections:

🔹 Part 1: Load Data into Vector Store
Reads files from disk (or Google Drive).

Splits content into manageable chunks using a recursive text splitter.

Generates embeddings using the Cohere Embedding API.

Stores the vectors into an In-Memory Vector Store (for simplicity; can be replaced with Pinecone, Qdrant, etc.).

🔹 Part 2: Chat with the Vector Store
Takes user input from a chat UI or trigger node.

Embeds the query using the same Cohere embedding model.

Retrieves similar chunks from the vector store via similarity search.

Uses Groq-hosted LLM to generate a final answer based on the context.

🛠️ Technologies Used:
📦 Cohere Embedding API

⚡ Groq LLM for fast inference

🧠 n8n for orchestrating and visualizing the flow

🧲 In-Memory Vector Store (for prototyping)

🧪 Usage:
Upload or point to your source documents.

Embed them and populate the vector store.

Ask questions through the chat trigger node.

Receive context-aware responses based on retrieved content.



## 📊 Basic Information

- **Workflow ID:** 5028
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 4861
- **Downloads:** 486
- **Created:** 2025/6/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5028)

## 👤 Author

- **Name:** JustinLee
- **Username:** @justin

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.chainRetrievalQa** 
- **@n8n/n8n-nodes-langchain.retrieverVectorStore** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **readWriteFile** 
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsCohere** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGroq** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
