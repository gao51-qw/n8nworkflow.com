# Watchdog: Update All Workflows With Default Error Workflow

> Do you consistently *forget* to set a Default Error Workflow when creating new workflows?  Then this helper workflow is for you!

When activated, this helper workflow will:
* Scan ALL other workflows every 4 hours
* Make sure ALL workflows have a default error workflow set (based on what Workflow ID you provide)
* This helper will SKIP OVER any workflows that have the `default_error:false` tag set (make sure your default error workflow has the `default_error:false` tag set, so that you don't end up with recursive loops during errors)

Setup Nodes:
* Once imported, edit the `Set Vars` node with your `default_error_workflow_id` value.
* If you want to change the `default_error:false` tag to some other tag name, you can do so here as well.
* You need to update the `Set Default Error Workflow` node with your PostgreSQL credentials to access the `n8n` database.

## 📊 Basic Information

- **Workflow ID:** 2169
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1194
- **Downloads:** 119
- **Created:** 2024/3/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2169)

## 👤 Author

- **Name:** Darien Kindlund
- **Username:** @dkindlund

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **postgres** 
- **set** 
- **filter** 
- **manualTrigger** 
- **scheduleTrigger** 
- **n8n** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
