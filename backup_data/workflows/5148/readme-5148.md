# Local chatbot with retrieval augmented generation (RAG)

> ## Build a 100% local RAG with n8n, Ollama and Qdrant. This agent uses a semantic database (Qdrant) to answer questions about PDF files.

## Tutorial
![thumbnail.png](fileId:1589)
[Click here to view the YouTube Tutorial](https://youtu.be/maZ_fF57yhE)

## How it works
Build a chatbot that answers based on documents you provide it (Retrieval Augmented Generation). You can upload as many PDF files as you want to the Qdrant database. The chatbot will use its retrieval tool to fetch the chunks and use them to answer questions.

## Installation
1. Install n8n + Ollama + Qdrant using the [Self-hosted AI starter kit](https://github.com/n8n-io/self-hosted-ai-starter-kit)
2. Make sure to install Llama 3.2 and mxbai-embed-large as embeddings model.

## How to use it
1. First run the "Data Ingestion" part and upload as many PDF files as you want
2. Run the Chatbot and start asking questions about the documents you uploaded


## 📊 Basic Information

- **Workflow ID:** 5148
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 94542
- **Downloads:** 9454
- **Created:** 2025/6/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5148)

## 👤 Author

- **Name:** Thomas Janssen
- **Username:** @thomasjanssen-tech

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOllama** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
