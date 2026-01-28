# Check To Do on Notion and send message on Slack

> This workflow allows you to check the To-Do list on Notion and send a message on Slack.

## Prerequisites
1. Create a Notion page similar to this [page](https://www.notion.so/n8n/To-Do-520ca3bdb6084098a4a80cfddd957488).
2. Create credentials for Notion by following the instructions mentioned in the [documentation](https://docs.n8n.io/credentials/notion/).
3. Follow the steps mentioned in the [documentation](https://docs.n8n.io/credentials/slack/) to create credentials for Slack.

**Cron node:** This node triggers the workflow every day.

**Notion node:** This node fetches all the tasks from Notion.

**IF node:** This node checks if the task is assigned to a particular user.

**Create a Direct Message:** This node will create a direct message channel with the user.

**Send a Direct Message:** This node will send the to-do lists in the direct message.

**NoOp:** This node is connected to the `false` output of the IF node. If the condition is false, no further action will be taken.

## 📊 Basic Information

- **Workflow ID:** 1105
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 3313
- **Downloads:** 331
- **Created:** 2021/5/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1105)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **cron** 
- **noOp** 
- **notion** 
- **if** 
- **slack** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
