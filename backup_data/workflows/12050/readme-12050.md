# Automate Zoom attendance follow-ups with recordings & Google Sheets tracking

> Workflow Overview
Zoom Attendance Evaluator with Follow-up is an n8n automation workflow that automatically evaluates Zoom meeting attendance and sends follow-up emails to no-shows and early leavers with recordings and materials.
Who's it for
* Companies and organizations that regularly host online seminars and webinars
* Educational institutions conducting online classes
* Anyone looking to streamline participant attendance management and follow-up processes
How it works
1. Scheduled execution: Runs automatically every hour
2. Fetch meeting data: Retrieves recent Zoom meetings and participant information
3. Evaluate attendance: Automatically classifies participants into four categories:
   * No-show: 0 minutes attended
   * Early-leaver: Less than 50% attendance
   * Partial attendance: 50-80% attendance
   * Full attendance: Over 80% attendance
4. Automatic follow-up: Sends automated emails with recording links and materials to no-shows and early leavers
5. Record keeping: Logs all follow-ups to Google Sheets for tracking
Requirements
* Zoom account: OAuth2 authentication setup required
* SMTP email server: Configuration needed (Gmail, SendGrid, etc.)
* Google Drive: For storing handout materials
* Google Sheets: For attendance logging
* Credentials for each service configured in n8n
How to customize the workflow
* Adjust attendance thresholds: Modify the 50% and 80% values in the "Evaluate Attendance" node code
* Change execution frequency: Configure the time interval in the "Schedule Trigger" node
* Customize email template: Edit subject and body in the "Prepare Email Data" node
* Next session registration link: Replace the placeholder URL in the code with your actual registration link
This workflow completely automates post-meeting follow-up tasks, helping improve participant engagement and reduce manual work.

## 📊 Basic Information

- **Workflow ID:** 12050
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 25
- **Downloads:** 2
- **Created:** 2025/12/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12050)

## 👤 Author

- **Name:** 荒城直也
- **Username:** @naoya-495

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** (×8)
- **zoom** (×2)
- **itemLists** (×2)
- **httpRequest** (×2)
- **code** (×2)
- **if** 
- **googleDrive** 
- **emailSend** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
