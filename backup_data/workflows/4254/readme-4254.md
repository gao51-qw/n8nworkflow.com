# Find Linkedin company page with Airtop

> 
# Automating LinkedIn Company Page Discovery

## Use Case

Finding the official LinkedIn page of a company is crucial for tasks like outreach, research, or enrichment. This automation streamlines the process by intelligently searching the company’s website and LinkedIn to locate the correct profile.

## What This Automation Does

This automation identifies a company's LinkedIn page using the following input parameters:

- **Company domain**: The official website domain of the company (e.g., `company.com`).
- **Airtop Profile (connected to LinkedIn)**: The name of your [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated on LinkedIn.

## How It Works

1. Launches an Airtop session using the provided authenticated profile.
2. Attempts to extract a LinkedIn link directly from the company's website.
3. If not found, performs a LinkedIn search for the company.
4. If still unsuccessful, falls back to a Google search.
5. Validates the most likely result to confirm it’s a LinkedIn company page.
6. Outputs the verified LinkedIn URL.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys) — free to generate.
2. An [Airtop Profile](https://portal.airtop.ai/browser-profiles) logged in to LinkedIn (requires one-time login).

## Next Steps

- **Combine with People Enrichment**: Use this with LinkedIn profile discovery for full contact + company data workflows.
- **CRM Integration**: Automatically enrich company records with LinkedIn links.
- **Build Custom Outreach Workflows**: Connect company pages to SDR tooling for deeper research and engagement.

Read more about how to [find Linkedin Company page](https://www.airtop.ai/automations/find-linkedin-company-page-n8n)


## 📊 Basic Information

- **Workflow ID:** 4254
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 494
- **Downloads:** 49
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4254)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **formTrigger** 
- **set** (×2)
- **filter** 
- **executeWorkflowTrigger** 
- **stickyNote** (×5)
- **airtop** (×3)
- **if** (×2)
- **executeWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
