# Synchronize your Google Sheets with Postgres

> Sync your Google Sheets Data with your Postgres database table, requiring minimal adjustments. Follow these steps:

1. **Retrieve Data**: Pull data from Google Sheets and PostgreSQL.
2. **Compare Datasets**: Identify differences, focusing on new or updated entries.
3. **Update PostgreSQL**: Apply changes to ensure both platforms mirror each other.

Automate this process to regularly synchronize data. 

Before starting, grant necessary access to both Google Sheets and PostgreSQL, and specify the data details for synchronization. This streamlined workflow enhances data consistency across platforms.

This example is a one-way synchronization from Google Sheets into your Postgres. With small adjustments, you can make it the other way around, or 2-way.

## 📊 Basic Information

- **Workflow ID:** 2081
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 6725
- **Downloads:** 672
- **Created:** 2024/2/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2081)

## 👤 Author

- **Name:** Bela
- **Username:** @bwiertz

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **scheduleTrigger** 
- **compareDatasets** 
- **splitOut** 
- **googleSheets** 
- **postgres** (×3)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
