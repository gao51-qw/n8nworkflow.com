# Qualify & route leads with GPT-4o, Clearbit, HubSpot CRM & Slack alerts

> ### How it works
• Webhook receives lead form submissions from your website
• AI Agent (GPT-4o) analyzes lead quality using intelligent scoring framework
• Clearbit enriches company data automatically (employee count, industry, revenue)
• Qualification score (0-100) determines routing: high-quality leads → HubSpot CRM + Slack alert, low-quality leads → Airtable for manual review
• Structured output parser ensures reliable JSON formatting every time

### Set up steps
• **Time to set up:** 15-20 minutes
• Import the Clearbit sub-workflow first (separate workflow file included)
• Create 7 custom properties in HubSpot (qualification_score, buying_intent, urgency_level, budget_indicator, ai_summary, pain_points, recommended_action)
• Create Airtable base with 14 columns for low-quality lead tracking
• Get Slack channel IDs for sales alerts and review requests
• Add credentials: OpenAI (GPT-4o), Clearbit API, HubSpot OAuth2, Slack OAuth2, Airtable Token
• Replace placeholder IDs in Slack and Airtable nodes
• Configure the Clearbit Enrichment Tool node with your sub-workflow ID

### What you'll need
• **OpenAI API** - OpenAI model access for AI qualification
• **Clearbit API** - Free tier available for company enrichment
• **HubSpot** - Free CRM account works
• **Slack** - Standard workspace
• **Airtable** - Free plan works
• **Website form** - To send webhook data

### Who this is for
Sales teams and agencies that want to automatically qualify inbound leads before they hit the CRM. Perfect for B2B companies with high lead volume that need intelligent routing.

## 📊 Basic Information

- **Workflow ID:** 9162
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 158
- **Downloads:** 15
- **Created:** 2025/10/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9162)

## 👤 Author

- **Name:** Greypillar
- **Username:** @greypillar

## 🏷️ Categories

- Lead Generation
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **if** (×2)
- **executeWorkflowTrigger** 
- **httpRequest** 
- **code** (×3)
- **stickyNote** (×2)
- **airtable** 
- **slack** (×2)
- **hubspot** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
