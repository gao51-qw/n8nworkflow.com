# Automate Resume Analysis & Candidate Screening with JotForm, Azure OCR, GPT-4.1, Zoho CRM

> ## Who’s It For
This workflow is ideal for HR professionals, recruiters, and small businesses looking to streamline resume screening with AI-powered analysis and CRM integration.

## What It Does
This template automates resume processing by:
- Capturing resume submissions (name, email, PDF) via JotForm.
- Converting PDFs to images using PDF.co API.
- Extracting text with Azure Vision OCR.
- Analyzing resumes with GPT-4.1 for strengths, improvements, and a score (1–100).
- Storing submission data in PostgreSQL.
- Adding high-scoring resumes (&gt;85) to Zoho CRM and sending congratulatory emails.
- Sending feedback emails for lower-scoring resumes.

## How to Set Up
1. **Configure JotForm Trigger**: Add your JotForm API key and form ID (e.g., 252434958811059).
2. **Set Up PostgreSQL**: Create a `resume` table with columns: `id` (SERIAL PRIMARY KEY), `given_name` (VARCHAR), `given_email` (VARCHAR), `resume_loc` (VARCHAR).
3. **Add Credentials**: Store API keys for PDF.co, Azure Vision OCR, OpenAI, Zoho CRM, and Gmail in n8n’s credential system.
4. **Test the Workflow**: Submit a test resume via JotForm and verify data flow through each node.

## Requirements
- n8n instance (cloud or self-hosted).
- Accounts with JotForm, PDF.co, Azure Vision, OpenAI, Zoho CRM, and Gmail.
- PostgreSQL database.

## How to Customize
- Adjust the GPT-4.1 prompt for specific job roles.
- Modify the score threshold (currently 85) in the "if score &gt; 58?" node.
- Update email templates for personalized messaging.

## PostgreSQL Table Structure
&gt; Node to create table included in workflow.

## 📊 Basic Information

- **Workflow ID:** 9540
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 103
- **Downloads:** 10
- **Created:** 2025/10/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9540)

## 👤 Author

- **Name:** moosa
- **Username:** @moosa

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **jotFormTrigger** 
- **postgres** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** (×3)
- **if** (×2)
- **n8n-nodes-pdfco.PDFco Api** 
- **code** (×2)
- **wait** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **set** 
- **gmail** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
