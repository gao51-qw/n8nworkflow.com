# Capture and score multi-channel leads with GPT-4, Gmail and Google Sheets

> Complete AI-powered sales system
Automates lead capture, qualification, and follow-up from multiple channels.
AI INTELLIGENCE:

Automatic GPT-4 analysis
Detects: sentiment, urgency, intent, budget signals
Identifies pain points and interests
Generates personalized responses

LEAD SCORING ENGINE:
Score 0-100 based on 10+ variables:

Channel (Referral +30, LinkedIn +25, WhatsApp +20, Web Form +15, Email +10)
Positive sentiment (+15)
High urgency (+25)
Purchase intent (+30)
High budget (+20)
Decision maker (+20)
Engagement (+5 per interaction, max 25)

MULTI-CHANNEL INPUT:

Gmail (incoming emails)
Webhook for web forms
Webhook for WhatsApp/Telegram
All normalized to unified format

SMART ROUTER - 5 FLOWS:

Schedule Demo: Hot lead with Calendly CTA
Send Info: Informative response
Create Task: Slack notification for call
Nurturing: Cold lead, value-driven email
Disqualify: Invalid lead

AUTO CRM:

Detects new vs existing leads
Stores last 10 interactions history
Updates score and stage automatically
Complete interaction log

HOT LEAD ALERTS (Score 70+):
Instant Slack notification with lead data, company, score, stage, intent, urgency, pain points, and AI summary.
AUTO-NURTURING (Daily 10AM):

Filters leads with score 20-60
No contact in 3+ days
AI personalized follow-up emails
Max 10 per day

WEEKLY REPORT (Monday 9AM):

Total and new leads
Active hot leads count
Average score
Distribution by stage and channel

SETUP:

Google Sheets with 3 tabs: Leads, Interactions, Tasks
OpenAI API Key
Gmail connected
Slack channels: #sales, #errors

IDEAL FOR:

B2B Startups
Digital agencies
Consulting firms
SaaS companies
Any business with multi-channel leads

Replaces HubSpot, Pipedrive, Close.io - 100% customizable, no monthly fees.

## 📊 Basic Information

- **Workflow ID:** 12082
- **Complexity:** advanced
- **Node Count:** 48
- **Views:** 0
- **Downloads:** 0
- **Created:** 2025/12/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12082)

## 👤 Author

- **Name:** Manu
- **Username:** @manu

## 🏷️ Categories

- Lead Generation
- AI Chatbot

## 🔗 Nodes Used

- **gmailTrigger** 
- **webhook** (×2)
- **scheduleTrigger** (×2)
- **code** (×11)
- **if** (×3)
- **googleSheets** (×6)
- **@n8n/n8n-nodes-langchain.openAi** (×5)
- **switch** 
- **gmail** 
- **slack** (×4)
- **errorTrigger** 
- **noOp** (×2)
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 48 nodes with 34 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
