🧠 This workflow is designed for one purpose only, to bulk-upload structured JSON articles from an FTP server into a Qdrant vector database for use in LLM-powered semantic search, RAG systems, or AI assistants.

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