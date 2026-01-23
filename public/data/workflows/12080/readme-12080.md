# Run A/B-tested email campaigns using Gmail, Google Sheets, and Slack

> 
Run professional email campaigns with A/B testing, Google Sheets tracking, and Slack analytics.
FEATURES:

A/B testing with automatic 50/50 split
Email validation and deduplication
Batch processing with anti-spam delays
Professional HTML email templates
Complete campaign tracking and logging
Real-time Slack notifications

WORKFLOW:

Trigger campaign (manual, scheduled Monday 9AM, or webhook)
Read and validate contacts from Google Sheets
Assign A/B variants automatically
Send personalized HTML emails via Gmail
Log results and update contact status
Slack notifications on start/completion/errors

SETUP:

Create Google Sheet with 4 tabs:

Contacts: name, email, segment, sent, unsubscribed, sent_date, campaign, variant, error_msg
Campaigns: Campaign ID, Name, Start Date, Total Contacts, Valid, Invalid, Already Sent, Unsubscribed, Variant A, Variant B, Status, End Date, Duration
Send Log: Timestamp, Campaign ID, Email, Name, Variant, Subject, Status
Metrics: Campaign ID, Opens, Clicks, Unsubscribes


Replace YOUR_DOCUMENT_ID in all Sheets nodes
Connect Gmail credentials
Connect Slack (#marketing, #errors channels)

CUSTOMIZABLE:

Company name, colors, logo in Configure Campaign node
Email content and design in Prepare Email node
A/B test subjects
Batch size and delays

IDEAL FOR:
Newsletters, product launches, marketing campaigns, announcements, and any bulk email needs.

## 📊 Basic Information

- **Workflow ID:** 12080
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 19
- **Downloads:** 1
- **Created:** 2025/12/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12080)

## 👤 Author

- **Name:** Manu
- **Username:** @manu

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **manualTrigger** 
- **scheduleTrigger** 
- **webhook** 
- **code** (×7)
- **googleSheets** (×7)
- **slack** (×3)
- **if** 
- **splitInBatches** 
- **gmail** 
- **wait** 
- **errorTrigger** 
- **noOp** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
