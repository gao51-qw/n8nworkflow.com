# Qualify high-budget leads: Typeform to HubSpot, Google Sheets & Slack alerts

> ## How it works
This workflow captures new leads from Typeform, instantly checks if their budget is above $5,000, and prioritizes them for faster sales follow-up. High-budget leads are enriched in HubSpot as contacts with detailed properties, and a priority task is created for the sales team. Leads are then routed based on their source (Facebook or SurveyMonkey), logged into Google Sheets for marketing or campaign tracking, and finally, a Slack notification is sent to alert the team in real time.

## Step-by-step

**Capture & Qualify Leads**

- The workflow triggers on new Typeform submissions.

- It evaluates the budget field to identify high-priority leads (&gt;$5,000).

**CRM Enrichment**

- High-priority leads are automatically created or updated as contacts in HubSpot.

- A priority follow-up task is logged in HubSpot with the lead’s budget details.

**Source-Based Routing**

- If the lead comes from Facebook or SurveyMonkey, their details are logged in a Google Sheet.

- This ensures marketing and campaign teams can analyze and track leads separately.

**Team Notifications**

- Once logged, the workflow sends a Slack message to the sales/marketing channel.

- The message includes the lead’s name, email, phone, budget, and source, ensuring instant visibility for follow-up.

## Why use this?

- Automatically qualifies high-value leads based on budget.

- Syncs lead details seamlessly with HubSpot CRM.

- Routes leads by source for better campaign tracking.

- Keeps sales and marketing teams aligned with real-time Slack alerts.

- Cuts down manual effort, ensuring faster response times and higher conversion rates.

## 📊 Basic Information

- **Workflow ID:** 8240
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 147
- **Downloads:** 14
- **Created:** 2025/9/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8240)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **typeformTrigger** 
- **if** (×2)
- **hubspot** (×2)
- **stickyNote** (×4)
- **googleSheets** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
