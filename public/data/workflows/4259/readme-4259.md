# Enrich company data with Airtop and Hubspot

> 
# Automating Company Data Enrichment and HubSpot Integration

## Use Case

This automation enriches company data based on email domain and LinkedIn profile, calculates an ICP (Ideal Customer Profile) score, and updates the corresponding company record in HubSpot. It’s ideal for onboarding, qualification, and CRM enrichment.

## What This Automation Does

### Input Parameters

- **Contact email**: Used to derive the company domain.
- **Company domain**: Primary web domain of the company.
- **Company LinkedIn** *(optional)*: LinkedIn URL for enrichment accuracy.
- **Airtop Profile (connected to LinkedIn)**: An authenticated [Airtop Profile](https://portal.airtop.ai/browser-profiles).

### What It Outputs

- Full company profile (name, tagline, website, headquarters)
- Employee count
- ICP score based on AI/tech profile, scale, agency type, and location
- Updates/creates record in HubSpot with all enriched attributes

## How It Works

1. **Input Validation**: Filters out non-corporate domains like Gmail, Yahoo, or .edu.
2. **Enrichment Trigger**: Launches Airtop workflows to extract and analyze data from LinkedIn and calculate the ICP score.
3. **Data Mapping**: Compiles structured fields including:
   - Overview, location (city, state, country)
   - Company website and domain
   - LinkedIn URL, employee count
   - ICP score
4. **HubSpot Sync**: Sends all the enriched fields to the designated HubSpot object for upsertion.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys)
2. [Airtop Profile](https://portal.airtop.ai/browser-profiles) with active LinkedIn authentication
3. HubSpot integration enabled for object updates

## Next Steps

- **Use in Webforms**: Trigger this on signup to auto-populate CRM records.
- **Enrich Manually Entered Contacts**: Use with list-based workflows for batch enrichment.
- **Sync to Other CRMs**: Replace HubSpot step with Salesforce, Pipedrive, etc. for flexible integration.

Read more about [comapny data enrichment](https://www.airtop.ai/automations/enrich-company-data-n8n)

## 📊 Basic Information

- **Workflow ID:** 4259
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 385
- **Downloads:** 38
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4259)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **aggregate** 
- **executeWorkflow** (×2)
- **stickyNote** (×5)
- **formTrigger** 
- **executeWorkflowTrigger** 
- **set** (×2)
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
