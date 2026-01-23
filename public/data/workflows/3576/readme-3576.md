# Paul Graham essay search & chat with Milvus vector database

> ## Paul Graham Essay Search & Chat with Milvus Vector Database
### How It Works

This workflow creates a RAG (Retrieval-Augmented Generation) system using [Milvus](https://milvus.io/) vector database to search Paul Graham essays:

1. **Scrape & Load**: Fetches [Paul Graham essays](https://paulgraham.com/articles.html), extracts text, and stores them as vector embeddings in Milvus
2. **Chat Interface**: Enables semantic search and AI-powered conversations about the essays

### Set Up Steps

1. Set up Milvus server following the [official installation guide](https://milvus.io/docs/install_standalone-docker.md), then create a collection
2. Execute the workflow to scrape essays and load them into your Milvus collection
3. Chat with the AI agent using the Milvus tool to query and discuss essay content


## 📊 Basic Information

- **Workflow ID:** 3576
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 1425
- **Downloads:** 142
- **Created:** 2025/4/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3576)

## 👤 Author

- **Name:** Cheney Zhang
- **Username:** @zc277584121

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **html** (×2)
- **splitOut** 
- **limit** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.vectorStoreMilvus** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
