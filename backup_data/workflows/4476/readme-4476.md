# AI-powered knowledge assistant using Google Sheets, OpenAI, and Supabase Vector Search

> Description
An intelligent conversational AI system that provides contextual responses by combining chat history, vector database knowledge retrieval, and web search capabilities.
How it Works (High-level steps)

Message Detection: Google Sheets trigger monitors for new user messages and filters out already-processed entries
Context Preparation: Extracts user message, retrieves chat history, and formats conversation context with system prompt
Knowledge Retrieval: AI agent searches vector database for relevant context using Supabase + OpenAI embeddings
Response Generation: LangChain agent processes the request using:

OpenAI GPT-4 language model
Vector store tool for knowledge base queries
SerpAPI tool for web search when needed
Buffer memory for conversation continuity


Response Storage: Updates Google Sheets with AI response and assigns unique timestamp ID

Setup Steps

Configure Google Sheets with columns: user_message, ai_respond, id
Set up Supabase vector store with OpenAI embeddings
Connect OpenAI API credentials (GPT-4 + embeddings)
Configure SerpAPI for web search functionality
Set up Google Sheets trigger and update permissions

## 📊 Basic Information

- **Workflow ID:** 4476
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 528
- **Downloads:** 52
- **Created:** 2025/5/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4476)

## 👤 Author

- **Name:** Alex Huy
- **Username:** @alexhuy

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **set** 
- **function** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleSheetsTrigger** 
- **if** 
- **merge** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
