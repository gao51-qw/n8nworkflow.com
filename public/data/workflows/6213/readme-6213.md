# Reactivate solar leads with AI-powered SMS, email & Google Sheets automation

> ## ⚡ Solar Lead Reactivation Automation

This workflow helps solar sales teams reactivate cold leads automatically using value-first SMS follow-ups, AI-powered sentiment detection, real-time alerts, and CRM tracking.

It’s designed to recover lost revenue, reduce manual outreach, and book more consultations—on autopilot.

## ✅ What It Does:
Monitors your Google Sheet for leads marked "Ready for Reactivation"
Sends personalized SMS messages via Twilio based on savings & ZIP code
Waits and escalates: Follow-up SMS → Email → Final urgency SMS
Parses all SMS replies using AI sentiment detection
Updates your Google Sheet with status, response, and timestamps
Sends Telegram alerts for hot leads or unclear replies
Updates HubSpot CRM (optional)

## 🛠️ Setup Steps:
Import the workflow into your n8n instance
Connect your accounts:
Google Sheets
Twilio (SMS)
Telegram (optional)
HubSpot (optional)
Use the included Google Sheet template and paste your leads
In Twilio, set your webhook to:
https://your-n8n-domain/webhook/sms-reply-handler
Method: POST
Set lead status to “Ready for Reactivation” and watch automation begin!
## 💼 Requirements:
Twilio account with SMS credits
Google Sheet with columns like: Lead Name, Phone, ZIP Code, etc.
Optional: Telegram Bot for alerts, HubSpot CRM token
Need help? Contact: David@daexai.com
For advanced setups or white-label solar workflows, reach out.

## 📊 Basic Information

- **Workflow ID:** 6213
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 161
- **Downloads:** 16
- **Created:** 2025/7/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6213)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Lead Nurturing
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **code** (×3)
- **splitInBatches** 
- **googleSheets** (×5)
- **twilio** (×5)
- **wait** (×4)
- **emailSend** 
- **webhook** 
- **openAi** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
