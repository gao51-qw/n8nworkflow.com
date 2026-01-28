# Notion knowledge base AI assistant

> ## Who is this for
This workflow is perfect for teams and individuals who manage extensive data in Notion and need a quick, AI-powered way to interact with their databases. If you're looking to streamline your knowledge management, automate searches, and get faster insights from your Notion databases, this workflow is for you. It’s ideal for support teams, project managers, or anyone who needs to query specific data across multiple records or within individual pages of their Notion setup.

Check out the Notion template this Assistant is set up to use: https://www.notion.so/templates/knowledge-base-ai-assistant-with-n8n

## How it works
The **Notion Database Assistant** uses an AI Agent built with **Retrieval-Augmented Generation** (RAG) to query [this Knowledge Base style Notion database](https://30dayaisprint.notion.site/7ea9697d4875441eb2621105337d232e?v=cff6ba4cb0d14613b143af6f96dab287). The assistant can search across multiple properties like tags or question and retrieves content from inside individual Notion pages for additional context.

**Key features include:**

- Querying the database with flexible filters.
- Searching within individual Notion pages and extracting relevant blocks.
- Providing a reference link to the exact Notion pages used to inform its responses, ensuring transparency and easy verification.
- This assistant uses two HTTP request tools—one for querying the Notion database and another for pulling data from within specific pages. It streamlines knowledge retrieval, offering a conversational, AI-driven way to interact with large datasets.


## Set up
Find basic set up instructions inside the workflow itself or watch a quickstart video 👇

[![Video Thumbnail](https://uploads.n8n.io/maxt/notion-db-assistant-embedded-thumb.png)](https://www.youtube.com/watch?v=ynLZwS2Nhnc)


## 📊 Basic Information

- **Workflow ID:** 2413
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 48892
- **Downloads:** 4889
- **Created:** 2024/9/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2413)

## 👤 Author

- **Name:** Max Tkacz
- **Username:** @max-n8n

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** (×2)
- **notion** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **set** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
