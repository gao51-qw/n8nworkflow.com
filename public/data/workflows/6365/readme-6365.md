# Automated daily task reminder emails with Google Sheets & SMTP

> **Description:**

Automatically send daily reminder emails to your team using this prebuilt n8n workflow integrated with Google Sheets and SMTP. This automation scans a content calendar spreadsheet, filters pending tasks due today, sends personalized reminders to assigned writers, and updates the sheet with email delivery status—perfect for managing content teams, freelancers, or internal task deadlines without manual follow-ups.


**What This Template Does**

⏰ Daily Trigger (Cron): Starts automatically each day at a specified time to check for due tasks.

📋 Reads Tasks from Google Sheets:Fetches all task entries from your content calendar spreadsheet including task name, due date, writer email, and status.

🔍 Filters Today's Pending Tasks: Uses a filter node to select only those tasks where the due date is today and the status is still marked as “Pending.

📧 Sends Reminder Emails via SMTP: Automatically sends a personalized email to each writer, reminding them about their due task with the task name in the subject line.

🧠 Determines Delivery Status (Code Node):Checks if the email was accepted and marks it as “sent” or “not sent” for accurate tracking.

📈 Updates Google Sheet with Email Status: Logs the delivery result back into the original spreadsheet, ensuring that team leads can track follow-ups and completion metrics.

**Required Integrations**

✅ Google Sheets OAuth2 API (for reading/writing task info)
✅ SMTP Credentials (for sending reminder emails)
🎯 Ideal Use Cases
📝 Content Calendar Reminders for writers, editors, and content managers
🧑‍💼 Daily Task Reminders for project coordinators or team leads
📅 Client Follow-Ups for account managers or sales reps
⏳ Deadline Compliance Automation for remote or async teams

**Why This Template is Powerful**

- No more missed deadlines or manual tracking
- Completely modular—can be adapted to send Slack reminders or WhatsApp instead
- Full loop: trigger → check → remind → log
- Perfect for non-tech teams using Google Sheets to track deliverables

## 📊 Basic Information

- **Workflow ID:** 6365
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 132
- **Downloads:** 13
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6365)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **cron** 
- **googleSheets** (×2)
- **filter** 
- **emailSend** 
- **code** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
