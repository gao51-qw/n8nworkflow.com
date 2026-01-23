# Automate FAQ responses with WhatsApp keyword detection bot

> - How it works:
This bot operates in a continuous WhatsApp monitoring loop. It analyzes messages to detect keywords in common questions (like hours, prices, and location) and sends automatic replies with predefined information. For unrecognized questions, it directs the user to manual assistance.

- Set up steps:
The initial setup involves integrating with the WhatsApp API, registering keywords and their respective responses, and defining the fallback flow. It takes only a few minutes to have the bot running with essential information.

## 📊 Basic Information

- **Workflow ID:** 5516
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 2212
- **Downloads:** 221
- **Created:** 2025/7/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5516)

## 👤 Author

- **Name:** Solido AI
- **Username:** @solidoai

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **whatsAppTrigger** 
- **if** 
- **set** (×7)
- **switch** 
- **whatsApp** (×2)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
