# Gmail MCP server – your all‑in‑one AI email toolkit

> **Gmail MCP Server**
Expose Gmail’s full API as a single SSE “tool server” endpoint for your AI agents.

**What it does**
Spins up an MCP Trigger that streams Server‑Sent Events to LangChain/N8N AI Agent nodes. ​

Maps 20+ common Gmail operations (search, send, reply, draft, label & thread management, mark read/unread, delete, etc.) to ai_tool connections, so agents can invoke them with a simple JSON payload. 

**Why you’ll love it**
Agent‑ready: Plug the SSE URL into any N8N Agent or any other AI tool that uses MCP and start reasoning over email immediately.

Extensible: Add more GmailTool operations or swap credentials without touching your agent logic.

**How to use**
Import the workflow (n8n ≥ v1.88).

Set up a gmailOAuth2 credential and select it on the GmailTool nodes.

Open the Gmail MCP Server node, copy the SSE URL, and paste it into your AI agent’s “Tool Server” field.


## 📊 Basic Information

- **Workflow ID:** 3605
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 11756
- **Downloads:** 1175
- **Created:** 2025/4/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3605)

## 👤 Author

- **Name:** Brian Money
- **Username:** @aspereo

## 🏷️ Categories

- Ticket Management
- AI RAG

## 🔗 Nodes Used

- **gmailTool** (×21)
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
