# Manage incident reporting in PagerDuty and CrateDB

> This workflow automatically monitors the functionality of a factory. The workflow logs machine data coming from factory sensors in a CrateDB database, generates an incident report in PagerDuty, and notifies the responsible staff members when the temperature of a machine crosses the threshold value.

This workflow builds on a [workflow that generates factory data](https://n8n.io/workflows/608).

Read more about this use case and how to build both workflows with step-by-step instructions in the blog post [*How to automate your factory's incident reporting*](https://n8n.io/blog/learn-to-automate-your-factorys-incident-reporting-a-step-by-step-guide/).

## Prerequisites

- A PagerDuty account and [credentials](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.pagerduty/)
- AMQP, an ActiveMQ  connection, and [credentials](https://docs.n8n.io/integrations/credentials/amqp/)
- A CrateDB instance running locally or on a server, and [credentials](https://docs.n8n.io/integrations/credentials/cratedb/).

## Nodes

- [AMQP Trigger node](https://docs.n8n.io/integrations/trigger-nodes/n8n-nodes-base.amqptrigger/) starts the workflow.
- [IF node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.if/) filters sensor values higher than 50°C.
- [PagerDuty node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.pagerduty/) creates an incident in the account.
- [Set nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) set the required incident information and sensor data, respectively.
- [CrateDB nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.cratedb/) ingest the information data and machine sensor data, respectively.
- [Function node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.function/) converts degrees from Celsius to Fahrenheit.

## 📊 Basic Information

- **Workflow ID:** 609
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1006
- **Downloads:** 100
- **Created:** 2020/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/609)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **if** 
- **amqpTrigger** 
- **set** (×2)
- **crateDb** (×2)
- **pagerDuty** 
- **function** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
