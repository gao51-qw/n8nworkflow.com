# Send RSS feed data to webhook

> Filters articles based on keywords, checks against MongoDB for unique links, then sends results to different webhooks

## 📊 Basic Information

- **Workflow ID:** 159
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 3965
- **Downloads:** 396
- **Created:** 2019/11/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/159)

## 👤 Author

- **Name:** dave
- **Username:** @dave3

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **manualTrigger** 
- **cron** 
- **rssFeedRead** 
- **splitInBatches** (×2)
- **if** (×4)
- **noOp** 
- **merge** (×2)
- **mongoDb** (×4)
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
