# n8n subworkflow dependency graph & auto-tagging

> ## How it Works
As n8n instances scale, teams often lose track of sub-workflows—who uses them, where they are referenced, and whether they can be safely updated. This leads to inefficiencies like unnecessary copies of workflows or reluctance to modify existing ones. This workflow solves that problem by:

1. Fetching all workflows and identifying which ones execute others.
2. Verifying that referenced subworkflows exist.
3. Building a caller-subworkflow dependency graph for visibility.
4. Automatically tagging sub-workflows based on their parent workflows.
5. Providing a chart visualization to highlight the most-used sub-workflows.

![n8nsubworkflowdependencygraph.png](fileId:956)


## Set Up Steps
*Estimated time: ~10–15 minutes*
1. Set up n8n API credentials to allow access to workflows and tags.
2. Replace instance_url with your n8n instance URL.
3. Run the workflow to analyze dependencies and generate the graph.
4. Review and validate assigned tags for sub-workflows.
5. (Optional) Enable pie chart visualization to see the most-used sub-workflows.

This workflow is essential for enterprise teams managing large n8n instances, preventing workflow duplication, reducing uncertainty around dependencies, and allowing safe, informed updates to sub-workflows.

## 📊 Basic Information

- **Workflow ID:** 2939
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 2417
- **Downloads:** 241
- **Created:** 2025/2/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2939)

## 👤 Author

- **Name:** Ludwig
- **Username:** @ludwig

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **httpRequest** (×4)
- **n8n** (×2)
- **code** (×3)
- **filter** (×2)
- **scheduleTrigger** 
- **n8nTrigger** 
- **set** (×6)
- **splitInBatches** 
- **if** 
- **splitOut** 
- **merge** 
- **aggregate** 
- **quickChart** 
- **stickyNote** (×13)
- **webhook** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
