# Generate post-event reports with GPT-4, email delivery & database storage

> Streamline your post-event analysis with this smart n8n workflow. Triggered by a simple webhook, it instantly gathers attendee and engagement data from your event platform, calculates key metrics, and uses AI to generate a polished, professional report. The final summary is emailed to stakeholders and saved securely in a database — all without manual effort. Perfect for conferences, webinars, and corporate events. 📧📈


### Key Features  
- **Webhook triggered** – Starts instantly via HTTP POST request  
- **Multi-source data collection** – Fetches attendees & engagement metrics  
- **Advanced analytics** – Calculates attendance rates, engagement scores, top sessions  
- **AI-powered insights** – Uses GPT-4 to generate professional reports  
- **Auto-email delivery** – Sends report to stakeholders  
- **Database archiving** – Saves reports to PostgreSQL  


### What it Analyzes  
- Attendance rates & check-ins  
- Average session time  
- Engagement scores (polls, Q&A, networking)  
- Top performing sessions  
- Attendee breakdown (by role & company)  
- AI-generated insights & recommendations  


### Workflow Process  
- The **Webhook Trigger** node starts the workflow when an HTTP POST request is received with event details.  
- **Get Attendees (GET)** pulls the list of registered and checked-in participants from your event system.  
- **Get Engagement Metrics (GET)** retrieves interaction data like poll responses, Q&A activity, and session views.  
- **Process Metrics** calculates key stats: attendance rate, average session duration, engagement score, and ranks top sessions.  
- **AI Generate Report** uses GPT-4 to create a clear, professional summary with insights and recommendations based on the data.  
- **AI Agent** coordinates data flow and prepares the final report structure using chat model and memory tools.  
- **Save to Database (Insert)** stores the full report and raw metrics in PostgreSQL for future reference.  
- **Send Report Email** automatically emails the AI-generated report to the specified recipient.  
- **Send Response** returns a confirmation back to the triggering system via webhook.  


### Setup Instructions  
- Import this JSON into n8n  
- Configure credentials:  
  - Event API (for GET requests)  
  - OpenAI (GPT-4)  
  - SMTP (for email delivery)  
  - PostgreSQL (for data storage)  
- Trigger via webhook with event data  
- Receive comprehensive report via email within minutes!  


### Prerequisites  
- Event platform with REST API (for attendee & engagement data)  
- OpenAI API key (GPT-4 access)  
- SMTP server credentials (Gmail, SendGrid, etc.)  
- PostgreSQL database with write access  


### Example Webhook Payload  
```json
{
  "eventId": "evt_123",
  "eventName": "Tech Summit 2025",
  "eventDate": "2025-10-29",
  "email": "manager@company.com"
}
```


### Modification Options  
- Add custom metrics in the **Process Metrics** node (e.g., NPS score, feedback sentiment)  
- Change AI tone in **AI Generate Report** (formal, executive summary, or creative)  
- Modify email template in **Send Report Email** with your branding  
- Connect to different data sources by updating GET nodes  
- Add Slack or Teams notification after **Send Report Email**  


**Ready to automate your event reporting?**  
[Get in touch with us](https://www.oneclickitsolution.com/contact-us/) for custom n8n workflows!

## 📊 Basic Information

- **Workflow ID:** 10281
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 142
- **Downloads:** 14
- **Created:** 2025/10/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10281)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **httpRequest** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **emailSend** 
- **postgres** 
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
