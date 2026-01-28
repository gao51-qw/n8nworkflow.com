# Sync Google Sheets data with MySQL

> This workflow performs several data integration and synchronization tasks between Google Sheets and a MySQL database.

Here is a step-by-step description of what this workflow does:

1. Manual Trigger: The workflow starts when the user clicks "Execute Workflow."
2. Schedule Trigger: This node schedules the workflow to run at specific intervals on weekdays (Monday to Friday) between 6 AM and 10 PM. It ensures regular data synchronization.
3. Google Sheet Data: This node connects to a specific Google Sheets document and retrieves data from the "Form Responses 1" sheet, filtering by the "DB Status" column.
4. SQL Get inquiries from Google: This node retrieves data from a MySQL database table named "ConcertInquiries" where the "source_name" is "GoogleForm."
5. Rename GSheet variables: This node renames the columns retrieved from Google Sheets and transforms the data into a format suitable for MySQL, assigning a value for "source_name" as "GoogleForm."
6. Compare Datasets: This node compares the data retrieved from Google Sheets and the MySQL database based on timestamp and source_name fields. It identifies changes and updates.
7. No reply too long?: This node checks if there has been no reply within the last four hours, using the "timestamp" field from the Google Sheets data.
8. DB Status assigned?: This node checks if the "DB Status" field is not empty in the compared dataset.
9. Update GSheet status: If conditions are met in the previous nodes, this node updates the "DB Status" field in Google Sheets with the corresponding value from the MySQL dataset.
10. DB Status in sync?: This node checks if the "source_name" field in Google Sheets is not empty.
11. Sync MySQL data: If conditions are met in the previous nodes, this node updates the "source_name" field in the MySQL database to "GoogleFormSync."
12. Send Notifications: If conditions are met in the "No reply too long?" node, this node sends notifications or performs actions as needed.
13. Sticky Notes: These nodes provide additional information and documentation links for users.

## 📊 Basic Information

- **Workflow ID:** 1964
- **Complexity:** beginner
- **Node Count:** 0
- **Views:** 9154
- **Downloads:** 915
- **Created:** 2023/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1964)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **compareDatasets** 
- **noOp** 
- **scheduleTrigger** 
- **googleSheets** (×2)
- **mySql** (×3)
- **set** 
- **if** (×3)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
