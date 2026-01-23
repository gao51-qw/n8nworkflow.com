# Automate lead intake & CRM with Tally Forms to Google Sheets and SendGrid emails

> ## Capture leads from Tally forms to Google Sheets CRM

This workflow automates lead intake by capturing form submissions, enriching them with smart tags and scores, storing them in a Google Sheets CRM, and sending personalized welcome emails.

## Who's it for

This template is perfect for solopreneurs, small agencies, and marketing consultants who need a simple yet powerful CRM system without paying for expensive tools like HubSpot or Salesforce. If you're collecting leads through forms and manually copying data to spreadsheets, this automation will save you hours every week.

## What it does

When someone submits your Tally lead capture form, this workflow automatically:

- Generates a unique lead ID and timestamps the entry
- Analyzes their responses to assign relevant service tags (Podcast Lead, Social Content Lead, Video Editing Lead, etc.)
- Calculates an initial lead score based on interest level
- Determines the next follow-up date automatically
- Appends all data to your Google Sheets CRM with proper formatting
- Logs the activity in a separate tracker sheet
- Sends a personalized welcome email tailored to their interests
- Updates the lead status to "Nurturing"

## Requirements

**Apps & Services:**
- Google Sheets (for your CRM database)
- Tally.so or Google Forms (for lead capture)
- SendGrid account (free tier works) for email sending
- n8n instance (cloud or self-hosted)

**Setup needed:**
- Create the Google Sheets CRM structure (4 sheets: Leads, Email Sequence Tracker, Activity Log, Dashboard Data)
- Set up your Tally form with fields: Name, Email, Business Type, Interest Level, Services Needed
- Configure SendGrid API credentials in n8n
- Connect your Google Sheets account to n8n

## How to set up

1. **Copy the Google Sheets template** with all four sheets (Leads, Email Sequence Tracker, Activity Log, Dashboard Data) and set up column headers as specified
2. **Create your Tally form** at tally.so with the required fields, then grab the webhook URL from n8n
3. **Import this workflow** into your n8n instance
4. **Configure credentials** for Google Sheets and SendGrid
5. **Update the webhook URL** in your Tally form settings
6. **Customize the welcome email** in the "Generate Welcome Email" node with your branding
7. **Test with a sample submission** to verify everything flows correctly
8. **Activate the workflow** and start capturing leads

## How to customize

**Modify service tags:** Edit the `serviceTagMap` object in the "Auto-Tag Lead" node to match your specific services.

**Adjust lead scoring:** Change the scoring logic in "Calculate Initial Dates & Score" to prioritize different interest levels or sources.

**Personalize emails:** Update the email templates in "Generate Welcome Email" to match your brand voice and add specific resources or links.

**Add more integrations:** Extend the workflow with Slack notifications, SMS alerts via Twilio, or sync to other tools like Notion or Airtable.

**Change follow-up timing:** Modify the `daysToAdd` calculation to adjust when leads receive their next touchpoint.

**Add conditional paths:** Use IF nodes to route different lead types to different email sequences or team members.

## 📊 Basic Information

- **Workflow ID:** 11233
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 121
- **Downloads:** 12
- **Created:** 2025/11/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11233)

## 👤 Author

- **Name:** Gilbert Onyebuchi
- **Username:** @gilbert-onyebuchi

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **webhook** 
- **code** (×4)
- **googleSheets** (×3)
- **sendGrid** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
