# Send SMS alerts based on database queries (Twilio and Postgres)

> This workflow automatically queries a Postgres database to find outlier readings for which SMS notifications have not been sent.
This is Workflow 2 in the blog tutorial [Database activity monitoring and alerting](https://blog.n8n.io/database-monitoring-and-alerting-with-n8n/).

## Prerequisites

- A Postgres database set up and [credentials](https://docs.n8n.io/integrations/credentials/postgres/)
- A Twilio account and [credentials](https://docs.n8n.io/integrations/credentials/twilio/)

## Nodes

- [Cron node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.cron/) triggers the workflow every minute, so the database is queried at regular intervals.
- [Postgres nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.postgres/) extract values from, and update values in the database.
- [Twilio node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.twilio/) sends an alert SMS about the outlier reading to a specified phone number.
- [Set node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) sets the notification value to *true*.

## 📊 Basic Information

- **Workflow ID:** 357
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 3342
- **Downloads:** 334
- **Created:** 2020/5/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/357)

## 👤 Author

- **Name:** tanaypant
- **Username:** @tanay1337

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **cron** 
- **postgres** (×2)
- **twilio** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
