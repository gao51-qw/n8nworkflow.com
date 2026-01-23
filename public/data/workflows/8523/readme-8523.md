# Personalized sales outreach with Apollo, GPT, and Gmail automation

> This n8n template shows you how to turn outbound sales into a fully automated machine: scrape verified leads, research them with AI, and fire off personalized cold emails while you sleep.

Use cases are simple: scale B2B lead gen without hiring more SDRs, run targeted outreach campaigns that don’t feel generic, and give founders or agencies a repeatable system that books more calls with less effort.

**Good to know**
- At time of writing, each AI call may incur costs depending on your OpenAI plan.
- This workflow uses Apollo/Apify for lead scraping, which requires an active token.
- Telegram approval flow is optional but recommended for quality control.

**How it works**
- Define your ICP (role, location, industry) in the workflow.
- Generate Apollo search URLs and scrape verified contacts.
- AI enriches leads with personal + company research.
- Hormozi-style cold emails are generated and queued for approval.
- Approve drafts in Telegram, then Gmail automatically sends them out.

**How to use**
- Start with the included Schedule Trigger or replace with a Webhook/Form trigger.
- Adjust ICP settings in the Set node to fit your target audience.
- Test with a small batch of leads before scaling to larger runs.

**Requirements**
- Google Sheets, Docs, Drive, and Gmail connected to n8n
- Apollo/Apify account and token
- OpenAI API key
- Telegram bot for approvals

**Customising this workflow**
- Swap Apollo scraping with another data source if needed.
- Adapt the AI prompt for a different email tone (formal, friendly, etc.).
- Extend with a CRM integration to sync approved leads and outreach results.

## 📊 Basic Information

- **Workflow ID:** 8523
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 381
- **Downloads:** 38
- **Created:** 2025/9/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8523)

## 👤 Author

- **Name:** Tamas Demeter
- **Username:** @tamasdemeter

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** (×2)
- **googleSheets** (×4)
- **code** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **set** (×5)
- **@n8n/n8n-nodes-langchain.openAi** (×4)
- **gmail** 
- **stickyNote** (×5)
- **limit** (×2)
- **splitInBatches** (×2)
- **scheduleTrigger** (×3)
- **googleDocs** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
