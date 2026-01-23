# Receive a Mattermost message when new record gets added to Notion

> This workflow allows you to receive a Mattermost message when meeting notes get added to the Notion.

## Prerequisites
1. Create a table in Notion similar to this: [Meeting Notes](https://www.notion.so/n8n/00df263161a04ad79f33d82efb3bb996?v=092a631c982c4b74a8ddb1865f8a1b54)
2. Follow the steps mentioned in the [documentation](https://docs.n8n.io/credentials/notion/), to create credentials for the Notion Trigger node.
3. Create create [credentials](https://docs.n8n.io/credentials/mattermost/) for Mattermost.

![workflow-screenshot](fileId:499)

**Notion Trigger:** The Notion Trigger node will trigger the workflow when new data gets added to Notion.

**IF node:** This node will check if the notes belong to the team `Marketing`. If the team is `Marketing` the node will `true`, otherwise `false`.

**Mattermost node:** This node will send a message about the new data in the channel 'Marketing' in Mattermost. If you have a different channel, use that instead. You can even replace the Mattermost node with nodes of other messaging platforms, like Slack, Telegram, Discord, etc.

**NoOp node:** Adding this node here is optional, as the absence of this node won't make a difference to the functioning of the workflow.

## 📊 Basic Information

- **Workflow ID:** 1089
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 1125
- **Downloads:** 112
- **Created:** 2021/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1089)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **notionTrigger** 
- **if** 
- **mattermost** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
