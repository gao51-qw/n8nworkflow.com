# Chat with OpenAI Assistant (by adding a memory)

> OpenAI Assistant is a powerful tool, but at the time of writing it doesn't automatically remember past messages from a conversation.

This workflow demonstrates how to get around this, by managing the chat history in n8n and passing it to the assistant when required.

This makes it possible to use OpenAI Assistant for chatbot use cases.

Note that to use this template, you need to be on n8n version 1.28.0 or later.



## 📊 Basic Information

- **Workflow ID:** 2098
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 65222
- **Downloads:** 6522
- **Created:** 2024/2/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2098)

## 👤 Author

- **Name:** David Roberts
- **Username:** @davidn8n

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
