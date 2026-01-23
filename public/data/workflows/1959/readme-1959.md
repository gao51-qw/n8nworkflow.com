# AI chatbot that can search the web

> This workflow is designed for dynamic and intelligent conversational capabilities. It incorporates OpenAI's GPT-4o model for natural language understanding and generation. Additional tools include SerpAPI and Wikipedia for enriched, data-driven responses. The workflow is triggered manually, and utilizes a 'Window Buffer Memory' to maintain the context of the last 20 interactions for better conversational continuity. All these components are orchestrated through n8n nodes, ensuring seamless interconnectivity.

To use this template, you need to be on n8n version 1.50.0 or later.

## 📊 Basic Information

- **Workflow ID:** 1959
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 87621
- **Downloads:** 8762
- **Created:** 2023/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1959)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **@n8n/n8n-nodes-langchain.toolWikipedia** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
