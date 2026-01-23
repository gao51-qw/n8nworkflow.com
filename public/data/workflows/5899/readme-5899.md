# Automatic Typebot flows two-way sync with GitHub using Typebot API

> Remixed [Backup your workflows to GitHub](https://n8n.io/workflows/2652-backup-your-workflows-to-github/) from [Solomon's](https://n8n.io/creators/solomon/) work. Check out his templates.

### How it works
This workflow will backup your typebots to GitHub. It uses the [Typebot API](https://docs.typebot.io/api-reference/authentication) to export all typebots.

It then loops over the data, checks in GitHub to see if a file exists that uses the credential's ID. Once checked it will:

- update the file on GitHub if it exists;
- create a new file if it doesn't exist;
- ignore if it's the same.

In addition, it also checks if any flow have been deleted from typebot workspace. If a flow no longer exists in workspace, the corresponding file will be removed from the repository to keep everything in sync.

### Who is this for?
People wanting to backup their typebots(flows) outside the server for safety purposes or to migrate to another server.

## 📊 Basic Information

- **Workflow ID:** 5899
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 350
- **Downloads:** 35
- **Created:** 2025/7/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5899)

## 👤 Author

- **Name:** Marcial Ambriz
- **Username:** @marskdev

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×4)
- **executeWorkflowTrigger** 
- **httpRequest** (×2)
- **set** (×5)
- **splitOut** 
- **scheduleTrigger** 
- **github** (×5)
- **if** 
- **code** (×2)
- **switch** (×2)
- **noOp** (×3)
- **merge** 
- **splitInBatches** 
- **executeWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
