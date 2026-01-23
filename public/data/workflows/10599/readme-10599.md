# Fetch Odoo customer data and export to JSON or Excel

> ## Odoo Customers API – Export to JSON or Excel

Odoo Customers API – Export to JSON or Excel provides a simple way to fetch customer records from your Odoo database and get them back either as a structured JSON response or a downloadable Excel (.xlsx) file.

## ⚙️ What it does
- Listens for HTTP `GET` requests on the endpoint `/api/v1/get-customers`.
- Checks for the required `name` parameter and builds a search filter automatically.
- Queries the `res.partner` model to return only customer contacts (`is_company = false`).
- Delivers results in JSON by default, or as an Excel (.xlsx) export when `response_format=excel` is included.

## 📥 Parameters

- `name` — Required. Used for partial matching on customer names (via Odoo’s `Like` filter).
- `response_format` — Optional. Accepts `json` (default) or `excel`.


## 🔗 Examples
##### Excel Example
`GET /api/v1/get-customers?name=Demo&response_format=excel`
##### JSON Example
`GET /api/v1/get-customers?name=Demo&response_format=json`

## 🧩 Default fields
`display_name, name, email, phone, mobile, parent_id, company_id, country_code, country_id`

## 🛠️ Setup
- Open the Odoo node and connect your Odoo API credentials.
- Adjust the fieldsList in the node if you want to include more data fields (e.g., address, city, or VAT).
- Trigger the flow from its webhook URL or run it manually inside n8n to test the output.

## 💡 Notes
- Built and tested for n8n v1.108.2+


## 📊 Basic Information

- **Workflow ID:** 10599
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 317
- **Downloads:** 31
- **Created:** 2025/11/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10599)

## 👤 Author

- **Name:** V3 Code Studio
- **Username:** @v3codestudio

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **webhook** 
- **function** (×2)
- **if** 
- **convertToFile** 
- **respondToWebhook** (×2)
- **stickyNote** (×9)
- **odoo** 
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
