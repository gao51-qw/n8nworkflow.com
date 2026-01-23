# Two-way sync between Pipedrive and HubSpot

> This workflow synchronizes data both ways between Pipedrive and HubSpot.

![workflow-screenshot](fileId:568)

- **Cron node** schedules the workflow to run every minute.
- **Pipedrive** and **Hubspot nodes** pull in both lists of persons from Pipedrive and contacts from HubSpot.
- **Merge1** and **Merge2 nodes** with the option Remove Key Matches identify the items that uniquely exist in HubSpot and Pipedrive, respectively.
- **Update Pipedrive** and **Update HubSpot nodes** take those unique items and add them in Pipedrive and HubSpot, respectively.

## 📊 Basic Information

- **Workflow ID:** 1333
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1409
- **Downloads:** 140
- **Created:** 2021/11/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1333)

## 👤 Author

- **Name:** Lorena
- **Username:** @lorenanda

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **cron** 
- **pipedrive** (×2)
- **hubspot** (×2)
- **merge** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
