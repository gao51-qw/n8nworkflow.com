# Create a WhatsApp customer support bot with OpenAI, calendar & email integration

> ### Who’s it for  
This template is for businesses, customer support teams, and professionals who want to deliver **AI-powered WhatsApp assistance**. It helps automate conversations, schedule meetings, answer FAQs, and send follow-up emails — all from WhatsApp.  

### How it works  
- A customer sends a WhatsApp message, which is captured by the **Twilio Trigger**.  
- The incoming text is formatted and passed to the **AI Support Agent**.  
- Based on the request, the agent can:  
  - Manage Google Calendar events (create, list, delete).  
  - Answer questions from your knowledge base (Supabase + embeddings).  
  - Draft and send emails via Gmail.  
  - Reply directly on WhatsApp with the appropriate response.  

### How to set up  
1. Connect your **Twilio account** with WhatsApp enabled.  
2. Add your **OpenAI API key**.  
3. Connect **Google Calendar**.  
4. Connect **Gmail**.  
5. Configure **Supabase** for knowledge base storage.  

### Requirements  
- Twilio account (with WhatsApp number)  
- OpenAI API key  
- Google Calendar  
- Gmail account  
- Supabase project  

### How to customize  
- Update the **Set Fields node** with your Twilio number, API keys, and Gmail details.  
- Add custom documents to Supabase for domain-specific FAQs.  
- Adjust AI prompts for different roles (e.g., booking bot, HR assistant, customer support).  
- Extend by adding more tools (CRM, Slack, Notion, etc.) as needed.  

![Whatsapp Text Agent.png](fileId:2315)

## 📊 Basic Information

- **Workflow ID:** 8287
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 1575
- **Downloads:** 157
- **Created:** 2025/9/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8287)

## 👤 Author

- **Name:** Nabin Bhandari
- **Username:** @knabinbhandari

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **googleCalendarTool** (×4)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×3)
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **gmailTool** 
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **twilio** 
- **twilioTrigger** 
- **set** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
