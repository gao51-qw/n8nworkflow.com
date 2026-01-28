# 📚 Chat with Internal Documents (RAG AI Agent)
## ✅ Features
- Answers should given only within provided text.
- Chat interface powered by LLM (Ollama)
- Retrieval-Augmented Generation (RAG) using Supabase Vector DB
- Multi-format file support (PDF, Excel, Google Docs, text files)
- Automated file ingestion from Google Drive
- Real-time document update handling
- Embedding generation via Ollama for semantic search
- Memory-enabled agent using PostgreSQL
- Custom tools for document lookup with context-aware chat

## ⚙️ How It Works
### 📥 Document Ingestion & Vectorization
Watches a Google Drive folder for new or updated files.

Deletes old vector entries for the file.

Uses conditional logic to extract content from PDFs, Excel, Docs, or text

Summarizes and preprocesses content. (if needed)

Splits and embeds the text via Ollama.

Stores embeddings in Supabase Vector DB

### 💬 RAG Chat Agent
Chat is initiated via Webhook or built-in chat interface.

User input is passed to the RAG Agent.

Agent queries the User_documents tool (Supabase vector store) using the Ollama model to fetch relevant content.

If context is found, it answers directly.

Otherwise, it can call tools or request clarification.

Responses are returned to the user, with memory stored in PostgreSQL for continuity.

## 🛠 Supabase Database Configuration
1. Create a Supabase project at https://supabase.com and go to the SQL editor.

2. Create a documents table with the following schema:
- id - int8
- content	- text
- metadata - jsonb
- embedding - vector

3. Generate an API Key
