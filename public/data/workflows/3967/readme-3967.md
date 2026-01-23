# Build an on-premises AI Kaggle competition assistant with Qdrant RAG and Ollama

> # LLM/RAG Kaggle Development Assistant

An on-premises, domain-specific AI assistant for Kaggle (tested on binary disaster-tweet classification), combining LLM, an n8n workflow engine, and Qdrant-backed Retrieval-Augmented Generation (RAG).
Deploy via containerized starter kit.
Needs high end GPU support or patience.
Initial chat should contain guidelines on what to to produce and the challenge guidelines.
---
##  Features

- **Coding Assistance**  
  • "Real"-time Python code recommendations, debugging help, and data-science best practices  
  • Multi-turn conversational context
- **Workflow Automation**  
  • n8n orchestration for LLM calls, document ingestion, and external API integrations  
- **Retrieval-Augmented Generation (RAG)**  
  • Qdrant vector-database for competition-specific document lookup  
  • On-demand retrieval of Kaggle competition guidelines, tutorials, and notebooks after convertion to HTML and ingestion into RAG
- **entirly On-Premises for Privacy**  
  • Locally hosted LLM (via Ollama) – no external code or data transfer  

ALIENTELLIGENCE/contentsummarizer:latest for summarizing
qwen3:8b for chat and coding
mxbai-embed-large:latest for embedding
  
  • GPU acceleration required

Based on:
https://n8n.io/workflows/2339 breakdown documents into study notes using templating mistralai and qdrant/

## 📊 Basic Information

- **Workflow ID:** 3967
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 4393
- **Downloads:** 439
- **Created:** 2025/5/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3967)

## 👤 Author

- **Name:** JHH
- **Username:** @jac2325057

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **localFileTrigger** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **set** 
- **merge** 
- **switch** 
- **readWriteFile** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **markdown** 
- **@n8n/n8n-nodes-langchain.embeddingsOllama** (×2)
- **@n8n/n8n-nodes-langchain.lmOllama** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
