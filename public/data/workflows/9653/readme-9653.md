# Export Odoo company data via API endpoint with JSON/Excel output options

> ## How it works
This workflow provides an API endpoint `/api/v1/get-companies` that retrieves company records directly from your Odoo database. It’s built for teams who need to query or export company data — either as structured JSON for integrations or as Excel (.xlsx) for reporting.

When a request is made, the workflow:
1. Accepts query parameters (`name`, `response_format`).
2. Validates the name input (required for company search).
3. Fetches all matching companies from Odoo using a `like` filter for partial name matches.
4. Returns results as a JSON response or Excel file depending on the `response_format` parameter.

This makes it ideal for quickly exporting or syncing company information with other tools.



## Setup steps
1. Open the Webhook node and note the endpoint `/api/v1/get-companies`.
2. Connect your Odoo API credentials in the Odoo node.
3. Optionally update the `fieldsList` in the Odoo node to include more company details (VAT, address, etc.).
4. Test using a browser or Postman:  
   - `/api/v1/get-companies?name=Tech&response_format=json`  
   - `/api/v1/get-companies?name=Tech&response_format=excel`

## 📊 Basic Information

- **Workflow ID:** 9653
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 304
- **Downloads:** 30
- **Created:** 2025/10/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9653)

## 👤 Author

- **Name:** V3 Code Studio
- **Username:** @v3codestudio

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **webhook** 
- **function** (×2)
- **odoo** 
- **if** 
- **convertToFile** 
- **respondToWebhook** (×2)
- **stickyNote** (×9)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
