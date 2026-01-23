# Bidirectional ClickUp task & Google Calendar sync with multi-calendar routing

> ## Who’s it for
Teams that manage tasks in ClickUp and want those tasks reflected—and kept in sync—in Google Calendar automatically.

## How it works
A ClickUp Trigger captures task events (create, update, delete). For new tasks, the workflow creates a Google Calendar event with the correct start/end. It stores a mapping between `clickupTaskId` and `calendarEventId` in a Google Sheet so later updates and deletions can target the right event. Multiple lanes (personal/school/tech/internship) let you route tasks to different calendars.

## How to set up
1. Assign **ClickUp OAuth**, **Google Calendar**, and **Google Sheets** credentials to the nodes.
2. Open the **Configuration** node and fill:
   - `calendarId_*` for each lane
   - `sheetId` and `sheetTabName` for the mapping sheet
   - (optional) `clickupTeamId`
3. Enable the **ClickUp Trigger** and run a manual test to validate mapping creation and event syncing.

## Requirements
- ClickUp workspace with OAuth permissions
- Google Calendar & Sheets access
- A Google Sheet for the event↔task mapping

## How to customize the workflow
- Edit the calendar routing in **Edit Fields** nodes or point them to different `calendarId_*` values.
- Adjust event colors/fields in Google Calendar nodes.
- Extend the mapping sheet with extra columns (e.g., status, labels) as needed.


## 📊 Basic Information

- **Workflow ID:** 7871
- **Complexity:** advanced
- **Node Count:** 69
- **Views:** 326
- **Downloads:** 32
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7871)

## 👤 Author

- **Name:** R4wd0G
- **Username:** @r4wd0g

## 🏷️ Categories

- Project Management
- Multimodal AI

## 🔗 Nodes Used

- **set** (×7)
- **stickyNote** (×4)
- **if** (×20)
- **googleCalendar** (×22)
- **googleSheets** (×8)
- **clickUpTrigger** 
- **switch** (×4)
- **merge** 
- **clickUp** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 69 nodes with 62 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
