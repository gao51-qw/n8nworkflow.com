# ERP AI chatbot for Odoo sales module with OpenAI

> ## Who is this for?
This workflow is for everyone who wants to have easier access to their Odoo sales data without complex queries.

## Use Case
To have a clear overview of your sales data in Odoo you typically needs to extract data from it manually to analyse it. This workflow uses OpenAI's language models to create an intelligent chatbot that provides conversational access to your Odoo sales opportunity data.

## How it works
* Creates a summary of all Odoo sales opportunities using OpenAI
* Uses that summary as context for the OpenAI chat model
* Keeps the summary up to date using a schedule trigger

## Set up steps:
* Configure the Odoo credentials
* Configure OpenAI credentials
* Toggle "Make Chat Publicly Available" from the Chat Trigger node.

## 📊 Basic Information

- **Workflow ID:** 2325
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 25462
- **Downloads:** 2546
- **Created:** 2024/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2325)

## 👤 Author

- **Name:** Mihai Farcas
- **Username:** @mihailtd

## 🏷️ Categories

- CRM
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **scheduleTrigger** 
- **convertToFile** 
- **readWriteFile** (×2)
- **odoo** 
- **if** 
- **aggregate** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **@n8n/n8n-nodes-langchain.lmOpenAi** 
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
