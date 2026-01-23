# Manage WhatsApp chats centrally on Slack

> This workflow enables seamless, bidirectional communication between WhatsApp and Slack using n8n. It automates the reception, processing, and forwarding of messages (text, media, and documents) between users on WhatsApp and private Slack channels.

**Key Features & Flow:**

**1. WhatsApp to Slack Flow**
- Trigger: The workflow starts with a WhatsApp Trigger node that listens for new incoming messages via a webhook.
- Channel Handling: It checks if a Slack channel with the WhatsApp sender’s number exists
- If not, it creates a private Slack channel with the sender's number as the name.
- Message Type Routing: A Switch Node (Message Type) inspects the message type (text, image, audio, document).
- Based on type: Text: Sends the message directly to Slack.
- Image/Audio/Document: Retrieves media URL via WhatsApp API → downloads the media → uploads it to the appropriate Slack channel.

**2. Slack to WhatsApp Flow**
- Trigger: A Slack Trigger listens for new messages or file uploads in Slack.
- Message Type Routing: A second Switch Node (Checking Message Type) checks if the message is text or media.
- Routing Logic: Text Message: Extracts and forwards it to the WhatsApp contact (identified by the Slack channel name).
- Media/File Message: Retrieves media file URL from Slack → downloads it → sends it as a document via WhatsApp API.

**Key Integrations:** 
- WhatsApp Cloud API: For receiving messages, downloading media, and sending messages.
- Slack API: For creating/getting channels, posting messages, and uploading files.
- HTTP Request Node: Used to securely download media from Slack and WhatsApp servers with proper authentication.

**Automation Use Case:**
This workflow is ideal for businesses that handle customer support or conversations over WhatsApp and wish to log, respond, and collaborate using Slack as their internal communication tool.



## 📊 Basic Information

- **Workflow ID:** 4037
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 1684
- **Downloads:** 168
- **Created:** 2025/5/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4037)

## 👤 Author

- **Name:** Usman Liaqat
- **Username:** @usmanliaqat

## 🏷️ Categories

- Support Chatbot

## 🔗 Nodes Used

- **whatsAppTrigger** 
- **slack** (×6)
- **slackTrigger** 
- **switch** (×2)
- **whatsApp** (×5)
- **filter** 
- **httpRequest** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
