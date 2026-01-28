# Automated n8n workflow backup to GitHub with deletion tracking

> Remixed [Backup your workflows to GitHub](https://n8n.io/workflows/2652-backup-your-workflows-to-github/) from [Solomon's](https://n8n.io/creators/solomon/) work. Check out his templates.

### How it works
This workflow will backup your workflows to GitHub. It uses the n8n API node to export all workflows.

It then loops over the data, checks in GitHub to see if a file exists that uses the credential's ID. Once checked it will:

- update the file on GitHub if it exists;
- create a new file if it doesn't exist;
- ignore if it's the same.

In addition, it also checks if any workflows have been deleted from n8n. If a workflow no longer exists in n8n, the corresponding file will be removed from the repository to keep everything in sync.

### Who is this for?
People wanting to backup their workflows outside the server for safety purposes or to migrate to another server.

## 📊 Basic Information

- **Workflow ID:** 5898
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 5042
- **Downloads:** 504
- **Created:** 2025/7/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5898)

## 👤 Author

- **Name:** Marcial Ambriz
- **Username:** @marskdev

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×4)
- **httpRequest** 
- **if** (×2)
- **code** (×2)
- **noOp** (×3)
- **github** (×5)
- **splitInBatches** 
- **scheduleTrigger** 
- **stickyNote** (×4)
- **executeWorkflowTrigger** 
- **executeWorkflow** 
- **switch** (×2)
- **n8n** 
- **aggregate** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
