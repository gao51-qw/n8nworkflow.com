# Enrich contacts with Wiza and sync results to Airtable and HubSpot

> ## What it does

Receives contact details via form, routes to appropriate Wiza API endpoints (email, phone, LinkedIn, or all), enriches data with verification, calculates quality scores (0-100), and stores results in both Airtable and HubSpot.

## Who's it for

Sales teams, recruiters, and marketing ops professionals who need to transform minimal contact info into complete, verified profiles at scale.

## Requirements

- n8n (self-hosted or cloud)
- Wiza API Key (with Email/Phone/LinkedIn Finder access)
- Airtable API Key (optional)
- HubSpot API Key (optional)

## How to set up

1. Import workflow JSON into n8n
2. Configure Wiza, Airtable, and HubSpot credentials
3. Set up Airtable base with required columns (Full Name, Email, Phone, LinkedIn, Data Quality Score)
4. Activate workflow and share the form URL

## How to customize

- Adjust quality scoring weights in the Code node
- Add custom fields to the form trigger
- Modify Airtable/HubSpot field mappings
- Change deduplication logic for emails

## 📊 Basic Information

- **Workflow ID:** 12343
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 3
- **Downloads:** 0
- **Created:** 2026/1/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12343)

## 👤 Author

- **Name:** Mezie
- **Username:** @mezie

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **formTrigger** 
- **switch** (×2)
- **merge** 
- **@wizaco/n8n-nodes-wiza.wiza** (×3)
- **form** (×2)
- **googleSheets** 
- **code** 
- **hubspot** 
- **dataTable** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
