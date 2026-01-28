# Sync Zendesk tickets to your HubSpot contacts

> This workflow automatically syncs your Zendesk tickets to your HubSpot contacts. Every 5 minutes, your HubSpot account collects all the newly modified data and updates it into your Zendesk account, updating the current tickets or creating new ones. 

## Prerequisites
- Zendesk account and [Zendesk credentials](https://docs.n8n.io/integrations/builtin/credentials/zendesk/) 
- HubSpot account and [HubSpot credentials](https://docs.n8n.io/integrations/builtin/credentials/hubspot/) 

## How it works
1. Cron node triggers the workflow every 5 minutes.
2. Function Item node collects all the tickets received after the last execution timestamp.
3. HubSpot node collects all the recently modified companies.
4. Zendesk node checks all the Zendesk tickets associated with those companies.
5. Merge by key node merges the Zendesk and Hubspot data related to those companies.
6. If node splits the workflow conditionally, based on data received.
7. If the company already exists in, Zendesk node updates organization’sdata.
8. If the company does not exist yet, Zendesk node will create an organization.
9. The Function Item node sets the new last execution timestamp.

## 📊 Basic Information

- **Workflow ID:** 1840
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1045
- **Downloads:** 104
- **Created:** 2022/12/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1840)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **merge** 
- **functionItem** (×2)
- **hubspot** 
- **zendesk** (×3)
- **if** 
- **cron** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
