# Backup your workflows to GitHub -- in (subfolders)

> Based on [Jonathan](https://n8n.io/creators/jon-n8n) & [Solomon](https://n8n.io/creators/solomon) work.

&gt; The only addition I've made is a Set node. This node organizes workflows into subfolders within the GitHub repository based on their respective tags.

#### How it works
This workflow will backup your workflows to GitHub. It uses the n8n API node to export all workflows.

It then loops over the data, checks in GitHub to see if a file exists that uses the credential's ID. Once checked it will:
- update the file on GitHub if it exists;
- create a new file if it doesn't exist;
- ignore if it's the same.

#### Who is this for?
People wanting to backup their workflows outside the server for safety purposes or to migrate to another server.



## 📊 Basic Information

- **Workflow ID:** 2868
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 5840
- **Downloads:** 584
- **Created:** 2025/2/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2868)

## 👤 Author

- **Name:** Nazmy
- **Username:** @islamnazmi

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×4)
- **n8n** 
- **set** (×3)
- **httpRequest** 
- **if** 
- **merge** 
- **code** 
- **switch** (×2)
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

This workflow contains 25 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
