# Recover no-show appointments with Calendly, Telegram & email alerts

> ## Description:
Recover missed opportunities automatically with this n8n automation template.
 The workflow connects with Calendly, identifies no-show meetings, and instantly sends personalized Telegram messages encouraging leads to reschedule. It then notifies the assigned sales representative via email, ensuring timely human follow-up.
Perfect for sales teams, consultants, and customer success managers who want to minimize no-shows, improve conversion rates, and keep pipelines warm — all without manual tracking.

## What This Template Does (Step-by-Step)
⏰ Runs Every Hour
 Automatically triggers every hour to check your Calendly events for recently missed meetings.
📥 Fetch Active Calendly Appointments
 Retrieves all scheduled events from Calendly using your user URI and event metadata.
🔍 Filter for No-Shows (30+ Minutes Past)
 Uses a built-in logic block to detect appointments that ended over 30 minutes ago and were not attended.
🎯 Check Lead Intent
 Processes only leads tagged as “High Intent” in metadata to focus recovery efforts on qualified prospects.
💬 Send Telegram Message to Lead
 Sends a personalized message to the lead’s Telegram ID, including a direct reschedule link and friendly tone from your sales team.
📧 Notify Assigned Sales Rep via Email
 Alerts the relevant rep (from metadata) that the lead missed a meeting and has received an automated Telegram follow-up.
 Includes contact name, status update, and meeting link for manual re-engagement.
🔁 Continuous Follow-Up Automation
 Repeats hourly, ensuring no missed appointment goes unnoticed — even outside working hours.

## Key Features
 🤖 Smart detection of no-shows via Calendly API
 💬 Telegram message automation with personalization
 📧 Sales rep email alerts with complete context
 🎯 Filters by “High Intent” tag to focus efforts
 ⚙️ Easy setup with environment variables and credentials

## Use Cases
 📞 Automatically re-engage missed sales calls
 📅 Reduce no-show rates for Calendly meetings
 💬 Keep your sales pipeline active and responsive
 📢 Notify sales reps in real time about recovery actions

## Required Integrations
- Calendly API – to fetch scheduled events and meeting details
- Telegram API – to send automated reschedule messages
- SMTP or Gmail – to alert the assigned sales representative

## Why Use This Template?
 ✅ Saves hours of manual follow-up effort
 ✅ Boosts reschedule rate for missed meetings
 ✅ Keeps high-value leads warm and engaged
 ✅ Ensures your sales reps never miss a no-show


## 📊 Basic Information

- **Workflow ID:** 10146
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 64
- **Downloads:** 6
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10146)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **cron** 
- **httpRequest** 
- **function** 
- **if** 
- **telegram** 
- **emailSend** 
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
