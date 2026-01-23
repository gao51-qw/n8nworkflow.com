# Analyze high-priority tenders from Airtable to Slack for Go/No-Go approval

> ## 📊 Description
Streamline management decision-making by automatically evaluating high-priority tenders, generating AI-powered executive summaries, and routing them for approval inside Slack. 🤖📩 This workflow pulls pending tenders from Airtable, uses GPT-4o-mini to evaluate urgency, business opportunity, and risk, and generates a structured summary with a Go/No-Go recommendation. Tenders that qualify are pushed to Slack with interactive approval buttons, and the final decision instantly updates Airtable and triggers a confirmation email to your bid team. Perfect for fast-moving procurement, bidding, and sales teams that require structured, high-quality tender assessments. 📊⚡

## 🔁 What This Template Does
1️⃣ Runs daily via Schedule Trigger to fetch high-priority pending tenders from Airtable. ⏰
 2️⃣ Sends each tender to the AI agent for evaluation (urgency, risk, opportunity). 🤖
 3️⃣ Generates structured JSON output:
 — urgency
 — priorityScore
 — executive summary
 — Go/No-Go recommendation
 — reasoning
 4️⃣ Formats AI output for Slack review and Airtable updates. 📝
 5️⃣ Checks if tender qualifies as “High urgency + High score + Go.” 🚦
 6️⃣ Sends interactive Slack message with Approve/Reject buttons. 💬
 7️⃣ If approved → updates Airtable status to Approved and sends Gmail confirmation. 📧
 8️⃣ If rejected or low-score → updates Airtable status accordingly. ✏️
 9️⃣ If no priority tenders exist → sends fallback Slack notification. 📭

## ⭐ Key Benefits
✅ Eliminates manual tender review and scoring
 ✅ AI creates consistent, executive-ready summaries
 ✅ Fast approval flow inside Slack with built-in decision logging
 ✅ Clear Go/No-Go framework for quality tender selection
 ✅ Updates Airtable automatically with final decision
 ✅ Sends email confirmation for approved tenders — ensuring next steps start immediately

## 🧩 Features
Daily Airtable lookup for high-priority tenders
GPT-4o-mini AI scoring & structured evaluation
Automatic Go/No-Go decision logic
Slack interactive approval (Approve / Reject)
Auto-update to Airtable (Status = Approved / Pending)
Gmail confirmation email to the bid team
JSON output parser for reliable AI formatting
Tender link embedding for quick access

## 🔐 Requirements
Airtable Personal Access Token
OpenAI API key (GPT-4o-mini)
Slack API credentials
Gmail OAuth2 credentials
Airtable table with tender fields (Priority, Status, Summary, Dates, etc.)

## 🎯 Target Audience
Procurement teams evaluating multiple tenders
Management teams needing fast approval workflows
Business development & bidding teams
Companies tracking tenders in Airtable
Organizations adopting AI-assisted decision processes


## 📊 Basic Information

- **Workflow ID:** 11526
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 120
- **Downloads:** 12
- **Created:** 2025/12/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11526)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 
- **if** (×2)
- **airtable** (×3)
- **slack** (×3)
- **stickyNote** (×7)
- **gmail** 
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
