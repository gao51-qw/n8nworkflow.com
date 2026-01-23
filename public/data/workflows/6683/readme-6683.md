# Send interview reminders (10 minutes) from Google Calendar to Slack DMs

> This workflow sends a **“Join in 10” Slack ping** to each interviewer shortly before their interview starts. It checks the **Interviews** Google Calendar every minute, finds interviews starting in the next **LEAD_MINUTES** (default **10**), and sends a Slack DM with the **candidate name, role, local start time, meeting link**, and any `CV:` / `Notes:` links present in the event description. If the Slack user can’t be found by email, it posts to a **fallback channel** (default `#recruiting-alerts`) with an @‑style email mention. A Data Store prevents duplicate pings for the same **event + attendee**.

## Who’s It For
- Interviewers who prefer a timely Slack nudge instead of calendar alerts.
- Recruiting coordinators who want consistent reminders without manual follow‑ups.
- Teams that include links directly in the calendar event description.

## How It Works
1. **Cron (every minute)** polls near‑term events so pings arrive about **10 minutes** before start.
2. **Google Calendar (Interviews)** fetches upcoming events.
3. **Prepare pings** filters interviews starting in ≤ `LEAD_MINUTES`, creates one item per **internal attendee** (company domain), and extracts meeting/CV/Notes links.
4. **Data Store** checks a **ledger** to avoid re‑notifying the same event+attendee.
5. **Slack** looks up the user by email and sends a **DM** with **Block Kit** buttons; otherwise posts to the **fallback channel**.
6. **Data Store** records that the ping was sent.

Attendees marked **declined** are skipped; **accepted**, **tentative**, and **needsAction** are included.

## How To Set Up
1. Ensure interviews are on the **Interviews** Google Calendar and that interviewers are added as **attendees**.
2. In each event’s description, optionally add lines like `CV: https://...` and `Notes: https://...`.
3. Import the workflow and add credentials:
   - **Google Calendar (OAuth)**
   - **Slack OAuth2** with `users:read.email`, `chat:write`, and `im:write`
4. Open **Set: Config** and confirm:
   - `CALENDAR_NAME` = `Interviews`
   - `COMPANY_DOMAIN` = `weblineindia.com`
   - `TIMEZONE` = `Asia/Kolkata`
   - `LEAD_MINUTES` = `10`
   - `FALLBACK_CHANNEL` = `#recruiting-alerts`
5. Activate the workflow. It will begin checking every minute.

## Requirements
- Google Workspace calendar access for **Interviews**.
- Slack workspace + an app with the scopes: `users:read.email`, `chat:write`, `im:write`.
- n8n (cloud or self‑hosted) with access to both services.

## How to Customize the Workflow
- **Lead time:** Change `LEAD_MINUTES` in **Set: Config** (e.g., 5, 15).
- **Audience:** Modify attendee filters to include/exclude `tentative` or `needsAction`.
- **Message format:** Tweak the Block Kit text/buttons (e.g., hide CV/Notes buttons).
- **Fallback policy:** Switch the fallback from channel post to “skip and log” if needed.
- **Time windows:** Add logic to silence pings at night or only during business hours.
- **Calendar name:** Update `CALENDAR_NAME` in **Set: Config** if you use a different calendar.

## Add-Ons to level up the Workflow with additional nodes
- **Conflict detector:** Warn if an interviewer is double‑booked in the next hour.
- **Escalation:** If no DM can be sent (no Slack user), also notify a coordinator channel.
- **Logging:** Append each ping to Google Sheets/Airtable for audit.
- **Weekday rules:** Auto‑mute on specific days or holidays via a calendar/lookup table.
- **Follow‑up:** Send a post‑interview Slack message with the feedback form link.

## Common Troubleshooting
- **No pings:** Ensure events actually start within the next `LEAD_MINUTES` and that attendees include internal emails (`@weblineindia.com`).
- **Wrong recipients:** Verify interviewer emails on the event match Slack emails; otherwise it will post to the fallback channel.
- **Duplicate pings:** Confirm the **Data Store** is configured and the workflow isn’t duplicated.
- **Missing meeting link:** Add a proper meeting URL to the event description or rely on Google Meet/Zoom links detected in the event.
- **Time mismatch:** Make sure `TIMEZONE` is `Asia/Kolkata` (or your local TZ) and calendar times are correct.

## Need Help ?
If you’d like a hand adjusting filters, message formatting or permissions, feel free to reach out we'll be happy to help you get this running smoothly.

## 📊 Basic Information

- **Workflow ID:** 6683
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 179
- **Downloads:** 17
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6683)

## 👤 Author

- **Name:** WeblineIndia
- **Username:** @weblineindia

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **cron** 
- **function** (×3)
- **if** (×2)
- **slack** (×2)
- **set** 
- **googleCalendar** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
