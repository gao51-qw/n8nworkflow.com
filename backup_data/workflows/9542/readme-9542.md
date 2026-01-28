# Automate Stripe Invoicing Workflow with ClickUp & Gmail Notifications

> Stripe invoicing automation that is connected to your CRM, in this example, it is ClickUp. At the end of the flow, once your lead has been sent an invoice, you (or your team) will be sent an email notifying you of the newly sent invoice with all relevant details.

### How it works: 
• Monitors ClickUp task status → triggers workflow when status changes to send invoice.

• Fetches task details from ClickUp, including customer name, email, and project cost.

• Creates a Stripe customer using the fetched information.

• Generates a Stripe invoice via HTTP request, including description, footer, and due date (calculated in Unix timestamp).

• Adds invoice items automatically with correct amounts (converted to cents for Stripe).

• Sends the invoice to the customer automatically (manual or auto-charge option).

• Sends notification emails to team members with a link to the ClickUp task.

Works with other CRMs like Monday or HubSpot, not just ClickUp.

Test mode is available in Stripe to validate the workflow without sending real invoices.

### Setup steps: 
• You will need to connect your ClickUp Account 
• Connect your Stripe Account via HTTP Request (Shown in YouTube Video Linked Below)
• You will need to connect your email account to N8N (Gmail, Outlook etc) for sending the emails to your team and the client

### Important

Have your Stripe account and **PUT IT IN TEST/DEVELOPER MODE** when testing and developing the automation. Alternatively, set up an entirely separate account from your main Stripe account. 

This is only up until the point where you want to send the invoice, as you cannot send an invoice when your Stripe account is in test/developer mode

For a complete rundown on how to set this up watch my YouTube tutorial linked below

#### See full video tutorial here: https://youtu.be/vthK5I8x33k?si=W0Nreu403pDs-ud3

#### My LinkedIn: https://www.linkedin.com/in/seb-gardner-5b439a260/ 

## 📊 Basic Information

- **Workflow ID:** 9542
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 334
- **Downloads:** 33
- **Created:** 2025/10/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9542)

## 👤 Author

- **Name:** Seb
- **Username:** @seb

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **clickUpTrigger** 
- **if** 
- **httpRequest** (×3)
- **stripe** 
- **gmail** 
- **stickyNote** (×6)
- **clickUp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
