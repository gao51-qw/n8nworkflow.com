# Index Documents from Google Drive to Pinecone with OpenAI Embeddings for RAG

> 🧠 Google Drive Upload Trigger → Pinecone Vector Upsert for Document Indexing
Category: AI & LLM / Document Indexing
Level: Intermediate
Tags: Google Drive, Pinecone, OpenAI, Embeddings, Vector Store, LangChain, RAG

📄 What This Workflow Does
This workflow watches a specific Google Drive folder and automatically uploads any newly added document to a Pinecone vector database — complete with OpenAI-generated embeddings.

Perfect for setting up retrieval-augmented generation (RAG) pipelines, semantic search, or document Q&A systems. Once configured, your knowledge base stays up-to-date with zero manual effort.

Watch Full Step By Stey Tutorial Video Here:
https://www.youtube.com/@Automatewithmarc

🔧 How It Works
📁 Google Drive Trigger
Watches a specific folder and triggers when new documents are uploaded.

🔍 Google Drive File Search & Download
Finds and fetches all files in the folder.

🔄 Loop Over Each File
Handles batch processing for multiple files.

📃 Document Loader
Parses each file as binary and applies custom metadata like document type.

✂️ Text Splitter
Breaks content into manageable chunks for embedding (e.g., 600 characters, 60 overlap).

🧠 OpenAI Embeddings
Generates vector embeddings using OpenAI.

📦 Pinecone Vector Store
Inserts/upserts documents into a specific Pinecone namespace for search-ready indexing.

🧠 Why This is Useful
This is a production-grade setup for:

Building vector search tools over internal docs

Feeding up-to-date data into RAG agents or chatbots

Auto-tagging and chunking files for scalable AI workflows

Whether you’re indexing course outlines, SOPs, or technical docs — this automation keeps your vector store fresh and organized.

🪜 Setup Instructions
Connect your Google Drive, OpenAI, and Pinecone accounts.

Specify the Google Drive folder to monitor.

Customize metadata, chunk size, or vector namespace as needed.

Activate the workflow and drop a file into the folder — magic happens behind the scenes.

📌 Notes
Works best with PDFs or text-based documents.

You can swap out OpenAI with other embedding models if needed.

Consider adding notifications or logging (e.g., via Slack or email) for better observability.

## 📊 Basic Information

- **Workflow ID:** 4552
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 3592
- **Downloads:** 359
- **Created:** 2025/6/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4552)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **googleDrive** (×2)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **googleDriveTrigger** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
