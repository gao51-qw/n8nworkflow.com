# Create RAG-ready knowledge bases from websites using Apify, Gemini & Supabase

> Convert any website into a searchable vector database for AI chatbots. Submit a URL, choose scraping scope, and this workflow handles everything: scraping, cleaning, chunking, embedding, and storing in Supabase.

   ## What it does
  - Scrapes websites using Apify (3 modes: full site unlimited, full site limited, single URL)
  - Cleans content (removes navigation, footer, ads, cookie banners, etc)
  - Chunks text (800 chars, markdown-aware)
  - Generates embeddings (Google Gemini, 768 dimensions)
  - Stores in Supabase vector database

  ## Requirements
  - Apify account + API token
  - Supabase database with pgvector extension
  - Google Gemini API key

  ## Setup
  1. Create Supabase `documents` table with embedding column (vector 768). *[Run this SQL query](https://docs.langchain.com/oss/javascript/integrations/vectorstores/supabase) in your Supabase project to enable the vector store setup* 
  2. Add your Apify API token to all three "Run Apify Scraper" nodes
  3. Add Supabase and Gemini credentials
  4. Test with small site (5-10 pages) or single page/URL first

  ## Next steps
  Connect your vector store to an AI chatbot for RAG-powered Q&A, or build semantic search features into your apps.

  **Tip:** Start with page limits to test content quality before full-site scraping. Review chunks in Supabase and adjust Apify filters if needed for better vector embeddings.

---


## Sample Outputs

**Apify actor "runs" in Apify Dashboard from this workflow**
![](https://i.postimg.cc/NMBqXSWs/Screenshot-2025-11-06-190813.png)


**Supabase `docuemnts` table with scraped website content ingested in chunks with vector embeddings**
![](https://i.postimg.cc/W4m0x8MG/Screenshot-2025-11-06-154326.png)


## 📊 Basic Information

- **Workflow ID:** 10565
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 220
- **Downloads:** 22
- **Created:** 2025/11/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10565)

## 👤 Author

- **Name:** Dean Pike
- **Username:** @deanjp

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.embeddingsGoogleGemini** 
- **code** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **set** (×2)
- **formTrigger** 
- **switch** 
- **httpRequest** (×3)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
