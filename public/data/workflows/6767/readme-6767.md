# Generate tailored interview questions with GPT-4 based on CV, JD, and round

> # 🤖 Smart Interview Assistant: Tailored Questions Based on CV, JD, and Round
### Watch the demo video below:
[![Watch the video](https://s3.ap-southeast-1.amazonaws.com/automatewith.me/smart-interview-prep-assistant-automate-candidate-reports-and-custom-questions-with-n8n-ai.jpg)](https://youtu.be/-KHze-bRpqQ)
## 📌 Who’s it for
This workflow is designed for:
- **Recruiters** and **Talent Acquisition Specialists** who want to automate candidate interview prep.
- **Hiring Managers** conducting multiple interviews and needing personalized question sets.
- **Technical Interviewers** who want to save time and be well-prepared with relevant questions.

## ⚙️ How it works / What it does
The Smart Interview Assistant automates the interview preparation process in a few clicks:

1. Accepts:
   - **Multiple resumes (PDFs)**
   - **Selected job role**
   - **Chosen interview round**
2. Extracts structured data from:
   - The candidate’s **CV**
   - The corresponding **Job Description (JD)**
3. Uses **GPT-4** to analyze:
   - Candidate profile
   - Role requirements
   - Interview round context
4. Generates:
   - **Tailored interview questions**
   - **Expected answers**
   - **A summarized interview prep report**
5. Sends the report directly to the **hiring team via email (SMTP)**

## 📁 Google Drive Structure

```
📂 Root Folder
├── 📁 jd/                          # Stores all job descriptions in PDF format
│   ├── Backend_Engineer.pdf
│   ├── Azure_DevOps_Lead.pdf
│   └── ...
└── 📄 Positions (Google Sheet)    # Maps Job Role ↔ JD File Link
```

📝 **Sample Mapping Sheet**:  
[Positions Sheet](https://docs.google.com/spreadsheets/d/1pW0muHp1NXwh2GiRvGVwGGRYCkcMR7z8NyS9wvSPYjs/edit?usp=sharing)

**Columns:**
- `Job Role`
- `Job Description File URL` (pointing to PDF in `jd/` folder)

## 🛠️ How to Set Up

### Step 1: Configure API Integrations
- ✅ Connect your **OpenAI GPT-4 API Key**
- ✅ Enable **Google Cloud APIs**:
  - Google Sheets API (to read job roles)
  - Google Drive API (to access CV and JD files)
- ✅ Set up **SMTP** credentials (for email delivery)

### Step 2: Prepare Google Drive & Mapping Sheet

1. Create a root folder on Google Drive  
2. Inside the root folder:
   - Create a folder named `/jd/` and upload all **job descriptions (PDFs)**  
3. Create a **Google Sheet** named `Positions` with the following format:

```
| Job Role                     | Job Description File URL                   |
|-----------------------------|--------------------------------------------|
| Azure DevOps Engineer        | https://drive.google.com/xxx/jd1.pdf       |
| Full-Stack Developer (.NET)  | https://drive.google.com/xxx/jd2.pdf       |
```

### Step 3: Build the Application Form

Use any form tool (e.g., Typeform, Tally, or custom HTML) that collects:
- 📎 Resume file (PDF)
- 🧾 Job Role (dropdown)
- 🔄 Interview Round (dropdown)

### Step 4: Resume & JD Extraction

- 🔍 Use `Extract from PDF` to parse the resume content
- 📄 Retrieve the JD link from the `Positions` sheet based on the selected Job Role
- 🔗 Use `Download file` to pull the PDF for processing

### Step 5: Analyze with GPT-4

- Run both Resume and JD through a **Profile Analyzer Agent** (GPT-4 with JSON output)
- Merge results
- Add manual input or mapping for the **Interview Round metadata**

### Step 6: Generate Interview Report

- Use a second GPT-4 agent (e.g., `HR Expert Agent`) to:
  - Generate 6–8 tailored interview questions
  - Include expected answers and rationale

### Step 7: Deliver Final Report

- Format the content as:
  - 📄 PDF (optional)
  - 📨 Email body
- Send the report to the **recruiter, hiring manager, or interviewer** via **SMTP**

## ✅ Requirements

- 🔑 **OpenAI GPT-4 API Key**
- 📁 Google Drive (for resume and JD storage)
- 📊 Google Sheet (job role mapping)
- 📬 SMTP credentials (host, username, password)
- 🧰 n8n self-hosted or cloud instance with:
  - PDF Parser
  - Google Sheets node
  - HTTP Download node
  - Email node

## ✏️ How to Customize the Workflow

| Part                        | Customization Options                                      |
|----------------------------|-------------------------------------------------------------|
| **Form UI**                | Modify the design, dropdown options, or input validations   |
| **Job Description Source** | Replace Google Sheet with Notion, Airtable, or database     |
| **Interview Metadata**     | Add job level, region, or language preference               |
| **AI Prompt Tuning**       | Adjust prompt phrasing or temperature in GPT nodes          |
| **Report Format**          | Generate PDF instead of email body using PDF node           |
| **Delivery Method**        | Add internal HR portal webhook or generate downloadable link |

## 📊 Basic Information

- **Workflow ID:** 6767
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 902
- **Downloads:** 90
- **Created:** 2025/8/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6767)

## 👤 Author

- **Name:** Trung Tran
- **Username:** @trungtran

## 🏷️ Categories

- HR
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×10)
- **formTrigger** 
- **extractFromFile** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **googleSheets** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 
- **merge** 
- **code** (×2)
- **emailSend** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
