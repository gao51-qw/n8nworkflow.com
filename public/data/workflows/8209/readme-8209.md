# Build a smart chatbot with GPT-5-nano, web search & conversational memory

> This is an n8n workflow designed to implement an **advanced AI chatbot** with real-time conversation and search capabilities. Configured with a minimalist European design, this chatbot is ready to be integrated into any website.

---

#### What Does This Workflow Do?

The workflow uses a combination of nodes to create a complete chatbot:

1.  **Chat Trigger**: Starts the process when a user sends a message. The configuration includes a customized visual design (minimalist European CSS), welcome messages, and titles.
2.  **AI Agent**: Acts as the chatbot's brain. It coordinates interaction with the language model, memory, and tools to generate intelligent responses.
3.  **Conversational Memory**: Allows the chatbot to remember the context of the conversation, providing a smoother and more coherent experience.
4.  **Language Model (GPT)**: Generates the chat responses.
5.  **Search Tool**: Enables the AI agent to search for information on the web and answer questions it doesn't already know.
6.  **Respond to Chat**: Sends the final response back to the user.

---

#### Use Cases

* **Customer Support**: Answers frequently asked questions and transfers complex conversations to a human agent.
* **Virtual Assistant**: Provides information about products or services, helps users navigate your website, or completes simple tasks.
* **Content Generator**: Serves as an assistant for generating ideas, writing drafts, or summarizing texts.

---

#### Who Is This For?

This workflow is ideal for:

* **Businesses and developers** looking for a versatile and customizable chatbot solution without having to build it from scratch.
* **Business owners** who want to improve customer service and user interaction in an automated way.
* **Curious individuals** and AI enthusiasts who want to explore how chatbots are built and experiment with their own configurations.

This workflow includes **detailed documentation** that explains how each node works and how to customize it for your needs.

## 📊 Basic Information

- **Workflow ID:** 8209
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1608
- **Downloads:** 160
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8209)

## 👤 Author

- **Name:** Oriol Seguí
- **Username:** @oxsr11

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.chat** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)
- **httpRequestTool** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
