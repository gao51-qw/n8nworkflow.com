# Sync Discord scheduled events to Google Calendar

> This workflow syncs Discord scheduled events to Google Calendar. On a specified schedule, a request to Discord's API is made to get the scheduled events on a particular server. Only the events that have not been created or have recently been updated will be sent to Google Calendar.

## Prerequisites
Discord account and [Discord credentials](https://docs.n8n.io/integrations/builtin/credentials/discord/).
Google account and [Google credentials](https://docs.n8n.io/integrations/builtin/credentials/google/).

## How it works
1. Triggers off on the On schedule node.
2. Gets the scheduled events from Discord.
3. The IDs of the Discord scheduled events are used to get the events from Google Calendar, since the IDs are the same on creation of the Google Calendar event.
4. We can now determine which events are new or have been updated.
5. The new or updated events are created or updated in Google Calendar.

## 📊 Basic Information

- **Workflow ID:** 1940
- **Complexity:** beginner
- **Node Count:** 0
- **Views:** 1844
- **Downloads:** 184
- **Created:** 2023/8/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1940)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **httpRequest** 
- **scheduleTrigger** 
- **googleCalendar** (×3)
- **if** 
- **set** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
