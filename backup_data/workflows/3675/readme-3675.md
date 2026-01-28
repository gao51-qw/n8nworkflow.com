# MCP Supabase server for AI agent with RAG & multi-tenant CRUD

> # Supabase AI Agent with RAG & Multi-Tenant CRUD  
**Version**: 1.0.0  
**n8n Version**: 1.88.0+  
**Author**: Koresolucoes 
**License**: MIT  

---

## Description  
A stateful AI agent workflow powered by **Supabase** and **Retrieval-Augmented Generation (RAG)**. Enables persistent memory, dynamic CRUD operations, and multi-tenant data isolation for AI-driven applications like customer support, task orchestration, and knowledge management.  

**Key Features**:  
- 🧠 **RAG Integration**: Leverages OpenAI embeddings and Supabase vector search for context-aware responses.  
- 🗃️ **Full CRUD**: Manage `agent_messages`, `agent_tasks`, `agent_status`, and `agent_knowledge` in real time.  
- 📤 **Multi-Tenant Ready**: Supports per-user/organization data isolation via dynamic table names and webhooks.  
- 🔒 **Secure**: Role-based access control via Supabase Row Level Security (RLS).  

---

## Use Cases  
1. **Customer Support Chatbots**: Persist conversation history and resolve queries using institutional knowledge.  
2. **Automated Task Management**: Track and update task statuses dynamically.  
3. **Knowledge Repositories**: Store and retrieve domain-specific information for AI agents.  

---

## Instructions  
### 1. Import Template  
- Go to **n8n &gt; Templates &gt; Import from File** and upload this workflow.  

### 2. Configure Credentials  
- Add your **Supabase** and **OpenAI** API keys under **Settings &gt; Credentials**.  

### 3. Set Up Multi-Tenancy (Optional)  
- **Dynamic Webhook Path**:  
  Replace the default webhook path with `/mcp/tool/supabase/:userId` to enable per-user routing.  
- **Table Names**:  
  Use a **Set Node** to dynamically generate table names (e.g., `agent_messages_{{userId}}`).  

### 4. Activate & Test  
- Enable the workflow and send test requests to the webhook URL.  

---

## Tags  
`AI Agent` `RAG` `Supabase` `CRUD` `Multi-Tenant` `OpenAI` `Automation`  

---

## Screenshots  
![Captura de tela 20250423 124013.png](fileId:1158)
![Captura de tela 20250423 123954.png](fileId:1159)

---

## License  
This template is licensed under the MIT License.  

## 📊 Basic Information

- **Workflow ID:** 3675
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 14245
- **Downloads:** 1424
- **Created:** 2025/4/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3675)

## 👤 Author

- **Name:** Luciano Gutierrez
- **Username:** @koresoluciones

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **stickyNote** (×4)
- **supabaseTool** (×20)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
