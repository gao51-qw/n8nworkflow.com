# Save Costs In RAG Workflows using the Q&A Tool With Multiple Models

> This template shows how to use the Question and Answer tool to save costs in RAG use cases.

## Who is this for?
This template is for everyone who wants to start giving knowledge to their Agents through RAG.

## Requirements
Have a PDF with custom knowledge that you want to provide to your agent.

## Setup
No setup required. Just hit `Execute Workflow`, upload your knowledge document and then start chatting.

## How to customize this to your needs
1. Add custom instructions to your Agent by changing the prompts in it.
2. Add a different way to load in knowledge to your vector store, e.g. by looking at some Google Drive files or loading knowledge from a table.
3. Describe your data properly in the Q&A tool
4. Exchange the `Simple Vector Store` nodes with your own vector store tools ready for production.
5. Add a more sophisticated way to rank files found in the vector store.

For more information read our [docs on RAG in n8n](https://docs.n8n.io/advanced-ai/rag-in-n8n/).



## 📊 Basic Information

- **Workflow ID:** 5011
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 8946
- **Downloads:** 894
- **Created:** 2025/6/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5011)

## 👤 Author

- **Name:** Niklas Hatje
- **Username:** @nik8n

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
