# Auto-block focus time in Google Calendar on busy days

> ## How it works:
- This flow checks the user's Google calender of events from Sunday to Saturday of current week, to determine how many hours have been booked each day.
- If a day has over 6 hours booked, it blocks out the remaining work hours for dedicated focus time. 
- The flow assumes 8 work hours per day. For example, if the Monday of this week has 6.5 hours booked (for meetings, tasks etc.), it automatically blocks off the remaining 1.5 hours for dedicated focus time, so external users can see and not book new events for those hours.
- Benefit: Prevents users from being overloaded with meetings and gives time for dedicated deep work/focus time.  

## Set up steps:
- Update start time of the "Schedule Trigger," this is the time the flow will run daily. Note: the workflow assumes a 9AM-5PM work schedule so it's recommended to schedule the flow to trigger before 9AM.
- Update the credentials for the "Get Full Weeks Events" and "Create Focus Time Event" nodes. Use your Google credentials so the workflow can connect to your Google calendar. 


## 📊 Basic Information

- **Workflow ID:** 6246
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 133
- **Downloads:** 13
- **Created:** 2025/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6246)

## 👤 Author

- **Name:** Moe Ahad
- **Username:** @moe-ahad

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleCalendar** (×2)
- **code** (×3)
- **if** 
- **itemLists** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
