# Import CSV from URL to Google Sheets

> This workflow automatically imports data from a CSV file located at a specific URL and then updates the Google Sheets document with the provided data.

Below is a step-by-step description of what this workflow does:
1. The workflow is started manually using the "When you click 'Execute Workflow'" node.
2. The CSV file is then uploaded from the specified URL "https://opendata.ecdc.europa.eu/covid19/testing/csv/data.csv" using the "Upload CSV" node.
3. The "Import CSV" node accepts the uploaded CSV file and converts it into JSON formatted data.
4. The "Add Unique Field" node generates a unique key by combining the 'country_code' and 'year_week' fields from the JSON data, which will be further used in the Google Sheets document.
5. The 'Keep only DACH in 2023' node filters the data to keep only records where 'country_code' is either 'DE', 'AT', or 'CH' and 'year_week' starts with '2023'. Google's API has limitations on the speed of read and write operations, so only a subset of the data is taken.
6. The filtered data is loaded into the specified Google Sheets document via the 'Load to Spreadsheet' node. The operation is set to 'appendOrUpdate' and the document ID and sheet name are specified. Also, the previously generated 'unique_key' key is set as the key to match the columns.

## 📊 Basic Information

- **Workflow ID:** 1969
- **Complexity:** beginner
- **Node Count:** 0
- **Views:** 5718
- **Downloads:** 571
- **Created:** 2023/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1969)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** 
- **set** 
- **spreadsheetFile** 
- **httpRequest** 
- **filter** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
