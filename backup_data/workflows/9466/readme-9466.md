# Automated appointment approval system with GPT-4 Mini, JotForm, and Telegram

> # AI Powered All Purpose Appointment System via JotForm

## What This Workflow Does

This template automates the entire appointment request lifecycle using AI. When someone submits an appointment request through JotForm, the system automatically sends details for approval, generates personalized confirmation or rejection emails using OpenAI, and maintains records—all without manual intervention.

👉 [Get JotForm here](https://www.jotform.com/?partner=roshanramanidev)

Whether you're running a clinic, consulting business, training center, or any service-based operation, this workflow eliminates repetitive email writing and ensures consistent, professional communication. It's fully customizable to work with any appointment form structure.

## Who's It For

- Service providers (consultants, trainers, coaches)
- Healthcare professionals
- Educational institutions
- Salon and wellness businesses
- Event coordinators
- Any business handling appointment requests at scale

## How It Works

1. **Form Submission** – Appointment request arrives via JotForm
2. **Data Extraction** – System pulls name, email, phone, date, time, and visit type
3. **Approval Request** – Details are sent to Telegram for review and approval
4. **AI Email Generation** – OpenAI creates personalized confirmation or rejection email based on approval status
5. **Smart Routing** – If approved: records in Google Sheets and sends confirmation. If rejected: removes from system and sends reschedule notice
6. **Automated Follow-up** – Requester receives professional email instantly

## Getting Started (Quick Setup)

### Step 1: Choose Your JotForm
- Select any existing appointment form or create a new one in JotForm
- The workflow works with any form structure

### Step 2: Map Your Form Fields
- Identify the field names in your JotForm (name, email, phone, appointment date, time, etc.)
- Update the "Parse: Extract Appointment Details" node with your exact field names
- This ensures the workflow reads data correctly from your specific form

### Step 3: Follow Full Setup Steps
1. **Connect JotForm** – Copy the Form ID and API Key
2. **Configure Google Sheets** – Create a sheet for appointment records and copy the spreadsheet ID
3. **Setup Telegram** – Create a bot via BotFather for approval notifications
4. **Add OpenAI Credentials** – Generate an API key at platform.openai.com
5. **Authorize Gmail** – Enable Gmail API in Google Cloud Console

### Why This Is Customizable

The workflow is built to be flexible from the start. Whether your form collects appointment type, service category, special requests, or any other field, you can easily map those fields into the flow. Just identify what data your form collects and tell the workflow where to find it.

## Requirements

- JotForm account with an appointment form
- Google Sheets for record keeping
- Telegram account and bot (for approvals)
- OpenAI API key (paid account recommended)
- Gmail account for sending emails
- n8n instance (self-hosted or cloud)

## How to Customize

- **Change Approval Channel** – Replace Telegram with Slack, Discord, or email by swapping the notification node
- **Modify Email Templates** – Edit the AI prompt in "Generate: Appointment Response Email" to match your tone and branding
- **Add More Fields** – Update the Set node to capture additional information from your JotForm like appointment type, service category, or special requests
- **Adjust Routing Logic** – Modify the conditional node to add approval stages or auto-confirm certain appointment types
- **Connect CRM** – Add steps to automatically create contacts in HubSpot, Pipedrive, or Salesforce
- **Enable Reminders** – Use Gmail or SMS nodes to send appointment reminders 24 hours before scheduled time
- **Extend Data Collection** – Map any custom fields from your JotForm by updating the extraction node to include them

## 📊 Basic Information

- **Workflow ID:** 9466
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 34
- **Downloads:** 3
- **Created:** 2025/10/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9466)

## 👤 Author

- **Name:** Roshan Ramani
- **Username:** @rawsun007

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **jotFormTrigger** 
- **set** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.agent** 
- **if** 
- **googleSheets** 
- **gmail** (×2)
- **httpRequest** 
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
