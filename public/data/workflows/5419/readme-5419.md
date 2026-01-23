# Process multiple files with forms: a tutorial on binary data and loops

> Let a user load multiple files with a Form node, and process the binary data. A very important workflow for many tools. 

This is a learning example of several core concepts that are hard to grasp in n8n:
- $binary data
- Loop and $runIndex
- Split Out

The Save File deomonstrates how to access the binary data correctly, but could be swapped to POST the files to an AI, for example.


## 📊 Basic Information

- **Workflow ID:** 5419
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 4627
- **Downloads:** 462
- **Created:** 2025/6/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5419)

## 👤 Author

- **Name:** Wyeth
- **Username:** @wyeth

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **splitInBatches** 
- **readWriteFile** 
- **splitOut** 
- **formTrigger** 
- **stickyNote** (×5)
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
