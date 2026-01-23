# Email drafting & news research assistant with OpenAI, Gmail, Tavily & Perplexity

> AI Agent MCP for Email & News Research

Build a chat-first MCP-powered research and outreach agent. This workflow lets you ask questions in an n8n chat, then the agent researches news (via Tavily + Perplexity through an MCP server) and drafts emails (via Gmail through a separate MCP server). It uses OpenAI for reasoning and short-term memory for coherent, multi‑turn conversations.

Watch build along videos for workflows like these on: www.youtube.com/@automatewithmarc

What this template does

Chat-native trigger: Start a conversation and ask for research or an email draft.

MCP client tools: The agent talks to two MCP servers — one for Email work, one for News research.

News research stack: Uses Tavily (search) and Perplexity (LLM retrieval/answers) behind a News MCP server.

Email stack: Uses Gmail Tool to generate and send messages via an Email MCP server.

Reasoning + memory: OpenAI Chat Model + Simple Memory for context-aware, multi-step outputs.

How it works (node map)

When chat message received → collects your prompt and routes it to the agent.

AI Agent (system prompt = “helpful email assistant”) → orchestrates tools via MCP Clients.

OpenAI Chat Model → reasoning/planning for research or email drafting.

Simple Memory → keeps recent chat context for follow-ups.

News MCP Server exposes:

Tavily Tool (Search) and Perplexity Tool (Ask) for up-to-date findings.

Email MCP Server exposes:

Gmail Tool (To, Subject, Message via AI fields) to send or draft emails.

The MCP Clients (News/Email) plug into the Agent, so your single chat prompt can research and then draft/send emails in one flow.

Requirements

n8n (Cloud or self‑hosted)

OpenAI API key for the Chat Model (set on the node)

Tavily, Perplexity, and Gmail credentials (connected on their respective tool nodes)

Publicly reachable MCP Server endpoints (provided in the MCP Client nodes)

Setup (quick start)

Import the template and open it in the editor.

Connect credentials on: OpenAI, Tavily, Perplexity, and Gmail tool nodes.

Confirm MCP endpoints in both MCP Client nodes (News/Email) and leave transport as httpStreamable unless you have special requirements.

Run the workflow. In chat, try:

“Find today’s top stories on Kubernetes security and draft an intro email to Acme.”

“Summarize the latest AI infra trends and email a 3‑bullet update to my team.”

Inputs & outputs

Input: Natural-language prompt via chat trigger.

Tools used: News MCP (Tavily + Perplexity), Email MCP (Gmail).

Output: A researched summary and/or a drafted/sent email, returned in the chat and executed via Gmail when requested.

Why teams will love it

One prompt → research + outreach: No tab‑hopping between tools.

Up-to-date answers: Pulls current info through Tavily/Perplexity.

Email finalization: Converts findings into send-ready drafts via Gmail.

Context-aware: Memory keeps threads coherent across follow-ups.

Pro tips

Use clear verbs in your prompt: “Research X, then email Y with Z takeaways.”

For safer runs, point Gmail to a test inbox first (or disable send and only draft).

Add guardrails in the Agent’s system message to match your voice/tone.

## 📊 Basic Information

- **Workflow ID:** 7679
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 395
- **Downloads:** 39
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7679)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **gmailTool** (×3)
- **@tavily/n8n-nodes-tavily.tavilyTool** (×2)
- **perplexityTool** 
- **@n8n/n8n-nodes-langchain.mcpTrigger** (×2)
- **@n8n/n8n-nodes-langchain.mcpClientTool** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
