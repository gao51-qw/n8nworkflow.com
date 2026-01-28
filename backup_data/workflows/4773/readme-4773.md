# Build a document-based AI chatbot with Google Drive, Llama 3, and Qdrant RAG

> **Overview**
This template allows users to set up an AI-powered chatbot that retrieves and processes knowledge from Google Drive documents using Retrieval-Augmented Generation (RAG). By leveraging Llama 3 for natural language responses and Qdrant vector storage for document embeddings, this chatbot provides accurate, context-aware answers based on stored files.

**Problem It Solves**
Standard AI chatbots often rely on predefined models with limited real-time knowledge access. This workflow overcomes that limitation by:

Automatically fetching new documents from Google Drive.

Embedding knowledge for fast retrieval using Qdrant.

Generating human-like responses with Llama 3 AI.

Providing accurate, source-backed answers in conversations.

**Use Cases**
✔️ Customer Support – Retrieve and summarize FAQs stored in Google Drive. ✔️ Internal Knowledge Base – Automate document-based query responses. ✔️ AI-powered Research Assistant – Search and generate insights from uploaded files. ✔️ Business Automation – Enhance workflows with document-aware chat interactions.

**Setup Instructions**
1️⃣ Google Drive Trigger: Detect & Fetch New Documents
Watches for new files added to a specific Google Drive folder.

Retrieves the latest file metadata and passes it into the workflow.

2️⃣ Processing & Embedding the Document
The document is downloaded via the Google Drive node.

Text data is split into smaller, retrievable chunks using Recursive Text Splitter.

Embeddings are created using Ollama’s Nomic-Embed Model.

Knowledge is stored in Qdrant Vector Database for fast AI-powered lookup.

3️⃣ AI Chatbot & Query Handling
The Chat Trigger node listens for user queries.

The AI Agent retrieves context-aware answers by searching Qdrant’s vectorized documents.

The Llama 3 Model generates human-like responses based on stored knowledge.

**Detailed Workflow Explanation**
🔹 Google Drive Trigger
✅ Monitors a specific folder for new documents. ✅ Automatically fetches document metadata when a file is uploaded.

🔹 Qdrant Vector Store
✅ Stores embedded document text, making retrieval instant & accurate. ✅ Allows the chatbot to reference stored knowledge dynamically.

🔹 Recursive Text Splitter
✅ Splits long documents into manageable chunks for efficient embedding. ✅ Improves chatbot response accuracy by organizing document data.

🔹 Llama 3 Chat Model
✅ Generates natural, human-like replies using AI. ✅ Uses retrieved document data for context-aware responses.

**Customization Options**
🔹 Adjust polling frequency for document updates. 🔹 Expand knowledge base by adding more storage sources. 🔹 Refine chatbot responses with prompt tuning in Llama 3.


## 📊 Basic Information

- **Workflow ID:** 4773
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 626
- **Downloads:** 62
- **Created:** 2025/6/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4773)

## 👤 Author

- **Name:** Mohsin
- **Username:** @mohsinobsidian

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.embeddingsOllama** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
