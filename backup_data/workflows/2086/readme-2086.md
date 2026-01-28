# Retrieve a Monday.com row and all data in a single node

> This workflow is a building block designed to be called from other workflows via an **Execute workflow** node. When called from another workflow, and given the JSON input of a "**pulse**" field with the ID to pull from monday, this workflow will return:

- The items name and ID
- All column data, indexable by the column name
- All column data, indexable by the column's ID string
- All board relation columns, with their data and column values
- All subitems, with their data and column values

For example:
![image.png](fileId:736)

++Prerequisites++
- A monday.com account and credential
- A workflow that needs to get detailed data from a monday.com row
- The pulse id of the monday.com row to retreive data from.

++Setup++
- Import the workflow
- Configure all monday nodes with your credentials and save the workflow
- Copy the workflow ID from it's URL
- In a different workflow, add an **Edit Fields** node, to output the field "**pulse**", with the monday item you want to retrieve.
- Feed the **Edit Fields** node with your pulse into an **Execute workflow** node, and paste the workflow ID from above into it
	- This "pulse" field will tell the workflow what pulse to retreive. This can be populated by an expression in your workflow
	- There is an example of the **Edit Fields** and **Execute Workflow** nodes in the template

## 📊 Basic Information

- **Workflow ID:** 2086
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 3944
- **Downloads:** 394
- **Created:** 2024/2/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2086)

## 👤 Author

- **Name:** Joey D’Anna
- **Username:** @jdana

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **code** (×7)
- **mondayCom** (×3)
- **splitOut** (×2)
- **aggregate** (×2)
- **merge** (×4)
- **executeWorkflowTrigger** 
- **stickyNote** (×5)
- **executeWorkflow** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
