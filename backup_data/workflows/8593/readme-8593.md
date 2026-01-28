# Automate meeting scheduling through Telegram with Google Calendar & Notion CRM

> # 💼 Graceful Scheduler Bot — Client & Affiliate Booking Automation

The **Graceful Scheduler Bot** transforms scheduling into an elegant, automated process.  
Clients and affiliates simply send a `/book` message in Telegram, and the workflow manages everything:  
conflict checks, calendar booking, confirmations, CRM logging, and reminders. ✨

---

## 🌸 Features
- 📲 **Telegram Intake**: Accepts `/book` command with meeting type, date, time, and email.  
- 📅 **Google Calendar Integration**: Checks if the requested time is free and creates a 30-minute event.  
- 💌 **Confirmations**: Sends instant confirmation by **Email** and **Telegram**.  
- 🗂️ **Notion CRM Log**: Records details (Name, Email, Meeting Type, Date, Status).  
- ⏰ **Reminders**: Sends polite reminders 24h before the meeting via **Email** and **Telegram**.  

---

## ⚙️ Setup Instructions
1. **Telegram Bot**:  
   - Create a bot with BotFather  
   - Add your token into n8n credentials  
2. **Google Calendar**:  
   - Connect your account in n8n credentials  
   - Use `primary` or specify your calendar ID  
3. **Email Send Node**:  
   - Configure SMTP or Gmail OAuth  
4. **Notion Database**:  
   - Create a database with properties:  
     - `Name` (title)  
     - `Email` (email)  
     - `Meeting Type` (select)  
     - `Date` (date)  
     - `Status` (select)  
   - Replace `YOUR_NOTION_DATABASE_ID` in the workflow  
5. **Customize Messages**:  
   - Update confirmation + reminder copy to match your tone  
6. **Test Example**:  
    /book client 2025-09-20 14:00 hello@example.com Jane Doe

---

## 🧩 Node List
- **Telegram Trigger** → listens for `/book` messages  
- **Function (Parse Command)** → extracts meeting type, date/time, email, name  
- **IF Valid?** → routes to help or booking flow  
- **Google Calendar (Get Events)** → checks for conflicts  
- **IF Time Free?** → prevents double booking  
- **Google Calendar (Create Event)** → books slot + invites guest  
- **Email Send (Confirmation)** → elegant confirmation email  
- **Telegram (Confirmation)** → graceful in-chat confirmation  
- **Notion (Create Page)** → logs details into CRM  
- **Wait** → pauses until 24h before meeting  
- **Email Send (Reminder)** → gentle email reminder  
- **Telegram (Reminder)** → in-chat reminder  

---

## 🧪 Testing Tips
- Start with a test booking command using today’s date/time.  
- Check Google Calendar → event should appear with guest invite.  
- Confirm both **email** and **Telegram** confirmations are sent.  
- Verify a new page is created in your Notion database.  
- Let the Wait node trigger → reminders should arrive 24h before.  

---

## 🏷️ Tags
`Automation`, `Scheduling`, `Calendars`, `CRM`, `Telegram`, `Notion`

---

✨ With the **Graceful Scheduler Bot**, scheduling feels less like admin work and more like having your own **digital assistant** — polished, timely, and beautifully automated.


## 📊 Basic Information

- **Workflow ID:** 8593
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 38
- **Downloads:** 3
- **Created:** 2025/9/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8593)

## 👤 Author

- **Name:** Shelly-Ann Davy
- **Username:** @SheCodesFlow

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×2)
- **manualTrigger** 
- **scheduleTrigger** 
- **set** 
- **code** (×3)
- **httpRequest** 
- **if** (×3)
- **emailSend** (×3)
- **telegram** (×2)
- **webhook** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
