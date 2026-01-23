# Smart knowledge base with Google Docs, Discord & GPT-4o-mini

> Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

🧠 MCP Memory Core: AI-Powered Knowledge Base
Store, retrieve, and act on organizational memories using Google Docs + Discord. Part of the MCP ecosystem.

### Advanced toolchain with multi-platform integration

🔍 What It Does

    📚 Save Memories: Log conversations, decisions, or code snippets to a Google Doc (timestamped).

    🔍 Retrieve Memories: Fetch past context for AI agents or workflows.

    📤 Auto-Send Updates: Push memories to Discord channels/DMs via GPT-4o-mini formatting.

    🤖 MCP-Compatible: Works with your existing GitHub/Discord MCP workflows.

🚀 Key Features

    🌐 Multi-Trigger: Use via:

        save_memory / retrieve_memory API routes.

        Discord mentions via MCP Server integration.

    🔐 Secure Storage: Memories live in your Google Docs (no third-party DB).

    🧩 Modular Design: Swap Google Docs for Notion/Airtable with minimal changes.

    🤖 AI Cleanup: GPT-4o-mini reformats raw data into Discord-friendly messages.

⚙️ Use Cases

    Team Knowledge Base: Archive meeting notes accessible via Discord commands.

    AI Context Window: Give bots long-term memory for better issue resolution.

    Audit Trail: Track project decisions with timestamps.

🛠️ Setup Guide

    📝 Configure Google Docs:

        In "Edit Fields", set sheet_id to your Google Doc URL.

    🤖 Discord Permissions:

        Update discord_server_id, discord_channel_id, and discord_user_id.

    🔗 Link to MCP:

        Use the MCP Server Trigger node to connect to existing workflows.

    🧠 Customize AI:

        Tweak the AI Agent prompt for different formatting styles.

Works great with the $1 GitHub MCP Server template!

## 📊 Basic Information

- **Workflow ID:** 4388
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 374
- **Downloads:** 37
- **Created:** 2025/5/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4388)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- AI RAG

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **googleDocs** (×3)
- **set** (×3)
- **switch** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **discordTool** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
