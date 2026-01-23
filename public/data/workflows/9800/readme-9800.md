# Generate invoices and send AI-powered reminders with Jotform and Xero

> ## Generate Invoices and Send Reminders for Customers with Jotform and Xero
This workflow automates the entire process of receiving a product/service order, checking or creating a customer in **Xero**, generating an invoice, emailing it — all triggered by a form submission (via **Jotform**), and sending invoice reminders.

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

5. **Store The Invoice In DB**
- Stores the needed invoice details in the DB.

6. **Send Reminders**
- Every day at 8 AM, the automation checks each invoice to decide whether to:
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
- Xero credentials, more info [here](https://docs.n8n.io/integrations/builtin/credentials/xero)
- Make sure that products/services values in Jotform are exactly the same as your item `Code` in your Xero account
- Email setup, update email nodes (`Send email` & `Send reminder email` & `Send reminders sent summary`)
- Create data table with the following columns:
    * invoiceId (string)
    * remainingAmount (number)
    * currency (string)
    * remindersSent (number)
    * lastSentAt (date time)
- Update `Add reminders config` node so update the data table id and intervals in days (default is after 2 days, then after 3 days and finally after 5 days )
- LLM model credentials

## 📊 Basic Information

- **Workflow ID:** 9800
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 203
- **Downloads:** 20
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9800)

## 👤 Author

- **Name:** AppUnits AI
- **Username:** @appunitsai

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×16)
- **code** 
- **xero** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **emailSend** (×3)
- **set** 
- **dataTable** (×5)
- **if** (×2)
- **switch** 
- **scheduleTrigger** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
