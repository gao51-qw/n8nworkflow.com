# Automate recruitment with GPT-4o-mini: CV screening to interview scheduling in Airtable

> ## Introduction
Automate candidate evaluation from CV submission to interview booking. Perfect for HR teams and recruiters.
## How It Works
Webhook receives CVs, extracts Airtable data, AI assesses qualifications, filters candidates, sends emails, schedules Google Calendar interviews, and updates records.
## Workflow Template
Webhook → Airtable (Get Data) → AI Extract CV → AI Assessment → Filter Qualified → Generate Email → Send Email → Filter Interview Candidates → Schedule Calendar → Update Airtable → Slack Notification → Respond
## Workflow Steps
1. Receive & Store: Webhook receives CVs, saves to Airtable.
2. Fetch & Download: Gets job criteria, downloads CVs.
3. AI Assessment: Parses skills, scores candidates.
4. Filter & Email: Routes qualified, sends messages.
5. Schedule & Update: Books interviews, updates Airtable.
6. Notify: Alerts via Slack, confirms status.
## Setup Instructions
1. **Webhook & Airtable:** Set URL, create tables, add credentials.
2. **AI Configuration:** Add OpenAI key, define schema, customize scoring.
3. **Communication:** Connect Gmail, Calendar, and Slack.
## Prerequisites
- Airtable account
- OpenAI API key
- Gmail and Google Calendar
- Slack workspace (optional)
## Customization
- Multi-stage scheduling
- ATS integration (Greenhouse, Lever)
## Benefits
- Reduces screening time by 90%
- Ensures uniform evaluation
- Cuts time-to-hire by 60%

## 📊 Basic Information

- **Workflow ID:** 10292
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 650
- **Downloads:** 65
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10292)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **airtable** (×4)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **filter** (×2)
- **emailSend** 
- **googleCalendar** 
- **slack** 
- **respondToWebhook** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
