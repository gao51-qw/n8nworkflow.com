##  Description
Automate Zendesk ticket follow-up management by fetching pending tickets daily, enriching and logging them into Google Sheets, creating ClickUp tasks for team reminders, and sending professional follow-up emails to customers. Keeps your support pipeline clean and ensures no pending tickets fall through the cracks. 🎫📊📧✅

## What This Template Does
- Triggers daily (Mon–Fri at 8 PM) to check Zendesk for pending tickets. ⏰
- Filters only "pending" status tickets to reduce noise. 🔍
- Formats ticket data with priority, age, and attention flags. 🧠
- Logs all tickets into Google Sheets for reporting and analytics. 📊
- Creates ClickUp tasks for team follow-up and accountability. 📋
- Generates professional HTML follow-up emails grouped by customer. 🎨
- Sends emails via Gmail with ticket details and next steps. 📧

## Key Benefits
- Ensures no pending Zendesk tickets are forgotten. ⏱️
- Builds a historical log for analytics and audit trails. 🧾
- Keeps your support team accountable with ClickUp tasks. ✅
- Delivers personalized, branded follow-up emails to customers. 💡
- Reduces manual effort in tracking and responding to tickets. 🔄

## Features
- Schedule Trigger – Runs Mon–Fri at 8:00 PM. 🗓️
- Zendesk Integration – Fetches pending tickets automatically. 🎫
- Smart Data Processing – Cleans descriptions, calculates age, flags urgent tickets. ⚡
- Google Sheets Logging – Maintains a structured log with Ticket ID, URL, tags, status, etc. 📈
- ClickUp Tasks – Automatically creates tasks per pending ticket. 📋
- Email Generation – Groups tickets per customer, builds professional HTML follow-ups. 🎨
- Gmail Delivery – Sends personalized follow-ups directly to customers. 📧

## Requirements
- n8n instance (cloud or self-hosted).
- Zendesk API credentials with read access.
- Google Sheets OAuth2 credentials with write access.
- ClickUp API credentials for task creation.
- Gmail OAuth2 credentials for sending emails.
- Pre-configured Google Sheet for pending ticket tracking.

## Target Audience
- Customer support teams managing Zendesk tickets. 🎧
- SaaS companies wanting automated follow-ups. 🚀
- CS managers ensuring accountability in ticket handling. 🛠️
- SMBs reducing customer wait time with proactive follow-ups. 🏢
- Remote support teams needing automated reminders and logs. 🌐

## Step-by-Step Setup Instructions

- Connect Zendesk, Google Sheets, ClickUp, and Gmail credentials in n8n. 🔑
- Update the schedule trigger (default: Mon–Fri at 8:00 PM). ⏰
- Replace the Google Sheet ID with your pending ticket log sheet. 📊
- Configure your ClickUp space/list IDs for task creation. 📋
- Update email branding and sender address in the email generator. 🎨
- Test with sample tickets to validate Sheets logging, ClickUp tasks, and Gmail delivery. ✅