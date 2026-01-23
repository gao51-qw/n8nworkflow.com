## ⚡ Solar Lead Reactivation Automation

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