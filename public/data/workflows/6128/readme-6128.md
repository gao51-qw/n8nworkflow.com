# Securely backup Gmail attachments to Google Drive with WhatsApp notifications

> This automated n8n workflow securely backs up Gmail attachments to Google Drive by triggering on new emails, retrieving the attachments, and uploading them to a designated Drive folder. The process includes a delay to ensure reliable execution and notifies the user via WhatsApp upon completion.

## Good to Know
- The workflow triggers on new Gmail messages
- A short wait ensures proper processing
- Attachments are uploaded to Google Drive
- A WhatsApp message confirms the backup

## How It Works
- **New Email Received** - Initiates the workflow on new Gmail messages
- **Fetch Email Details** - Retrieves the new email message
- **Wait for Processing** - Adds a short delay for reliable processing
- **Process Attachment Data** - Processes the attachment data
- **Upload to Google Drive** - Uploads the attachment to Google Drive
- **Notify via WhatsApp** - Sends a WhatsApp message to confirm the backup

## How to Use
- Import the workflow into n8n
- Configure Gmail API credentials
- Set up Google Drive API credentials
- Configure WhatsApp API or integration credentials
- Test with a sample email containing an attachment
- Adjust the wait duration if needed

## Requirements
- Gmail API credentials
- Google Drive API credentials
- WhatsApp API or integration credentials

## Customizing This Workflow
- Modify the wait duration in the Wait node to optimize processing time
- Adjust the Code node to handle specific attachment types or folder destinations in Google Drive

## 📊 Basic Information

- **Workflow ID:** 6128
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 219
- **Downloads:** 21
- **Created:** 2025/7/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6128)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **gmailTrigger** 
- **gmail** 
- **wait** 
- **code** 
- **googleDrive** 
- **whatsApp** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
