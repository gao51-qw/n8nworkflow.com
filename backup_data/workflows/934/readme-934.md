# Insert and retrieve data from a table in Stackby

> This workflow allows you to insert and retrieve data from a table in Stackby.

![workflow-screenshot](fileId:410)

**Set node:** The Set node is used to set the values for the name and id fields for a new record. You might want to add data from an external source, for example an API or a CRM. Based on your use-case, add the respective node before the Set node and configure your Set node accordingly.

**Stackby node:** This node appends data from the previous node to a table in Stackby. Based on the values you want add to your table, enter the column names in the ***Column*** field.

**Stackby1 node:** This node fetches all the data that is stored in the table in Stackby.

## 📊 Basic Information

- **Workflow ID:** 934
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 586
- **Downloads:** 58
- **Created:** 2021/2/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/934)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **stackby** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
