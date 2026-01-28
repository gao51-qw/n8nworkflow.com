# AI-powered WhatsApp chatbot for text, voice, images, and PDF with RAG

> ### Who is this for?
This template is designed for internal support teams, product specialists, and knowledge managers in technology companies who want to automate ingestion of product documentation and enable AI-driven, retrieval-augmented question answering via WhatsApp.

### What problem is this workflow solving?
Support agents often spend too much time manually searching through lengthy documentation, leading to inconsistent or delayed answers. This solution automates importing, chunking, and indexing product manuals, then uses retrieval-augmented generation (RAG) to answer user queries accurately and quickly with AI via WhatsApp messaging.

### What these workflows do

#### Workflow 1: Document Ingestion & Indexing

- Manually triggered to import product documentation from Google Docs.
- Automatically splits large documents into chunks for efficient searching.
- Generates vector embeddings for each chunk using OpenAI embeddings.
- Inserts the embedded chunks and metadata into a MongoDB Atlas vector store, enabling fast semantic search.

#### Workflow 2: AI-Powered Query & Response via WhatsApp

- Listens for incoming WhatsApp user messages, supporting various types:
	- Text messages: Plain text queries from users.
	- Audio messages: Voice notes transcribed into text for processing.
	- Image messages: Photos or screenshots analyzed to provide contextual answers.
	- Document messages: PDFs, spreadsheets, or other files parsed for relevant content.
- Converts incoming queries to vector embeddings and performs similarity search on the MongoDB vector store.
- Uses OpenAI’s GPT-4o-mini model with retrieval-augmented generation to produce concise, context-aware answers.
- Maintains conversation context across multiple turns using a memory buffer node.
- Routes different message types to appropriate processing nodes to maximize answer quality.

### Setup

#### Setting up vector embeddings

1. Authenticate Google Docs and connect your Google Docs URL containing the product documentation you want to index.
2. Authenticate MongoDB Atlas and connect the collection where you want to store the vector embeddings. Create a search index on this collection to support vector similarity queries.
3. Ensure the index name matches the one configured in n8n (data_index).
4. See the example MongoDB search index template below for reference.

#### Setting up chat

1. Authenticate the WhatsApp node with your Meta account credentials to enable message receiving and sending.
2. Connect the MongoDB collection containing embedded product documentation to the MongoDB Vector Search node used for similarity queries.
3. Set up the system prompt in the Knowledge Base Agent node to reflect your company’s tone, answering style, and any business rules, ensuring it references the connected MongoDB collection for context retrieval.

### Make sure

Both MongoDB nodes (in ingestion and chat workflows) are connected to the same collection with:

An embedding field storing vector data,

Relevant metadata fields (e.g., document ID, source), and

The same vector index name configured (e.g., data_index).

### Search Index Example:

{
  "mappings": {
    "dynamic": false,
    "fields": {
      "_id": { "type": "string" },
      "text": { "type": "string" },
      "embedding": {
        "type": "knnVector",
        "dimensions": 1536,
        "similarity": "cosine"
      },
      "source": { "type": "string" },
      "doc_id": { "type": "string" }
    }
  }
}

## 📊 Basic Information

- **Workflow ID:** 4827
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 151719
- **Downloads:** 15171
- **Created:** 2025/6/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4827)

## 👤 Author

- **Name:** NovaNode
- **Username:** @thomasgpt

## 🏷️ Categories

- Support Chatbot
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
- **whatsAppTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **extractFromFile** (×3)
- **set** (×4)
- **code** 
- **whatsApp** (×5)
- **httpRequest** (×3)
- **switch** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
