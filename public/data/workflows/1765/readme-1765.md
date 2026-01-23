# Get Slack notifications when new product published on WooCommerce

> This workflow let's a bot in Slack notify a specific channel when a new product in WooCommerce is published and live on the site. 

## Prerequisites

[WooCommerce](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.woocommercetrigger/) account
[Slack](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.slack/) and a [Slack bot](https://slack.com/help/articles/115005265703-Create-a-bot-for-your-workspace)

## How it works

1. Listen for WooCommerce product creation
2. If permalink starts with https://[your-url-here].com/product/
3. Slack bot notifies channel that a new product has been added. 

Please note, you must update the URL in the IF node to match your url. If your WooCommerce doesn't use the slug /product/, that will need to be updated too. 


## 📊 Basic Information

- **Workflow ID:** 1765
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 1523
- **Downloads:** 152
- **Created:** 2022/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1765)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **if** 
- **slack** 
- **wooCommerceTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
