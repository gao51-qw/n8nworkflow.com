# Building your first WhatsApp chatbot

> This n8n template builds a simple WhatsApp chabot acting as a Sales Agent. The Agent is backed by a product catalog vector store to better answer user's questions.

This template is intended to help introduce n8n users interested in building with WhatsApp.

## How it works
* This template is in 2 parts: creating the product catalog vector store and building the WhatsApp AI chatbot.
* A product brochure is imported via HTTP request node and its text contents extracted.
* The text contents are then uploaded to the in-memory vector store to build a knowledgebase for the chatbot.
* A WhatsApp trigger is used to capture messages from customers where non-text messages are filtered out.
* The customer's message is sent to the AI Agent which queries the product catalogue using the vector store tool.
* The Agent's response is sent back to the user via the WhatsApp node.

## How to use

Once you've setup and configured your WhatsApp account and credentials
* First, populate the vector store by clicking the "Test Workflow" button.
* Next, activate the workflow to enable the WhatsApp chatbot.
* Message your designated WhatsApp number and you should receive a message from the AI sales agent.
* Tweak datasource and behaviour as required.

## Requirements
* WhatsApp Business Account
* OpenAI for LLM

## Customising this workflow

* Upgrade the vector store to [Qdrant](https://qdrant.tech) for persistance and production use-cases.
* Handle different WhatsApp message types for a more rich and engaging experience for customers.

## 📊 Basic Information

- **Workflow ID:** 2465
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 443048
- **Downloads:** 44304
- **Created:** 2024/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2465)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **whatsAppTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **extractFromFile** 
- **httpRequest** 
- **whatsApp** (×2)
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×2)
- **stickyNote** (×10)
- **switch** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
