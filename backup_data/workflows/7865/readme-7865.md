# Convert Google Tasks to Google Calendar events via webhook integration

> ## Who’s it for

Operators and makers who capture tasks from custom forms, bots, or automations and want them to appear as time-boxed events in Google Calendar with minimal setup.

## How it works

A Webhook receives a payload containing the task title and a due date (as Unix seconds). The workflow formats the date, checks the most recently updated events in your calendar to avoid duplicates, and creates a new 30-minute event (configurable). After creation, it optionally deletes the original task, keeping your Task list clean and your Calendar up to date.

## How to set up

1. Select your Google Tasks and Google Calendar credentials.
2. Open the **Configuration** node and set `tasklistId`, `calendarId` (use `primary` or a specific calendar), `defaultMinutes`, and `eventColor`.
3. Send a sample POST to the Webhook with `{ TaskName, DueDateTimeSeconds }`.
4. Run once in manual mode and, if all looks good, activate.

## Requirements

Google accounts for Tasks and Calendar. Appropriate scopes/permissions in the selected credentials.

## How to customize the workflow

Change the event duration/color in **Configuration**. Adjust duplicate detection by modifying the Calendar search window and query. Map additional fields (e.g., description, attendees) on the Calendar node’s optional fields.

## Tags

Google Calendar, Google Tasks, Webhook, Automation, Productivity

## Categories

Productivity, Google, Calendar


## 📊 Basic Information

- **Workflow ID:** 7865
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 486
- **Downloads:** 48
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7865)

## 👤 Author

- **Name:** R4wd0G
- **Username:** @r4wd0g

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×8)
- **set** 
- **googleTasks** (×2)
- **dateTime** 
- **googleCalendar** (×2)
- **webhook** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
