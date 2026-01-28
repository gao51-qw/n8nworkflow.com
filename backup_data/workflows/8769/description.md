# WooCommerce AI Agent — n8n Workflow (Overview)

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
