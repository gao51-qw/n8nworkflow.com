# Receive transfer updates from Wise and add to Airtable

> This workflow allows you to receive updates from Wise and add information of a transfer to a base in Airtable.

![workflow-screenshot](fileId:452)


**Wise Trigger node:** This node will trigger the workflow when the status of your transfer changes.

**Wise node:** This node will get the information about the transfer.

**Set node:** We use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow. We set the value of `Transfer ID`, `Date`, `Reference`, and `Amount` in this node.

**Airtable node:** This node will append the data that we set in the previous node to a table.

## 📊 Basic Information

- **Workflow ID:** 993
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 1142
- **Downloads:** 114
- **Created:** 2021/3/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/993)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **wiseTrigger** 
- **wise** 
- **set** 
- **airtable** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
