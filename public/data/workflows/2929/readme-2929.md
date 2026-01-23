# Smart email assistant: automate customer support with AI & Supabase

> # Intelligent Email Support System with Vector Database

## Overview

This **n8n workflow** automates email support using **AI and vector database technology** to provide smart, context-aware responses. It seamlessly integrates **email automation** and **document management**, ensuring efficient customer support.


## 📌 System Components

### ✉️ Email Support System

1. **Email Monitoring & Classification**

   - Gmail trigger node monitoring inbox
   - AI-powered email classification
   - Intelligent routing (support vs non-support inquiries)

2. **AI Response Generation**

   - LangChain agent for response automation
   - OpenAI integration for NLP-driven replies
   - Vector-based knowledge retrieval
   - Automated draft creation in Gmail

3. **Vector Database System**

   - Supabase vector store for document management
   - OpenAI embeddings for vector conversion
   - Fast and efficient similarity search

### 📂 Document Management System

1. **Google Drive Integration**

   - Monitors specific folders for new/updated files
   - Automatic document processing
   - Supports various file formats

2. **Document Processing Pipeline**

   - Auto file download & text extraction
   - Smart text chunking for better indexing
   - Embedding generation via OpenAI
   - Storage in Supabase vector database

## 🔄 Workflow Processes

### 📧 Email Support Flow

1. Monitor Gmail inbox for new emails
2. AI classification of incoming messages
3. Route support emails to AI response generator
4. Perform vector similarity search for knowledge retrieval
5. Generate personalized AI-driven response
6. Create email drafts in Gmail

### 📁 Document Management Flow

1. Monitor Google Drive for new/updated files
2. Auto-download and process documents
3. Clean up outdated vector entries for updated files
4. Extract and split document text efficiently
5. Generate OpenAI embeddings
6. Store processed data in Supabase vector DB

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites

- **Supabase** account & project
- **OpenAI API key**
- **Gmail account** with OAuth2 setup
- **Google Drive API** access
- **n8n installation**

### 2️⃣ Supabase Database Setup

```sql
-- Create the vector extension
create extension if not exists vector;

-- Create the documents table
create table documents (
  id bigserial primary key,
  content text,
  metadata jsonb,
  embedding vector(1536)
);

-- Create an index for similarity search
create index on documents using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);
```

### 3️⃣ Google Drive Setup

- Create & configure two monitored folders:
  - **RAG folder** for new documents
documents
- Assign correct folder permissions
- Add folder IDs to the workflow

### 4️⃣ Document Processing Configuration

- Set up triggers for **file creation** and **file updates**
- Configure text extraction:
  - Define chunk size & overlap settings
  - Set document metadata processing

## 🔍 Maintenance & Optimization

### 📌 Regular Tasks

- Monitor system performance
- Update the knowledge base regularly
- Review AI response quality
- Optimize vector search parameters
- Clean up outdated document embeddings

### ✅ Best Practices

1. **Document Organization**

   - Maintain structured folders & naming conventions
   - Keep knowledge base content updated

2. **System Optimization**

   - Track AI classification accuracy
   - Tune response times & chunk sizes
   - Perform regular database maintenance

### 🛠️ Troubleshooting

1. **Email Issues**

   - Verify Gmail API credentials
   - Check AI service uptime
   - Monitor classification performance

2. **Document Processing Issues**

   - Ensure correct file permissions
   - Validate extraction & embedding processes
   - Debug vector database insertions




## 📊 Basic Information

- **Workflow ID:** 2929
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 6516
- **Downloads:** 651
- **Created:** 2025/2/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2929)

## 👤 Author

- **Name:** Badr
- **Username:** @b4dr

## 🏷️ Categories

- Ticket Management
- AI RAG

## 🔗 Nodes Used

- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **switch** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **googleDrive** 
- **googleDriveTrigger** (×2)
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **supabase** 
- **set** 
- **gmailTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
