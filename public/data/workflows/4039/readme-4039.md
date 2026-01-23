# Download media files from Slack messages

> **Description:**
This n8n workflow helps you capture Slack messages via a webhook and download attached media files (like images, documents, or videos) directly from those messages.

**How it works:**
- Slack Trigger (Webhook) – Listens for new messages in a Slack channel where the app is added.
- HTTP Request – Uses the file's private download URL to retrieve the media securely.

**Use cases:**
- Download files shared by team members in a Slack channel.
- Capture and process media from specific project or support channels.
- Prepare media for later processing, archiving, or review.

**Requirements:**
- Slack app with appropriate permissions (files:read, channels:history, etc.).
- Slack webhook set up to listen to channel messages.
- - Authenticated HTTP request to handle private Slack file URLs.

This template is ideal for users who want full control over file handling triggered by real-time Slack messages.

## 📊 Basic Information

- **Workflow ID:** 4039
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 1607
- **Downloads:** 160
- **Created:** 2025/5/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4039)

## 👤 Author

- **Name:** Usman Liaqat
- **Username:** @usmanliaqat

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **slackTrigger** 
- **httpRequest** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
