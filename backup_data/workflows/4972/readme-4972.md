# Monitor AI chat interactions with Gemini 2.5 and Langfuse tracing

> This workflow contains community nodes that are only compatible with the self-hosted version of n8n.

# How it works

This workflow is a simple AI Agent that connects to Langfuse so send tracing data to help monitor LLM interactions.

The main idea is to create a custom LLM model that allows the configuration of callbacks, which are used by langchain to connect applications such Langfuse.

This is achieves by using the "langchain code" node:
- Connects a LLM model sub-node to obtain the model variables (model name, temp and provider) - Creates a generic langchain initChatModel with the model parameters.
- Return the LLM to be used by the AI Agent node.


## 📋 Prerequisites
- Langfuse instance (cloud or self-hosted) with API credentials
- LLM API key (Gemini, OpenAI, Anthropic, etc.)
- n8n &gt;= 1.98.0 (required for LangChain code node support in AI Agent)

## ⚙️ Setup

1. Add these to your n8n instance:
```bash
# Langfuse configuration
LANGFUSE_SECRET_KEY=your_secret_key
LANGFUSE_PUBLIC_KEY=your_public_key
LANGFUSE_BASEURL=https://cloud.langfuse.com  # or your self-hosted URL

# LLM API key (example for Gemini)
GOOGLE_API_KEY=your_api_key
```

Alternative: Configure these directly in the LangChain code node if you prefer not to use environment variables

2. Import the workflow JSON

3. Connect your preferred LLM model node

4. Send a test message to verify tracing appears in Langfuse


## 📊 Basic Information

- **Workflow ID:** 4972
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 1096
- **Downloads:** 109
- **Created:** 2025/6/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4972)

## 👤 Author

- **Name:** Eduardo Hales
- **Username:** @ehales

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.code** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
