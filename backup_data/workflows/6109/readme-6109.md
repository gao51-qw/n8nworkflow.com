# Send real-time notifications for new Shopify orders to Slack

> ## Shopify Order to Slack Notification


**E-commerce Automation**
**Team Communication**

This n8n template instantly notifies your team in Slack whenever a new order is placed on your Shopify store. Perfect for small to medium businesses that want immediate awareness of sales activity and faster order processing.




## How it works

Shopify sends webhook to n8n when new order is created
Order data is extracted and formatted into professional message
Rich Slack notification is posted to designated channel with customer details, order number, total amount, and direct admin link
Team gets instant visibility into new sales activity

## Set up instructions


Set up Shopify credentials in n8n: API Key, Password, Shop Subdomain, and Shared Secret


## Requirements

Shopify store with admin access
Slack workspace with channel permissions
n8n Shopify and Slack credentials configured

Customising this workflow

Add email notifications alongside Slack alerts
Include customer shipping information in notifications
Filter alerts by order value thresholds or product types

## 📊 Basic Information

- **Workflow ID:** 6109
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 321
- **Downloads:** 32
- **Created:** 2025/7/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6109)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **shopifyTrigger** 
- **set** 
- **stickyNote** (×4)
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
