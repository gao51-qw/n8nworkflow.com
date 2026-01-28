# Supabase insertion & upsertion & retrieval

> This is a demo workflow to showcase how to use Supabase to embed a document, retrieve information from the vector store via chat and update the database. 

## Setup steps:
- set your credentials for Supabase
- set your credentials for an AI model of your choice
- set credentials for any service you want to use to upload documents
- please follow the guidelines in the workflow itself (Sticky Notes)

## Feedback & Questions

If you have any questions or feedback about this workflow - Feel free to get in touch at [ria@n8n.io](mailto:ria@n8n.io)

## 📊 Basic Information

- **Workflow ID:** 2395
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 28832
- **Downloads:** 2883
- **Created:** 2024/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2395)

## 👤 Author

- **Name:** Ria
- **Username:** @riascho

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **googleDrive** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.chainRetrievalQa** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.retrieverVectorStore** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×3)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×3)
- **supabase** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
