# Get all orders in Shopify to Google Sheets

> This workflow retrieves all Shopify Orders and saves them into a Google Sheets spreadsheet using the [Shopify Admin REST API](https://shopify.dev/docs/api/admin-rest/2025-01/resources/order#get-orders?status=any). It uses [pagination](https://shopify.dev/docs/api/admin-rest/usage/pagination) to ensure all orders are collected efficiently.

I originally built this workflow for my own use and found it valuable for understanding how Shopify pagination works. Now, I’m sharing it to help others automate their order retrieval process.

## How It Works
Instead of relying on the built-in Shopify node (**Get Orders Many**), this workflow leverages the HTTP Request node to fetch paginated chunks manually.

- Shopify uses cursor-based pagination (**page_info**) instead of traditional page numbers.
- Pagination data is stored in the response headers, so we need to enable `Include Response Headers and Status` in the HTTP Request node.
- You can modify the limit parameter to control batch sizes and optimize for rate limits.
- This workflow can be run on demand or scheduled to keep your data up to date.

## Parameters
You can adjust these parameters in the HTTP Request node:

- limit – The number of orders per request (default: 50, max: 250).
- fields – Comma-separated list of fields to retrieve.
- page_info – Used for pagination; only limit and fields are allowed when paginating.

📌 Note: when you query the paginated chunks with `page_info`, only the limit and fields parameters are allowed

## Credentials
- Shopify API Key – Required for authentication.
- Google Sheets API credentials – Needed to insert data into the spreadsheet.
💾 [Clone the Google Sheets template here](https://docs.google.com/spreadsheets/d/1KRl6aCCU2SE3Z6vB2EbTnSwSUAre0BLf9Wu6fyPlrIE/edit?gid=0#gid=0)

## Who Is This For?
- Shopify store owners who need to export all orders to Google Sheets.
- Users who want full control over API parameters for optimized queries.
- Anyone looking for a flexible and scalable Shopify data extraction solution.

---
Explore More Templates
👉 [Check out my other n8n templates](https://n8n.io/creators/bangank36/)



## 📊 Basic Information

- **Workflow ID:** 3218
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1513
- **Downloads:** 151
- **Created:** 2025/3/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3218)

## 👤 Author

- **Name:** bangank36
- **Username:** @bangank36

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **code** (×2)
- **splitOut** 
- **googleSheets** 
- **stickyNote** (×2)
- **scheduleTrigger** 
- **set** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
