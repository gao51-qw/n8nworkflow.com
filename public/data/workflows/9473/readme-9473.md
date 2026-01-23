# AI-Powered Dental Appointment System with Telegram, Google Calendar and Sheets

> ## Overview

- This workflow is an **AI-powered Dental Appointment Assistant** that automates appointment booking, rescheduling, and cancellations through **Telegram** or a **Webhook**.  
- It uses intelligent agents to understand user intent, gather details, manage Google Calendar events, update records in Google Sheets, and send confirmation emails — creating a **fully automated and customizable booking system** suitable for **any business**, not just dental clinics.

---

## How It Works

### 1. User Interaction  
- The workflow can be triggered via **Telegram**, **Webhook**, and can easily be extended to **WhatsApp** or **Facebook Messenger**.  
- The **Planning Agent** starts the conversation and collects essential details like:  
  - Appointment type (book, update, or delete)  
  - Date and time preference  
  - Service type or reason for visit  
  - Personal details (name, email, etc.)  
- Based on the user’s intent, it routes the conversation to the appropriate booking flow.

### 2. Booking Flow  
- The **Booking Agent** handles the actual scheduling logic.  
- It interacts with **Google Calendar** to:  
  - **Create new events** for fresh appointments  
  - **Update existing events** for reschedules  
  - **Delete events** for cancellations  
- It ensures proper validation (availability, overlaps, etc.) before confirming any calendar changes.

### 3. Post-Booking Actions  
- Once the booking action is completed:  
  - The **Mail and Sheet Entry Agent** updates the **Google Sheet** with user details such as:  
    - Name  
    - Email  
    - Appointment date & time  
    - Status (booked/updated/cancelled)  
    - Short description of the appointment  
  - Sends an **email confirmation** to the user (for all actions — create, update, or delete).  
  - Sends a **final message** via Telegram (or chosen platform) confirming the status of the appointment.

---

## How to Use  
- Trigger the workflow via **Telegram** or a **Webhook URL**.  
- The AI assistant will guide the user step-by-step through booking, updating, or cancelling an appointment.  
- Once confirmed, the system:  
  - Updates Google Calendar automatically  
  - Logs the appointment details in Google Sheets  
  - Sends an email and chat confirmation message to the user  

---

## Requirements  
To deploy this workflow, you’ll need:  
- **n8n account** (self-hosted or cloud)  
- **Telegram Bot Token**, or other chat integrations (WhatsApp / Facebook)  
- **OpenAI or OpenRouter API Key** (for AI conversation agents)  
- **Google Calendar API access** (to manage events)  
- **Google Sheets API access** (to store booking records)  
- **Gmail / SMTP credentials** (to send confirmation emails)


## 📊 Basic Information

- **Workflow ID:** 9473
- **Complexity:** advanced
- **Node Count:** 53
- **Views:** 327
- **Downloads:** 32
- **Created:** 2025/10/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9473)

## 👤 Author

- **Name:** Aziz B
- **Username:** @azizb28

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **set** (×5)
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **gmailTool** 
- **googleSheetsTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **webhook** 
- **respondToWebhook** (×3)
- **telegramTrigger** 
- **telegram** (×3)
- **switch** (×6)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **executeWorkflowTrigger** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×5)
- **googleCalendar** (×6)
- **if** 
- **stopAndError** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 53 nodes with 36 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
