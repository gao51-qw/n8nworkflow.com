# Bulk create Shopify products with inventory management from Google Sheets

> ## Create Products in Shopify from a Google Sheet

This workflow creates products in your Shopify store from a google sheet. It also enables inventory tracking and sets the quantity of an inventory item at your store's default location. 

This is a great way to get test data into test or staging stores to try out apps, update templates or try out new designs. 

This Automation will only import new products. It will skip existing products if the slug matches an existing product's handle (Shopify's term for a slug).
 
### Setup Notes

The Google Sheet has the following columns :
title - free text
description - free text
company - free text
category - free text
status - ACTIVE, DRAFT or ARCHIVE
slug - used in the product url, text with no spaces, can also use hyphen.
price - sale price of the products
compare_at_price - compare at price for products
sku - unique code for each product
stock_on_hand - quantity of this item available for purchase.

Use those labels in the first row of your sheet and N8N will create one object per row with the column names as object fields. 

### Update GraphQL nodes with your Shopify store URL

1) Replace the URL in all GraphQL nodes with the URL for your Shopify store. 
2) These GraphQL requests all use the Shopify 2025-04 GraphQL Admin API. 


This flow is updated to use Airtable at [Sync Products between Airtable and Shopify with Inventory Management](https://n8n.io/workflows/7468-sync-products-between-airtable-and-shopify-with-inventory-management/)

## 📊 Basic Information

- **Workflow ID:** 5664
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 3750
- **Downloads:** 375
- **Created:** 2025/7/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5664)

## 👤 Author

- **Name:** Richard Uren
- **Username:** @elricho

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** 
- **graphql** (×5)
- **if** 
- **splitInBatches** 
- **noOp** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
