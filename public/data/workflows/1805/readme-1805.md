# Sync Shopify customers to your HubSpot contacts

> This workflow syncs Shopify customers to your HubSpot account as contacts. Whenever somebody makes a purchase on Shopify, it automatically adds them as a new customer to your Hubspot account if the customer doesn’t exist yet.

Also, this workflow creates or updates contacts from new paid orders on Shopify by adding the amount and order close date of the deal.

## Prerequisites
- Shopify account and [Shopify credentials](https://docs.n8n.io/integrations/builtin/credentials/shopify/)
- HubSpot account and [HubSpot credentials](https://docs.n8n.io/integrations/builtin/credentials/hubspot/)

## How it works
1. Shopify trigger starts the workflow whenever an order is updated.
2. HubSpot node creates or updates the contact who made the order update.
3. Set node sorts and passes only the userid.
4. Merge node merges data of both inputs, the order and the customer.
5. Hubspot node looks up if the order already exists.
6. If node splits the workflow conditionally, based on data received.
7. If the order is new, the new deal is created in the Hubspot node.


## 📊 Basic Information

- **Workflow ID:** 1805
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1151
- **Downloads:** 115
- **Created:** 2022/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1805)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **shopifyTrigger** 
- **set** 
- **if** 
- **noOp** 
- **hubspot** (×3)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
