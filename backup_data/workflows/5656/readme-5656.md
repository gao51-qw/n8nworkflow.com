# Auto-generate WhatsApp proposals from voice or text using GPT & APITemplate

> How it works
• Transcribes a WhatsApp voice or text message from a prospect using Whisper or GPT
• Extracts key information (name, need, context, urgency) via AI
• Matches the most relevant service pack by comparing the prospect’s need with Airtable data
• Dynamically fills a branded template via APITEMPLATE (HTML or PDF)
• Generates a clean, personalized business proposal — including dynamic links (payment, calendar, etc.)
• Sends the final PDF back instantly via WhatsApp or email

Set up steps
• ⏱ Estimated setup time: 45–60 minutes
• ✅ You’ll need:
 ◦ WhatsApp Business Cloud API access (with webhook configured)
 ◦ OpenAI API key (Whisper + GPT)
 ◦ Airtable (to store service packs and client input)
 ◦ APITEMPLATE account (template with placeholders like {{nom}}, {{prix}}, {{lien_reservation}}, etc.)
 ◦ n8n instance (cloud or self-hosted)

• 📦 Create your service packs in Airtable with associated links (Stripe, Calendly…)
• 🔗 The proposal auto-includes these links dynamically inside the PDF
• 🚀 Workflow orchestrates the end-to-end process: from WhatsApp input to PDF delivery

## 📊 Basic Information

- **Workflow ID:** 5656
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 6731
- **Downloads:** 673
- **Created:** 2025/7/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5656)

## 👤 Author

- **Name:** Floyd Mahou
- **Username:** @floyd

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **whatsAppTrigger** 
- **switch** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** (×2)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **whatsApp** (×2)
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **airtableTool** 
- **@n8n/n8n-nodes-langchain.agent** 
- **apiTemplateIo** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
