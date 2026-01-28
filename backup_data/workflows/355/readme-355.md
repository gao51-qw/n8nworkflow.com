# Incident response workflow - Part 3

> This workflow is the third of three. You can find the other workflkows here:

1. [Incident Response Workflow - Part 1](https://n8n.io/workflows/353)
2. [Incident Response Workflow - Part 2](https://n8n.io/workflows/354)
3. [Incident Response Workflow - Part 3](https://n8n.io/workflows/355)

We have the following nodes in the workflow:
1. Webhook node: This trigger node listens to the event when the Resolve button is clicked.
2. PagerDuty node: This node changes the status of the incident report from Acknowledged to Resolved in PagerDuty.
3. Jira Software node: This node moves the incident issue to Done.
4. Mattermost node: This node publishes a message in the auxiliary channel mentioning that the incident has been marked as resolved in PagerDuty and Jira.
5. Mattermost node: This node publishes a message in the specified Incidents channel that the incident has been resolved by the on-call team.


## 📊 Basic Information

- **Workflow ID:** 355
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 2007
- **Downloads:** 200
- **Created:** 2020/4/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/355)

## 👤 Author

- **Name:** tanaypant
- **Username:** @tanay1337

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **mattermost** (×2)
- **jira** 
- **pagerDuty** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
