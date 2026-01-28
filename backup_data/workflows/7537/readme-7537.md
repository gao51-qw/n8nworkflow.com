# AI-powered lead enrichment from Typeform & Calendly to HubSpot CRM

> ### How it works
This workflow starts whenever a new lead comes in through Typeform (form submission) or Calendly (meeting booking). It captures the lead’s information, standardizes it into a clean format, and checks the email domain. If it’s a business domain, the workflow uses AI to enrich the lead with company details such as industry, headquarters, size, and website. Finally, it merges all the data and automatically saves the enriched contact in HubSpot CRM.

### Step-by-step

**Capture Leads**

- The workflow listens for new form responses in Typeform or new invitees in Calendly.

- Both sources are merged into a single stream of leads.

**Standardize Data**

-  All incoming data is cleaned and formatted into a consistent structure: Name, Email, Phone, Message, and Domain.

**Filter Domains**

- Checks the email domain.

- If it’s a free/public domain (like Gmail or Yahoo), the lead is ignored.

- If it’s a business domain, the workflow continues.

**AI Company Enrichment**

- Sends the domain to an AI Agent (OpenAI GPT-4o-mini).

- AI returns structured company details:

	- 	Company Name

	- 	Industry

	- 	Headquarters (city & country)

	- 	Employee Count

	- 	Website

	- 	LinkedIn Profile

	- 	Short Company Description

**Merge Lead & AI Data**

- Combines the original lead details with the AI-enriched company information.

- Adds metadata like timestamp and workflow ID.

**Save to HubSpot CRM**

- Creates or updates a contact record in HubSpot.

- Maps enriched fields like company name, LinkedIn, website, and description.

### Why use this?

- Automatically enriches every qualified lead with valuable company intelligence.

- Filters out unqualified leads with personal email addresses.

- Keeps your CRM updated without manual research.

- Saves time by centralizing lead capture, enrichment, and CRM sync in one flow.

- Helps sales teams focus on warm, high-value prospects instead of raw, unverified leads.

## 📊 Basic Information

- **Workflow ID:** 7537
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 370
- **Downloads:** 37
- **Created:** 2025/8/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7537)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **typeformTrigger** 
- **calendlyTrigger** 
- **merge** 
- **code** (×2)
- **stickyNote** (×4)
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **hubspot** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
