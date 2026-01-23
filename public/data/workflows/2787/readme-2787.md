# Backup n8n workflows to Bitbucket

> An automated backup solution designed for self-hosted n8n users to automatically backup their workflows to Bitbucket, leveraging Bitbucket's free private repository offering.

Perfect for maintaining version control of your n8n workflows without additional costs.

## How it works:
* Runs on a regular schedule to check all workflows in your n8n instance
* Compares each workflow with its version in Bitbucket
* Only uploads workflows that are new or have changed
* Uses basic rate limiting to stay within Bitbucket's API limits
* Formats filenames for easy tracking and includes timestamps in commit messages
* Handles errors gracefully with automatic retries

## Set up steps (10-15 minutes):
1. Create a free Bitbucket account and private repository
2. Create a Bitbucket App Password with repository write access
3. Add Bitbucket credentials to n8n (using your username and app password)
4. Set up n8n API access (generate API key in your n8n instance)
5. Configure your Bitbucket workspace and repository names in the Set node
6. Optional: Adjust the backup schedule (default: 2 AM daily)

### Perfect for n8n self-hosters who want:
* Version control for their workflows
* Automated daily backups
* Free private repository storage
* Easy workflow recovery
* Change tracking over time

The workflow includes basic error handling and rate limiting to ensure reliable backups even with larger numbers of workflows. Adjust your timing based on https://support.atlassian.com/bitbucket-cloud/docs/api-request-limits/.

## 📊 Basic Information

- **Workflow ID:** 2787
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1495
- **Downloads:** 149
- **Created:** 2025/1/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2787)

## 👤 Author

- **Name:** Gareth B. Davies
- **Username:** @garethbdavies

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **code** 
- **scheduleTrigger** 
- **n8n** 
- **splitInBatches** 
- **httpRequest** (×2)
- **if** 
- **wait** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
