# Build a ServiceNow knowledge chatbot with OpenAI and Qdrant RAG

> 


### **1. Data Ingestion Workflow (Left Panel – Pink Section)**

This part collects data from the ServiceNow Knowledge Article table, processes it into embeddings, and stores it in Qdrant.

#### **Steps:**

1. **Trigger: When clicking ‘Execute workflow’**

   * The workflow starts manually when you click *Execute workflow* in n8n.

2. **Get Many Table Records**

   * Fetches multiple records from the ServiceNow Knowledge Article table.
   * Each record typically contains knowledge article content that needs to be indexed.

3. **Default Data Loader**

   * Takes the fetched data and structures it into a format suitable for text splitting and embedding generation.

4. **Recursive Character Text Splitter**

   * Splits large text (e.g., long knowledge articles) into smaller, manageable chunks for embeddings.
   * This step ensures that each text chunk can be properly processed by the embedding model.

5. **Embeddings OpenAI**

   * Uses OpenAI’s Embeddings API to convert each text chunk into a high-dimensional vector representation.
   * These embeddings are essential for semantic search in the vector database.

6. **Qdrant Vector Store**

   * Stores the generated embeddings along with metadata (e.g., article ID, title) in the Qdrant vector database.
   * This database will later be used for similarity searches during chatbot interactions.

---

### **2. RAG Chatbot Workflow (Right Panel – Green Section)**

This section powers the Retrieval-Augmented Generation (RAG) chatbot that retrieves relevant information from Qdrant and responds intelligently.

#### **Steps:**

1. **Trigger: When chat message received**

   * Starts when a user sends a chat message to the system.

2. **AI Agent**

   * Acts as the orchestrator, combining memory, tools, and LLM reasoning.
   * Connects to the OpenAI Chat Model and Qdrant Vector Store.

3. **OpenAI Chat Model**

   * Processes user messages and generates responses, enriched with context retrieved from Qdrant.

4. **Simple Memory**

   * Stores conversational history or context to ensure continuity in multi-turn conversations.

5. **Qdrant Vector Store1**

   * Performs a similarity search on stored embeddings using the user’s query.
   * Retrieves the most relevant knowledge article chunks for the chatbot.

6. **Embeddings OpenAI**

   * Converts user query into embeddings for vector search in Qdrant.



## 📊 Basic Information

- **Workflow ID:** 6206
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 824
- **Downloads:** 82
- **Created:** 2025/7/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6206)

## 👤 Author

- **Name:** Tushar Mishra
- **Username:** @yajna

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **serviceNow** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
