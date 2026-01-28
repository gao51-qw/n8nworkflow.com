# 🤖🔍 The ultimate free AI-powered researcher with Tavily web search & extract

> 🔍 This n8n workflow integrates Tavily's search and extract APIs with AI summarization capabilities to process web content efficiently.

## Quick Setup
1. Get your Tavily API key from https://app.tavily.com/home
2. Replace `tvly-YOUR_API_KEY` in the "Tavily API Key" node
3. Connect your OpenAI credentials to the "OpenAI Chat Model" node
4. Deploy the workflow and start the chat trigger

## Core Features
Search & Extract 🎯
- Intelligent web searching with relevance filtering
- Automated content extraction from top results
- AI-powered content summarization in markdown format

User Interaction 💬
- Chat-based search topic input
- Real-time processing pipeline
- Structured markdown output

The workflow demonstrates practical implementation of Tavily's API endpoints while handling the complete process from search to summarization in a single automated pipeline.


## 📊 Basic Information

- **Workflow ID:** 2768
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 25047
- **Downloads:** 2504
- **Created:** 2025/1/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2768)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×7)
- **httpRequest** (×4)
- **set** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
