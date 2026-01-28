# Automate performance review process with Google Sheets, Calendar, Email & Slack

> Optimize your performance review process with this automated workflow. Running daily at 8 AM, it retrieves scheduled reviews from a Google Sheet, validates upcoming sessions, processes each review, and sends email reminders to participants. It also updates Google Calendar events, notifies HR via Slack, and logs review statuses back into the sheet — ensuring a seamless, tracked, and multi-channel communication experience. 📅🤖

---

### What This Template Does  

**Step 1:** Triggers **Daily Check at 8 AM** to initiate the review process. ⏰  
**Step 2:** **Gets Review Schedule** by reading planned reviews from a Google Sheet.  
**Step 3:** **Filters Upcoming Reviews** to focus on sessions within the next 3 days.  
**Step 4:** **Validates Reviews Scheduled?** Ensures reviews exist and are ready to process.  
**Step 5:** **Splits into Manual** to handle each review individually.  
**Step 6:** **Prepares Review Data** for notifications and updates.  
**Step 7:** Branches actions:  
  → Sends **Email Reminder** to participants.  
  → **Updates Calendar Event** with the scheduled session.  
  → **Notifies HR on Slack** with review details.  
  → **Updates Review Status** in the Google Sheet with logged feedback.  

---

### Key Benefits  
1. Automates daily review scheduling and reminders  
2. Ensures timely calendar updates and notifications  
3. Centralizes feedback logging in Google Sheets  
4. Enhances HR visibility with Slack alerts  
5. Reduces manual coordination efforts  
6. Improves review process consistency  

---

### Features  
- Daily trigger at 8 AM  
- Google Sheet integration for review schedule  
- Filtering for upcoming reviews (next 3 days)  
- Validation of scheduled reviews  
- Multi-channel notifications (email, Slack)  
- Google Calendar event creation  
- Real-time status updates in sheets  
- Manual processing for individual reviews  

---

### Requirements  
- **GOOGLE_SHEET_ID**: Your Google Sheet ID (structured as below)  
- **Credentials Needed:**  
  1. Google Sheets OAuth2  
  2. Gmail API Key  
  3. Google Calendar OAuth2  
  4. Slack Bot Token (with chat:write permissions)  
- **Customize:**  
  • Review schedule columns (e.g., Employee, Date, Reviewer, Status)  
  • Reminder email template  
  • Slack channel for HR notifications  
  • Calendar event duration  

**Google Sheet Structure:**  
1. Create a sheet with columns:  
   - Employee Name  
   - Review Date  
   - Reviewer  
   - Status  
   - Feedback  
   - Updated At  

---

### Target Audience  
- HR teams managing performance reviews 👥  
- Managers scheduling regular check-ins ⏳  
- Organizations ensuring review compliance 📋  
- Remote teams needing centralized updates 🌐  
- Companies prioritizing employee feedback 📈  

---

### Step-by-Step Setup Instructions  

1. **Set up Google Sheet**  
 → Create a sheet with columns: Employee Name, Review Date, Reviewer, Status, Feedback, Updated At.  
 → Replace `YOUR_SHEET_ID` in the workflow with your actual Sheet ID.  

2. **Configure Daily Trigger**  
 → Set the "Daily Check at 8 AM" node to run at 8:00 AM IST (adjust for timezone if needed).  

3. **Connect Google Calendar**  
 → Enable Google Calendar OAuth2 and select the relevant calendar (e.g., hr@company.com).  

4. **Customize Review Filter**  
 → In "Filter Upcoming Reviews," set the range to check the next 3 days from today (e.g., October 24–27, 2025).  

5. **Set Up Notifications**  
 → Edit the "Send Email Reminder" template (e.g., include review date and link).  
 → Configure "Notify HR on Slack" with your HR channel ID.  

6. **Test the Flow**  
 → Add a test review entry in the sheet (e.g., date within 3 days).  
 → Run manually or wait until 8 AM IST on October 25, 2025 → Verify email, calendar event, Slack message, and sheet update.  

7. **Go Live**  
 → Enable the daily trigger.  
 → Monitor sheet and notifications for the first run.  

---

**Workflow Complete!**  
Reviews scheduled, reminders sent, and feedback logged — all on autopilot.  

*Metrics to Track:*  
- Reviews scheduled daily  
- Reminder delivery success  
- Calendar update rate  
- Feedback logging completion  

## 📊 Basic Information

- **Workflow ID:** 10105
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 106
- **Downloads:** 10
- **Created:** 2025/10/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10105)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×2)
- **code** 
- **if** 
- **splitOut** 
- **set** 
- **emailSend** 
- **googleCalendar** 
- **slack** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
