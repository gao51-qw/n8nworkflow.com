# Create RAG vector database from Google Drive documents using Gemini & Supabase

> ## How it works

This workflow automates the process of converting Google Drive documents into searchable vector embeddings for AI-powered applications:

• Takes a Google Drive folder URL as input
• Initializes a Supabase vector database with pgvector extension
• Fetches all files from the specified Drive folder
• Downloads and converts each file to plain text
• Generates 768-dimensional embeddings using Google Gemini
• Stores documents with embeddings in Supabase for semantic search

**Built for the Study Agent workflow** to power document-based Q&A, but also works perfectly for any RAG system, AI chatbot, knowledge base, or semantic search application that needs to query document collections.

## Set up steps

**Prerequisites:**
• Google Drive OAuth2 credentials
• Supabase account with Postgres connection details
• Google Gemini API key (free tier available)

**Setup time:** ~10 minutes

**Steps:**
1. Add your Google Drive OAuth2 credentials to the Google Drive nodes
2. Configure Supabase Postgres credentials in the SQL node
3. Add Supabase API credentials to the Vector Store node
4. Add Google Gemini API key to the Embeddings node
5. Update the input with your Drive folder URL
6. Execute the workflow

**Note:** The SQL query will drop any existing "documents" table, so backup data if needed. Detailed node-by-node instructions are in the sticky notes within the workflow.

**Works with:** Study Agent (main use case), custom AI agents, chatbots, documentation search, customer support bots, or any RAG application.


## 📊 Basic Information

- **Workflow ID:** 10651
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 451
- **Downloads:** 45
- **Created:** 2025/11/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10651)

## 👤 Author

- **Name:** Mantaka Mahir
- **Username:** @mantakamahir

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **postgres** 
- **code** 
- **executeWorkflowTrigger** 
- **stickyNote** (×7)
- **splitInBatches** 
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
