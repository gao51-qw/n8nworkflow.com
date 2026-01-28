# Resume screening & evaluation system with Gemini AI, Google Sheets & Drive for HR

> 🚀 AI Resume Screener (n8n Workflow Template)

An AI-powered resume screening system that automatically evaluates applicants from a simple web form and gives you clear, job-specific scoring — no manual filtering needed.



⚡ What the workflow does





📄 Accepts CV uploads via a web form (PDF)



🧠 Extracts key info using AI (education, skills, job history, city, birthdate, phone)



🎯 Dynamically matches the candidate to job role criteria stored in Google Sheets



📝 Generates an HR-style evaluation and a numeric score (1–10)



📥 Saves the result in a Google Sheet and uploads the original CV to Google Drive



💡 Why you’ll love it

FeatureBenefitAI scoringInstantly ranks candidate fit without reading every CVGoogle Sheet-drivenEasily update job profiles — no code changesFast setupConnect your accounts and you're live in ~15 minsScalableWorks for any department, team, or organizationDeveloper-friendlyExtend with Slack alerts, translations, or automations



🧰 Requirements





🔑 OpenAI or Google Gemini API Key



📄 Google Sheet with 2 columns: Role, Profile Wanted



☁️ Google Drive account



🌐 n8n account (self-hosted or cloud)



🛠 Setup in 5 Steps





Import the workflow into n8n



Connect Google Sheets, Drive, and OpenAI or Gemini



Add your job roles and descriptions in Google Sheets



Publish the form and test with a sample CV



Watch candidate profiles and scores populate automatically



🤝 Want help setting it up?

Includes free setup guidance by the creator — available by email or WhatsApp after purchase.
I’m happy to assist you in customizing or deploying this workflow for your team.

📧 Email: tharwat.elsayed2000@gmail.com
💬 WhatsApp: +20106 180 3236

## 📊 Basic Information

- **Workflow ID:** 5453
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 14617
- **Downloads:** 1461
- **Created:** 2025/6/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5453)

## 👤 Author

- **Name:** Tharwat Mohamed
- **Username:** @tharwatelsayed

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.informationExtractor** (×2)
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **merge** (×2)
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **googleDrive** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
