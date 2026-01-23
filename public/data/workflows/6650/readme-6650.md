# Track shipments with DHL/Delhivery APIs & send Google Sheets updates to customers via WhatsApp/Email

> This workflow automatically tracks shipments across multiple courier services, updates Google Sheets, and notifies customers via WhatsApp/Email when status changes.

## Good to know
* Runs daily at 9 AM and only sends notifications when shipment status actually changes
* API costs may apply for courier tracking (Delhivery, DHL) and WhatsApp notifications
* Requires Google Sheet with proper column structure and valid API credentials
* Currently supports Delhivery and DHL APIs but easily expandable

## How it works
* **Daily Trigger**: Cron node runs workflow every day at 9 AM
* **Get Shipments List**: Fetches all shipment data from Google Sheet
* **Filter Active Shipments**: Excludes delivered orders and empty tracking numbers
* **Route by Courier**: Directs shipments to appropriate API (Delhivery or DHL)
* **Track via APIs**: Makes real-time tracking calls to courier services
* **Parse Tracking Data**: Normalizes different API responses and detects status changes
* **Check Status Change**: Only processes shipments with actual status updates
* **Update & Notify**: Simultaneously updates Google Sheet, sends WhatsApp message, and email notification
* **Execution Summary**: Logs workflow performance metrics

## How to use
* Import the JSON workflow into n8n
* Create Google Sheet with columns: `tracking_number`, `order_id`, `customer_email`, `customer_phone`, `courier`, `status`, `location`, `last_updated`, `estimated_delivery`
* Configure credentials: Google Sheets OAuth2, Delhivery API, DHL API, WhatsApp API, SMTP
* Replace `YOUR_GOOGLE_SHEET_ID` with actual sheet ID
* Test workflow manually before enabling daily schedule

## Requirements
* Google Sheets API access
* Courier API keys (Delhivery, DHL)
* WhatsApp Business API credentials
* SMTP email service
* n8n instance (self-hosted or cloud)

## Customizing this workflow
* **Add courier services**: Create new HTTP Request node and update routing logic
* **Change frequency**: Modify cron expression (hourly: `0 * * * *`, twice daily: `0 9,17 * * *`)
* **Customize notifications**: Edit WhatsApp/Email templates in respective nodes
* **Add CRM integration**: Insert CRM update node after status change detection

## 📊 Basic Information

- **Workflow ID:** 6650
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 509
- **Downloads:** 50
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6650)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Support Chatbot

## 🔗 Nodes Used

- **cron** 
- **googleSheets** (×2)
- **filter** (×2)
- **httpRequest** (×3)
- **if** 
- **code** (×2)
- **emailSend** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
