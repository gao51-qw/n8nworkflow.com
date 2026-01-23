# Update time-tracking projects based on Syncro status changes

> This workflow is part of an MSP collection, which is publicly available on [GitHub](https://github.com/bionemesis/n8nsyncro).

This workflow archives or unarchives a Clockify projects, depending on a Syncro status. Note that Syncro should be setup with a webhook via 'Notification Set for Ticket - Status was changed'. It doesn't handle merging of tickets, as Syncro doesn't support a 'Notification Set' for merged tickets, so you should change a ticket to 'Resolved' first before merging it.

## Prerequisites

- A Clockify account and [credentials](https://docs.n8n.io/integrations/credentials/clockify/)

## Nodes

- [Webhook node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.webhook/) triggers the workflow.
- [IF node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.if/) filters projects that don't have the status 'Resolved'.
- [Clockify nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.clockify/) get all projects that (don't) have the status 'Resolved', based on the IF route.
- [HTTP Request nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.httprequest/) unarchives unresolved projects, and archives resolved projects, respectively.

## 📊 Basic Information

- **Workflow ID:** 1492
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1160
- **Downloads:** 116
- **Created:** 2022/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1492)

## 👤 Author

- **Name:** Jonathan
- **Username:** @jon-n8n

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **webhook** 
- **clockify** (×2)
- **httpRequest** (×2)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
