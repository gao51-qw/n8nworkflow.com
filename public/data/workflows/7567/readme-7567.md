# Typeform to HubSpot: AI-enriched & scored leads with GPT-4o-mini

> ### How it works
This workflow starts whenever a new lead is submitted through Typeform. It cleans and stores the raw lead data, checks if the email is business-related (not Gmail), and then uses AI to enrich the lead with company details. After enrichment, the workflow scores the lead with AI, updates your HubSpot CRM, and saves everything neatly into Google Sheets for tracking and reporting.

### Step-by-step

**Capture New Lead**

- Triggered by a new Typeform submission.

- Collects basic details: Name, Email, Phone, and Message.

- Saves raw lead data into a Google Sheet for backup.

- Stores the basic info in Airtable (avoids duplicates by email).

**Format & Filter Leads**

- Formats the incoming data into a clean structure.

- Filters out non-business emails (e.g., Gmail) so only qualified leads continue.

**Enrich Company Information**

- Uses AI (GPT-4o-mini) to enrich the lead’s company data based on email domain.

- Returns details like: Company Name, Industry, Headquarters, Employee Count, Website, LinkedIn, and Description.

- Merges this information with the original lead profile and adds metadata (timestamp, workflow ID).

**Score the Lead**

- AI analyzes the enriched profile and assigns a lead score (1–10).

- Scoring considers industry fit, company size, contact source, and domain reputation.

**Update CRM & Sheets**

- Sends the enriched lead with score to HubSpot CRM.

- Updates company details, contact info, and custom properties (lead_score, LinkedIn, description).

- Logs the fully enriched lead in a Google Sheet for tracking.

### Why use this?

- Automatically enriches and scores every incoming lead.

- Filters out low-value (non-business) emails before wasting CRM space.

- Keeps HubSpot CRM up to date with the latest company and contact info.

- Maintains both raw and enriched lead data in Google Sheets for easy reporting.

- Saves your team hours of manual research and ensures consistent, AI-driven lead qualification.

## 📊 Basic Information

- **Workflow ID:** 7567
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 183
- **Downloads:** 18
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7567)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **typeformTrigger** 
- **code** (×2)
- **airtable** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **hubspot** 
- **googleSheets** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
