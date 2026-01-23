# Telegram AI bot with LangChain nodes

> This workflow connects Telegram bots with LangChain nodes in n8n.
The main AI Agent Node is configured as a Conversation Agent. It has a custom System Prompt which explains the reply formatting and provides some additional instructions.
The AI Agent has several connections:
- OpenAI GPT-4 model is called to generate the replies
- Window Buffer Memory stores the history of conversation with each user separately
- There is an additional Custom n8n Workflow tool (Dall-E 3 Tool). AI Agent uses this tool when the user requests an image generation.
In the lower part of the workflow, there is a series of nodes that call Dall-E 3 model with the user Telegram ID and a prompt for a new image. Once image is ready, it is sent back to the user.
Finally, there is an extra Telegram node that masks HTML syntax for improved stability in case the AI Agent replies using the unsupported format.

## 📊 Basic Information

- **Workflow ID:** 2035
- **Complexity:** beginner
- **Node Count:** 0
- **Views:** 71017
- **Downloads:** 7101
- **Created:** 2023/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2035)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **telegram** (×3)
- **executeWorkflowTrigger** 
- **telegramTrigger** 
- **set** 
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
