# Custom LangChain agent written in JavaScript

> This workflow has multiple functionalities. It starts with a manual trigger, "When clicking 'Execute Workflow'", that activates two separate paths.

The first path takes a preset string "Tell me a joke" and processes it through a custom Language Learning Model (LLM) chain node. This node interacts with an OpenAI node for query processing.

The second path takes another preset string "What year was Einstein born?" and passes it to an "Agent" node. This agent further interacts with a Chat OpenAI node and a custom Wikipedia node to produce the required information.

The workflow uses both built-in and custom nodes, and integrates with OpenAI for both paths. It's built for experimenting with language models, specifically in the context of conversational agents and information retrieval.

Note that to use this template, you need to be on n8n version 1.19.4 or later.

## 📊 Basic Information

- **Workflow ID:** 1955
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 15567
- **Downloads:** 1556
- **Created:** 2023/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1955)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×2)
- **manualTrigger** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.code** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolCode** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
