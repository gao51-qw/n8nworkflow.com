# Enrich lead that booked a call on Calendly and save it on Hubspot

> ## Use Case
When having a call with a new potential customer, one of the keys to getting the most out of the call is to find out as much information as you can about them before the call. Normally this involves a lot of manual research before every call. This workflow automates this tedious work for you.
## What this workflow does
The workflow runs every time a new call is booked via your Calendly. It then filters out personal emails, before enriching the email. If the email is attached to a company it enriches the company and upserts it in your Hubspot CRM.
## Setup
1. Add `Clearbit`, `Hubspot`, and `Calendly` credentials.
2. Click on `Test workflow`.
3. Book a meeting on Calendly so the event starts the workflow.
Be aware that you can adapt this workflow to work with your enrichment tool, CRM, and booking tool of choice.

## 📊 Basic Information

- **Workflow ID:** 2129
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 2463
- **Downloads:** 246
- **Created:** 2024/2/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2129)

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
- **noOp** 
- **filter** 
- **calendlyTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
