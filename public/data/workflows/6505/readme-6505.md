# Client billing detail collection & invoice generation with Gmail and QuickBooks

> ## What It Does
This workflow allows you to quickly generate and send invoices by collecting missing billing details from clients through an automated form and email sequence. It integrates Gmail and QuickBooks Online to handle the full billing flow: from request to invoice, reducing manual data entry and time wasted switching between apps.

Perfect for freelancers, service providers, or teams that want to streamline invoicing without going back and forth with clients.

## Prerequisites
- Gmail OAuth2 credential  
- QuickBooks Online OAuth2 credential

## How It Works
1. **Trigger:** Manually start the workflow by filling out a form with the client’s email, invoice amount, description, and product.
2. **Send Request Email:** A pre-written email is sent to the client asking them to provide their billing details.
3. **Collect Info:** The client submits their billing name and address via a hosted form.
4. **Add/Find Client in QuickBooks:** If the client doesn't exist, a new record is created; otherwise, the existing client is used.
5. **Generate Invoice:** A QuickBooks invoice is created using the submitted info and selected product.
6. **Send Invoice:** The invoice is automatically emailed to the client using QuickBooks' native interface.

## Example Use Cases
- Freelancers requesting billing info before sending an invoice  
- Small businesses invoicing new clients without manual QuickBooks entry  
- Sales or ops teams who want to request billing info via email with just a few clicks  
- Automating follow-up for new customer onboarding or service requests

## Setup Instructions
- Connect your Gmail and QuickBooks credentials  
- Add your products to the dropdown list in the `Enter Client Details` node  
  ⚠️ Make sure the product names **exactly match** the items in QuickBooks  
- Select the tax code in the `Create A New Invoice` node
- Customize the email message in the `Send Invoice Request` Gmail node to reflect your brand voice

## How to Use
- Copy the public URL from the `Enter Client Details` node (this way you don't have to trigger the workflow manually inside n8n) 
- Each time you need to invoice a client, open the form and fill in:
  - Client’s email  
  - Product/service name  
  - Invoice amount and description  
- The client receives an email prompting them to fill in their billing info  
- Once submitted, the system creates and sends a QuickBooks invoice automatically

## Customization Options
- Add support for multiple line items  
- Automatically send reminder emails if the form isn't completed within a day  
- Add internal logging (Google Sheets, Airtable, etc.) for sent/paid invoices

## Why It's Useful
This workflow removes friction from your billing process. Instead of chasing clients for info and copying data into QuickBooks, you send one email and automation does the rest. It saves time, reduces errors, and makes invoicing feel seamless — while still keeping you in control.

## 📊 Basic Information

- **Workflow ID:** 6505
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 510
- **Downloads:** 51
- **Created:** 2025/7/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6505)

## 👤 Author

- **Name:** Rosh Ragel
- **Username:** @roshragel

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **quickbooks** (×5)
- **stickyNote** (×8)
- **formTrigger** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
