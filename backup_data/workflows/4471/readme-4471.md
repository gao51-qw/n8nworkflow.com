# Github webhook-based n8n workflow import template

> **This n8n workflow template uses community nodes and is only compatible with the self-hosted version of n8n.** 

This template aims to ease the process of deploying workflows from github. It has a companion repository that developers might find useful{. See below for more details

## How it works

Automatically import and deploy n8n workflows from your GitHub repository to your production n8n instance using a secured webhook-based approach. This template enables teams to maintain version control of their workflows while ensuring seamless deployment through a CI/CD pipeline.

1. Receives webhook notifications from GitHub when changes are pushed to your repository
2. Lists all files in the repository and filters for `.json` workflow files
3. Downloads each workflow file and saves it locally
4. Imports all workflows into n8n using the CLI import command
5. Cleans up temporary files after successful import

To trigger the deployment, send a POST request to your webhook with the set up credentials (basic auth) with the following body:
```
{
  "owner": "GITHUB_REPO_OWNER_NAME",
  "repository": "GITHUB_REPOSITORY_NAME"
}
```


## Set up steps
Once importing this template in n8n :
1. Setup the webhook basic auth credentials
2. Setup the github credentials
3. Activate the workflow !

## Companion repository
There is a companion repository located at [https://github.com/dynamicNerdsSolutions/n8n-git-flow-template](https://github.com/dynamicNerdsSolutions/n8n-git-flow-template) that has a Github action already setup to work with this workflow.

It provides a complete development environment with:
- Local n8n instance via Docker
- Automated workflow export and commit scripts
- Version control integration
- CI/CD pipeline setup

This setup allows teams to maintain a clean separation between development and production environments while ensuring reliable workflow deployment.

## 📊 Basic Information

- **Workflow ID:** 4471
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1396
- **Downloads:** 139
- **Created:** 2025/5/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4471)

## 👤 Author

- **Name:** Dave Bernier
- **Username:** @dbern

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **webhook** 
- **noOp** 
- **executeCommand** (×2)
- **stickyNote** 
- **github** (×2)
- **splitInBatches** 
- **if** 
- **readWriteFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
