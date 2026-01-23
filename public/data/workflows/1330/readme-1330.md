# Demonstrates the use of the $item(index) method

> This workflow demonstrates the use of the `$item(index)` method. This method is useful when you want to reference an item at a particular index.

This example workflow makes POST HTTP requests to a dummy URL.

![workflow-screenshot](fileId:566)

**Set node:** This node is used to set the API key that will be used in the workflow later. This node returns a single item. This node can be replaced with other nodes, based on the use case.

**Customer Datastore node:** This node returns the data of customers that will be sent in the body of the HTTP request. This node returns 5 items. This node can be replaced with other nodes, based on the use case.

**HTTP Request node:** This node uses the information from both the Set node and the Customer Datastore node. Since, the node will run 5 times, once for each item of the Customer Datastore node, you need to reference the API Key 5 times. However, the Set node returns the API Key only once. Using the expression `{{ $item(0).$node["Set"].json["apiKey"] }}` you tell n8n to use the same API Key for all the 5 requests.

## 📊 Basic Information

- **Workflow ID:** 1330
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 1993
- **Downloads:** 199
- **Created:** 2021/11/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1330)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **n8nTrainingCustomerDatastore** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
