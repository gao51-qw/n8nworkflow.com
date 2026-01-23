# Manage WooCommerce store with natural language using GPT-4.1 and MCP server

> # WooCommerce AI Agent — n8n Workflow (Overview)

**Description:** Turn your WooCommerce store into a conversational AI assistant — create products, place orders, run reports and manage coupons using natural language via n8n + an MCP Server.

**Key features**
- Natural-language commands mapped to WooCommerce actions (products, orders, reports, coupons).  
- Structured JSON outputs + lightweight mapping to avoid schema errors.  
- Calls routed through your MCP Server for secure, auditable tool execution.  
- Minimal user prompts — agent auto-fetches context and asks only when necessary.  
- Extensible: add new tools or customize prompts/mappings easily.

# Demo of the workflow:

[Youtube Video](https://youtu.be/HuFGGH29uyQ)

# 🚀 Setup Guide: WooCommerce + AI Agent Workflow in n8n

## 1. Prerequisites
- Running n8n instance  
- WooCommerce store with REST API keys  
- OpenAI API key  
- MCP server (production URL)  

---

## 2. Import Workflow
1. Open n8n dashboard  
2. Go to **Workflows → Import**  
3. Upload/paste the workflow JSON  
4. Save as `WooCommerce AI Agent`  

---

## 3. Configure Credentials

### OpenAI
- Create new credential → **OpenAI API**  
- Add your API key → Save & test  

### WooCommerce
- Create new credential → **WooCommerce API**  
- Enter Base URL, Consumer Key & Secret → Save & test  

### MCP Client
- In **MCP Client node**, set **Server URL** to your MCP server production URL  
- Add authentication if required  

---

## 4. Test Workflow
1. Open workflow in editor  
2. Run a sample request (e.g., create a test product)  
3. Verify product appears in WooCommerce  

---

## 5. Activate Workflow
- Once tested, click **Activate** in n8n  
- Workflow is now live 🎉  

---

## 6. Troubleshooting
- **Schema errors** → Ensure fields match WooCommerce node requirements  
- **Connection issues** → Re-check credentials and MCP URL  


## 📊 Basic Information

- **Workflow ID:** 8769
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 820
- **Downloads:** 82
- **Created:** 2025/9/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8769)

## 👤 Author

- **Name:** Rohit Dabra
- **Username:** @rohitdabra

## 🏷️ Categories

- CRM
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **wooCommerceTool** (×18)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
