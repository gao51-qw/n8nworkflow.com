### 🤖 Instagram AI Agent with MCP Server – Built for Smart Engagement and Automation

#### Hi! I’m Amanda 🥰
I build intelligent automations with n8n and Make.  
This powerful workflow was designed to help teams automatically handle Instagram interactions with AI. Using **Meta Graph API**, **LangChain**, **MCP Server**, and **GPT-4o**, it allows your AI agent to **search for posts, read captions, fetch comments**, and even **reply or message followers**, all through structured tools.

---

### 🔧 What the workflow does

- Searches for recent media using Instagram ID and access token  
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
- `Webhook` and JSON for Instagram API structure

---

### ⚙️ Setup Instructions

1. Create your Instagram App in Meta Developer Portal  
2. Add your **Instagram ID** and **Access Token** in the `Set` node  
3. Update the **MCP Server Tool URL** in the `MCP Instagram` node  
   - Use your n8n server URL (e.g. `https://yourdomain.com/mcp/server/instagram/sse`)  
4. Trigger the workflow using the included `LangChain Chat Trigger`  
5. Interact via text to ask the agent to:
   - “Get latest posts”  
   - “Reply to comment X with this message”  
   - “Send DM to this user about...”  

---

### 👥 Who this is for

- Social media teams managing multiple comments  
- Brands automating engagement with followers  
- Agencies creating smart, autonomous digital assistants  
- Developers building conversational Instagram bots

---

### ✅ Requirements

- Meta Graph API access  
- Instagram Business account  
- n8n instance (Cloud or Self-hosted)  
- MCP Server configured (SSE Endpoint enabled)  
- OpenAI API Key (for GPT-4o + LangChain)

---

### 🌐 Want to use this workflow?

❤️ Buy workflows: [https://iloveflows.com](https://iloveflows.com)  
☁️ Try n8n Cloud: [https://n8n.partnerlinks.io/amanda](https://n8n.partnerlinks.io/amanda)