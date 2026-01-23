🧾 Short Description

An AI-powered customer support workflow that automatically triages, summarizes, classifies, and routes tickets to the right Slack and CRM queues. It sends personalized auto-replies, logs results to Google Sheets, and uses a DLQ for failed cases.

⚙️ How It Works

Trigger: Captures messages from email or form submissions.

AI Triage: Summarizes and classifies issues, scores urgency, and suggests next steps.

Routing: Directs to Slack or CRM queue based on type and priority.

Logging: Records summaries, urgency, and responses in Google Sheets.

Auto-Reply: Sends an acknowledgment email with ticket ID and SLA timeframe.

Error Handling: Failed triage or delivery attempts are logged in a DLQ.

🧩 How to Use

1. Configure triggers (email or webhook) and connect credentials for OpenAI, Slack, Gmail, and Google Sheets.

2. In Workflow Configuration, set:

    * Slack Channel IDs

    * CRM Type (HubSpot, Salesforce, or custom)

    * Google Sheet URL

    * SLA thresholds (e.g., 2h, 6h, 24h)

3. Test with a sample ticket and verify routing and summaries in Slack and Sheets.

🔑 Requirements

OpenAI API key (GPT-4o-mini or newer)

Slack OAuth credentials

Google Sheets API access

Gmail/SMTP credentials

CRM API (HubSpot, Salesforce, or custom endpoint)

💡 Customization Ideas

Add sentiment detection for customer tone.

Localize responses for multilingual support.

Extend DLQ logging to Notion or Airtable.

Add escalation alerts for SLA breaches.



