# Import CSV into MySQL

> This workflow demonstrates how CSV file can be automatically imported into existing MySQL database.

![_25n8nworkflow.png](fileId:689)

Before running the workflow please make sure you have a file on the server:
```
/home/node/.n8n/concerts-2023.csv
```


And the content of the file is the following:

```
Date,Band,ConcertName,Country,City,Location,LocationAddress,
2023-05-28,Ozzy Osbourne,No More Tours 2 - Special Guest: Judas Priest,Germany,Berlin,Mercedes-Benz Arena Berlin,"Mercedes-Platz 1, 10243 Berlin-Friedrichshain",
2023-05-08,Elton John,Farewell Yellow Brick Road Tour 2023,Germany,Berlin,Mercedes-Benz Arena Berlin,"Mercedes-Platz 1, 10243 Berlin-Friedrichshain",
2023-05-26,Hans Zimmer Live,Europe Tour 2023,Germany,Berlin,Mercedes-Benz Arena Berlin,"Mercedes-Platz 1, 10243 Berlin-Friedrichshain",
2023-07-07,Depeche Mode,Memento Mori World Tour 2023,Germany,Berlin,Olympiastadion Berlin,"Olympischer Platz 3, 14053 Berlin-Charlottenburg",

```

**The detailed process is explained in the tutorial**
[https://blog.n8n.io/import-csv-into-mysql](https://blog.n8n.io/import-csv-into-mysql)


## 📊 Basic Information

- **Workflow ID:** 1839
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 15287
- **Downloads:** 1528
- **Created:** 2022/12/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1839)

## 👤 Author

- **Name:** Eduard
- **Username:** @eduard

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **readBinaryFile** 
- **spreadsheetFile** 
- **mySql** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
