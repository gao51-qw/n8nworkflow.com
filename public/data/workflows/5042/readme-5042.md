# Manage emails via WhatsApp with Gmail, GPT and voice recognition

> ## 🔍 How it works  
This workflow turns WhatsApp into a smart email command center using AI.

Users can speak or type instructions like:  
- "Send a follow-up to Claire”
- "Write a draft email to Claire to confirm tomorrow’s meeting at 5 PM”
- "What is the name of Claire's firm?”

The agent transcribes voice notes, extracts intent with GPT, interacts with Gmail (send, draft, search), and replies with a confirmation via WhatsApp — either as text or a voice message.

## ⚙️ Key Modules Used
- WhatsApp Business Webhook (Meta)
- OpenAI Whisper (voice transcription)
- GPT (intent + content generation)
- Gmail (search, draft, send)
- Airtable (contact lookup + memory logging)

## 🧠 Memory Layer (Optional)
The agent logs key fields in Airtable:
- Recipient email
- Company / job title
And more...
This creates a lightweight "gut memory” so the agent feels context-aware.

## 🗺️ Setup Steps
1. Connect WhatsApp Business API (via Meta Developer Console)
2. Add OpenAI and Gmail credentials in n8n
3. Link your Airtable base for contacts and logging

## 🧩 Best Use Cases
- Hands-free email reply while commuting
- Fast Gmail access for busy consultants / solopreneurs
- Custom business agents for service-based professionals

## ⏱️ Estimated Setup Time
30–60 minutes

## ✅ Requirements
- WhatsApp Business Cloud access
- OpenAI API Key
- Gmail or Google Workspace
- Airtable account (free plan OK)
- n8n instance (cloud or self-hosted with HTTPS)

## 📊 Basic Information

- **Workflow ID:** 5042
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 2842
- **Downloads:** 284
- **Created:** 2025/6/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5042)

## 👤 Author

- **Name:** Floyd Mahou
- **Username:** @floyd

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **gmailTool** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **whatsAppTrigger** 
- **switch** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **set** (×2)
- **splitOut** 
- **whatsApp** (×4)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **code** 
- **if** 
- **airtableTool** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
