# Customer support chatbot with RAG using OpenAI and Pinecone

> # 🤖 Simple RAG Customer Support Chatbot

## 📋 Overview

This intelligent customer support chatbot leverages Retrieval-Augmented Generation (RAG) to provide accurate, contextual responses by combining your knowledge base with AI capabilities. The system automatically retrieves relevant documents from your Pinecone vector store and uses them to generate informed responses through OpenAI's language models.

## ⚡ Quick Setup

1. Import Workflow
Import this workflow template into your n8n instance
2. Configure Credentials
Add the following API credentials:

- OpenAI API Key: For chat completions and embeddings
- Pinecone API Key: For vector database operations
- Google Drive: For document auto ingestion

3. Initialize Vector Store
Use the "Insert documents into Pinecone" workflow to populate your knowledge base
5. Activate Workflow
Enable the main chat workflow to start receiving requests

## 🔧 How it Works

**Main Chat Flow (Agent Workflow)**

User Message → Memory Retrieval → Vector Search → Context Assembly → AI Response → Memory Update → Response

**Process Flow:**

Message Reception: Webhook receives user chat messages with session management
Memory Retrieval: Loads conversation history for context continuity
Semantic Search: Queries Pinecone vector store for relevant documents
Context Assembly: Combines retrieved documents with conversation history
AI Generation: OpenAI generates contextual response using assembled context
Memory Storage: Updates conversation memory for future interactions
Response Delivery: Returns formatted response to user interface

**Document Ingestion Flow**

Document Source → Text Extraction → Chunking → Embedding → Vector Storage

**Process Flow:**

Document Trigger: Google Drive or manual file upload detection
Content Extraction: Extracts text from various file formats (PDF, DOC, TXT)
Text Chunking: Splits documents into optimal chunks for embedding
Embedding Generation: Creates vector embeddings using OpenAI
Vector Storage: Stores embeddings in Pinecone with metadata
Index Update: Updates search index for immediate availability



## 📊 Basic Information

- **Workflow ID:** 7561
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1610
- **Downloads:** 161
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7561)

## 👤 Author

- **Name:** Ilyass Kanissi
- **Username:** @ilyass

## 🏷️ Categories

- AI RAG
- Multimodal AI

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.rerankerCohere** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
