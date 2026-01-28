# Screen resumes & send follow-ups with OpenAI GPT-4o, Google Sheets & Gmail

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

## 🧠 How It Works

This workflow automates the process of screening resumes using AI, logging results to Google Sheets, and sending follow-up emails via Gmail.

1. User uploads their resume via a form (PDF only).
2. Resume content is extracted and sent to OpenAI for evaluation.
3. AI scores the resume based on:
   - Role-specific must-have qualifications
   - Soft skills / strategic fit questions
4. Based on the **score threshold**, the candidate is classified as:
   - ✅ **Accepted** → Saved to Accepted sheet + Gmail invite
   - ❌ **Rejected** → Logged to Rejected sheet + Gmail rejection message
5. Output is stored in Google Sheets with detailed justification.

---

## ⚙️ Set Up Steps

1. 🔑 Connect your OpenAI and Google Sheets credentials.
2. Replace the placeholder tags in the AI prompt:
   - `COMPANY_NAME`
   - `ROLE_NAME`
   - `ROLE_DESCRIPTION`
   - `CRITERIA_1` to `CRITERIA_5`
   - `Q1` to `Q5`
   - `THRESHOLD` (score to pass)
3.  Customize Gmail messages (optional).
4. ✅ Make sure your sheet has two tabs: `Accepted` and `Rejected`.

---

## 📌 Notes

Sticky Notes included in the flow explain:
- What each node does
- Where to replace variables
- Tips for improving match scoring


## 📊 Basic Information

- **Workflow ID:** 5464
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 924
- **Downloads:** 92
- **Created:** 2025/6/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5464)

## 👤 Author

- **Name:** Abdulaziz
- **Username:** @abdulaziz747

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **stickyNote** (×4)
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
