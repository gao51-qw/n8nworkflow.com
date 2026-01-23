# Chat with a Google Sheet using AI

> This workflow allows you to ask questions about the data in a Google Sheet over a chat interface. It uses n8n's built-in chat, but could be modified to work with Slack, Teams, WhatsApp, etc.

Behind the scenes, the workflow uses GPT4, so you'll need to have an OpenAI API key that supports it.

### How it works
The workflow uses an AI agent with custom tools that call a sub-workflow. That sub-workflow reads the Google Sheet and returns information from it.

Because models have a context window (and therefore a maximum number of characters they can accept), we can't pass the whole Google Sheet to GPT - at least not for big sheets. So we provide three ways of querying less data, that can be used in combination to answer questions. Those three functions are:
1. List all the columns in the sheet
2. Get all values of a single column
3. Get all values of a single row

Note that to use this template, you need to be on n8n version 1.19.4 or later.


## 📊 Basic Information

- **Workflow ID:** 2085
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 59855
- **Downloads:** 5985
- **Created:** 2024/2/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2085)

## 👤 Author

- **Name:** David Roberts
- **Username:** @davidn8n

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **set** (×3)
- **googleSheets** 
- **switch** 
- **filter** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
