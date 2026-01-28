# Daily workflow backups to GitHub with Slack notifications

> ### Who is this for?
This workflow is ideal for n8n self-hosted users, DevOps engineers, and automation developers who want to automatically back up their n8n workflows to GitHub on a regular basis.

### What problem is this workflow solving
Manually backing up n8n workflows can be time-consuming and prone to human error. This workflow automates the backup process, ensuring that all workflows are safely stored in a version-controlled GitHub repository every 24 hours.

### What this workflow does
This automation runs daily to back up all workflows from your n8n instance to a specified GitHub repository. Each workflow is saved as a .json file using its unique ID, organized into a folder path defined by repo_path. The workflow is designed to manage memory usage efficiently by recursively calling itself. Once the backup is complete, it optionally sends a Slack notification to confirm success.

### Setup
1. Configure the Config node in the subworkflow to set:
   - GitHub Repo Owner
   - GitHub Repo Name
   - Main folder path (repo_path)
2. Connect your GitHub and (optionally) Slack credentials.
3. Set the workflow to run on a daily cron schedule.
4. Test the workflow manually to confirm the GitHub integration works.

Sign up for a [free consultation](https://boanse.gumroad.com/l/free_n8n_consultation) and find out how n8n can help you.

## 📊 Basic Information

- **Workflow ID:** 5851
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 4080
- **Downloads:** 408
- **Created:** 2025/7/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5851)

## 👤 Author

- **Name:** Andrew
- **Username:** @boanse

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **set** (×2)
- **merge** 
- **code** 
- **github** (×3)
- **filter** 
- **stickyNote** (×2)
- **switch** 
- **n8n** 
- **scheduleTrigger** 
- **if** 
- **httpRequest** 
- **slack** (×2)
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
