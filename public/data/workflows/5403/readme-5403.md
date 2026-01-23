# Build an MCP server which answers questions with retrieval augmented generation

> ## Build an MCP Server which has access to a semantic database to perform Retrieval Augmented Generation (RAG)

## Tutorial
![thumbnail.png](fileId:1878)
[Click here to watch the full tutorial on YouTube](https://youtu.be/GB2RZ25HTD8)

## How it works
This MCP Server has access to a local semantic database (Qdrant) and answers questions being asked to the MCP Client.

## AI Agent Template
[Click here to navigate to the AI Agent n8n workflow which uses this MCP server](https://n8n.partnerlinks.io/5398-ai-assistant-which-answers-questions-with-a-rag-mcp-and-a-search-engine-mcp)

## Warning
This flow only runs local and cannot be executed on the n8n cloud platform because of the MCP Client Community Node.

## Installation
1. Install n8n + Ollama + Qdrant using the [Self-hosted AI starter kit](https://github.com/n8n-io/self-hosted-ai-starter-kit)

2. Make sure to install Llama 3.2 and mxbai-embed-large as embeddings model.

3. Activate the n8n flow

![activate n8n flow.png](fileId:1593)

4. Run the "RAG Ingestion Pipeline" and upload some PDF documents

## How to use it
1. Run the MCP Client workflow and ask a question. It will be either answered by using the semantic database or the search engine API.

## More detailed instructions
Missed a step? Find more detailed instructions here: https://brightdata.com/blog/ai/news-feed-n8n-openai-bright-data



## 📊 Basic Information

- **Workflow ID:** 5403
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 3703
- **Downloads:** 370
- **Created:** 2025/6/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5403)

## 👤 Author

- **Name:** Thomas Janssen
- **Username:** @thomasjanssen-tech

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOllama** 
- **stickyNote** (×2)
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
