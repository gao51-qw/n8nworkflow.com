# Automate Everhour time-off sync to Google Calendar with all-day events

> ## Who’s it for
Teams that track absences in **Everhour** and want a shared **Google Calendar** view for quick planning. Ideal for managers, HR/OPS, and teammates who need instant visibility into approved time off.

## What it does
- Pulls **approved time-off** from Everhour on a schedule  
- Creates/updates **all-day events** per day of absence in Google Calendar  
- Removes **stale events** if a request changes or is canceled  
- Uses a stable external key (`everhour:ASSIGNMENT_ID:YYYY-MM-DD`) to avoid duplicates

## How it works
A **Schedule Trigger** runs periodically → the workflow fetches Everhour assignments, filters **approved** time-off, expands multi-day requests into single-day items, then **searches by external key** to either create or update events. Separate cleanup steps **list** calendar events and **delete** any that are no longer present in Everhour.

## How to set up
1. In n8n, create an **HTTP Header Auth** credential for Everhour with header `X-Api-Key: {YOUR_EVERHOUR_API_KEY}
`.  
2. Add a **Google Calendar OAuth** credential.  
3. Open the **Config** node and set your `calendarId` (e.g., `team@group.calendar.google.com`).  
4. Enable the workflow and choose your schedule.

## Requirements
- Everhour account with API access  
- Google Calendar (workspace or personal)  
- n8n Cloud or self-hosted

## How to customize the workflow
- Adjust the **schedule** (hourly/daily).  
- Filter by **user** or **time-off type**.  
- Tweak the **event title/description** templates.  
- Point to multiple calendars (duplicate the create/update branch per calendar).


## 📊 Basic Information

- **Workflow ID:** 8305
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 112
- **Downloads:** 11
- **Created:** 2025/9/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8305)

## 👤 Author

- **Name:** Hossein Karami
- **Username:** @hosseinkarami

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** (×6)
- **httpRequest** (×4)
- **if** (×2)
- **set** (×2)
- **googleCalendar** (×3)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
