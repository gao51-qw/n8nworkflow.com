# Loading JSON via FTP to Qdrant vector database embedding pipeline

> 🧠 This workflow is designed for one purpose only, to bulk-upload structured JSON articles from an FTP server into a Qdrant vector database for use in LLM-powered semantic search, RAG systems, or AI assistants.

The JSON files are pre-cleaned and contain metadata and rich text chunks, ready for vectorization. This workflow handles
- Downloading from FTP
- Parsing & splitting
- Embedding with OpenAI-embedding
- Storing in Qdrant for future querying

#### JSON structure format for blog articles
```json
{
  "id": "article_001",
  "title": "reseguider",
  "language": "sv",
  "tags": ["london", "resa", "info"],
  "source": "alltomlondon.se",
  "url": "https://...",
  "embedded_at": "2025-04-08T15:27:00Z",
  "chunks": [
    {
      "chunk_id": "article_001_01",
      "section_title": "Introduktion",
      "text": "Välkommen till London..."
    },
    ...
  ]
}
```

### 🧰 Benefits
✅ Automated Vector Loading
Handles FTP → JSON → Qdrant in a hands-free pipeline.

✅ Clean Embedding Input
Supports pre-validated chunks with metadata: titles, tags, language, and article ID.

✅ AI-Ready Format
Perfect for Retrieval-Augmented Generation (RAG), semantic search, or assistant memory.

✅ Flexible Architecture
Modular and swappable: FTP can be replaced with GDrive/Notion/S3, and embeddings can switch to local models like Ollama.

✅ Community Friendly
This template helps others adopt best practices for vector DB feeding and LLM integration.

## 📊 Basic Information

- **Workflow ID:** 3495
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1682
- **Downloads:** 168
- **Created:** 2025/4/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3495)

## 👤 Author

- **Name:** Ghaith Alsirawan
- **Username:** @gsirawan

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter** 
- **stickyNote** (×5)
- **ftp** (×2)
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
