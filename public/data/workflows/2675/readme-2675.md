# Generate Stripe invoice and send it by email

> Generating Stripe invoices through the API can be tricky since it requires four steps to generate and send it via email to the customer.

With this workflow you can create Stripe invoices automatically and make Stripe send the invoices to the customer email.

### How it works

To generate a Stripe invoice, you need to create a customer, specify the invoice items, create the invoice, and finalize it.

What should be a simple task involves multiple steps.

This workflow simplifies the process by providing everything pre-built for you.

### Who is this for?

Anyone who wants to generate invoices automatically and send them to the customer’s email.

Stripe will only send invoices to customers if you generate the invoice correctly through the API.
.

### **Check out my other templates**

👉 [**https://n8n.io/creators/solomon/**](https://n8n.io/creators/solomon/)

## 📊 Basic Information

- **Workflow ID:** 2675
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 2130
- **Downloads:** 213
- **Created:** 2024/12/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2675)

## 👤 Author

- **Name:** Solomon
- **Username:** @solomon

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **stripe** 
- **httpRequest** (×3)
- **stickyNote** (×4)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
