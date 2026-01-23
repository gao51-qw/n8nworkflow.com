# Gender inclusive language bot for Mattermost

> This workflow ensures gender inclusive language in Mattermost channels. If someone addresses the group with “guys” or “gals”, a bot promptly replies with: "May I suggest “folks” or “y'all”? We use gender inclusive language here. 😄".
![workflow-screenshot](fileId:441)
* **Webhook node**: triggers the workflow when a new message is posted in Mattermost.
* **IF node**: verifies if the message includes the words "guys" or "gals". If false, it does not take any action. If true, it triggers the Mattermost node.
* **Mattermost node**: posts the language warning message in the Mattermost channel.


## 📊 Basic Information

- **Workflow ID:** 982
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 948
- **Downloads:** 94
- **Created:** 2021/3/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/982)

## 👤 Author

- **Name:** Lorena
- **Username:** @lorenanda

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **webhook** 
- **mattermost** 
- **if** 
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
