**Description:**

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