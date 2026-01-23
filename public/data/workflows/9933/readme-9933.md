# Multi-format document processing for RAG chatbot with Google Drive & Supabase

> This n8n workflow is the data ingestion pipeline for the "RAG System V2" chatbot. It automatically monitors a specific Google Drive folder for new files, processes them based on their type, and inserts their content into a Supabase vector database to make it searchable for the RAG agent.

Key Features & Workflow:

Google Drive Trigger: The workflow starts automatically when a new file is created in a designated folder (named "DOCUMENTS" in this template).

Smart File Handling: A Switch node routes the file based on its MIME type (e.g., PDF, Excel, Google Doc, Word Doc) for correct processing.

Multi-Format Extraction:

PDF: Text is extracted directly using the Extract PDF Text node.

Google Docs: Files are downloaded and converted to plain text (text/plain) and processed by the Extract from Text File node.

Excel: Data is extracted, aggregated, and concatenated into a single text block for embedding.

Word (.doc/.docx): Word files are automatically converted into Google Docs format using an HTTP Request. This newly created Google Doc will then trigger the entire workflow again, ensuring it's processed correctly.

Chunking & Metadata Enrichment: The extracted text is split into manageable chunks using the Recursive Character Text Splitter (set to 2000-character chunks). The Enhanced Default Data Loader then enriches these chunks with crucial metadata from the original file, such as file_name, creator, and created_at.

Vectorization & Storage: Finally, the workflow uses OpenAI Embeddings to create vector representations of the text chunks and inserts them into the Supabase Vector Store.

## 📊 Basic Information

- **Workflow ID:** 9933
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 491
- **Downloads:** 49
- **Created:** 2025/10/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9933)

## 👤 Author

- **Name:** edisantosa
- **Username:** @edsan

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **aggregate** 
- **summarize** 
- **extractFromFile** (×3)
- **httpRequest** 
- **googleDrive** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **stickyNote** (×2)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **googleDriveTrigger** 
- **switch** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
