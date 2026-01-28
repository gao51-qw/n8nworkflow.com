# Detect holiday conflicts & suggest meeting reschedules with Google Calendar and Slack

> **Who’s it for**

Remote and distributed teams that schedule across time zones and want to avoid meetings landing on public holidays—PMs, CS/AM teams, and ops leads who own cross-regional calendars.

**What it does / How it works**

The workflow checks next week’s Google Calendar events, compares event dates against public holidays for selected country codes, and produces a single Slack digest with any conflicts plus suggested alternative dates. Core steps: Workflow Configuration (Set) → Fetch Public Holidays (via a public holiday API such as Calendarific/Nager.Date) → Get Next Week Calendar Events (Google Calendar) → Detect Holiday Conflicts (compare dates) → Generate Reschedule Suggestions (find nearest business day that isn’t a holiday/weekend) → Format Slack Digest → Post Slack Digest.

**How to set up**

Open Workflow Configuration (Set) and edit: countryCodes, calendarId, slackChannel, nextWeekStart, nextWeekEnd.

Connect your own Google Calendar and Slack credentials in n8n (no hardcoded keys).

(Optional) Adjust the Trigger to run daily or only on Mondays.

**Requirements**

n8n (Cloud or self-hosted)

Google Calendar read access to the target calendar

Slack app with permission to post to the chosen channel

A public-holiday API (no secrets needed for Nager.Date; Calendarific requires an API key)

**How to customize the workflow**

Time window: Change nextWeekStart/End to scan a different period.

Holiday sources: Add or swap APIs; merge multiple regions.

Suggestion logic: Tweak the look-ahead window or rules (e.g., skip Fridays).

Output: Post per-calendar messages, DM owners, or create tentative reschedule events automatically.

## 📊 Basic Information

- **Workflow ID:** 10144
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 64
- **Downloads:** 6
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10144)

## 👤 Author

- **Name:** Takuya Ojima
- **Username:** @takuya

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **code** (×4)
- **googleCalendar** 
- **if** 
- **slack** 
- **splitInBatches** 
- **httpRequest** 
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
