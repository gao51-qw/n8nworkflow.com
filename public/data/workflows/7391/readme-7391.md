# Query business data from Uniconta ERP with OpenAI chatbot via Peliqan

> ![Peliqan n8n Uniconta AI Agent.png](fileId:2107)

## How it works

This template is an end-to-end demo of an in-house AI agent that can answer a wide range of questions by retrieving information from the Uniconta ERP system. For example users can ask questions related to products, stock, accounting or any other type of information contained in Uniconta.

Peliqan.io is used as a "cache" of all Uniconta data. Peliqan uses one-click ELT to sync all data from Uniconta to the built-in data warehouse, allowing for fast & accurate queries. The AI agent uses Text-to-SQL to answer questions.

Text-to-SQL is performed via the Peliqan node, added as a tool to the AI Agent. The question of the user - in natural language - is converted to an SQL query by the AI Agent. The query is executed by Peliqan.io on the source Uniconta data and the result is interpreted by the AI Agent.


## Preconditions

* You signed up for a [Peliqan.io free trial account](https://app.eu.peliqan.io)
* You have a Uniconta ERP system

## Set up steps

* Sign up for a [free trial on peliqan.io](https://peliqan.io)
* Add Uniconta as a connection in Peliqan (using an API key from Uniconta)
* Copy your Peliqan API key (in Peliqan go to Settings &gt; API key) and use it in n8n to add a Peliqan connection
* Select your data warehouse in the Peliqan node "Execute an SQL query via Peliqan" in the drop-down field "Data warehouse name or id"
* Optional: run the [template script](https://help.peliqan.io/build-ai-agents-with-n8n-and-peliqan#block-2401aa9b387980cf8b2ff069588dd3dc) in Peliqan that outputs your specific Uniconta datamodel (tables & columns). Copy your datamodel and paste it in the System Message of the AI Agent (replace the standard Uniconta model already present in this workflow)

Visit [peliqan.io/n8n](https://peliqan.io/n8n) for more information.
Need help ? Contact Peliqan at [support@peliqan.io](support@peliqan.io)

_Disclaimer: This template contains a community node and therefore only works for n8n self-hosted users._

## 📊 Basic Information

- **Workflow ID:** 7391
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 243
- **Downloads:** 24
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7391)

## 👤 Author

- **Name:** Peliqan
- **Username:** @peliqan

## 🏷️ Categories

- Internal Wiki
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **n8n-nodes-peliqan.peliqanTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
