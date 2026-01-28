# LinkedIn to Gmail: generate cold emails with Dumpling AI, GPT-4 & Dropcontact

> ## Who’s it for

This template is perfect for digital agencies, SDRs, lead generators, or outreach teams that want to automatically convert LinkedIn company profiles into high-quality cold emails. If you spend too much time researching and writing outreach messages, this workflow does all the heavy lifting for you.

---

## What it does

Once a LinkedIn company profile URL is submitted via a web form, the workflow:
1. Scrapes detailed company data using **Dumpling AI**
2. Enriches the contact (email, name, country) using **Dropcontact**
3. Sends company data and contact info to **GPT-4**, which generates:
   - A personalized subject line (max 8 words)
   - A short HTML cold email (4–6 sentences)
4. Sends the cold email via **Gmail**
5. Logs the lead details to **Airtable** for tracking

All AI-generated content follows strict formatting and tone guidelines, ensuring it's professional, human, and clean.

---

## How it works

1. **Form Trigger**: Collects the LinkedIn URL  
2. **Dumpling AI**: Extracts company name, description, size, location, website, etc.  
3. **Dropcontact**: Finds the contact's email and name based on enriched company details  
4. **GPT-4**: Writes a structured cold email and subject line in JSON format  
5. **Gmail**: Sends the personalized email to a fixed recipient  
6. **Airtable**: Logs the lead into a specified base/table for follow-up

---

## Requirements

- ✅ **Dumpling AI API key** (stored in HTTP header credentials)  
- ✅ **Dropcontact API key**  
- ✅ **OpenAI GPT-4 credentials**  
- ✅ **Gmail account** (OAuth2)  
- ✅ **Airtable** base & table set up with at least these fields:
  - `Name`
  - `LinkedIn Company URL`
  - `People`
  - `website`

---

## How to customize

- Modify the GPT prompt to reflect your brand tone or service offering  
- Replace Gmail with Slack, Outlook, or another communication tool  
- Add a “review and approve” step before sending emails  
- Add logic to avoid duplicates (e.g., check Airtable first)

---

&gt; This workflow lets you go from LinkedIn profile to inbox-ready cold email in less than a minute—with full AI support.


## 📊 Basic Information

- **Workflow ID:** 9129
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 174
- **Downloads:** 17
- **Created:** 2025/10/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9129)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** 
- **dropcontact** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **gmail** 
- **airtable** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
