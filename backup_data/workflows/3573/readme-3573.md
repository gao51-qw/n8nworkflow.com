# Create a RAG system with Paul Essays, Milvus, and OpenAI for cited answers

> ### Create a RAG System with Paul Essays, Milvus, and OpenAI for Cited Answers

This workflow automates the process of creating a document-based AI retrieval system using [Milvus](https://milvus.io/), an open-source vector database. It consists of two main steps:

1. Data collection/processing
2. Retrieval/response generation

The system scrapes [Paul Graham essays](https://paulgraham.com/articles.html), processes them, and loads them into a Milvus vector store. When users ask questions, it retrieves relevant information and generates responses with citations.

### Step 1: Data Collection and Processing

1. Set up a Milvus server using the [official guide](https://milvus.io/docs/install_standalone-docker.md)
2. Create a collection named "my_collection"
3. Execute the workflow to scrape Paul Graham essays:
   - Fetch essay lists
   - Extract names
   - Split content into manageable items
   - Limit results (if needed)
   - Fetch texts
   - Extract content
   - Load everything into Milvus Vector Store

This step uses [OpenAI embeddings](https://platform.openai.com/docs/guides/embeddings) for vectorization.

### Step 2: Retrieval and Response Generation

When a chat message is received, the system:

* Sets chunks to send to the model
* Retrieves relevant information from the Milvus Vector Store
* Prepares chunks
* Answers the query based on those chunks
* Composes citations
* Generates a comprehensive response

This process uses OpenAI embeddings and models to ensure accurate and relevant answers with proper citations.

For more information on vector databases and similarity search, visit [Milvus documentation](https://milvus.io/docs).


## 📊 Basic Information

- **Workflow ID:** 3573
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 2171
- **Downloads:** 217
- **Created:** 2025/4/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3573)

## 👤 Author

- **Name:** Cheney Zhang
- **Username:** @zc277584121

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **html** (×2)
- **splitOut** 
- **limit** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **code** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.vectorStoreMilvus** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
