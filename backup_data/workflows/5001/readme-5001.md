# Interview Scheduling Automation with Google Sheets, Calendar, Gmail & GPT-4o'

> **SEO-Optimized Description:**

Streamline your interview scheduling process with this intelligent n8n automation template powered by Google Calendar, Google Sheets, and GPT-4. This workflow reads candidate information from a spreadsheet, automatically schedules interviews in Google Calendar, and sends personalized interview invitation emails—all without manual input.

**What This Template Does:**

📋 Monitors a Google Sheet for new candidate entries every minute
🕒 Auto-selects the next available interview slot (Mon/Wed/Fri at 3 PM)
📅 Creates a calendar invite in your Google Calendar
✍️ Uses GPT-4 to generate personalized emails based on candidate data
📧 Sends the email invite with the interview link via Gmail

**Built-in logic ensures:**

- Candidates never get same-day interviews
- AI-generated emails are concise, polite, and professionally formatted
- Scheduling remains conflict-free and easy to manage

**Requirements:**

- Google Calendar API credentials
- Google Sheets with candidate info (Name, Email, Background)
- Gmail account with OAuth2
- Azure OpenAI API (GPT-4o recommended)

**Perfect For:**

 Startups, HR teams, and recruiters looking to automate interview scheduling, eliminate back-and-forth emails, and deliver a professional candidate experience—all with zero hassle.


## 📊 Basic Information

- **Workflow ID:** 5001
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 10519
- **Downloads:** 1051
- **Created:** 2025/6/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5001)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- HR
- Multimodal AI

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **googleCalendar** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
