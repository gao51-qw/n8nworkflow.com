# Low stock & sold out watcher for Shopify

> This n8n workflow automates the process of monitoring inventory levels for Shopify products, ensuring timely updates and efficient stock management. It is designed to alert users when inventory levels are low or out of stock, integrating with Shopify's webhook system and providing notifications through Discord (can be changed to any messaging platform) with product images and details.

## Workflow Overview

Webhook Node (Shopify Listener): This node is set up to listen for Shopify's inventory level webhook. It triggers the workflow whenever there is an update in the inventory levels. The webhook is configured in Shopify settings, where the n8n URL is specified to receive inventory level updates.

Function Node (Inventory Check): This node processes the data received from the Shopify webhook. It extracts the available inventory and the inventory item ID, and determines whether the inventory is low (less than 4 items) or out of stock.

Condition Nodes (Inventory Level Check): Two condition nodes follow the function node. One checks if the inventory is low (low_inventory equals true), and the other checks if the inventory is out of stock (out_of_stock equals true).

GraphQL Node (Product Details Retrieval): Connected to the condition nodes, this node fetches detailed information about the product using Shopify's GraphQL API. It retrieves the product variant, title, current inventory quantity, and the first product image.

HTTP Node (Discord Notification): The final node in the workflow sends a notification to Discord. It includes an embed with the product title, a warning message ("This product is running out of stock!"), the remaining inventory quantity, product variant details, and the product image. The notification ensures that relevant stakeholders are immediately informed about critical inventory levels.

## 📊 Basic Information

- **Workflow ID:** 2027
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 2340
- **Downloads:** 234
- **Created:** 2023/12/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2027)

## 👤 Author

- **Name:** siyad
- **Username:** @salsiy

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **webhook** 
- **code** 
- **if** (×2)
- **httpRequest** (×2)
- **graphql** (×2)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
