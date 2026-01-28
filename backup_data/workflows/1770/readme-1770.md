# Add new contacts from HubSpot to the email list in Mailchimp

> This workflow adds new HubSpot contacts to the Mailchimp email list. 

## Prerequisites
- HubSpot account and [HubSpot credentials](https://docs.n8n.io/integrations/builtin/credentials/hubspot/)
- Mailchimp account and [Mailchimp credentials](https://docs.n8n.io/integrations/builtin/credentials/mailchimp/)

## How it works
1. Cron node triggers this workflow every day at 7:00.
2. HubSpot node searches for the new contacts created.
3. Mailchimp node creates a new contact in a certain audience and add a 'subscribed' status.


## 📊 Basic Information

- **Workflow ID:** 1770
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 1513
- **Downloads:** 151
- **Created:** 2022/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1770)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **cron** 
- **hubspot** 
- **mailchimp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
