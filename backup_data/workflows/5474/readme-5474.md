# Airline web check-in data extraction with Ollama AI, Google Sheets & Postgres Vector DB

> ## Overview

This workflow retrieves airline web check-in URLs from Google Sheets, scrapes their content, employs an LLM to generate structured JSON data, refreshes the sheet, creates embeddings, and saves them in a Postgres vector DB for future semantic searches or question-answering.

### Quick Notes

- Verify that Google Sheets has accurate URLs for scraping.  
- Ensure the Postgres vector DB is set up correctly for embedding storage.

### Process Flow

1. Start the workflow with the `Chat Trigger - Start` node.  
2. Retrieve airline check-in URLs using the `Fetch Airline URLs` node.  
3. Scrape webpage data with the `Scrape Airline Webpage` node.  
4. Extract JSON data using the `Extract info with LLM` node with a Chat Model.  
5. Pause for a response with the `Wait for Response` node.  
6. Update Google Sheets with the `Store Extracted Data` node.  
7. Create embeddings with the `Generate Embeddings` node and store in Postgres vector DB with the `Save to Vector DB` node.  
8. Break down long text with the `Split Long Text` node and delay the next batch with the `Wait Before Next Batch` node.

### Getting Started

- Import the workflow into n8n and set up Google Sheets and Postgres vector DB credentials.  
- Run a test with a sample URL to confirm scraping and embedding storage.

### Tailored Adjustments

Tweak the `Extract info with LLM` node to adjust JSON output or modify the `Fetch Airline URLs` node to pull from different sheet fields.

## 📊 Basic Information

- **Workflow ID:** 5474
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1106
- **Downloads:** 110
- **Created:** 2025/6/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5474)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **splitInBatches** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **wait** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOllama** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterTokenSplitter** 
- **@n8n/n8n-nodes-langchain.vectorStorePGVector** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
