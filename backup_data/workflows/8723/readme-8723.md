# Automate 30-day coach training with SMS, Twilio & Google Sheets

> # Coach Onboarding & Training Automation - Setup Guide

## Prerequisites
- n8n instance (self-hosted or cloud)
- Google Sheets account
- Twilio account with SMS-enabled phone number

## Setup Steps

### 1. Configure Settings Node
Update the "Configuration Settings" node with:
- `GOOGLE_SHEET_ID`: Your Google Sheets ID from the URL
- `TWILIO_PHONE_NUMBER`: Your Twilio number (format: +1XXXXXXXXXX)
- `BUSINESS_NAME`: Your company name
- `TRAINING_PROGRAM_NAME`: Your program name
- `MAIN_PRODUCT_NAME`: Your main product/service

### 2. Create Google Sheets Database

Create a new Google Sheet with 2 tabs:

**Sheet1 (Coaches) - Column headers:**

Name | Phone | Email | Goals | Status | Start Date | Current Day | Last Contact

**Sheet2 (Training Content) - Column headers:**

Day | Topic | Message | Audio_URL

Add your 30-day training content to Sheet2 (rows 1-30).

### 3. Setup Credentials in n8n

**Google Sheets OAuth2 API:**
- Name: "Google Sheets account"
- Follow Google OAuth setup in n8n

**Twilio API:**
- Name: "Twilio account"
- Account SID: Your Twilio SID
- Auth Token: Your Twilio Auth Token

### 4. Configure Webhooks

**Registration Webhook:** `/webhook/coach-registration`
- Accepts POST with: name, phone, email, goals

**Response Webhook:** `/webhook/coach-response`
- Configure in Twilio for incoming SMS

### 5. Activate Workflow

Enable the workflow and test with sample data.

## Testing

Test registration:
```bash
curl -X POST https://your-n8n-url/webhook/coach-registration \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Coach","phone":"5551234567","email":"test@example.com","goals":"Test goals"}'

Troubleshooting
SMS not sending:

Verify Twilio credentials
Check phone number format (+1XXXXXXXXXX)
Confirm Twilio account has balance

Google Sheets errors:

Verify OAuth permissions
Check column names match exactly
Ensure Sheet ID is correct

Daily automation not running:

Check cron schedule is active
Verify timezone settings
Confirm coaches have "active" status

### 3. **description.md** - Marketplace Description
(Use the marketplace description from artifact #2, or create a shorter version):
```markdown
# Coach Onboarding & Training Automation

Automate coaching business onboarding with SMS-based 30-day training programs.

## Features
- Automated coach registration via webhook
- Daily training SMS delivery (9 AM)
- Smart keyword auto-responses
- Progress tracking in Google Sheets
- Weekly motivation messages
- Audio lesson support
- SMS compliance (STOP handling)

## Use Cases
- Business coaches scaling onboarding
- Sales trainers automating team development
- Course creators with SMS follow-up
- Network marketing team training

## Requirements
- Google Sheets account
- Twilio account with SMS number

4. OPTIONAL: Screenshots
If possible, include:

Workflow overview screenshot
Sample Google Sheets structure
Example SMS messages received




## 📊 Basic Information

- **Workflow ID:** 8723
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 53
- **Downloads:** 5
- **Created:** 2025/9/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8723)

## 👤 Author

- **Name:** Ronnie Craig
- **Username:** @ronnie-craig-2025

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×8)
- **set** 
- **webhook** (×2)
- **code** (×5)
- **googleSheets** (×8)
- **twilio** (×5)
- **wait** 
- **if** (×2)
- **respondToWebhook** (×2)
- **scheduleTrigger** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
