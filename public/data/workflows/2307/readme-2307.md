# Backup your credentials to GitHub

> Based on [Jonathan's](https://n8n.io/creators/jon-n8n/) work. Check out his templates.

This workflow will backup your credentials to GitHub. It uses a CLI command to export all credentials.

It then loops over the data, checks in GitHub to see if a file exists that uses the credential's ID. Once checked it will:
- update the file on GitHub if it exists;
- create a new file if it doesn't exist;
- ignore if it's the same.

### Config Options
**repo.owner** - Github owner

**repo.name** - Github repository name

**repo.path** - Path within the Github repository

==⚠ The credentials are all decrypted. Make sure you save them safely or tweak the CLI command to store them encrypted.==

### Check out my other templates
👉 [**https://n8n.io/creators/solomon/**](https://n8n.io/creators/solomon/)

## 📊 Basic Information

- **Workflow ID:** 2307
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 13764
- **Downloads:** 1376
- **Created:** 2024/7/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2307)

## 👤 Author

- **Name:** Solomon
- **Username:** @solomon

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×5)
- **set** (×2)
- **httpRequest** 
- **if** 
- **merge** 
- **code** (×2)
- **switch** 
- **noOp** (×3)
- **github** (×3)
- **splitInBatches** 
- **scheduleTrigger** 
- **executeCommand** 
- **executeWorkflow** 
- **executeWorkflowTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
