# Convert SQL table into Excel spreadsheet

> This workflow demonstrates how easy it is to export SQL query to Excel automatically!

![n8ncanvassmall.png](fileId:700)

Before running the workflow please make sure you have access to a remote SQL server (MS SQL, MySQL, PostgreSQL etc.) with a sample table:

```
Date,Band,ConcertName,Country,City,Location,LocationAddress,
2023-05-28,Ozzy Osbourne,No More Tours 2 - Special Guest: Judas Priest,Germany,Berlin,Mercedes-Benz Arena Berlin,"Mercedes-Platz 1, 10243 Berlin-Friedrichshain",
2023-05-08,Elton John,Farewell Yellow Brick Road Tour 2023,Germany,Berlin,Mercedes-Benz Arena Berlin,"Mercedes-Platz 1, 10243 Berlin-Friedrichshain",
2023-05-26,Hans Zimmer Live,Europe Tour 2023,Germany,Berlin,Mercedes-Benz Arena Berlin,"Mercedes-Platz 1, 10243 Berlin-Friedrichshain",
2023-07-07,Depeche Mode,Memento Mori World Tour 2023,Germany,Berlin,Olympiastadion Berlin,"Olympischer Platz 3, 14053 Berlin-Charlottenburg",

```

**The detailed process is explained in the tutorial**
[https://blog.n8n.io/export-sql-to-excel](https://blog.n8n.io/export-sql-to-excel)

## 📊 Basic Information

- **Workflow ID:** 1872
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 5751
- **Downloads:** 575
- **Created:** 2023/1/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1872)

## 👤 Author

- **Name:** Eduard
- **Username:** @eduard

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **mySql** 
- **spreadsheetFile** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
