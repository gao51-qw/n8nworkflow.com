# AI-powered Candidate Screening & Interview Scheduling with OpenAI GPT & Google Suite

> Streamline your hiring process with intelligent AI-powered candidate screening and automated interview scheduling. This workflow receives applications via webhook, evaluates candidates using OpenAI's GPT model, scores them against job requirements, stores data in Google Sheets, and automatically schedules interviews for high-scoring candidates — all while sending personalized email notifications and updating statuses in real time. Reduce manual screening time and ensure only top candidates move forward. 🤖📧

---

### What This Template Does  

**Step 1:** Triggers on new application submission via **Webhook** (e.g., from job portal or form).  
**Step 2:** Stores applicant data (resume, contact, role) into **Google Sheets** for centralized tracking.  
**Step 3:** Uses **OpenAI GPT** to evaluate candidate fit based on resume, skills, and job requirements.  
**Step 4:** Applies **Scoring Logic**:  
  • Score ≥ 70 → Qualified for interview  
  • Score &lt; 70 → Not a fit  
**Step 5:** Branches based on score:  
  → **High Score Path:**  
   • Sends **Interview Invitation Email**  
   • Creates **Google Calendar Event**  
   • Updates Sheet: Status → “Interview Scheduled”  
  → **Low Score Path:**  
   • Sends **Polite Rejection Email**  
   • Updates Sheet: Status → “Rejected”  
**Step 6:** Final metrics logged and webhook response confirms completion.  

---

### Key Benefits  
✅ Eliminates manual resume screening  
✅ AI evaluates candidates consistently and objectively  
✅ Automates interview scheduling with calendar integration  
✅ Real-time status updates in Google Sheets  
✅ Personalized email communication at every stage  
✅ Full audit trail of decisions and actions  

---

### Features  
- Webhook-triggered application intake  
- Google Sheets as applicant tracking system (ATS)  
- OpenAI GPT-powered candidate evaluation  
- Dynamic scoring threshold (customizable)  
- Conditional branching (High/Low Score)  
- Gmail integration for email notifications  
- Google Calendar auto-event creation  
- Real-time status updates via sheet write-back  
- Final webhook response for system confirmation  

---

### Requirements  
- **GOOGLE_SHEET_ID**: Your Google Sheet ID  
- **Credentials Needed:**  
  1. Google Sheets OAuth2  
  2. Gmail API Key  
  3. OpenAI API Key  
  4. Google Calendar OAuth2  
- **Customize:**  
  • Job requirements & AI prompt  
  • Score threshold (currently 70)  
  • Email templates  
  • Interview scheduling time slots  

---

### Target Audience  
- HR teams managing high-volume applications 👥  
- Recruiters seeking faster shortlisting ⏱️  
- Startups automating early-stage hiring 🚀  
- Tech companies with technical screening needs 💻  
- Remote-first organizations using digital workflows 🌍  

---

### Step-by-Step Setup Instructions  

1. **Set up Google Sheet**  
 → Create a sheet with columns: Name, Email, Resume Link, Role, Status, Score, Timestamp  
 → Replace `YOUR_SHEET_ID` in the workflow with your actual Sheet ID.  

2. **Configure Webhook**  
 → Connect your job application form (e.g., Typeform, LinkedIn, custom portal) to trigger this workflow.  

3. **Add OpenAI API Key**  
 → Insert your OpenAI key and customize the evaluation prompt under “AI Evaluation” node.  

4. **Set Scoring Threshold**  
 → Adjust the “IF – Check Score Threshold” node (default: ≥70 = pass).  

5. **Connect Gmail & Calendar**  
 → Enable Gmail OAuth2 and Google Calendar OAuth2.  
 → Define interviewer email and default interview duration.  

6. **Customize Emails**  
 → Edit “Interview Invitation” and “Rejection Notice” templates with your branding.  

7. **Test the Flow**  
 → Submit a test application via webhook.  
 → Verify: Sheet update → AI score → Email → Calendar event → Status change.  

8. **Go Live**  
 → Enable automation. Monitor first few runs in Google Sheets.  

---

**Workflow Complete!**  
Now sit back as AI screens, scores, schedules, and communicates — all without lifting a finger.  

*Metrics to Track:*  
- Applications received  
- Average AI score  
- Interview rate  
- Time to process  


## 📊 Basic Information

- **Workflow ID:** 10080
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 201
- **Downloads:** 20
- **Created:** 2025/10/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10080)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×7)
- **googleSheets** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** 
- **if** 
- **emailSend** (×2)
- **googleCalendar** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
