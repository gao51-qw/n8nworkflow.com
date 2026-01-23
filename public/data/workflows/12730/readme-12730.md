# Draft and manage academic research papers with GPT-4 and Pinecone

> ## How It Works
This workflow automates academic research processing by routing queries through specialized AI models while maintaining contextual memory. Designed for researchers, faculty, and graduate students, it solves the challenge of managing multiple AI models for different research tasks while preserving conversation context across sessions. The system accepts research queries via webhook, stores them in vector databases for semantic search, and intelligently routes requests to appropriate AI models (OpenAI, Anthropic Claude, or NVIDIA NIM). Results are consolidated, formatted, and delivered via email with full citation tracking. The workflow maintains conversation history using Pinecone vector storage, enabling follow-up queries that reference previous interactions. This eliminates manual model switching, context loss, and repetitive credential management—streamlining research workflows from literature review to hypothesis generation.

## Setup Steps
1. Configure Pinecone credentials  
2. Add OpenAI API key for GPT-4 access and embeddings
3. Set up Anthropic Claude API credentials for advanced reasoning
4. Configure NVIDIA NIM API key for specialized academic models
5. Connect Google Sheets for query logging and result tracking
6. Set Gmail OAuth credentials for automated result delivery
7. Configure webhook URL for query submission endpoint
 
## Prerequisites
Active accounts and API keys for Pinecone, OpenAI 
## Use Cases
Literature review automation with semantic paper discovery. 
## Customization
Modify AI model selection logic for domain-specific optimization.
## Benefits
Reduces research processing time by 60% through automated routing.

## 📊 Basic Information

- **Workflow ID:** 12730
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12730)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **httpRequest** (×6)
- **merge** 
- **wait** 
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×4)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **if** 
- **googleSheets** (×4)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 32 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
