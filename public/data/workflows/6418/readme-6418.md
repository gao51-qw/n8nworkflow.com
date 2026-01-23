# Automate CV screening and applicant scoring from Gmail to Airtable with AI

> ### How It Works
1. **Trigger**
   Watches for new emails with attachments in a Gmail label.
2. **Extract Data**
   * Extracts job code from the email subject (e.g., `FN-001`)
   * Extracts raw text from the attached CV (PDF)
3. **AI Parsing**
   Uses Google Gemini to parse the CV and extract:
   * Name
   * Email
   * Years of experience
   * Skills
4. **Job Lookup**
   Uses the extracted job code to retrieve job details from Airtable.
5. **AI Scoring**
   * Compares applicant data with job requirements
   * Scores from 1–100
   * Generates a brief reasoning summary (in Bahasa Indonesia)
6. **Log to Airtable**
   Saves applicant data, score, and AI notes to the "Applications" table.

### Setup Instructions
1. **Prepare Airtable Base**
   * **Job Posts Table**
     * Columns: Job Code, Job Title, Required Skills, Minimum Experience, Job Description
   * **Applications Table**
     * Columns: Applicant Name, Email, Score, Notes
     * Include a linked field to the Job Posts table
2. **Add Credentials in n8n**
   * Gmail
   * Google AI (Gemini)
   * Airtable
3. **Configure Nodes**
   * **Trigger**: Set Gmail filter (e.g., `label:job-applications`)
   * **Extract Job Code**: Verify regex format, default is `([A-Z]{2}-\d{3})`
   * **Airtable Nodes**: Select your base and table in:
     * "Find Job Post..."
     * "Save Applicant..."
4. **Activate Workflow**
   * Save and enable the workflow
   * New applications will be processed automatically


## 📊 Basic Information

- **Workflow ID:** 6418
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 487
- **Downloads:** 48
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6418)

## 👤 Author

- **Name:** Fahmi Fahreza
- **Username:** @fahmiiireza

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **gmailTrigger** 
- **set** 
- **airtable** (×2)
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **merge** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
