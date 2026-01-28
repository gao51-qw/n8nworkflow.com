# Manage Google Calendar via WhatsApp with GPT-4 virtual assistant

> How it works
• Allows users to manage their Google Calendar via WhatsApp using natural language
• Handles event creation, updates, deletions, availability checks, and agenda overviews
• AI agent interprets the user’s message and triggers the appropriate calendar action
• Responses are sent back to the user via WhatsApp, with confirmation or schedule info

Set up steps
• Set up a WhatsApp Business Cloud account and configure your webhook
• Connect your Google Calendar using n8n credentials
• Deploy OpenAI API key for natural language understanding
• Link each calendar action (create, update, delete, search) to the TimePilot agent
• Customize confirmation messages and automate reply formatting

Note: More detailed configuration and custom logic are described inside sticky notes within the workflow.

## 📊 Basic Information

- **Workflow ID:** 5368
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 9298
- **Downloads:** 929
- **Created:** 2025/6/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5368)

## 👤 Author

- **Name:** Floyd Mahou
- **Username:** @floyd

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** 
- **googleCalendarTool** (×4)
- **whatsAppTrigger** 
- **whatsApp** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
