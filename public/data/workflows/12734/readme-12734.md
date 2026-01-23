# Coordinate patient care and alerts with EHR/FHIR, GPT-4, Twilio, Gmail and Slack

> ## How It Works
This workflow automates end-to-end patient care coordination by monitoring appointment schedules, clinical events, and care milestones while orchestrating personalized communications across multiple channels. Designed for healthcare operations teams, care coordinators, and patient engagement specialists, it solves the challenge of manual patient follow-up, missed appointments, and fragmented communication across care teams. The system triggers on scheduled intervals and real-time clinical events, ingesting data from EHR systems, appointment schedulers, and lab result feeds. Patient records flow through validation and risk stratification layers using AI models that identify high-risk patients, predict no-show probability, and recommend intervention timing. The workflow applies clinical protocols for appointment reminders, medication adherence checks, and post-discharge follow-ups. Critical cases automatically route to care coordinators via Slack alerts, while routine communications deploy via SMS, email, and patient portal notifications. All interactions log to secure databases for compliance documentation. This eliminates manual outreach coordination, reduces no-shows by 40%, and ensures HIPAA-compliant patient engagement at scale.

## Setup Steps
1. Configure EHR/FHIR API credentialsfor patient data access
2. Set up webhook endpoints for real-time clinical event notifications
3. Add OpenAI API key for patient risk stratification and communication personalization
4. Configure Twilio credentials for SMS and voice call delivery
5. Set Gmail OAuth or SMTP credentials for email appointment reminders
6. Connect Slack workspace and define care coordination alert channels


## Prerequisites
Active EHR system with FHIR API access or HL7 integration capability.  
## Use Cases
Automated appointment reminder campaigns reducing no-shows.
## Customization
Modify risk scoring models for specialty-specific patient populations. 
## Benefits
Reduces patient no-show rates by 40% through timely, personalized reminders. 

## 📊 Basic Information

- **Workflow ID:** 12734
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12734)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **webhook** 
- **set** (×2)
- **httpRequest** 
- **code** (×4)
- **if** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **switch** 
- **postgres** (×5)
- **slack** 
- **emailSend** 
- **twilio** 
- **merge** 
- **aggregate** 
- **wait** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
