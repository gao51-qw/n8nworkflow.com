# Build a PDF Q&A system with LlamaIndex, OpenAI embeddings & Pinecone vector DB

> ## Parse, Normalize, Extract, and Store PDF Content for RAG in Pinecone

This workflow automates a full RAG pipeline for structured documents (like insurance policies).  

### What it does
- Watches a Google Drive folder for new PDFs  
- Uploads to LlamaIndex Cloud for parsing → returns clean Markdown  
- Normalizes text (removes headers, footers, page numbers, formatting artifacts)  
- Splits text into chunks (~1200 chars with 150 overlap)  
- Generates embeddings with OpenAI  
- Stores vectors in Pinecone with metadata  
- Connects a Chat Agent that retrieves answers from Pinecone  

### Who’s it for
- Developers building **chatbots or Q&A systems** for structured docs  
- Teams working with **insurance, compliance, or legal PDFs**  
- Anyone who needs to **normalize & store documents for semantic search**  

### Requirements
- Google Drive connected (for source PDFs)  
- LlamaIndex Cloud account (parsing API key)  
- Pinecone account (vector DB)  
- OpenAI account (LLM and embeddings) 

### How to use and customize
* Update the folder name in google drive trigger node. 
* Place a pdf file in the same folder in google drive.  
* Customize the `Normalized Content` function node to adjust regex for headers/footers specific to your documents.  
* Adjust chunk size or metadata namespace in the Pinecone node to fit your project needs.  

---


## 📊 Basic Information

- **Workflow ID:** 7717
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 551
- **Downloads:** 55
- **Created:** 2025/8/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7717)

## 👤 Author

- **Name:** Alok Kumar
- **Username:** @alokkumar

## 🏷️ Categories

- AI RAG
- Multimodal AI

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **stickyNote** (×5)
- **wait** (×2)
- **if** 
- **httpRequest** (×3)
- **code** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
