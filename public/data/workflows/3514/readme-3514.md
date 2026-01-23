# Build an MCP server with Google Calendar and custom functions

> Learn how to build an MCP Server and Client in n8n with official nodes.

&gt; ⚠ Requires n8n version 1.88.0 or higher.

In this example, we use Google Calendar and custom functions as two separate MCP Servers, demonstrating how to integrate both native and custom tools.

### How it works

The AI Agent connects to two MCP Servers. Each MCP Trigger (Server) generates a URL exposing its tools. This URL is used by an MCP Client linked to the AI Agent.

Whenever you make changes to the tools, there’s no need to modify the MCP Client. It automatically keeps the AI Agent informed on how to use each tool, even if you change them over time.

That’s the power of MCP 🙌

### Who is this template for

Anyone looking to use MCP with their AI Agents.

### How to set up

Instructions are included within the workflow itself.

### Check out my other templates

👉 [**https://n8n.io/creators/solomon/**](https://n8n.io/creators/solomon/)

## 📊 Basic Information

- **Workflow ID:** 3514
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 69353
- **Downloads:** 6935
- **Created:** 2025/4/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3514)

## 👤 Author

- **Name:** Solomon
- **Username:** @solomon

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **googleCalendarTool** (×4)
- **@n8n/n8n-nodes-langchain.mcpTrigger** (×2)
- **executeWorkflowTrigger** 
- **switch** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** (×2)
- **stickyNote** (×11)
- **debugHelper** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
