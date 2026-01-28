# Readable workflow export & deployment pipeline for multi-environment CI/CD

> **This n8n workflow template uses community nodes and is only compatible with the self-hosted version of n8n.** 

## Export workflows with readable names, tagged for different environments

To ensure understandable workflow exports, ease of use in delivery pipelines, and a better developer experience, this workflow helps with exporting workflows.

## Inner workings
- First, the workflow ensures that the directory structure for storing the workflows is correct.
- Exports all workflows.
- Next, it processes all workflow files and stores them with readable names.
- Based on tags, it will *also* export to `dev` and `prod` folders for easy commit and usage in a delivery pipeline.

## Configration
No special setup is required for readable exporting.

## Usage
Create a workflow and tag it with '*Auto deploy to dev*'
Run the workflow, this will create the needed folders and workflows with readable names.
Commit these in your version control.
Have a CICD pipeline build an n8n container
—see the attached Dockerfile. 

Check our **Auto Starter workflow** for auto-starting workflows after deployment.

## CI/CD Bonus:
Attached are two nodes with some example configuration on building your own automated n8n deployment. 
- A Dockerfile, to get the new entrypoint and exported workflows packaged in the container.
- An updated entrypoint to build your own container, import the workflows, and run the Auto Starter.

Set the following environment variables:

- `STARTUP_WORKFLOWS_LOAD_LOCATION`: to specify the folder to import from and distinguish between environments.
- `STARTUP_WORKFLOW_ID`: the ID of the workflow to run after starting n8n.  
  &gt; **Note:** The 'Instance Started' n8n trigger won't work, as all workflows are disabled upon import.


## 📊 Basic Information

- **Workflow ID:** 3994
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 892
- **Downloads:** 89
- **Created:** 2025/5/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3994)

## 👤 Author

- **Name:** Klaasjan te Voortwis
- **Username:** @voortwis

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **set** 
- **if** (×2)
- **stickyNote** (×8)
- **manualTrigger** 
- **executeCommand** 
- **readWriteFile** (×4)
- **extractFromFile** 
- **convertToFile** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
