# Generate and insert data into a Postgres database

> This is Workflow 1 in the blog tutorial [Database activity monitoring and alerting](https://blog.n8n.io/database-monitoring-and-alerting-with-n8n/).

## Prerequisites

- A Postgres database set up and [credentials](https://docs.n8n.io/integrations/credentials/postgres/).
- Basic knowledge of JavaScript and SQL.

## Nodes

- [Cron node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.cron/) starts the workflow every minute.
- [Function node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.function/) generates sensor data (sensor id (preset), a randomly generated value, timestamp, and notification (preset as false) )
- [Postgres node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.postgres/) inserts the data into a Postgres database.
You can create the database for this workflow with the following SQL statement:

```SQL
CREATE TABLE n8n (id SERIAL, sensor_id VARCHAR, value INT, time_stamp TIMESTAMP, notification BOOLEAN);
```


## 📊 Basic Information

- **Workflow ID:** 356
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 6773
- **Downloads:** 677
- **Created:** 2020/5/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/356)

## 👤 Author

- **Name:** tanaypant
- **Username:** @tanay1337

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **cron** 
- **function** 
- **postgres** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
