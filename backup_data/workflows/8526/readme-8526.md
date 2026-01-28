# Evaluate interview & update scores with Azure GPT-4o-mini and Google Sheets

> ## Description
Automatically score candidate questionnaire responses using Azure OpenAI (GPT-4o-mini), combine them with existing evaluations from Google Sheets, and keep your candidate database up to date—all in near real time. Get consistent, structured scores and key takeaways for faster, fairer decisions. ⚡📊

**What This Template Does**

- Monitors new questionnaire submissions in Google Sheets every minute. ⏱️
- Evaluates responses with Azure OpenAI and returns structured JSON (score + takeaways). 🤖
- Parses model output safely and normalizes fields. 🧩
- Retrieves existing candidate data from a central Google Sheet. 📂
- Calculates combined final scores and updates/append records by candidate name. ➕

**Key Benefits**
- Consistent, objective scoring across all responses. 🎯
- Real-time processing from form submission to database update. 🚀
- Clear JSON outputs for downstream reporting and analytics. 📈
- No-code customization of questions, weights, and fields. 🛠
- Scales effortlessly with high submission volumes. 📥

**Features**
- Continuous polling of the “BD Questionarie” → “Form Responses 1” sheet. 🔄
- AI evaluation with GPT-4o-mini returning score (0–30) and takeaways. 🧠
- Resilient JSON parsing (handles code fences and errors). 🧼
- Candidate lookup in “Resume store” → “Sheet2” for data fusion. 🔗
- Additive scoring model: Final Score = Existing Score + Questionnaire Score. ➕
- Append or update records by name while preserving existing data. 📝

**Requirements**
- n8n instance (Cloud or self-hosted). 🌐
- Google Sheets access:
- “BD Questionarie” spreadsheet (sheet: “Form Responses 1”) for new responses.
- “Resume store” spreadsheet (sheet: “Sheet2”) for existing profiles.
- Credentials configured in n8n (OAuth/Service Account) with read/write where needed. 🔐
- Azure OpenAI access with a GPT-4o-mini deployment for evaluation and JSON output. 🤖
- Ability to customize evaluation questions and scoring weights within the workflow. ⚙️

**Target Audience**
- Teams evaluating candidate questionnaires and consolidating scores. 👥
- Operations teams centralizing hiring data in Google Sheets. 🗂️
- Organizations seeking real-time, AI-assisted screening. 🧭
- No-code/low-code builders standardizing hiring workflows. 🧱

**Step-by-Step Setup Instructions **

- Connect Google Sheets in n8n Credentials; grant access to “BD Questionarie” and “Resume store.” 🔑
- Add Azure OpenAI credentials in n8n; ensure a GPT-4o-mini deployment is available. 🤝
- Import the workflow, assign credentials to each node, and set the sheet IDs/ranges. 📋
- Confirm name is the matching key, and adjust evaluation weights or questions as needed. ⚖
- Run once to validate parsing and score calculation, then enable polling (every minute). ▶️

## 📊 Basic Information

- **Workflow ID:** 8526
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 108
- **Downloads:** 10
- **Created:** 2025/9/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8526)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **googleSheets** (×2)
- **code** 
- **set** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
