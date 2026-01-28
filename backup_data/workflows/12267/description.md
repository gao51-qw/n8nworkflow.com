## 📝 Description
Automate your new employee onboarding process by instantly creating structured onboarding tasks, scheduling an intro meeting, updating HR records, and notifying stakeholders — all triggered by a single status change in Monday.com. 🚀
This automation ensures every new joiner receives a consistent onboarding experience, while HR teams gain full visibility and control without manual coordination. 🎯

## ⚠️ Disclaimer
This template uses community-supported nodes (Zoom & AI-related nodes, if extended). While stable, these nodes are not officially maintained by n8n and should be reviewed before use in production environments.

## 🔁 What This Automation Does
1️⃣ Triggers automatically when an employee’s status changes to “Joined” in Monday.com.
 2️⃣ Creates a structured onboarding checklist task in Asana. 📋
 3️⃣ Schedules a Zoom intro / welcome meeting automatically. 🎥
4️⃣ Updates the employee record in Monday.com with the Zoom join link. 🔗
 5️⃣ Sends a welcome or notification email via Gmail. 📧

## 🧠 Key Design Decisions
✅ Monday.com is the source of truth for employee data
 ✅ Asana is used only for task tracking, not employee records
✅ Zoom links are stored centrally in Monday.com
 ✅ Uses participant-safe join_url (never host URLs)
 ✅ Avoids data duplication across tools
 ✅ Workflow runs once per employee lifecycle event

## ⭐ Key Benefits
✅ Zero manual onboarding coordination
 ✅ Consistent onboarding for every employee
 ✅ Clear ownership and task tracking
 ✅ Centralized HR records
 ✅ Faster first-day readiness
 ✅ Easily scalable for growing teams

## 🛠️ Tools & Services Used
- n8n – Workflow orchestration
- Monday.com – Employee & HR lifecycle management
- Asana – Onboarding task tracking
- Zoom – Intro / welcome meeting scheduling
- Gmail – Welcome and notification emails

## 🔐 Requirements
- Monday.com OAuth credentials
- Asana OAuth credentials
- Zoom OAuth credentials
- Gmail OAuth credentials
- n8n (self-hosted or cloud)
- HR board with:
- Status column (Joined)
- Email column
- Zoom Link column for Zoom meeting

## 🎯 Target Audience
- HR & People Operations teams
- Talent Acquisition teams
- Startup & scale-up organizations
- Operations & internal automation teams

