# AI-powered interview preparation system using local LLM for campus placements

> ## Overview
An AI-powered, end-to-end interview preparation and mentoring automation system for campus placements. It enables placement cells to generate hyper-personalized 4-page interview preparation PDFs for shortlisted students, by combining job descriptions (JDs), candidate data, and LLMs via LangChain and Ollama.

Note: This template requires self-hosted n8n to run community nodes like LangChain and Ollama.

## What This Workflow Does
Accepts a CSV of shortlisted students and a JD via form upload

Analyzes student profile vs JD using Ollama LLM via LangChain

Generates personalized interview preparation PDFs

Sends the PDF to each student via email

Logs all data in Google Sheets and prevents duplicate processing

## Workflow Preview
📷 Please add a workflow screenshot here showing the main nodes and flow

## Step-by-Step Flow
## 1. Form Submission
CSV of shortlisted students + JD + company name is submitted via HTTP Request form trigger.

## 2. Data Parsing and Google Sheet Logging
CSV parsed → structured rows added to Google Sheet named with company + batch.

## 3. Candidate Filtering
Only students with N8N_Agent = Not Generated are selected to avoid reprocessing.

## 4. AI-Powered Report Generation
LangChain agent (via Ollama + Gemini Search Tool) generates a 4-page Markdown report:

Page 1: Profile Summary, Skill Gap Analysis, Company Insights

Page 2: 15–20 Personalized Interview Questions

Page 3: 5 Group Discussion Topics + Strategy

Page 4: Custom Preparation Plan + Suggested Resources

## 5. PDF Creation
Markdown → Stylish PDF via APITemplate.io

## 6. Email Delivery
Each student receives a personalized email with the attached report.

## 7. Google Sheet Status Update
Marks the student’s row as “Generated” in N8N_Agent column.

## Prerequisites
Self-hosted n8n with Community Nodes enabled

Local or Docker-hosted Ollama with LLaMA3.2 or equivalent model

Activated LangChain and Gemini Search Tool nodes

APITemplate.io API Key

Connected Google Sheets account

SMTP setup or Gmail node for email delivery

## Customization Tips
Replace the LLM prompt in the LangChain node with your own tone/style

Modify the PDF template on APITemplate.io to reflect your institution branding

Update the email copy for formal or informal tones

Add new filters (e.g., minimum CGPA, branch) for student selection



## 📊 Basic Information

- **Workflow ID:** 4761
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 255
- **Downloads:** 25
- **Created:** 2025/6/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4761)

## 👤 Author

- **Name:** Aashit Sharma
- **Username:** @aashitsharma

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **merge** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOllama** (×2)
- **n8n-nodes-gemini-search.geminiSearchToolTool** 
- **formTrigger** 
- **googleSheets** (×4)
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **code** 
- **apiTemplateIo** 
- **emailSend** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
