## Description
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