# MCP Supabase agent – manage your database with AI

> ### Hi, I’m Amanda 🌷
This workflow was built with love to help you manage your **Supabase database using natural language**, powered by the MCP (Multi-Channel Protocol) AI Agent on n8n.

With just a message like “update the status to active where city is New York”, your agent will know exactly what to do — safely, step by step, and always asking for confirmation before deleting anything.

It’s ideal for developers who want a smart assistant to create, update, delete or search database records without writing SQL or opening Supabase.

---

## What this workflow does

- Receives messages through a chat interface or webhook  
- Translates them into actions using GPT-4o (via LangChain Agent)  
- Interacts with Supabase using a custom MCP tool  
- Supports create, update, delete, search (single or all rows)  
- Handles confirmations, validations, and missing data checks  

---

## Setup (quick and easy 💫)

1. Connect your Supabase credentials  
2. Adjust your table and field names  
3. Link the MCP webhook to your AI frontend (Typebot, WhatsApp, etc.)  
4. Customize the system message to reflect your tone of voice  
5. Start chatting — your agent is ready to assist!

---

✅ Works on **n8n Cloud** and **Self-Hosted**  
🧠 Built with GPT-4o + LangChain + Supabase + MCP Trigger  
💡 No code or SQL required

---

## Want it tailored to your project?
#### ❤️ Buy Workflows: https://iloveflows.gumroad.com 
##### 💬 Hire My Services: +5517991557874 (WhatsApp)


## 📊 Basic Information

- **Workflow ID:** 3641
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 2690
- **Downloads:** 269
- **Created:** 2025/4/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3641)

## 👤 Author

- **Name:** Amanda Benks
- **Username:** @amanda

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **supabaseTool** (×5)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
