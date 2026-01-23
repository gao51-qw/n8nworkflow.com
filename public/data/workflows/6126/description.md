This automated n8n workflow generates social media briefs for sales meetings by integrating with Google Calendar, enriching attendee data, and leveraging AI to summarize social media activity. The system delivers formatted summaries via email and WhatsApp to support sales preparation.

## Good to Know
- The workflow triggers daily at 5 AM
- Attendee data enrichment enhances meeting context
- AI-driven insights improve sales readiness
- Summaries are sent via email and WhatsApp

## How It Works
- **Schedule Trigger - 5 AM** - Initiates the workflow daily at 5 AM
- **Initialize Workflow** - Sets up the workflow manually
- **Fetch Today's Meetings from Google Calendar** - Retrieves scheduled meetings for the day
- **Extract Attendees Email Domains** - Identifies email domains of meeting attendees
- **Loop Through Attendees** - Iterates through each attendee for processing
- **Split Attendee Details** - Separates individual attendee details
- **Enrich Attendee Company Enrichment** - Enhances data with company information
- **Wait for Company Enrichment** - Pauses to ensure company data is processed
- **Check Enrichment Status** - Verifies the status of enriched data
- **Fetch Latest LinkedIn Posts** - GET request to fetch LinkedIn posts
- **Extract Key Post Insights** - Extracts key insights from social media posts
- **Summarize Social Activity with AI** - Summarizes social media activity using AI
- **Merge Summary with (Decide)** - Combines summary with other data
- **Format Email Summary for Complete Chat** - Formats the summary for email
- **Wait Before Sending** - Adds a delay before sending
- **Generate HTML Email Template** - Creates an HTML email template
- **Send via Gmail** - Sends the email summary
- **Send WhatsApp Message** - Sends the summary via WhatsApp

## How to Use
- Import the workflow into n8n
- Configure Google Calendar API credentials
- Set up LinkedIn API or scraping credentials
- Configure email and WhatsApp credentials
- Test the workflow with a sample meeting to verify data flow
- Adjust the trigger time or delay as needed

## Requirements
- Google Calendar API credentials
- LinkedIn API or scraping access
- Email service credentials (Gmail, SMTP, etc.)
- WhatsApp API or integration credentials

## Customizing This Workflow
- Modify the trigger time in the Schedule Trigger node to suit your schedule
- Adjust the Wait nodes to optimize data processing
- Customize the AI summarization logic in the Summarize Social Activity node for specific insights