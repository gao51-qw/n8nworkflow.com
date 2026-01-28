# Chat with your email history using Telegram, Mistral and Pgvector for RAG

> # Who is this for?

**Everyone!** Did you dream of asking an AI "*what hotel did I stay in for holidays last summer?*" or "*what were my marks last semester like?*".

Dream no more, as [vector similarity searches](https://www.pinecone.io/learn/vector-embeddings/) and **this workflow** are the foundations to make it possible (as long as the information appears in your e-mails 😅).

## 100% Local and Open Source!

This workflow is designed to use locally-hosted open source. **Ollama** as LLM provider, `nomic-embed-text` as the embeddings model, and **pgvector** as the vector database engine, on top of **Postgres**.

## Structured AND Vectorized

This workflow combines *structured* **and** *semantic* search on your e-mail.

No need for enterprise setups!
Leverage the convenience of n8n and open source to get a **bleeding edge** solution.

## Setup

1. You will need a **PGVector database** with embeddings for all your email. Use my other template [Gmail to Vector Embeddings with PGVector and Ollama](https://n8n.io/workflows/3762-gmail-to-vector-embeddings-with-pgvector-and-ollama/) to set it up in a breeze!
2. Make a copy of my [Email Assistant: Convert Natural Language to SQL Queries with Phi4-mini and PostgreSQL](https://n8n.io/workflows/3761-email-assistant-convert-natural-language-to-sql-queries-with-phi4-mini-and-postgresql/), you will need it for structured searches.
3. Install this template and modify the *Call the SQL composer Workflow* step, to point at your copy of the SQL workflow.
4. Adjust the rest of necessary steps: *Telegram Trigger*, *AI Chat model*, *AI Embeddings*...

**Activate the workflow** and chat around!



## 📊 Basic Information

- **Workflow ID:** 3763
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 4102
- **Downloads:** 410
- **Created:** 2025/4/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3763)

## 👤 Author

- **Name:** Alfonso Corretti
- **Username:** @acorretti

## 🏷️ Categories

- Personal Productivity
- AI RAG

## 🔗 Nodes Used

- **telegramTrigger** 
- **splitInBatches** 
- **if** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.vectorStorePGVector** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.embeddingsOllama** 
- **set** (×2)
- **code** (×2)
- **telegram** 
- **noOp** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
