# Save your workflows into a Gitlab repository

> This template is inspired by [Save your workflows into a GitHub repository](https://n8n.io/workflows/817-save-your-workflows-into-a-github-repository/) by [hikerspath](https://n8n.io/creators/hikerspath/) and [Back Up Your n8n Workflows To Github](https://n8n.io/workflows/1534-back-up-your-n8n-workflows-to-github/) by [jon-n8n](https://n8n.io/creators/jon-n8n/).

# Basic

Retrieve all workflows from an n8n instance and save it on a gitlab project. If the workflow exist, il will only save the changes.

# Flow

What the workflow does :

1. Sets custom parameters
2. Gets workflows
3. Iterates through each workflow one by one
	1. Get the file from Gitlab if exists
	2. Compare the files as objects (not as strings)
	3. Return a status on the workflow
4. Create, Edit or ignore the file depending on the status
5. Return a list of status for each workflow

# Configuration

Select a credential in each Gitlab nodes.

Edit the data in node "Globals" :
- repo.owner : slug of the user or team owning the repo
- repo.name : slug of the repository
- repo.branch : branch to commit on
- repo.path : from root of the repository. Should end with /

# Comments

Error on gitlab nodes will not stop the run but will list the current workflow as error in the results

Some fields are ignored to determined if there is changes :
- updatedAt : should be ignored if only ignores fields are changed
- globals : it's running information, no need to follow the changes


## 📊 Basic Information

- **Workflow ID:** 2385
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 5839
- **Downloads:** 583
- **Created:** 2024/8/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2385)

## 👤 Author

- **Name:** Julien DEL RIO
- **Username:** @juliendelrio

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×6)
- **noOp** (×4)
- **splitInBatches** 
- **gitlab** (×3)
- **code** 
- **extractFromFile** 
- **switch** 
- **stickyNote** (×2)
- **n8n** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
