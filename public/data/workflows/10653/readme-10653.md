# AI study assistant with RAG - Google Gemini with Drive & Supabase vector search

> ## How it works

A complete AI-powered study assistant system that lets you chat naturally with your documents stored in Google Drive:

**The system has two connected workflows:**

**1. Document Indexing Pipeline (Sub-workflow):**
• Accepts Google Drive folder URLs
• Automatically fetches all files from the folder
• Converts documents to plain text
• Generates 768-dimensional embeddings using Google Gemini
• Stores everything in Supabase vector database for semantic search

**2. Study Chat Agent (Main workflow):**
• Provides a conversational chat interface
• Automatically detects and processes Google Drive links shared in chat
• Searches your indexed documents using semantic similarity
• Maintains conversation history across sessions
• Includes calculator for math problems
• Responds naturally using Google Gemini 2.5 Pro

**Use Cases:** Students studying for exams, researchers managing papers, professionals building knowledge bases, anyone needing to query large document collections conversationally.

## Set up steps

**Prerequisites:**
• Google Drive OAuth2 credentials
• Google Gemini API key (free tier available)
• Supabase account with Postgres connection
• ~15 minutes setup time

**Complete Setup:**

**Part 1: Document Indexing Workflow**
1. Add Google Drive OAuth2 credentials to the Drive nodes
2. Configure Supabase Postgres credentials in the SQL node
3. Add Supabase API credentials to the Vector Store node
4. Add Google Gemini API key to the Embeddings node

**Part 2: Study Agent Workflow**
1. Import the Study Agent workflow
2. Verify the "Folder all file to vector" tool links to the indexing workflow
3. Add Google Gemini API credentials to both Gemini nodes
4. Configure Supabase API credentials in the Vector Store node
5. Add Postgres credentials for Chat Memory
6. Deploy and access the chat via webhook URL

**How to Use:**
1. Open the chat interface (webhook URL)
2. Paste a Google Drive folder link in the chat
3. Wait for indexing to complete (~1-2 minutes)
4. Start asking questions about your documents
5. The AI will search and answer from your materials

**Note:** The indexing workflow runs automatically when you share Drive links in chat, or you can run it manually to pre-load documents.

**System Components:**
- **Main Agent:** Gemini 2.5 Pro with conversational AI
- **Vector Search:** Supabase with pgvector (768-dim embeddings)
- **Memory:** Postgres chat history (10-message context window)
- **Tools:** Document retrieval, Drive indexing, calculator
- **Embedding Model:** Google Gemini text-embedding-004


## 📊 Basic Information

- **Workflow ID:** 10653
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 801
- **Downloads:** 80
- **Created:** 2025/11/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10653)

## 👤 Author

- **Name:** Mantaka Mahir
- **Username:** @mantakamahir

## 🏷️ Categories

- Personal Productivity
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×11)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **postgres** 
- **code** 
- **executeWorkflowTrigger** 
- **splitInBatches** 
- **googleDrive** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
