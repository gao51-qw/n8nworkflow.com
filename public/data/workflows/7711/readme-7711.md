# Automated task reminders & daily recaps using Google Sheets and Slack

> ## What This Workflow Does
This workflow transforms Google Sheets into a **lightweight productivity engine** and connects it to Slack for **automated reminders and daily recaps**. No extra SaaS, no extra cost – just a simple system that keeps you on track and accountable.

---

## Pre-conditions / Requirements
Before you start, make sure you have:
- A Google account with access to **Google Sheets**.
- A Slack workspace where you can post reminders and summaries.
- An n8n instance (self-hosted or cloud) with:
  - **Google Sheets credentials** connected.
  - **Slack credentials** connected.

---

## How It Works
1. **Task Tracking in Google Sheets**
   - Add tasks with columns: Task ID, Task Name, Due Date, Status, and Why it matters.
   - The workflow checks for tasks that are due soon or overdue.

2. **Automated Slack Reminders**
   - Every 15 minutes, the workflow scans for tasks due in the next 30 minutes.
   - Slack sends a ping with the task name, deadline, and reason.

3. **Daily Recap at 6 PM**
   - Slack posts a summary of how many tasks you completed vs how many are still pending.
   - Encourages reflection and accountability.

4. **Duplicate Protection**
   - Each task has a "Last Reminder Sent" column so you don’t get spammed with repeat messages.

---

## Customization Options
- **Reminder Frequency**: Change the Cron node to check tasks every 5, 10, 30 minutes, or hourly.  
- **Daily Recap Time**: Adjust the daily Cron node (default: 6 PM) to match your schedule.  
- **Slack Channel**: Point reminders and recaps to a private DM, a public channel, or multiple channels.  
- **Task Fields**: Add columns like `Priority`, `Assigned To`, or `Category` and adjust Slack messages accordingly.  
- **Weekly Review**: Extend the workflow with another Cron node on Sundays to send a weekly productivity score.  
- **Reflection Logs**: Add automation to write daily results into a second tab for trend tracking.  

---

## Benefits
- ✅ **Eliminate missed deadlines** with proactive reminders.  
- ✅ **Daily accountability** inside Slack – no extra dashboards.  
- ✅ **Zero SaaS costs** – only Sheets, Slack, and n8n.  
- ✅ **Fully customizable** to match your workflow, team, or habits.  
- ✅ **Scales easily** from solo use to team task tracking.  

---

## Use Cases
- Solo founders or freelancers who want a **cheap but powerful task manager**.  
- Small teams who live in Slack and want **lightweight accountability**.  
- Productivity enthusiasts who want **flexibility and control** without being locked into another SaaS.  

## 📊 Basic Information

- **Workflow ID:** 7711
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 470
- **Downloads:** 47
- **Created:** 2025/8/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7711)

## 👤 Author

- **Name:** Ziad Adel
- **Username:** @ziadadel

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **cron** (×2)
- **googleSheets** (×3)
- **if** 
- **slack** (×2)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
