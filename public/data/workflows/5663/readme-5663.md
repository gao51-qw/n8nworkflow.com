# Paginate Shopify products with GraphQL cursor-based navigation

> ## Shopify GraphQL cursor loop

Many Shopify GraphQL queries have the ability to return a cursor which you can loop over, however the N8N GraphQL node does not natively have the ability to fetch pages.  

This simple 3 node workflow displays how to setup a cursor to fetch all items in a collection. 

Note : The pageSize in the "Shopify, products" node is set to 5 to illustrate how querying by cursor works. In production set this to a much larger value. 

Also, Update the Endpoint in GraphQL node to reflect your Shopify store.

## 📊 Basic Information

- **Workflow ID:** 5663
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 486
- **Downloads:** 48
- **Created:** 2025/7/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5663)

## 👤 Author

- **Name:** Richard Uren
- **Username:** @elricho

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **graphql** 
- **if** 
- **stickyNote** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
