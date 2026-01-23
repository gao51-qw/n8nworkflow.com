# Simple scheduling and internal document query bot with Telegram

> Template Overview This workflow demonstrates how to build a simple Telegram bot that can schedule events, check service prices, and query company documents using AI integrated with MCP and RAG. It’s designed to show how n8n can connect conversational interfaces with internal tools in a clear and scalable way.

Key Concepts (explained simply):

MCP (Multi‑Channel Processing): A framework that lets the AI agent connect to external services (like Google Calendar, Docs, Sheets) through MCP Clients and Servers. Think of it as the “bridge” between the bot and your tools.

RAG (Retrieval‑Augmented Generation): A method where the AI retrieves information from documents before generating a response. This ensures answers are accurate and based on your actual data, not just the AI’s memory.

⚙️ Setup Instructions (step‑by‑step)
Create a Telegram Bot

Use BotFather to generate a bot and get the API token.

Configure Google Services

Make sure you have access to Google Calendar, Docs, and Sheets.

Connect them via MCP Server so the agent can call these tools.

Set up Redis Memory

Create an Upstash Redis account.

Configure it in the workflow to store conversation history.

Import the Template into n8n

Load the workflow and update credentials (Telegram, Google, Redis).

Test the Bot

Send a message like “Schedule laptop maintenance tomorrow” and check if it creates an event in Google Calendar.

🛠 Troubleshooting Section
Bot not responding?

Verify your Telegram API token is correct.

Google services not working?

Check that your MCP Server is running and properly connected to Calendar, Docs, and Sheets.

Conversation context lost?

Ensure Redis memory is configured and accessible.

Wrong date/time?

Confirm that relative dates (“tomorrow”, “next week”) are being converted into ISO format correctly.

Customization Examples
This template is flexible and can be adapted to different scenarios. Here are some ideas:

Change the communication channel Replace the Telegram Trigger with WhatsApp, Slack, or a Webhook to fit your preferred platform.

Expand document sources Connect additional Google Docs or Sheets, or integrate with other storage (e.g., Notion, Confluence, or internal databases) to broaden the bot’s knowledge base.

Add new services Extend the workflow to handle more requests, such as booking meeting rooms, checking inventory, or creating support tickets.

Personalize responses Customize the AI Agent’s tone and style to match your company’s branding (formal, friendly, or technical).

Segment agents by role Create specialized agents (e.g., one for scheduling, one for pricing, one for troubleshooting) to keep the workflow modular and scalable.

Integrate external APIs Connect to services like Google Calendar, CRM systems, or helpdesk platforms to automate more complex tasks.

## 📊 Basic Information

- **Workflow ID:** 11234
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 155
- **Downloads:** 15
- **Created:** 2025/11/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11234)

## 👤 Author

- **Name:** Curso Bot com IA
- **Username:** @cursobotcomia

## 🏷️ Categories

- Internal Wiki
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.mcpTrigger** (×2)
- **googleSheetsTool** (×2)
- **googleDocsTool** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** (×2)
- **dateTimeTool** 
- **telegram** 
- **telegramTrigger** 
- **googleCalendarTool** (×4)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryRedisChat** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
