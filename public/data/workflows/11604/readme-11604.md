# Interactive recruitment customer service with WhatsApp, Google Sheets CRM & notifications

> # 👔 Recruitment Office WhatsApp Automation

Automate WhatsApp communication for recruitment agencies with an interactive, structured customer experience. This workflow handles pricing inquiries, request submissions, tracking, complaints, and human escalation while maintaining full session tracking and media support.

## Good to know

- Uses WhatsApp Interactive List Messages for user selection and navigation.
- Includes session-state logic and memory across messages.
- Includes a 5-minute cooldown to avoid spam and repeated triggers.
- Supports logging for all interaction types including media files.
- Includes both a global bot shutdown switch and per-user override.

## How it works

- A customer sends a message to the official WhatsApp number.
- The workflow replies with an interactive menu containing 8 service options:
  - 💰 Pricing by nationality (8 supported countries)
  - 📝 New recruitment request submission
  - 🔍 Tracking existing applications via Google Sheets lookup
  - 🔁 Worker transfer link distribution
  - 🌍 Translation service information
  - 📄 Required documents and instructions
  - ⚠️ Complaint submission and routing
  - 👤 Request a human agent
- The workflow retrieves or stores data based on the selection using Google Sheets and Data Tables.
- If the customer requests human help or the logic detects uncertainty, the workflow:
  - Pauses automation for that user
  - Notifies a designated staff member
- All interactions are logged including files, text, timestamps, and selections.

## Features

- 📋 Structured WhatsApp service menu
- 📄 CRM-style recruitment request logging
- ✨ Pricing logic with nationality mapping
- 🔍 Lookup-based status tracking
- 📎 Support for media uploads (PDF, images, audio, documents)
- 🧠 Session tracking with persistent user state
- 🤝 Human escalation workflow with internal notifications
- 🛑 Anti-spam and cooldown control
- 🎚 Bot master switch (global + per-user)

## Technology stack

| Component | Usage |
|----------|-------|
| n8n | Automation engine |
| WhatsApp Business API | Messaging and interactive UX |
| Google Sheets | CRM and logs |
| Data Tables | State management |
| JavaScript | Custom logic and routing |

## Requirements

- WhatsApp Business API account with active credentials
- n8n Cloud or self-hosted instance
- Google Sheets for CRM storage
- Data Tables enabled for persistent session tracking

## How to use

- The workflow uses a Webhook trigger compatible with common WhatsApp API providers.
- Modify menu content, pricing, optional steps, and escalation flows as needed.
- Link your Google Sheets and replace test sheet IDs with production values.
- Configure human escalation to notify team members or departments.

## Customising this workflow

- Replace Google Sheets with Airtable, HubSpot, or SQL storage.
- Add expiration and reminder messages for missing documents.
- Add AI-powered response logic for common questions.
- Enable multi-country support (Saudi/UAE/Jordan/Qatar/Kuwait/etc.)
- Connect to dashboards for reporting and staff performance analytics.



## 📊 Basic Information

- **Workflow ID:** 11604
- **Complexity:** advanced
- **Node Count:** 96
- **Views:** 164
- **Downloads:** 16
- **Created:** 2025/12/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11604)

## 👤 Author

- **Name:** Mira Melhem
- **Username:** @melhem

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **code** (×43)
- **if** (×8)
- **httpRequest** (×18)
- **respondToWebhook** (×2)
- **switch** (×2)
- **wait** (×2)
- **googleSheets** (×5)
- **stickyNote** (×9)
- **gmail** (×4)
- **dataTable** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 96 nodes with 80 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
