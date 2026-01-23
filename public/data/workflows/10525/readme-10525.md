# Health monitoring system with Grok-3 AI analysis and family/doctor email alerts

> ## Introduction
Automates patient health monitoring by analyzing submitted health data via AI, determining alert necessity, and notifying family and doctors when critical conditions detected.  

## How It Works
Webhook receives health data, AI agent analyzes vitals using OpenRouter with structured parsing. Conditional logic checks alert necessity. If yes: prepares data, emails family, checks doctor criteria, sends doctor email, merges results. If no: skips alerts. Combines outcomes and responds to webhook.

## Workflow Template
Webhook → Extract Data → AI Agent → [OpenRouter + Memory + Parser] → Check Alert → [Prepare + Email Family + Check Doctor + Email Doctor] OR [No Alert] → Merge → Combine → Respond


## Workflow Steps
1. **Reception & Extraction:** Webhook receives vitals/symptoms, parses JSON payload
2. **AI Analysis:** OpenRouter analyzes vitals against ranges, accesses history via Memory Tool, formats assessment via Output Parser
3. **Routing & Notification:** Conditional logic checks severity. Alert path emails family/doctor if critical. No alert logs status
4. **Consolidation:** Merges outcomes, sends webhook response

## Setup Instructions
Configure webhook endpoint with auth token. Add OpenRouter API key and select model. Set up AI Agent with Memory Tool and Output Parser. Connect Gmail/SMTP for notifications with recipient addresses. Configure alert thresholds (temp &gt;38.5°C, BP &gt;140/90, HR &lt;60/&gt;100). Set doctor notification criteria.

## Prerequisites
n8n instance, OpenRouter API key, AI model access, Patient database, Gmail/SMTP credentials, Family contacts, Doctor contacts, Webhook authentication

## Use Cases
**Chronic Disease:** Diabetic submits glucose readings. AI detects &gt;250mg/dL, alerts family and endocrinologist. **Elderly Care:** Senior's vitals monitored via wearable. AI identifies irregular rhythm, emails caregiver and cardiologist.  

## Customization
Adjust thresholds by demographics. Add vital types (O2, glucose trends). Customize AI prompts for conditions. Integrate SMS via Twilio. Add escalation logic. Include medication tracking. Connect EHR systems. Implement frequency limits. Add dashboard reporting.

## Benefits
**Rapid Response:** Detects emergencies in seconds. **Intelligent Filtering:** Prevents false alarms. **Family Peace:** Automated notifications keep loved ones informed. **Clinical Efficiency:** 




## 📊 Basic Information

- **Workflow ID:** 10525
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 190
- **Downloads:** 19
- **Created:** 2025/11/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10525)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **set** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** (×2)
- **emailSend** (×2)
- **merge** 
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
