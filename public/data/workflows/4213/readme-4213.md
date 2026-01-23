# Automatic media download from WhatsApp Business messages with HTTP storage

> This workflow listens for incoming WhatsApp messages that contain media (e.g., images) and automatically downloads the media file using WhatsApp's private media URL.

- The trigger node activates when a WhatsApp message with media is received.
- The media ID is extracted from the message payload.
- A private media URL is retrieved using the media ID.
- The media file is downloaded using an authenticated HTTP request.


Ideal for:
- Archiving WhatsApp media to external systems.
- Triggering further automations based on received media.
- Integrating with cloud storage like Google Drive, Dropbox, or Amazon S3.


Set up steps
- Connect your WhatsApp Business API account.
- Add HTTP credentials for downloading media via private URL.
- Set up the webhook in your WhatsApp Business account.
- Extend the workflow as needed for your use case (e.g., file storage, alerts).

## 📊 Basic Information

- **Workflow ID:** 4213
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 2342
- **Downloads:** 234
- **Created:** 2025/5/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4213)

## 👤 Author

- **Name:** Usman Liaqat
- **Username:** @usmanliaqat

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **stickyNote** (×3)
- **whatsAppTrigger** 
- **whatsApp** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
