# Chat with Postgresql database

> ## Who is this template for?

This workflow template is designed for any professionals seeking relevent data from database using natural language.

## How it works

- Each time user ask's question using the n8n chat interface, the workflow runs.
- Then the message is processed by AI Agent using relevent tools - `Execute SQL Query`, `Get DB Schema and Tables List` and `Get Table Definition`, if required. Agent uses these tool to form and run sql query which are necessary to answer the questions.
- Once AI Agent has the data, it uses it to form answer and returns it to the user.

## Set up instructions

Complete the Set up credentials step when you first open the workflow. You'll need a Postgresql Credentials, and OpenAI api key.

Template was created in n8n `v1.77.0`



## 📊 Basic Information

- **Workflow ID:** 2859
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 83920
- **Downloads:** 8392
- **Created:** 2025/2/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2859)

## 👤 Author

- **Name:** KumoHQ
- **Username:** @kumohq

## 🏷️ Categories

- Internal Wiki
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **postgresTool** (×3)
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
