# Restore your credentials from GitHub

> This workflow restores all n8n instance credentials from GitHub backups using the n8n API node. It complements the [Backup Your Credentials to GitHub](https://n8n.io/workflows/2307-backup-your-credentials-to-github/) template by allowing users to seamlessly restore previously saved credentials.

## How It Works
The workflow fetches credentials stored in a GitHub repository and imports them into your n8n instance. 

## Setup Instructions
To configure the workflow, update the `Globals` node with the following values:

- **repo.owner** – Your GitHub username
- **repo.name** – The name of your GitHub repository storing the credentials
- **repo.path** – The folder path within the repository where credentials are stored

For example, if your GitHub username is `john-doe`, your repository is named `n8n-backups`, and credentials are stored in a `credentials/` folder, you would set:

- `repo.owner` → `john-doe`
- `repo.name` → `n8n-backups`
- `repo.path` → `credentials/`

### Required Credentials
- **GitHub API** – Access to your repository  
- **n8n API** – To import credentials into your n8n instance  

## Who Is This For?
This template is ideal for users who want to restore their credentials from GitHub backups, ensuring easy migration and recovery in case of data loss.

---

Check out my other templates:  
👉 [My n8n Templates](https://n8n.io/creators/bangank36/)


## 📊 Basic Information

- **Workflow ID:** 3097
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 3347
- **Downloads:** 334
- **Created:** 2025/3/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3097)

## 👤 Author

- **Name:** bangank36
- **Username:** @bangank36

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×3)
- **set** 
- **httpRequest** 
- **splitOut** 
- **github** 
- **extractFromFile** 
- **n8n** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
