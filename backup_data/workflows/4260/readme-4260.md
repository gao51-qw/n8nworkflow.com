# Extract company data and calculate ICP score with Airtop

> # Automating Company Data Enrichment and ICP Calculation

## Use Case

This automation identifies a company's LinkedIn profile, extracts key business data, and calculates an ICP (Ideal Customer Profile) score to qualify and enrich company records. It is perfect for sales teams, data enrichment pipelines, and CRM integrations.

## What This Automation Does

### Input Parameters

- **Company domain**: The company's website domain (e.g., `example.com`).
- **Airtop Profile (connected to LinkedIn)**: Your [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated for LinkedIn.
- **Company LinkedIn** *(optional)*: If already known, skips search.

### Output Includes

- Verified LinkedIn company URL (if not provided)
- Company profile (name, tagline, website, location, about)
- Scale metrics (employee count and bracket)
- Classification (automation agency status, AI focus, technical level)
- ICP score with justifications
- Structured JSON object with all values merged

## How It Works

1. **LinkedIn Detection**: If not provided, attempts to locate the LinkedIn URL using website scraping or search.
2. **Data Extraction**: Uses Airtop to gather structured data from the company’s LinkedIn profile.
3. **ICP Scoring**: Applies a scoring rubric based on AI/tech orientation, scale, agency status, and geography.
4. **Merge Results**: All data components are merged into a unified output.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys)
2. [Airtop Profile](https://portal.airtop.ai/browser-profiles) with LinkedIn authentication

## Next Steps

- **Combine with Person Enrichment**: Pair with workflows that enrich individuals tied to the company.
- **Sync to CRM**: Connect the output to your CRM for record enrichment or scoring fields.
- **Adjust ICP Scoring Logic**: Modify the rubric for your organization's ICP model.

Read more about [company data enrichment and ICP scoring](https://www.airtop.ai/automations/extract-person-data-and-calculate-icp-n8n)


## 📊 Basic Information

- **Workflow ID:** 4260
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 411
- **Downloads:** 41
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4260)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **formTrigger** 
- **executeWorkflowTrigger** 
- **merge** 
- **executeWorkflow** (×3)
- **stickyNote** (×4)
- **if** 
- **filter** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
