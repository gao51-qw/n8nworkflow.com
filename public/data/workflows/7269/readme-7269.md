# Gmail and QuickBooks Online workflow

> ## Automatically Forward Email Receipts to QuickBooks Online

## What It Does  
Are you tired of manually uploading email receipts to QuickBooks Online (QBO)? Are your email forwarding rules difficult to set up or unreliable? This n8n workflow automatically forwards your email receipts to QuickBooks Online with minimal configuration.

## Example Use Cases  
- Online purchase and subscription receipts  
- E-transfer confirmations  
- Bills and invoices received from suppliers  
- Expense reports sent by vendors  
- Payment confirmation emails
- Send other people's emails to QBO, bypassing the forwarding restrictions

## Prerequisites  
To use this workflow, you'll need:  
- A Gmail account with credentials configured in n8n  
- QuickBooks Online account with receipt forwarding enabled  

## How to Set Up Gmail  
1. Search for emails that contain receipts (e.g., subject contains "Interac E-transfer")  
2. Create a Gmail filter that automatically applies a specific label to those emails (e.g., "New E-Transfer")  
3. Create another label for processed emails to prevent duplicate processing (e.g., "Processed")  

## How It Works  
1. **Trigger:** The workflow runs when a new receipt is received; a scheduled trigger acts as a failsafe to catch missed emails.  
2. The first Gmail node retrieves emails with the "new receipt" label.  
3. The second Gmail node forwards the exact email contents to QuickBooks Online, mimicking a forwarded email.  
4. The workflow removes the original "new receipt" label and applies the "processed" label to avoid duplicate forwarding.  

## How to Use  
- Configure each Gmail node with your Gmail credentials in n8n.  
- Enter your QuickBooks Online receipt forwarding email address in the second Gmail node (e.g., example@qbdocs.com).  
- Set up the appropriate labels in each Gmail node to match your Gmail filter and workflow logic.  

## Customization Options  
- Modify the Gmail nodes to download and forward attachments if necessary.  
- Create separate workflows for different types of emails; for example, include vendor information in the subject line (e.g., "Your Instacart Order Receipt") to help QuickBooks categorize expenses.  
- Add error handling and notifications to monitor workflow execution.  

## Why It's Useful  
- Saves time by automating manual forwarding of receipts to QuickBooks Online.  
- Reduces errors and missed receipts that can occur with manual processing.  
- Keeps your QuickBooks records up-to-date automatically.  
- Provides a scalable solution for handling various receipt types and vendors.  
- Easily customizable to fit your specific email and accounting workflows.


## 📊 Basic Information

- **Workflow ID:** 7269
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 291
- **Downloads:** 29
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7269)

## 👤 Author

- **Name:** Rosh Ragel
- **Username:** @roshragel

## 🏷️ Categories

- Invoice Processing
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **gmailTrigger** 
- **gmail** (×4)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
