# Sync Zendesk tickets to Pipedrive contact owners

> This workflow syncs Zendesk tickets to Pipedrive contact owners. 

This workflow is triggered every day at 09:00 with Zendesk collecting all the tickets updated after the last execution timestamp and updating them according to Pipedrive contacts. It also adds Zendesk comments to the tickets as notes in Pipedrive. 

## Prerequisites
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/)
- Zendesk account and [Zendesk credentials](https://docs.n8n.io/integrations/builtin/credentials/zendesk/)

*Note: The Pipedrive and the Zendesk accounts need to be created by the same person / with the same email.*

## How it works
1. Cron node triggers the workflow every day at 09:00.
2. Zendesk node collects all the tickets updated after the last execution timestamp.
3. If node checks if the channel in the ticket is an email, and if so, it continues the workflow.
4. The Item Lists node removes duplicates to make search efficient.
5. Pipedrive node searches persons by email.
6. Set node renames and keeps only needed fields (email & person id)
7. Merge by key node adds the Pipedrive contact id to Zendesk tickets.
8. The HTTP Request node gets Zendesk comments for tickets and the Merge node adds them to tickets.
9. Split node adds nodes in batches with each iteration. 
11. Item list node splits comments into separate items.
12. Pipedrive node adds comment as notes.
13. If node checks if the data processing is done and if not, goes back to the Split node.
The Function Item node sets the new last execution timestamp.


## 📊 Basic Information

- **Workflow ID:** 1807
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 1033
- **Downloads:** 103
- **Created:** 2022/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1807)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **noOp** (×3)
- **functionItem** (×2)
- **if** (×4)
- **httpRequest** 
- **merge** (×2)
- **zendesk** 
- **set** (×2)
- **pipedrive** (×2)
- **itemLists** (×2)
- **splitInBatches** 
- **cron** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
