# Extract personal data with self-hosted LLM Mistral NeMo

> This workflow shows how to use a self-hosted Large Language Model (LLM) with n8n's LangChain integration to extract personal information from user input. This is particularly useful for enterprise environments where data privacy is crucial, as it allows sensitive information to be processed locally.

📖 For a detailed explanation and more insights on using open-source LLMs with n8n, take a look at our [comprehensive guide on open-source LLMs](https://blog.n8n.io/open-source-llm/).

## 🔑 Key Features

1. **Local LLM**
   - Connect Ollama to run Mistral NeMo LLM locally
   - Provide a foundation for compliant data processing, keeping sensitive information on-premises

2. **Data extraction**
   - Convert unstructured text to a consistent JSON format
   - Adjust the JSON schema to meet your specific data extraction needs.

3. **Error handling**
   - Implement auto-fixing for LLM outputs
   - Include error output for further processing

## ⚙️ Setup and сonfiguration

### Prerequisites

- [n8n AI Starter Kit](https://docs.n8n.io/hosting/starter-kits/ai-starter-kit/) installed

### Configuration steps

1. Add the **Basic LLM Chain** node with system prompts.
2. Set up the **Ollama Chat Model** with optimized parameters.
3. Define the JSON schema in the **Structured Output Parser** node.

🔍 Further resources
--------------------

- [Run LLMs locally with n8n](https://blog.n8n.io/local-llm/)
- [Video tutorial on using local AI with n8n](https://www.youtube.com/watch?v=xz_X2N-hPg0)

Apply the power of self-hosted LLMs in your n8n workflows while maintaining control over your data processing pipeline!


## 📊 Basic Information

- **Workflow ID:** 2766
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 6009
- **Downloads:** 600
- **Created:** 2025/1/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2766)

## 👤 Author

- **Name:** Yulia
- **Username:** @yulia

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **noOp** 
- **stickyNote** (×6)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
