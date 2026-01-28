# Chat with a database using AI

> This workflow allows you to ask questions about data stored in a database using AI.

To use it, you'll need an OpenAI API key (although you could also swap in a model from another service).

Supported databases:
- Postgres
- MySQL
- SQLite

The workflow uses n8n's embedded chat, but you could also modify it to work with a chat service such as Slack, MS Teams or WhatsApp.

Note that to use this template, you need to be on n8n version 1.19.4 or later.

## 📊 Basic Information

- **Workflow ID:** 2090
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 204365
- **Downloads:** 20436
- **Created:** 2024/2/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2090)

## 👤 Author

- **Name:** David Roberts
- **Username:** @davidn8n

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **postgresTool** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
