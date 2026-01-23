# Create and send multi-item PayPal invoices via email

> ### Who Is This For?  
Small businesses, consultants, agencies… anyone who bills with PayPal.

### What Problem Does It Solve?  
Automates itemized invoicing and delivery via PayPal’s Invoicing API with support for an “Add more items?” loop.

### What This Workflow Does  
1. Collects your PayPal credentials & invoice data via a form  
2. Dynamically generates a timestamp + random 4 digit number for the invoice_number  
3. Calls PayPal to create and then send the invoice  
4. Supports endless line-items via a Switch + Merge loop.

### Setup  
1. Grab a PayPal REST App’s Client ID & Secret.  
2. Toggle “Live or Test” to point at production vs sandbox.  
3. **PayPal Credentials**  
   - If you select **Test**, this workflow points at PayPal’s **sandbox** (`api-m.sandbox.paypal.com`) and **requires your sandbox** Client ID & Secret.  
   - If you select **Live**, it points at PayPal’s **production** endpoint (`api-m.paypal.com`) and **requires your live** Client ID & Secret.  
4. (Optional) Customize your logo, currency, default notes.

### How to Customize  
– Change the currency dropdown  
– Tweak the invoice-number format in the “Set Invoice Number and Date” code node  
– Swap out or style the n8n Form nodes for your own UX


## 📊 Basic Information

- **Workflow ID:** 3811
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 129
- **Downloads:** 12
- **Created:** 2025/5/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3811)

## 👤 Author

- **Name:** Andrew
- **Username:** @licoricewhip

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **code** (×8)
- **set** 
- **merge** (×5)
- **form** (×3)
- **formTrigger** 
- **switch** 
- **httpRequest** (×3)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
