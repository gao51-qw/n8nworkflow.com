This workflow generates sensor data, which is used in another [workflow for managing factory incident reports](https://n8n.io/workflows/609).

Read more about this use case and how to build both workflows with step-by-step instructions in the blog post [*How to automate your factory’s incident reporting*](https://n8n.io/blog/learn-to-automate-your-factorys-incident-reporting-a-step-by-step-guide/).

## Prerequisites

- AMQP, an ActiveMQ  connection, and [credentials](https://docs.n8n.io/integrations/credentials/amqp/)

## Nodes

- [Interval node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.interval/) triggers the workflow every second.
- [Set node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) set the necessary values for the items that are addeed to the queue.
- [AMQP Sender node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.amqp/) sends a raw message to add to the queue.