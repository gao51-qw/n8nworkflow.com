**Gmail MCP Server**
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
