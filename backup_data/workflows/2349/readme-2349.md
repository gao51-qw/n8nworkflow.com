# Access execution data from an error workflow

> Sometimes you want to take a different action in your error workflow based on the data that was flowing through it.

This template illustrates how you can do that (more specifically, how you can retrieve the data of a webhook node).

## How it works
1. Use the 'n8n' node to fetch the data of the failed execution
2. Parse that data to find webhook nodes and extract the data of the one that was executed

## 📊 Basic Information

- **Workflow ID:** 2349
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 2153
- **Downloads:** 215
- **Created:** 2024/7/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2349)

## 👤 Author

- **Name:** David Roberts
- **Username:** @davidn8n

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **errorTrigger** 
- **code** 
- **n8n** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
