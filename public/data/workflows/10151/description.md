## 📊 Description
Streamline sales prioritization by automatically identifying, scoring, and routing high-value leads from GoHighLevel CRM to your sales team. This workflow scores contacts daily, flags top prospects, alerts sales reps in Slack, logs data to Google Sheets, and schedules instant follow-ups in Google Calendar — ensuring no valuable lead slips through the cracks. 🚀📈

## What This Template Does
- Triggers daily at 8:00 AM to fetch all contacts from GoHighLevel CRM. ⏰
- Processes lead data and extracts key details from custom fields. 🧩
- Calculates lead scores using your predefined CRM field mappings. 🔢
- Filters out incomplete or invalid contacts to ensure clean data flow. 🧼
- Identifies high-value leads with a score above 80 for immediate attention. 🎯
- Sends real-time Slack alerts to sales teams with contact and lead score details. 💬
- Logs high-priority leads into a dedicated Google Sheet for tracking and analytics. 📊
- Creates automatic Google Calendar follow-up events within 1 hour of detection. 📅

## Key Benefits
✅ Automatically surfaces top leads for faster follow-up
 ✅ Keeps sales teams aligned through instant Slack alerts
 ✅ Eliminates manual data review and prioritization
 ✅ Centralizes performance tracking via Google Sheets
 ✅ Ensures consistent follow-up with Google Calendar scheduling
 ✅ Fully customizable lead score threshold and timing

## Features
- Daily scheduled trigger (8:00 AM)
- GoHighLevel CRM integration for contact retrieval
- Smart lead scoring via custom field mapping
- Conditional filtering for high-value leads
- Slack alert system for real-time engagement
- Google Sheets logging for transparency and analytics
- Auto-created Google Calendar events for follow-ups

## Requirements
- GoHighLevel API credentials with contact read permissions
- Slack Bot token with chat:write access
- Google Sheets OAuth2 credentials
- Google Calendar OAuth2 credentials
- Defined custom fields for Lead Score and Assigned Representative in GoHighLevel

## Target Audience
- Sales and business development teams tracking high-value leads
- Marketing teams optimizing lead qualification and follow-up
- Agencies using GoHighLevel for CRM and lead management
- Operations teams centralizing sales activity and analytics

## Step-by-Step Setup Instructions
- Connect your GoHighLevel OAuth2 credentials and ensure contact API access.
- Replace placeholder custom field IDs (Lead Score & Assigned Rep) in the Code node.
- Add your Slack channel ID for team notifications.
- Connect your Google Sheets document and replace its Sheet ID in the workflow.
- Link Google Calendar for automatic follow-up event creation.
- Adjust the lead score threshold (default: 80) if needed.
- Run a manual test to verify data flow, then enable the daily trigger for automation.
