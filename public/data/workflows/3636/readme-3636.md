# Build your own Qdrant vector store MCP server

> ### This n8n demonstrates how to build your own Qdrant MCP server to extend its functionality beyond that of the official implementation.

This n8n implementation exposes other cool API features from Qdrant such as facet search, grouped search and recommendations APIs. With this, we can build an easily customisable and maintainable Qdrant MCP server for business intelligence.

This MCP example is based off an official MCP reference implementation which can be found here - [https://github.com/qdrant/mcp-server-qdrant](https://github.com/qdrant/mcp-server-qdrant/)

### How it works
* A MCP server trigger is used and connected to 5 custom workflow tools. We're using custom workflow tools as there is quite a few nodes required for each task.
* We use a mix of n8n supported Qdrant nodes for simple operations such as insert documents and similarity search, and HTTP node to hit the Qdrant API directly for Facet search, group search and recommendations.
* We use "Edit Field" and "Aggregate" nodes to return suitable responses to the MCP client.

### How to use
* This Qdrant MCP server allows any compatible MCP client to manage a Qdrant Collection by supporting select and create operations. You will need to have a collection available before you can use this server. Use the Prerequisite manual steps to get started!
* Connect your MCP client by following the n8n guidelines here - https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger/#integrating-with-claude-desktop
* Try the following queries in your MCP client:
  * "Can you help me list the available companies in the collection?"
  * "What do customers say about product deliveries from company X?"
  * "What do customers of company X and company Y say about product ease of use?"

### Requirements
* Qdrant for vector store. This can be an a cloud-hosted instance or one you can self-host internally.
* MCP Client or Agent for usage such as Claude Desktop - https://claude.ai/download

### Customising this workflow
* Depending on what queries you'll receive, adjust the tool inputs to make it easier for the agent to set the right parameters.
* Not interested in Reviews? The techniques shared in this template can be used for other types of collections.
* Remember to set the MCP server to require credentials before going to production and sharing this MCP server with others!

## 📊 Basic Information

- **Workflow ID:** 3636
- **Complexity:** advanced
- **Node Count:** 44
- **Views:** 2917
- **Downloads:** 291
- **Created:** 2025/4/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3636)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×5)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **executeWorkflowTrigger** 
- **switch** 
- **httpRequest** (×7)
- **code** 
- **aggregate** (×5)
- **if** (×2)
- **set** (×5)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **splitOut** 
- **filter** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 44 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
