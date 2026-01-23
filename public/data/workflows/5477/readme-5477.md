# Capture and structure web form leads for Odoo CRM (v15-v18 compatible)

> This workflow captures raw lead data from a Webhook and formats it into a clean, structured object — perfectly tailored for Odoo CRM and create lead. It supports Odoo versions 15, 16, 17, and 18, both Community and Enterprise editions.

🔧 How It Works:
Captures POST data from any web form or lead tool using Webhook.

Extracts fields like:
email
phone
name
company
company_name
contact_name
description

🔐 Credentials Required:
Odoo credentials
https://docs.n8n.io/integrations/builtin/credentials/odoo/

Optionally, connect to Odoo's /crm.lead endpoint via an HTTP Request node.

🎯 Use Cases:
Standardize messy input from lead forms
Prepare API-ready data for direct CRM insert
Connect web campaigns to Odoo CRM
Automate follow-up, lead scoring, or notifications

🧰 Compatibility:
✅ Odoo v15, v16, v17, v18
✅ Odoo Community & Enterprise
✅ API or custom model compatible
✅ All n8n versions 1.0+

🚀 Setup Instructions:
Open n8n and import the workflow file.
Configure the Webhook URL in your form or tool.
Test the Webhook with sample data.
Review the structured JSON output.
(Optional) Add an HTTP node to push to Odoo CRM API.


## 📊 Basic Information

- **Workflow ID:** 5477
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 289
- **Downloads:** 28
- **Created:** 2025/6/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5477)

## 👤 Author

- **Name:** Evozard
- **Username:** @evozardconsulting

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **webhook** 
- **code** 
- **stickyNote** (×3)
- **odoo** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
