# Personalize candidate feedback with GPT-4o, Google Sheets & Gmail for HR teams

> ## Description
This workflow automates personalized candidate communication for both shortlisted and rejected applicants. It fetches candidate details, processes resumes, checks for errors, and uses GPT-4o to generate professional HTML emails. Shortlisted candidates receive congratulatory onboarding plans, while rejected candidates receive polite rejections with learning resources.

## What This Template Does (Step-by-Step)
- ⚡ Manual Trigger – Starts the workflow execution.
-  📑 Candidate Data Fetch (Google Sheets) – Pulls structured candidate data (name, email, resume link, skills, job info, status).
-  📥 Resume Downloader (Google Drive) – Downloads candidate resumes from sheet links.
-  ✅ Resume File Check (If Condition) – Ensures the resume file is valid before proceeding.
-  ⚠️ Error Logging (Google Sheets) – Records failed or missing resumes in a dedicated sheet for audit.
-  📄 PDF → Text Extractor – Extracts raw resume text for deeper AI analysis.
-  🧩 Candidate Data Builder (Code Node) – Combines Google Sheets data with extracted resume text into a single enriched JSON object.
-  🎯 Shortlisted vs Rejected (If Condition) – Splits candidates into two flows based on their status field.

## Shortlisted Path
🎉 Congrats + Onboarding Plan (LLM Chain) – GPT-4o generates a congratulatory HTML email including:
- Identified skill gaps
- Recommended online courses (Coursera/Udemy/LinkedIn Learning)
- Next onboarding steps
📧 Candidate Mailer – Shortlisted (Gmail) – Sends the onboarding email directly to the candidate.

## Rejected Path
🙏 Polite Rejection + Learning Plan (LLM Chain) – GPT-4o generates a professional rejection email including:
- Empathetic rejection message
- Constructive feedback on skill gaps
- Learning resources to improve for future opportunities
📧 Candidate Mailer – Rejected (Gmail) – Sends the polite rejection + learning plan to the candidate.

## Prerequisites
- Google Sheets (candidate database + error log)
- Google Drive (resume storage)
- Gmail API (for sending candidate emails)
- Azure OpenAI (GPT-4o-mini model access)

## Key Benefits
 ✅ Automates candidate communication (both shortlisted & rejected)
 ✅ Delivers professional, HTML-ready emails
 ✅ Enhances candidate experience with personalized learning plans
 ✅ Prevents silent rejections by providing constructive resources
 ✅ Improves employer branding with empathetic communication
 ✅ Error resilience via logging and validation steps

## Perfect For
- Recruitment teams managing high candidate volume
- Companies looking to humanize rejections
- HR departments that want automated but personalized communication
- Organizations investing in candidate experience & employer brand


## 📊 Basic Information

- **Workflow ID:** 9140
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 154
- **Downloads:** 15
- **Created:** 2025/10/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9140)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×13)
- **googleSheets** (×2)
- **googleDrive** 
- **if** (×2)
- **extractFromFile** 
- **code** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **gmail** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
