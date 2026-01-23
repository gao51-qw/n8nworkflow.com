# Sync WooCommerce orders and inventory with Google Sheets and Slack

> ## Automate order fulfillment and inventory sync from WooCommerce to Google Sheets and Slack


This workflow provides a robust, end-to-end automated pipeline for managing e-commerce orders. It bridges the gap between your storefront and your fulfillment team by handling inventory validation, multi-channel notifications, and centralized data logging.


## Who’s it for?
This template is designed for e-commerce business owners and operations managers using **WooCommerce** who want to eliminate manual order processing. It is ideal for teams that need real-time updates on stock availability and automated communication with both customers and warehouse staff.


## How it works
1.  **Order Capture**: The workflow triggers via a WooCommerce Webhook (real-time) or a Schedule Trigger (hourly sync).
2.  **Data Extraction**: It parses complex order JSON into a clean, usable format.
3.  **Inventory Check**: The system iterates through each line item to verify stock levels.
4.  **Fulfillment Logic**: It determines if an order is "Ready" or "Backordered" and calculates estimated shipping priorities.
5.  **Multi-Channel Notification**:
    *   **In-Stock**: Sends a confirmation email to the customer and alerts the fulfillment team on Slack.
    *   **Backordered**: Sends a delay notice to the customer and alerts the inventory manager on Slack.
6.  **Data Logging**: Every order is appended to a Google Sheet for long-term analytics and tracking.


## Requirements
*   **WooCommerce**: REST API access and Webhook setup.
*   **Gmail**: OAuth2 credentials for sending automated emails.
*   **Slack**: A Bot Token with permissions to post in `#fulfillment` and `#alerts` channels.
*   **Google Sheets**: A spreadsheet prepared with headers matching the order data.


## How to set up
1.  **Credentials**: Connect your WooCommerce, Gmail, Slack, and Google Sheets accounts in the respective nodes.
2.  **WooCommerce Webhook**: Copy the Webhook URL from the first node and paste it into your WooCommerce Webhook settings (Topic: Order Created).
3.  **Inventory Logic**: The "Check Inventory" node currently uses a simulated Code node. Replace this logic with a lookup to your actual inventory database or ERP system.
4.  **Google Sheets**: Open the "Log Order to Sheets" node and select your specific Spreadsheet ID and Sheet Name.


## How to customize
*   **Shipping Rates**: Modify the "Process Order Logic" node to include your specific carrier rates or integrate a shipping API (like ShipStation).
*   **Priority Rules**: Adjust the logic to flag "High Value" orders or specific VIP customers for faster processing.
*   **Messaging**: Customize the Gmail and Slack message templates to match your brand's voice.

## 📊 Basic Information

- **Workflow ID:** 11968
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 18
- **Downloads:** 1
- **Created:** 2025/12/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11968)

## 👤 Author

- **Name:** yu-ya
- **Username:** @yyuyayamanaka

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stickyNote** (×6)
- **webhook** 
- **scheduleTrigger** 
- **merge** (×2)
- **code** (×3)
- **splitOut** 
- **aggregate** 
- **if** 
- **gmail** (×2)
- **slack** (×2)
- **googleSheets** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
