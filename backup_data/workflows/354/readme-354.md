# Incident response workflow - part 2

> This workflow is the second of three. You can find the other workflkows here:

1. [Incident Response Workflow - Part 1](https://n8n.io/workflows/353)
2. [Incident Response Workflow - Part 2](https://n8n.io/workflows/354)
3. [Incident Response Workflow - Part 3](https://n8n.io/workflows/355)


We have the following nodes in the workflow:
1. Webhook node: This trigger node listens to the event when the Acknowledge button is clicked.
2. PagerDuty node: This node changes the status of the incident report from 'Triggered' to 'Acknowledged' in PagerDuty.
3. Mattermost node: This node publishes a message in the auxiliary channel saying that the status of the incident report has been changed to Acknowledged.


## 📊 Basic Information

- **Workflow ID:** 354
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 1671
- **Downloads:** 167
- **Created:** 2020/4/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/354)

## 👤 Author

- **Name:** tanaypant
- **Username:** @tanay1337

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **webhook** 
- **pagerDuty** 
- **mattermost** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
