# Sync AI-enriched TimeRex bookings to Google Sheets and Slack with Gemini

> # TimeRex AI-Powered Booking Automation

## Description (for n8n template submission)

Transform your TimeRex booking management with AI-powered automation. This workflow automatically processes bookings, enriches data with AI insights, and keeps your team informed via Slack—all in real-time.

### What This Workflow Does

**🤖 AI-Powered Intelligence**
- **Smart Company Detection**: Automatically identifies company names from guest email domains
- **Booking Categorization**: Uses Google Gemini to classify bookings (Sales/Support/Interview/Partnership/Media)
- **Meeting Brief Generation**: AI creates actionable preparation notes for hosts before each meeting

**⚡ Automated Processing**
- Receives webhooks from TimeRex for confirmed and cancelled bookings
- Validates requests with security token verification
- Logs enriched booking data to Google Sheets
- Sends detailed Slack notifications with AI-generated insights

**🛡️ Security & Reliability**
- Token-based webhook authentication
- Security alerts for unauthorized access attempts
- Automatic cancellation handling with data cleanup

### Use Cases

- **Sales Teams**: Automatically categorize leads and prepare meeting briefs
- **Recruitment**: Streamline interview scheduling with AI-powered candidate insights
- **Customer Success**: Track support meetings and prepare context for calls
- **Media Relations**: Manage press interviews with automated briefings

### How It Works

1. TimeRex sends a webhook when a booking is confirmed or cancelled
2. Security token is verified (failed attempts trigger Slack alerts)
3. For confirmed bookings:
   - Media source is detected from calendar name
   - Company name is extracted from email domain
   - AI categorizes the booking purpose
   - AI generates a meeting preparation brief
   - Enriched data is saved to Google Sheets
   - Slack notification is sent with AI insights
4. For cancellations:
   - Booking is found by Event ID
   - Row is deleted from Google Sheets
   - Cancellation alert is sent to Slack

### Setup Instructions

1. **Webhook Configuration**
   - Copy the webhook URL from the "TimeRex Webhook" node
   - Paste it in TimeRex Settings → Webhook

2. **Security Token**
   - Copy your TimeRex security token
   - Update the `Verify Security Token` node with your token

3. **Google Sheets**
   - Create a spreadsheet with these columns:
     `event_id`, `booking_date`, `guest_name`, `guest_email`, `calendar_name`, `meeting_url`, `host_name`, `media_source`, `company_name`, `booking_category`, `ai_meeting_brief`, `created_at`
   - Update all Google Sheets nodes with your Sheet ID

4. **AI Credentials**
   - Connect your Google Gemini API credentials to both AI model nodes

5. **Slack**
   - Connect your Slack account
   - Select your notification channel in all Slack nodes

6. **Activate**
   - Turn on the workflow and start receiving AI-enhanced booking notifications!

### Requirements

- TimeRex account with webhook access
- Google Cloud account (for Sheets & Gemini API)
- Slack workspace
- n8n instance (self-hosted or cloud)

### Customization Tips

- Modify the `Filter by Calendar Type` node to match your calendar naming convention
- Adjust AI prompts in the LLM Chain nodes for different categorization or brief styles
- Add more media sources to the Media Master sheet for accurate source tracking
- Extend the workflow with email confirmations or calendar event creation

---

## Short Description (100 characters max)

Automate TimeRex bookings with AI-powered categorization, meeting briefs, and Slack notifications.

---

## Categories

- Sales
- Productivity
- AI
- Scheduling

---

## Tags

TimeRex, Booking, AI, Google Gemini, Slack, Google Sheets, Automation, Meeting Management, LLM, Scheduling


## 📊 Basic Information

- **Workflow ID:** 12063
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 3
- **Downloads:** 0
- **Created:** 2025/12/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12063)

## 👤 Author

- **Name:** Oka Hironobu
- **Username:** @okp29

## 🏷️ Categories

- Lead Nurturing
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **googleSheets** (×4)
- **code** (×3)
- **stickyNote** (×4)
- **switch** (×2)
- **if** 
- **slack** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
