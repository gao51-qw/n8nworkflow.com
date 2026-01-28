# Automate Instagram reel downloads with Google Drive storage & Telegram alerts

> ## Instagram Reel Downloader & Logger
Automate Instagram Reel Downloads, Storage, and Activity Logging

### What does this workflow do?

- Handles incoming webhook requests (ideal for Instagram/Facebook API triggers).
- Validates the webhook via challenge-response and custom verify token.
- Checks for messages from yourself (filtering automated/self-triggered runs).
- Downloads Instagram Reels from URLs posted to the webhook.
- Uploads the reel to Google Drive and retrieves the download URL.
- Logs reel details (status, URL, and timestamp) to a Google Sheet for record-keeping.
- Notifies you on Telegram with the download details and Google Drive link.

### How does it work?

- Webhook: Listens for new messages/events (custom webhook endpoint for Meta).
- Validation: Confirms webhook subscribe/challenge and verify token from Meta API.
- Sender Check: Ignores messages unless they match your configured sender/recipient.
- Download Reel: Fetches the reel/attachment from Instagram using received URLs.
- Timestamp Gen: Adds a precise timestamp and ISO-based unique ID to the activity log.
- Upload to Drive: Saves the downloaded reel in a preset Google Drive folder.
- Log to Sheet: Updates a Google Sheet with the reel’s status, URL, and timestamp.
- Telegram Alert: Instantly notifies you when a new reel is downloaded and logged.

### What do I need to make this work?

- A registered webhook endpoint (from your Meta/Instagram app configuration). 
- A Google Drive and Google Sheets account (OAuth2 connected to n8n).
- A Telegram Bot and Chat ID setup to receive download completion messages.
- The correct verify_token in your webhook event source matches your template (‘youtube-automation-n8n-token’ by default).
- Update your Drive/Sheet/Bot credentials as per your n8n instance’s environment.

### Why use this?

- Fully automates the collection and archival of Instagram Reels.
- Centralizes content download, backup, and activity records for your automation flows.
- Provides instant monitoring and archival of each event.

### Setup Tips:

- Make sure your webhook path and Meta app configuration match (/n8n-template-insta-webhook).
- Double-check the Google credentials and the sheet’s tab IDs/names.
- Replace the Telegram and Google connection credentials with your own securely.

Use this as a foundation for any Instagram/Facebook-based automations in n8n,
and customize as your automation stack evolves!

Publish confidently, and let users know this template:

Saves time, automates digital content management, and notifies users in real-time.

## 📊 Basic Information

- **Workflow ID:** 8257
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 915
- **Downloads:** 91
- **Created:** 2025/9/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8257)

## 👤 Author

- **Name:** Aryan Shinde
- **Username:** @shindearyan

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **webhook** 
- **if** (×2)
- **respondToWebhook** 
- **httpRequest** 
- **googleSheets** 
- **code** 
- **telegram** 
- **googleDrive** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
