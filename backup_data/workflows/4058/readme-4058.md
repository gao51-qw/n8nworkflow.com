# Homey Pro - smarthouse integration with LLM

> This n8n workflow sets up a smart home assistant using OpenAI and Homey integration. It uses LangChain agent tools to allow natural language queries (in Norwegian) to trigger workflows for controlling lights, curtains, temperature, TVs, and other devices across different rooms (e.g., living room, bedroom, cinema). The system uses tool-based workflows connected to specific smart home actions and responds in Norwegian. It’s designed to be modular and easily extended with new devices or capabilities.

## 📊 Basic Information

- **Workflow ID:** 4058
- **Complexity:** advanced
- **Node Count:** 107
- **Views:** 1137
- **Downloads:** 113
- **Created:** 2025/5/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4058)

## 👤 Author

- **Name:** Ole Andre Torjussen
- **Username:** @oleandre

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×93)
- **@n8n/n8n-nodes-langchain.lmChatXAiGrok** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 107 nodes with 96 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
