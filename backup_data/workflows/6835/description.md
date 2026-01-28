# CV Extractor: Google Drive to Sheet + Slack Update for Recruiters
### Watch the demo video below:
[![Watch the video](https://s3.ap-southeast-1.amazonaws.com/automatewith.me/automation-resumes-extract-n8n-workflow.jpg)](https://www.youtube.com/watch?v=T9gnSsjYfvY)
&gt; This workflow automatically processes resumes (PDFs) uploaded or updated in a Google Drive folder. It extracts and structures the candidate’s information using AI, then updates or inserts the data into a Google Sheet, acting as a central talent database. Finally, it notifies the hiring team via Slack with a summary. Perfect for HR and TA teams, this automation eliminates the repetitive task of manually copying candidate details from CVs into spreadsheets, saving hours of admin work every week and keeping your hiring pipeline clean, fast, and up to date.
## 👤 Who’s it for
This workflow is designed for:
- **Recruiters** and **HR coordinators** who manage candidate profiles via Google Drive.
- **Talent Acquisition teams** who want to automate CV parsing, enrichment, and database updating.
- **Companies or hiring agencies** using spreadsheets for candidate tracking and CRM-like HR ops.
## ⚙️ How it works / What it does
This smart and fully automated workflow:
1. **Monitors a Google Drive folder** for any uploaded or updated resumes (PDFs).
2. **Downloads and extracts** resume content using PDF parsing.
3. **Sends the raw text to GPT-4**, which returns a structured profile (name, title, experience, skills, etc.).
4. **Verifies the profile** and transforms it into a clean, row-based format.
5. **Upserts the candidate profile** into a Google Sheet (insert or update by email).
6. **Notifies the hiring team** in Slack or email that a profile was added or updated.

This is a no-touch pipeline to keep your candidate data clean, current, and centralized.
## 🛠️ How to set up
### Step 1: Prepare your Google Drive folder
- Create a folder like `/SmartHR/cv/`
- Upload sample resumes in `.pdf` format

### Step 2: Create your Google Sheet
- Columns to include: `Email`, `FullName`, `JobTitle`, `Phone`, `Location`, `Experience`, `Education`, `Skills`, etc.
- Optional: Add conditional formatting to highlight updates

### Step 3: Connect the n8n workflow
- Use the **Google Drive Trigger**:
  - `fileCreated` → new profile uploaded
  - `fileUpdated` → existing profile modified
- Use **Google Drive (Download file)** to fetch the resume
- Use **Extract From PDF** to get raw content

### Step 4: Configure GPT-4 node
- Use the structured system prompt to extract profile information
- Use `json parser` node to ensure safe formatting for next steps

### Step 5: Transform & Save
- Use a Function node to map fields to Google Sheet columns
- Use `Append or update row` (based on email as unique key)
- Optionally send Slack or email message to notify hiring team

## ✅ Requirements

- 🔑 OpenAI GPT-4 API key
- 🟩 n8n Cloud or Self-hosted with:
  - Google Drive integration
  - Google Sheets integration
  - Email/Slack credentials (optional)
- 📄 Resume files in readable PDF format
- 📊 Google Sheet prepared with relevant headers

## ✏️ How to customize the workflow

| Part                        | Customization Options                                                                 |
|----------------------------|----------------------------------------------------------------------------------------|
| **GPT Prompt**             | Tune for different job levels or fields (e.g., engineers vs marketers)                |
| **Field Mapping**          | Update transform node to include other profile fields (LinkedIn, portfolio, etc.)     |
| **Notification**           | Switch to Microsoft Teams, Telegram, or email alerts instead of Slack                 |
| **Data Store**             | Replace Google Sheet with Airtable, Notion, or database system                        |
| **Trigger Source**         | Trigger from email attachments or webhook instead of Google Drive if needed           |
| **Output Format**          | Generate PDF profile cards or summary documents using HTML → PDF node                 |