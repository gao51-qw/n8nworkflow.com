Enhance your hiring pipeline by automating interview management post-screening. This workflow runs every 5 minutes to scan upcoming Google Calendar events, filter relevant interviews, send timely email reminders to candidates and internal teams, and handle result submissions via webhook — updating statuses in Google Sheets and notifying via Gmail based on pass/fail outcomes. Ensure no interviews slip through the cracks with proactive reminders and instant feedback loops.

---

### What This Template Does  

**Step 1:** Triggers **every 5 minutes** to proactively check for upcoming interviews. 
**Step 2:** Fetches all **Google Calendar Events** and identifies interview-related ones.  
**Step 3:** **Filters Upcoming Interviews** based on event details (e.g., candidate name, role).  
**Step 4:** Sends **Reminder Emails** to candidates and interviewers via Gmail for preparation.  
**Step 5:** Receives **Webhook Submission** of interview results (pass/fail) post-event.  
**Step 6:** **Updates Google Sheet** with result data, including feedback and updated status.  
**Step 7:** Branches on result:  
  → **Passed:** Sends congratulatory **Email to Candidate** and advances status.  
  → **Failed:** Sends polite **Failure Notification** and closes the loop.  

---

### Key Benefits  
✅ Reduces no-shows with automated reminders  
✅ Centralizes interview tracking in Google Sheets  
✅ Instant Gmail notifications for pass/fail decisions  
✅ Minimizes manual status updates  
✅ Improves candidate experience with timely communication  
✅ Ensures audit-ready logs of all interactions  

---

### Features  
- Cron-triggered checks every 5 minutes  
- Google Calendar integration for event fetching  
- Smart filtering for interview-specific events  
- Gmail-powered reminder and notification emails  
- Webhook for secure result submissions  
- Conditional branching on pass/fail  
- Real-time Google Sheets append/update  
- Comprehensive sheet structure for tracking  

---

### Requirements  
- **GOOGLE_SHEET_ID**: Your Google Sheet ID (structured as below)  
- **Credentials Needed:**  
  1. Google Calendar OAuth2  
  2. Gmail API Key  
- **Customize:**  
  • Event filter criteria (e.g., keywords like "Interview")  
  • Reminder timing (e.g., 24 hours before)  
  • Email templates for reminders and results  
  • Webhook endpoint for result submission  

**Google Sheet Structure:**  
1. Create a sheet with columns:  
   - Candidate Email  
   - Interview Link  
   - Status  
   - Result  
   - Meet Link  
   - Feedback  
   - Updated At  

---

### Target Audience  
- Recruiters juggling multiple interview schedules 🗓️  
- HR teams focused on candidate engagement 💬  
- Hiring managers needing quick result turnarounds ⚡  
- Growing companies scaling interview volumes 📈  
- Remote teams relying on calendar and email sync 🌐  

---

### Step-by-Step Setup Instructions  

1. **Set up Google Sheet**  
 → Create sheet with the specified columns: Candidate Email, Interview Link, Status, Result, Meet Link, Feedback, and Updated At.  
 → Replace `YOUR_SHEET_ID` in the workflow with your actual Sheet ID.  

2. **Configure Calendar Integration**  
 → Connect Google Calendar OAuth2 and select the relevant calendar (e.g., hiring@company.com).  

3. **Define Event Filters**  
 → In the "Filter Upcoming Interviews" node, set keywords (e.g., "Candidate Interview") to match event titles/descriptions.  

4. **Customize Reminders**  
 → Edit the "Send Reminder to Candidate" template (e.g., include interview link and prep tips).  
 → Set reminder offset (e.g., 1 day before event).  

5. **Set Up Webhook for Results**  
 → Generate and expose the webhook URL for your interview form/tool to submit pass/fail data.  

6. **Connect Gmail**  
 → Enable Gmail OAuth2.  
 → Define sender email and customize pass/fail templates.  

7. **Test the Flow**  
 → Create a test calendar event for an upcoming interview.  
 → Wait 5 minutes or trigger manually → Verify reminder email.  
 → Submit test webhook result → Check sheet update and notification email.  

8. **Go Live**  
 → Enable the 5-minute cron trigger.  
 → Monitor sheet for real entries on Thursday, October 23, 2025, or your next interview day. 