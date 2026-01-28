# Backup Squarespace code injections to Github

> This workflow backup Squarespace website header and footer injections into Github

## How It Works
The Squarespace injections are fetched when an URL is placed

## Setup Instructions
First, edit HTTP Request's URL to put your Squarespace site URL there

Next, to configure the Github, update the Globals node with the following values:

- repo.owner – Your GitHub username
- repo.name – The name of your GitHub repository storing the workflows
- repo.path – The folder path within the repository where workflows are stored
For example, if your GitHub username is john-doe, your repository is named n8n-backups, and injections are stored in a squarespace-backup/ folder, you would set:

  - repo.owner → john-doe
  - repo.name → n8n-backups
  - repo.path → squarespace-backup/

Each site's injections will be added into seperate folder
![n8n template  Squarespace injections backup.png](fileId:992)

### Required Credentials
GitHub API – Access to your repository

## Who Is This For?
This template is made for Squarespace users who want to backup their header and footer injections at interval to or on demand

Check out my other templates:
👉 [My n8n Templates](https://n8n.io/creators/bangank36/)

## 📊 Basic Information

- **Workflow ID:** 3113
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 353
- **Downloads:** 35
- **Created:** 2025/3/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3113)

## 👤 Author

- **Name:** bangank36
- **Username:** @bangank36

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **scheduleTrigger** 
- **stickyNote** (×4)
- **httpRequest** 
- **if** 
- **code** (×2)
- **set** (×3)
- **github** (×2)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
