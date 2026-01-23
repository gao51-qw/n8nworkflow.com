# Summarize calls & notify teams via HubSpot, Slack, Email, WhatsApp

> This workflow automates the process of handling conversation transcriptions and distributing key information across your organization. Here's what it does:

**Trigger:** The workflow is initiated via a webhook that receives a transcription (e.g., from a call or meeting).

**Summarization & Extraction:** Using AI, the transcription is summarized, and key information is extracted — such as action items, departments involved, and client details.

**Department Notifications:** The relevant summarized information is automatically routed to specific departments via email based on content classification.

**CRM Sync:** The summarized version is saved to the associated contact or deal in HubSpot for future reference and visibility.

**Multi-Channel Alerts: **The summary is also sent via WhatsApp and Slack to keep internal teams instantly informed, regardless of platform.

**Use Case:**
Ideal for sales, customer service, or operations teams who manage client conversations and want to ensure seamless cross-departmental communication, documentation, and follow-up.

**Apps Used:**

Webhook (Trigger)

OpenAI (or other AI/NLP for summarization)

HubSpot

Email

Slack

WhatsApp (via Twilio or third-party provider)



## 📊 Basic Information

- **Workflow ID:** 4641
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 9306
- **Downloads:** 930
- **Created:** 2025/6/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4641)

## 👤 Author

- **Name:** Encoresky
- **Username:** @encoresky

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmailTool** 
- **slack** 
- **whatsApp** 
- **webhook** 
- **set** 
- **hubspot** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
