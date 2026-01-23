# Create an issue on GitLab on every GitHub release

> For every release on GitHub this workflow will create an issue on GitLab.

1. Copy workflow to your n8n
2. Fill in missing fields (credentials & repo names)

Based on Cron node to be able to track github repos you're not a member of (as you won't be able to create a webhook).
If you do own the repo, you could replace Cron & GH node with a GitHub Trigger.

## 📊 Basic Information

- **Workflow ID:** 1349
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1608
- **Downloads:** 160
- **Created:** 2021/12/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1349)

## 👤 Author

- **Name:** Manu
- **Username:** @tennox

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **github** 
- **cron** 
- **merge** 
- **function** 
- **gitlab** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
