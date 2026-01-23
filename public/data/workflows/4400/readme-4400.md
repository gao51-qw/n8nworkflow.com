# Build a PDF Document RAG System with Mistral OCR, Qdrant and Gemini AI

> This workflow is designed to **process PDF documents** using **Mistral's OCR** capabilities, store the extracted text in a Qdrant vector database, and enable Retrieval-Augmented Generation (**RAG**) for answering questions. Here’s how it functions:  

Once configured, the workflow automates document ingestion, vectorization, and intelligent querying, enabling powerful RAG applications.

---

### **Benefits**

* **End-to-End Automation**
  No manual interaction is needed: documents are read, processed, and made queryable with minimal setup.

* **Scalable and Modular**
  The workflow uses subflows and batching, making it easy to scale and customize.

* **Multi-Model Support**
  Combines Mistral for OCR, OpenAI for embeddings, and Gemini for intelligent answering—taking advantage of the strengths of each.

* **Real-Time Q\&A**
  With RAG integration, users can query document content through natural language and receive accurate responses grounded in the PDF data.

* **Light or Full Mode**
  Users can choose to index full page content or only summarized text, optimizing for either performance or richness.

---

### **How It Works** 

1. **PDF Processing with Mistral OCR**:  
   - The workflow starts by uploading a PDF file to Mistral's API, which performs OCR to extract text and metadata.  
   - The extracted content is split into manageable chunks (e.g., pages or sections) for further processing.  

2. **Vector Storage in Qdrant**:  
   - The extracted text is converted into embeddings using OpenAI's embedding model.  
   - These embeddings are stored in a Qdrant vector database, enabling efficient similarity searches for RAG.  

3. **Question-Answering with RAG**:  
   - When a user submits a question via a chat interface, the workflow retrieves relevant text chunks from Qdrant using vector similarity.  
   - A language model (Google Gemini) generates answers based on the retrieved context, providing accurate and context-aware responses.  

4. **Optional Summarization**:  
   - The workflow includes an optional summarization step using Google Gemini to condense the extracted text for faster processing or lighter RAG usage.  

---

### **Set Up Steps**  
To deploy this workflow in n8n, follow these steps:  

1. **Configure Qdrant Database**:  
   - Replace `QDRANTURL` and `COLLECTION` in the "Create collection" and "Refresh collection" nodes with your Qdrant instance details.  
   - Ensure the Qdrant collection is configured with the correct vector size (e.g., 1536 for OpenAI embeddings) and distance metric (e.g., Cosine).  

2. **Set Up Credentials**:  
   - Add credentials for:  
     - **Mistral Cloud API** (for OCR processing).  
     - **OpenAI API** (for embeddings).  
     - **Google Gemini API** (for chat and summarization).  
     - **Google Drive** (if sourcing PDFs from Drive).  
     - **Qdrant API** (for vector storage).  

3. **PDF Source Configuration**:  
   - If using Google Drive, specify the folder ID in the "Search PDFs" node.  
   - Alternatively, modify the workflow to accept PDFs from other sources (e.g., direct uploads or external APIs).  

4. **Customize Text Processing**:  
   - Adjust chunk size and overlap in the "Token Splitter" node to optimize for your document type.  
   - Choose between raw text or summarized content for RAG by toggling between the "Set page" and "Summarization Chain" nodes.  

5. **Test the RAG**:  
   - Trigger the workflow manually or via a chat message to verify OCR, embedding, and Qdrant storage.  
   - Use the "Question and Answer Chain" node to test query responses.  

6. **Optional Sub-Workflows**:  
   - The workflow supports execution as a sub-workflow for batch processing (e.g., handling multiple PDFs).  

----
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 

## 📊 Basic Information

- **Workflow ID:** 4400
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 41620
- **Downloads:** 4162
- **Created:** 2025/5/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4400)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **httpRequest** (×5)
- **manualTrigger** 
- **splitInBatches** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterTokenSplitter** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.chainRetrievalQa** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.retrieverVectorStore** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **code** 
- **wait** 
- **executeWorkflow** 
- **executeWorkflowTrigger** 
- **set** (×3)
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **googleDrive** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
