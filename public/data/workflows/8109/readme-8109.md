# Daily email & calendar summaries to Slack using Gemini AI & Google Workspace

> # 📧📅 Turn Daily Emails and Calendar Summaries into Slack Notifications

Here’s a workflow that automates daily Slack notifications with a concise summary of unread emails (from the last 7 days) and Google Calendar events (for the current day).  
It integrates **Gmail, Google Sheets, Google Calendar, Gemini AI, and Slack** to provide a clear snapshot of your workday.

## 💡 How It Helps You
- 📥 Fetches unread emails from Gmail for the past 7 days  
- 🗂️ Filters emails based on Name, Email, and Subject defined in Google Sheets  
- 📅 Fetches Google Calendar events for the current day  
- 🤖 Summarizes emails and calendar events using Gemini AI  
- 🔗 Merges both summaries and sends them as a formatted Slack notification  
- ⏰ Runs automatically on a scheduled cron trigger  

## 🛠️ What’s Needed to Start
- 📧 Gmail account (with unread emails access)  
- 📑 Google Sheets (with Name, Email, Subject filter list)  
- 📅 Google Calendar  
- 🤝 Gemini AI with credentials  
- 💬 Slack workspace & dedicated channel for notifications  

## ⚡ Set Up in Minutes
1. 📑 Create a Google Sheet with columns: **Name, Email, Subject**  
2. 🔑 Configure Gmail, Google Sheets, Google Calendar, and Slack credentials in n8n  
3. 🤖 Add Gemini AI credentials for summarization  
4. 📝 Update the Google Sheet name and file name in the Sheet node  
5. 💬 Update Slack channel ID in the workflow  
6. ✅ Activate the workflow to receive daily notifications  

---

✨ Stay on top of important emails and upcoming meetings without manual checking!  


## 📊 Basic Information

- **Workflow ID:** 8109
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 230
- **Downloads:** 23
- **Created:** 2025/9/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8109)

## 👤 Author

- **Name:** SayOne Technologies
- **Username:** @sayonetech

## 🏷️ Categories

- AI Summarization

## 🔗 Nodes Used

- **cron** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **googleCalendarTool** 
- **gmail** 
- **googleSheets** 
- **code** (×5)
- **merge** 
- **stickyNote** (×6)
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
