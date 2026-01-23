# Send TheHive alerts using SIGNL4

> This sample workflow allows you to forward alerts from TheHive 5 to SIGNL4 in order to send reliable alerts to your team.

There are two nodes for testing the TheHive connection ("TheHive Read Alerts" and "TheHive Create Alert").

The node "TheHive Webhook Request" will receive requests for new alerts from TheHive. You need to configure the webhook and the notifications in TheHive accordingly.

The node "SIGNL4 Send Alert" sends the alert to SIGNL4 and the node "SIGNL4 Resolve Alert" will close the alert in SIGNL4 in case it has been closed in TheHive.


## 📊 Basic Information

- **Workflow ID:** 1630
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 993
- **Downloads:** 99
- **Created:** 2022/5/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1630)

## 👤 Author

- **Name:** Ron
- **Username:** @rons4

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **theHive** (×2)
- **if** 
- **signl4** (×2)
- **webhook** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
