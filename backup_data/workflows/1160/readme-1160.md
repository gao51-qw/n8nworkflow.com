# Merge data for multiple executions

> This workflow demonstrates how to merge data for different executions.

![workflow-screenshot](fileId:517)

The Merge Data Function node fetches the data from different executions of the RSS Feed Read node and merges them under a single object.

**Note:** If you want to process the items that get merged, you will have to convert the single item into n8n understandable multiple items.

## 📊 Basic Information

- **Workflow ID:** 1160
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 6309
- **Downloads:** 630
- **Created:** 2021/7/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1160)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **function** (×2)
- **rssFeedRead** 
- **splitInBatches** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
