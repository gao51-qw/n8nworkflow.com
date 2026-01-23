# Gmail attachment manager with Google Drive upload and smart filtering

> # This n8n template allows you to automatically upload all attached files from incoming emails to Google Drive with optional filters on sender, receiver and file types

This template is built to be customized for your specific needs. This template has the core logic and n8n node specific references sorted to work with dynamic file names throughout the workflow.

## Use cases
* Store invoices in Google Drive
* Save recurring reports in Google Drive
* Post recurring reports to another n8n workflow for further processing
* Archive files to Google Drive by email
* Save all files received by a client in a dedicated Google Drive folder

## Good to know
* The workflow is designed to not use custom code, preferring built-in nodes in n8n

## How it works
* Trigger on incoming emails with attachments
* (Optional) filter on sender/recipient
* Splits all attachments of the email into separate items
* (Optional) filter attachment based on file type
* (Optional) treat attachments with different file types through different paths
* Upload attachment to Google Drive
* Mark the email read and archive it after all attachments has been processed
* Notify in Slack how many attachments was processed in the execution

## How to use
* Configure Google credentials (1,2,6)
* Configure Slack credentials (7)
* Configure or disable sender/receiver filter (3)
* Configure or disable file type filter (4)
* Configure or disable file type paths (5)
* Configure destination folder (6)
* Build on this to fit your use case

##
Note: there's a [similar template](https://n8n.io/workflows/2966-upload-multiple-attachments-from-gmail-to-google-drive-without-a-code-node/) with the same basics but with less ready-made modifications and no loop that allows us to archive the email and notify to Slack when done. 

## 📊 Basic Information

- **Workflow ID:** 10347
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 501
- **Downloads:** 50
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10347)

## 👤 Author

- **Name:** Ossian Madisson
- **Username:** @ossian

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **gmail** 
- **stickyNote** (×11)
- **slack** 
- **gmailTrigger** 
- **filter** (×2)
- **switch** 
- **compression** 
- **httpRequest** 
- **splitInBatches** 
- **googleDrive** 
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
