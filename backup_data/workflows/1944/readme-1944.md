# Compare SQL datasets

> This workflow compares 2 datasets from a single database.

Two SQL nodes create a slightly different summary report based on the payments table.

Both reports have the same structure, but different time periods. In addition to that, output from the "Orders from 2004 and 2005" node has an extra manipulation on the ordercount variable.

This makes Compare Datasets node to produce four outputs: data in A Only Branch, in B Only Branch, Same Branch records and Different Branch records.

Please refere to the MySQL Tutorial website and download the example database: https://www.mysqltutorial.org/mysql-sample-database.aspx

## 📊 Basic Information

- **Workflow ID:** 1944
- **Complexity:** beginner
- **Node Count:** 0
- **Views:** 2935
- **Downloads:** 293
- **Created:** 2023/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1944)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **compareDatasets** 
- **mySql** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
