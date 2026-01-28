# Build a document QA system with RAG using Milvus, Cohere, and OpenAI for Google Drive

> 

### Template Description

This template creates a powerful Retrieval Augmented Generation (RAG) AI agent workflow in [n8n](https://n8n.partnerlinks.io/5xf5bs8y3ruv). It monitors a specified Google Drive folder for new PDF files, extracts their content, generates vector embeddings using Cohere, and stores these embeddings in a Milvus vector database. Subsequently, it enables a RAG agent that can retrieve relevant information from the Milvus database based on user queries and generate responses using OpenAI, enhanced by the retrieved context.

### Functionality

The workflow automates the process of ingesting documents into a vector database for use with a RAG system.

 1. **Watch New Files:** Triggers when a new file (specifically targeting PDFs) is added to a designated Google Drive folder.

 2. **Download New:** Downloads the newly added file from Google Drive.

 3. **Extract from File:** Extracts text content from the downloaded PDF file.

 4. **Default Data Loader / Set Chunks:** Processes the extracted text, splitting it into manageable chunks for embedding.

 5. **Embeddings Cohere:** Generates vector embeddings for each text chunk using the Cohere API.

 6. **Insert into Milvus:** Inserts the generated vector embeddings and associated metadata into a Milvus vector database.

 7. **When chat message received:** Adapt the trigger tool to fit your needs. 
 8. **RAG Agent:** Orchestrates the RAG process.

 9. **Retrieve from Milvus:** Queries the Milvus database with the user's chat query to find the most relevant chunks.

10. **Memory:** Manages conversation history for the RAG agent to optimize cost and response speed.

11. **OpenAI / Cohere embeddings:** Uses ChatGPT 4o for text generation.

### Requirements

To use this template, you will need:

* An [n8n instance](https://n8n.partnerlinks.io/5xf5bs8y3ruv) (cloud or self-hosted).

* Access to a Google Drive account to monitor a folder.

* A Milvus instance or access to a Milvus cloud service like [Zilliz](https://zilliz.com). 

* A [Cohere](https://cohere.com) API key for generating embeddings.

* An OpenAI API key for the RAG agent's text generation.

### Usage

1. Set up the required credentials in n8n for Google Drive, Milvus, Cohere, and OpenAI.

2. Configure the "Watch New Files" node to point to the Google Drive folder you want to monitor for PDFs.

3. Ensure your Milvus instance is running and the target cluster is set up correctly.

4. Activate the workflow.

5. Add PDF files to the monitored Google Drive folder. The workflow will automatically process them and insert their embeddings into Milvus.

6. Interact with the RAG agent. The agent will use the data in Milvus to provide context-aware answers.

### Benefits

* Automates document ingestion for RAG applications.

* Leverages Milvus for high-performance vector storage and search.

* Uses Cohere for generating high-quality text embeddings.

* Enables building a context-aware AI agent using your own documents.

### Suggested improvements
* **Support for More File Types:** Extend the "Watch New Files" node and subsequent extraction steps to handle various document types (e.g., .docx, .txt, .csv, web pages) in addition to PDFs.

* **Error Handling and Notifications:** Implement robust error handling for each step of the workflow (e.g., failed downloads, extraction errors, Milvus insertion failures) and add notification mechanisms (e.g., email, Slack) to alert the user.

### Get in touch with us

Contact us at [https://1node.ai](https://1node.ai) 

## 📊 Basic Information

- **Workflow ID:** 3848
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 3393
- **Downloads:** 339
- **Created:** 2025/5/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3848)

## 👤 Author

- **Name:** Aitor | 1Node
- **Username:** @aitoralonso

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.embeddingsCohere** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **googleDriveTrigger** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.vectorStoreMilvus** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **extractFromFile** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
