# Build your own PostgreSQL MCP server

> ### This n8n demonstrates how to build a simple PostgreSQL MCP server to manage your PostgreSQL database such as HR, Payroll, Sale, Inventory and More!

This MCP example is based off an official MCP reference implementation which can be found here -[https://github.com/modelcontextprotocol/servers/tree/main/src/postgres](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres)

### How it works
* A MCP server trigger is used and connected to 5 tools: 2 postgreSQL and 3 custom workflow.
* The 2 postgreSQL tools are simple read-only queries and as such, the postgreSQL tool can be simply used.
* The 3 custom workflow tools are used for select, insert and update queries as these are operations which require a bit more discretion.
* Whilst it may be easier to allow the agent to use raw SQL queries, we may find it a little safer to just allow for the parameters instead. The custom workflow tool allows us to define this restricted schema for tool input which we'll use to construct the SQL statement ourselves.
* All 3 custom workflow tools trigger the same "Execute workflow" trigger in this very template which has a switch to route the operation to the correct handler.
* Finally, we use our standard PostgreSQL node to handle select, insert and update operations. The responses are then sent back to the the MCP client.

### How to use
* This PostgreSQL MCP server allows any compatible MCP client to manage a PostgreSQL database by supporting select, create and update operations. You will need to have a database available before you can use this server.
* Connect your MCP client by following the n8n guidelines here - https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger/#integrating-with-claude-desktop
* Try the following queries in your MCP client:
  * "Please help me check if Alex has an entry in the users table. If not, please help me create a record for her."
  * "What was the top selling product in the last week?"
  * "How many high priority support tickets are still open this morning?"

### Requirements
* PostgreSQL for database. This can be an external database such as Supabase or one you can host internally.
* MCP Client or Agent for usage such as Claude Desktop - https://claude.ai/download

### Customising this workflow
* If the scope of schemas or tables is too open, try restrict it so the MCP serves a specific purpose for business operations. eg. Confine the querying and editing to HR only tables before providing access to people in that department.
* Remember to set the MCP server to require credentials before going to production and sharing this MCP server with others!

## 📊 Basic Information

- **Workflow ID:** 3631
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 8804
- **Downloads:** 880
- **Created:** 2025/4/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3631)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **postgresTool** (×2)
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **postgres** (×3)
- **switch** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
