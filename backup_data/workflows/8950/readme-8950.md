# Create Stripe invoices from Airtable orders with Google Sheets logging

> ## Description
Automate B2B order invoicing by fetching orders from Airtable, validating paid B2B entries, creating Stripe customers and invoices, finalizing invoices, and logging structured invoice data into Google Sheets. This workflow ensures seamless B2B billing, centralized record-keeping, and reduces manual errors in financial operations. ⚡💳📊

## What This Template Does
- Triggers hourly to check for new B2B orders. ⏱️
- Fetches order data from Airtable (Orders table). 📥
- Filters only paid orders with “B2B” tag. ✅
- Creates a corresponding Stripe customer from order details. 👤
- Processes order line items for invoicing. 📦
- Creates a Stripe invoice with due date and payment terms. 🧾
- Finalizes the invoice automatically. ✔️
- Formats invoice details (totals, due dates, customer info, links). 🔄
- Logs structured invoice data into Google Sheets for tracking. 📊

## Key Benefits
- Fully automates B2B invoicing workflow from orders to finalized invoices. 🔄
- Ensures all invoices are linked, structured, and logged in Sheets. 🧾
- Reduces manual effort and eliminates data entry errors. ⚡
- Maintains centralized invoice tracking for finance teams. 📂
- Creates a consistent billing flow integrated with Stripe. 💳

## Features
- Hourly Trigger – Continuously monitors Airtable for new/updated orders.
- Airtable Integration – Fetches order details automatically.
- Conditional Filter – Processes only “B2B” paid orders.
- Stripe Customer Creation – Automatically creates customers in Stripe.
- Line Item Processor – Handles Shopify/Order line items or test data.
- Stripe Invoice Creation – Generates draft invoices with due dates.
- Invoice Finalization – Auto-finalizes and prepares invoices for payment.
- Data Formatter – Structures invoice info (totals, links, dates, status).
- Google Sheets Integration – Logs all invoice data for reporting.

## Requirements
- n8n instance (cloud or self-hosted).
- Airtable Personal Access Token with read access to Orders table.
- Stripe API credentials with customer + invoice permissions.
- Google Sheets OAuth2 credentials with read/write access.

## Target Audience
- Finance/ops teams handling B2B customer invoicing. 💼
- SaaS or eCommerce businesses with B2B order flows. 🛍️
- Startups needing automated billing + centralized reporting. 🚀
- Teams tracking Stripe invoices inside Google Sheets. 📊

## Step-by-Step Setup Instructions
- Connect Airtable credentials and replace with your base/table IDs. 🔑
- Configure Stripe API credentials for invoice + customer creation. 💳
- Link Google Sheets credentials and update the target sheet ID. 📊
- Adjust order filtering conditions (tags, payment status) as needed. ⚙️
- Test with sample data to validate invoices are created + logged. ✅

## 📊 Basic Information

- **Workflow ID:** 8950
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 135
- **Downloads:** 13
- **Created:** 2025/9/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8950)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **stickyNote** (×10)
- **scheduleTrigger** 
- **airtable** 
- **if** 
- **stripe** 
- **code** (×2)
- **httpRequest** (×2)
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
