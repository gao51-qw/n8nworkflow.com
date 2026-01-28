# 🤖 Simple RAG Customer Support Chatbot

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

