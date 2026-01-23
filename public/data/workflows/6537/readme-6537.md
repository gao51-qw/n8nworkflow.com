# Inbox manager (GPT, Google Calendar & Supabase)

> ## Overview
Turn your cluttered inbox into a smart, autonomous assistant that categorizes emails, replies to leads, checks your calendar, and notifies you on Telegram—all without lifting a finger.

This workflow is designed for a marketing agency, but can be adapted for any business. It classifies incoming emails into categories like Sales, Client Communication, Reports, Billing, and Other. If it detects a new lead or priority message, it routes the email to one of two agents:
- The **Calendar Agent** checks your availability in Google Calendar and drafts a consultation reply  
- The **Knowledge Agent** answers FAQs using your business knowledge base (with Supabase embeddings)  

Both agents create draft email responses and send a Telegram alert so you're always in the loop.

### Who’s it for
- Founders and agency owners buried in emails  
- Marketing teams handling lots of inbound leads  
- Customer support managers automating Tier 1 replies  
- Anyone who wants a cleaner, smarter inbox without hiring a VA  

### How it works
- Gmail trigger watches for incoming emails  
- Email content is passed to an AI classifier to apply a label (Sales, Client, Billing, etc.)  
- If the message is a new inquiry or lead, it’s routed to:
  - **Calendar Agent** → checks Google Calendar and drafts a reply with available slots  
  - **Knowledge Agent** → searches vector DB and drafts a helpful reply from documentation  
- Both agents create a Gmail draft response and send a Telegram notification with summary  

### Example use case
&gt; A lead emails you asking for a discovery call.  
&gt;  
&gt; ✅ Email is labeled "Sales"  
&gt; ✅ AI Calendar Agent checks your Google Calendar  
&gt; ✅ A reply is drafted offering free time slots  
&gt; ✅ You get a Telegram ping:  
&gt; _"New lead: Abdul Mir. I checked your calendar and drafted a reply. Check your email!"_  

### How to set up
1. Connect your Gmail and set up a trigger for new messages  
2. Train the AI classifier with example categories and emails  
3. Connect Google Calendar API for availability checks  
4. Upload your internal docs and sync to Supabase vector store  
5. Connect Telegram for alerts  
6. Customize AI prompts and escalation logic as needed  

### Requirements
- Gmail integration  
- OpenAI or Claude API (for classification + chat agents)  
- Google Calendar API  
- Supabase (or Pinecone, Weaviate) for RAG vector DB  
- Telegram bot API key

### How to customize
- Add custom labels like “Recruiting,” “Investor,” or “Support”  
- Replace Telegram with Slack or SMS alerts  
- Add CRM sync to update lead status  
- Escalate complicated replies to a human via task creation  
- Add auto-send (instead of drafts) after review or based on confidence score


## 📊 Basic Information

- **Workflow ID:** 6537
- **Complexity:** advanced
- **Node Count:** 42
- **Views:** 2086
- **Downloads:** 208
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6537)

## 👤 Author

- **Name:** Abdul Mir
- **Username:** @abdulmir

## 🏷️ Categories

- Ticket Management
- AI RAG

## 🔗 Nodes Used

- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×5)
- **gmail** (×9)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **stickyNote** (×8)
- **googleCalendarTool** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **code** 
- **switch** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **telegram** (×3)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 42 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
