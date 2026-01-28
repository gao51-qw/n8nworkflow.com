# Unipile LinkedIn profile lookup subworkflow

> ## Who is this for?

This subworkflow is ideal for developers and automation builders working with UniPile and n8n to automate message enrichment and LinkedIn lead routing.

## What problem is this workflow solving?

UniPile separates personal and organization accounts into two different API endpoints. This flow handles both intelligently so you're not missing sender context due to API quirks or bad assumptions.

## What this workflow does

This subworkflow is used by:

- **[LinkedIn Auto Message Router with Request Detection](#)**  
- **[LinkedIn AI Response Generator with Slack Approval](#)**

It receives a message sender ID and tries to enrich it using UniPile's `/people` and `/organizations` endpoints. It returns a clean, consistent profile object regardless of which source was used.

## Setup

1. Generate a UniPile API token and save it in your n8n credentials
2. Make sure this subworkflow is triggered correctly by your parent flows
3. Test both people and organization lookups to verify responses are normalized

## How to customize this workflow to your needs

- Add a secondary enrichment layer using tools like Clearbit or FullContact
- Customize the fallback logic or error handling
- Expand the returned data for more AI context or user routing (e.g., job title, region)


## 📊 Basic Information

- **Workflow ID:** 4890
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 774
- **Downloads:** 77
- **Created:** 2025/6/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4890)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **stickyNote** 
- **httpRequest** (×2)
- **set** (×3)
- **aggregate** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
