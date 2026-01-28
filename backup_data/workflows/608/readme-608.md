# Generate and queue factory sensor data in AMQP

> This workflow generates sensor data, which is used in another [workflow for managing factory incident reports](https://n8n.io/workflows/609).

Read more about this use case and how to build both workflows with step-by-step instructions in the blog post [*How to automate your factory’s incident reporting*](https://n8n.io/blog/learn-to-automate-your-factorys-incident-reporting-a-step-by-step-guide/).

## Prerequisites

- AMQP, an ActiveMQ  connection, and [credentials](https://docs.n8n.io/integrations/credentials/amqp/)

## Nodes

- [Interval node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.interval/) triggers the workflow every second.
- [Set node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) set the necessary values for the items that are addeed to the queue.
- [AMQP Sender node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.amqp/) sends a raw message to add to the queue.

## 📊 Basic Information

- **Workflow ID:** 608
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 639
- **Downloads:** 63
- **Created:** 2020/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/608)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **set** 
- **interval** 
- **amqp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
