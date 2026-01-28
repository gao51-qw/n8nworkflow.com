# WhatsApp support bot with keyword routing & GPT-4.1-mini responses

> **Description:**

Deliver instant answers and automate customer support on WhatsApp with this intelligent n8n workflow template! The system routes incoming messages using keyword-based logic and provides dynamic, AI-powered responses for greetings, FAQs, and complex queries—ensuring your customers always get the right reply without manual effort.

This automation is designed for businesses, service providers, and support teams who want to streamline WhatsApp engagement, reduce manual workload, and provide consistent, conversational answers that scale with demand.

**What This Template Does (Step-by-Step):**

 📲 Capture Incoming WhatsApp Messages
 Triggers on every new message received via WhatsApp API.
🔄 Keyword-Based Routing
 Sequential IF conditions check for predefined keywords (e.g., “hi”, “pricing”, “support”).
💬 Send Tailored Keyword Responses
 Returns fast, pre-written responses for greetings, FAQs, or common scenarios.
🤖 AI-Powered Fallback with OpenAI Chat Model
 For advanced or unrecognized queries, the workflow generates context-aware, conversational answers using AI.
🚀 Deliver Automated Replies in Real Time
 Replies are instantly sent back to WhatsApp for seamless customer communication.
📊 Optional: Conversation Logging
 Extend the template to log chats in Notion, Airtable, or your CRM for tracking and insights.

**Perfect For:**

Customer support teams handling repetitive queries
Businesses wanting instant replies for FAQs & greetings
Service providers delivering personalized, scalable engagement
Anyone looking to combine rule-based automation with AI intelligence

**Built With:**

WhatsApp API (message triggers & replies)
n8n IF Node (keyword routing)
OpenAI Chat Model (AI fallback for complex queries)
Extendable storage (Notion, Google Sheets, Airtable, etc.)

**Key Benefits:**

 ✅ Faster, automated customer support on WhatsApp
 🔍 Accurate, human-like replies for complex questions
 🧠 Hybrid system: keyword rules + AI intelligence
 📒 Centralized chat logging for insights (optional)
 🛠 100% no-code and customizable in n8n

## 📊 Basic Information

- **Workflow ID:** 8178
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 792
- **Downloads:** 79
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8178)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **if** (×3)
- **whatsApp** (×4)
- **whatsAppTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
