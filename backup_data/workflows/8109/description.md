# 📧📅 Turn Daily Emails and Calendar Summaries into Slack Notifications

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
