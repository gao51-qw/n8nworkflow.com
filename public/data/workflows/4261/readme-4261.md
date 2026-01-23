# Extract Linkedin company data with Airtop

> 
# Automating LinkedIn Company Data Extraction

## Use Case

This automation extracts detailed company insights from a LinkedIn company page, including identity, scale, classification, and funding data. Ideal for investors, sales teams, and market researchers.

## What This Automation Does

This automation accepts the following inputs:

- **Company's LinkedIn URL**: The public LinkedIn page URL of the company.
- **Airtop Profile (connected to LinkedIn)**: Your [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated on LinkedIn.

It then extracts and returns structured data with:

### 1. Company Identity
- Full name
- Tagline
- Headquarters location (city, state, country)
- About section
- Website

### 2. Company Scale
- Current employee count
- Employee size bracket: [0-9], [10-150], [150+]

### 3. Business Classification
- Is the company an automation agency? (true/false)
- AI implementation level: Low / Medium / High
- Technical sophistication: Basic / Intermediate / Advanced / Expert

### 4. Funding Profile
- Most recent funding round
- Total amount raised
- Key investors
- Last funding update date

## How It Works

1. Creates an Airtop session using the provided profile.
2. Navigates to the company LinkedIn page.
3. Executes an Airtop query to extract data.
4. Outputs the result in a standardized JSON schema.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys)
2. A [LinkedIn-authenticated Airtop Profile](https://portal.airtop.ai/browser-profiles)

## Next Steps

- **Feed into CRM**: Enrich your accounts with detailed LinkedIn data.
- **Prioritize Leads**: Use classification and funding data to prioritize outreach.
- **Combine with People Data**: Integrate with individual-level enrichment for full context.

Read more about how to [extract company data from Linkedin with Airtop and n8n](https://www.airtop.ai/automations/extract-linkedin-company-information-n8n)

## 📊 Basic Information

- **Workflow ID:** 4261
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 478
- **Downloads:** 47
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4261)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **formTrigger** 
- **executeWorkflowTrigger** 
- **set** (×2)
- **airtop** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
