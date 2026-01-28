# Classify & enrich contacts with GPT-4o-mini for Google Sheets, Airtable, and HubSpot

> ### How it works
This workflow enhances contact intelligence by retrieving new or updated contact data, enriching it using AI and external APIs, and then updating your CRM or contact management system with intelligent insights. It automates the process of gathering, enriching, and organizing contact information to improve targeting, personalization, and engagement.

### Step-by-step
**1. Trigger & Input**
- The workflow is triggered by a scheduler or webhook event.

- It reads a new contact entry (or an updated one) from your source, such as a spreadsheet or form.
- Basic fields like name, email, and company are used as the starting point for enrichment.

**2. Contact Lookup & Parsing**
- The contact's domain or company is extracted and used to perform a lookup via an external data source.

- Data such as company details, job title, or LinkedIn profile is retrieved.

- Parsed and cleaned to remove duplicates, missing values, or invalid results.

**3. AI Enrichment**
- The enriched contact is passed through an AI model (such as GPT or another NLP service).

- The model analyzes job role, seniority, and inferred interests based on available data.

- Insights like intent, persona category, or engagement score are generated.

**4. Validation & Tagging**
- The AI-enriched data is validated to ensure consistency and accuracy.

- Tags and segments (e.g., "Decision Maker", "Technical Buyer", etc.) are assigned based on rules or AI inference.

- This enables smart filtering, targeting, and routing later in your CRM or campaigns.

**5. Output & Integration**
- The final enriched and validated contact is written back to your CRM, sheet, or marketing platform.

**The system also:**

- Sends a Slack/Email alert with a summary.

- Updates the original contact entry with a "Processed" or "Enriched" status.

- Triggers next steps, such as personalized outreach or nurture sequences.

### Benefits
- Enhances Contact Profiles with AI-generated insights and third-party data.

- Improves Segmentation & Targeting through smart tags and persona classification.

- Automates Manual Research, saving time and improving accuracy.

- Easily Extendable by adding more AI models, data sources, or CRM integrations.



## 📊 Basic Information

- **Workflow ID:** 7128
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 313
- **Downloads:** 31
- **Created:** 2025/8/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7128)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×2)
- **filter** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **airtable** 
- **hubspot** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
