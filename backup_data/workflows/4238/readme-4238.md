# Automate CSAT surveys with Freshdesk & store responses in Google Sheets

> Never forget to send a satisfaction survey again! This workflow helps you automatically send CSAT surveys when a Freshdesk ticket is marked “Resolved” – and logs every response in Google Sheets for easy analysis, reporting, and escalation workflows.
## 💡 Built for CS and ops teams who care about real feedback
This template is perfect for:
- Customer Support Teams who want timely, consistent survey delivery after every resolved ticket.
- Ops Leads & Admins tired of managing spreadsheets and survey tools manually.
- Businesses using Freshdesk looking for a no-code feedback loop.
- Automation fans who want to track, trigger, and take action — automatically.


## 🧩 What problem does it solve?
Manual survey processes are slow, inconsistent, and hard to scale. This automation ensures:
- Fast survey delivery when experiences are still fresh.
- No duplicate emails thanks to a built-in tracking system.
- Centralized feedback in a Google Sheet — no more digging through platforms.
- Data you can act on, like triggering Slack alerts for poor scores.


## ⚙️ How it works
### 📨 Part 1: Auto-send the survey when a ticket is resolved
1. Trigger: Workflow runs on a schedule (or manually via “Test”).
2. Pull ticket status from Freshdesk.
3. Compare ticket status to the last known status in Google Sheets.
4. Detect resolution: If status = “Resolved” (ID 4), move forward.
5. Update the Google Sheet to track that the survey was sent.
6. Fetch the customer’s email from Freshdesk.
7. Create & send the survey email, personalized with ticket info and your brand.
8. Convert Markdown → HTML for a well-formatted email.

### 📥 Part 2: Collect responses and store in Sheets
1. Form Trigger: Customer clicks the survey link and fills in the form.
2. Capture responses (e.g. rating + comments).
3. Log feedback in a second Google Sheet for analysis.


You can extend this by adding escalation steps (e.g. flagging 1–2 star ratings to managers).

## 🚀 Setup Instructions
### 🔐 Connect your tools
- **Freshdesk**: Add your API credentials to the get tickets and get client nodes.
- **Google Sheets**: Authenticate in the get existing tickets, update status, and save survey nodes.
- **Email (SMTP)**: Add your SMTP details in the “Send Email” node, or swap in Gmail, SendGrid, etc.


### 🛠 Set your data
- In the Set your data node, enter:
	- Your name, email, company, and position
	- Your survey form link (see below)


### 🔗 Get the form link
- Activate the workflow (toggle it ON)
- Go to the “Survey” (Form Trigger) node
- Copy the Production URL
- Paste it into the survey link field in the Set your data node


### 🧾 Prepare your Google Sheets
#### Sheet 1: Freshdesk Tickets (status tracking)
Used by:
- get existing tickets
- update status


Create a new empty Google Sheet.

Add the Spreadsheet ID + Sheet Name into the nodes.

#### Sheet 2: Feedback freshdesk (survey responses)
Used by:
- save survey to google sheet

Create a new sheet or tab. It will auto-create columns based on your survey form field labels.

Add the Spreadsheet ID + Sheet Name/GID to the save node.

## 🔧 Customize the workflow
### 📝 Survey Questions
- Modify them in the Survey (Form Trigger) node.
- Adjust the save survey to google sheet node as needed (or use auto-map).
### 💬 Email Content
- Edit the subject and message in the Create the email text (Set) node.


### 🏷 Freshdesk Status ID
- If your “Resolved” status ID isn’t 4, update the second condition in the If ticket resolved node.


### 📉 Escalate poor feedback
Add logic after the save survey to google sheet node:
- If rating is low:
	- Notify Slack
	- Create a new internal ticket
	- Email a team lead


### 🔁 Schedule Trigger
Adjust the Schedule Trigger node to your desired interval (e.g., hourly).
### 🔄 Use a Webhook Instead (Optional)
If Freshdesk supports ticket webhook events, swap the schedule trigger for a Webhook Trigger node to send surveys instantly on ticket resolution.

## 🤖 Why Pollup AI is building this
At **Pollup AI**, we help CS and support teams stop drowning in tools and manual tasks. This template is part of our growing AI agent library: plug-and-play automations that connect your tools, clean your data, and free up your time – without writing a line of code.
Try this workflow and let Pollup AI handle the boring parts, so your team can focus on what customers are really saying. Learn more at [Pollup AI](pollup.ai) 

## 📊 Basic Information

- **Workflow ID:** 4238
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 1147
- **Downloads:** 114
- **Created:** 2025/5/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4238)

## 👤 Author

- **Name:** PollupAI
- **Username:** @Pollup

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **manualTrigger** 
- **if** 
- **emailSend** 
- **freshdesk** (×2)
- **googleSheets** (×3)
- **scheduleTrigger** 
- **set** (×2)
- **stickyNote** (×8)
- **formTrigger** 
- **markdown** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
