# Automate Zendesk Support replies with GPT-4o-mini, Google Sheets & Gmail

> ## Description
This workflow automates Zendesk ticket handling with AI-powered auto-replies. It pulls in new support tickets, checks against a Google Sheets FAQ database, and generates accurate responses using GPT-4o-mini. If the question matches an FAQ, the system replies with the predefined answer; otherwise, it drafts a polite, professional custom response. Finally, the workflow formats and sends the reply via Gmail, ensuring customers always receive quick and reliable support.

## What This Template Does (Step-by-Step)
🎫 Fetch Latest Zendesk Ticket
 Retrieves and filters tickets, keeping only the most recent one.
📋 Load FAQ Knowledge Base (Google Sheets)
 Provides predefined answers for common support queries.
🔀 Merge Ticket + FAQs
 Combines ticket details and FAQ list into one clean dataset.
🧹 Prepare Data for AI
 Restructures merged data into JSON with two sections: ticket + faqs.
🤖 Generate Support Reply (Azure OpenAI GPT-4o-mini)
- If ticket matches FAQ → sends exact predefined answer.
- If no match → crafts a polite AI-generated reply.
📧 Fetch Requester Email (Zendesk)
 Resolves requester_id into a usable customer email.
🔗 Merge Reply + User Info
 Joins AI reply with customer’s email into one dataset.
📝 Format for Gmail
 Creates a ready-to-send JSON: to, subject, body.
📨 Send Auto-Reply (Gmail)
 Delivers the response directly to the customer’s inbox.

## Prerequisites

- Zendesk account & API credentials
- Google Sheet with FAQ list (questions + answers)
- n8n instance (cloud or self-hosted)
- Azure OpenAI API key (GPT-4o-mini)
- Gmail API credentials (for reply delivery)
1
## Step-by-Step Setup
- Connect Zendesk API → Pull latest tickets.
- Configure Google Sheets → Load FAQ dataset.
- Merge both streams (ticket + FAQs) → Prepare JSON.
- Use LLM (Azure OpenAI GPT-4o-mini) → Match against FAQ or generate AI response.
- Fetch Requester Email from Zendesk.
- Merge AI reply + email address.
- Format structured JSON for Gmail.
- Send final email via Gmail OAuth2.

## Customization Ideas
⚡ Add Slack/Teams notification for each reply sent.
 📊 Log all ticket + AI replies into Airtable/Notion for tracking.
 🎨 Personalize tone of AI responses (friendly, formal, technical).
 📂 Add auto-tagging in Zendesk (e.g., “AI handled” vs “FAQ match”).
 🔁 Extend workflow to escalate unresolved queries to human agents.

## Key Benefits
 ✅ Always-on support replies — no waiting time
 ✅ Accurate FAQ answers + fallback to AI-generated responses
 ✅ Seamless Gmail integration for customer communication
 ✅ Reduces manual ticket load on agents
 ✅ Fully customizable for tone, logging, and escalation

## Perfect For
 🎯 Customer support teams handling repetitive queries
 📈 Growing startups needing scalable support
 🤖 Businesses wanting AI + FAQ hybrid support
 📩 Any company using Zendesk + Gmail for customer service


## 📊 Basic Information

- **Workflow ID:** 8744
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 61
- **Downloads:** 6
- **Created:** 2025/9/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8744)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **stickyNote** (×12)
- **manualTrigger** 
- **zendesk** (×2)
- **code** (×3)
- **googleSheets** 
- **merge** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
