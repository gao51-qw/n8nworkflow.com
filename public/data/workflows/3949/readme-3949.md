# Automated Facebook comment management with GPT-4o and LangChain

> ### 🤖 Facebook AI Agent with MCP Server – Built for Smart Engagement and Automation

#### Hi! I’m Amanda 🥰😘 — I build intelligent automations with n8n and Make.  
This powerful workflow was designed to help teams automatically handle Facebook page interactions with AI. Using **Meta Graph API**, **LangChain**, **MCP Server**, and **GPT-4o**, it allows your AI agent to **search for posts, read captions, fetch comments**, and even **reply or message followers**, all through structured tools.

---

### 🔧 What the workflow does

- Searches for recent media using Facebook Page ID and access token  
- Reads and extracts captions or media URLs  
- Fetches comments and specific replies from each post  
- Replies to comments automatically with GPT-generated responses  
- Sends direct messages to followers who commented  
- Maps user input and session to keep memory context via LangChain  
- Communicates via Server-Sent Events (SSE) using your MCP Server URL

---

### 🧰 Nodes & Tech Used

- `LangChain Agent` + `Chat Model` with GPT-4o  
- `Memory Buffer` for session memory  
- `toolHttpRequest` to search media, comments, and send replies  
- `MCP Trigger` and `MCP Tool` (custom SSE connection)  
- `Set` node for input and variable assignment  
- `Webhook` and JSON for Facebook API structure

---

### ⚙️ Setup Instructions

1. Create your Facebook App in Meta Developer Portal  
2. Add your **Facebook Page ID** and **Access Token** in the `Set` node  
3. Update the **MCP Server Tool URL** in the `MCP Facebook` node  
   - Use your n8n server URL (e.g. `https://yourdomain.com/mcp/server/facebook/sse`)  
4. Trigger the workflow using the included `LangChain Chat Trigger`  
5. Interact via text to ask the agent to:
   - “Get latest posts”  
   - “Reply to comment X with this message”  
   - “Send DM to this user about...”  

---

### 👥 Who this is for

- Social media teams managing multiple Facebook pages  
- Brands automating engagement with followers  
- Agencies creating smart, autonomous digital assistants  
- Developers building conversational bots for Facebook

---

### ✅ Requirements

- Meta Graph API access  
- Facebook Page (with permissions)  
- n8n instance (Cloud or Self-hosted)  
- MCP Server configured (SSE Endpoint enabled)  
- OpenAI API Key (for GPT-4o + LangChain)

---

### 🌐 Want to use this workflow?

❤️ Buy workflows: [https://iloveflows.com](https://iloveflows.com)  
☁️ Try n8n Cloud: [https://n8n.partnerlinks.io/amanda](https://n8n.partnerlinks.io/amanda)


## 📊 Basic Information

- **Workflow ID:** 3949
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1685
- **Downloads:** 168
- **Created:** 2025/5/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3949)

## 👤 Author

- **Name:** Amanda Benks
- **Username:** @amanda

## 🏷️ Categories

- Social Media
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** (×5)
- **set** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
