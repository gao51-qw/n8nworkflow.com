# Distribute workflow execution with round-robin logic using data tables

> ## Key Features

Implements a simple round-robin distribution mechanism using a Data Table to track the last route used.

Supports multiple downstream workflows or resources, balancing workload across them sequentially.

Uses Switch and Code nodes for flexible routing logic.

Designed for easy customization — replace placeholder “Route” nodes with sub-workflow calls or API triggers.

Works with any trigger type, and includes merge logic to preserve input data.

## Nodes in Use
| Node Name                                       | Type         | Purpose                                                                 |
|-------------------------------------------------|---------------|--------------------------------------------------------------------------|
| When clicking ‘Execute workflow’                | Manual Trigger | Test entry point for manual execution.                                   |
| Calculate the next route to use                 | Data Table     | Retrieves the last used route number.                                   |
| Code in JavaScript                              | Code           | Increments the route counter (0–3 cycle).                               |
| Update last_used in the datatable               | Data Table     | Updates the “Last_Used” field to track next route.                      |
| Round Robin Router                              | Switch         | Routes workflow execution to the correct path based on Last_Used value. |
| Route 1 / Route 2 / Route 3                     | NoOp           | Placeholder routes — replace with your own workflows.                   |
| Merge trigger data to pass to subworkflow if needed | Merge        | Combines trigger data with routing data for sub-workflows.              |
| Sticky Notes                                    | Annotations    | Explain workflow logic and intended replacements.                       |



## How It Works

The workflow starts when triggered manually (or by another workflow).

The Data Table node fetches the current value of Last_Used, which identifies which route was last used.

The Code node increments that value, resetting to 0 after 3, creating a round-robin cycle.

The Data Table update node stores the new Last_Used value.

The Switch node reads Last_Used and routes execution to the correct downstream branch.

Each route can represent a duplicated workflow, resource, or API endpoint.

Optionally, the Merge node reattaches trigger data before sending it to sub-workflows.

## Step-by-Step

Trigger the workflow manually or via webhook/cron/etc.

Retrieve current route index using the Data Table node.

Increment route counter with the JavaScript Code node:

If Last_Used = 3, it resets to 0.

Otherwise, increments by 1.

Update Data Table with the new Last_Used value.

Route execution using the Switch node based on that value.

Send data to corresponding subworkflow (Route 1, Route 2, Route 3).

Replace the NoOp nodes with your target workflow or HTTP call nodes for real routing.

## Use Cases

Distribute load across multiple API endpoints to prevent throttling.

Run identical sub-workflows on different worker instances for parallel processing.

Simulate load balancing during testing of N8N workflows.

Sequentially alternate between external systems or servers handling similar tasks.

Act as a proof-of-concept for balancing strategies before scaling up.

## 📊 Basic Information

- **Workflow ID:** 10048
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 151
- **Downloads:** 15
- **Created:** 2025/10/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10048)

## 👤 Author

- **Name:** Adrian Kendall
- **Username:** @akendall1966

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **code** 
- **noOp** (×3)
- **switch** 
- **stickyNote** (×3)
- **dataTable** (×2)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
