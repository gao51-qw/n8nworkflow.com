# Generate professional invoices with Jotform, Xero, and GPT-powered emails

> ## Generate Invoices for Customers with Jotform, Xero and Gmail
This workflow automates the entire process of receiving a product/service order, checking or creating a customer in **Xero**, generating an invoice, and emailing it — all triggered by a form submission (via **Jotform**).

## How It Works
1. **Receive Submission**
- Triggered when a user submits a form.
- Collects data like customer details, selected product/service, etc.

2. **Create/Update The Customer**
- Creates/Updates the customer.

3. **Create The Invoice**
- Generates a new invoice for the customer using the item selected.

4. **Send The Invoice**
- Automatically sends the invoice via email to the customer.

## Who Can Benefit from This Workflow?
* **Freelancers**
* **Service Providers**
* **Consultants & Coaches**
* **Small Businesses**
* **E-commerce or Custom Product Sellers**

## Requirements
- Jotform webhook setup, more info [here](https://www.jotform.com/help/245-how-to-setup-a-webhook-with-jotform/)
- Xero credentials, more info [here](https://docs.n8n.io/integrations/builtin/credentials/xero)
- Make sure that products/services values in Jotform are exactly the same as your item `Code` in your Xero account
- Email setup, update email node (`Send email`), more info about Gmail setup [here](https://docs.n8n.io/integrations/builtin/credentials/google)
- LLM model credentials

## 📊 Basic Information

- **Workflow ID:** 9797
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 161
- **Downloads:** 16
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9797)

## 👤 Author

- **Name:** AppUnits AI
- **Username:** @appunitsai

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×6)
- **code** 
- **xero** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
