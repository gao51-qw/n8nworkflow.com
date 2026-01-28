# Count the items returned by a node

> This workflow provides a simple approach to counting the items returned by a node.

It uses a Set node with the Execute Once option:

![image.png](fileId:704)

The expression uses `$input.all()` (documented [here](https://docs.n8n.io/code-examples/methods-variables-reference/)) to fetch all incoming items at once, and `.length` (documented for example [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)) to count them.

## 📊 Basic Information

- **Workflow ID:** 1913
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 3745
- **Downloads:** 374
- **Created:** 2023/4/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1913)

## 👤 Author

- **Name:** Tom
- **Username:** @mutedjam

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **n8nTrainingCustomerDatastore** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
