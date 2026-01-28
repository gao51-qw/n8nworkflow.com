# Enrich new leads in Pipedrive and send an alert to Slack for high-quality ones

> ## Use Case
This workflow is beneficial when you're automatically adding new leads to your Pipedrive CRM. Usually, you'd have to manually review each lead to determine if they're a good fit. This process is time-consuming and increases the chances of missing important leads. This workflow ensures every new lead is promptly evaluated upon addition.
## What this workflow does
The workflow runs every 5 minutes. On every run, it checks your new Pipedrive leads and enriches them with Clearbit. It then marks items as enriched and checks if the company of the new lead matches certain criteria (in this case if they are B2B and have more than 100 employees) and sends a Slack alert to a channel for every match.
## Pre Conditions
You must have Pipedrive, Clearbit, and Slack accounts. You also need to set up the custom fields `Domain` and `Enriched at` in Pipedrive.
## Setup
1. Go to Company Settings -&gt; Data fields -&gt; Organization and add `Domain` as a custom field
2. Go to Company Settings -&gt; Data fields -&gt; Leads and add `Enriched at` as a custom date field
2. Add your `Pipedrive`, `Clearbit` and `Slack` credentials.
3. Fill the `setup` node below. To get the ID of your custom domain fields, simply run the `Show only custom organization fields` and `Show only custom lead fields` nodes below and copy the keys of your `domain`, and `enriched at` fields.
## How to adjust this workflow to your needs
- Modify the criteria to suit your definition of an interesting lead.
- If you only want to focus on interesting leads in Pipedrive, add a node that archives all others.

This workflow was built using n8n version 1.29.1


## 📊 Basic Information

- **Workflow ID:** 2135
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 2176
- **Downloads:** 217
- **Created:** 2024/2/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2135)

## 👤 Author

- **Name:** Niklas Hatje
- **Username:** @nik8n

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **stickyNote** (×4)
- **clearbit** 
- **pipedrive** (×2)
- **set** (×2)
- **filter** (×3)
- **scheduleTrigger** 
- **slack** 
- **merge** 
- **httpRequest** (×3)
- **splitOut** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
