# Schedule interviews and send GPT-4 reminders with Google Calendar, Gmail, Slack and Recrutei

> ## Overview: AI-Powered Interview Scheduling & Reminders

This workflow automates the end-to-end process of scheduling technical or behavioral interviews. It captures interview data via Webhook, creates a Google Calendar event with an integrated Google Meet link, generates a personalized, professional reminder email using AI (GPT-4.1-mini), and automatically sends it via Gmail exactly 24 hours before the interview.

## Setup Instructions

To implement this workflow, follow these steps:

1. **Webhook:** Copy the Production URL and configure it in your Recrutei ATS to send interview JSON data.
2. **Google Calendar:** Connect your account. The node is pre-configured to generate a "hangoutsMeet" conference link.
3. **OpenAI:** Requires a valid API Key. The AI acts as a Recruitment Assistant to draft a professional email body.
4. **Wait Node:** Currently set to "1 day before" the interview. You can adjust this timing based on your communication policy.
5. **Gmail:** Connect your recruiter or company account to perform the final delivery.
6. **Recrutei's API:** Inserts your Recrutei token in the Authorization header.

## 📊 Basic Information

- **Workflow ID:** 12043
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 8
- **Downloads:** 0
- **Created:** 2025/12/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12043)

## 👤 Author

- **Name:** Recrutei  Automações 
- **Username:** @paulo-lazari

## 🏷️ Categories

- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **set** (×3)
- **googleCalendar** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **wait** (×2)
- **gmail** (×2)
- **stickyNote** (×7)
- **httpRequest** (×5)
- **if** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
