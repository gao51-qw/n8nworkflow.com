## Description
This workflow automatically detects bounced or invalid email addresses from your Gmail inbox and updates their status in Google Sheets. It fetches bounce notifications, extracts failed email addresses, and matches them against your contact list to update each record’s status as “Not Found” (bounced) or “Not Sent” (no bounce). Additionally, it runs a daily scheduled summary that sends bounce statistics to Slack, helping marketing or sales teams maintain clean, up-to-date mailing lists.

## What This Template Does (Step-by-Step)
- 📬 Fetch Bounce Notifications from Gmail
-  Retrieves bounce messages automatically filtered by sender mailer-daemon@googlemail.com.
- 🔢 Get Latest 5 Bounces
-  Sorts all bounce emails by date and limits processing to the five most recent to keep performance fast and focused.
- 🔍 Parse Bounced Email Addresses
-  Extracts failed email addresses from Gmail message snippets using regex pattern matching.
- 📋 Fetch All Email Contacts from Google Sheets
-  Loads all contact records from your “Fraud Email” sheet, including columns like Name, Email, Status, and Last Updated.
- 🔗 Combine Bounce Data with Contact List
-  Merges parsed bounce results with your existing contact data to prepare for status updates.
- ✅ Match & Update Contact Status
  - Marks “Not Found” for bounced emails.
  - Marks “Not Sent” for valid but inactive ones.
  - Updates “Last Updated” timestamp for all.
- 💾 Write Updated Status Back to Sheet
-  Pushes updated contact information (Status and Last Updated) back into Google Sheets, ensuring centralized record accuracy.
- ⏰ Daily 7PM Trigger
-  Automatically starts the summary workflow every evening at 7:00 PM.
- 🧮 Calculate Summary Statistics
-  Counts total invalid emails (“Not Found”) and inactive ones (“Not Sent”).
  - 💬 Send Slack Daily Summary
  -  Sends a formatted report to your #email-cleanup Slack channel showing:
  - 📧 Invalid email count
  - 📭 No activity count
  - ✅ Reminder to maintain list hygiene

## Prerequisites
- Gmail account connected with n8n
- Google Sheet (Fraud Email) with contact data
- Slack workspace and channel for daily reports
- n8n instance (cloud or self-hosted)

## Step-by-Step Setup
- Connect Gmail → Fetch bounce notifications.
- Add Google Sheet → Load and update contact data.
- Parse bounces → Identify failed email addresses.
- Merge & update → Sync statuses in Google Sheet.
- Enable daily trigger → Schedule Slack summaries.

## Customization Ideas
🎯 Expand bounce limit beyond 5 recent messages.
 📢 Add a Gmail label like “Bounced” after processing.
 📚 Integrate with HubSpot or Airtable for CRM sync.
 💡 Include timestamps or sender domains in Slack summary.

## Key Benefits
✅ Keeps mailing lists accurate and deliverable
 ✅ Saves hours of manual bounce management
 ✅ Automates email hygiene with zero supervision
 ✅ Provides transparent daily Slack reports
 ✅ 100% automated, efficient, and scalable

## Perfect For
👥 Marketing and outreach teams managing bulk campaigns
 🏢 Businesses maintaining verified contact databases
 📊 Sales teams using Gmail and Google Sheets
 ⚙️ Agencies ensuring top-tier email deliverability