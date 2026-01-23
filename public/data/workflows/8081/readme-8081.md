# Complete Airtable database management with AI agents and Redis storage

> ## What this workflow does
Complete Airtable database management system using MCP (Model Context Protocol) for AI agents. Create bases, tables with complex field types, manage records, and maintain state with Redis storage.

## Setup steps
1. Add your Airtable Personal Access Token to credentials
2. Configure Redis connection for ID storage
3. Get your workspace ID from Airtable (starts with wsp...)
4. Connect to MCP Server Trigger
5. Configure your AI agent with the provided instructions

## Key features
- Create new Airtable bases and custom tables
- Support for all field types (date, number, select, etc.) 
- Full CRUD operations on records
- Rename tables and fields
- Store base/workspace IDs to avoid repeated requests
- Generic operations work with ANY Airtable structure

## Included operations
- create_base, create_custom_table, add_field
- get_table_ids, get_existing_records  
- update_record, rename_table, rename_fields
- delete_record
- get/set base_id and workspace_id (Redis storage)

## Notes
Check sticky notes in workflow for ID locations and field type requirements.

## 📊 Basic Information

- **Workflow ID:** 8081
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 191
- **Downloads:** 19
- **Created:** 2025/8/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8081)

## 👤 Author

- **Name:** Denis
- **Username:** @denisholc7

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **httpRequestTool** (×9)
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.memoryRedisChat** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **redisTool** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
