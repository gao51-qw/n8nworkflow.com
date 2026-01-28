# Chat with local LLMs using n8n and Ollama

> ## Chat with local LLMs using n8n and Ollama
This n8n workflow allows you to seamlessly interact with your self-hosted Large Language Models (LLMs) through a user-friendly chat interface. By connecting to Ollama, a powerful tool for managing local LLMs, you can send prompts and receive AI-generated responses directly within n8n.

### Use cases
* Private AI Interactions
Ideal for scenarios where data privacy and confidentiality are important.
* Cost-Effective LLM Usage
Avoid ongoing cloud API costs by running models on your own hardware.
* Experimentation & Learning
A great way to explore and experiment with different LLMs in a local, controlled environment.
* Prototyping & Development
Build and test AI-powered applications without relying on external services.

### How it works
1. When chat message received: Captures the user's input from the chat interface.
2. Chat LLM Chain: Sends the input to the Ollama server and receives the AI-generated response.
3. Delivers the LLM's response back to the chat interface.

### Set up steps
* Make sure Ollama is installed and running on your machine before executing this workflow.
* Edit the Ollama address if different from the default.


## 📊 Basic Information

- **Workflow ID:** 2384
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 169903
- **Downloads:** 16990
- **Created:** 2024/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2384)

## 👤 Author

- **Name:** Mihai Farcas
- **Username:** @mihailtd

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
