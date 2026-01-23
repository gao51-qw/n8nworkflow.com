# Low-code API for Flutterflow apps

> - Flow Start: The flow starts upon receiving an HTTP GET call.
- Webhook: Receives the HTTP GET call and triggers the flow.
- Database: Connects to the database (Customer Datastore) to retrieve all necessary information (getAllPeople).
- Data Processing:
- Variable Insertion: The retrieved data is inserted into a variable.
- Variable Aggregation: The variables are aggregated and prepared for use in FlutterFlow.
- Webhook Response: Sends the response back through the Webhook with the processed data ready for use in FlutterFlow.

## 📊 Basic Information

- **Workflow ID:** 2274
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 4036
- **Downloads:** 403
- **Created:** 2024/5/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2274)

## 👤 Author

- **Name:** Matheus Weckwerth
- **Username:** @matheusweck

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **n8nTrainingCustomerDatastore** 
- **set** 
- **aggregate** 
- **stickyNote** (×4)
- **webhook** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
