# AI agent integration for Bubble apps with MCP protocol data access

> Let AI agents fetch communicate with your Bubble app automatically. It connects direcly with your Bubble data API. This workflow is designed for teams building AI tools or copilots that need seamless access to Bubble backend data via natural language queries.


**How it works**
- Triggered via a webhook from an AI agent using the MCP (Model-Chain Prompt) protocol.
- The agent selects the appropriate data tool (e.g., projects, user, bookings) based on user intent.
- The workflow queries your Bubble database and returns the result.
- Ideal for integrating with ChatGPT, n8n AI-Agents, assistants, or autonomous workflows that need real-time access to app data.


**Set up steps**
- Enable access to your Bubble data or backend APIs (as needed).
- Create a Bubble admin token.
- Add your Bubble node/s to your n8n workflow.
- Add your Bubble admin token.
- Configer your Bubble node/s.
- Copy the generated webhook URL from the MCP Server Trigger node and register it with your AI tool (e.g., LangChain tool loader).
- (Optional) Adjust filters in the “Get an Object Details” node to match your dataset needs.

Once connected, your AI agents can automatically retrieve context-aware data from your Bubble app, no manual lookups required.



## 📊 Basic Information

- **Workflow ID:** 4952
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 600
- **Downloads:** 60
- **Created:** 2025/6/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4952)

## 👤 Author

- **Name:** Mohamed Salama
- **Username:** @salama

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **bubbleTool** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
