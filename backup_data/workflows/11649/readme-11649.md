# Post-surgery patient triage & follow-up system with Gemini AI, Telegram & Google Suite

> ## Who’s it for
This template is for clinics, hospitals, care teams, and telemedicine providers who need a structured, automated system for post-surgery follow-up. It helps reduce manual workload while ensuring every patient gets timely check-ins and appropriate triage.

## What it does / How it works
This workflow automates daily recovery monitoring using Google Sheets and Telegram.  
It sends scheduled check-in messages to all patients within their follow-up window.  
When a patient replies, the message is:

- Captured by Telegram Trigger  
- Cleaned and structured  
- Summarized by an AI agent  
- Classified into **low**, **moderate**, or **high** intensity  

Based on the intensity level:

- **Low:** Sends a supportive, non-urgent response  
- **Moderate:** Sends guidance + schedules a follow-up event in Google Calendar  
- **High:** Sends an alert email to the doctor via Gmail  

All logic runs automatically.

## Requirements
- Google Sheets OAuth2 credentials  
- Gmail OAuth2 credentials  
- Google Calendar OAuth2 credentials  
- Telegram Bot credentials  
- Gemini API credentials  
- A Google Sheet with patient name, surgery type, follow-up duration, and doctor email  

## How to set up
1. Connect all required credentials inside n8n.  
2. Replace the Google Sheet ID with your own patient sheet.  
3. Adjust column mappings if your sheet structure differs.  
4. Test by sending a Telegram message to your bot.  
5. Enable the Schedule Trigger to begin automated daily follow-ups.

## How to customize the workflow
- Modify AI prompts inside the AI Agent nodes  
- Adjust triage logic for intensity levels  
- Change follow-up intervals in the Schedule Trigger  
- Add additional notification channels (SMS, Slack, CRM logging)  


## 📊 Basic Information

- **Workflow ID:** 11649
- **Complexity:** advanced
- **Node Count:** 43
- **Views:** 52
- **Downloads:** 5
- **Created:** 2025/12/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11649)

## 👤 Author

- **Name:** Pixcels Themes
- **Username:** @pixcelsthemes

## 🏷️ Categories

- Ticket Management
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** 
- **code** (×2)
- **telegram** (×5)
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×7)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×7)
- **if** 
- **googleSheetsTool** (×5)
- **set** 
- **switch** 
- **gmailTool** 
- **httpRequestTool** 
- **googleCalendarTool** 
- **telegramTool** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 43 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
