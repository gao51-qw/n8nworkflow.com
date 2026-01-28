# Automated WooCommerce abandoned cart recovery with Google Sheets email reminders

> ## Recover lost revenue on autopilot with this powerful WooCommerce Abandoned Cart Automation.

This workflow connects directly to your WooCommerce store using the REST API to fetch all recent orders. It logs them in Google Sheets for easy tracking and visibility. Every day at a scheduled time, it checks for orders with the "pending" status that haven't received a reminder email yet — and sends a personalized follow-up email to the customer.

## Use it to:

Automatically remind customers about unpaid orders

Recover abandoned carts without any manual effort

Keep clean logs of all orders and reminders via Google Sheets

Boost conversion rates and revenue with timely, helpful emails


## Requirements:
To use this workflow, you need:

A WooCommerce store with REST API access

A connected Google Sheets account

No external plugins are required in WooCommerce. Just make sure the REST API is enabled and credentials are added to n8n.

### Google Sheets Configuration
Create a Google Sheet with the following column headers (first row): 

Order ID | Buyer | E-mail | Products | Price | Status | Order date | Payment url | Reminder sent

### Customize Mail:
Customize the reminder message to match your brand voice and offer incentives like a discount or free shipping to encourage payment.

Set it once and let your abandoned cart recovery run in the background — 24/7.

contact: contact@streamlinemakers.com

## 📊 Basic Information

- **Workflow ID:** 6322
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 76
- **Downloads:** 7
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6322)

## 👤 Author

- **Name:** Jacob
- **Username:** @jacobgad

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** (×2)
- **dateTime** 
- **stickyNote** (×2)
- **httpRequest** 
- **code** 
- **googleSheets** (×3)
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
