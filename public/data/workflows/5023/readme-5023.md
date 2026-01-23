# Build a RAG system with automatic citations using Qdrant, Gemini & OpenAI

> 
This workflow implements a **Retrieval-Augmented Generation (RAG)** system that:

* Stores vectorized documents in **Qdrant**,
* Retrieves relevant content based on user input,
* Generates AI answers using **Google Gemini**,
* Automatically **cites the document sources** (from Google Drive).

---

### **Workflow Steps**

1. **Create Qdrant Collection**
   A REST API node creates a new collection in Qdrant with specified vector size (1536) and cosine similarity.

2. **Load Files from Google Drive**
   The workflow lists all files in a Google Drive folder, downloads them as plain text, and loops through each.

3. **Text Preprocessing & Embedding**

   * Documents are split into chunks (500 characters, with 50-character overlap).
   * Embeddings are created using **OpenAI embeddings** (`text-embedding-3-small` assumed).
   * Metadata (file name and ID) is attached to each chunk.

4. **Store in Qdrant**
   All vectors, along with metadata, are inserted into the Qdrant collection.

5. **Chat Input & Retrieval**

   * When a chat message is received, the question is embedded and matched against Qdrant.
   * Top 5 relevant document chunks are retrieved.
   * A Gemini model is used to generate the answer based on those sources.

6. **Source Aggregation & Response**

   * File IDs and names are deduplicated.
   * The AI response is combined with a list of cited documents (filenames).
   * Final output:

     ```
     AI Response

     Sources: ["Document1", "Document2"]
     ```

---

### **Main Advantages**

* **End-to-end Automation**: From document ingestion to chat response generation, fully automated with no manual steps.
* **Scalable Knowledge Base**: Easy to expand by simply adding files to the Google Drive folder.
* **Traceable Responses**: Each answer includes its source files, increasing transparency and trustworthiness.
* **Modular Design**: Each step (embedding, storage, retrieval, response) is isolated and reusable.
* **Multi-provider AI**: Combines OpenAI (for embeddings) and Google Gemini (for chat), optimizing performance and flexibility.
* **Secure & Customizable**: Uses API credentials and configurable chunk size, collection name, etc.

---


### **How It Works**  
1. **Document Processing & Vectorization**  
   - The workflow retrieves documents from a specified Google Drive folder.  
   - Each file is downloaded, split into chunks (using a recursive text splitter), and converted into embeddings via OpenAI.  
   - The embeddings, along with metadata (file ID and name), are stored in a Qdrant vector database under the collection `negozio-emporio-verde`.  

2. **Query Handling & Response Generation**  
   - When a user submits a chat message, the workflow:  
     - Embeds the query using OpenAI.  
     - Retrieves the top 5 relevant document chunks from Qdrant.  
     - Uses Google Gemini to generate a response based on the retrieved context.  
     - Aggregates and deduplicates the source file names from the retrieved chunks.  
   - The final output includes both the AI-generated response and a list of source documents (e.g., `Sources: ["FAQ.pdf", "Policy.txt"]`).  

---  

### **Set Up Steps**  
1. **Configure Qdrant Collection**  
   - Replace `QDRANTURL` and `COLLECTION` in the **"Create collection"** HTTP node to initialize the Qdrant collection with:  
     - Vector size: `1536` (OpenAI embedding dimension).  
     - Distance metric: `Cosine`.  
   - Ensure the **"Clear collection"** node is configured to reset the collection if needed.  

2. **Google Drive & OpenAI Integration**  
   - Link the Google Drive node to the target folder (`Test Negozio` in this example).  
   - Verify OpenAI and Google Gemini API credentials are correctly set in their respective nodes.  

3. **Metadata & Output Customization**  
   - Adjust the **"Aggregate"** and **"Response"** nodes if additional metadata fields are needed.  
   - Modify the **"Output"** node to format the response (e.g., changing `Sources: {{...}}` to match your preferred style).  

4. **Testing**  
   - Trigger the workflow manually to test document ingestion.  
   - Use the chat interface to verify responses include accurate source attribution.  

**Note**: Replace placeholder values (e.g., `QDRANTURL`) with actual endpoints before deployment.

---
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 

## 📊 Basic Information

- **Workflow ID:** 5023
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 2588
- **Downloads:** 258
- **Created:** 2025/6/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5023)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×3)
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **splitInBatches** 
- **wait** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.chainRetrievalQa** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.retrieverVectorStore** 
- **merge** 
- **aggregate** 
- **googleDrive** (×2)
- **set** (×2)
- **code** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
