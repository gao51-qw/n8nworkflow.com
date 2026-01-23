# Automate daily interview schedule delivery from Google Calendar to Gmail

> This n8n workflow automatically fetches all interview events scheduled for today from a specified Google Calendar and sends a personalized email to each interviewer. The email contains a formatted HTML table listing their interview details, including meeting times, Google Meet links, and attendees with their response status.

This ensures all interviewers are informed daily at **8:00 AM IST** without any manual coordination.

## Who’s it for
- **Interviewers** who want a quick morning packet instead of opening multiple calendar tabs.
- **Recruiters/coordinators** who need a reliable, zero‑friction daily brief for interviewers.
- **Teams** that paste CV/notes links directly into calendar events (no file search required).

## How it works
1. **Cron** triggers daily at **08:00 IST**.
2. **Google Calendar** reads today’s events from the **Interviews** calendar.
3. A **Code** step parses each event to identify interviewers and extract candidate details, meeting link, and any `CV:` / `Notes:` links from the description and create a table to share via Gmail.
4. A **grouping** step compiles a per‑interviewer list for the day.
5. **Email (Gmail)** sends one digest to interviewer.

## How to set up
1. Ensure all interviews are scheduled on the Google Calendar named **Interviews** and that interviewers are added as **attendees**.
2. Add CV: &lt;url&gt; and Notes: &lt;url&gt; in the **event description** when available.
3. Import the workflow and add credentials:
   - **Google Calendar** (OAuth)
   - **SMTP/Gmail** for sending the email digests
4. Keep the default **08:00 IST** schedule in the Cron node or adjust as needed.

## Requirements
- Google Workspace account with access to the **Interviews** calendar.
- Gmail sender account for digests (App Password if using 2FA).
- n8n instance (cloud or self‑hosted).

## Steps

### Trigger Schedule

* **Node:** `Schedule Trigger`
* **Purpose:** Starts the workflow daily at **8:00 AM**.

---

### Fetch Interview Events

* **Node:** `Google Calendar(Fetch Interview Events)`
* **Purpose:** Retrieves all events (interviews) from the configured calendar.
* **Output:** Event details including summary, time, and organizer email.

---

### Group & Format Schedule

* **Node:** `HTML Table` (JavaScript Code Node)
* **Purpose:** Groups events by interviewer email and generates an HTML schedule table.
* **Output:** Formatted fields:

  * `interviewer_email`
  * `subject`
  * `htmlContent`

---

### Send Personalized Emails

* **Node:** `Gmail`
* **Purpose:** Sends the formatted interview schedule to each interviewer’s email address.
* **Send To:** Dynamically set using `={{ $json.interviewer_email }}`
* **Subject:** `"Interview Reminder"`
* **Body:** `={{ $json.htmlContent }}` (HTML)


## How to customize the workflow
- **Parsing rules:** If your event titles follow a pattern (e.g., `Onsite – {Candidate} – {Role}`), tweak the regex in the Code node.
- **Attendee logic:** Refine how interviewers are detected (e.g., filter only `accepted` responses, or include `tentative`).
- **Digest format:** Adjust table columns/order, or add role/team labels from the title.
- **Schedule:** Duplicate the Cron for regional time zones or add a midday refresh.

## Add-ons to level up the Workflow with additional nodes
- **Reminder pings:** Add 10‑minute pre‑interview reminders via Email or Slack/Teams.
- **Conflict alerts:** Flag if an interviewer is double‑booked within a 15‑minute window.
- **Feedback follow‑up:** After the scheduled time, DM or email a standardized feedback form link.
- **Drive search (optional):** If you later want auto‑attach CVs, add a Google Drive search step (by candidate name) in a designated folder.

## Common troubleshooting points
- **No events found:** Confirm the calendar name is **Interviews** and that events exist **today**.
- **Missing links:** If CV/notes links aren’t in the email, add `CV:`/`Notes:` links to the event description.
- **Email not sent:** Verify SMTP credentials, from‑address permissions, and any sending limits.
- **Time mismatch:** Confirm workflow timezone and Calendar times are set to **Asia/Kolkata** (or adjust).

## A short note
If you need help tailoring the parsing rules, adjusting the schedule or troubleshooting any step, feel free to reach out we will happy to help.

## 📊 Basic Information

- **Workflow ID:** 6566
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 222
- **Downloads:** 22
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6566)

## 👤 Author

- **Name:** WeblineIndia
- **Username:** @weblineindia

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **stickyNote** (×2)
- **scheduleTrigger** 
- **code** 
- **gmail** 
- **googleCalendar** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
