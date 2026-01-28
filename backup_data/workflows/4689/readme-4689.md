# Build a chatbot with Reinforced Learning Human Feedback (RLHF) and RAG

> ### Who is this for?
This template is designed for internal support teams, product specialists, and knowledge managers who want to build an AI-powered knowledge assistant with retrieval-augmented generation (RAG) and reinforcement learning from human feedback (RLHF) via Telegram.

### What problem is this workflow solving?
Manual knowledge management and answering support queries can be time-consuming and error-prone. This solution automates importing and indexing official documentation into MongoDB vector search and enhances AI responses with Telegram-based user feedback to continuously improve answer quality.

### What these workflows do
#### Workflow 1: Document ingestion & indexing
- Manually triggered workflow imports product documentation from Google Docs.
- Documents are split into manageable chunks and embedded using OpenAI embeddings.
- Embedded document chunks are stored in MongoDB Atlas vector store to enable semantic search.

#### Workflow 2: Telegram chat with RLHF feedback loop
- Listens for user messages via Telegram bot integration.
- Uses vector similarity search on MongoDB to retrieve relevant documentation chunks.
- Generates answers with OpenAI GPT-4o-mini model using retrieval-augmented generation.
- Sends answers back via Telegram and waits for user feedback (approval or disapproval).
- Captures feedback, maps it as positive or negative, and stores it with the conversation data for future model improvement.

### Setup
#### Setting up vector embeddings
1. Authenticate Google Docs and connect your Google Docs URL containing the product documentation you want to index.
2. Authenticate MongoDB Atlas and connect the collection where you want to store the vector embeddings. Create a search index on this collection to support vector similarity queries. 
3. Ensure the index name matches the one configured in n8n (data_index). 
4. See the example MongoDB search index template below for reference.

#### Setting up chat with Telegram RLHF
1. Create a bot in Telegram with @botFather using the /newbot command.
2. Connect the MongoDB database and search index used for vector search in the previous workflow. Also create two new collections in MongoDB Atlas: one for feedback and one for chat history. Create a search index for feedback, copying the provided template.
3. Configure the AI system prompt in the “Knowledge Base Agent” node, making sure it references all three tools connected (productDocs, feedbackPositive, feedbackNegative) as provided in the template prompt.
### Make sure
- Product documentation and feedback collections must connect to the same MongoDB database.
- There are three distinct MongoDB collections: one for product documentation, one for feedback, and one for chat history (chat history collection can be separate).
- Telegram API credentials are valid and webhook URLs are correctly set up.

### MongoDB Search Index Templates
#### Documentation Collection Index

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

#### Feedback Collection Index

{
  "mappings": {
    "dynamic": false,
    "fields": {
      "prompt": {
        "type": "string"
      },
      "response": {
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
      "feedback": {
        "type": "token"
      }
    }
  }
}

## 📊 Basic Information

- **Workflow ID:** 4689
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 6035
- **Downloads:** 603
- **Created:** 2025/6/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4689)

## 👤 Author

- **Name:** NovaNode
- **Username:** @thomasgpt

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×5)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** (×2)
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** (×2)
- **googleDocs** 
- **stickyNote** (×3)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.memoryMongoDbChat** 
- **@n8n/n8n-nodes-langchain.vectorStoreMongoDBAtlas** (×5)
- **telegramTrigger** 
- **telegram** 
- **code** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
