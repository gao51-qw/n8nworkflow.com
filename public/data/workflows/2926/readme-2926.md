# Import CSV files from filesystem into Postgres

> -- Disclaimer: This template is mainly made for self-hosted users who can reach CSV files in their file system. For Cloud users, just replace the first few nodes with your file system of choice, like Google Drive or Dropbox --

## How to automatically import CSV files into postgres

### 1、project description
This workflow demonstrates how CSV file can be automatically imported into existing PostgreSQL database.
![Import CSV into PostgreSQL.png](fileId:957)

Before running the workflow please make sure you have a file on the server:
```
/tmp/t1.csv
```

The name of the test database is db01, and you can replace it.

then create table t1
```
create table t1(id int,name varchar(10));
```


And the content of the file is the following:
|id|name|
|-|-|-|
|1|a|
|2|b|
|3|c|


### 2、Other
If you want to import a custom csv file, please refer to the following methods.
#### 2.1、Create a table in the database
SQL Commands:
https://www.postgresql.org/docs/current/sql-createtable.html

#### 2.2、Upload csv file 
Upload csv file to N8N server and make sure it can be read.

## 📊 Basic Information

- **Workflow ID:** 2926
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 5589
- **Downloads:** 558
- **Created:** 2025/2/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2926)

## 👤 Author

- **Name:** rpshu
- **Username:** @rpshu1

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **readBinaryFile** 
- **spreadsheetFile** 
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
