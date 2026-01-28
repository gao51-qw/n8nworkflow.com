# Automate restaurant reservations with AI on WhatsApp and Google Sheets

> Streamline restaurant reservations on WhatsApp

## Overview

This n8n template automates table bookings via WhatsApp, letting users request, confirm, and manage reservations without manual intervention. It leverages AI to parse messages, apply group discounts, check availability, and send natural confirmations—all within a single, reusable workflow.

## Key Features

* **AI‑powered parsing & responses**: Extracts guest name, date, time, and party size from free‑form WhatsApp messages and generates friendly confirmations..
* **Availability lookup**: Integrates with Google Sheets, Airtable, or MySQL to verify slot availability in real time.
* **Automated reminders**: Optionally schedules follow‑up messages 24 hours before the booking.
* **Modular design**: Swap triggers, storage, or messaging nodes to fit your infrastructure.

## How It Works

1. **Trigger**: Incoming WhatsApp message via WhatsApp Business Cloud API.
2. **Parse & Validate**: AI Function node extracts intent and guest details.
4. **Calculate Discount**: Custom Function node computes group discount.
5. **Compose Confirmation**: Open Ai text model generates a personalized response.
6. **Send Message**:Request node posts back to WhatsApp.
7. **Optional Reminder**: Wait node + HTTP Request for pre‑booking follow‑up.

## Requirements

* WhatsApp Business Cloud API access
* n8n Cloud or self‑hosted instance
* Reservation datastore (Google Sheets, Airtable, MySQL)
* Open ai  key for AI text generation

## Customization Tips

* **Menu Attachments**: Add media nodes to send PDFs or images.
* **Alternate Slot Suggestions**: Use AI to propose new times if a slot is full.
* **Upsell Offers**: Follow up with add‑on suggestions (e.g., wine pairings).
* **Localization**: Extend prompts for multilingual support.
![Screenshot 20250724 161418.png](fileId:1853)

## 📊 Basic Information

- **Workflow ID:** 6379
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 4481
- **Downloads:** 448
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6379)

## 👤 Author

- **Name:** Basil Irfan
- **Username:** @basil

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **whatsApp** (×3)
- **whatsAppTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleSheetsTool** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **filter** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×7)
- **googleSheets** (×3)
- **scheduleTrigger** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
