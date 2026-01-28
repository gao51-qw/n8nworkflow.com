# Build a knowledge base chatbot with OpenAI, RAG and MongoDB vector embeddings

> ### Who is this for?

This template is designed for internal support teams, product specialists, and knowledge managers in technology companies who want to automate ingestion of product documentation and enable AI-driven, retrieval-augmented question answering.

### What problem is this workflow solving?
Support agents often spend too much time manually searching through lengthy documentation, leading to inconsistent or delayed answers. This solution automates importing, chunking, and indexing product manuals, then uses retrieval-augmented generation (RAG) to answer user queries accurately and quickly with AI.

### What these workflows do
**Workflow 1**: Document Ingestion & Indexing
Manually triggered to import product documentation from Google Docs.

Automatically splits large documents into chunks for efficient searching.

Generates vector embeddings for each chunk using OpenAI embeddings.

Inserts the embedded chunks and metadata into a MongoDB Atlas vector store, enabling fast semantic search.

**Workflow 2**: AI-Powered Query & Response
Listens for incoming user questions (can be extended to webhook).

Converts questions to vector embeddings and performs similarity search on MongoDB vector store.

Uses OpenAI’s GPT-4o-mini model with retrieval-augmented generation to produce direct, context-aware answers.

Maintains short-term conversation context using a memory buffer node.

### Setup
**Setting up vector embeddings**
Authenticate Google Docs and connect your Google Docs URL containing the product documentation you want to index.

Authenticate MongoDB Atlas and connect the collection where you want to store the vector embeddings. Create a search index on this collection to support vector similarity queries.

Ensure the index name matches the one configured in n8n (data_index).

See the example MongoDB search index template below for reference.

**Setting up chat**
Configure the AI system prompt in the “Knowledge Base Agent” node to reflect your company’s tone, answering style, and any business rules.

Update the workflow description and instructions to help users understand the chat’s purpose and capabilities.

Connect the MongoDB collection used for vector search in the chat workflow and update the vector search index if needed to match your setup.

### Make sure
Both MongoDB nodes (in ingestion and chat workflows) are connected to the same collection, with:

An embedding field storing vector data,

Relevant metadata fields (e.g., document ID, source), and

The same vector index name configured (e.g., data_index).



**Search Index Example:**
{
  "mappings": {
    "dynamic": false,
    "fields": {
      "_id": {
        "type": "string"
      },
      "text": {
        "type": "string"
      },
      "embedding": {
        "type": "knnVector",
        "dimensions": 1536,
        "similarity": "cosine"
      },
      "source": {
        "type": "string"
      },
      "doc_id": {
        "type": "string"
      }
    }
  }
}


## 📊 Basic Information

- **Workflow ID:** 4526
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 13113
- **Downloads:** 1311
- **Created:** 2025/5/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4526)

## 👤 Author

- **Name:** NovaNode
- **Username:** @thomasgpt

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.vectorStoreMongoDBAtlas** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **googleDocs** 
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
