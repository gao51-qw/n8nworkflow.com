# Build your own FileSystem MCP server

> **This template is for self-hosted n8n instances only.**
### This n8n demonstrates how to build a simple FileSystem MCP server. Connecting to this server allows MCP clients and agents to list, read and create directories and files on the local machine or remote server.

This MCP example is based off an official MCP reference implementation which can be found here -[https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem)

### How it works
* A MCP server trigger is used and connected to 5 tools: 3 Execute Command tools and 2 custom workflow tools.
* The 3 Execute Command tools allow for listing, searching and creating directories. 
* The 2 custom workflow tools are for reading and writing files to disk.
* Special care has been to not allow the MCP agent to execute arbitrary linux commands on the target server. This is achieved by only allowing the agent to provide parameters such as filenames and paths rather than raw commands. 

### How to use
* This Filesystem MCP server will write to the server which hosts the n8n instance - this can be your local machine or a remove server. If your target filesystem is on neither, then modify the commands to connect to the desired server.
* Connect your MCP client by following the n8n guidelines here - https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger/#integrating-with-claude-desktop
* Try the following queries in your MCP client:
  * "Please help me list all folders under the project directory."
  * "Help me create a bash script to send a notification to Slack."
  * "Search for the log file on the 22nd April and read its contents. What was the cause of the outage?"

### Requirements
* Linux file system for this example template. Feel free to modify if working on Windows.
* MCP Client or Agent for usage such as Claude Desktop - https://claude.ai/download

### Customising this workflow
* Implement the moving and renaming of files by adding more custom workflow tools to the MCP server.
* Remember to set the MCP server to require credentials before going to production and sharing this MCP server with others!

## 📊 Basic Information

- **Workflow ID:** 3630
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 3852
- **Downloads:** 385
- **Created:** 2025/4/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3630)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- File Management
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **executeCommandTool** (×3)
- **executeWorkflowTrigger** 
- **switch** 
- **executeCommand** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
