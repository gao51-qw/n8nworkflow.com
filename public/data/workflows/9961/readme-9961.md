# Ai-powered lead scoring & personalized responses with JotForm, GPT, and Gmail

> ## Who's it for
This workflow is perfect for digital marketing agencies, sales teams, and business development professionals who want to automate lead qualification, scoring, and personalized outreach. If you're tired of manually reviewing every form submission and crafting individual responses, this template will save you hours while improving response quality.

## What it does
This AI-powered lead management system automatically processes JotForm submissions through a sophisticated 6-step pipeline:

1. **Captures leads** from JotForm submissions in real-time
2. **Scores each lead** using AI (GPT-4.1-nano) based on budget, company fit, and project clarity
3. **Logs all data** to Google Sheets with AI scores, tiers (high/medium/low), and reasoning
4. **Enriches company information** by fetching industry, employee count, tech stack, and location data
5. **Generates personalized emails** that reference the lead's specific needs and company insights
6. **Sends tailored responses** via Gmail with tier-appropriate calls-to-action

High-tier leads get priority treatment with direct calendar links, medium-tier leads receive consultation offers, and low-tier leads are sent helpful resources—all automatically.

## How to set up

### Requirements
- JotForm account with a contact form (free tier works)
- OpenAI API key with GPT-4.1-nano access
- Google account for Sheets and Gmail
- Company enrichment API endpoint (see setup guide below)

### Setup steps

1. **Clone this workflow** to your n8n instance
2. **Configure JotForm Trigger**: Connect your JotForm account and select your contact form
3. **Add OpenAI credentials**: Both AI nodes use the same OpenAI API key
4. **Set up Google Sheets**: Create a new spreadsheet with columns: first_name, last_name, company, email, message, estimated_budget, ai_score, ai_tier, ai_reasoning
5. **Configure Gmail**: Connect your Gmail account for sending responses
6. **Set up enrichment API**: Deploy the company enrichment workflow (workflow #9960) and update the webhook URL in the "API: Company Enrichment Request" node

### Company Enrichment API Setup
The enrichment API is a separate workflow that fetches company data. You can:
- Use the [enrichment workflow template](https://drive.google.com/file/d/1OK0s6v9m-Hk0Esb1t4BhVT8wP41XkBLj/view?usp=sharing/)
- Deploy it to your n8n instance
- Update the webhook URL in the HTTP Request node to point to your deployed version

## How to customize

**Adjust AI scoring criteria**: Modify the system prompt in "AI: Lead Scoring Analysis" to match your ideal customer profile and budget thresholds

**Customize email templates**: Edit the system prompt in "AI: Generate Personalized Email" to match your brand voice and offerings

**Add more data points**: Extend the Google Sheets schema to capture additional form fields or enrichment data

**Change email provider**: Swap Gmail for Outlook, SendGrid, or any SMTP service

**Add notifications**: Insert a Slack or Discord node after lead scoring to alert your team about high-tier leads instantly

**Implement lead routing**: Add an IF node after scoring to route high-value leads to senior team members.

## 📊 Basic Information

- **Workflow ID:** 9961
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 335
- **Downloads:** 33
- **Created:** 2025/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9961)

## 👤 Author

- **Name:** Naveen Choudhary
- **Username:** @n8nstein

## 🏷️ Categories

- Lead Nurturing
- AI Summarization

## 🔗 Nodes Used

- **jotFormTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **code** 
- **googleSheets** 
- **httpRequest** 
- **gmail** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
