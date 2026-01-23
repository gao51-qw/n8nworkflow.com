# Post latest Twitter mentions to Slack

> This workflow will allow you to get the latest twitter mentions and send those mentions to Rocket.Chat. 

To ensure that we don't resend the same tweets as before, we use the Function Node and `getWorkflowStaticData()` to persist the ids of the tweets which have already been sent and filter those out. This leaves us with only the newest tweets. 

## 📊 Basic Information

- **Workflow ID:** 617
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 3075
- **Downloads:** 307
- **Created:** 2020/8/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/617)

## 👤 Author

- **Name:** Nisarag
- **Username:** @focalchord

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **function** 
- **twitter** 
- **rocketchat** 
- **cron** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
