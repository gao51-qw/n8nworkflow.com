# Order processing with Google Sheets and Slack: inventory checks and alerts

> ## Overview
A cornerstone of your Order Management System, this workflow ensures seamless inventory control through fully automated stock checks, leading to a direct reduction in operational costs. It provides real-time alerts to the responsible personnel, enabling proactive issue detection and resolution to eliminate the financial damages associated with unexpected stock-outs.

## How it works
### Order Webhook
Receives orders from external sources (e.g., website, form, or app) via API.

### Check Order Request
Checks the validity of the order (e.g., complete product, valid customer details)

### Check Inventory
Retrieve inventory information and compare it with the order request.

### Notifications
- Generate a notification to Slack for the manager indicating a successful order or an out-of-stock situation.

### Logging
- Log the process details to a Google Sheet for tracking.

## Set up steps

### Webhook 
- Create a JSON request with the following format to call the Webhook Url

```
{
  "id": "ORDER1001",
  "customer": {
    "name": "Customer",
    "email": "customer@example.com"
  },
  "items": [
    {
      "sku": "SKU001",
      "quantity": 2,
      "name": "Product A",
      "price": 5000
    },
    {
      "sku": "SKU002",
      "quantity": 2,
      "name": "Product C",
      "price": 10000
    }
  ],
  "total": 30000
}
```

- Define the greater than or less than conditions on the inventory level to enter the corresponding branches.

### Google Sheet 
- Clone the file to your Google Drive. ([WMS Data Demo](https://docs.google.com/spreadsheets/d/1sgTaHwbTWrVCDiSwuvqFVJr0-Ez2t3LTlJaLU4cBcuU/edit?usp=sharing))
- Replace your credentials and connect.
- Access permission must be granted to n8n.

### Slack 
- Replace your credentials and connect.
- A channel named "warehouse" needs to be prepared to receive notifications (if using a different name, you must update the Slack node).

## 📊 Basic Information

- **Workflow ID:** 10899
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 243
- **Downloads:** 24
- **Created:** 2025/11/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10899)

## 👤 Author

- **Name:** Satoshi
- **Username:** @satoshi

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **webhook** 
- **function** (×6)
- **googleSheets** (×2)
- **merge** 
- **if** 
- **stickyNote** (×5)
- **slack** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
