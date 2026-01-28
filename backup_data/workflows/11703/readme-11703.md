# Google Docs MCP server — read & write access for agents

> ## How it works

This workflow creates an MCP server that allows coding agents
(e.g. Claude, ChatGPT with MCP support, Clawed Code) to interact
with **Google Docs** programmatically.

Many agents today can find files in Google Drive, but cannot
open, edit, or format documents. This workflow fills that gap.

### What users can do

* Search for files in Google Drive
* Create new Google Docs
* Get document content
* Update docs with:
  * Find & Replace
  * Insert text
  * Add page breaks
  * Bullet and numbered lists
  * Checkbox lists
  * Insert tables

### Why it’s useful

This expands agent capabilities from *read-only* to full *read/write
and content manipulation* within Google Docs, enabling workflows
such as auto-writing reports, generating checklists, cleaning content,
and formatting structured output via AI.



## 📊 Basic Information

- **Workflow ID:** 11703
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 53
- **Downloads:** 5
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11703)

## 👤 Author

- **Name:** Louis Chan
- **Username:** @louischan

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **googleDriveTool** 
- **googleDocsTool** (×13)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
