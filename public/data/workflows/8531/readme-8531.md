# Score resumes against JDs with Google Drive, Google Sheets, and GPT-4o

> ## Description
Automatically compare candidate resumes to job descriptions (PDFs) from Google Drive, generate a 0–100 fit score with gap analysis, and update Google Sheets—powered by Azure OpenAI (GPT-4o-mini). Fast, consistent screening with saved reports in Drive. 📈📄

## What This Template Does
- Fetches job descriptions and resumes (PDF) from Google Drive. 📥
- Extracts clean text from both PDFs for analysis. 🧼
- Generates an AI evaluation (score, must-have gaps, nice-to-have bonuses, summary). 🤝
- Parses the AI output to structured JSON. 🧩
- Delivers a saved text report in Drive and updates a Google Sheet. 🗂️

## Key Benefits
- Saves time with automated, consistent scoring. ⏱️
- Clear gap analysis for quick decisions. 🔍
- Audit-ready reports stored in Drive. 🧾
- Centralized tracking in Google Sheets. 📊
- No-code operation after initial setup. 🧑‍💻

## Features
- Google Drive search and download for JDs and resumes. 📂
- PDF-to-text extraction for reliable parsing. 📝
- Azure OpenAI (GPT-4o-mini) comparison and scoring. 🤖
- Robust JSON parsing and error handling. 🛡️
- Automatic report creation in Drive. 💾
- Append or update candidate data in Google Sheets. 📑

## Requirements
- n8n instance (cloud or self-hosted).
- Google Drive credentials in n8n with access to JD and resume folders (e.g., “JD store”, “Resume_store”).
- Azure OpenAI access with a deployed GPT-4o-mini model and credentials in n8n.
- Google Sheets credentials in n8n to append or update candidate rows.
- PDFs for job descriptions and resumes stored in the designated Drive folders.

## Target Audience
- Talent acquisition and HR operations teams. 🧠
- Recruiters (in-house and agencies). 🧑‍💼
- Hiring managers seeking consistent shortlisting. 🧭
- Ops teams standardizing candidate evaluation records. 🗃️

## Step-by-Step Setup Instructions
- Connect Google Drive and Google Sheets in n8n Credentials and verify folder access. 🔑
- Add Azure OpenAI credentials and select GPT-4o-mini in the AI node. 🧠
- Import the workflow and assign credentials to all nodes (Drive, AI, Sheets). 📦
- Set folder references for JDs (“JD store”) and resumes (“Resume_store”). 📁
- Run once to validate extraction, scoring, report creation, and sheet updates. ✅

## 📊 Basic Information

- **Workflow ID:** 8531
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 147
- **Downloads:** 14
- **Created:** 2025/9/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8531)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **googleDrive** (×10)
- **extractFromFile** (×4)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** (×2)
- **code** (×2)
- **googleSheets** (×2)
- **stickyNote** (×14)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
