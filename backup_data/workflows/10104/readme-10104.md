# Form to meeting: Google Calendar, Zoom, Gmail & Slack booking automation

> **Who’s it for**

Teams that collect meeting requests via a form and want instant, error-free scheduling: customer success, sales, education, agencies, and community managers.

**How it works / What it does**

This workflow ingests a form submission (name, email, preferred date/time), checks Google Calendar for conflicts, and branches automatically. If the slot is free, it creates a calendar event, spins up a Zoom meeting, emails the guest a confirmation, and posts a Slack summary to your team. If busy, it sends a polite “please pick another time” email. Time handling defaults to Asia/Tokyo and converts to ISO internally to keep downstream integrations consistent.

**How to set up**

Import the workflow and rename nodes for clarity if needed.

Open the Workflow Configuration (Set) node and adjust variables (calendar ID, meeting duration, Slack channel, sender info).

Map your form fields in Extract Booking Details.

Connect credentials in each service node (Google Calendar, Zoom, Gmail, Slack).

Test once with a real submission.

**Requirements**

Active accounts and n8n credentials for Google Calendar, Zoom, Gmail, and Slack.

A form or webhook source that sends name, email, and a valid datetime.

How to customize the workflow

Duration & buffers: Change end time calculation in Extract Booking Details.

Time zones: If you accept multiple time zones, normalize before building ISO strings.

Email copy: Personalize confirmation/alternative-time messages and add attachments if desired.

Slack format: Enrich the post with fields (host, Zoom join URL, internal tags).

Routing: Add CRM updates or reminders after the “slot free” branch.

Security note: No hardcoded API keys in HTTP nodes. Configure all credentials via n8n’s credential manager.

## 📊 Basic Information

- **Workflow ID:** 10104
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 1489
- **Downloads:** 148
- **Created:** 2025/10/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10104)

## 👤 Author

- **Name:** Takuya Ojima
- **Username:** @takuya

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **webhook** 
- **merge** 
- **set** (×2)
- **googleCalendar** (×2)
- **if** 
- **zoom** 
- **gmail** (×2)
- **slack** 
- **stickyNote** (×12)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
