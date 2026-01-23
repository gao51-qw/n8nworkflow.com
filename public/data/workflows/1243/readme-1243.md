# Avoid rate limiting by batching HTTP requests

> This workflow demonstrates the use of the Split In Batches node and the Wait node to avoid API rate limits.

**Customer Datastore node:** The workflow fetches data from the Customer Datastore node. Based on your use case, replace it with a relevant node.

**Split In Batches node:** This node splits the items into a single item. Based on the API limit, you can configure the Batch Size.

**HTTP Request node:** This node makes API calls to a placeholder URL. If the Split In Batches node returns 5 items, the HTTP Request node will make 5 different API calls.

**Wait node:** This node will pause the workflow for the time you specify. On resume, the Split In Batches node gets executed node, and the next batch is processed.

**Replace Me (NoOp node):** This node is optional. If you want to continue your workflow and process the items, replace this node with the corresponding node(s).

## 📊 Basic Information

- **Workflow ID:** 1243
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 4438
- **Downloads:** 443
- **Created:** 2021/9/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1243)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **n8nTrainingCustomerDatastore** 
- **splitInBatches** 
- **httpRequest** 
- **wait** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
