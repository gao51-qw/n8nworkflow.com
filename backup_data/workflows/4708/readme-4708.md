# 📑 Anonymize & reformat CVs with Gemini AI, Google Sheets & Apps Script

> ## 🧾 CV Anonymization & Reformatting Automation

An advanced N8N workflow to anonymize and reformat resumes for internal or external distribution

### 🔍 Overview
This template **automates the anonymization, structuring, and reformatting of CVs/resumes** using a combination of AI, PDF parsing, and Google Apps Script. It’s ideal for companies or teams that need to showcase their workforce—while ensuring candidate privacy and presenting the information in a standardized format.

### 👥 Who it's for
- HR departments
- Consulting agencies
- Project managers needing anonymized candidate profiles
- Any enterprise team required to share CVs in a consistent, brand-compliant, and privacy-conscious way

### ⚙️ What it does
1. Watches a Folder for new PDFs (CVs)
Extracts Content from the PDF
2.Uses Gemini Flash 2.0 to intelligently structure the resume content
3. Stores the structured data in a Google Sheet
4. Generates a New CV from a customizable template via Google Apps Script
5. Anonymizes Names (e.g. “John Doe” → “J. D.”)
5. (Optional) Sends or downloads the final anonymized version

### 🛠️ Setup Requirements
To use this workflow, you’ll need to configure:

- Your input/output folders
Field mappings (e.g. what to extract)
- A Google Apps Script endpoint for PDF generation
- A Google Sheet acting as your structured data database
- A Gemini API key and access (or any other LLM)

### 💡 Templates are customizable: you can define your own layout as long as the placeholders match your database field names.

### ✨ Customization Ideas
Automatically email the anonymized CV to a recipient
Use conditional logic to switch templates (e.g. for different roles or departments)
Add a second formatting layer for internal vs external audiences

## 📊 Basic Information

- **Workflow ID:** 4708
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 299
- **Downloads:** 29
- **Created:** 2025/6/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4708)

## 👤 Author

- **Name:** Louis
- **Username:** @louisdl

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **compareDatasets** 
- **googleDrive** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **splitInBatches** 
- **googleSheets** (×3)
- **code** (×2)
- **httpRequest** (×2)
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **googleDriveTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
