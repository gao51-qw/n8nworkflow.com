# WhatsApp assistant with Gemini AI for calendar management via Evolution API

> ## AI Agent that uses MCP Server to execute actions requested via Evolution API.
 This workflow receives messages and media from WhatsApp via the Evolution API, converts the content into structured inputs, and forwards them to an AI Agent capable of triggering MCP tools to execute external actions.

### 🔧  **How it works**
- A **Webhook** receives messages sent to WhatsApp via the **Evolution API**.
- The **"Message Type"** node detects and forwards the received media. It handles the types `Text`, `Image`, `Audio`, and `Document`. If it is another media type, the fallback forwards a "media not supported" message to the user.
- The message goes to the system where it retrieves the **Base64** of the media.
- The media is converted into **Binary File(s)** and a Gemini node will generate a text input for the agent.
- The **AI Agent** receives the structured input and calls the appropriate **MCP Tool**. In this example, only one **MCP Server** was configured.
- The AI ​​Agent generates the output and sends it to the user.

### 🗒️ Requirements
- Evolution API Account, with the instance configured.
- Gemini API.
- Google Calendar API.
- MCP Server (Internal or external, whichever you prefer) configured and with a URL to link to the MCP Tool.

### ✔️ How to set up
- **Configure the Evolution API webhook**
    - Copy the webhook URL generated in the first node.
    - In the Evolution API panel, go to the instance &gt; webhook &gt; paste the URL into the corresponding field.
- **Configure Google Calendar credentials**
    - In n8n, go to *Credentials → Create New* and select **Google Calendar OAuth2**.
    - Select this credential in all Google Calendar MCP nodes (Get, Create, Update, Delete).
- **Enable MCP Server nodes**
    - Copy the MCP Server URL and paste it into the “**Endpoint** field of the MCP Tool.
- **Configure Evolution API nodes**
    - In all Evolution API nodes, you need to fill in the “**instance** field with the name of your Evolution API instance.

### 🦾 how to adapt it?
- **Customize or extend the MCP Tools**
    - You can add new MCP tools (e.g., Google Sheets, Notion, ClickUp).
    - Only the agent prompt needs to be updated; the workflow structure remains the same.
- I opted to use simple memory, but if you want the agent to remember the entire conversation, I recommend changing the memory type; as it is, it will only remember the last 8 messages.
- If you're going to use a tool like Chatwoot or TypeBot, simply change the webhook URL and pay attention to the objects that the switch (Message Type) uses.

## 📊 Basic Information

- **Workflow ID:** 10944
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 600
- **Downloads:** 60
- **Created:** 2025/11/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10944)

## 👤 Author

- **Name:** Pedro Protes
- **Username:** @pedroprotes

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **switch** 
- **n8n-nodes-evolution-api.evolutionApi** (×5)
- **@n8n/n8n-nodes-langchain.googleGemini** (×3)
- **set** (×4)
- **convertToFile** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **stickyNote** (×5)
- **googleCalendarTool** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
