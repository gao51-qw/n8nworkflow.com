# Dual-path customer support system with Google Sheets, vectors & Gemini

> 
#### This n8n workflow template implements a dual-path architecture for AI customer support, based on the principles outlined in the research paper "[A Locally Executable AI System for Improving Preoperative Patient Communication: A Multi-Domain Clinical Evaluation](https://arxiv.org/abs/2510.01671)" (Sato et al.).


The system, named **LENOHA** (Low Energy, No Hallucination, Leave No One Behind Architecture), uses a high-precision classifier to differentiate between high-stakes queries and casual conversation. Queries matching a known FAQ are answered with a pre-approved, verbatim response, structurally eliminating hallucination risk. All other queries are routed to a standard generative LLM for conversational flexibility.

This template provides a **practical ++blueprint++** for building safer, more reliable, and cost-efficient AI agents, particularly in **regulated** or **high-stakes domains** where factual accuracy is critical.

### What This Template Does (Step-by-Step)
- Loads an expert-curated FAQ from Google Sheets and creates a searchable vector store from the questions during a one-time setup flow.
- Receives incoming user queries in real-time via a chat trigger.
- Classifies user intent by converting the query to an embedding and searching the vector store for the most semantically similar FAQ question.
- Routes the query down one of two paths based on a configurable similarity score threshold.
- Responds with a verbatim, pre-approved answer if a match is found (safe path), or generates a conversational reply via an LLM if no match is found (casual path).



### Important Note for Production Use
This template uses an in-memory Simple Vector Store for demonstration purposes. For a production application, this should be replaced with a persistent vector database (e.g., Pinecone, Chroma, Weaviate, Supabase) to store your embeddings permanently.

### Required Integrations:
- Google Sheets (for the FAQ knowledge base)
- Hugging Face API (for creating embeddings)
- An LLM provider (e.g., OpenAI, Anthropic, Mistral)
- (Recommended) A persistent Vector Store integration.

### Best For:
🏦 Organizations in regulated industries (finance, healthcare) requiring high accuracy.
💰 Applications where reducing LLM operational costs is a priority.
⚙️ Technical support agents that must provide precise, unchanging information.
🔒 Systems where auditability and deterministic responses for known issues are required.

### Key Benefits:
✅ Structurally eliminates hallucination risk for known topics.
✅ Reduces reliance on expensive generative models for common queries.
✅ Ensures deterministic, accurate, and consistent answers for your FAQ.
✅ Provides high-speed classification via vector search.
✅ Implements a research-backed architecture for building safer AI systems.

## 📊 Basic Information

- **Workflow ID:** 9775
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 185
- **Downloads:** 18
- **Created:** 2025/10/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9775)

## 👤 Author

- **Name:** Maxim Osipovs
- **Username:** @maximosipovs

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.embeddingsHuggingFaceInference** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.chat** (×2)
- **stickyNote** (×5)
- **googleSheets** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×2)
- **if** 
- **merge** 
- **@n8n/n8n-nodes-langchain.googleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
