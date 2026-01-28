# Restaurant GPT-4 receptionist for bookings & delivery using Vapi, Telegram, Airtable

> ## This AI receptionist handles restaurant bookings and delivery orders with Vapi, Telegram, and Airtable

## Who’s it for
This n8n template is built for **restaurants** that want to automate table bookings and delivery or takeaway orders using an AI receptionist. It’s suitable for small to mid-sized restaurants that receive bookings and orders via voice calls or Telegram and want a structured, reliable backend without manual handling.

## How it works
The workflow powers an AI receptionist that operates through **Vapi (voice)** and **Telegram (chat)**.  
For table bookings, it collects party size and preferred time, checks table availability within the requested time range, and returns available options or a “no availability” response.  
For orders, the menu is fetched from **Airtable**, items are validated, prices are calculated, and order details are collected. Delivery addresses are validated and checked against supported areas. If delivery is unavailable, the system automatically offers takeaway. All confirmed bookings and orders are saved to Airtable.

## How to set up
1. Download JSON flows from the Dropbox folder, copy Airtable base with template tables to your account.
2. Get Airtable, OpenAI, Telegram Bot, Google Maps API credentials. 
3. Set up credentials and test.

## How to customize the workflow
You can plug a VAPI assistant. Copy the prompt from the AI agent and paste it into VAPI system prompt section. Also add MCP tool and call it `restaurant tool`. You can adjust booking rules, table capacity logic, menu structure, restaurant location, delivery zones, pricing calculations, and message wording to match your restaurant’s operations.


## 📊 Basic Information

- **Workflow ID:** 12004
- **Complexity:** advanced
- **Node Count:** 122
- **Views:** 358
- **Downloads:** 35
- **Created:** 2025/12/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12004)

## 👤 Author

- **Name:** Max
- **Username:** @maksik

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×12)
- **executeWorkflowTrigger** 
- **if** (×5)
- **set** (×23)
- **airtable** (×12)
- **code** (×10)
- **noOp** (×5)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **telegram** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **httpRequest** 
- **stickyNote** (×43)
- **telegramTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 122 nodes with 63 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
