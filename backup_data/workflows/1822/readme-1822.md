# Two way sync Pipedrive and MySQL

> This workflow automates a two way sync of customer data between Pipedrive and MySQL. It will create new records in one source if it only exists in the other. Where matching records have different data for name, phone number or email address, it will sync the most recently updated version.

## 📊 Basic Information

- **Workflow ID:** 1822
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 14338
- **Downloads:** 1433
- **Created:** 2022/11/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1822)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **compareDatasets** 
- **scheduleTrigger** 
- **mySql** (×3)
- **pipedrive** (×3)
- **dateTime** 
- **set** (×3)
- **if** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
