# Sync Google Calendar events to Google Sheets with Slack notifications

> Sync your Google Calendar events with Google Sheets and get daily Slack summaries with meeting statistics.
FEATURES:

Real-time sync of new and updated events
Auto-categorization (Meeting, 1:1, Interview, Demo, Focus Time)
Platform detection (Google Meet, Zoom, Teams)
Daily statistics dashboard
Cancellation tracking
Optional email notifications to attendees

FLOWS:

New Event: Log to Sheets + Slack notification + Optional email
Updated Event: Update Sheets + Slack notification
Canceled Event: Log cancellation + Slack alert
Daily Summary (8AM): Meeting time stats + Schedule to Slack

SETUP:

Connect Google account with Calendar access
Create Google Sheet with 3 tabs:

Events: ID, Synced At, Title, Category, Date, Day, Start Time, End Time, Duration, Platform, Attendees, Status, Meeting Link
Cancellations: ID, Canceled At, Title, Original Date, Original Time, Affected Attendees
Statistics: Date, Total Events, Meeting Time, Minutes, Busy %, Status, Virtual, In-Person


Replace YOUR_DOCUMENT_ID in all Sheets nodes
Connect Slack (#calendar, #errors channels)
Optional: Connect Gmail for attendee notifications

DAILY STATISTICS:

Total events count
Time spent in meetings
Busy percentage of work day
Virtual vs in-person breakdown
Full day schedule

IDEAL FOR:
Anyone wanting to track their calendar, analyze meeting patterns, or get daily schedule summaries on Slack.

## 📊 Basic Information

- **Workflow ID:** 12081
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 17
- **Downloads:** 1
- **Created:** 2025/12/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12081)

## 👤 Author

- **Name:** Manu
- **Username:** @manu

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **googleCalendarTrigger** (×2)
- **scheduleTrigger** 
- **code** (×4)
- **if** (×2)
- **googleSheets** (×3)
- **slack** (×4)
- **gmail** 
- **googleCalendar** 
- **errorTrigger** 
- **noOp** (×3)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
