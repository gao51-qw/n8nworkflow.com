# Process OCR documents from Google Drive into searchable knowledge base with OpenAI & Pinecone

> ## How it works
This workflow automates a full RAG ingestion pipeline. When a new OCR JSON file is added to a Google Drive folder, the workflow extracts lesson metadata, parses and cleans the Arabic text, generates semantic chunks, creates AI embeddings, and stores them in a Pinecone vector index. After processing, the file is automatically moved to an archive folder to prevent duplicates.

## Set up steps
Follow the sticky notes inside the workflow for detailed instructions.

1. Connect your Google Drive credentials.
2. Replace the input folder ID and archive folder ID with your own.
3. Connect your OpenAI account for embeddings.
4. Connect your Pinecone API key and select your index.

The workflow is ready to run once credentials and folder paths are configured.


## 📊 Basic Information

- **Workflow ID:** 11653
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 144
- **Downloads:** 14
- **Created:** 2025/12/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11653)

## 👤 Author

- **Name:** osama goda
- **Username:** @osamagoda

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **stickyNote** (×5)
- **googleDriveTrigger** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
