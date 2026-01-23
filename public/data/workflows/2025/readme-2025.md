# OpenAI assistant with custom tools

> This workflow shows how you can get your OpenAI assistant to call an n8n workflow as a tool. Since you can put almost any functionality in an n8n workflow, this means you can give your assistant access to almost any data source.

Note that to use this template, you need to be on n8n version 1.19.4 or later.


## 📊 Basic Information

- **Workflow ID:** 2025
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 14365
- **Downloads:** 1436
- **Created:** 2023/12/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2025)

## 👤 Author

- **Name:** David Roberts
- **Username:** @davidn8n

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.toolCode** 
- **if** 
- **code** (×2)
- **summarize** 
- **set** (×2)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
