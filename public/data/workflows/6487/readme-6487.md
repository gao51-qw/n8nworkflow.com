# Generate medical reports from emails with Gemini AI & Google Workspace

> 
# **📝 Description:** 
This template is designed for healthcare providers, sales reps, and medical tourism companies who need to process diagnosis emails efficiently. It automates the full flow from email to report delivery.

When a new diagnosis email arrives:

The email content is captured and parsed by an AI agent (Gemini or any customizable LLM).

Patient and medical data is extracted into structured fields (e.g., name, phone, diagnosis).

Data is logged into a Google Sheet for records.

A Google Docs medical report is generated using a predefined template.

The report is exported as PDF and emailed to stakeholders (e.g., managers or sales team).

This template supports custom AI models, customizable Google Docs templates, and flexible filtering based on sender email.

## 🛠️ Features
Gmail email trigger (customizable sender filter)

AI-powered diagnosis parsing using Gemini (easily switchable to OpenAI or others)

Google Sheets log

Google Docs templated report (auto-filled)

PDF export and email sending

Full flexibility & customization

## 🔧 Requirements
Before using this template, you'll need:

A connected Gmail account (to receive diagnosis emails)

A valid Google Sheets integration (create your own sheet with the desired columns)

A Google Docs template document that includes placeholder tags like {{patient_name}}, {{date}}, etc.

A Gemini or OpenAI API connection for the AI agent (fully customizable)

Note: You must replace all Google Drive, Docs, and Sheets references with your own documents. This template does not grant access to the original creator's files.

## ⚙️ Customization Tips
In the Gmail Trigger node, change the sender filter to match the doctor’s email you want to process.

Modify the AI prompt if your use case needs different extracted fields.

Replace the Google Docs template link with your own file and customize its structure and variables.

Change recipient email addresses in the final Gmail node to notify the correct team members.

Optional: Add fallback flows or error branches for when AI fails or input is malformed.

## 🧠 Use Case Examples
Medical tourism agencies auto-generating patient reports for incoming diagnosis summaries

Clinics storing structured data from messy email inputs

Sales teams instantly notified of new leads with completed medical summaries



## 📊 Basic Information

- **Workflow ID:** 6487
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 596
- **Downloads:** 59
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6487)

## 👤 Author

- **Name:** Abdullah Alshiekh
- **Username:** @abdullah01

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **set** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **code** (×2)
- **googleDocs** 
- **googleDrive** 
- **gmail** 
- **httpRequest** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
