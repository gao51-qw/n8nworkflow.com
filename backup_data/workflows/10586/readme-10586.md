# Score website leads with GPT-4o, respond via Gmail, and notify via Telegram

> ### Automate your lead qualification process with AI-driven scoring!

This workflow captures website form submissions, automatically scores leads using AI based on custom criteria, stores data in Google Sheets, sends instant notifications to your sales team via Telegram, and delivers personalized auto-reply emails to prospects.

### Who's it for
- Sales and marketing teams managing inbound leads
- Agencies handling client inquiries
- SaaS companies qualifying trial signups
- B2B businesses prioritizing lead follow-up
- Service providers automating client onboarding

### How it works
1. **Webhook receives** form submission from your website
2. **Extracts** all form fields (name, email, company, etc.)
3. **AI analyzes** submission and assigns priority score (⚪️🟢🔵🟣🔴)
4. **Combines** form data with AI score
5. **Saves** complete lead data to Google Sheets
6. **Sends** instant notification to sales team via Telegram
7. **Delivers** personalized auto-reply email to prospect

## 📊 Basic Information

- **Workflow ID:** 10586
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 169
- **Downloads:** 16
- **Created:** 2025/11/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10586)

## 👤 Author

- **Name:** Mattis
- **Username:** @iiiii

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **googleSheets** 
- **telegram** 
- **set** (×3)
- **gmail** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **merge** 
- **stickyNote** (×12)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
