# Sync products between Airtable and Shopify with inventory management

> ## Create Products in Shopify from Airtable

This workflow creates products in your Shopify store from Airtable. It also enables inventory tracking and sets the quantity of an inventory item at your store's default location. 

This is a great way to keep shopify in sync with Airtable if Airtable is your primary source of data, Only records with the 'sync' column set to true are sync'd. Setup Airtable Automations so that if any records are created or updated then this flag is set to true.

Records are matched using the 'slug' column which Shopify calls a handle.
 
### Airtable Setup Notes

The Airtable products table has the following columns
title - free text
description - free text
company - free text
type - free text
status - ACTIVE, DRAFT or ARCHIVE
slug - used in the product url, text with no spaces, can also use hyphen.
price - sale price of the products
compare_at_price - compare at price for products
sku - unique code for each product
stock_on_hand - quantity of this item available for purchase.
sync - boolean, set to true to sync this record.

### Update GraphQL nodes with your Shopify store URL

1) Replace the URL in all GraphQL nodes with the URL for your Shopify store. 
2) All GraphQL requests all use the Shopify 2025-04 GraphQL Admin API. 

## 📊 Basic Information

- **Workflow ID:** 7468
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 419
- **Downloads:** 41
- **Created:** 2025/8/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7468)

## 👤 Author

- **Name:** Richard Uren
- **Username:** @elricho

## 🏷️ Categories

- CRM
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **graphql** (×8)
- **if** 
- **noOp** 
- **stickyNote** (×2)
- **splitInBatches** 
- **airtable** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
