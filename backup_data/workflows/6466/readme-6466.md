# Automatically save Gmail attachments to Google Drive

> ## Gmail Attachment Extractor to Google Drive

Description: This workflow monitors your Gmail inbox for new emails, specifically those with attachments, and automatically saves those attachments to a designated folder in your Google Drive.

Use Case: Automatically archive invoices, client documents, reports, or photos sent via email to a structured cloud storage.

## How It Works
This workflow operates in three main steps:

**Gmail New Email Trigger**:

The workflow starts with a Gmail Trigger node, set to monitor for new emails in your specified Gmail inbox (e.g., your primary inbox).

It checks for emails that contain attachments.

Conditional Check (Optional but Recommended):

An If node checks if the email actually has attachments. This prevents errors if an email without an attachment somehow triggers the workflow.

**Upload to Google Drive**:

A Google Drive node receives the email data and its attachments.

It's configured to upload these attachments to a specific folder in your Google Drive.

The attachments are named dynamically based on their original filenames.

## Setup Steps
To get this workflow up and running, follow these instructions:

Step 1: Create Gmail and Google Drive Credentials in n8n

In your n8n instance, click on Credentials in the left sidebar.

Click New Credential.

Search for and select "Gmail OAuth2 API" and follow the authentication steps with your Google account. Save it.

Click New Credential again.

Search for and select "Google Drive OAuth2 API" and follow the authentication steps with your Google account. Save it.

Make note of the Credential Names (e.g., "My Gmail Account", "My Google Drive Account").

Step 2: Create a Destination Folder in Google Drive

Go to your Google Drive (drive.google.com).

Create a new folder where you want to save the email attachments (e.g., Email Attachments Archive).

Copy the Folder ID from the URL (e.g., https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE).

## 📊 Basic Information

- **Workflow ID:** 6466
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 2003
- **Downloads:** 200
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6466)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **googleDrive** 
- **gmailTrigger** 
- **if** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
