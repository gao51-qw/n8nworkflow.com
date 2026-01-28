# Handle Calendly bookings, cancellations and reschedules with Gmail, Google Calendar, Sheets and Slack

> Complete Calendly automation that handles confirmations, cancellations and reschedules in a single workflow.
WHAT IT DOES:

Logs all meetings to Google Sheets automatically
Creates events in organizer's Google Calendar
Sends professional HTML emails to guests
Notifies your team on Slack (#meetings)
Handles errors with Slack alerts (#errors)

INCLUDED FLOWS:

New booking: Sheets + Calendar + Slack + Confirmation email
Cancellation: Sheets (updates status) + Slack + Cancellation email
Reschedule: Sheets + Slack + Email with new date/time

SETUP:

Connect Google Sheets (create sheet with columns: Event ID, Date Logged, Name, Email, Meeting Type, Date, Time, Status, Meeting URL, Timezone)
Connect Google Calendar
Connect Slack (create channels #meetings and #errors)
Connect Gmail
Configure webhook in Calendly &gt; Integrations &gt; Webhooks

CUSTOMIZABLE:
Emails include professional HTML design with editable colors and text directly in the code nodes.
IDEAL FOR:
Consultants, coaches, agencies and sales teams using Calendly.

## 📊 Basic Information

- **Workflow ID:** 12079
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 3
- **Downloads:** 0
- **Created:** 2025/12/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12079)

## 👤 Author

- **Name:** Manu
- **Username:** @manu

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **webhook** 
- **code** (×5)
- **switch** 
- **googleSheets** (×3)
- **googleCalendar** 
- **slack** (×4)
- **gmail** (×3)
- **noOp** (×3)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
