# Import multiple CSV to Google Sheets

> This workflow imports multiple CSV files and appends or updates them to a Google Sheets document.

Here's a step-by-step breakdown:
1. When clicked "Execute Workflow", the process starts.
2. The "Read Binary Files" node reads all the '.csv' files from the specified directory.
3. The files are then split into batches (one file in a batch) by the "Split In Batches" node.
4. For each file, the "Read CSV" node reads the data from the CSV file.
5. The "Assign source file name" node assigns the source file name to the data.
6. The data is then processed by the "Remove duplicates" node. This removes any duplicate entries based on the 'user_name' field.
7. The "Keep only subscribers" node filters the data to keep only those entries where the 'subscribed' field is set to 'TRUE'.
8. The data is then sorted by the 'date_subscribed' field using the "Sort by date" node.
9. Finally, the processed data is appended or updated to a specified Google Sheets document using the "Upload to spreadsheet" node. It checks for the 'user_name' field, if the data corresponding to that 'user_name' already exists, it updates the data, otherwise appends the new data.

## 📊 Basic Information

- **Workflow ID:** 1968
- **Complexity:** beginner
- **Node Count:** 0
- **Views:** 6060
- **Downloads:** 606
- **Created:** 2023/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1968)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **readBinaryFiles** 
- **splitInBatches** 
- **spreadsheetFile** 
- **itemLists** (×2)
- **filter** 
- **googleSheets** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
