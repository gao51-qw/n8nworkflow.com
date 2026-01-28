*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This comprehensive RAG workflow enables your AI agents to answer user questions with contextual knowledge pulled from your own documents — using metadata-rich embeddings stored in Supabase.

🔧 Key Features:
RAG Agents powered by GPT-4.5 or GPT-3.5 via OpenRouter or OpenAI.

Supabase Vector Store to store and retrieve document embeddings.

Cohere Reranker to improve response relevance and quality.

Metadata Agent to enrich vectorized data before ingestion.

PDF Extraction Flow to automatically parse and upload documents with metadata.

✅ Setup Steps:
Connect your Supabase Vector Store.

Use OpenAI Embeddings (e.g. text-embedding-3-small).

Add API keys for OpenAI and/or OpenRouter.

Connect a reranker like Cohere.

Process documents with metadata before embedding.

Start chatting — your AI agent now returns context-rich answers from your own knowledge base!

Perfect for building AI assistants that can reason, search and answer based on internal company data, academic papers, support docs, or personal notes.