# Ai lead scoring & enrichment from Mailchimp to HubSpot and Pipedrive with GPT-4o

> ## How it works

This workflow captures new subscribers from a Mailchimp list and extracts their key details.  
It then enriches the subscriber data using AI, predicting professional attributes and assigning a lead score.  
Based on the score, high-value leads are identified, and all leads are synced into HubSpot and Pipedrive.  
For top-priority leads, the workflow automatically creates new deals in Pipedrive for sales follow-up.  

## Step-by-step

## Step-by-step

**1. Capture subscriber data**  
- **Mailchimp Subscriber Trigger** – Detects new signups in a Mailchimp list.  
- **Extract Subscriber Data** – Normalizes payload into clean fields like name, email, and timestamp.  

**2. Enrich with AI**  
- **Lead Enrichment AI** – Uses AI to infer company, role, industry, intent, LinkedIn, and lead score.  
- **Parse & Merge Enrichment** – Merges AI output with subscriber info and sets defaults if parsing fails.  

**3. Qualify leads**  
- **High-Value Lead Check** – Filters leads with a score ≥70 to flag them as priority.  
- **Create High-Value Deal** – Opens a new deal in Pipedrive for high-value leads.  

**4. Sync to CRMs**  
- **HubSpot Contact Sync** – Updates enriched lead data in HubSpot CRM.  
- **Pipedrive Person Create** – Adds lead as a person in Pipedrive.  


## Why use this?

- Automatically enrich raw Mailchimp subscribers with valuable professional insights.  
- Score and qualify leads instantly for prioritization.  
- Keep HubSpot and Pipedrive updated with enriched lead records.  
- Automate deal creation for high-value opportunities, saving sales team effort.  
- Build a seamless pipeline from marketing signups to CRM-ready opportunities.  


## 📊 Basic Information

- **Workflow ID:** 8909
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 238
- **Downloads:** 23
- **Created:** 2025/9/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8909)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **mailchimpTrigger** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **if** 
- **hubspot** 
- **pipedrive** (×2)
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
