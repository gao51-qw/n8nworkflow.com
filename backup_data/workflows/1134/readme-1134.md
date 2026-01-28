# Release a new version via Telegram bot command

> This workflow allows you to release a new version via a Telegram bot command. This workflow can be used in your Continous Delivery pipeline.

![workflow-screenshot](fileId:515)

**Telegram Trigger node:** This node will trigger the workflow when a message is sent to the bot. If you want to trigger the workflow via a different messaging platform or a service, replace the Telegram Trigger node with the Trigger node of that service.

**IF node** The IF node checks for the incoming command. If the command is not `deploy`, the IF node will return false, otherwise true.

**Set node:** This node extracts the value of the version from the Telegram message and sets the value. This value is used later in the workflow.

**GitHub node:** This node creates a new version release. It uses the version from the Set node to create the tag.

**NoOp node:** Adding this node is optional.

## 📊 Basic Information

- **Workflow ID:** 1134
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 1954
- **Downloads:** 195
- **Created:** 2021/6/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1134)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **telegramTrigger** 
- **if** 
- **github** 
- **set** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
