# One-way sync Shopify customers to Baserow using GraphQL

> This template extracts all customers from shopify using GraphQL and the shopify admin API and sync them into a Baserow table. 

Setup Notes
- Update the Endpoint in GraphQL node to reflect your Shopify store.
- In Baserow create a shopify database with a customer table in Baserow.
- Create columns in the Baserow customer table for first_name, last_name, and email.
- It takes about 1 second per row to insert.

## 📊 Basic Information

- **Workflow ID:** 5803
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 98
- **Downloads:** 9
- **Created:** 2025/7/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5803)

## 👤 Author

- **Name:** Richard Uren
- **Username:** @elricho

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** 
- **if** 
- **graphql** 
- **baserow** 
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
