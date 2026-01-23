## AI Recruitment Automation Pipeline – Resume Parsing, GPT-4 Evaluation, Assessment Triggers & Interview Scheduling

This end-to-end **AI-powered recruitment automation workflow** helps HR and talent acquisition teams automate the complete hiring pipeline—from **resume intake and parsing** to **GPT-4-based evaluation**, **TA approvals**, **assessment delivery**, and **interview scheduling**.

Built using **n8n**, this template integrates with **OpenAI GPT-4**, **Google Sheets**, **Google Drive**, **Slack**, and **SMTP** to reduce time-to-hire, improve candidate quality, and eliminate repetitive manual tasks. The workflow enables scalable, consistent, and intelligent decision-making by automating resume evaluation, semantic fit analysis, and candidate communication.

This template is ideal for **recruiters**, **TA teams**, and **founders** looking to optimize hiring for tech, sales, support, and other roles with high applicant volume.

---

### Who is this for?

- HR and TA teams handling high-volume recruitment
- Startups and SMBs looking to reduce hiring time and cost
- Hiring managers seeking to automate CV parsing and candidate evaluation

---

### What problem does this solve?

- Eliminates manual resume screening
- Sends real-time updates to TA team on assessment completion
- Automates assessments, scoring, and interview scheduling
- Keeps candidate communication consistent and timely

---

### What this workflow does

#### Smart Resume Intake Form
- Collects candidate data: name, email, phone, LinkedIn, job role, and CV (PDF).
- Custom-designed UI with branding-ready CSS.

#### PDF Resume Parsing & Storage
- CV is uploaded to a dedicated **Google Drive** folder.
- Resume text is extracted for semantic analysis.

#### AI-Based Candidate Evaluation (GPT-4 via LangChain)
- Extracts: City, Education, Job History, Skills.
- Summarizes candidate profile (100 words).
- Retrieves and summarizes job description from **Google Sheets**.
- Performs detailed evaluation:
  - ✅ Semantic fit scoring (0–100%)
  - ✅ Key matches and skill gaps
  - ✅ Soft skills extraction
  - ✅ Red flag detection (job-hopping, missing info)
  - ✅ Final score (1–10) with rationale

#### Google Sheets Integration
- Logs and updates candidate data at each stage:
  `CV Submitted → Scored → Shortlisted → Assessment Sent → Interview Scheduled → Rejected`

#### TA Approval via Email (Send & Wait)
- TA receives evaluation summary and gives one-click **approve/reject**.
- ✅ Approved → Status: Resume Selected  
- ❌ Rejected → Status: Resume Rejected

#### Assessment Trigger (Post Approval)
- Sends assessment link to shortlisted candidates.
- Notifies TA via **Slack and Email** when assessment is submitted.

#### Interview Scheduling
- Sends **Calendly link** for self-scheduled interview booking.
- Candidate receives detailed next-step instructions.

#### Status-Based Candidate Emails
- Automatically sends:
  - ✔️ Shortlisting confirmation + interview setup
  - ❌ Rejection email with branded message

---

### Business Benefits

- **Save 80%+ time** spent on manual resume reviews and coordination
- **Reduce cost-per-hire** by eliminating manual tasks
- **Improve hiring accuracy** with structured, AI-based decision-making
- **Scalable recruitment** for 100s of candidates per week
- **Enhance candidate experience** with instant status updates
- **Centralize data** in Google Sheets for full team visibility

---

### 🔧 Setup Instructions

#### 1. Google Service Account Setup (One-Time)

Before using Google Sheets or Google Drive in n8n:

- Go to [Google Cloud Console](https://console.cloud.google.com/).
- Create a **Service Account** under your project.
- Enable these APIs:
  - Google Sheets API
  - Google Drive API
- Download the **JSON credentials** for the service account.
- IMPORTANT:  
  Share your target Google Sheets and Docs with the **service account email**  
  (e.g., `your-service-account@your-project.iam.gserviceaccount.com`).

---

#### Add Applicant's Details to Google Sheet

- **Document**: Select the `Profiles` Google Sheet document.
- **Sheet**: Select the `Applicant's Details` sheet.
- **Fields to Map**:
  - `EMAIL`: `{{ $('On form submission').item.json.Email }}`
  - `DATE`: `{{ $now.format('dd-MM-yyyy') }}`
  - `NAME`: `{{ $('On form submission').item.json.Name }}`
  - `LINKEDIN URL`: `{{ $('On form submission').item.json["LinkedIn Profile URL"] }}`
  - `JOB PROFILE`: `{{ $('On form submission').item.json["Job Openings"] }}`
  - `STATUS`: `CV SUBMITTED`
  - `LAST UPDATED DATE`: `{{ $now.format('dd-MM-yyyy hh:mm:ss') }}`

---

#### Extract Applicant's Resume Text

- **Text**:  
  `{{ $('Extract from File').item.json.text }}`

---

#### Get Job Description from Google Sheet

- **Document**: `Profiles`
- **Sheet**: `Job Openings`
- **Filter**:
- **Column**: `Job Profile`
- **Value**: `{{ $('On form submission').item.json["Job Openings"] }}`

---

#### Save Evaluation Results in Google Sheets

- **Document**: `Profiles`
- **Sheet**: `Applicant's Details`
- **Column Match On**: `EMAIL`
- **Fields to Map**:
- `EMAIL`: `{{ $('On form submission').item.json.Email }}`
- `CITY`: `{{ $('Applicant\'s Details').item.json.output.City }}`
- `EDUCATIONAL`: `{{ $('Applicant\'s Details').item.json.output["Educational Qualification"] }}`
- `JOB HISTORY`: `{{ $('Applicant\'s Details').item.json.output["Job History"] }}`
- `SKILLS`: `{{ $('Applicant\'s Details').item.json.output.Skills }}`
- `SUMMARIZE`: `{{ $('Summarize Applicant\'s Profile').item.json.response.text }}`
- `SEMANTIC FIT SCORE`: `{{ $json.output.semantic_fit.score }}`
- `KEY MATCHES`: `{{ $json.output.semantic_fit.key_matches.toJsonString() }}`
- `KEY GAPS`: `{{ $json.output.semantic_fit.key_gaps.toJsonString() }}`
- `SEMANTIC FIT CONSIDERATION`: `{{ $json.output.semantic_fit.consideration }}`
- `SOFT SKILLS`: `{{ $json.output.soft_skills.toJsonString() }}`
- `EXPERIENCE GAP DETECTED`: `{{ $json.output.experience_analysis.experience_gap_detected }}`
- `OVER QUALIFICATION DETECTED`: `{{ $json.output.experience_analysis.overqualification_detected }}`
- `EXPERIENCE ANALYSIS CONSIDERATION`: `{{ $json.output.experience_analysis.consideration }}`
- `RED FLAGS ISSUES DETECTED`: `{{ $json.output.red_flags.issues_detected.toJsonString() }}`
- `RED FLAGS CONSIDERATION`: `{{ $json.output.red_flags.consideration }}`
- `VOTE`: `{{ $json.output.overall_evaluation.final_vote }}`
- `FINAL CONSIDERATION`: `{{ $json.output.overall_evaluation.consideration }}`
- `STATUS`: `CV SCORED`
- `LAST UPDATED DATE`: `{{ $now.format('dd-MM-yyyy hh:mm:ss') }}`

---

### Update Applicant Statuses

#### Resume Selected

- **Document**: `Profiles`
- **Sheet**: `Applicant's Details`
- **Column Match On**: `EMAIL`
- **Update**:
- `STATUS`: `RESUME SELECTED`
- `LAST UPDATED DATE`: `{{ $now.format('dd-MM-yyyy hh:mm:ss') }}`

#### Resume Rejected

- **Update**:
- `STATUS`: `RESUME REJECTED`
- `LAST UPDATED DATE`: `{{ $now.format('dd-MM-yyyy hh:mm:ss') }}`

#### Assessment Sent

- **Email**: `{{ $('Loop to Send Assessment Link to Each Candidate').item.json.EMAIL }}`
- **Update**:
- `STATUS`: `ASSESSMENT SENT`
- `LAST UPDATED DATE`: `{{ $now.format('dd-MM-yyyy hh:mm:ss') }}`

#### Assessment Submitted

- **Email**: `{{ $json["Enter Your Email Address"] }}`
- **Update**:
- `STATUS`: `ASSESSMENT SUBMITTED`
- `LAST UPDATED DATE`: `{{ $now.format('dd-MM-yyyy hh:mm:ss') }}`

#### Interview Booked

- **Email**: `{{ $json.payload.email }}`
- **Update**:
- `STATUS`: `INTERVIEW BOOKED`
- `LAST UPDATED DATE`: `{{ $now.format('dd-MM-yyyy hh:mm:ss') }}`

---

#### Fetch Applicants with Specific Status

#### Status: `RESUME SELECTED`

- **Document**: `Profiles`
- **Sheet**: `Applicant's Details`
- **Filter**:
- **Column**: `STATUS`
- **Value**: `RESUME SELECTED`

---

#### Get Assessment Form URL from Job Profile

- **Document**: `Profiles`
- **Sheet**: `Job Openings`
- **Filter**:
- **Column**: `Job Profile`
- **Value**: `{{ $json["JOB PROFILE"] }}`

---

#### Trigger on Applicant Status Update

- **Document**: `Profiles`
- **Sheet**: `Applicant's Details`
- **Trigger Settings**:
- **Columns to Watch**: `STATUS`

---

#### ⚠️ Important Notes

- Always use **“Select Document from List”** instead of manually pasting the sheet/document ID.
- Share your Sheets/Docs with the **Google Service Account email** for proper access.
- Keep your date formats consistent using `{{ $now.format('dd-MM-yyyy hh:mm:ss') }}`.

---

1. Add credentials for:
   - Google Drive
   - Google Sheets
   - SMTP (for emails)
   - OpenAI API Key (GPT-4)
2. Replace placeholders:
   - Google Sheet & Folder IDs
   - Calendly Link
   - Assessment Link
3. (Optional) Customize GPT-4 prompts for domain-specific scoring
4. (Optional) Use your Slack webhook for TA notifications

---

### 🛠️ Tools & Integrations

- **Form Trigger** – Candidate form with file upload  
- **Google Drive + Extract PDF** – CV parsing  
- **Google Sheets** – Database for all applicant statuses  
- **LangChain GPT-4 Nodes** – AI profile + job analysis  
- **Email Send & Send & Wait** – Candidate/TA communication  
- **IF Node** – Logic for approve/reject  
- **Slack Integration** – TA notification  
- **Calendly Link** – Interview scheduling

---

`AI resume screening`, `GPT-4 recruitment workflow`, `automated hiring pipeline`, `semantic fit evaluation`, `LangChain for HR`, `resume parsing automation`, `AI in talent acquisition`, `assessment workflow automation`, `interview scheduling automation`, `candidate shortlisting automation`, `OpenAI HR integration`, `Google Sheets recruitment tracker`, `n8n HR automation template`, `self-scheduling interviews with Calendly`, `Slack notifications in recruitment`

