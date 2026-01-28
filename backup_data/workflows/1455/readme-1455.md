# Handle GDPR data deletion requests with Slack

> This workflow automatically deletes user data from different apps/services when a specific slash command is issued in Slack.

Watch this [talk and demo](https://www.youtube.com/watch?v=jG2aCOF0ICg&t=910s) to learn more about this use case. The demo uses Slack, but [Mattermost is Slack-compatible](https://docs.mattermost.com/developer/integration-faq.html#what-does-slack-compatible-mean), so you can also connect Mattermost in this workflow.

![workflow-screenshot](fileId:617)

## Prerequisites

- Accounts and [credentials](https://docs.n8n.io/integrations/credentials/) for the apps/services you want to use.
- Some basic knowledge of JavaScript.

## Nodes

- [Webhook node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.webhook/) triggers the workflow when a [Slack slash command](https://slack.com/intl/en-gb/help/articles/360001623607-Create-commands-for-Slack-apps) is issued.
- [IF nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.if/) confirm Slack's verification token and verify that the data has the expected format.
- [Set node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) simplifies the payload.
- [Switch node](https://docs.n8n.io/nodes/n8n-nodes-base.switch/) chooses the correct path for the operation to perform.
- [Respond to Webhook nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.respondToWebhook/) send responses back to Slack.
- [Execute Workflow nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.executeWorkflow/) call sub-workflows tailored to deleting data from each individual service.
- [Function node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.function/), [Crypto node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.crypto/), and [Airtable node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.airtable/) generate and store a log entry containing a hash value.
- [HTTP Request node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.httpRequest/) sends the final response back to Slack.

## 📊 Basic Information

- **Workflow ID:** 1455
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 2019
- **Downloads:** 201
- **Created:** 2022/2/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1455)

## 👤 Author

- **Name:** Tom
- **Username:** @mutedjam

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **webhook** 
- **respondToWebhook** (×4)
- **set** 
- **switch** 
- **if** (×2)
- **executeWorkflow** (×3)
- **airtable** 
- **function** 
- **crypto** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
