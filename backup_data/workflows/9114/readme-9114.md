# Automated personalized email outreach with AI, database tracking & scheduling

> # Initial Outreach Email Workflow

This n8n template demonstrates how to automate personalized cold email outreach using AI and a lead database.  
It’s designed to contact unengaged leads, personalize messages at scale, and schedule follow-ups automatically.  

**Use cases are many:** Reach out to new leads, qualify prospects, start conversations, and set up consistent follow-up routines.  
Great for sales teams, recruiters, and agencies running cold outreach campaigns.  

---

## Good to know
- Each AI personalization costs about **$0.001 with Groq** (free tier available; pricing may vary by provider).  
- The workflow limits emails to **15 per day by default** to protect your email reputation and reduce spam risk.  
- The email template is fully customizable to match your **brand tone and offer**.  
- Outreach timing and follow-up intervals are easy to adjust within the workflow.  

---

## How it works
- **NocoDB** fetches leads who haven’t been contacted yet (no “Initial Contact Date”).  
- The **Limit node** ensures no more than 15 emails per run.  
- **AI personalizes** your chosen email template with lead name and company.  
- Emails are sent via **SMTP or Gmail node**.  
- Each contacted lead is updated in the database with today’s **Initial Contact Date** and a **Next Follow-up Date** (default 3 days later).  
- The workflow runs on a **daily schedule** at 10:30 AM (configurable).  

---

## How to use
- Set up a **NocoDB/any database table** with:  
  - `first_name`  
  - `email`  
  - `Initial Contact Date`  
  - `Next Follow up/Contact`  
  - `organization_name` (optional)  
- Customize the **email template** inside the AI node.  
- Adjust the **daily limit** and schedule to match your outreach capacity.  
- Import leads into NocoDB and configure credentials for **NocoDB, AI provider, and SMTP**.  
- Run the workflow manually for testing before going live.  


## 📊 Basic Information

- **Workflow ID:** 9114
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 284
- **Downloads:** 28
- **Created:** 2025/9/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9114)

## 👤 Author

- **Name:** Buay Biel
- **Username:** @bielbuay

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **nocoDb** (×2)
- **filter** 
- **limit** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **emailSend** 
- **dateTime** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
