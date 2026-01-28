# Automate sales follow-ups with GPT-4o-mini, HubSpot, Slack, Teams & Telegram

> ## How it works

This workflow automatically generates personalized follow-up messages for leads or customers after key interactions (e.g., demos, sales calls). It enriches contact details from HubSpot (or optionally Monday.com), uses AI to draft a professional follow-up email, and distributes it across multiple communication channels (Slack, Telegram, Teams) as reminders for the sales team.

## Step-by-step
**1. Trigger & Input**

- Schedule Trigger – Runs automatically at a defined interval (e.g., daily).

- Set Sample Data – Captures the contact’s name, email, and context from the last interaction (e.g., “had a product demo yesterday and showed strong interest”).

**2. Contact Enrichment**

- HubSpot Contact Lookup – Searches HubSpot CRM by email to confirm or enrich contact details.

- Monday.com Contact Fetch (Optional) – Can pull additional CRM details if enabled.

**3. AI Message Generation**

- AI Language Model (OpenAI) – Provides the underlying engine for message creation.

- Generate Follow-Up Message – Drafts a short, professional, and friendly follow-up email:

- References previous interaction context.

- Suggests clear next steps (call, resources, etc.).

- Ends with a standardized signature block for consistency.

**4. Multi-Channel Communication**

- Slack Reminder – Posts the generated message as a reminder in the sales team’s Slack channel.

- Telegram Reminder – Sends the follow-up draft to a Telegram chat.

- Teams Reminder – Shares the same message in a Microsoft Teams channel.

## Benefits

- Personalized Outreach at Scale – AI ensures each follow-up feels tailored and professional.

- Context-Aware Messaging – Pulls in CRM details and past interactions for relevance.

- Cross-Platform Delivery – Distributes reminders via Slack, Teams, and Telegram so no follow-up is missed.

- Time-Saving for Sales Teams – Eliminates manual drafting of repetitive follow-up emails.

- Consistent Branding – Ensures every message includes a unified signature block.

## 📊 Basic Information

- **Workflow ID:** 8468
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 384
- **Downloads:** 38
- **Created:** 2025/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8468)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **set** 
- **slack** 
- **@n8n/n8n-nodes-langchain.agent** 
- **hubspot** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **mondayCom** 
- **telegram** 
- **microsoftTeams** 
- **stickyNote** (×4)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
