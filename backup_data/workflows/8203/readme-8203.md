# Lead routing system: Qualify & direct Typeform leads to HubSpot, Sheets & Airtable

> ## How it works
This workflow starts whenever a new lead submits a Typeform. It captures the lead’s details, checks their budget, and routes them based on priority and source. High-budget leads are pushed into HubSpot with a follow-up task for sales. Facebook leads are logged in Google Sheets for marketing, while SurveyMonkey leads are stored in Airtable for campaign tracking. Finally, every lead receives an automated Gmail acknowledgment to confirm receipt and set expectations.

## Step-by-step

**Capture Leads**
- The workflow listens for new form responses from Typeform.

- Each lead’s details — name, email, phone, budget, and message — are captured for processing.

**Prioritize High-Budget Leads**
- The budget field is checked.

- If the budget is greater than $5,000 → the lead is flagged as high priority.

- These leads are added or updated in HubSpot CRM.

- A priority follow-up task is created in HubSpot for the sales team.

**Route by Lead Source**

- If the source is Facebook → the lead is logged in a Google Sheet for marketing analysis.

- If the source is SurveyMonkey → the lead is stored in Airtable for structured campaign tracking.

**Send Auto-Response**
- After storage, every lead receives an automated Gmail reply.

- The email thanks them for their interest and assures them that the sales team will follow up within 24 hours.

## Why use this?

- Captures and organizes leads from multiple channels in one workflow.

- Flags and escalates high-budget leads instantly to sales.

- Routes leads to the right system (HubSpot, Google Sheets, Airtable) based on their source.

- Automates acknowledgment emails, improving response time and customer experience.

- Saves manual effort by centralizing lead capture, qualification, and routing in one place.

## 📊 Basic Information

- **Workflow ID:** 8203
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 195
- **Downloads:** 19
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8203)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **typeformTrigger** 
- **if** (×3)
- **hubspot** (×2)
- **googleSheets** 
- **airtable** 
- **gmail** 
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
