# Forward email & LinkedIn message notifications from Reply.io to Telegram

> ## How this works:

This workflow contains a webhook that receives updates from Reply.io when one of your connections sends you a message via either Email or LinkedIn.
The workflow also includes utility nodes to create the necessary webhook subscriptions.

## Setup steps:

1. Configure the body of the utility nodes to create subscriptions for the correct URL — retrieve it from the "Webhook" node in the workflow (use the production URL)

2. Obtain your Reply.io API key. Documentation: https://apidocs.reply.io/

3. Create a Telegram bot

4. Set your Reply.io API key in the HTTP nodes using Header Authentication

5. Enter your Telegram credentials in the Telegram node

6. Activate the workflow

## 📊 Basic Information

- **Workflow ID:** 7297
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 222
- **Downloads:** 22
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7297)

## 👤 Author

- **Name:** Gregory
- **Username:** @gregory

## 🏷️ Categories

- CRM
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×4)
- **stickyNote** (×4)
- **webhook** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
