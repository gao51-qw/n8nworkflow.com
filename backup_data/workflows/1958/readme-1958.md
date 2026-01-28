# AI: Ask questions about any data source (using the n8n workflow retriever)

> This template aims to perform Q&A on data retrieved from another n8n workflow. Since that workflow can be used to retrieve any data from any service, this template can be used to ask questions about any data.

It uses a manual trigger, various AI nodes, and an OpenAI Chat Model to extract and provide relevant information based on a specific query.

Note that to use this template, you need to be on n8n version 1.19.4 or later.

## 📊 Basic Information

- **Workflow ID:** 1958
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 10015
- **Downloads:** 1001
- **Created:** 2023/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1958)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.chainRetrievalQa** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.retrieverWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
