# Auto-triage GitHub issues with GPT-4o, Pinecone

> Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

🚀 GitHub MCP Webhook Tool Sub-workflow: AI-Powered Repo Assistant

&gt; Transform your GitHub workflows with a customizable AI agent that integrates seamlessly via a single webhook. Think "Copilot for repos," but you own the code, prompts, and data.

👀 Key Features

    🔧 Fully Customizable: Tweak system prompts, swap AI models (GPT-4o, 4o-mini), or add tools like spam detection.

    📦 Single Webhook Integration: Add AI to any existing workflow with 1 HTTP node.

    🤖 Auto-Triage & Action: Sort issues by severity, auto-comment, flag spam (e.g., NSFW content), and ping teams via Discord/Slack.

    🔍 Codebase-Aware: Queries your repo’s docs and code for context-aware responses (Pinecone vector stores optional).

    💸 Cost-Friendly: Starts at $1 – cheaper than a coffee, infinitely more useful.

🛠️ Getting Started

    🚀 Deploy the Template: Clone the "GitHub MCP Server" workflow.

    🔑 Set Variables: Update repoOwner, repoName, and Discord/Slack IDs in the "CHANGE THESE!!!" node.

    🌲 Pinecone Setup: Pre-index your docs/code for lightning-fast queries using the vector nodes.

    🌍 Go Live: Trigger via webhook – use it for issue replies, triage, or even automated PR drafts!

💡 Use Cases

    🚨 Auto-Alert Teams: Flag critical bugs to senior devs, route FAQs to interns.

    🗑️ Spam Shield: Delete explicit issues instantly, quarantine self-promo for review.

    📝 Docs Bot: Answer contributor questions using your repo’s documentation.

## 📊 Basic Information

- **Workflow ID:** 4248
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 195
- **Downloads:** 19
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4248)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×3)
- **webhook** 
- **respondToWebhook** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
