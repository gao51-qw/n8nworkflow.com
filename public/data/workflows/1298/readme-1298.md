# Get top 5 products on Product Hunt every hour

> This workflow gets the top 5 products from Product Hunt and shares them on the Discord server.

![workflow-screenshot](fileId:556)

**Cron node:** This node triggers the workflow every hour. Based on your use case, you can update the node to trigger the workflow at a different time.

**GraphQL node:** This node makes the API call to the [Product Hunt GraphQL API](https://api.producthunt.com/v2/docs). You will need an API token from Product Hunt to make the call.

**Item Lists node:** This node transforms the single item returned by the previous node into multiple items.

**Set node:** The Set node is used to return only the name, description, and votes of the product.

**Discord node:** This node is used to send the top 5 products to the Discord server.

## 📊 Basic Information

- **Workflow ID:** 1298
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 5201
- **Downloads:** 520
- **Created:** 2021/11/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1298)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **cron** 
- **set** 
- **graphql** 
- **itemLists** 
- **discord** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
