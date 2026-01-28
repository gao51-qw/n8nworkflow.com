# Merge binary objects on multiple items into a single item

> This workflow is the opposite of [this one](https://n8n.io/workflows/1621-split-out-binary-data/). It transforms multiple different items with one binary object named `data`  into a single item with multiple binary objects:

![image.png](fileId:706)

This can be useful when creating a single .zip archive for example. It uses the updated Code node instead of the older Function node.

## 📊 Basic Information

- **Workflow ID:** 1916
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 2470
- **Downloads:** 247
- **Created:** 2023/5/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1916)

## 👤 Author

- **Name:** Tom
- **Username:** @mutedjam

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **code** (×2)
- **httpRequest** 
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
