# Bulk WhatsApp & Gmail messenger with Google Sheets status tracking via InboxPlus

> ## How it works
This workflow sends WhatsApp messages and emails in bulk using contact data stored in Google Sheets. Contacts are processed in small batches to control throughput and avoid API rate limits. WhatsApp and email are treated as independent channels and are sent only when their status is marked as pending. All success and failure results are written back to Google Sheets to enable tracking, retries, and safe re-runs.

## Step-by-step
- **Step 1: Fetch contacts & batch processing**
  - **Manual Trigger** – Starts the workflow manually.
  - **Get Contacts** – Reads contact data from Google Sheets.
  - **Split In Batches** – Processes contacts in controlled batch sizes.

- **Step 2: Email preparation & sending**
  - **Has Email Address** – Checks whether the contact has an email address.
  - **IF Mail Pending** – Ensures the email is still marked as pending.
  - **PrepareEmail email** – Loads the selected InboxPlus email template.
  - **Build HTML Email** – Builds the final HTML email body.
  - **Fetch Email Image** – Downloads images for inline or attachment usage.
  - **Send Gmail** – Sends the email via Gmail.
  - **Delivered** – Confirms successful email delivery.

- **Step 3: WhatsApp message sending**
  - **Has Phone Number** – Checks whether the contact has a phone number.
  - **IF WhatsApp Pending** – Ensures the WhatsApp message is still pending.
  - **Send template** – Sends the approved WhatsApp template message.
  - **Sent** – Confirms message acceptance by WhatsApp.

- **Step 4: Delivery status updates**
  - **Update Sheet** – Writes successful delivery results back to Google Sheets.
  - **Mail Failure** – Updates Google Sheets if email delivery fails.
  - **Whatsapp Failure** – Updates Google Sheets if WhatsApp delivery fails.

## Why use this?
- Prevents duplicate messages with channel-level pending checks  
- Handles WhatsApp and email independently in one workflow  
- Supports safe retries without resending completed messages  
- Keeps Google Sheets as the single source of truth  
- Scales bulk outreach safely using batch-based execution  


## 📊 Basic Information

- **Workflow ID:** 11921
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 35
- **Downloads:** 3
- **Created:** 2025/12/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11921)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **gmail** 
- **googleSheets** (×4)
- **if** (×6)
- **whatsApp** 
- **@itechnotion/n8n-nodes-inboxplus.inboxPlus** 
- **stickyNote** (×5)
- **set** 
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
