# Schedule supplier follow-ups from Airtable POs to Google Calendar with AI, Slack & Gmail

> ## 📊 Description
Ensure suppliers never miss a follow-up by automating overdue purchase order tracking and scheduling. 📦⏰ This workflow checks Airtable every weekday morning for open POs older than seven days without scheduled follow-ups, generates Google Calendar events, updates Airtable with the follow-up link, and sends notifications to your team via Slack and Gmail. It centralizes supplier management and eliminates manual reminders, helping operations teams stay on top of aging purchase orders and vendor commitments. 📅📣


## 🔁 What This Template Does
1️⃣ Runs on a weekday schedule (default: 10 AM) to scan Airtable for overdue open POs. 📆
 2️⃣ Filters POs with missing follow-up links and older than 7 days. 🔍
 3️⃣ Processes each overdue PO one by one. 🔄
 4️⃣ Creates a Google Calendar event for each supplier follow-up. 📅
 5️⃣ Saves the event link back into Airtable and updates follow-up status to “Pending.” 📝
 6️⃣ Sends initial and final Slack notifications with PO details and scheduling links. 💬
 7️⃣ Sends a Gmail confirmation email to the assigned supplier or internal team. ✉️
 8️⃣ Ensures all stakeholders have quick access to follow-up links and event details. 🔗

## ⭐ Key Benefits
✅ Automates supplier follow-up scheduling with zero manual effort
 ✅ Prevents overdue purchase orders from being forgotten
 ✅ Consolidates PO aging logic, event creation, and notifications
 ✅ Keeps suppliers and internal teams aligned with one workflow
 ✅ Ensures follow-ups are consistently logged and traceable in Airtable
 ✅ Improves accountability for purchasing and operations teams

## 🧩 Features
- Weekday schedule trigger (cron-based)
- Airtable “Purchase Orders” table integration
- Google Calendar event creation with tracking links
- Airtable record update with follow-up status
- Slack notifications (initial + final)
- Gmail email confirmations
- Batch processing for multiple overdue POs
- Automated vendor accountability loop

## 🔐 Requirements
- Airtable Personal Access Token
- Google Calendar OAuth2 credentials
- Slack API token
- Gmail OAuth2 credentials
- Airtable table containing: PO ID, Supplier Info, Status, PO Date, Follow-up Link

## 🎯 Target Audience
- Procurement & purchasing teams
- Operations managers handling vendor communication
- Supply chain coordinators tracking overdue POs
- Teams using Airtable for purchase order management
- Businesses that need consistent supplier follow-ups


## 📊 Basic Information

- **Workflow ID:** 11297
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 69
- **Downloads:** 6
- **Created:** 2025/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11297)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Project Management
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **scheduleTrigger** 
- **airtable** (×2)
- **splitInBatches** 
- **slack** (×4)
- **googleCalendar** 
- **gmail** 
- **if** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
