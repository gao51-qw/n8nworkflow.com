# Score company ICP (Ideal Customer Profile) with Airtop

> 
# Automating Company ICP Scoring via LinkedIn

## Use Case

This automation scores companies based on their LinkedIn profile using custom Ideal Customer Profile (ICP) criteria. It’s ideal for qualifying B2B leads and prioritizing outreach based on fit.

## What This Automation Does

Inputs required:

- **Company LinkedIn URL**: Public LinkedIn profile of the company.
- **Airtop Profile (connected to LinkedIn)**: [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated to access and extract profile data.

The automation analyzes the LinkedIn page and calculates a score based on:

### Scoring Criteria

| **Category**       | **Classification**        | **Points** |
|--------------------|---------------------------|------------|
| **AI Focus**        | Low                       | 5          |
|                    | Medium                    | 10         |
|                    | High                      | 25         |
| **Technical Level** | Basic                     | 5          |
|                    | Intermediate              | 15         |
|                    | Advanced                  | 25         |
|                    | Expert                    | 35         |
| **Employee Count**  | 0–9                       | 5          |
|                    | 10–150                    | 25         |
|                    | 150+                      | 30         |
| **Agency Status**   | Not Automation Agency     | 0          |
|                    | Automation Agency         | 20         |
| **Geography**       | Outside US/Europe         | 0          |
|                    | US/Europe Based           | 10         |

The result includes:
- Total ICP score
- Detailed justifications for each score component

## How It Works

1. Opens the company’s LinkedIn page using Airtop.
2. Analyzes metadata including employee count, headquarters, services, and keywords.
3. Applies the scoring rubric and returns structured JSON with scores and reasons.
4. Optionally flattens the result for storage or CRM integration.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys)
2. LinkedIn-authenticated [Airtop Profile](https://portal.airtop.ai/browser-profiles)

## Next Steps

- **Combine with Lead Lists**: Score companies from outreach lists.
- **Push to CRM**: Add scores to HubSpot or Salesforce records.
- **Adjust Scoring Weights**: Modify rubric to reflect your ICP strategy.

Read more about [company ICP scoring automation with Airtop and n8n](https://www.airtop.ai/automations/score-company-icp-n8n)

## 📊 Basic Information

- **Workflow ID:** 4262
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 379
- **Downloads:** 37
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4262)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **set** (×3)
- **airtop** 
- **executeWorkflowTrigger** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
