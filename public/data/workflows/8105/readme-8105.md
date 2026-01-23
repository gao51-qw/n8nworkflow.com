# GitHub workflow version control dashboard with commit history and rollbacks

> This n8n template provides enterprise-level version control for your workflows using GitHub integration. Stop losing hours to broken workflows and manual exports – get proper commit history, visual diffs, and one-click rollbacks.

## This is the first template for n8n that provides real version control with commit-level granularity.

**Perfect for power users and tech teams managing multiple complex workflows.**

![n8nghdashboardgif400p8fps.gif](fileId:2293)
*Animation demonstrates early bird version and may differ from the latest one*

### How it works

* **Automated sync**: Workflows are automatically synced to GitHub on your preferred schedule
* **Smart categorization**: Dashboard shows which workflows are synced, n8n-only, or GitHub-only
* **Complete commit history**: View every change with timestamps, authors, and commit messages
* **Flexible import**: Import workflows from GitHub as new workflows or replace existing ones
* **Individual workflow control**: Sync specific workflows with custom commit messages

### How to use

* Import the workflow template into your n8n instance
* Generate your n8n API key from your instance settings
* Configure your GitHub credentials and repository settings
* Set up the webhook endpoint for the dashboard interface
* Access the dashboard via the generated webhook URL
* Configure automatic sync schedule or use manual sync options

### Requirements

* n8n instance (cloud or self-hosted) with API access
* GitHub account and repository
* Basic understanding of Git workflows

## Customizing this workflow

* DIY or available as part of consulting services
* Professional customization for specific deployment workflows and integrations
* Custom sync schedules and commit message formats can be configured during setup

## 📊 Basic Information

- **Workflow ID:** 8105
- **Complexity:** advanced
- **Node Count:** 94
- **Views:** 188
- **Downloads:** 18
- **Created:** 2025/9/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8105)

## 👤 Author

- **Name:** Eduard
- **Username:** @eduard

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **set** (×18)
- **n8n** (×7)
- **compareDatasets** 
- **webhook** (×2)
- **merge** (×9)
- **respondToWebhook** (×4)
- **noOp** (×7)
- **aggregate** (×4)
- **switch** (×5)
- **code** (×2)
- **filter** (×2)
- **if** (×2)
- **splitInBatches** 
- **scheduleTrigger** 
- **stickyNote** (×11)
- **executeWorkflow** (×2)
- **executeWorkflowTrigger** 
- **html** 
- **httpRequest** (×5)
- **github** (×6)
- **summarize** 
- **sort** 
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 94 nodes with 77 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
