# Send n8n automation errors to a Monday.com board

> This template is an error handler that will log n8n workflow errors to a Monday.com board for troubleshooting and tracking.

Prerequisites
- Monday account and Monday credential
- Create a board on Monday for error logging, with the following columns and types:
	- Timestamp (text)
	- Error Message (text)
	- Stack Trace (long text)
- Determine the column IDs using Monday's [instructions](https://support.monday.com/hc/en-us/articles/360000225709-Board-item-column-and-automation-or-integration-ID-s) 

Setup
- Edit the Monday nodes to use your credential
- Edit the node labeled **CREATE ERROR ITEM** to point to your error log board and group name
- Edit the column IDs in the "Column Values" field of the **UPDATE** node to match the IDs of the fields on your error log board
- To trigger error logging, select this automation as the error workflow on any automation
	- For more detailed logging, add **Stop and Error** nodes in your workflow to send specific error messages to your board.


## 📊 Basic Information

- **Workflow ID:** 2074
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 1642
- **Downloads:** 164
- **Created:** 2024/1/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2074)

## 👤 Author

- **Name:** Joey D’Anna
- **Username:** @jdana

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **mondayCom** (×2)
- **dateTime** 
- **errorTrigger** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
