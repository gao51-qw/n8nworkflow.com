# Analyze and chat with XML files using GPT and LangChain

> ## This workflow allows interactive conversation with the content of an XML file using OpenAI and LangChain. It fetches an XML feed from a specified URL, parses the XML, and enables an AI agent to respond to user queries based on the XML's structure and data.

## What It Does:
- Triggered via webhook or manual execution.
- Sets and fetches an external XML feed URL.
- Parses the XML into a readable format.
- Connects OpenAI GPT via LangChain for intelligent chat.
- AI agent answers questions like extracting nodes, attributes, or structure from the XML.


## 📊 Basic Information

- **Workflow ID:** 6224
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 814
- **Downloads:** 81
- **Created:** 2025/7/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6224)

## 👤 Author

- **Name:** Sarfaraz Muhammad Sajib
- **Username:** @sarfarazmuhammad

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequest** 
- **xml** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **stickyNote** 
- **code** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
