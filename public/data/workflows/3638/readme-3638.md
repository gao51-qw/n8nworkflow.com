# Build your own CUSTOM API MCP server

> ### This n8n demonstrates how any organisation can quickly and easily build and offer MCP servers to their customers or internal staff to improve productivity.

This MCP example uses PayCaptain.com as an example and shows how to create an MCP server which can search for and update employee data.

### How it works
* A MCP server trigger is used and connected to 3 custom workflow tools: Search Employee, Get Employee by ID and Update Employee.
* Each tool makes calls to the PayCaptain API to perform their respective tasks. Extra care  is performed to strip out sensitive data and ensure we're not sharing too much.
* The Update Employee too also guards against updating fields which would preferably remain readonly. When you control the MCP server, you can determine behaviour of the tool.
* Finally, a Google Sheet node is used to log all operations for later audit. This will add a tiny bit of latency but recommended if sensitive data is being accessed.

### How to use
* This MCP server allows any compatible MCP client to manage their PayCaptain employee database. You will need to have a PayCaptain account and developer key to use it.
* Connect your MCP client by following the n8n guidelines here - https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger/#integrating-with-claude-desktop
* Try the following queries in your MCP client:
  * "When did Sarah start here employment at the company?"
  * "Does Jack work Wednesdays or Fridays?"
  * "Please update Tracy's NI number to ABCD123456"

### Requirements
* PayCaptain Account and Developer Key.
* Google Sheets to log actions for later audit.
* MCP Client or Agent for usage such as Claude Desktop - https://claude.ai/download

### Customising this workflow
* Add or remove employee attributes as required for your user case.
* If Google Sheets is too slow, consider an API call to a faster service to log calls to the MCP server.
* Remember to set the MCP server to require credentials before going to production and sharing this MCP server with others!

## 📊 Basic Information

- **Workflow ID:** 3638
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 17982
- **Downloads:** 1798
- **Created:** 2025/4/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3638)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- HR
- AI RAG

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **switch** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **httpRequest** (×3)
- **googleSheets** 
- **filter** (×2)
- **aggregate** (×2)
- **set** (×5)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
