# Enrich person data and update CRM with Airtop and Hubspot

> # Automating Person Data Enrichment and CRM Update

## Use Case

This automation enriches a person’s professional profile using their name and work email, scores them against an ICP (Ideal Customer Profile), and updates their record in HubSpot. It’s ideal for sales, marketing, and recruitment teams needing reliable contact insights.

## What This Automation Does

This automation performs the following using the input parameters:

- **Person name**: The full name of the individual.
- **Work email**: The professional email address of the contact.
- **Airtop Profile (connected to LinkedIn)**: An authenticated [Airtop Profile](https://portal.airtop.ai/browser-profiles) used for LinkedIn-based enrichment.
- **Hubspot object id**: The internal HubSpot ID for the contact to be updated.

## How It Works

1. Initiates the workflow using a form or external trigger.
2. Uses the name and email to extract and enrich the person’s data, including:
   - LinkedIn profile and company page
   - About section, job title, location
   - ICP score, seniority level, AI interest, technical depth, connection and follower counts
3. Formats and maps the enriched data.
4. Pushes the updated data to HubSpot using the object ID.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys)
2. [Airtop Profile](https://portal.airtop.ai/browser-profiles) logged in to LinkedIn.
3. HubSpot access with object ID field for each contact to update.

## Next Steps

- **Combine with Lead Generation**: Use as part of an end-to-end workflow that sources leads and enriches them in real time.
- **Trigger from CRM**: Initiate this workflow when a new contact is added in HubSpot or another CRM.
- **Customize Scoring Logic**: Tailor the ICP calculation to your team’s specific criteria.

Read more about [person data enrichment](https://www.airtop.ai/automations/enrich-person-data-n8n)

## 📊 Basic Information

- **Workflow ID:** 4255
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 415
- **Downloads:** 41
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4255)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **executeWorkflowTrigger** 
- **executeWorkflow** (×2)
- **aggregate** 
- **set** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
