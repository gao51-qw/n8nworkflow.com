# Reusable and independently testable sub-workflow

> ## Reusable and Independently Testable Sub-workflow
This n8n workflow provides a standardized structure for building and testing sub-workflows in isolation. Its purpose is to help you create robust, reusable, and maintainable automations by enabling you to test the sub-workflow's logic without needing a separate parent workflow.
### Setup Instructions:
1. **Define Sub-workflow Inputs**: Double-click the **Execute Sub-workflow Trigger** node to define the parameters (e.g., `color`) that your sub-workflow will expect from a parent workflow.
2. **Configure Test Data**: Use the `Test Input` node (an **Edit Fields (Set)** node connected to the **Manual Trigger**) to provide sample data for isolated testing.
3. **Connect Inputs**: The `Combine Input` node (an **Edit Fields (Set)** node) is the entry point for your sub-workflow's core logic. It should have two inputs: one from the `Execute Sub-workflow Trigger` and one from the `Test Input` node.
4. **Merge Inputs**: Ensure the `Combine Input` node has the 'Include Other Input Fields' option enabled to merge data from both the live and test paths seamlessly.

You can read the full blog post that explains this workflow setup in detail [here](https://n8nplaybook.com/post/2025/06/how-to-test-n8n-subworkflows/).

## 📊 Basic Information

- **Workflow ID:** 5032
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 643
- **Downloads:** 64
- **Created:** 2025/6/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5032)

## 👤 Author

- **Name:** Viktor Klepikovskyi
- **Username:** @vklepikovskyi

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **manualTrigger** 
- **set** (×2)
- **if** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
