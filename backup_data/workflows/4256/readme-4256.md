# Extract person data and calculate ICP score with Airtop

> # Automating LinkedIn Enrichment and ICP Scoring

## Use Case

This automation enriches a person’s data using LinkedIn and calculates an Ideal Customer Profile (ICP) score based on their professional presence. It is particularly useful for lead qualification, contact research, and targeted outreach.

## What This Automation Does

The automation processes the following input parameters:

- **Person Name**: Full name of the individual.
- **Work Email**: Business email address to validate corporate identity.
- **Airtop Profile (connected to Linkedin)**: A [LinkedIn-authenticated Airtop Profile](https://portal.airtop.ai/browser-profiles) for enrichment.

## How It Works

1. **Email Filtering**: Checks if the email is corporate (excludes free and personal domains).
2. **LinkedIn Profile Discovery**: Searches and verifies the correct LinkedIn URL using Airtop.
3. **Data Enrichment**: Extracts professional details from the LinkedIn profile.
4. **ICP Scoring**: Calculates an ICP score based on extracted data and profile context.
5. **Merge Outputs**: Consolidates enriched profile data and ICP results into a single output.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys)
2. An [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated on LinkedIn.

## Next Steps

- **Combine with CRM Integration**: Push enriched and scored data into CRMs like HubSpot or Salesforce.
- **Batch Processing**: Automate for lists of leads using Airtop + n8n or Airtop SDK.
- **Scoring Customization**: Adjust scoring logic to reflect your ideal customer attributes more precisely.

Read more about [data enrichment and ICP scoring](https://www.airtop.ai/automations/extract-person-data-and-calculate-icp-n8n)

## 📊 Basic Information

- **Workflow ID:** 4256
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 348
- **Downloads:** 34
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4256)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **formTrigger** 
- **executeWorkflowTrigger** 
- **set** 
- **stickyNote** (×3)
- **executeWorkflow** (×3)
- **merge** 
- **filter** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
