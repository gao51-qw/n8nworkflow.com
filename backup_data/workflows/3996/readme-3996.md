# Auto-start tagged workflows using n8n API after deployment

> **Auto Starter**

On importing workflows these will not be auto started, even if the old version was running. To fix this we created this workflow that can be run after n8n starts. It fits in our auto deploy pipeline and modified n8n container that will import workflows, start n8n and start the tagged workflows.

- Start this workflow after n8n starts.
- It will get all workflows in the running n8n instance.
- If the files have a tag **'Auto start'** the workflow will be started.

Check our *Export workflows with readable names* workflow for autostarting workflows after deployment.

**Configuration**
- You need a a **n8n api key** configured.

## 📊 Basic Information

- **Workflow ID:** 3996
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 176
- **Downloads:** 17
- **Created:** 2025/5/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3996)

## 👤 Author

- **Name:** Klaasjan te Voortwis
- **Username:** @voortwis

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **n8n** (×2)
- **if** 
- **manualTrigger** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
