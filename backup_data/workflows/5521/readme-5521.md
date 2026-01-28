# Process documents with recursive chunking using Google Drive, OpenAI & Gemini RAG

> **1. Document Ingestion & Processing**

Google Drive Trigger monitors for new files → Loop Over Items processes each file → File Info extracts metadata → Google Drive downloads the actual content → Switch routes to appropriate extractors (PDF or TEXT) based on file type

**2. Content Transformation & Chunking**

Document Data node processes extracted text → Recursive Splitter breaks content into contextual chunks → Chunk Splitting applies intelligent segmentation while preserving document context and relationships between chunks

**3. Embedding & Storage**

Basic LLM Chain processes chunks → OpenAI Chat Model generates contextual understanding → Summarize creates document summaries → Supabase Vector Store saves embeddings with metadata → Embeddings OpenAI creates vector representations → Default Data Loader handles storage operations

**4. Query Processing & Retrieval**

When Clicking Execute triggers user queries → OpenAI processes and understands the question → AI Agent orchestrates hybrid search (combining vector similarity + keyword matching) → Google Gemini Chat Model generates final responses using retrieved context → HTTP Request handles additional external data sources

## 📊 Basic Information

- **Workflow ID:** 5521
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 2463
- **Downloads:** 246
- **Created:** 2025/7/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5521)

## 👤 Author

- **Name:** Mohsin Ali
- **Username:** @binbakhsh

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **splitInBatches** 
- **googleDrive** 
- **switch** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **summarize** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×2)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** (×3)
- **extractFromFile** (×2)
- **code** 
- **splitOut** 
- **httpRequestTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
