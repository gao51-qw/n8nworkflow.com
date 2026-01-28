This is Workflow 1 in the blog tutorial [Database activity monitoring and alerting](https://blog.n8n.io/database-monitoring-and-alerting-with-n8n/).

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
