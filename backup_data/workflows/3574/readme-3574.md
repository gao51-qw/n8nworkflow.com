# Create a Paul Graham essay Q&A system with OpenAI and Milvus vector database

> ### Create a Paul Graham Essay Q&A System with OpenAI and Milvus Vector Database
#### How It Works

This workflow creates a question-answering system based on Paul Graham essays. It has two main steps:

1. **Data Collection & Processing**: 
   - Scrapes [Paul Graham essays](http://www.paulgraham.com/articles.html)
   - Extracts text content
   - Loads them into a [Milvus](https://milvus.io/) vector store

2. **Chat Interaction**:
   - Provides a question-answering interface using the stored vector embeddings
   - Utilizes [OpenAI embeddings](https://platform.openai.com/docs/guides/embeddings) for semantic search

#### Set Up Steps

1. Set up a Milvus server following the [official guide](https://milvus.io/docs/install_standalone-docker.md)
2. Create a collection named "my_collection"
3. Run the workflow to scrape and load Paul Graham essays
4. Start chatting with the QA system

The workflow handles the entire process from fetching essays, extracting content, generating embeddings via OpenAI, storing vectors in Milvus, and providing retrieval for question answering.

## 📊 Basic Information

- **Workflow ID:** 3574
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1144
- **Downloads:** 114
- **Created:** 2025/4/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3574)

## 👤 Author

- **Name:** Cheney Zhang
- **Username:** @zc277584121

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **manualTrigger** 
- **httpRequest** (×2)
- **html** (×2)
- **splitOut** 
- **limit** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.vectorStoreMilvus** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.chainRetrievalQa** 
- **@n8n/n8n-nodes-langchain.retrieverVectorStore** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
