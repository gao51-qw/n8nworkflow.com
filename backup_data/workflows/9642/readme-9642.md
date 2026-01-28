# Generate invoices for customers with Jotform and QuickBooks

> ## Generate Invoices for Customers with Jotform and QuickBooks 
This workflow automates the entire process of receiving a product/service order, checking or creating a customer in **QuickBooks Online (QBO)**, generating an invoice, and emailing it — all triggered by a form submission (via **Jotform**).

## How It Works
1. **Receive Submission**
* Triggered when a user submits a form.
* Collects data like customer details, selected product/service, etc.

2. **Check If Customer Exists**
* Searches QBO to determine if the customer already exists.
* **If Customer Exists:** **Update** customer details (e.g., billing address).
* **If Customer Doesn’t Exist:** **Create** a new customer in QBO.

3. **Get The Item**
* Retrieves the selected product or service from QBO.

4. **Create The Invoice**
* Generates a new invoice for the customer using the item selected.

5. **Send The Invoice**
* Automatically sends the invoice via email to the customer.

## Who Can Benefit from This Workflow?
* **Freelancers**
* **Service Providers**
* **Consultants & Coaches**
* **Small Businesses**
* **E-commerce or Custom Product Sellers**

## Requirements
- Jotform webhook setup, more info [here](https://www.jotform.com/help/245-how-to-setup-a-webhook-with-jotform/)
- QuickBooks Online credentials, more info [here](https://developer.intuit.com/app/developer/qbo/docs/get-started/get-client-id-and-client-secret)

## 📊 Basic Information

- **Workflow ID:** 9642
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 101
- **Downloads:** 10
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9642)

## 👤 Author

- **Name:** AppUnits AI
- **Username:** @appunitsai

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **webhook** 
- **if** 
- **quickbooks** (×6)
- **stickyNote** (×11)
- **code** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
