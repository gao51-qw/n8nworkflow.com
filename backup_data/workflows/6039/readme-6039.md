# Outreach for your product using Apollo, LinkedIn, GPT-4.1 and SendGrid

> &gt; 💛 Sticky Note: 
&gt; This **Hyperpersonalized Outreach** n8n template automates AI‑powered B2B email campaigns by combining Apollo.io lead scraping, LinkedIn enrichment, GPT‑4 generation, and SendGrid delivery. Follow the setup steps below to get started in minutes!

## 🔥 TLDR
Build a scalable, AI‑driven email outreach pipeline that:
- Scrapes up to 500 leads from Apify  
- Enriches profiles with LinkedIn work history & posts  
- Filters and scores leads via Apollo.io
- Generates personalized HTML emails with GPT‑4.1 .   
- Sends via SendGrid and logs status in Supabase  

## 👥 Who’s It For
Sales teams, growth marketers, and founders who need:
- High‑touch cold outreach at scale  
- Data‑driven personalisation using real profile insights  
- Automated lead qualification and tracking  

## ⚙️ How It Works / What It Does
1. **Apollo Scraper**: Uses Apify HTTP nodes (no hard‑coded API keys) to pull lead data.  
2. **Supabase Sink**: Persists `email`, `linkedin_url`, and ingestion timestamp.  
3. **LinkedIn Enrichment**: Fetches career history and latest 5 posts via RapidAPI.  
4. **Data Validation**: Conditional nodes drop incomplete or irrelevant leads.  
5. **Product Description Agent**: Creates a customer profile based on the product and how it can help them.  
6. **Story Agent**: Has the persona, style of speech and rules to generate reply for the customer based on the pain points and solution found by the Product Description agent. 
7. **HTML Modifier**: Contains a fix format to keep the output format of each mail consistent and also generate a subject for the mail. 
8. **SendGrid Dispatch**: An SMTP service which delivers emails in large quantity and also keep your mail spam free otherwise if you use gmail node your mail will go staright to spam; updates `status=true/false` in Supabase.  

## 🛠️ How to Set Up
1. Clone the workflow JSON into your n8n instance.  
2. Configure environment variables for Apollo.io, RapidAPI, OpenAI, SendGrid, and Supabase.  
3. Rename credentials and test each HTTP node.  
4. Activate the workflow and monitor executions in n8n’s UI.  

## ✅ Requirements
- n8n 0.300.0+  
- Accounts & API keys for Apollo.io, RapidAPI (LinkedIn), OpenAI, SendGrid, Supabase  
- Supabase to store LinkedIn id and gmails of leads, also useful to eliminate the risk of having duplicate data. 

## 🎨 How to Customize
- Adjust lead batch size in the Apollo HTTP node.  
- Swap the HTML email template to match your brand.  
- Add A/B subject‑line experiments by cloning the Email Agent.  


---
&gt; 🔐 **Security Reminder:** All credentials must be stored in n8n’s credential manager—never hard‑code API keys in HTTP nodes.


## 📊 Basic Information

- **Workflow ID:** 6039
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 982
- **Downloads:** 98
- **Created:** 2025/7/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6039)

## 👤 Author

- **Name:** Misek
- **Username:** @misek987

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×3)
- **set** (×6)
- **manualTrigger** 
- **supabase** (×3)
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **merge** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **aggregate** (×3)
- **code** 
- **if** (×2)
- **noOp** 
- **sendGrid** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
