# Backup your workflows to GitHub

> Based on [Jonathan's](https://n8n.io/creators/jon-n8n/) work. Check out his templates.

### How it works
This workflow will backup your workflows to GitHub. It uses the n8n API node to export all workflows.

It then loops over the data, checks in GitHub to see if a file exists that uses the credential's ID. Once checked it will:
- update the file on GitHub if it exists;
- create a new file if it doesn't exist;
- ignore if it's the same.

### Who is this for?
People wanting to backup their workflows outside the server for safety purposes or to migrate to another server.

### Check out my other templates
👉 [**https://n8n.io/creators/solomon/**](https://n8n.io/creators/solomon/)


## 📊 Basic Information

- **Workflow ID:** 2652
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 12440
- **Downloads:** 1244
- **Created:** 2024/12/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2652)

## 👤 Author

- **Name:** Solomon
- **Username:** @solomon

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×5)
- **n8n** 
- **set** (×2)
- **httpRequest** 
- **if** 
- **merge** 
- **code** 
- **switch** 
- **noOp** (×3)
- **github** (×3)
- **splitInBatches** 
- **scheduleTrigger** 
- **executeWorkflowTrigger** 
- **executeWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
