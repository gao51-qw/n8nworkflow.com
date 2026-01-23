# Automated Gmail support agent with Gemini 2.5, RAG & Cohere reranking

> # AI Email Support Agent with RAG & Cohere Reranking

Transform your inbox into an intelligent support system: automatically detect new emails, retrieve relevant knowledge from Pinecone, rerank with Cohere for precision, generate contextual replies using Gemini AI, and respond—all while maintaining conversation history.

## What It Does

This workflow triggers on incoming Gmail messages, leverages a LangChain agent with PostgreSQL memory for context, queries a Pinecone vector store (RAG) enhanced by Cohere reranking and OpenAI embeddings, crafts personalized responses via Gemini 2.5, and auto-replies to keep support flowing.

## Key Features

- **Gmail Integration** - Real-time polling for new emails every minute
- **RAG with Pinecone** - Retrieves top 10 relevant docs from "agency-info" index as agent tool
- **Cohere Reranking** - Boosts retrieval accuracy by reordering results semantically
- **Persistent Memory** - Postgres chat history keyed by email ID for ongoing threads
- **Gemini-Powered Agent** - Handles queries with custom system prompt for agency support
- **Seamless Auto-Reply** - Sends formatted text responses directly in Gmail

## Perfect For

- **Agencies**: Automate client FAQs on services, pricing, and ownership
- **Support Teams**: Scale responses without losing conversation context
- **Small Businesses**: Handle inquiries 24/7 with AI-driven accuracy
- **Developers**: Prototype RAG agents with vector stores and rerankers
- **Marketers**: Personalize outreach replies based on knowledge base
- **Consultants**: Quick, informed answers from internal docs

## Technical Highlights

Built on n8n's LangChain ecosystem, this workflow highlights:
- Trigger-to-response pipeline with polling and webhooks
- Hybrid retrieval: Embeddings + vector search + semantic reranking
- Stateful agents with database-backed memory for multi-turn chats
- Multi-provider setup: OpenAI (embeddings), Cohere (rerank), Google (LLM)
- Scalable for production with configurable topK and session keys

## Setup Instructions

### Prerequisites
- n8n instance with LangChain nodes enabled
- Accounts for: Gmail (OAuth2), OpenAI (API key), Cohere (API key), Google Gemini (API key), Pinecone (API key and index), Postgres (database connection, e.g., Neon or Supabase)

### Required Credentials
#### Gmail OAuth2
1. Enable Gmail API in Google Cloud Console
2. Create OAuth2 credential in n8n with scopes: `https://www.googleapis.com/auth/gmail.readonly`, `https://www.googleapis.com/auth/gmail.send`

#### OpenAI API
1. Get API key from platform.openai.com
2. Add as OpenAI credential in n8n

#### Cohere API
1. Sign up at cohere.com
2. Copy API key to n8n Cohere credential

#### Google Gemini API
1. Generate key at https://aistudio.google.com/
2. Add as Google PaLM credential in n8n (compatible with Gemini)

#### Pinecone API
1. Create index "agency-info" with dimension 1024
2. Add API key to n8n Pinecone credential

#### Postgres
1. Set up database (e.g., Neon/Supabase) with a table for chat history
2. Add connection details (host, database, user, password) to n8n Postgres credential

### Configuration Steps
1. Import the workflow JSON into your n8n instance
2. Assign all required credentials to the respective nodes
3. Populate the Pinecone "agency-info" index with your knowledge base documents (use a separate upsert workflow or Pinecone dashboard)
4. Customize the `tableName` in the Postgres Memory node if needed (default: "email_support_agent_")
5. Adjust the agent's system prompt or topK retrieval if required for your use case
6. Activate the workflow and test by sending a sample email to trigger it

## Troubleshooting
- **No trigger firing**: Verify Gmail scopes and polling interval
- **Empty retrieval**: Check Pinecone index population, dimensions (must be 1024), and document embeddings
- **Rerank errors**: Ensure Cohere API key is valid and has sufficient quota
- **Memory issues**: Confirm Postgres connection and that `sessionKey` uses email ID

Perfect for deploying hands-off email automation. Import, connect credentials, and activate!

## 📊 Basic Information

- **Workflow ID:** 9382
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 210
- **Downloads:** 21
- **Created:** 2025/10/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9382)

## 👤 Author

- **Name:** Daniel Nkencho
- **Username:** @daniel-automates

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.rerankerCohere** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
