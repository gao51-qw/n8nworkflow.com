# Weekly n8n executions failures report to Telegram

> # How it works
- Weekly triggered
- Fetches all previous executions of a given workflow
- Filter for failures and aggregate them into a single report
- Sends them to a given Telegram chat.

# Set up steps
- Create a new N8N api token in the settings panel.
- Add new N8N credentials in the credentials panel.
- Add new Telegram credentials in the credentials panel.
- Select N8N credentials and select the workflow ID in the "Get all previous executions" node.
- Select Telegram credentials and enter the chat-id in the "Telegram" node.


## 📊 Basic Information

- **Workflow ID:** 2177
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1450
- **Downloads:** 145
- **Created:** 2024/3/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2177)

## 👤 Author

- **Name:** Manu
- **Username:** @manu-n8n

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **telegram** 
- **scheduleTrigger** 
- **stickyNote** (×4)
- **filter** 
- **n8n** 
- **set** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
