# n8n workflow backup management with Dropbox and Airtable

> This workflow can be used to save all of your workflows in:
1. a raw state (as a json file in Dropbox)
2. an Airtable base, in a pre-designed format.

It runs periodically (currently, every 30 minutes) and either updates (if already existing in Airtable) or creates a new record in Airtable for each workflow.

Here's the Airtable base to give you an idea:

**[View Airtable base](https://airtable.com/shr9jexYomxygFSag)**

**Note: This workflows uses the "http://localhost:5678/rest" API which the UI editor uses but is still not officially supported. Hence, it may suffer breaking changes at some point in the future and the workflow might become dysfunctional then.**

## 📊 Basic Information

- **Workflow ID:** 823
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 1873
- **Downloads:** 187
- **Created:** 2020/12/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/823)

## 👤 Author

- **Name:** Shrey
- **Username:** @shrey-42

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **function** (×3)
- **splitInBatches** 
- **if** (×2)
- **noOp** 
- **airtable** (×3)
- **set** (×2)
- **httpRequest** (×3)
- **cron** 
- **moveBinaryData** 
- **dropbox** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
