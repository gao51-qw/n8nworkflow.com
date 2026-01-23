# Automated invoice generation & payment reminders with QuickBooks, Jotform & GPT-4o

> ## Generate Invoices and Send Reminders for Customers with Jotform, QuickBooks and Gmail
This workflow automates the entire process of receiving a product/service order, checking or creating a customer in **QuickBooks Online (QBO)**, generating an invoice, emailing it — all triggered by a form submission (via **Jotform**), and sending invoice reminders.

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

6. **Store The Invoice In DB**
* Stores the needed invoice details in the DB.

7. **Send Reminders**
* Every day at 8 AM, the automation checks each invoice to decide whether to:
    * send a reminder email,
    * skip and send it later, or
    * delete the invoice from the DB (if it's paid or all reminders have been sent).

## Who Can Benefit from This Workflow?
* **Freelancers**
* **Service Providers**
* **Consultants & Coaches**
* **Small Businesses**
* **E-commerce or Custom Product Sellers**

## Requirements
- Jotform webhook setup, more info [here](https://www.jotform.com/help/245-how-to-setup-a-webhook-with-jotform/)
- QuickBooks Online credentials, more info [here](https://developer.intuit.com/app/developer/qbo/docs/get-started/get-client-id-and-client-secret)
- Email setup, update email nodes (`Send reminder email` & `Send reminders sent summary`), more info about Gmail setup [here](https://docs.n8n.io/integrations/builtin/credentials/google)
- Create data table with the following columns:
    * invoiceId (string)
    * remainingAmount (number)
    * currency (string)
    * remindersSent (number)
    * lastSentAt (date time)
- Update `Add reminders config` node so update the data table id and intervals in days (default is after 2 days, then after 3 days and finally after 5 days )
- LLM model credentials

## 📊 Basic Information

- **Workflow ID:** 9760
- **Complexity:** advanced
- **Node Count:** 48
- **Views:** 163
- **Downloads:** 16
- **Created:** 2025/10/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9760)

## 👤 Author

- **Name:** AppUnits AI
- **Username:** @appunitsai

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **webhook** 
- **if** (×3)
- **quickbooks** (×7)
- **stickyNote** (×21)
- **code** (×3)
- **set** 
- **dataTable** (×5)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **switch** 
- **scheduleTrigger** 
- **splitInBatches** 
- **gmail** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 48 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
