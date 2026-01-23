# Automated post-purchase emails for Gumroad with Notion CRM and Gemini AI

> ## Mirai MailFlow – Gumroad Personalized Autoreply

This n8n template automates post-purchase communication for Gumroad creators by sending AI-powered personalized thank-you emails and logging customer data into Notion. It helps creators engage buyers instantly while keeping a clean customer CRM — fully hands-free.

**Use cases**

- Automatically send personalized thank-you emails after every Gumroad purchase
- Maintain a lightweight customer CRM in Notion
- Reduce manual email follow-ups for digital product sales
- Improve buyer experience and post-purchase engagement
- Build a foundation for creator support, upsells, or onboarding flows

**Good to know**
This workflow connects to a few external services, so credentials must be configured before running the template. It works on both n8n Cloud and self-hosted instances, and setup typically takes 5 minutes.

### Requirements

- n8n Cloud or self-hosted instance
- Gmail account (OAuth connected) to receive and send emails
- Notion account with a customer database
- Google Gemini API key for AI-generated email content

### Customising this workflow
- Replace Gmail with Slack, Telegram, or WhatsApp for message delivery
- Swap Google Gemini with OpenAI or Claude for different writing styles
- Add follow-up emails, upsells, or discount links
- Extend the Notion database into a full creator CRM
- Use it as a base for Gumroad analytics, support automation, or AI creator tools

## 📊 Basic Information

- **Workflow ID:** 11758
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 9
- **Downloads:** 0
- **Created:** 2025/12/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11758)

## 👤 Author

- **Name:** Paul Abraham
- **Username:** @hellopaul

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **gmailTrigger** 
- **notion** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **gmail** 
- **if** 
- **stopAndError** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
