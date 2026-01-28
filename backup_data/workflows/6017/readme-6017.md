# Build a customer support agent with Grok-4, Google Docs, and Telegram [RAG]

> 🤖 Grok-4 Customer Support Agent with Document-Based Intelligence
Template [RAG]

This workflow creates a smart, AI-powered customer support agent using Grok-4 that can answer questions based on a preloaded Google Doc knowledge base. It listens for incoming customer queries via Telegram, then uses Grok-4’s language reasoning + memory features to generate helpful responses pulled directly from the doc.

Watch the Step-by-Step Tutorial of this Workflow: https://www.youtube.com/watch?v=OXzsh-Ba-8Y&t=2s

It’s perfect for solopreneurs, startups, or businesses that want to:
Automate first-level support
Build a Telegram-based knowledge agent
Answer FAQs using internal docs (like manuals, policies, product details)

🔍 How It Works:
Telegram Trigger – Listens for incoming messages from users

Google Docs Tool – Retrieves a specified doc to serve as the knowledge base

Grok-4 AI Agent – Uses xAI’s latest LLM with built-in memory and the document as a tool

Memory Buffer – Keeps track of ongoing context in the conversation

Telegram Reply – Sends the final response back to the customer

🧠 Tools & Integrations Used:
xAI Grok-4 Model (via Langchain-compatible node)

Google Docs Tool (as a reference knowledge base)

Telegram Bot API (chat interface)

n8n Agent Framework (for chaining memory, model, and tools)

💡 Use Cases:
AI-powered FAQ assistant for your product

Internal HR bot answering company policy questions

Support assistant trained on onboarding documents or technical manuals

Private support bot for VIP groups on Telegram

## 📊 Basic Information

- **Workflow ID:** 6017
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1742
- **Downloads:** 174
- **Created:** 2025/7/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6017)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatXAiGrok** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleDocsTool** 
- **@n8n/n8n-nodes-langchain.agent** 
- **telegram** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
