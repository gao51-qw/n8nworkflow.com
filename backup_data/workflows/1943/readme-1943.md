# Comparing data with the Compare Datasets node

> This workflow is designed to compare two datasets (Dataset 1 and Dataset 2) based on a common field, "fruit," and provide insights into the differences. Here are the steps:

1. Manual Trigger: The workflow begins when a user clicks "Execute Workflow."
2. Dataset 1: This node generates the first dataset containing information about fruits, such as apple, orange, grape, strawberry, and banana, along with their colors.
3. Dataset 2: This node generates the second dataset, also containing information about fruits, but with some variations in color. For example, it includes a "kiwi" with the color "mostly green."
4. Compare Datasets: The "Compare Datasets" node takes both datasets and compares them based on the "fruit" field. It identifies any differences or matches between the two datasets.

In summary, this workflow is used to compare two datasets of fruits and their colors, identify differences, and provide guidance on how to explore the comparison results.

## 📊 Basic Information

- **Workflow ID:** 1943
- **Complexity:** beginner
- **Node Count:** 0
- **Views:** 6039
- **Downloads:** 603
- **Created:** 2023/9/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1943)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **code** (×2)
- **compareDatasets** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
