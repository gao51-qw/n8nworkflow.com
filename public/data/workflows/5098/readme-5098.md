# Fetch All Shopify Orders (Handles 250-Limit Loop)

> ## Who Is This For?  
E-commerce managers, data analysts, and n8n beginners who need a hands-off way to pull **all** Shopify orders—even stores with thousands of orders—into Google Sheets for reporting or BI.

## What Problem Does It Solve?  
Shopify’s GraphQL API only returns up to 250 orders per call, forcing you to manually manage cursors and loops. This template handles the “get next 250” logic for you, so you never miss an order.

## What This Workflow Does  
1. **Schedule Trigger** – Runs at your chosen cadence (daily, hourly, or manual).  
2. **Set Date Range** – Defines `startDay` and `endDay` based on `$now`.  
3. **GraphQL Loop** – Fetches orders 250 at a time, using `pageInfo.hasNextPage` and `endCursor` until complete.  
4. **Code Node** – Flattens orders into line-item rows and summarizes by SKU/vendor.  
5. **Google Sheets** – Appends results to your sheet for easy analysis.


## 📊 Basic Information

- **Workflow ID:** 5098
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 783
- **Downloads:** 78
- **Created:** 2025/6/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5098)

## 👤 Author

- **Name:** Strategiflows
- **Username:** @strategiflows

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **set** 
- **graphql** 
- **if** 
- **code** 
- **googleSheets** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
