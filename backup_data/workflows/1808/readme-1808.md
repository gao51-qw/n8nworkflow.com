# Sync Shopify orders with your Zendesk contacts

> This workflow automatically syncs Shopify orders with your Zendesk contacts. Using this workflow, the Shopify email ID, phone number ID and order information will be added or updated to Zendesk contacts. 

## Prerequisites
- Shopify account and [Shopify credentials](https://docs.n8n.io/integrations/builtin/credentials/shopify/)
- Zendesk account and [Zendesk credentials](https://docs.n8n.io/integrations/builtin/credentials/zendesk/) 

## How it works
1. Shopify Trigger starts the workflow whenever a customer`s data is updated.
2. Zendesk Node then searches the contact by email address.
3. Set node keeps only the UserId and email of the contact.
4. Merge by Key node combines the Shopify and Zendesk data.
5. If node splits the workflow conditionally, check if the contact already exists or not.
6. If the user exists, Zendesk node updates its contact data.
7. If the user does not exist, Zendesk node creates a new contact.

## 📊 Basic Information

- **Workflow ID:** 1808
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1073
- **Downloads:** 107
- **Created:** 2022/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1808)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **set** 
- **if** (×2)
- **merge** 
- **shopifyTrigger** 
- **noOp** 
- **zendesk** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
