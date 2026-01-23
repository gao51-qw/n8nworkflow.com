# Restore backed up workflows from GitHub to n8n

> Restore backed up workflows from GitHub to your n8n workspace.
This workflow was inspired by [this one](https://n8n.io/workflows/1534-back-up-your-n8n-workflows-to-github/) that lets you back up your n8n workflows to GitHub.
It will let you restore your backed up workflows in your workspace, without creating duplicates.
In case of issue with your instance, it will save you a lot of time to restore them.


## How it works
- It retrieves the workflows saved in a GitHub repository.
- Then compares these saved workflows with the ones in your n8n workspace based on the name.
- It will only create them if they don't already exist.

## Set up steps

1. Open the "Global" node and set your own information (see Configuration below)
2. Click on "Test workflow" 
3. It will run through all the workflows in the GitHub repository, check if the name doesn't already exist in your workspace and, in this case, create it.

## Configuration
- repo.owner: your GitHub owner name
- repo.name: your GitHub repository name
- repo.path: the path within the GitHub repository

## 📊 Basic Information

- **Workflow ID:** 2289
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 5473
- **Downloads:** 547
- **Created:** 2024/6/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2289)

## 👤 Author

- **Name:** Agent Studio
- **Username:** @agentstudio

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×3)
- **stickyNote** (×5)
- **noOp** 
- **if** 
- **github** (×2)
- **n8n** (×2)
- **merge** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
