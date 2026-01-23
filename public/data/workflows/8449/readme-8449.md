# Automate cold outreach with Apollo, LinkedIn & Gmail using GPT-4

> # Cold Outreach Automation by Rysysth Technologies  

This n8n workflow automates the complete cold outreach process by combining Apollo.io lead generation, LinkedIn networking, and personalized email outreach into one streamlined system.  

---

## How It Works  

### Prospect Definition (Form Input)  
User enters job titles, company size, keywords, and locations.  

### Apollo Search URL Generation  
OpenAI converts form inputs into a precise Apollo.io search URL.  

### Lead Scraping (Apify)  
Apollo.io scraper collects contact details, emails, LinkedIn profiles, and company data (limited to 10 leads per run).  

### LinkedIn & Company Data Enrichment (Unipile)  
Extracts LinkedIn profile and company details for each lead.  

### CRM Sync (HubSpot)  
Automatically creates or updates lead records in HubSpot CRM.  

### Personalized Outreach (AI-Powered)  
OpenAI generates:  
- Custom LinkedIn connection request (under 300 characters)  
- Email subject and body (personalized with a soft CTA)  

### LinkedIn Connect  
If not already connected, workflow sends LinkedIn invites via Unipile.  

### Email Validation (ZeroBounce)  
Ensures emails are valid or catch-all before outreach.  

### Email Outreach (Gmail API)  
If verified, sends the AI-personalized outreach email directly from Gmail.  

---

## Tools and APIs Integrated  
- **Apify** → Apollo.io scraper (lead extraction)  
- **Unipile** → LinkedIn profile enrichment and connection requests  
- **ZeroBounce** → Email verification  
- **OpenAI** → Apollo URL creation and outreach copy generation  
- **HubSpot** → CRM sync  
- **Gmail** → Automated outreach emails  

---

## Key Benefits  
- Saves time by automating manual prospecting and email writing  
- Delivers personalized, multi-channel outreach at scale  
- Ensures accurate CRM updates with HubSpot integration  
- Improves email deliverability with ZeroBounce validation  
- Designed for founders, sales teams, and agencies seeking efficient lead generation  

---
## Connect with Rysysth Technologies 
At **[Rysysth Technologies](https://rysysthtechnologies.com)**, we build custom n8n workflows that go far beyond standard templates. From AI-powered prospecting to CRM automation and advanced outreach pipelines, we tailor automation solutions that align perfectly with your business goals.  

Let’s create your custom workflow together. Partner with **[Rysysth Technologies](https://rysysthtechnologies.com)** to transform your outreach process today.  

 
- **Website**: [rysysthtechnologies.com](https://www.rysysthtechnologies.com)  
- **Email**: [getstarted@rysysthtechnologies.com](mailto:getstarted@rysysthtechnologies.com)  
- **LinkedIn**: [linkedin.com/company/rysysth](https://www.linkedin.com/company/rysysth)  

 

## 📊 Basic Information

- **Workflow ID:** 8449
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 889
- **Downloads:** 88
- **Created:** 2025/9/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8449)

## 👤 Author

- **Name:** Rysysth
- **Username:** @rysysth

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **limit** 
- **httpRequest** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** (×3)
- **gmail** 
- **@n8n/n8n-nodes-langchain.agent** 
- **hubspot** 
- **set** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
