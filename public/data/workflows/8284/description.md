### WhatsApp Voice Agent with Twilio, VAPI, Google Calendar, Gmail & Supabase  

This workflow turns WhatsApp voice messages into an **AI assistant** using Twilio, VAPI, and modular MCP servers. It handles scheduling, email, and knowledge queries all by voice.  

---

### 🔎 How it works  
1. **WhatsApp → Twilio → VAPI**  
   - A WhatsApp Business number (via TwiML app) receives a voice message.  
   - Twilio streams the audio into VAPI for processing.  
2. **VAPI → n8n Webhook**  
   - VAPI interprets the intent and routes the request to the correct MCP server.  
3. **MCP Servers in n8n**  
   - 📅 **Calendar MCP** → create, fetch, update, delete Google Calendar events  
   - 📧 **Gmail MCP** → send confirmation or reminder emails  
   - 📚 **Knowledge Base MCP** → query Supabase Vector Store with OpenAI embeddings  
4. **n8n → VAPI → WhatsApp**  
   - n8n executes the task and returns the result via VAPI back to the user.  

---

### 🛠️ How to use  
- Import this workflow into your n8n instance.  
- Configure a Twilio WhatsApp-enabled number and connect it to a TwiML app.  
- Point the TwiML app to your VAPI project.  
- Add credentials for Google Calendar, Gmail, Supabase, and OpenAI in n8n.  
- Test by sending a WhatsApp voice command like:  
  - “Book a meeting tomorrow at 3pm”  
  - “Send a confirmation email to the client”  
  - “What’s included in the AI receptionist package?”  

---

### 🎨 Customisation ideas  
- Add more MCP servers (e.g. CRM, Notion, Slack).  
- Swap Supabase for another vector database.  
- Extend Gmail flows with templates or multiple senders.  
- Adjust the VAPI assistant’s tone and role to fit your brand.  

---

### 📌 Requirements  
- Twilio WhatsApp-enabled number + TwiML app (verified in WhatsApp Manager)  
- VAPI project (assistant configured)  
- n8n instance (Cloud or self-hosted)  
- Google Calendar & Gmail credentials  
- Supabase project  
- OpenAI API key  

---

### 💡 Good to know  
- Twilio must have a **verified WhatsApp Business number**.  
- VAPI handles **voice infra + intent routing**; n8n only executes actions.  
- The design is **modular**—easy to expand with new MCP servers.  
- Works best when tested with short, clear commands.  

---

### 🚀 Use cases  
- Hands-free scheduling with Google Calendar.  
- Voice-triggered email confirmations & reminders.  
- Conversational knowledge base access.  
- Extendable to CRMs, team chat, or business workflows.  

---

👉 With this setup, you get a **scalable voice-first AI agent** on WhatsApp that connects seamlessly to your business systems.  
