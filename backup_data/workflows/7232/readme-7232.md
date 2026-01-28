# Automatically save QuickBooks invoice PDFs to Google Drive

> # This n8n template from [Intuz](https://www.intuz.com/) provides a complete and automated solution for secure document archiving.

It automatically saves new QuickBooks invoice PDFs directly into Google Drive, creating a reliable backup system. For perfect organization, the workflow uses keywords from the invoice, like the client name or invoice number, to dynamically name the PDF files, ensuring you have a complete and easily searchable financial record.

## Use Cases
**1. Automated Document Archiving:** Eliminate the manual work of downloading and saving invoices. Set it up once and let it run.

**2. Compliance & Auditing:** Maintain a clean, chronological, and separate record of all issued invoices for easy access during audits.

**3. Secure Backup**: Create a redundant, secure backup of your critical financial documents in your own cloud storage.

**4. Enhanced Team Access:** Share the Google Drive folder with accountants, bookkeepers, or team members who need access to invoices but not to your full QuickBooks account.

## How It Works:
**1. Real-Time Invoice Trigger:** The workflow starts the instant a new invoice is created in your QuickBooks account. A configured webhook sends a notification to n8n, kicking off the automation immediately.

**2. Fetch Invoice Metadata:** The workflow uses the invoice ID from the webhook to retrieve the full invoice details, such as the customer's name and the transaction date. This information is used in the next steps.

**3. Generate the Invoice PDF**: A crucial HTTP Request node makes a direct API call to QuickBooks, requesting a PDF version of the invoice. This ensures the archived document is the official, formatted PDF, exactly as it appears in QuickBooks.

**4. Upload and Archive in Google Drive:** The final node takes the binary PDF data and uploads it to your specified Google Drive folder. It dynamically names the file for easy identification (e.g., CustomerName_TransactionDate.pdf), creating a perfectly organized and searchable archive.


## Setup Instructions
To get this workflow running, follow these key setup steps:

**1. Credentials:**
- QuickBooks: Connect your QuickBooks account credentials to n8n.
- Google: Connect your Google account using OAuth2 credentials and ensure the Google Drive API is enabled.

**2. QuickBooks Webhook Configuration:**
- First, activate this n8n workflow to make the webhook URL live.
- Copy the Production URL from the QuickBooks Webhook node.
- In your Intuit Developer Portal, go to the webhooks section for your app, paste the URL, and subscribe to Invoice creation events.

**3. Node Configuration:**
- Get an invoice & Generate PDF File: These nodes will use your configured QuickBooks credentials automatically.
- Upload file (Google Drive): In the parameters for this node, you must select the Folder ID where you want your invoices to be saved.


## Support
If you need help setting up this workflow or require a custom version tailored to your specific use case, please feel free to reach out to the template author:

- Website: https://www.intuz.com/services
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Worflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)



## 📊 Basic Information

- **Workflow ID:** 7232
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 438
- **Downloads:** 43
- **Created:** 2025/8/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7232)

## 👤 Author

- **Name:** Intuz 
- **Username:** @intuz

## 🏷️ Categories

- Invoice Processing
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **quickbooks** 
- **googleDrive** 
- **stickyNote** (×6)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
