# Meraki packet loss and latency alerts to Microsoft Teams

> This Template gives the ability to monitor all uplinks for your Meraki Dashboard and then alert your team in a method you prefer. This example is a Teams notification to our Dispatch Channel

![image.png](fileId:777)

Setup will probably take around 30 minutes to 1h provided with the Template. Most time intensive steps are getting a Meraki API key which I go over and setting up the Teams node which n8n has good documentation for.

Tutorial & explanation https://www.youtube.com/watch?v=JvaN0dNwRNU

## 📊 Basic Information

- **Workflow ID:** 2054
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 5064
- **Downloads:** 506
- **Created:** 2024/1/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2054)

## 👤 Author

- **Name:** Gavin
- **Username:** @sniped-you-fool

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×3)
- **set** (×3)
- **merge** (×2)
- **code** (×3)
- **scheduleTrigger** 
- **redis** (×2)
- **microsoftTeams** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
