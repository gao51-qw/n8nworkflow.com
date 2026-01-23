# Parse resumes from Gmail to Google Sheets with Azure OpenAI GPT-4o

> **Description:**

Stop manually reviewing resumes—let AI do the heavy lifting with this n8n workflow template! Automatically capture resumes from your Gmail inbox, extract key candidate details with AI, and store structured profiles in Google Sheets—ready for your recruitment pipeline.

This automation connects directly to your email inbox, downloads attachments, archives resumes in Google Drive, extracts text from PDFs, and uses AI to identify essential fields like name, email, phone, experience, skills, and education. The parsed candidate data is then cleaned, structured, and saved in Google Sheets for easy access, filtering, and recruiting workflows.

**What This Template Does:**

 📧 Monitors Gmail inbox for resumes (attachments or subject line matches)
 📂 Automatically uploads resumes to Google Drive for safe storage
 📄 Extracts text content from PDF resumes
 🧠 Uses AI to parse resumes into structured JSON fields (name, contact, experience, skills, education)
 🔍 Cleans & validates AI output for consistency
 📊 Stores candidate details in Google Sheets (auto-update & dedupe)
 🌟 Hands-free resume management: from inbox to recruitment sheet

**Built-in Logic Ensures:**

 ✔️ Clean JSON-based AI extraction of candidate data
 ✔️ Deduplication to avoid repeated entries in Google Sheets
 ✔️ Permanent storage of resumes in Google Drive for compliance & reference
 ✔️ Ready-to-use candidate database for recruitment teams

**Requirements:**
- Gmail account with incoming resumes
- Google Drive for archiving resumes
- Google Sheets for structured candidate database
- Azure OpenAI (or compatible) account for AI-powered parsing
- n8n instance (self-hosted or cloud)

**Setup Instructions:**
- Gmail Trigger: Monitor your inbox for emails with resumes or attachments.
- Get Attachment: Download resume files from incoming emails.
- Google Drive Upload: Archive resumes in a designated Drive folder.
- Download File: Retrieve resumes from Drive for processing.
- Extract Text: Convert PDF resumes to plain text.
- AI Analysis: Use Azure OpenAI Chat Model to extract candidate details (name, contact, experience, skills, education).
- Parse & Clean Data: Format and clean the AI output for consistency.
- Google Sheets Append: Store or update candidate info in your recruitment sheet (deduplication included).
 
**Perfect For:**
- HR & recruiters managing high-volume job applications
- Startups building a candidate database without manual effort
- Agencies streamlining resume intake & qualification
- Talent acquisition teams looking for AI-powered efficiency


## 📊 Basic Information

- **Workflow ID:** 8481
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 38
- **Downloads:** 3
- **Created:** 2025/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8481)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **googleDrive** (×2)
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **gmail** 
- **extractFromFile** 
- **code** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
