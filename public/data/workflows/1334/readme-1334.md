# One-way sync between Pipedrive and HubSpot

> This workflow synchronizes data one-way from Pipedrive to HubSpot.

![workflow-screenshot](fileId:569)

- **Cron node** schedules the workflow to run every minute.
- **Pipedrive** and *Hubspot1  nodes* pull in both lists of persons from Pipedrive and contacts from HubSpot.
- **Merge node** with the option *Remove Key Matches* identifies the items that uniquely exist in Pipedrive.
- **Hubspot2 node** takes those unique items and adds them to HubSpot.

## 📊 Basic Information

- **Workflow ID:** 1334
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 978
- **Downloads:** 97
- **Created:** 2021/11/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1334)

## 👤 Author

- **Name:** Lorena
- **Username:** @lorenanda

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **hubspot** (×2)
- **pipedrive** 
- **merge** 
- **cron** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
