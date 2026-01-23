# Prevent simultaneous workflow executions with Redis

> ## Purpose
This ensures that executions of scheduled workflows do not overlap when they take longer than expected.

## How it works
- This is a separate workflow which monitors the execution of the main workflow
- Stores a flag in Redis (key dynamically named after workflow ID) which indicates if the main workflow is running or idle
- Only calls the main workflow if the last execution has finished

## Setup
- Update the credentials suitable for your Redis instance
- Replace the **Schedule Trigger** of your main workflow by an **Execute Workflow Trigger**
- Copy the workflow ID from the URL
- Paste the workflow ID in the **Execute Workflow** Node of this workflow
- Configure the **Schedule Trigger** Node


## 📊 Basic Information

- **Workflow ID:** 2270
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1470
- **Downloads:** 147
- **Created:** 2024/5/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2270)

## 👤 Author

- **Name:** Mario
- **Username:** @octionic

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **executeWorkflow** 
- **scheduleTrigger** 
- **redis** (×4)
- **filter** 
- **if** 
- **noOp** 
- **manualTrigger** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
