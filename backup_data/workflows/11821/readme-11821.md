# Automate event registration and QR check-ins with Google Sheets, Gmail, and Slack

> Who is this for?
This template is ideal for event organizers, conference managers, and community teams who need an automated participant management system. Perfect for workshops, conferences, meetups, or any event requiring registration and check-in tracking.
What this workflow does
This workflow provides end-to-end event management with two main flows:
Registration Flow:
⦁	Receives participant registration via webhook
⦁	Generates unique ticket ID and stores in Google Sheets
⦁	Creates QR code using the QR Code node
⦁	Sends confirmation email with QR code attached
Check-in Flow:
⦁	Scans and decodes QR code at venue entrance
⦁	Validates ticket against participant database
⦁	Blocks duplicate check-ins with clear error messages
⦁	Sends Slack notification for VIP arrivals
⦁	Returns real-time attendance statistics
Setup
1.	Create a Google Sheet with columns: Ticket ID, Event ID, Name, Email, Ticket Type, Registered At, Checked In, Check-in Time
2.	Connect your Google Sheets and Gmail credentials
3.	Configure Slack for VIP notifications
4.	Set up the webhook URLs in your registration form
Requirements
⦁	Google Sheets (participant database)
⦁	Gmail account (confirmation emails)
⦁	Slack workspace (VIP notifications)
How to customize
⦁	Add capacity limits by checking row count before registration
⦁	Modify QR code size and format in the QR Code node
⦁	Add additional ticket types beyond VIP/standard
⦁	Integrate with payment systems for paid events


## 📊 Basic Information

- **Workflow ID:** 11821
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 63
- **Downloads:** 6
- **Created:** 2025/12/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11821)

## 👤 Author

- **Name:** masahiro hanawa
- **Username:** @masahiro

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **stickyNote** (×5)
- **webhook** (×2)
- **set** 
- **googleSheets** (×3)
- **code** (×4)
- **httpRequest** 
- **gmail** 
- **respondToWebhook** (×4)
- **if** (×3)
- **slack** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
