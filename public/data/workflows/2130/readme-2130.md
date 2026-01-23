# Enrich lead captured by ConvertKit and save it in Hubspot

> ## Use Case
Whenever someone shows interest in your offerings by subscribing to a list in ConvertKit it could be a potential new customer. Typically you need to gather more detailed information about them (data enrichment) and finally update their profile in your CRM system to better manage and nurture your relationship with them. This workflow does this all for you!

## What this workflow does
The workflow runs every time a user is subscribed to a ConvertKit list. It then filters out personal emails, before enriching the email. If the email is attached to a company it enriches the company and upserts it in your Hubspot CRM.

## Setup
1. Add `Clearbit`, `Hubspot`, and `ConvertKit` credentials.
2. Click on `Test workflow`.
3. Subscribe to a list on `ConvertKit` to trigger the workflow.

Be aware that you can adapt this workflow to work with your enrichment tool, CRM, and email automation tool of choice.


## 📊 Basic Information

- **Workflow ID:** 2130
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1253
- **Downloads:** 125
- **Created:** 2024/2/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2130)

## 👤 Author

- **Name:** Ricardo Espinozaas
- **Username:** @n8nricardoe105

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **if** (×2)
- **stickyNote** (×4)
- **clearbit** (×2)
- **hubspot** (×5)
- **convertKitTrigger** 
- **filter** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
