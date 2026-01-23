# Use an open-source LLM (via HuggingFace)

> This workflow demonstrates how to connect an open-source model to a Basic LLM node.

The workflow is triggered when a new manual chat message appears. The message is then run through a Language Model Chain that is set up to process text with a specific prompt to guide the model's responses.

Note that open-source LLMs with a small number of parameters require slightly different prompting with more guidance to the model.

You can change the default Mistral-7B-Instruct-v0.1 model to any other LLM supported by HuggingFace. You can also connect other nodes, such as Ollama.

Note that to use this template, you need to be on n8n version 1.19.4 or later.

## 📊 Basic Information

- **Workflow ID:** 1980
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 42190
- **Downloads:** 4219
- **Created:** 2023/11/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1980)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmOpenHuggingFaceInference** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
