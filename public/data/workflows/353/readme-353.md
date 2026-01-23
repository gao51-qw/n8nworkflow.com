# Manage custom incident response in PagerDuty and Jira

> This workflow automatically follows the steps in a custom incident response playbook and manages incidents in PagerDuty, Jira tickets, and notifies the on-call team in Mattermost.

This workflow consists of three sub-workflows, each automating specific steps in the playbook. Read more about this use case and learn how to set up the workflows step-by-step in the blog tutorial [*How to automate every step of an incident response workflow*](https://n8n.io/blog/automated-incident-response-workflow/).

## Prerequisites

- A PagerDuty account and [credentials](https://docs.n8n.io/integrations/credentials/pagerduty/)
- A Mattermost account and [credentials](https://docs.n8n.io/integrations/credentials/mattermost/)
- A Jira account and [credentials](https://docs.n8n.io/integrations/credentials/jira/)

## Nodes

- [Webhook nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.webhook/) trigger the workflows when an incident is created in PagerDuty, and when the incidedent is acknowledged and resolved.
- [Mattermost nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.mattermost/) create an auxiliary channel for the on-call team to discuss the incident with buttons to acknowledge the incident and mark it as resolved.
- [PagerDuty nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.pagerduty/) update the status of the incident.
- [Jira nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.jira/) create an issue about the incident and update its status when it's resolved.

## 📊 Basic Information

- **Workflow ID:** 353
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 2989
- **Downloads:** 298
- **Created:** 2020/4/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/353)

## 👤 Author

- **Name:** tanaypant
- **Username:** @tanay1337

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **webhook** (×3)
- **jira** (×2)
- **pagerDuty** (×2)
- **mattermost** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
