# Build & query RAG system with Google Drive, OpenAI GPT-4o-mini, and Pinecone

> 🔍 What This Workflow Does

This RAG Pipeline in n8n automates document ingestion from Google Drive, vectorizes it using OpenAI embeddings, stores it in Pinecone, and enables chat-based retrieval using LangChain agents.

Main Functions:

📂 Auto-detects new files uploaded to a specific Google Drive folder.
🧠 Converts the file into embeddings using OpenAI.
📦 Stores them in a Pinecone vector database.
💬 Allows a user to query the knowledge base through a chat interface.
🤖 Uses a GPT-4o-mini model with LangChain to generate intelligent responses using retrieved context.
⚙️ Setup Instructions

1. Connect Accounts
Ensure these services are connected in n8n:

✅ Google Drive (OAuth2)
✅ OpenAI
✅ Pinecone
You can do this in n8n &gt; Credentials &gt; New and use the matching names from the file:

Google Drive: "Google Drive account 2"
OpenAI: "OpenAi success"
Pinecone: "PineconeApi account 2"
2. Folder Setup
Upload your documents to this folder in Google Drive:

📁 Power Folder

The workflow is triggered every minute when a new file is uploaded.

3. Workflow Overview
A. File Ingestion Path

Google Drive Trigger — detects new file.
Google Drive (Download) — downloads the new file.
Recursive Text Splitter — splits text into chunks.
Default Data Loader — loads content as LangChain documents.
OpenAI Embeddings — converts text chunks into embeddings.
Pinecone Vector Store — stores them in "ragfile" index.
B. Chat Retrieval Path

When chat message received — 
AI Agent — LangChain agent managing tools.
OpenAI Chat Model (GPT-4o-mini) — generates replies.
Pinecone Vector Store (retrieval) — retrieves matching content.
Embeddings OpenAI1 — helps match queries to document chunks.



## 📊 Basic Information

- **Workflow ID:** 4501
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 4831
- **Downloads:** 483
- **Created:** 2025/5/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4501)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
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
