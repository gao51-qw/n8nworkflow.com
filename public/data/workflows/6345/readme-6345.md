# Answer questions from documents with RAG using Supabase, OpenAI & Cohere reranker

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

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

## 📊 Basic Information

- **Workflow ID:** 6345
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 1254
- **Downloads:** 125
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6345)

## 👤 Author

- **Name:** Luan Correia
- **Username:** @luanstartflow

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **googleDrive** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **extractFromFile** 
- **code** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **@n8n/n8n-nodes-langchain.rerankerCohere** (×2)
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×3)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×3)
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
