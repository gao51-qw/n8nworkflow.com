# Convert PostgreSQL table to CSV

> # Convert PostgreSQL table to CSV
CSV is a super useful and universal way to transfer data between different tools. This workflow gives an example of how to take data from PostgreSQL and convert it easily into a CSV.

## What you need
Before running the workflow, please make sure you have access to a remote PostgreSQL server and have table data:

```
book_title,book_author,read_date
Demons,Fyodor Dostoyevsky,2022-09-08
Ulysses,James Joyce,2022-05-06
Catch-22,Joseph Heller,2023-01-04
The Bell Jar,Sylvia Plath,2023-01-21
Frankenstein,Mary Shelley,2023-02-14
```
## How it works
1. Trigger the workflow on click
2. Declare the name of the Excel file and sheet names
3. Remotely connect to the PostgreSQL database and specify query execution 
4. Write the query data to CSV 

The detailed process is explained further in the tutorial:
[https://blog.n8n.io/postgres-export-to-csv/](https://blog.n8n.io/postgres-export-to-csv/)

## 📊 Basic Information

- **Workflow ID:** 1902
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 3130
- **Downloads:** 313
- **Created:** 2023/3/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1902)

## 👤 Author

- **Name:** Alex Emerich
- **Username:** @alexe

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **spreadsheetFile** 
- **set** 
- **postgres** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
