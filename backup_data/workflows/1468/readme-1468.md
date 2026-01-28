# Update HubSpot when a new invoice is registered in Stripe

> This workflow automatically posts a message in Slack when a new invoice is uploaded in Stripe, and it updates the fields in the HubSpot CRM.

## Prerequisites

- A Slack account and [credentials](https://docs.n8n.io/integrations/credentials/slack/)
- A HubSpot account and [credentials](https://docs.n8n.io/integrations/credentials/hubspot/)
- A Stripe account and [credentials](https://docs.n8n.io/integrations/credentials/stripe/)

## Nodes

- [Stripe Trigger node](https://docs.n8n.io/integrations/trigger-nodes/n8n-nodes-base.stripetrigger/) triggers the workflow when a new invoice is uploaded.
- [IF nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.if/) filter the invoices that don't have a PO number and if there is no deal for the PO.
- [HubSpot nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.hubspot/) retrieve deals with the specific PO number and update the deal status to 'paid'.
- [Slack nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.slack/) post messages about the deals in a Slack channel.

## 📊 Basic Information

- **Workflow ID:** 1468
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 6253
- **Downloads:** 625
- **Created:** 2022/2/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1468)

## 👤 Author

- **Name:** Jonathan
- **Username:** @jon-n8n

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stripeTrigger** 
- **hubspot** (×2)
- **if** (×2)
- **slack** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
