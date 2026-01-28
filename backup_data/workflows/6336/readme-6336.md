# Dynamically send out-of-office / vacation message using Gmail & Google Calendar

> ## What it Does
Automatically checks your Google Calendar to determine if you're officially off work for the rest of today. If so, it auto-sends a personalized out‑of‑office reply via Gmail, telling senders when you’ll be back—based on your next calendar entry within the next 2 weeks.

## Prerequisites
To use this template, you'll need:
- Gmail credentials (for the trigger and reply nodes)
- Google Calendar credentials (for both calendar checks)
- A dedicated work calendar selected in the Calendar nodes

## Workflow Logic
1. Gmail Trigger
- Monitors incoming emails every minute
- Can be filtered (e.g., labels or VIP senders)

2. Calendar Check #1
- Inspects if any events remain today

3. Calendar Check #2
- If no remaining events, scan the next 14 days for the next event

4. Function Node
- Formats the return date as Weekday, Month D, YYYY (e.g., “Thursday, July 24, 2025”)

5. Gmail Send
- Sends a customized out‑of‑office email, using the formatted date
- Optionally includes n8n attribution (editable)

## User Setup Instructions
- Gmail Trigger: Connect your Gmail account and add any desired filters (labels, senders).
- Google Calendar Nodes: Connect your calendar account and select your “work” calendar in both nodes.
- Function Node: No changes needed unless you prefer a different date format.
- Gmail Send Node: Edit the message template and toggle attribution as desired.

## Customization - Options
Edit the final email content and tone in the Send node
- Adjust calendar lookahead in Calendar Check #2 (default is 14 days)
- Add Gmail filters to restrict auto-replies (e.g. only specific senders or labels)

## Why It's Useful
Ideal for freelancers, consultants, or remote workers who don’t follow a strict 9–5, yet want automated responses aligned with their actual availability, not a static setting. It’s dynamic, real-time, and easy to tweak.

## Classification
Use Case: Calendar-driven out-of-office automation

Recommended audience: Business professionals, freelancers, remote employees

## 📊 Basic Information

- **Workflow ID:** 6336
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 108
- **Downloads:** 10
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6336)

## 👤 Author

- **Name:** Rosh Ragel
- **Username:** @roshragel

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **googleCalendar** (×2)
- **code** 
- **gmail** 
- **gmailTrigger** 
- **if** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
