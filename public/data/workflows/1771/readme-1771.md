# Send or update new Mailchimp subscribers in HubSpot

> This workflow sends new Mailchimp subscribers to HubSpot as new or updated contacts. 

## Prerequisites
- Mailchimp account and [Mailchimp credentials](https://docs.n8n.io/integrations/builtin/credentials/mailchimp/)
- HubSpot account and [HubSpot credentials](https://docs.n8n.io/integrations/builtin/credentials/hubspot/)

## How it works
1. Cron node triggers this workflow every day at 7:00.
2. Mailchimp node searches for new subscribers.
3. New Mailchimp subscribes get sent to HubSpot.
3. HubSpot node either updates the existing contact or adds a new one to the pipeline.


## 📊 Basic Information

- **Workflow ID:** 1771
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1182
- **Downloads:** 118
- **Created:** 2022/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1771)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **functionItem** (×2)
- **cron** 
- **hubspot** 
- **mailchimp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
