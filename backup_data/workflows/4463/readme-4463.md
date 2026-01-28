# Automated workflow backups to GitHub with PR creation & Slack notifications

> ## Who is this for?

This template is ideal for DevOps engineers, automation specialists, and n8n users who manage multiple workflows and want a reliable version control system for backups. It’s especially useful for teams collaborating via GitHub.

## What problem is this workflow solving?

Manually backing up n8n workflows to GitHub can be time-consuming and error-prone. This workflow solves that by automating the backup of new and updated n8n workflows, ensuring your GitHub repository always reflects the latest changes.

## What this workflow does
- Retrieves all workflows from your local n8n instance.
- Decodes their content and compares it with existing GitHub files.
- Detects newly created or updated workflows.
- Creates a new Git branch and commits changes.
- Opens a pull request (PR) to the main branch.
- Sends a Slack notification when the PR is created.

The system uses GitHub API, n8n, Merge, Set, and Slack nodes for full automation.

## Setup
1. GitHub credentials: Add your GitHub API credentials in n8n.
2. Slack integration: Connect your Slack Bot token if you want PR notifications.
3. Repository details: Update github_owner, repo_name, and workflow directory path in the “Define Local Variables” node.
4. n8n API key - [Check this doc](https://docs.n8n.io/api/authentication/)

## How to customize this workflow to your needs
- Change the workflow directory from workflows/ to a custom path.
- Modify the Slack message or add email notification support.
- Add filters to back up only specific workflows based on naming or tags.
- Adjust branch naming conventions or use different GitHub base branches.

This workflow provides a seamless backup and versioning pipeline, minimizing manual Git interactions and supporting collaborative automation development.

## 📊 Basic Information

- **Workflow ID:** 4463
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 623
- **Downloads:** 62
- **Created:** 2025/5/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4463)

## 👤 Author

- **Name:** Bao Duy Nguyen
- **Username:** @duynb

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **n8n** 
- **merge** (×6)
- **httpRequest** (×3)
- **set** (×2)
- **github** (×4)
- **if** 
- **noOp** 
- **filter** (×2)
- **slack** 
- **manualTrigger** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
