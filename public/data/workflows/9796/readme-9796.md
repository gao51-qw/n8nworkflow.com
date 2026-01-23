# Automate invoice generation & email delivery with Jotform, Xero & GPT-4o-mini

> ## Generate Invoices for Customers with Jotform, Xero and Slack
This workflow automates the entire process of receiving a product/service order, checking or creating a customer in **Xero**, generating an invoice, emailing it, and notifying the sales team for example (via **Slack**)  — all triggered by a form submission (via **Jotform**).

## How It Works
1. **Receive Submission**
* Triggered when a user submits a form.
* Collects data like customer details, selected product/service, etc.

2. **Check If Customer Exists**
* Searches Xero to determine if the customer already exists.
* ✅ **If Customer Exists:** **Update** customer details.
* ❌ **If Customer Doesn’t Exist:** **Create** a new customer in Xero.

3. **Create The Invoice**
* Generates a new invoice for the customer using the item selected.

4. **Send The Invoice**
* Automatically sends the invoice via email to the customer.

5. **Notify The Team**
* Notifies the sales team for example via Slack about the new invoice.

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
- Email setup, update email node (`Send email`)
- LLM model credentials
- Slack credentials, more info [here](https://docs.n8n.io/integrations/builtin/credentials/slack)

## 📊 Basic Information

- **Workflow ID:** 9796
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 112
- **Downloads:** 11
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9796)

## 👤 Author

- **Name:** AppUnits AI
- **Username:** @appunitsai

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×9)
- **code** 
- **xero** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **emailSend** 
- **if** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
