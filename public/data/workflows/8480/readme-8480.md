# Generate business proposals with Azure GPT-4o & save as Gmail drafts from Sheets

> **Description:**

Accelerate your sales cycle with this n8n workflow template that automatically generates professional business proposals and saves them as Gmail drafts—ready to send. No more manual writing or formatting—let AI create polished proposals tailored to each client.

This automation pulls client and deal data from Google Sheets, checks if the lead has reached the Proposal stage, and uses AI to draft structured proposals with clear sections like scope, deliverables, pricing, and timelines. The content is automatically formatted into professional HTML, and drafts are saved in Gmail for review and quick sending.

**What This Template Does:**

 📊 Retrieves client & lead data from Google Sheets
 ⚡ Filters deals at the Proposal stage only
 🧠 Uses AI to generate client-ready business proposals (subject, scope, deliverables, pricing, etc.)
 📝 Cleans and formats AI output into professional HTML proposals
 📧 Saves proposals as Gmail drafts for easy review & sending
 🌟 100% automated: from deal data to polished draft

**Built-in Logic Ensures:**
 ✔️ AI proposals always include required sections (scope, deliverables, pricing, timeline, conclusion)
 ✔️ No extra details are invented—only uses provided client data
 ✔️ Proposals are styled and formatted for professional email delivery
 ✔️ Gmail drafts preserve subject + HTML body, ready to send instantly

**Requirements:**
- Google Sheets with client/deal data (name, email, scope, pricing, stage)
- Gmail account for draft creation & sending
- Azure OpenAI (or compatible) account for AI-powered proposal generation
- n8n instance (self-hosted or cloud)

**Perfect For:**
- Sales teams preparing client proposals at scale
- Agencies looking to standardize proposal structure & speed up delivery
- Startups automating proposal creation from CRM/Sheets
- Business development teams needing ready-to-send drafts without manual effort


## 📊 Basic Information

- **Workflow ID:** 8480
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 40
- **Downloads:** 4
- **Created:** 2025/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8480)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **splitInBatches** 
- **code** 
- **gmail** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
