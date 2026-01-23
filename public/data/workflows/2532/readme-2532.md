# Backup workflows to git repository on Github

> [Source code](https://code.swecha.org/shashikanth/n8n-templates/-/tree/main/backup-worflows), I maintain this worflow here.


# Usage Guide

This workflow backs up all workflows as JSON files named in the `[workflow_name].json` format.

## Steps

1. **Create GitHub Repository**  
   - Skip this step if using an existing repository.

2. **Add GitHub Credentials**  
   - In **Credentials**, add the GitHub credential for the repository owner.

3. **Download and Import Workflow**  
   - Import this workflow into n8n.

4. **Set Global Values**  
   - In the **Globals** node, set the following:
     - `repo.owner`: GitHub username of the repository owner.
     - `repo.name`: Name of the repository for backups.
     - `repo.path`: Path to the folder within the repository where workflows will be saved.

5. **Configure GitHub Nodes**  
   - Edit each GitHub node in the workflow to use the added credentials.

## Workflow Logic

Each workflow run handles files based on their status:

1. **New Workflow**  
   - If a workflow is new, create a new file in the repository.

2. **Unchanged Workflow**  
   - If the workflow is unchanged, skip to the next item.

3. **Changed Workflow**  
   - If a workflow has changes, update the corresponding file in the repository.

## Current Limitations / Needs work

1. **Name Change of Workflows**  
   - If a workflow is renamed or deleted in n8n, the old file remains in the repository.
2. **Deleted Workflows**  
   - Deleted workflows in n8n are not removed from the repository.


## 📊 Basic Information

- **Workflow ID:** 2532
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 7123
- **Downloads:** 712
- **Created:** 2024/11/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2532)

## 👤 Author

- **Name:** Shashikanth
- **Username:** @shashikanth

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **github** (×3)
- **set** 
- **n8n** 
- **splitInBatches** 
- **if** (×2)
- **code** 
- **scheduleTrigger** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
