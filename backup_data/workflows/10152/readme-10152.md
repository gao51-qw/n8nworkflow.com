# Automated sales follow-up system using HighLevel, Gmail, Slack & Google Sheets

> ## 📘 Description:
This workflow automates sales contact follow-ups and engagement tracking by integrating HighLevel CRM, Gmail, Slack, and Google Sheets. It fetches all contacts from HighLevel, filters inactive contacts, sends personalized follow-up emails, checks for responses, and notifies the sales team accordingly.
 It eliminates manual follow-up tracking, ensures timely outreach, and provides real-time notifications — helping sales teams maintain engagement, respond promptly, and improve lead conversion.

## ⚙️ What This Workflow Does (Step-by-Step)

🟢 Manual Trigger – Starts the automation manually
Action: Initiates the workflow for immediate follow-up execution or testing.

📦 Fetch Contacts from HighLevel CRM
Action: Retrieves all contacts from HighLevel, including names, emails, and metadata for full visibility.

🔍 Validate Deal Fetch Success (IF Node)
Action: Verifies that fetched contacts contain valid IDs.

 ✅ True Path: Continues to filter inactive contacts.

 ❌ False Path: Logs invalid or missing contacts to Google Sheets for auditing and troubleshooting.

🧹 Filter Contacts with No Response
Action: Selects contacts who have not replied in the last 24 hours, ensuring follow-ups target only inactive leads.

📊 Get Most Recent Contact
Action: Retrieves the latest contact based on last updated time and calculates hours since last interaction.

📧 Send Follow-Up Email to Contact
Action: Sends a personalized email to the contact, asking for confirmation or questions and including dynamic details like name and last interaction time.

⏳ Wait for 24 Hours Before Next Action
Action: Pauses the workflow for 24 hours to allow contacts sufficient time to respond.

📨 Retrieve Email Thread for Response
Action: Fetches the most recent Gmail thread using the thread ID to check if the contact has replied.

✅ Check If Contact Responded with “Yes” (IF Node)
Action: Evaluates if the response contains the word “yes”.

 ✅ True Path: Triggers Slack notification for positive response.

 ❌ False Path: Triggers Slack notification for no response.

💬 Notify Sales Team in Slack if Response Received
Action: Sends a Slack message notifying the team of a positive reply, including contact details and response snippet.

⚠️ Notify Sales Team in Slack if No Response
Action: Sends a Slack message notifying the team that the contact hasn’t replied, including contact info, follow-up timestamp, and waiting status.

🚨 Log Fetch or Validation Errors (Error Handling)
Action: Records any fetch or validation errors in Google Sheets for easy review and troubleshooting.

## 🧩 Prerequisites
HighLevel CRM API OAuth credentials
Gmail OAuth2 credentials for sending and fetching emails
Google Sheets document for error logging
Slack API credentials for notifications

## 💡 Key Benefits
 ✅ Fully automated follow-up workflow for sales contacts
 ✅ Timely notifications for positive and inactive responses
 ✅ Personalized emails to contacts
 ✅ Transparent tracking and logging of errors
 ✅ Seamless integration across HighLevel, Gmail, Slack, and Google Sheets

## 👥 Perfect For
Sales teams managing multiple leads
Marketing teams ensuring lead engagement
Startups scaling outreach efforts
Organizations using HighLevel CRM + Gmail + Slack for sales follow-ups


## 📊 Basic Information

- **Workflow ID:** 10152
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 451
- **Downloads:** 45
- **Created:** 2025/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10152)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×11)
- **highLevel** 
- **if** (×2)
- **googleSheets** 
- **code** (×2)
- **gmail** (×2)
- **wait** 
- **slack** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
