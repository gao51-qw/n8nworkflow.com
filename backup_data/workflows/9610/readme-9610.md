# Automatic Gmail invoice PDF upload to Google Drive with spreadsheet logging

> ## Sort invoice PDFs from Gmail to Google Drive and Google Sheets

## Who’s it for

Freelancers, finance teams, and small businesses that receive invoice PDFs by email and want them automatically saved to Google Drive and logged in Google Sheets—without manual downloading or copy-pasting.

## How it works / What it does

This workflow watches your Gmail inbox for unread messages that match an invoice pattern (e.g., `subject:invoice filename:pdf`). For each email, it checks for attachments, uploads each PDF to a chosen Google Drive folder, and appends a new row to a Google Sheet with useful metadata: received time, sender, subject, filename, Drive link, and IDs. Finally, it marks the original email as read to avoid duplicates.

## How to set up

1. Open the **Config (Set)** node and fill in:

   * `drive_folder_id` (or leave blank for root)
   * `spreadsheet_id` (from the Sheet URL)
   * `sheet_name` (e.g., `Invoices`)
2. Connect credentials for **Gmail**, **Google Drive**, and **Google Sheets** in each node.
3. Adjust the Gmail search query if needed (language/vendor terms).
4. Run once manually to verify data mapping, then activate.

## Requirements

* n8n with valid credentials for Gmail, Google Drive, and Google Sheets.
* A Google Sheet with appropriate headers (or let the workflow write new columns).

## How to customize the workflow

* Replace Gmail with **IMAP** or **Microsoft Outlook** if you don’t use Gmail; remove the “mark as read” step accordingly.
* Add parsing (e.g., extract invoice totals or vendor names via PDF/AI nodes) before the Sheets step.
* Route based on vendor: create subfolders dynamically in Drive and write to different tabs.
* Notify your team by adding Slack/Email nodes after logging to Sheets.


## 📊 Basic Information

- **Workflow ID:** 9610
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 557
- **Downloads:** 55
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9610)

## 👤 Author

- **Name:** Toshiya Minami
- **Username:** @minami

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **gmailTrigger** 
- **stickyNote** (×6)
- **filter** 
- **googleDrive** 
- **googleSheets** 
- **gmail** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
