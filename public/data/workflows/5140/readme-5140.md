# Build and update RAG system with Google Drive, Qdrant, and Gemini Chat

> This workflow automates the creation and management of a Retrieval-Augmented Generation (RAG) system using Qdrant as a vector store and Google Drive as the document source. It **enables full or incremental updates to documents** in the Qdrant vector database and integrates with a chatbot using Google Gemini for question answering.

Here is a clear and professional description in English of the n8n workflow **“Create a RAG with Qdrant and update single files”**, including its benefits:


---

### **Benefits**

* **Efficient RAG Setup**
  Seamlessly integrates OpenAI, Qdrant, and Google Drive to create a scalable RAG pipeline.

* **Single File Update**
  You can replace the vector representation of a single file without reprocessing the entire collection—ideal for maintaining document freshness.

* **Flexible File Source**
  Works with Google Drive, allowing document management and updates from a familiar interface.
---

### **How It Works**  
This workflow is designed to create a Retrieval-Augmented Generation (RAG) system using Qdrant as a vector store and Google Drive as a document source. It consists of four main phases:  

- **Collection Setup**:  
  - Creates or clears a Qdrant collection to store vectorized documents.  
  - Configures the collection with cosine distance metrics and other parameters.  

- **Document Processing**:  
  - Retrieves files from a specified Google Drive folder.  
  - Downloads and processes each file (text extraction, chunking, and embedding using OpenAI).  
  - Stores the embeddings in Qdrant for vector search.  

- **Single-File Update**:  
  - Allows updating or deleting a specific file in the Qdrant collection by referencing its Google Drive ID.  
  - Re-embeds the file and updates the vector store.  

- **RAG Querying**:  
  - Uses a chat trigger to receive user questions.  
  - Retrieves relevant documents from Qdrant using vector similarity.  
  - Generates answers using Google Gemini as the language model.  

---

### **Set Up Steps**  

1. **Configure Qdrant**:  
   - Replace `QDRANTURL` and `COLLECTION` in the "Create collection" and "Clear collection" HTTP nodes.  
   - Ensure Qdrant API credentials are correctly set in the credentials section.  

2. **Google Drive Integration**:  
   - Specify the Google Drive folder ID in the "Get files" node.  
   - Ensure Google Drive OAuth credentials are configured.  

3. **OpenAI and Gemini Keys**:  
   - Add OpenAI API credentials for embeddings (used in "Embeddings OpenAI" nodes).  
   - Configure Google Gemini credentials for the chat model.  

4. **Single-File Update**:  
   - Set the `file_id` in the "Edit Fields3" node to target a specific Google Drive file for updates.  

5. **Testing**:  
   - Trigger the workflow manually to populate the Qdrant collection.  
   - Use the chat interface to test RAG responses.  
   
---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 

## 📊 Basic Information

- **Workflow ID:** 5140
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 6935
- **Downloads:** 693
- **Created:** 2025/6/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5140)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** (×2)
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×3)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** (×2)
- **splitInBatches** 
- **wait** 
- **stickyNote** (×5)
- **googleDrive** (×3)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.chainRetrievalQa** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.retrieverVectorStore** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
