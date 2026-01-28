# Build a RAG system for PDF documents with Google Drive, Unstructured, and OpenAI

> This template monitors a Google Drive folder, converts PDF documents into clean text chunks with Unstructured, generates OpenAI embeddings, and upserts vectors into Pinecone. It’s a practical, production-ready starting point for Retrieval-Augmented Generation (RAG) that you can plug into a chatbot, semantic search, or internal knowledge tools.

## How it works
1) Google Drive Trigger detects new files in a selected folder and downloads them.
2) The files are sent to Unstructured where they are split into smaller pieces (chunks).
3) The chunks are prepared to be sent to OpenAI where they are converted into vectors (embeddings).
4) The embeddings are recombined with their original data and the payload is prepared for upsert into the Pinecone index.

## Set up steps
1) In Pinecone, create an index with 1536 dimensions and configure it for `text-embedding-3-small`.
2) Copy the host url and paste it on the 'Pinecone Upsert' node. It should look something like this: https://{your-index-name}.pinecone.io/vectors/upsert.
3) Add Google Drive, OpenAI and Pinecone credentials in n8n.
4) Point the trigger to your ingest folder (you can use [this article](https://drive.google.com/file/d/1dLlFEYfwecVJA2bwH9tWzG_K9bdesKVM/view) for demo).
5) Click the 'Open chat' button and enter the following: _Which Git provider do the authors use?_

## 📊 Basic Information

- **Workflow ID:** 10577
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 317
- **Downloads:** 31
- **Created:** 2025/11/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10577)

## 👤 Author

- **Name:** Tomas Lubertino
- **Username:** @tluber

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **httpRequest** (×3)
- **code** (×3)
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **set** 
- **googleDrive** 
- **googleDriveTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
