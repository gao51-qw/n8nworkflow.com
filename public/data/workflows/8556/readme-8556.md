# Create nested data processing loops using n8n sub-workflows

> ## Nested Loops with Sub-workflows

### Template Description

This template provides a practical solution for a common n8n challenge: creating nested loops. While a powerful feature, n8n's standard **Loop** nodes don't work as expected in a nested structure. This template demonstrates the reliable workaround using a **main workflow** that calls a separate **sub-workflow** for each iteration.

### Purpose

The template is designed to help you handle scenarios where you need to iterate through one list of data for every item in another list. This is a crucial pattern for combining or processing related data, ensuring your workflows are both clean and modular.

### Instructions for Setup

1. This template contains both the main workflow and the sub-workflow on a single canvas.
2. **Copy the sub-workflow part** of this template (starting with the **Execute Sub-workflow Trigger** node) and paste it into a new, empty canvas.
3. In the **Execute Sub-workflow** node in the **main workflow** on this canvas, update the `Sub-workflow` field to link to the new workflow you just created.
4. Run the main workflow to see the solution in action.

For a detailed walkthrough of this solution, check out the [full blog post](https://n8nplaybook.com/post/2025/07/how-to-handle-nested-loops-in-n8n-with-sub-workflows/)

## 📊 Basic Information

- **Workflow ID:** 8556
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 342
- **Downloads:** 34
- **Created:** 2025/9/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8556)

## 👤 Author

- **Name:** Viktor Klepikovskyi
- **Username:** @vklepikovskyi

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **code** (×2)
- **splitInBatches** (×2)
- **executeWorkflowTrigger** 
- **set** 
- **stickyNote** 
- **executeWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
