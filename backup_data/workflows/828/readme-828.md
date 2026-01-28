# Send the astronomy picture of the day daily to a Telegram channel

> ![workflow-screenshot](fileId:340)

This is a workflow that sends daily astronomy picture of the day using the NASA node to a channel on Telegram.

**Cron node:** The Cron node triggers the workflow daily at 8 PM. You can update the time in the Cron node to trigger the workflow at your desired time.

**NASA node:** After the Cron node triggers the workflow, the NASA node fetches the Astronomy Picture of the Day from the NASA API. You can also get the binary file of the image. Toggle ***Download Image*** to `true` to get the file.

**Telegram node:** The Telegram node sends the image to a Telegram channel.

If you want to share the image on another platform, you can replace the Telegram node with the node of that platform. For example, if you want to post the image on a channel on Slack, replace the Telegram node with the Slack node.

You can learn to build this workflow on the documentation page of the [NASA](https://docs.n8n.io/nodes/n8n-nodes-base.nasa/#nasa) node.

## 📊 Basic Information

- **Workflow ID:** 828
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 3332
- **Downloads:** 333
- **Created:** 2020/12/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/828)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **cron** 
- **nasa** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
