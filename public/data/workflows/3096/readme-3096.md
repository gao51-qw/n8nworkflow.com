# Restore your workflows from GitHub

> This workflow restores all n8n instance workflows from GitHub backups using the n8n API node. It complements the [Backup Your Workflows to GitHub](https://n8n.io/workflows/2652-backup-your-workflows-to-github/) template by allowing users to seamlessly restore previously saved workflows.

## How It Works
The workflow fetches workflows stored in a GitHub repository and imports them into your n8n instance. 

## Setup Instructions
To configure the workflow, update the `Globals` node with the following values:

- **repo.owner** – Your GitHub username
- **repo.name** – The name of your GitHub repository storing the workflows
- **repo.path** – The folder path within the repository where workflows are stored

For example, if your GitHub username is `john-doe`, your repository is named `n8n-backups`, and workflows are stored in a `workflows/` folder, you would set:

- `repo.owner` → `john-doe`
- `repo.name` → `n8n-backups`
- `repo.path` → `workflows/`

### Required Credentials
- **GitHub API** – Access to your repository  
- **n8n API** – To import workflows into your n8n instance  

## Who Is This For?
This template is ideal for users who want to restore their workflows from GitHub backups, ensuring easy migration and recovery in case of data loss.

---

Check out my other templates:  
👉 [My n8n Templates](https://n8n.io/creators/bangank36/)


## 📊 Basic Information

- **Workflow ID:** 3096
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 2638
- **Downloads:** 263
- **Created:** 2025/3/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3096)

## 👤 Author

- **Name:** bangank36
- **Username:** @bangank36

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **stickyNote** (×2)
- **httpRequest** 
- **splitOut** 
- **github** 
- **extractFromFile** 
- **n8n** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
