# Sync events from Excel to Google Calendar with GPT-4o-Mini smart summaries

> ## **Introduction**
Automatically imports Excel schedules from Google Drive, validates data with AI, syncs to Google Calendar, 
and emails smart summaries. Ideal for educators, managers, and administrators handling recurring academic
or project schedules.
## **How It Works**
Trigger → Download Excel → Filter events → Dual AI analysis (OpenAI + Parser) → Merge insights 
→ Enrich data → Create/Update Google Calendar events → Generate and email AI summary.
## **Workflow Template**
Trigger → Download Excel → Filter Events → AI Analysis → Merge Insights → Enrich Data 
→ Create/Update Calendar → AI Summary → Email Report
## **Workflow Steps**
1. **Trigger**: Runs on schedule to detect new files.
2. **Read Excel**: Converts spreadsheet data to JSON.
3. **Filter Events**: Removes invalid entries.
4. **AI Context Analysis**: Understands event links and conflicts.
5. **Structured Parser**: Formats AI output for consistency.
6. **Merge Insights**: Combines multi-AI results.
7. **Enrich Data**: Prepares Google Calendar-ready events.
8. **Calendar Actions**: Creates or updates events.
9. **AI Summary**: Generates executive overview.
10. **Email Delivery**: Sends formatted summary report.
## **Setup**
1. **Google Drive**: Connect OAuth2 → get file ID.
2. **Calendar**: Enable API → authorize in n8n.
3. **OpenAI**: Add API key → select GPT model.
4. **Email (Gmail/SMTP)**: Configure sender and recipients.
5. **Trigger**: Set timezone and frequency.
6. **Excel Format**: Include Name, Date, Time, Location, Staff, etc.



## 📊 Basic Information

- **Workflow ID:** 10376
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 156
- **Downloads:** 15
- **Created:** 2025/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10376)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **spreadsheetFile** 
- **googleDrive** 
- **set** (×4)
- **filter** 
- **googleCalendar** (×2)
- **emailSend** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **merge** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
