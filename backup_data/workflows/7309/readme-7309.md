# AI multi-source agent with GPT-4, Perplexity Search, Supabase and Google Sheets

> # GPT-5 MCP Multi-Source Orchestrator

## Overview
**GPT-5 MCP Multi-Source Orchestrator** is a next-generation AI agent for n8n that blends the raw intelligence of GPT-5 with the structured power of MCP tools and multi-source data retrieval.  
It unifies your live web searches, vector databases, spreadsheets, and persistent memory into one streamlined, context-aware automation system.

## Key Features
- **GPT-5 Intelligence** – Advanced reasoning, summarization, and decision-making.
- **MCP Tool Integration** – Connects to specialized remote MCP servers for high-value operations.
- **Multi-Source Retrieval** – Combines semantic search, real-time web lookups, and tabular data queries.
- **Persistent Chat Memory** – Maintains context across conversations with Postgres Chat Memory.
- **Semantic Ranking** – Uses OpenAI Embeddings + Cohere Reranker to find the most relevant results.
- **Live Web Search** – Pulls fresh, high-accuracy answers from Perplexity.
- **Spreadsheet Integration** – Directly interacts with Google Sheets.

## Use Cases
- Knowledge assistant that merges internal data with real-time information.
- Research automation pulling insights from multiple sources at once.
- Customer support bot enriched with live and historical data.
- MCP-driven workflows that trigger complex tool actions from natural language.

## Benefits
- **Unified AI Layer** – All your data and tools in one place.
- **Higher Accuracy** – Combines retrieval and reasoning seamlessly.
- **Scalable Workflows** – Automates multi-step, multi-source tasks.
- **Always Up-to-Date** – Merges stored context with real-time intelligence.

---

**Perfect for**  
Automation builders, technical teams, and businesses that want GPT-5 + MCP power in a single, multi-source AI agent for smarter workflows.



## 📊 Basic Information

- **Workflow ID:** 7309
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 119
- **Downloads:** 11
- **Created:** 2025/8/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7309)

## 👤 Author

- **Name:** Paul
- **Username:** @diagopl

## 🏷️ Categories

- Internal Wiki
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.rerankerCohere** 
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **googleSheetsTool** 
- **perplexityTool** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.mcpClientTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
