**Description:**
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