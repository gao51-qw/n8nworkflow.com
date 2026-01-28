# Version control n8n workflows in GitLab with customer tag organization

> ## How it works
- Triggers manually or on schedule (03:00 daily by default)  
- Fetches workflows tagged `backup-workflows` via n8n API  
- Normalizes workflow names and applies `[client: NAME]` tag convention  
- Prepares JSON in the same structure as an n8n UI export  
- Checks GitLab repository:  
  - Create new file if missing  
  - Update file if content differs  
  - Skip if unchanged  
- Logs results with recap (created, updated, unchanged, total)  

## Set up steps
- Configure your GitLab credentials in n8n  
- Create a repository and branch for workflow backups  
- Set global variables (owner, project, branch, backup path)  
- Tag workflows to include with `backup-workflows`  
- Run manually once to test, then enable the schedule  

## 📊 Basic Information

- **Workflow ID:** 8042
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 1093
- **Downloads:** 109
- **Created:** 2025/8/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8042)

## 👤 Author

- **Name:** Omar Kennouche
- **Username:** @kennouche-omar

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **scheduleTrigger** 
- **code** (×4)
- **stickyNote** (×7)
- **n8n** 
- **gitlab** (×3)
- **set** (×5)
- **if** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
