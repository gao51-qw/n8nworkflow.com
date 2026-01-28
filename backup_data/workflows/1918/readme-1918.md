# Load data into Snowflake

> This workflow automatically downloads a CSV from the web, and parses it in a format that n8n can access. It then ensures that the data from the CSV is matched to the names of the columns in the database, and inserts this data as new rows in Snowflake.

Prerequisites:
- A CSV with data
- A Snowflake account and credentials
- A Snowflake database to upload your CSV to

Nodes:
- A HTTP Request node to download the CSV file
- A Spreadsheet File node to access the data from the CSV
- A Set node to ensure the data from the CSV is mapped to the column names of the Snowflake database
- A Snowflake node to insert these new rows into the database. 

## 📊 Basic Information

- **Workflow ID:** 1918
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 2656
- **Downloads:** 265
- **Created:** 2023/5/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1918)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **spreadsheetFile** 
- **set** 
- **snowflake** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
