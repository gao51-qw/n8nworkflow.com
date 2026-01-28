# Send a message via a Lark Bot

> ## What this workflow does
This workflow in n8n demonstrates how to send a message in Lark using a Lark bot. It begins with a manual trigger and then retrieves the necessary Lark token via a POST request. The token is used to authenticate and send a message to a specific chat using the Lark API. The input node provides the required ***app_id***, ***app_secret***, ***chat_id***, and ***message content***. After obtaining the token, the message is sent with the Lark API's message/v4/send/ endpoint.

## Who This Is For
This n8n workflow is ideal for **organizations**, **teams**, and **developers** who need to automate message sending within Lark, especially those managing notifications, alerts, or team reminders. It can help users reduce manual messaging tasks by leveraging a Lark bot to deliver messages at specific intervals or based on particular conditions, enhancing team communication and responsiveness.

## Setup
1. Fill the `Input` node with your values
2. Exchange the bearer token in the `Send Message` node with your token

**Author: Hiroshi**

## 📊 Basic Information

- **Workflow ID:** 2478
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 3977
- **Downloads:** 397
- **Created:** 2024/10/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2478)

## 👤 Author

- **Name:** Hiroshi
- **Username:** @hiroshi

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **set** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
