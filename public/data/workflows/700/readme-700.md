# Purge n8n execution history located in Mysql

> This workflow is useful if you have lots of tasks running daily.

MySQL node (or the database used to save data shown in n8n - could be Mongo, Postgres, ... -) remove old entries from execution_entity table that contains the history of the executed workflows.

![workflow-screenshot](fileId:267)

If you have multiple tasks executed every minute, 1024 rows will be created every day (60 minutes x 24 hours) per every task. This will increase the table size fastly.

SQL query deletes entries older than 30 days taking stoppedAt column as a reference for date calculations.

![image.png](fileId:265)

You only have to setup Mysql connection properly and config cron to execute once per day in a low traffic hour, this way

![image.png](fileId:266)

## 📊 Basic Information

- **Workflow ID:** 700
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 2378
- **Downloads:** 237
- **Created:** 2020/10/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/700)

## 👤 Author

- **Name:** Miquel Colomer
- **Username:** @mcolomer

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **mySql** 
- **cron** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
