# Automated candidate screening & response using GPT-4, Mistral OCR and Slack notifications

> ## 📊 Description
Streamline your HR recruitment process with this intelligent automation that reads candidate emails and resumes, analyzes them using GPT-4, and automatically shortlists or rejects applicants based on skill and experience match. 📩🤖
 The workflow updates your HR Google Sheet with detailed AI evaluations, notifies recruiters on Slack about high-scoring candidates, and sends personalized shortlist or rejection emails to applicants — all in one seamless flow. 🚀

## What This Template Does
1️⃣ Trigger – Monitors the HR Gmail inbox for new job applications with attachments. 📬
 2️⃣ Extracts Resume Data – Uploads attached resumes to Mistral OCR to extract text for analysis. 📄
 3️⃣ Combines Inputs – Merges candidate email data and resume content for complete context. 🔗
 4️⃣ AI Evaluation – GPT-4 analyzes the candidate’s qualifications against job requirements in a connected Google Sheet. 🧠
 5️⃣ Scoring & Recommendation – Generates a structured JSON output with job fit summary, skill match, AI score, and recommendation (Shortlist or Reject). 📊
 6️⃣ Record Update – Logs AI evaluation results in a Google Sheet for centralized tracking. 📋
 7️⃣ Communication – Sends professional shortlist or rejection emails to applicants via Gmail. 💌
 8️⃣ Team Alert – Notifies HR on Slack when a high-scoring candidate is detected. 🔔

## Key Benefits
✅ Saves hours of manual resume screening and sorting
 ✅ Ensures consistent, unbiased candidate evaluation
 ✅ Provides detailed AI-driven insights for every applicant
 ✅ Automates communication and record-keeping
 ✅ Improves HR productivity and response speed

## Features
Gmail trigger for new candidate emails
Resume text extraction via Mistral OCR API
GPT-4–powered resume and email evaluation
Integration with Google Sheets for HR requirement mapping
Slack notifications for shortlisted candidates
Automated shortlist/rejection emails with custom templates
Structured AI output for analytics and reporting

## Requirements
Gmail OAuth2 credentials for inbox and email automation
Google Sheets OAuth2 credentials with edit access
OpenAI API key (GPT-4 or GPT-4o-mini)
Slack Bot token with chat:write permissions
Mistral AI OCR API key for resume text extraction

## Target Audience
- HR and recruitment teams managing large applicant volumes 🧑‍💼
- Talent acquisition managers looking for AI-driven screening 🤖
- Organizations standardizing hiring communication 💬
- Agencies building automated candidate evaluation systems 📈

## Step-by-Step Setup Instructions
1️⃣ Connect your Gmail account and configure the inbox trigger.
 2️⃣ Add Mistral API credentials for resume OCR extraction.
 3️⃣ Set up your Google Sheet with job role requirements and access credentials.
 4️⃣ Add OpenAI credentials (GPT-4 or GPT-4o-mini) for AI evaluation.
 5️⃣ Configure Slack credentials and HR channel ID for alerts.
 6️⃣ Test with a sample application to ensure correct data mapping.
 7️⃣ Activate the workflow to start automated recruitment processing. ✅


## 📊 Basic Information

- **Workflow ID:** 10559
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 50
- **Downloads:** 5
- **Created:** 2025/11/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10559)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **gmail** (×2)
- **gmailTrigger** 
- **if** (×2)
- **httpRequest** (×3)
- **set** (×3)
- **merge** 
- **googleSheetsTool** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleSheets** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
