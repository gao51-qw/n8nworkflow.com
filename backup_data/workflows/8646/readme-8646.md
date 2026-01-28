# Automated CV screening and scoring with AI, Gmail, GoogleDrive & Airtable

> # **🚀 HR Resume Screening Workflow — Smart Hiring on Autopilot 🤖**

## 🎯 **Overview:**

"This workflow builds an AI-powered resume screening system inside n8n. It begins with Gmail and Form triggers that capture incoming resumes, then uploads each file to Google Drive for storage. The resume is downloaded and converted into plain text, where two branches run in parallel: one extracts structured contact details, and the other uses an AI agent to summarize education, job history, and skills while assigning a suitability score. A cleanup step normalizes the data before merging both outputs, and the final candidate record is saved into Google Sheets and Airtable, giving recruiters a centralized dashboard to identify top talent quickly and consistently.”

## 🔑 **Prerequisites:**

To run this workflow successfully, you’ll need:

- **Gmail OAuth** → to read incoming resumes.
- **Google Drive OAuth** → to upload and download resume files.
- **Google Sheets OAuth** → to save structured candidate records.
- **Airtable Personal Access Token** → for dashboards and record-keeping.
- **OpenAI / OpenRouter API Key** → to run the AI summarizer and evaluator.

## ⚙️ **Setup Instructions:**

1. **Import the Workflow**
    - Clone or import the workflow into your n8n instance.
2. **Add Credentials**
    - Go to **n8n → Credentials** and connect Gmail, Google Drive, Google Sheets, Airtable, and OpenRouter/OpenAI.
3. **Configure Key Nodes**
    - **Gmail Trigger** → Update `filters.q` with the job title you are hiring for (e.g., `"Senior Software Engineer"`).
    - **Google Drive Upload** → Set the `folderId` where resumes will be stored.
    - **Google Sheets Node** → Link to your HR spreadsheet (e.g., “Candidates 2025”).
    - **Airtable Node** → Select the correct base & table schema for candidate records.
4. **Test the Workflow**
    - Send a test resume (via email or form).
    - Check Google Sheets & Airtable for structured candidate data.
5. **Go Live**
    - Enable the workflow. It will now run continuously and process new resumes as they arrive.

# **📊 End-to-End Workflow Walkthrough:**

### 🟢 **Section 1 – Entry & Intake**

**Nodes:**

- 📧 **Gmail Trigger** → Polls inbox every minute, captures job application emails, and downloads resume attachments (`CV0, CV1, …`).
- 🌐 **Form Trigger** → Alternate entry for resumes submitted via a careers page or job portal.

✅ **Quick Understanding:** Think of this section as the **front desk of recruitment** - resumes received either by email or online form, and the system immediately grabs them for processing.

---

### 📂 **Section 2 – File Management**

**Nodes:**

- ☁️ **Upload File (Google Drive)** → Saves the incoming resume into a structured Google Drive folder, naming it after the applicant.
- ⬇️ **Download File (Google Drive)** → Retrieves the stored resume file for further processing.
- 🔎 **Extract from File** → Converts the resume (PDF/DOC) into plain text so the AI and extractors can work with it.

✅ **Quick Understanding:** This is your **digital filing room.** Every resume is safely stored, then converted into a readable format for the hiring system.

---

### 🤖 **Section 3 – AI Processing (Parallel Analysis)**

**Nodes:**

- 🧾 **Information Extractor** → Pulls structured contact information (candidate name, candidate email and candidate phone number) using regex validation and schema rules.
- 🤖 **AI Agent (LangChain + OpenRouter)** → Reads the full CV and outputs:
    - 🎓 Educational Qualifications
    - 💼 Job History
    - 🛠 Skills Set
    - 📊 Candidate Evaluation Score (1–10)
    - 📝 Justification for the score

✅ **Quick Understanding:** Imagine having two assistants working in parallel, one quickly extracts basic contact info, while the other deeply reviews the CV and gives an evaluation.

---

### 🛠️ **Section 4 – Data Cleanup & Merging**

**Nodes:**

- ✏️ **Edit Fields** → Standardizes the AI Agent’s output into a consistent field (`output`).
- 🛠 **Code (JS Parsing & Cleanup)** → Converts the AI’s free-text summary into clean JSON fields (`education`, `jobHistory`, `skills`, `score`, `justification`).
- 🔗 **Merge** → Combines the structured contact info with the AI’s evaluation into a single candidate record.

✅ **Quick Understanding:** This is like the **data cleaning and reporting team,** making sure all details are neat, structured, and merged into one complete candidate profile.

---

### 📊 **Section 5 – Persistence & Dashboards**

**Nodes:**

- 📑 **Google Sheets (Append Row)** → Saves candidate details into a Google Sheet for quick team access.
- 🗄 **Airtable (Create Record)** → Stores the same structured data into Airtable, enabling dashboards, analytics, and ATS-like tracking.

✅ **Quick Understanding:** Think of this as your **HR dashboard and database.** Every candidate record is logged in both Google Sheets and Airtable, ready for filtering, reporting, or further action.

---

## 📊 **Workflow Overview Table:**

| **Section** | **Key Roles / Nodes** | **Model / Service** | **Purpose** | **Benefit** |
| --- | --- | --- | --- | --- |
| 📥 **Entry & Intake** | Gmail Trigger, Form Trigger | Gmail API / Webhook | Capture resumes from email or forms | Resumes collected instantly from multiple sources |
| 📂 **File Management** | Google Drive Upload, Google Drive Download, Extract from File | Google Drive + n8n Extract | Store resumes & convert to plain text | Centralized storage + text extraction for processing |
| 🤖 **AI Processing** | Information Extractor, AI Agent (LangChain + OpenRouter) | Regex + OpenRouter AI {gpt-oss-20b (free)} | Extract contact info + AI CV analysis | Candidate details + score + justification generated automatically |
| 🛠 **Data Cleanup & Merge** | Edit Fields, Code (JS Parsing & Cleanup), Merge | n8n native + Regex Parsing | Standardize and merge outputs | Clean, structured JSON record with all candidate info |
| 📊 **Persistence Layer** | Google Sheets Append Row, Airtable Create Record | Google Sheets + Airtable APIs | Store structured candidate data | HR dashboards & ATS-ready records for easy review and analytics |
| 🔄 **Execution Flow** | All connected | Gmail + Drive + Sheets + Airtable + AI | End-to-end automation | Automated resume → structured record → recruiter dashboards |

---

## 📂 **Workflow Output Overview:**

Each candidate’s data is standardized into the following fields:

- Candidate Name
- Candidate Email
- Contact Number
- Educational Qualifications
- Job History
- Skills Set
- AI Score (1–10)
- Justification

📌 Example (Google Sheet row):

![HR_Resume_Screening_Excel_Row.png](fileId:2670)

## **📊 Benefits of This Workflow at a Glance:**

- **⏱️ Lightning-Fast Screening** → Processes hundreds of resumes in minutes instead of hours.
- **🤖 AI-Powered Evaluation** → Automatically summarizes candidate education, work history, skills, and gives a suitability score (1–10) with justification.
- **📂 Centralized Storage** → Every resume is securely saved in Google Drive for easy access and record-keeping.
- **📊 Data-Ready Outputs** → Structured candidate profiles go straight into Google Sheets and Airtable, ready for dashboards and analytics.
- **✅ Consistency & Fairness** → Standardized AI scoring ensures every candidate is evaluated on the same criteria, reducing human bias.
- **🛠️ Flexible Intake** → Works with both Gmail (email applications) and Form submissions (job portals or career pages).
- **🚀 Recruiter Productivity Boost** → Frees HR teams from manual extraction and data entry, allowing them to focus on interviewing and hiring the best talent.

## **👉 Practical HR Use Case:**

**“Screen resumes for a Senior Software Engineer role and shortlist top candidates.”**

- Gmail Trigger → Captures incoming job applications with CVs attached.
- Google Drive → Stores resumes for record-keeping.
- Extract from File → Converts CVs into plain text.
- Information Extractor → Pulls candidate name, email, and phone number.
- AI Agent → Summarizes education, job history, skills, and assigns a suitability score (1–10).
- Code & Merge → Cleans and combines outputs into a structured candidate profile.
- Google Sheets → Logs candidate data for quick HR review.
- Airtable → Builds dashboards to filter and identify top-scoring candidates.

✅ **Result:** HR instantly sees structured candidate records, filters by score, and focuses interviews on the best talent.

## 📊 Basic Information

- **Workflow ID:** 8646
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 440
- **Downloads:** 44
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8646)

## 👤 Author

- **Name:** usamaahmed
- **Username:** @usamaahmed

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **googleDrive** (×2)
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 
- **code** 
- **merge** 
- **googleSheets** 
- **airtable** 
- **formTrigger** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
