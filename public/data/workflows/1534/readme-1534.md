# Back up your n8n workflows to Github

> This workflow will backup your workflows to Github. It uses the public api to export all of the workflow data using the n8n node.

It then loops over the data checks in Github to see if a file exists that uses the workflow name. Once checked it will then update the file on Github if it exists, Create a new file if it doesn't exist and if it's the same it will ignore the file.

### Config Options
**repo_owner** - Github owner

**repo_name** - Github repository name

**repo_path** - Path within the Github repository

&gt;This workflow has been updated to use the n8n node and the code node so requires at least version 0.198.0 of n8n

## 📊 Basic Information

- **Workflow ID:** 1534
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 97183
- **Downloads:** 9718
- **Created:** 2022/3/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1534)

## 👤 Author

- **Name:** Jonathan
- **Username:** @jon-n8n

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×3)
- **executeWorkflowTrigger** 
- **n8n** 
- **set** (×3)
- **httpRequest** 
- **if** 
- **merge** 
- **code** 
- **switch** 
- **noOp** (×3)
- **github** (×3)
- **splitInBatches** 
- **scheduleTrigger** 
- **slack** (×3)
- **executeWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
