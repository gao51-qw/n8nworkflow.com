# Track OpenAI token usage and AI agent metrics with Google Sheets dashboard

> **What it does**
Captures token usage and cost from your AI Agent/LLM. Logs model, tokens, cost, tool use, and conversation I/O to Google Sheets for simple observability and billing.

**Perfect for**
Developers adding usage monitoring to AI agents.
Teams needing cost transparency in prototypes.

**How it works**

1. Chat Trigger collects user input for the AI Agent.
2. A Set node injects metadata like workflow, execution, and client IDs.
3. LangChain Code node returns a configured Chat model with a callback that reads usage metadata.
4. The callback computes input, output, and total costs based on per‑million token prices you define.
5. It appends token metrics to a Google Sheet via the Google Sheets Tool.
6. The Agent records intermediate tool calls.
7. An If node checks whether a tool was used.
8. When tools are used, the workflow logs input, output, tool name, and metadata to an Observability sheet.

**How to use**
SELF-HOSTED N8N ONLY - the Langchain Code node is only available in the self-hosted version of n8n. It is not available in n8n cloud.

**Requirements**
Self-hosted version of n8n


**If you have any questions in running the workflow, see the attached video:** https://youtu.be/JSulRS128MA

## 📊 Basic Information

- **Workflow ID:** 7231
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 741
- **Downloads:** 74
- **Created:** 2025/8/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7231)

## 👤 Author

- **Name:** Hunyao
- **Username:** @hun-yao

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheetsTool** 
- **stickyNote** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.code** 
- **if** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
