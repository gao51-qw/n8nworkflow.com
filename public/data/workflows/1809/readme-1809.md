# Sync Shopify orders with Zendesk tickets

> This workflow automatically syncs Shopify orders with your Zendesk tickets. Using this workflow, Shopify orders will be added or have their information updated straight to your Zendesk tickets. 

## Prerequisites
- Shopify account and [Shopify credentials](https://docs.n8n.io/integrations/builtin/credentials/shopify/)
- Zendesk account and [Zendesk credentials](https://docs.n8n.io/integrations/builtin/credentials/zendesk/)

## How it works
1. Shopify Trigger starts the workflow whenever an order is updated.
2. Zendesk node finds if the order already exists and has a ticket assigned.
3. Set node keeps and passes only ticket ID.
4. Merge by Key node combines the Shopify order data with the Zendesk ticket data.
5. If node splits the workflow conditionally, checks if the ticket already exists or not.
6. If order is new, Zendesk node creates a new ticket for the order.


## 📊 Basic Information

- **Workflow ID:** 1809
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1402
- **Downloads:** 140
- **Created:** 2022/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1809)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **shopifyTrigger** 
- **if** 
- **noOp** 
- **zendesk** (×2)
- **set** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
