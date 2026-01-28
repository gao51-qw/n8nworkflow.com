# Automate customer support with WhatsApp AI assistant for Whatsapp groups

> ## How it works

Your WhatsApp AI Assistant automatically handles customer inquiries by linking your Google Docs knowledge base to incoming WhatsApp messages. The system instantly processes customer questions, references your business documentation, and delivers AI-powered responses through OpenAI or Gemini - all without you lifting a finger. Works seamlessly in individual chats and WhatsApp groups where the assistant can respond on your behalf.

## Set up steps

**Time to complete: 15-30 minutes**

**Step 1:** Create your WhapAround account and connect your WhatsApp number (5 minutes)

**Step 2:** Prepare your Google Doc with business information and add the document ID to the system (5 minutes)

**Step 3:** Configure the WhatsApp webhook and map message fields (10 minutes)

**Step 4:** Connect your OpenAI or Gemini API key (3 minutes)

**Step 5:** Send a test message to verify everything works (2 minutes)

**Optional:** Set up PostgreSQL database for conversation memory and configure custom branding/escalation rules (additional 15-20 minutes)

*Detailed technical configurations, webhook URLs, and API parameter settings are provided within each workflow step to guide you through the exact setup process.*

## 📊 Basic Information

- **Workflow ID:** 6387
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 2122
- **Downloads:** 212
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6387)

## 👤 Author

- **Name:** Jamot
- **Username:** @jamot

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **code** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **aiTransform** 
- **googleSheets** 
- **dateTime** 
- **stickyNote** 
- **googleDocs** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **webhook** 
- **respondToWebhook** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
